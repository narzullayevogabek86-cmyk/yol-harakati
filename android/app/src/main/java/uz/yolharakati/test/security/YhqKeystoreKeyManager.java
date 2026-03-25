package uz.yolharakati.test.security;

import android.content.Context;
import android.content.SharedPreferences;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyProperties;
import android.util.Base64;

import java.security.KeyStore;
import java.security.SecureRandom;
import java.util.Arrays;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;

public class YhqKeystoreKeyManager {
    private static final String ANDROID_KEYSTORE = "AndroidKeyStore";
    private static final String KEY_ALIAS = "yhq_offline_master_key";
    private static final String PREFS = "yhq_secure_prefs";
    private static final String ENC_DATA = "db_key_enc_data";
    private static final String ENC_IV = "db_key_enc_iv";
    private static final String AES_MODE = "AES/GCM/NoPadding";
    private static final int GCM_TAG_BITS = 128;
    private static final int RAW_KEY_LEN = 32;

    private final Context context;

    public YhqKeystoreKeyManager(Context context) {
        this.context = context.getApplicationContext();
    }

    public synchronized byte[] getOrCreateDbPassphraseBytes() {
        try {
            final SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
            final String storedData = prefs.getString(ENC_DATA, null);
            final String storedIv = prefs.getString(ENC_IV, null);

            if ((storedData == null) != (storedIv == null)) {
                clearStoredPassphrase(prefs);
            }

            if (storedData != null && storedIv != null) {
                final byte[] restored = decryptFromPrefs(storedData, storedIv);
                try {
                    return Base64.encode(restored, Base64.NO_WRAP);
                } finally {
                    Arrays.fill(restored, (byte) 0);
                }
            }

            final byte[] raw = new byte[RAW_KEY_LEN];
            new SecureRandom().nextBytes(raw);
            final String[] encrypted = encryptForPrefs(raw);

            persistEncryptedKey(prefs, encrypted[0], encrypted[1]);
            try {
                return Base64.encode(raw, Base64.NO_WRAP);
            } finally {
                Arrays.fill(raw, (byte) 0);
            }
        } catch (Exception error) {
            throw new IllegalStateException("Unable to provide secure DB passphrase", error);
        }
    }

    public synchronized void resetDbPassphraseState() {
        try {
            final SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
            clearStoredPassphrase(prefs);

            final KeyStore keyStore = KeyStore.getInstance(ANDROID_KEYSTORE);
            keyStore.load(null);
            if (keyStore.containsAlias(KEY_ALIAS)) {
                keyStore.deleteEntry(KEY_ALIAS);
            }
        } catch (Exception error) {
            throw new IllegalStateException("Unable to reset secure DB passphrase state", error);
        }
    }

    private void persistEncryptedKey(SharedPreferences prefs, String encData, String encIv) {
        final boolean committed = prefs.edit()
            .putString(ENC_DATA, encData)
            .putString(ENC_IV, encIv)
            .commit();

        if (!committed) {
            throw new IllegalStateException("Unable to persist secure DB passphrase");
        }

        if (prefs.getString(ENC_DATA, null) == null || prefs.getString(ENC_IV, null) == null) {
            throw new IllegalStateException("Secure DB passphrase write verification failed");
        }
    }

    private void clearStoredPassphrase(SharedPreferences prefs) {
        final boolean committed = prefs.edit()
            .remove(ENC_DATA)
            .remove(ENC_IV)
            .commit();

        if (!committed) {
            throw new IllegalStateException("Unable to clear secure DB passphrase state");
        }
    }

    private String[] encryptForPrefs(byte[] raw) throws Exception {
        final Cipher cipher = Cipher.getInstance(AES_MODE);
        cipher.init(Cipher.ENCRYPT_MODE, getOrCreateMasterKey());
        final byte[] encrypted = cipher.doFinal(raw);
        final byte[] iv = cipher.getIV();

        return new String[] {
            Base64.encodeToString(encrypted, Base64.NO_WRAP),
            Base64.encodeToString(iv, Base64.NO_WRAP)
        };
    }

    private byte[] decryptFromPrefs(String encDataB64, String ivB64) throws Exception {
        final Cipher cipher = Cipher.getInstance(AES_MODE);
        final GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_BITS, Base64.decode(ivB64, Base64.DEFAULT));
        cipher.init(Cipher.DECRYPT_MODE, getOrCreateMasterKey(), spec);
        return cipher.doFinal(Base64.decode(encDataB64, Base64.DEFAULT));
    }

    private SecretKey getOrCreateMasterKey() throws Exception {
        final KeyStore keyStore = KeyStore.getInstance(ANDROID_KEYSTORE);
        keyStore.load(null);
        final java.security.Key existing = keyStore.getKey(KEY_ALIAS, null);
        if (existing instanceof SecretKey) {
            return (SecretKey) existing;
        }

        final KeyGenerator keyGenerator = KeyGenerator.getInstance(
            KeyProperties.KEY_ALGORITHM_AES,
            ANDROID_KEYSTORE
        );

        final KeyGenParameterSpec spec = new KeyGenParameterSpec.Builder(
            KEY_ALIAS,
            KeyProperties.PURPOSE_ENCRYPT | KeyProperties.PURPOSE_DECRYPT
        )
            .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
            .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
            .setUserAuthenticationRequired(false)
            .build();

        keyGenerator.init(spec);
        return keyGenerator.generateKey();
    }
}
