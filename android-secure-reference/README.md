# Android Keystore + SQLCipher Integration

This project is currently web-first. The files in this folder are a reference implementation for the Android layer that should be added to a Capacitor or native Android shell.

## 1) Add dependencies in Android app module

Add these into `android/app/build.gradle`:

```gradle
dependencies {
    implementation "net.zetetic:android-database-sqlcipher:4.5.4"
    implementation "androidx.sqlite:sqlite-ktx:2.4.0"
}
```

## 2) Add secure key manager

Copy [YhqKeystoreKeyManager.kt](/home/ogabek/Downloads/Telegram%20Desktop/yol%20harakati/android-secure-reference/YhqKeystoreKeyManager.kt) into your Android package.

What it does:
- Generates and stores an AES key in Android Keystore.
- Creates one random offline passphrase.
- Encrypts that passphrase with Keystore key and stores only encrypted bytes in `SharedPreferences`.
- Returns passphrase bytes for SQLCipher and Base64 passphrase for JS bridge.

## 3) Add JS bridge for WebView

Copy [YhqSecureBridge.kt](/home/ogabek/Downloads/Telegram%20Desktop/yol%20harakati/android-secure-reference/YhqSecureBridge.kt) and merge [MainActivityIntegration.kt](/home/ogabek/Downloads/Telegram%20Desktop/yol%20harakati/android-secure-reference/MainActivityIntegration.kt) logic into your Activity:

```kotlin
webView.settings.javaScriptEnabled = true
webView.addJavascriptInterface(
    YhqSecureBridge(YhqKeystoreKeyManager(this)),
    "YHQSecureBridge"
)
```

`script.js` now reads this bridge via `window.YHQSecureBridge.getQuestionsKey()`.

## 4) Open SQLCipher database

Copy [SecureQuestionsDb.kt](/home/ogabek/Downloads/Telegram%20Desktop/yol%20harakati/android-secure-reference/SecureQuestionsDb.kt) and use:

```kotlin
val keyManager = YhqKeystoreKeyManager(context)
val db = SecureQuestionsDb.open(context, keyManager)
```

This opens `questions_secure.db` with SQLCipher.

## 5) Suggested startup flow

1. App starts.
2. Keystore manager decrypts DB passphrase.
3. SQLCipher DB opens.
4. If DB empty, import seed questions once from encrypted app assets.
5. WebView loads app and JS bridge provides passphrase for encrypted JSON fallback only when required.

## Security notes

- This is hardening, not absolute protection.
- Rooted/hooked devices can still extract runtime data.
- Keep release build with `minifyEnabled true`, `shrinkResources true`, and `debuggable false`.
