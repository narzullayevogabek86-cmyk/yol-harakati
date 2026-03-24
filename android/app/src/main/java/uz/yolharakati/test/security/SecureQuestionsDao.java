package uz.yolharakati.test.security;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

@Dao
public interface SecureQuestionsDao {
    @Query("SELECT updated_at FROM secure_questions WHERE language = :language LIMIT 1")
    Long getSeedVersion(String language);

    @Query("SELECT tickets_json FROM secure_questions WHERE language = :language LIMIT 1")
    String getTicketsJson(String language);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void upsert(SecureQuestionsEntity entity);
}
