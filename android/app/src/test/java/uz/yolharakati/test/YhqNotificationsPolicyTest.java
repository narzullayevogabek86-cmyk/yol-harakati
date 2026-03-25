package uz.yolharakati.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class YhqNotificationsPolicyTest {
    @Test
    public void startupPromptRequiresEnabledMissingGrantAndFreshPromptState() {
        assertTrue(
            YhqNotificationsPolicy.shouldPromptOnStartup(
                true,
                false,
                false,
                YhqNotificationsPolicy.RUNTIME_NOTIFICATIONS_API_LEVEL
            )
        );
        assertFalse(
            YhqNotificationsPolicy.shouldPromptOnStartup(
                true,
                false,
                true,
                YhqNotificationsPolicy.RUNTIME_NOTIFICATIONS_API_LEVEL
            )
        );
    }

    @Test
    public void enablingNotificationsRequestsRuntimePermissionWhenNeeded() {
        assertEquals(
            YhqNotificationsPolicy.PreferenceChangeAction.REQUEST_RUNTIME_PERMISSION,
            YhqNotificationsPolicy.resolvePreferenceChange(
                true,
                false,
                true,
                YhqNotificationsPolicy.RUNTIME_NOTIFICATIONS_API_LEVEL
            )
        );
    }

    @Test
    public void enablingNotificationsSkipsRuntimePromptWhenAlreadyGranted() {
        assertEquals(
            YhqNotificationsPolicy.PreferenceChangeAction.SYNC_STATE,
            YhqNotificationsPolicy.resolvePreferenceChange(
                true,
                true,
                true,
                YhqNotificationsPolicy.RUNTIME_NOTIFICATIONS_API_LEVEL
            )
        );
    }

    @Test
    public void reminderScheduleOnlyActivatesWhenBothFlagsAreTrue() {
        assertTrue(YhqNotificationsPolicy.shouldActivateReminderSchedule(true, true));
        assertFalse(YhqNotificationsPolicy.shouldActivateReminderSchedule(true, false));
        assertFalse(YhqNotificationsPolicy.shouldActivateReminderSchedule(false, true));
    }
}
