package uz.yolharakati.test;

import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.content.pm.ApplicationInfo;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;

import uz.yolharakati.test.plugin.YhqQuizPlugin;

public class MainActivity extends BridgeActivity {
    private static final int SYSTEM_BAR_COLOR_LIGHT = Color.parseColor("#eef4f8");
    private static final int SYSTEM_BAR_COLOR_DARK = Color.parseColor("#05080d");
    private static final String UI_PREFS_NAME = "yhq_ui";
    private static final String SYSTEM_BAR_THEME_KEY = "system_bar_theme_v1";
    private YhqPermissionsBridge permissionsBridge;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(YhqQuizPlugin.class);
        super.onCreate(savedInstanceState);

        applySystemBarTheme(readPersistedDarkTheme());

        permissionsBridge = new YhqPermissionsBridge(this);
        if (bridge != null && bridge.getWebView() != null) {
            final WebView webView = bridge.getWebView();
            hardenWebView(webView);
            webView.addJavascriptInterface(permissionsBridge, YhqPermissionsBridge.JS_INTERFACE_NAME);
        }
    }

    @Override
    public void onResume() {
        super.onResume();

        if (permissionsBridge != null) {
            permissionsBridge.maybeRequestStartupPermissions();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        if (permissionsBridge != null) {
            permissionsBridge.handleRequestPermissionsResult(requestCode);
        }
    }

    public Bridge getBridgeInstance() {
        return bridge;
    }

    public void syncSystemBarsTheme(String theme) {
        final boolean isDarkTheme = "dark".equalsIgnoreCase(theme);
        persistSystemBarsTheme(isDarkTheme);
        runOnUiThread(() -> applySystemBarTheme(isDarkTheme));
    }

    private boolean readPersistedDarkTheme() {
        final SharedPreferences preferences = getSharedPreferences(UI_PREFS_NAME, MODE_PRIVATE);
        return preferences.getBoolean(SYSTEM_BAR_THEME_KEY, true);
    }

    private void persistSystemBarsTheme(boolean darkTheme) {
        getSharedPreferences(UI_PREFS_NAME, MODE_PRIVATE)
            .edit()
            .putBoolean(SYSTEM_BAR_THEME_KEY, darkTheme)
            .apply();
    }

    private void applySystemBarTheme(boolean darkTheme) {
        final int systemBarColor = darkTheme ? SYSTEM_BAR_COLOR_DARK : SYSTEM_BAR_COLOR_LIGHT;
        getWindow().setStatusBarColor(systemBarColor);
        getWindow().setNavigationBarColor(systemBarColor);

        final WindowInsetsControllerCompat controller =
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());

        if (controller != null) {
            controller.setAppearanceLightStatusBars(!darkTheme);
            controller.setAppearanceLightNavigationBars(!darkTheme);
        }
    }

    private void hardenWebView(WebView webView) {
        final boolean isDebuggable = (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
        WebView.setWebContentsDebuggingEnabled(isDebuggable);
        webView.setLongClickable(false);
        webView.setHapticFeedbackEnabled(false);
        webView.setFilterTouchesWhenObscured(true);

        final WebSettings settings = webView.getSettings();
        if (settings == null) {
            return;
        }

        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            settings.setAllowFileAccessFromFileURLs(false);
            settings.setAllowUniversalAccessFromFileURLs(false);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }
    }
}
