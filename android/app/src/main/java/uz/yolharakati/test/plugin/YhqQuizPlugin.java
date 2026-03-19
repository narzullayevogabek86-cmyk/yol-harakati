package uz.yolharakati.test.plugin;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import uz.yolharakati.test.security.SecureQuestionsStore;
import uz.yolharakati.test.security.YhqKeystoreKeyManager;

@CapacitorPlugin(name = "YhqQuiz")
public class YhqQuizPlugin extends Plugin {
    private SecureQuestionsStore secureQuestionsStore;

    @Override
    public void load() {
        final YhqKeystoreKeyManager keyManager = new YhqKeystoreKeyManager(getContext());
        secureQuestionsStore = new SecureQuestionsStore(getContext(), keyManager);
        secureQuestionsStore.bootstrap();
    }

    @PluginMethod
    public void getCatalog(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        try {
            final String language = call.getString("language", "uz");
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("language", language);
            response.put("tickets", secureQuestionsStore.getCatalog(language));
            call.resolve(response);
        } catch (Exception error) {
            call.reject("QUIZ_CATALOG_FAILED", error);
        }
    }

    @PluginMethod
    public void searchQuestions(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        try {
            final Integer limit = call.getInt("limit");
            final JSObject response = secureQuestionsStore.searchQuestions(
                call.getString("language", "uz"),
                call.getString("query", ""),
                call.getInt("ticketNumber"),
                limit != null ? limit : 120
            );
            call.resolve(response);
        } catch (Exception error) {
            call.reject("QUIZ_SEARCH_FAILED", error);
        }
    }

    @PluginMethod
    public void getQuestionsByRefs(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        final JSArray refs = call.getArray("refs");
        if (refs == null) {
            call.reject("INVALID_QUESTION_REFS");
            return;
        }

        try {
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put(
                "questions",
                secureQuestionsStore.getQuestionsByRefs(call.getString("language", "uz"), refs)
            );
            call.resolve(response);
        } catch (Exception error) {
            call.reject("QUESTION_BATCH_FAILED", error);
        }
    }

    @PluginMethod
    public void getQuestion(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        final Integer ticketNumber = call.getInt("ticketNumber");
        final Integer questionIndex = call.getInt("questionIndex");
        if (ticketNumber == null || questionIndex == null) {
            call.reject("INVALID_QUESTION_REQUEST");
            return;
        }

        try {
            final JSObject question = secureQuestionsStore.getQuestion(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                questionIndex
            );

            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("question", question);
            call.resolve(response);
        } catch (IllegalArgumentException error) {
            call.reject("INVALID_QUESTION_REQUEST", error);
        } catch (Exception error) {
            call.reject("QUESTION_LOAD_FAILED", error);
        }
    }

    @PluginMethod
    public void getImage(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        final String imageRef = call.getString("imageRef");
        if (imageRef == null || imageRef.trim().isEmpty()) {
            call.reject("INVALID_IMAGE_REQUEST");
            return;
        }

        try {
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("image", secureQuestionsStore.getImageUri(imageRef));
            call.resolve(response);
        } catch (IllegalArgumentException error) {
            call.reject("INVALID_IMAGE_REQUEST", error);
        } catch (Exception error) {
            call.reject("IMAGE_LOAD_FAILED", error);
        }
    }

    @PluginMethod
    public void submitAnswer(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        final Integer ticketNumber = call.getInt("ticketNumber");
        final Integer questionIndex = call.getInt("questionIndex");
        final Integer answerIndex = call.getInt("answerIndex");
        if (ticketNumber == null || questionIndex == null || answerIndex == null) {
            call.reject("INVALID_ANSWER_REQUEST");
            return;
        }

        try {
            final JSObject response = secureQuestionsStore.submitAnswer(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                questionIndex,
                answerIndex
            );
            call.resolve(response);
        } catch (IllegalArgumentException error) {
            call.reject("INVALID_ANSWER_REQUEST", error);
        } catch (Exception error) {
            call.reject("ANSWER_VALIDATION_FAILED", error);
        }
    }

    @PluginMethod
    public void submitQuiz(PluginCall call) {
        if (secureQuestionsStore == null) {
            call.reject("QUIZ_STORE_UNAVAILABLE");
            return;
        }

        final Integer ticketNumber = call.getInt("ticketNumber");
        final JSArray answers = call.getArray("answers");
        if (ticketNumber == null || answers == null) {
            call.reject("INVALID_SUBMISSION");
            return;
        }

        try {
            final JSObject response = secureQuestionsStore.submitQuiz(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                answers
            );
            call.resolve(response);
        } catch (IllegalArgumentException error) {
            call.reject("INVALID_SUBMISSION", error);
        } catch (Exception error) {
            call.reject("QUIZ_SUBMIT_FAILED", error);
        }
    }
}
