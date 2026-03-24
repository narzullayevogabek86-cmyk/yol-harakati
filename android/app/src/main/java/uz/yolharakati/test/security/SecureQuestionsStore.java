package uz.yolharakati.test.security;

import android.content.Context;
import android.content.res.AssetManager;
import android.net.Uri;
import android.util.Base64;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.SecretKeyFactory;
import javax.crypto.AEADBadTagException;
import javax.crypto.BadPaddingException;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

public class SecureQuestionsStore {
    private static final String TABLE_NAME = "secure_questions";
    private static final int GCM_TAG_BITS = 128;
    private static final String QUIZ_MODE_STANDARD = "standard";
    private static final String QUIZ_MODE_FIFTY = "fifty";
    private static final int FIFTY_EXAM_REGULAR_TICKETS = 24;
    private static final int FIFTY_EXAM_REGULAR_QUESTIONS = 50;
    private static final int FIFTY_EXAM_LAST_TICKET_QUESTIONS = 23;
    private static final int FINAL_TICKET_PASS_CORRECT = 3;
    private static final byte[] IMAGE_MAGIC = "YHQIMGV1".getBytes(StandardCharsets.UTF_8);
    private static final String IMAGE_SECRET_NAMESPACE = "::native-image-key";
    private static final String BOOTSTRAP_STATUS_LOADING = "loading";
    private static final String BOOTSTRAP_STATUS_READY = "ready";
    private static final String BOOTSTRAP_STATUS_ERROR = "error";
    private static final String ERROR_BOOTSTRAP_FAILED = "QUIZ_BOOTSTRAP_FAILED";
    private static final String ERROR_ASSET_NOT_FOUND = "QUIZ_ASSET_NOT_FOUND";
    private static final String ERROR_DECRYPT_FAILED = "QUIZ_DECRYPT_FAILED";
    private static final String ERROR_DATA_INVALID = "QUIZ_DATA_INVALID";
    private static final long IMAGE_CACHE_TTL_MS = TimeUnit.DAYS.toMillis(7);

    private static final String[] SECRET_PARTS_B64 = new String[] {
        "WUhR",
        "Ojo=",
        "b2ZmbGluZQ==",
        "Ojo=",
        "Z3VhcmQ=",
        "Ojo=",
        "MjAyNg=="
    };

    private static final Map<String, String> ASSET_BY_LANGUAGE = new HashMap<String, String>() {{
        put("uz", "secure/questions/questions.uz.enc.json");
        put("uz_cyrl", "secure/questions/questions.uz.enc.json");
        put("kaa", "secure/questions/questions.qq.enc.json");
        put("ru", "secure/questions/questions.ru.enc.json");
        put("tg", "secure/questions/questions.tg.enc.json");
    }};

    private final Context context;
    private final YhqKeystoreKeyManager keyManager;
    private volatile SecureQuestionsDao secureQuestionsDao;
    private final Map<String, String> ticketsJsonCache = new HashMap<>();
    private final Map<String, List<TicketRecord>> quizBankCache = new HashMap<>();
    private final Map<String, String> imageUriCache = new HashMap<>();
    private final Map<String, String> imageFileNameCache = new HashMap<>();

    public SecureQuestionsStore(Context context, YhqKeystoreKeyManager keyManager) {
        this.context = context.getApplicationContext();
        this.keyManager = keyManager;
    }

    public synchronized BootstrapResult bootstrap() {
        ticketsJsonCache.clear();
        quizBankCache.clear();
        imageUriCache.clear();
        imageFileNameCache.clear();

        try {
            getSecureQuestionsDao().getSeedVersion("uz");
            purgeStaleImageCache();
            return BootstrapResult.ready();
        } catch (Exception error) {
            ticketsJsonCache.clear();
            quizBankCache.clear();
            imageUriCache.clear();
            imageFileNameCache.clear();
            return mapBootstrapFailure(error);
        }
    }

    public synchronized JSArray getCatalog(String languageCode) throws Exception {
        final List<TicketRecord> tickets = buildQuizBank(normalizeLanguage(languageCode), QUIZ_MODE_STANDARD);
        final JSArray response = new JSArray();
        for (TicketRecord ticket : tickets) {
            final JSObject ticketObject = new JSObject();
            ticketObject.put("ticketNumber", ticket.ticketNumber);
            ticketObject.put("questionCount", ticket.questions.size());
            response.put(ticketObject);
        }
        return response;
    }

    public synchronized JSObject searchQuestions(
        String languageCode,
        String query,
        Integer ticketNumber,
        int limit
    ) throws Exception {
        final List<TicketRecord> bank = buildQuizBank(normalizeLanguage(languageCode), QUIZ_MODE_STANDARD);
        final String normalizedQuery = normalizeSearchText(query);
        final String[] tokens = normalizedQuery.isEmpty() ? new String[0] : normalizedQuery.split(" ");
        final boolean hasTicketFilter = ticketNumber != null && ticketNumber > 0;
        final List<SearchResultRecord> matches = new ArrayList<>();

        for (int ticketIndex = 0; ticketIndex < bank.size(); ticketIndex += 1) {
            final TicketRecord ticket = bank.get(ticketIndex);
            if (hasTicketFilter && ticket.ticketNumber != ticketNumber) {
                continue;
            }

            for (int questionIndex = 0; questionIndex < ticket.questions.size(); questionIndex += 1) {
                final QuestionRecord questionRecord = ticket.questions.get(questionIndex);
                final String questionText = questionRecord.question.optString("question", "");
                final List<String> answers = getQuestionAnswers(questionRecord.question);
                final String searchableText = normalizeSearchText(joinSearchParts(questionText, answers));

                boolean matchesTokens = true;
                for (String token : tokens) {
                    if (!searchableText.contains(token)) {
                        matchesTokens = false;
                        break;
                    }
                }

                if (!matchesTokens) {
                    continue;
                }

                final String normalizedQuestion = normalizeSearchText(questionText);
                int score = 0;
                if (!normalizedQuery.isEmpty()) {
                    if (normalizedQuestion.startsWith(normalizedQuery)) {
                        score += 3;
                    }
                    if (normalizedQuestion.contains(normalizedQuery)) {
                        score += 2;
                    }
                    if (searchableText.contains(normalizedQuery)) {
                        score += 1;
                    }
                }
                if (hasTicketFilter) {
                    score += 2;
                }

                matches.add(new SearchResultRecord(
                    ticket.ticketNumber,
                    questionIndex,
                    questionText,
                    answers,
                    questionRecord.question.has("image") && !questionRecord.question.optString("image", "").trim().isEmpty(),
                    score
                ));
            }
        }

        Collections.sort(matches, new Comparator<SearchResultRecord>() {
            @Override
            public int compare(SearchResultRecord left, SearchResultRecord right) {
                if (right.score != left.score) {
                    return right.score - left.score;
                }
                if (left.ticketNumber != right.ticketNumber) {
                    return left.ticketNumber - right.ticketNumber;
                }
                return left.questionIndex - right.questionIndex;
            }
        });

        final int totalCount = matches.size();
        final int safeLimit = limit > 0 ? limit : totalCount;
        final JSArray results = new JSArray();
        for (int index = 0; index < Math.min(totalCount, safeLimit); index += 1) {
            final SearchResultRecord item = matches.get(index);
            final JSObject result = new JSObject();
            final JSArray answersArray = new JSArray();
            for (String answer : item.answersPreview) {
                answersArray.put(answer);
            }
            result.put("ticketNumber", item.ticketNumber);
            result.put("questionIndex", item.questionIndex);
            result.put("questionNumber", item.questionIndex + 1);
            result.put("questionText", item.questionText);
            result.put("answers", answersArray);
            result.put("hasImage", item.hasImage);
            results.put(result);
        }

        final JSObject response = new JSObject();
        response.put("ok", true);
        response.put("totalCount", totalCount);
        response.put("results", results);
        return response;
    }

    public synchronized JSArray getQuestionsByRefs(String languageCode, JSArray refs) throws Exception {
        final List<TicketRecord> standardBank = buildQuizBank(normalizeLanguage(languageCode), QUIZ_MODE_STANDARD);
        final JSArray response = new JSArray();
        if (refs == null) {
            return response;
        }

        for (int index = 0; index < refs.length(); index += 1) {
            final JSONObject ref = refs.optJSONObject(index);
            if (ref == null) {
                continue;
            }

            final int ticketNumber = ref.optInt("ticketNumber", ref.optInt("ticket", -1));
            final int questionNumber = ref.optInt("questionNumber", ref.optInt("question", -1));
            final QuestionRecord questionRecord = getStandardQuestionRecord(standardBank, ticketNumber, questionNumber);
            if (questionRecord == null) {
                continue;
            }

            final JSObject item = new JSObject();
            item.put("ticketNumber", ticketNumber);
            item.put("questionNumber", questionNumber);
            item.put("question", toSanitizedQuestion(questionRecord, true));
            response.put(item);
        }

        return response;
    }

    public synchronized JSObject getQuestion(
        String languageCode,
        String mode,
        int ticketNumber,
        int questionIndex
    ) throws Exception {
        final QuestionRecord questionRecord = getQuestionRecord(languageCode, mode, ticketNumber, questionIndex);
        if (questionRecord == null) {
            throw new IllegalArgumentException("Question not found");
        }
        return toSanitizedQuestion(questionRecord, true);
    }

    public synchronized String getImageUri(String imageRef) throws Exception {
        return resolveImageUri(normalizeImageRef(imageRef));
    }

    public synchronized JSObject submitAnswer(
        String languageCode,
        String mode,
        int ticketNumber,
        int questionIndex,
        int answerIndex
    ) throws Exception {
        final QuestionRecord questionRecord = getQuestionRecord(languageCode, mode, ticketNumber, questionIndex);
        if (questionRecord == null || questionRecord.correctAnswer == null) {
            throw new IllegalArgumentException("Invalid answer request");
        }

        final JSObject response = new JSObject();
        response.put("ok", true);
        response.put("isCorrect", answerIndex == questionRecord.correctAnswer);
        return response;
    }

    public synchronized JSObject submitQuiz(
        String languageCode,
        String mode,
        int ticketNumber,
        JSArray answers
    ) throws Exception {
        final List<TicketRecord> bank = buildQuizBank(normalizeLanguage(languageCode), normalizeQuizMode(mode));
        if (ticketNumber < 1 || ticketNumber > bank.size()) {
            throw new IllegalArgumentException("Invalid ticket");
        }

        final TicketRecord ticket = bank.get(ticketNumber - 1);
        final ExamConfig examConfig = getExamConfig(ticketNumber, bank.size(), ticket.questions.size(), mode);
        final JSArray questionResults = new JSArray();
        int correctCount = 0;

        for (int index = 0; index < ticket.questions.size(); index += 1) {
            final QuestionRecord questionRecord = ticket.questions.get(index);
            final Integer userAnswer = getAnswerAt(answers, index);
            final boolean isCorrect = userAnswer != null && questionRecord.correctAnswer != null && userAnswer.equals(questionRecord.correctAnswer);
            if (isCorrect) {
                correctCount += 1;
            }

            final JSObject result = new JSObject();
            result.put("ticket", questionRecord.sourceTicketNumber);
            result.put("question", questionRecord.sourceQuestionNumber);
            result.put("isWrong", !isCorrect);
            questionResults.put(result);
        }

        final JSObject response = new JSObject();
        response.put("ok", true);
        response.put("correct", correctCount);
        response.put("totalQuestions", examConfig.totalQuestions);
        response.put("requiredCorrect", examConfig.requiredCorrect);
        response.put("passed", correctCount >= examConfig.requiredCorrect);
        response.put("questionResults", questionResults);
        return response;
    }

    private String normalizeLanguage(String languageCode) {
        final String safe = languageCode == null ? "uz" : languageCode.trim().toLowerCase();
        return ASSET_BY_LANGUAGE.containsKey(safe) ? safe : "uz";
    }

    private String normalizeQuizMode(String mode) {
        return QUIZ_MODE_FIFTY.equals(mode) ? QUIZ_MODE_FIFTY : QUIZ_MODE_STANDARD;
    }

    private void ensureSeeded(String language, String assetPath) throws Exception {
        if (assetPath == null) {
            return;
        }

        final SecureQuestionsDao dao = getSecureQuestionsDao();
        final String encryptedJson = readAssetText(assetPath);
        final long seedVersion = computeSeedVersion(encryptedJson);
        final Long storedSeedVersion = dao.getSeedVersion(language);
        if (storedSeedVersion != null && storedSeedVersion.longValue() == seedVersion) {
            return;
        }

        final String ticketsJson = decryptPayloadToTickets(encryptedJson);
        dao.upsert(new SecureQuestionsEntity(language, ticketsJson, seedVersion));
        invalidateLanguageCaches(language);
    }

    private String getTicketsJson(String language) throws Exception {
        final String normalizedLanguage = normalizeLanguage(language);
        final String cachedJson = ticketsJsonCache.get(normalizedLanguage);
        if (cachedJson != null) {
            return cachedJson;
        }

        ensureSeeded(normalizedLanguage, ASSET_BY_LANGUAGE.get(normalizedLanguage));
        final String storedJson = getSecureQuestionsDao().getTicketsJson(normalizedLanguage);
        if (storedJson == null || storedJson.trim().isEmpty()) {
            throw new IllegalStateException("Stored questions not found");
        }

        ticketsJsonCache.put(normalizedLanguage, storedJson);
        return storedJson;
    }

    private List<TicketRecord> buildQuizBank(String languageCode, String mode) throws Exception {
        final String normalizedLanguage = normalizeLanguage(languageCode);
        final String normalizedMode = normalizeQuizMode(mode);
        final String cacheKey = buildQuizBankCacheKey(normalizedLanguage, normalizedMode);
        final List<TicketRecord> cachedBank = quizBankCache.get(cacheKey);
        if (cachedBank != null) {
            return cachedBank;
        }

        final List<TicketRecord> standardTickets = buildStandardBank(normalizedLanguage);
        if (!QUIZ_MODE_FIFTY.equals(normalizedMode)) {
            quizBankCache.put(cacheKey, standardTickets);
            return standardTickets;
        }

        final List<QuestionRecord> allQuestions = new ArrayList<>();
        for (TicketRecord ticket : standardTickets) {
            allQuestions.addAll(ticket.questions);
        }

        final List<TicketRecord> fiftyTickets = new ArrayList<>();
        int cursor = 0;
        for (int index = 0; index < FIFTY_EXAM_REGULAR_TICKETS; index += 1) {
            final List<QuestionRecord> ticketQuestions = new ArrayList<>();
            final int nextCursor = Math.min(cursor + FIFTY_EXAM_REGULAR_QUESTIONS, allQuestions.size());
            for (int questionCursor = cursor; questionCursor < nextCursor; questionCursor += 1) {
                ticketQuestions.add(allQuestions.get(questionCursor));
            }
            fiftyTickets.add(new TicketRecord(index + 1, Collections.unmodifiableList(ticketQuestions)));
            cursor = nextCursor;
        }

        final List<QuestionRecord> lastTicketQuestions = new ArrayList<>();
        final int lastCursor = Math.min(cursor + FIFTY_EXAM_LAST_TICKET_QUESTIONS, allQuestions.size());
        for (int questionCursor = cursor; questionCursor < lastCursor; questionCursor += 1) {
            lastTicketQuestions.add(allQuestions.get(questionCursor));
        }
        fiftyTickets.add(new TicketRecord(FIFTY_EXAM_REGULAR_TICKETS + 1, Collections.unmodifiableList(lastTicketQuestions)));

        final List<TicketRecord> immutableTickets = Collections.unmodifiableList(fiftyTickets);
        quizBankCache.put(cacheKey, immutableTickets);
        return immutableTickets;
    }

    private List<TicketRecord> buildStandardBank(String languageCode) throws Exception {
        final String normalizedLanguage = normalizeLanguage(languageCode);
        final String cacheKey = buildQuizBankCacheKey(normalizedLanguage, QUIZ_MODE_STANDARD);
        final List<TicketRecord> cachedTickets = quizBankCache.get(cacheKey);
        if (cachedTickets != null) {
            return cachedTickets;
        }

        final JSONArray ticketsArray = new JSONArray(getTicketsJson(normalizedLanguage));
        final List<TicketRecord> tickets = new ArrayList<>();

        for (int ticketIndex = 0; ticketIndex < ticketsArray.length(); ticketIndex += 1) {
            final JSONObject ticketObject = ticketsArray.optJSONObject(ticketIndex);
            if (ticketObject == null) {
                continue;
            }

            final JSONArray questionsArray = ticketObject.optJSONArray("questions");
            final List<QuestionRecord> questionRecords = new ArrayList<>();
            if (questionsArray != null) {
                for (int questionIndex = 0; questionIndex < questionsArray.length(); questionIndex += 1) {
                    final JSONObject questionObject = questionsArray.optJSONObject(questionIndex);
                    if (questionObject == null) {
                        continue;
                    }

                    final Integer correctAnswer = questionObject.has("correct")
                        ? Integer.valueOf(questionObject.optInt("correct", -1))
                        : null;

                    questionRecords.add(new QuestionRecord(
                        ticketIndex + 1,
                        questionIndex + 1,
                        questionObject,
                        correctAnswer
                    ));
                }
            }

            tickets.add(new TicketRecord(ticketIndex + 1, Collections.unmodifiableList(questionRecords)));
        }

        final List<TicketRecord> immutableTickets = Collections.unmodifiableList(tickets);
        quizBankCache.put(cacheKey, immutableTickets);
        return immutableTickets;
    }

    private QuestionRecord getQuestionRecord(
        String languageCode,
        String mode,
        int ticketNumber,
        int questionIndex
    ) throws Exception {
        if (ticketNumber < 1 || questionIndex < 0) {
            return null;
        }

        final List<TicketRecord> bank = buildQuizBank(normalizeLanguage(languageCode), normalizeQuizMode(mode));
        if (ticketNumber > bank.size()) {
            return null;
        }

        final TicketRecord ticketRecord = bank.get(ticketNumber - 1);
        if (questionIndex >= ticketRecord.questions.size()) {
            return null;
        }

        return ticketRecord.questions.get(questionIndex);
    }

    private QuestionRecord getStandardQuestionRecord(
        List<TicketRecord> standardBank,
        int ticketNumber,
        int questionNumber
    ) {
        if (ticketNumber < 1 || questionNumber < 1 || ticketNumber > standardBank.size()) {
            return null;
        }

        final TicketRecord ticketRecord = standardBank.get(ticketNumber - 1);
        if (questionNumber > ticketRecord.questions.size()) {
            return null;
        }

        return ticketRecord.questions.get(questionNumber - 1);
    }

    private ExamConfig getExamConfig(int ticketNumber, int bankLength, int totalQuestions, String mode) {
        if (QUIZ_MODE_FIFTY.equals(normalizeQuizMode(mode))) {
            return new ExamConfig(totalQuestions, (int) Math.ceil(totalQuestions * 0.9d));
        }

        final boolean isFinalShortTicket = ticketNumber == bankLength && totalQuestions == 3;
        if (isFinalShortTicket) {
            return new ExamConfig(totalQuestions, Math.min(FINAL_TICKET_PASS_CORRECT, totalQuestions));
        }

        return new ExamConfig(totalQuestions, (int) Math.ceil(totalQuestions * 0.9d));
    }

    private Integer getAnswerAt(JSArray answers, int index) {
        if (answers == null || index < 0 || index >= answers.length()) {
            return null;
        }

        final Object raw = answers.opt(index);
        if (raw instanceof Number) {
            return ((Number) raw).intValue();
        }
        return null;
    }

    private JSObject toSanitizedQuestion(QuestionRecord questionRecord, boolean resolveImage) throws Exception {
        final JSObject payload = new JSObject();
        final Iterator<String> keys = questionRecord.question.keys();
        while (keys.hasNext()) {
            final String key = keys.next();
            if ("correct".equals(key)) {
                continue;
            }

            final Object value = questionRecord.question.opt(key);
            if ("image".equals(key) && value instanceof String && !((String) value).trim().isEmpty()) {
                final String imageRef = normalizeImageRef((String) value);
                payload.put("imageRef", imageRef);
                payload.put("image", resolveImage ? resolveImageUri(imageRef) : imageRef);
                continue;
            }

            payload.put(key, value);
        }

        payload.put("sourceTicketNumber", questionRecord.sourceTicketNumber);
        payload.put("sourceQuestionNumber", questionRecord.sourceQuestionNumber);
        return payload;
    }

    private List<String> getQuestionAnswers(JSONObject questionObject) {
        final JSONArray answersArray = questionObject.optJSONArray("answers");
        final List<String> answers = new ArrayList<>();
        if (answersArray == null) {
            return answers;
        }

        for (int index = 0; index < answersArray.length(); index += 1) {
            final String answer = answersArray.optString(index, "").trim();
            if (!answer.isEmpty()) {
                answers.add(answer);
            }
        }

        return answers;
    }

    private String joinSearchParts(String questionText, List<String> answers) {
        final StringBuilder builder = new StringBuilder();
        if (questionText != null && !questionText.trim().isEmpty()) {
            builder.append(questionText.trim());
        }
        for (String answer : answers) {
            if (answer == null || answer.trim().isEmpty()) {
                continue;
            }
            if (builder.length() > 0) {
                builder.append(' ');
            }
            builder.append(answer.trim());
        }
        return builder.toString();
    }

    private String normalizeSearchText(String value) {
        if (value == null) {
            return "";
        }
        return value
            .toLowerCase(Locale.ROOT)
            .replaceAll("\\s+", " ")
            .trim();
    }

    private String normalizeImageRef(String imageRef) {
        final String safe = imageRef == null ? "" : imageRef.trim().replace('\\', '/');
        if (safe.isEmpty() || !safe.startsWith("images/") || safe.contains("..")) {
            throw new IllegalArgumentException("Invalid image path");
        }
        return safe;
    }

    private String resolveImageUri(String imageRef) throws Exception {
        final String cachedUri = imageUriCache.get(imageRef);
        if (cachedUri != null) {
            return cachedUri;
        }

        final File outputDir = new File(context.getCacheDir(), "secure-question-images");
        if (!outputDir.exists() && !outputDir.mkdirs()) {
            throw new IllegalStateException("Unable to create image cache dir");
        }

        String fileName = imageFileNameCache.get(imageRef);
        if (fileName == null) {
            fileName = buildImageCacheFileName(imageRef);
            imageFileNameCache.put(imageRef, fileName);
        }
        final File outputFile = new File(outputDir, fileName);
        if (!outputFile.exists()) {
            decryptImageAssetToFile(getProtectedImageAssetPath(imageRef), outputFile);
        }

        final String uri = Uri.fromFile(outputFile).toString();
        imageUriCache.put(imageRef, uri);
        return uri;
    }

    private void purgeStaleImageCache() {
        final File outputDir = new File(context.getCacheDir(), "secure-question-images");
        final File[] files = outputDir.listFiles();
        if (files == null || files.length == 0) {
            return;
        }

        final long now = System.currentTimeMillis();
        for (File file : files) {
            if (file == null || !file.isFile()) {
                continue;
            }

            final long ageMs = Math.max(0L, now - file.lastModified());
            if (ageMs > IMAGE_CACHE_TTL_MS) {
                file.delete();
            }
        }
    }

    private void decryptImageAssetToFile(String assetPath, File outputFile) throws Exception {
        final AssetManager assets = context.getAssets();
        try (InputStream inputStream = assets.open(assetPath)) {
            verifyImageMagic(inputStream);

            final byte[] iv = new byte[12];
            readFully(inputStream, iv);

            final Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            cipher.init(
                Cipher.DECRYPT_MODE,
                new SecretKeySpec(getImageSecretKey(), "AES"),
                new GCMParameterSpec(GCM_TAG_BITS, iv)
            );

            try (
                CipherInputStream cipherInputStream = new CipherInputStream(inputStream, cipher);
                FileOutputStream outputStream = new FileOutputStream(outputFile, false)
            ) {
                final byte[] buffer = new byte[8192];
                int read;
                while ((read = cipherInputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, read);
                }
                outputStream.flush();
            } catch (IOException error) {
                if (outputFile.exists()) {
                    outputFile.delete();
                }
                throw error;
            }
        }
    }

    private String getFileExtension(String path) {
        final int dotIndex = path.lastIndexOf('.');
        if (dotIndex < 0 || dotIndex <= path.lastIndexOf('/')) {
            return "";
        }
        return path.substring(dotIndex);
    }

    private String buildImageCacheFileName(String imageRef) throws Exception {
        return "img_" + sha256Hex(imageRef).substring(0, 32) + getFileExtension(imageRef);
    }

    private String getProtectedImageAssetPath(String imageRef) throws Exception {
        final String digest = sha256Hex(imageRef).substring(0, 40);
        return "secure/question-images/" + digest + ".bin";
    }

    private String readAssetText(String assetPath) throws Exception {
        final AssetManager assets = context.getAssets();
        final InputStream inputStream = assets.open(assetPath);
        final StringBuilder builder = new StringBuilder(4096);
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                builder.append(line);
            }
        }
        return builder.toString();
    }

    private String decryptPayloadToTickets(String encryptedPayloadText) throws Exception {
        final JSONObject payload = new JSONObject(encryptedPayloadText);
        final String saltB64 = payload.getString("salt");
        final String ivB64 = payload.getString("iv");
        final String tagB64 = payload.getString("tag");
        final String dataB64 = payload.getString("data");
        final int iterations = payload.optInt("iter", 180000);

        final byte[] salt = Base64.decode(saltB64, Base64.DEFAULT);
        final byte[] iv = Base64.decode(ivB64, Base64.DEFAULT);
        final byte[] tag = Base64.decode(tagB64, Base64.DEFAULT);
        final byte[] data = Base64.decode(dataB64, Base64.DEFAULT);
        final byte[] cipherWithTag = concat(data, tag);

        final KeySpec keySpec = new PBEKeySpec(getSecretPassphrase().toCharArray(), salt, iterations, 256);
        final SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
        final byte[] keyBytes = factory.generateSecret(keySpec).getEncoded();
        final SecretKeySpec aesKey = new SecretKeySpec(keyBytes, "AES");

        final Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
        cipher.init(Cipher.DECRYPT_MODE, aesKey, new GCMParameterSpec(GCM_TAG_BITS, iv));
        final byte[] plain = cipher.doFinal(cipherWithTag);
        final String plainText = new String(plain, StandardCharsets.UTF_8);

        final Object parsed = new JSONTokener(plainText).nextValue();
        if (parsed instanceof JSONObject) {
            final JSONArray tickets = ((JSONObject) parsed).optJSONArray("tickets");
            if (tickets != null) {
                return tickets.toString();
            }
        } else if (parsed instanceof JSONArray) {
            return ((JSONArray) parsed).toString();
        }

        throw new IllegalStateException("Invalid decrypted questions format");
    }

    private String getSecretPassphrase() {
        final StringBuilder builder = new StringBuilder();
        for (String encodedPart : SECRET_PARTS_B64) {
            builder.append(new String(Base64.decode(encodedPart, Base64.NO_WRAP), StandardCharsets.UTF_8));
        }
        return builder.toString();
    }

    private synchronized SecureQuestionsDao getSecureQuestionsDao() {
        if (secureQuestionsDao == null) {
            secureQuestionsDao = SecureQuestionsDatabase
                .getInstance(context, keyManager)
                .secureQuestionsDao();
        }
        return secureQuestionsDao;
    }

    private void invalidateLanguageCaches(String language) {
        ticketsJsonCache.remove(language);
        quizBankCache.remove(buildQuizBankCacheKey(language, QUIZ_MODE_STANDARD));
        quizBankCache.remove(buildQuizBankCacheKey(language, QUIZ_MODE_FIFTY));
    }

    private String buildQuizBankCacheKey(String language, String mode) {
        return normalizeLanguage(language) + "|" + normalizeQuizMode(mode);
    }

    private long computeSeedVersion(String encryptedJson) throws Exception {
        final MessageDigest digest = MessageDigest.getInstance("SHA-256");
        final byte[] hash = digest.digest(encryptedJson.getBytes(StandardCharsets.UTF_8));
        long version = 0L;
        for (int index = 0; index < Math.min(8, hash.length); index += 1) {
            version = (version << 8) | (hash[index] & 0xffL);
        }
        return version;
    }

    private void verifyImageMagic(InputStream inputStream) throws Exception {
        final byte[] actualMagic = new byte[IMAGE_MAGIC.length];
        readFully(inputStream, actualMagic);
        for (int index = 0; index < IMAGE_MAGIC.length; index += 1) {
            if (actualMagic[index] != IMAGE_MAGIC[index]) {
                throw new IllegalStateException("Invalid protected image payload");
            }
        }
    }

    private void readFully(InputStream inputStream, byte[] buffer) throws Exception {
        int offset = 0;
        while (offset < buffer.length) {
            final int read = inputStream.read(buffer, offset, buffer.length - offset);
            if (read == -1) {
                throw new IllegalStateException("Protected image payload too small");
            }
            offset += read;
        }
    }

    private BootstrapResult mapBootstrapFailure(Exception error) {
        final Throwable rootCause = getRootCause(error);
        if (rootCause instanceof FileNotFoundException) {
            return BootstrapResult.failure(
                ERROR_ASSET_NOT_FOUND,
                "Secure quiz asset was not found in the APK",
                error
            );
        }

        if (
            rootCause instanceof AEADBadTagException
                || rootCause instanceof BadPaddingException
                || rootCause instanceof IllegalBlockSizeException
                || rootCause instanceof InvalidKeyException
                || rootCause instanceof InvalidAlgorithmParameterException
        ) {
            return BootstrapResult.failure(
                ERROR_DECRYPT_FAILED,
                "Secure quiz asset could not be decrypted",
                error
            );
        }

        if (rootCause instanceof org.json.JSONException || rootCause instanceof IllegalStateException) {
            return BootstrapResult.failure(
                ERROR_DATA_INVALID,
                "Secure quiz asset is malformed",
                error
            );
        }

        return BootstrapResult.failure(
            ERROR_BOOTSTRAP_FAILED,
            "Secure quiz bootstrap failed",
            error
        );
    }

    private Throwable getRootCause(Throwable error) {
        Throwable cursor = error;
        while (cursor != null && cursor.getCause() != null && cursor.getCause() != cursor) {
            cursor = cursor.getCause();
        }
        return cursor != null ? cursor : error;
    }

    private byte[] getImageSecretKey() throws Exception {
        final MessageDigest digest = MessageDigest.getInstance("SHA-256");
        digest.update(getSecretPassphrase().getBytes(StandardCharsets.UTF_8));
        digest.update(IMAGE_SECRET_NAMESPACE.getBytes(StandardCharsets.UTF_8));
        return digest.digest();
    }

    private String sha256Hex(String value) throws Exception {
        final MessageDigest digest = MessageDigest.getInstance("SHA-256");
        final byte[] bytes = digest.digest(String.valueOf(value).getBytes(StandardCharsets.UTF_8));
        final StringBuilder builder = new StringBuilder(bytes.length * 2);
        for (byte valueByte : bytes) {
            builder.append(String.format(Locale.ROOT, "%02x", valueByte));
        }
        return builder.toString();
    }

    private byte[] concat(byte[] left, byte[] right) {
        final byte[] result = new byte[left.length + right.length];
        System.arraycopy(left, 0, result, 0, left.length);
        System.arraycopy(right, 0, result, left.length, right.length);
        return result;
    }

    private static final class TicketRecord {
        final int ticketNumber;
        final List<QuestionRecord> questions;

        TicketRecord(int ticketNumber, List<QuestionRecord> questions) {
            this.ticketNumber = ticketNumber;
            this.questions = questions;
        }
    }

    private static final class QuestionRecord {
        final int sourceTicketNumber;
        final int sourceQuestionNumber;
        final JSONObject question;
        final Integer correctAnswer;

        QuestionRecord(int sourceTicketNumber, int sourceQuestionNumber, JSONObject question, Integer correctAnswer) {
            this.sourceTicketNumber = sourceTicketNumber;
            this.sourceQuestionNumber = sourceQuestionNumber;
            this.question = question;
            this.correctAnswer = (correctAnswer != null && correctAnswer >= 0) ? correctAnswer : null;
        }
    }

    private static final class ExamConfig {
        final int totalQuestions;
        final int requiredCorrect;

        ExamConfig(int totalQuestions, int requiredCorrect) {
            this.totalQuestions = totalQuestions;
            this.requiredCorrect = requiredCorrect;
        }
    }

    private static final class SearchResultRecord {
        final int ticketNumber;
        final int questionIndex;
        final String questionText;
        final List<String> answersPreview;
        final boolean hasImage;
        final int score;

        SearchResultRecord(
            int ticketNumber,
            int questionIndex,
            String questionText,
            List<String> answers,
            boolean hasImage,
            int score
        ) {
            this.ticketNumber = ticketNumber;
            this.questionIndex = questionIndex;
            this.questionText = questionText == null ? "" : questionText;
            this.answersPreview = new ArrayList<>();
            if (answers != null) {
                for (int index = 0; index < Math.min(2, answers.size()); index += 1) {
                    this.answersPreview.add(answers.get(index));
                }
            }
            this.hasImage = hasImage;
            this.score = score;
        }
    }

    public static final class BootstrapResult {
        private final String status;
        private final String code;
        private final String message;
        private final Exception exception;

        private BootstrapResult(String status, String code, String message, Exception exception) {
            this.status = status;
            this.code = code;
            this.message = message;
            this.exception = exception;
        }

        public static BootstrapResult loading() {
            return new BootstrapResult(BOOTSTRAP_STATUS_LOADING, null, null, null);
        }

        public static BootstrapResult ready() {
            return new BootstrapResult(BOOTSTRAP_STATUS_READY, null, null, null);
        }

        public static BootstrapResult failure(String code, String message, Exception exception) {
            return new BootstrapResult(BOOTSTRAP_STATUS_ERROR, code, message, exception);
        }

        public boolean isSuccess() {
            return BOOTSTRAP_STATUS_READY.equals(status);
        }

        public boolean isLoading() {
            return BOOTSTRAP_STATUS_LOADING.equals(status);
        }

        public String getStatus() {
            return status;
        }

        public String getCode() {
            return code;
        }

        public String getMessage() {
            return message;
        }

        public Exception getException() {
            return exception;
        }
    }
}
