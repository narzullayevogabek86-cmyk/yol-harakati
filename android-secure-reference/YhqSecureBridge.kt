package com.yolharakati.security

import android.webkit.JavascriptInterface

class YhqSecureBridge(
    private val keyManager: YhqKeystoreKeyManager
) {
    @JavascriptInterface
    fun getQuestionsKey(): String {
        return keyManager.getQuestionsKeyForJs()
    }

    @JavascriptInterface
    fun getOfflineQuestionsPassphrase(): String {
        return keyManager.getQuestionsKeyForJs()
    }
}

