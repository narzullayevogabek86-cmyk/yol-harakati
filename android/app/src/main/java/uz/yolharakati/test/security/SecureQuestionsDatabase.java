package uz.yolharakati.test.security;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

import net.sqlcipher.database.SQLiteDatabase;
import net.sqlcipher.database.SupportFactory;

import java.nio.charset.StandardCharsets;

@Database(
    entities = { SecureQuestionsEntity.class },
    version = 1,
    exportSchema = false
)
public abstract class SecureQuestionsDatabase extends RoomDatabase {
    private static final String DB_NAME = "questions_secure_room.db";

    private static volatile SecureQuestionsDatabase instance;

    public abstract SecureQuestionsDao secureQuestionsDao();

    public static SecureQuestionsDatabase getInstance(Context context, YhqKeystoreKeyManager keyManager) {
        if (instance != null) {
            return instance;
        }

        synchronized (SecureQuestionsDatabase.class) {
            if (instance == null) {
                SQLiteDatabase.loadLibs(context);
                final byte[] passphrase = keyManager.getOrCreateDbPassphrase().getBytes(StandardCharsets.UTF_8);
                final SupportFactory factory = new SupportFactory(passphrase);
                instance = Room.databaseBuilder(
                        context.getApplicationContext(),
                        SecureQuestionsDatabase.class,
                        DB_NAME
                    )
                    .openHelperFactory(factory)
                    .allowMainThreadQueries()
                    .fallbackToDestructiveMigration()
                    .build();
            }
        }

        return instance;
    }
}
