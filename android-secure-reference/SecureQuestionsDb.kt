package com.yolharakati.security

import android.content.Context
import net.sqlcipher.database.SQLiteDatabase
import net.sqlcipher.database.SQLiteOpenHelper

private const val DB_NAME = "questions_secure.db"
private const val DB_VERSION = 1

class SecureQuestionsDb private constructor(
    context: Context,
    private val passphrase: String
) : SQLiteOpenHelper(context, DB_NAME, null, DB_VERSION) {

    companion object {
        fun open(context: Context, keyManager: YhqKeystoreKeyManager): SQLiteDatabase {
            SQLiteDatabase.loadLibs(context)
            val helper = SecureQuestionsDb(context, keyManager.getQuestionsKeyForJs())
            return helper.getWritableDatabase(helper.passphrase)
        }
    }

    override fun onCreate(db: SQLiteDatabase) {
        db.execSQL(
            """
            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                language TEXT NOT NULL,
                ticket_number INTEGER NOT NULL,
                question_index INTEGER NOT NULL,
                question_text TEXT NOT NULL,
                answers_json TEXT NOT NULL,
                correct_index INTEGER NOT NULL,
                image_path TEXT,
                reference_text TEXT,
                article_text TEXT
            )
            """.trimIndent()
        )

        db.execSQL(
            "CREATE INDEX IF NOT EXISTS idx_questions_l_t_q ON questions(language, ticket_number, question_index)"
        )
    }

    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        // Keep migration explicit in real app versions.
    }
}
