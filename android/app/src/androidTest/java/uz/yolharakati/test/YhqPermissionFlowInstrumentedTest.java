package uz.yolharakati.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import android.content.Context;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * Instrumented tests for notification preference and reminder-schedule state.
 *
 * <p><b>Important:</b> despite the legacy class name, this is not a full
 * runtime permission-dialog or WebView bridge integration test.
 *
 * <p><b>Scope:</b> verifies persisted notification preference writes and the
 * scheduling guard condition behind reminder enable/disable flows.
 */
@RunWith(AndroidJUnit4.class)
public class YhqPermissionFlowInstrumentedTest {
    private Context appContext;

    @Before
    public void setUp() {
        appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
        // Start clean so tests do not depend on execution order.
        YhqReminderPreferences.getPreferences(appContext).edit().clear().commit();
    }

    @After
    public void tearDown() {
        YhqReminderPreferences.getPreferences(appContext).edit().clear().commit();
    }

    // Preference state transitions.

    @Test
    public void enablingNotificationsPersistsTrue() {
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, true);
        assertTrue(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));
    }

    @Test
    public void disablingNotificationsPersistsFalse() {
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, true);
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, false);
        assertFalse(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));
    }

    @Test
    public void toggleOnThenOffPreferenceFollowsLastWrite() {
        // Rapid user toggles should leave only the final state persisted.
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, true);
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, false);
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, true);
        assertTrue(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));
    }

    // syncReminderSchedule guard, checked against real persisted state.

    @Test
    public void syncGuardReturnsFalseWhenStateUnchangedEnabled() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, true);
        final boolean previous = YhqReminderPreferences.getLastReminderScheduleState(appContext);
        assertFalse(YhqReminderScheduler.shouldSyncReminderSchedule(previous, true));
    }

    @Test
    public void syncGuardReturnsFalseWhenStateUnchangedDisabled() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, false);
        final boolean previous = YhqReminderPreferences.getLastReminderScheduleState(appContext);
        assertFalse(YhqReminderScheduler.shouldSyncReminderSchedule(previous, false));
    }

    @Test
    public void syncGuardReturnsTrueWhenStateChangesOffToOn() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, false);
        final boolean previous = YhqReminderPreferences.getLastReminderScheduleState(appContext);
        assertTrue(YhqReminderScheduler.shouldSyncReminderSchedule(previous, true));
    }

    @Test
    public void syncGuardReturnsTrueWhenStateChangesOnToOff() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, true);
        final boolean previous = YhqReminderPreferences.getLastReminderScheduleState(appContext);
        assertTrue(YhqReminderScheduler.shouldSyncReminderSchedule(previous, false));
    }

    @Test
    public void setLastReminderScheduleStatePersistsAcrossRead() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, true);
        assertTrue(YhqReminderPreferences.getLastReminderScheduleState(appContext));

        YhqReminderPreferences.setLastReminderScheduleState(appContext, false);
        assertFalse(YhqReminderPreferences.getLastReminderScheduleState(appContext));
    }
}
