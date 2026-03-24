package uz.yolharakati.test;

import android.content.Context;
import android.content.SharedPreferences;

final class YhqReminderPreferences {
    static final String PREFS_NAME = "yhq_permissions";
    static final String NOTIFICATIONS_ENABLED_KEY = "notifications_enabled_v1";
    private static final String REMINDER_SCHEDULE_ACTIVE_KEY = "reminder_schedule_active_v1";

    private YhqReminderPreferences() {
    }

    static SharedPreferences getPreferences(Context context) {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
    }

    static boolean areNotificationsEnabledPreference(Context context) {
        return getPreferences(context).getBoolean(NOTIFICATIONS_ENABLED_KEY, true);
    }

    static void setNotificationsEnabledPreference(Context context, boolean enabled) {
        getPreferences(context).edit().putBoolean(NOTIFICATIONS_ENABLED_KEY, enabled).commit();
    }

    static boolean getLastReminderScheduleState(Context context) {
        return getPreferences(context).getBoolean(REMINDER_SCHEDULE_ACTIVE_KEY, false);
    }

    static void setLastReminderScheduleState(Context context, boolean active) {
        getPreferences(context).edit().putBoolean(REMINDER_SCHEDULE_ACTIVE_KEY, active).apply();
    }
}
