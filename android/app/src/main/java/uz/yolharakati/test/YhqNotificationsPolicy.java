package uz.yolharakati.test;

final class YhqNotificationsPolicy {
    static final int RUNTIME_NOTIFICATIONS_API_LEVEL = 33;

    enum PreferenceChangeAction {
        REQUEST_RUNTIME_PERMISSION,
        SYNC_STATE
    }

    private YhqNotificationsPolicy() {
    }

    static PreferenceChangeAction resolvePreferenceChange(
        boolean enabled,
        boolean notificationsGranted,
        boolean requestPermissionIfNeeded,
        int sdkInt
    ) {
        if (
            enabled
                && requestPermissionIfNeeded
                && sdkInt >= RUNTIME_NOTIFICATIONS_API_LEVEL
                && !notificationsGranted
        ) {
            return PreferenceChangeAction.REQUEST_RUNTIME_PERMISSION;
        }

        return PreferenceChangeAction.SYNC_STATE;
    }

    static boolean shouldPromptOnStartup(
        boolean remindersEnabled,
        boolean notificationsGranted,
        boolean startupPromptShown,
        int sdkInt
    ) {
        return remindersEnabled
            && sdkInt >= RUNTIME_NOTIFICATIONS_API_LEVEL
            && !notificationsGranted
            && !startupPromptShown;
    }

    static boolean shouldActivateReminderSchedule(boolean remindersEnabled, boolean notificationsGranted) {
        return remindersEnabled && notificationsGranted;
    }
}
