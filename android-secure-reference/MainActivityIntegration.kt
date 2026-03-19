package com.yolharakati

import android.os.Bundle
import com.getcapacitor.BridgeActivity
import com.yolharakati.security.YhqKeystoreKeyManager
import com.yolharakati.security.YhqSecureBridge

/**
 * Reference patch for Capacitor MainActivity.
 * Merge this logic into your actual MainActivity.
 */
class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val webView = bridge.webView
        webView.settings.javaScriptEnabled = true
        webView.addJavascriptInterface(
            YhqSecureBridge(YhqKeystoreKeyManager(this)),
            "YHQSecureBridge"
        )
    }
}

