package uz.yolharakati.test.security;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "secure_questions")
public class SecureQuestionsEntity {
    @PrimaryKey
    @NonNull
    public String language;

    @ColumnInfo(name = "tickets_json")
    @NonNull
    public String ticketsJson;

    @ColumnInfo(name = "updated_at")
    public long updatedAt;

    public SecureQuestionsEntity(@NonNull String language, @NonNull String ticketsJson, long updatedAt) {
        this.language = language;
        this.ticketsJson = ticketsJson;
        this.updatedAt = updatedAt;
    }
}
