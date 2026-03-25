package uz.yolharakati.test;

import android.Manifest;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.annotation.Keep;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationManagerCompat;

import com.getcapacitor.Bridge;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

public class YhqPermissionsBridge {
    public static final String JS_INTERFACE_NAME = "YHQPermissionsBridge";
    private static final String STARTUP_PROMPT_KEY = "startup_permissions_prompted_v2";
    private static final String EVENT_NAME = "yhq:permissions-changed";
    private static final int NOTIFICATIONS_PERMISSION_REQUEST_CODE = 4107;

    private final MainActivity activity;
    private final AtomicBoolean permissionRequestInFlight = new AtomicBoolean(false);

    public YhqPermissionsBridge(MainActivity activity) {
        this.activity = activity;
    }

    @Keep
    @JavascriptInterface
    public String getPermissionSnapshot() {
        return buildPermissionSnapshotJson();
    }

    @Keep
    @JavascriptInterface
    public void requestStartupPermissions() {
        activity.runOnUiThread(this::requestStartupPermissionsInternal);
    }

    @Keep
    @JavascriptInterface
    public String setNotificationsEnabled(String enabledValue) {
        final Boolean enabled = parseStrictBoolean(enabledValue);
        if (enabled == null) {
            return buildPermissionSnapshotJson();
        }

        if (Looper.myLooper() == Looper.getMainLooper()) {
            applyNotificationsPreference(enabled, true);
            return buildPermissionSnapshotJson();
        }

        final CountDownLatch latch = new CountDownLatch(1);
        final AtomicReference<String> snapshotRef = new AtomicReference<>();
        activity.runOnUiThread(() -> {
            try {
                applyNotificationsPreference(enabled, true);
                snapshotRef.set(buildPermissionSnapshotJson());
            } finally {
                latch.countDown();
            }
        });

        try {
            latch.await(2, TimeUnit.SECONDS);
        } catch (InterruptedException error) {
            Thread.currentThread().interrupt();
        }

        final String snapshot = snapshotRef.get();
        return snapshot != null ? snapshot : buildPermissionSnapshotJson();
    }

    @Keep
    @JavascriptInterface
    public void setSystemBarsTheme(String theme) {
        activity.syncSystemBarsTheme(theme);
    }

    public void maybeRequestStartupPermissions() {
        refreshPermissionState(true, true);
    }

    public boolean handleRequestPermissionsResult(int requestCode) {
        if (requestCode != NOTIFICATIONS_PERMISSION_REQUEST_CODE) {
            emitPermissionSnapshot();
            return false;
        }

        permissionRequestInFlight.set(false);
        refreshPermissionState(false, true);
        return true;
    }

    public void emitPermissionSnapshot() {
        final Bridge bridge = activity.getBridgeInstance();
        final WebView webView = bridge != null ? bridge.getWebView() : null;
        if (webView == null) {
            return;
        }

        final String quotedPayload = JSONObject.quote(buildPermissionSnapshotJson());
        webView.post(() -> webView.evaluateJavascript(
            "(function(){try{" +
                "var detail=JSON.parse(" + quotedPayload + ");" +
                "window.dispatchEvent(new CustomEvent('" + EVENT_NAME + "',{detail:detail}));" +
            "}catch(_error){}})();",
            null
        ));
    }

    private void refreshPermissionState(boolean allowPrompt, boolean emitSnapshot) {
        if (allowPrompt && shouldPromptForNotificationsOnStartup()) {
            markStartupPromptShown();
            requestRuntimeNotificationsPermission();
            return;
        }

        syncReminderSchedule();
        if (emitSnapshot) {
            emitPermissionSnapshot();
        }
    }

    private void requestStartupPermissionsInternal() {
        if (isActivityUnavailable()) {
            emitPermissionSnapshot();
            return;
        }

        refreshPermissionState(true, true);
    }

    private void applyNotificationsPreference(boolean enabled, boolean requestPermissionIfNeeded) {
        YhqReminderPreferences.setNotificationsEnabledPreference(activity, enabled);

        if (
            YhqNotificationsPolicy.resolvePreferenceChange(
                enabled,
                isNotificationsGranted(),
                requestPermissionIfNeeded,
                Build.VERSION.SDK_INT
            ) == YhqNotificationsPolicy.PreferenceChangeAction.REQUEST_RUNTIME_PERMISSION
        ) {
            markStartupPromptShown();
            requestRuntimeNotificationsPermission();
            return;
        }

        syncReminderSchedule();
        emitPermissionSnapshot();
    }

    private void syncReminderSchedule() {
        final boolean shouldSchedule = YhqNotificationsPolicy.shouldActivateReminderSchedule(
            YhqReminderPreferences.areNotificationsEnabledPreference(activity),
            isNotificationsGranted()
        );
        YhqReminderScheduler.syncReminderSchedule(activity, shouldSchedule);
    }

    private boolean shouldPromptForNotificationsOnStartup() {
        return YhqNotificationsPolicy.shouldPromptOnStartup(
            YhqReminderPreferences.areNotificationsEnabledPreference(activity),
            isNotificationsGranted(),
            wasStartupPromptShown(),
            Build.VERSION.SDK_INT
        );
    }

    private void requestRuntimeNotificationsPermission() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) {
            refreshPermissionState(false, true);
            return;
        }

        if (isActivityUnavailable()) {
            permissionRequestInFlight.set(false);
            refreshPermissionState(false, true);
            return;
        }

        if (isNotificationsGranted()) {
            permissionRequestInFlight.set(false);
            refreshPermissionState(false, true);
            return;
        }

        if (!permissionRequestInFlight.compareAndSet(false, true)) {
            emitPermissionSnapshot();
            return;
        }

        ActivityCompat.requestPermissions(
            activity,
            new String[]{Manifest.permission.POST_NOTIFICATIONS},
            NOTIFICATIONS_PERMISSION_REQUEST_CODE
        );
    }

    private boolean wasStartupPromptShown() {
        return getPreferences().getBoolean(STARTUP_PROMPT_KEY, false);
    }

    private void markStartupPromptShown() {
        getPreferences().edit().putBoolean(STARTUP_PROMPT_KEY, true).apply();
    }

    private SharedPreferences getPreferences() {
        return YhqReminderPreferences.getPreferences(activity);
    }

    private boolean isNotificationsGranted() {
        return NotificationManagerCompat.from(activity).areNotificationsEnabled();
    }

    private Boolean parseStrictBoolean(String rawValue) {
        if (rawValue == null) {
            return null;
        }

        final String normalized = rawValue.trim().toLowerCase();
        if ("true".equals(normalized)) {
            return true;
        }
        if ("false".equals(normalized)) {
            return false;
        }
        return null;
    }

    private boolean isActivityUnavailable() {
        return activity.isFinishing() || (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1 && activity.isDestroyed());
    }

    private String buildPermissionSnapshotJson() {
        try {
            final boolean remindersEnabled = YhqReminderPreferences.areNotificationsEnabledPreference(activity);
            final boolean notificationsGranted = isNotificationsGranted();

            final JSONObject snapshot = new JSONObject();
            snapshot.put("platform", "android");
            snapshot.put("sdkInt", Build.VERSION.SDK_INT);
            snapshot.put("startupPromptShown", wasStartupPromptShown());
            snapshot.put("notificationsGranted", notificationsGranted);
            snapshot.put("remindersEnabled", remindersEnabled);
            snapshot.put("remindersActive", remindersEnabled && notificationsGranted);
            snapshot.put("permissionRequestInFlight", permissionRequestInFlight.get());
            return snapshot.toString();
        } catch (JSONException error) {
            return "{}";
        }
    }
}
