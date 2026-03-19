package com.yolharakati.security

import android.content.Context
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import android.util.Base64
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

class YhqKeystoreKeyManager(private val context: Context) {
    companion object {
        private const val ANDROID_KEYSTORE = "AndroidKeyStore"
        private const val KEY_ALIAS = "yhq_offline_master_key"
        private const val PREFS = "yhq_secure_prefs"
        private const val ENC_DATA = "db_key_enc_data"
        private const val ENC_IV = "db_key_enc_iv"
        private const val AES_MODE = "AES/GCM/NoPadding"
        private const val GCM_TAG_BITS = 128
        private const val RAW_KEY_LEN = 32
    }

    fun getOrCreateDbPassphraseBytes(): ByteArray {
        val prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        val storedData = prefs.getString(ENC_DATA, null)
        val storedIv = prefs.getString(ENC_IV, null)

        if (!storedData.isNullOrBlank() && !storedIv.isNullOrBlank()) {
            return decryptFromPrefs(storedData, storedIv)
        }

        val raw = ByteArray(RAW_KEY_LEN).also { java.security.SecureRandom().nextBytes(it) }
        val encrypted = encryptForPrefs(raw)

        prefs.edit()
            .putString(ENC_DATA, encrypted.first)
            .putString(ENC_IV, encrypted.second)
            .apply()

        return raw
    }

    fun getQuestionsKeyForJs(): String {
        val bytes = getOrCreateDbPassphraseBytes()
        return Base64.encodeToString(bytes, Base64.NO_WRAP)
    }

    private fun encryptForPrefs(raw: ByteArray): Pair<String, String> {
        val cipher = Cipher.getInstance(AES_MODE)
        cipher.init(Cipher.ENCRYPT_MODE, getOrCreateMasterKey())
        val encrypted = cipher.doFinal(raw)
        val iv = cipher.iv
        return Pair(
            Base64.encodeToString(encrypted, Base64.NO_WRAP),
            Base64.encodeToString(iv, Base64.NO_WRAP)
        )
    }

    private fun decryptFromPrefs(encDataB64: String, ivB64: String): ByteArray {
        val cipher = Cipher.getInstance(AES_MODE)
        val spec = GCMParameterSpec(GCM_TAG_BITS, Base64.decode(ivB64, Base64.DEFAULT))
        cipher.init(Cipher.DECRYPT_MODE, getOrCreateMasterKey(), spec)
        return cipher.doFinal(Base64.decode(encDataB64, Base64.DEFAULT))
    }

    private fun getOrCreateMasterKey(): SecretKey {
        val ks = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }
        val existing = ks.getKey(KEY_ALIAS, null)
        if (existing is SecretKey) {
            return existing
        }

        val keyGenerator = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, ANDROID_KEYSTORE)
        val spec = KeyGenParameterSpec.Builder(
            KEY_ALIAS,
            KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
        )
            .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
            .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
            .setUserAuthenticationRequired(false)
            .build()

        keyGenerator.init(spec)
        return keyGenerator.generateKey()
    }
}

