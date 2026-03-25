package uz.yolharakati.test.security;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

import java.io.File;

import net.sqlcipher.database.SQLiteDatabase;
import net.sqlcipher.database.SupportFactory;

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
                final byte[] passphrase = keyManager.getOrCreateDbPassphraseBytes();
                final SupportFactory factory = new SupportFactory(passphrase, null, true);
                instance = Room.databaseBuilder(
                        context.getApplicationContext(),
                        SecureQuestionsDatabase.class,
                        DB_NAME
                    )
                    .openHelperFactory(factory)
                    .fallbackToDestructiveMigration()
                    .build();
            }
        }

        return instance;
    }

    public static void reset(Context context) {
        synchronized (SecureQuestionsDatabase.class) {
            if (instance != null) {
                instance.close();
                instance = null;
            }
        }

        final Context appContext = context.getApplicationContext();
        appContext.deleteDatabase(DB_NAME);

        final File databaseFile = appContext.getDatabasePath(DB_NAME);
        deleteIfExists(databaseFile);
        if (databaseFile != null) {
            deleteIfExists(new File(databaseFile.getPath() + "-wal"));
            deleteIfExists(new File(databaseFile.getPath() + "-shm"));
            deleteIfExists(new File(databaseFile.getPath() + "-journal"));
        }
    }

    private static void deleteIfExists(File file) {
        if (file != null && file.exists()) {
            file.delete();
        }
    }
}
