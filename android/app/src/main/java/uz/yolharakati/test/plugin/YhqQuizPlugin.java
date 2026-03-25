package uz.yolharakati.test.plugin;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;

import uz.yolharakati.test.security.SecureQuestionsStore;
import uz.yolharakati.test.security.YhqKeystoreKeyManager;

@CapacitorPlugin(name = "YhqQuiz")
public class YhqQuizPlugin extends Plugin {
    private static final String ERROR_STORE_UNAVAILABLE = "QUIZ_STORE_UNAVAILABLE";
    private static final String ERROR_BOOTSTRAP_LOADING = "QUIZ_BOOTSTRAP_LOADING";
    private static final String EVENT_BOOTSTRAP_STATE = "bootstrapState";
    private static final long SHUTDOWN_TIMEOUT_MS = 2_000L;

    // Named daemon thread improves ANR/thread-dump readability and avoids hanging teardown.
    private final ExecutorService storeExecutor = Executors.newSingleThreadExecutor((runnable) -> {
        final Thread thread = new Thread(runnable, "yhq-quiz-store");
        thread.setDaemon(true);
        return thread;
    });
    private volatile SecureQuestionsStore secureQuestionsStore;
    private volatile SecureQuestionsStore.BootstrapResult bootstrapResult = SecureQuestionsStore.BootstrapResult.loading();

    @Override
    public void load() {
        updateBootstrapState(SecureQuestionsStore.BootstrapResult.loading(), null);

        try {
            storeExecutor.execute(this::initializeStore);
        } catch (RejectedExecutionException error) {
            updateBootstrapState(
                SecureQuestionsStore.BootstrapResult.failure(
                    ERROR_STORE_UNAVAILABLE,
                    "Quiz bootstrap executor is unavailable",
                    error
                ),
                null
            );
        }
    }

    @Override
    protected void handleOnDestroy() {
        // Stop accepting new work first, then give in-flight tasks a brief grace period.
        storeExecutor.shutdown();

        try {
            if (!storeExecutor.awaitTermination(SHUTDOWN_TIMEOUT_MS, TimeUnit.MILLISECONDS)) {
                storeExecutor.shutdownNow();
            }
        } catch (InterruptedException error) {
            storeExecutor.shutdownNow();
            Thread.currentThread().interrupt();
        }
    }

    @PluginMethod
    public void getBootstrapState(PluginCall call) {
        // Snapshot the volatile state once so payload and ok flag stay consistent.
        final SecureQuestionsStore.BootstrapResult snapshot = bootstrapResult;
        final JSObject response = buildBootstrapStatePayload(snapshot);
        response.put("ok", snapshot.isSuccess());
        resolveCall(call, response);
    }

    @PluginMethod
    public void getCatalog(PluginCall call) {
        runStoreCall(call, null, "QUIZ_CATALOG_FAILED", (store) -> {
            final String language = call.getString("language", "uz");
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("language", language);
            response.put("tickets", store.getCatalog(language));
            return response;
        });
    }

    @PluginMethod
    public void searchQuestions(PluginCall call) {
        runStoreCall(call, null, "QUIZ_SEARCH_FAILED", (store) -> {
            final Integer limit = call.getInt("limit");
            return store.searchQuestions(
                call.getString("language", "uz"),
                call.getString("query", ""),
                call.getInt("ticketNumber"),
                limit != null ? limit : 120
            );
        });
    }

    @PluginMethod
    public void getQuestionsByRefs(PluginCall call) {
        final JSArray refs = call.getArray("refs");
        if (refs == null) {
            rejectCall(call, "INVALID_QUESTION_REFS", "INVALID_QUESTION_REFS", null, null);
            return;
        }

        runStoreCall(call, null, "QUESTION_BATCH_FAILED", (store) -> {
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put(
                "questions",
                store.getQuestionsByRefs(call.getString("language", "uz"), refs)
            );
            return response;
        });
    }

    @PluginMethod
    public void getQuestion(PluginCall call) {
        final Integer ticketNumber = call.getInt("ticketNumber");
        final Integer questionIndex = call.getInt("questionIndex");
        if (ticketNumber == null || questionIndex == null) {
            rejectCall(call, "INVALID_QUESTION_REQUEST", "INVALID_QUESTION_REQUEST", null, null);
            return;
        }

        runStoreCall(call, "INVALID_QUESTION_REQUEST", "QUESTION_LOAD_FAILED", (store) -> {
            final JSObject question = store.getQuestion(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                questionIndex
            );

            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("question", question);
            return response;
        });
    }

    @PluginMethod
    public void getImage(PluginCall call) {
        final String imageRef = call.getString("imageRef");
        if (imageRef == null || imageRef.trim().isEmpty()) {
            rejectCall(call, "INVALID_IMAGE_REQUEST", "INVALID_IMAGE_REQUEST", null, null);
            return;
        }

        runStoreCall(call, "INVALID_IMAGE_REQUEST", "IMAGE_LOAD_FAILED", (store) -> {
            final JSObject response = new JSObject();
            response.put("ok", true);
            response.put("image", store.getImageUri(imageRef));
            return response;
        });
    }

    @PluginMethod
    public void submitAnswer(PluginCall call) {
        final Integer ticketNumber = call.getInt("ticketNumber");
        final Integer questionIndex = call.getInt("questionIndex");
        final Integer answerIndex = call.getInt("answerIndex");
        if (ticketNumber == null || questionIndex == null || answerIndex == null) {
            rejectCall(call, "INVALID_ANSWER_REQUEST", "INVALID_ANSWER_REQUEST", null, null);
            return;
        }

        runStoreCall(call, "INVALID_ANSWER_REQUEST", "ANSWER_VALIDATION_FAILED", (store) -> {
            return store.submitAnswer(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                questionIndex,
                answerIndex
            );
        });
    }

    @PluginMethod
    public void submitQuiz(PluginCall call) {
        final Integer ticketNumber = call.getInt("ticketNumber");
        final JSArray answers = call.getArray("answers");
        if (answers == null) {
            rejectCall(call, "INVALID_SUBMISSION", "INVALID_SUBMISSION", null, null);
            return;
        }
        if (ticketNumber == null || ticketNumber < 1) {
            rejectCall(call, "INVALID_TICKET", "INVALID_TICKET", null, null);
            return;
        }

        runStoreCall(call, "INVALID_SUBMISSION", "QUIZ_SUBMIT_FAILED", (store) -> {
            return store.submitQuiz(
                call.getString("language", "uz"),
                call.getString("mode", "standard"),
                ticketNumber,
                answers
            );
        });
    }

    private void initializeStore() {
        try {
            final YhqKeystoreKeyManager keyManager = new YhqKeystoreKeyManager(getContext());
            final SecureQuestionsStore store = new SecureQuestionsStore(getContext(), keyManager);
            final SecureQuestionsStore.BootstrapResult result = store.bootstrap();
            updateBootstrapState(result, result.isSuccess() ? store : null);
        } catch (Exception error) {
            updateBootstrapState(
                SecureQuestionsStore.BootstrapResult.failure(
                    ERROR_STORE_UNAVAILABLE,
                    "Quiz bootstrap failed before store initialization",
                    error
                ),
                null
            );
        }
    }

    private void runStoreCall(
        PluginCall call,
        String invalidRequestCode,
        String failureCode,
        StoreCallable task
    ) {
        try {
            storeExecutor.execute(() -> {
                // Read the volatile result once to avoid mixed-state checks.
                final SecureQuestionsStore.BootstrapResult currentBootstrapResult = bootstrapResult;
                if (currentBootstrapResult.isLoading() || !currentBootstrapResult.isSuccess()) {
                    rejectBootstrapFailure(call, currentBootstrapResult);
                    return;
                }

                final SecureQuestionsStore store = secureQuestionsStore;
                if (store == null) {
                    rejectCall(call, ERROR_STORE_UNAVAILABLE, ERROR_STORE_UNAVAILABLE, null, null);
                    return;
                }

                try {
                    resolveCall(call, task.run(store));
                } catch (SecureQuestionsStore.StoreRequestException error) {
                    rejectCall(call, error.getCode(), error.getCode(), null, null);
                } catch (IllegalArgumentException error) {
                    final String rejectionCode = invalidRequestCode != null ? invalidRequestCode : failureCode;
                    rejectCall(call, rejectionCode, rejectionCode, error, null);
                } catch (Exception error) {
                    rejectCall(call, failureCode, failureCode, error, null);
                }
            });
        } catch (RejectedExecutionException error) {
            rejectCall(call, ERROR_STORE_UNAVAILABLE, ERROR_STORE_UNAVAILABLE, error, null);
        }
    }

    private void updateBootstrapState(SecureQuestionsStore.BootstrapResult result, SecureQuestionsStore store) {
        // Store is written before result so a visible success state has a backing store.
        secureQuestionsStore = store;
        bootstrapResult = result;
        emitBootstrapState(result);
    }

    private void emitBootstrapState(SecureQuestionsStore.BootstrapResult result) {
        final JSObject payload = buildBootstrapStatePayload(result);
        if (getBridge() == null) {
            return;
        }

        getBridge().executeOnMainThread(() -> notifyListeners(EVENT_BOOTSTRAP_STATE, payload));
    }

    private JSObject buildBootstrapStatePayload(SecureQuestionsStore.BootstrapResult result) {
        return YhqBootstrapStatePayload.build(
            result.getStatus(),
            result.getCode(),
            result.getMessage(),
            result.isLoading(),
            result.isSuccess()
        );
    }

    private void rejectBootstrapFailure(PluginCall call, SecureQuestionsStore.BootstrapResult result) {
        final JSObject data = buildBootstrapStatePayload(result);

        final String code = result.isLoading()
            ? ERROR_BOOTSTRAP_LOADING
            : (result.getCode() != null ? result.getCode() : "QUIZ_BOOTSTRAP_FAILED");
        final String message = result.isLoading()
            ? "Quiz bootstrap is still in progress"
            : (result.getMessage() != null ? result.getMessage() : "QUIZ_BOOTSTRAP_FAILED");

        rejectCall(
            call,
            message,
            code,
            result.getException(),
            data
        );
    }

    private void resolveCall(PluginCall call, JSObject response) {
        if (getBridge() == null) {
            call.resolve(response);
            return;
        }

        getBridge().executeOnMainThread(() -> call.resolve(response));
    }

    private void rejectCall(PluginCall call, String message, String code, Exception error, JSObject data) {
        if (getBridge() == null) {
            call.reject(message, code, error, data);
            return;
        }

        getBridge().executeOnMainThread(() -> call.reject(message, code, error, data));
    }

    private interface StoreCallable {
        JSObject run(SecureQuestionsStore store) throws Exception;
    }
}
