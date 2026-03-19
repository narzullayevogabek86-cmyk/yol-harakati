package uz.yolharakati.test;

import android.content.SharedPreferences;
import android.os.Build;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.core.app.NotificationManagerCompat;

import com.getcapacitor.Bridge;

import org.json.JSONException;
import org.json.JSONObject;

public class YhqPermissionsBridge {
    private static final String PREFS_NAME = "yhq_permissions";
    private static final String STARTUP_PROMPT_KEY = "startup_permissions_prompted_v1";
    private static final String EVENT_NAME = "yhq:permissions-changed";

    private final MainActivity activity;

    public YhqPermissionsBridge(MainActivity activity) {
        this.activity = activity;
    }

    @JavascriptInterface
    public String getPermissionSnapshot() {
        return buildPermissionSnapshotJson();
    }

    @JavascriptInterface
    public void requestStartupPermissions() {
        activity.runOnUiThread(this::requestStartupPermissionsInternal);
    }

    @JavascriptInterface
    public void setSystemBarsTheme(String theme) {
        activity.syncSystemBarsTheme(theme);
    }

    public void maybeRequestStartupPermissions() {
        if (!wasStartupPromptShown()) {
            markStartupPromptShown();
            requestStartupPermissionsInternal();
            return;
        }

        emitPermissionSnapshot();
    }

    public boolean handleRequestPermissionsResult(int requestCode) {
        emitPermissionSnapshot();
        return false;
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

    private void requestStartupPermissionsInternal() {
        emitPermissionSnapshot();
    }

    private boolean wasStartupPromptShown() {
        return getPreferences().getBoolean(STARTUP_PROMPT_KEY, false);
    }

    private void markStartupPromptShown() {
        getPreferences().edit().putBoolean(STARTUP_PROMPT_KEY, true).apply();
    }

    private SharedPreferences getPreferences() {
        return activity.getSharedPreferences(PREFS_NAME, MainActivity.MODE_PRIVATE);
    }

    private boolean isNotificationsGranted() {
        return NotificationManagerCompat.from(activity).areNotificationsEnabled();
    }

    private String buildPermissionSnapshotJson() {
        try {
            final JSONObject snapshot = new JSONObject();
            snapshot.put("platform", "android");
            snapshot.put("sdkInt", Build.VERSION.SDK_INT);
            snapshot.put("startupPromptShown", wasStartupPromptShown());
            snapshot.put("notificationsGranted", isNotificationsGranted());
            return snapshot.toString();
        } catch (JSONException error) {
            return "{}";
        }
    }
}
