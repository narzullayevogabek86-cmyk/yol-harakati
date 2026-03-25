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
 * Instrumented tests for {@link YhqReminderPreferences}.
 *
 * <p>Uses a real {@link android.content.SharedPreferences} instance on the device.
 * Each test starts from a clean slate to avoid ordering dependence.
 */
@RunWith(AndroidJUnit4.class)
public class YhqReminderPreferencesInstrumentedTest {
    private Context appContext;

    @Before
    public void setUp() {
        appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
        YhqReminderPreferences.getPreferences(appContext).edit().clear().commit();
    }

    @After
    public void tearDown() {
        YhqReminderPreferences.getPreferences(appContext).edit().clear().commit();
    }

    // Notifications-enabled preference.

    @Test
    public void notificationsPreferenceDefaultsTrue() {
        assertTrue(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));
    }

    @Test
    public void notificationsPreferenceRoundTripsSynchronously() {
        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, false);
        assertFalse(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));

        YhqReminderPreferences.setNotificationsEnabledPreference(appContext, true);
        assertTrue(YhqReminderPreferences.areNotificationsEnabledPreference(appContext));
    }

    // Reminder schedule state preference.

    @Test
    public void reminderScheduleStateDefaultsFalse() {
        assertFalse(YhqReminderPreferences.getLastReminderScheduleState(appContext));
    }

    @Test
    public void reminderScheduleStateRoundTrips() {
        YhqReminderPreferences.setLastReminderScheduleState(appContext, true);
        assertTrue(YhqReminderPreferences.getLastReminderScheduleState(appContext));

        YhqReminderPreferences.setLastReminderScheduleState(appContext, false);
        assertFalse(YhqReminderPreferences.getLastReminderScheduleState(appContext));
    }
}
