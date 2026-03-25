package uz.yolharakati.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit tests for {@link YhqReminderScheduler#shouldSyncReminderSchedule(boolean, boolean)}.
 */
public class YhqReminderSchedulerTest {
    @Test
    public void sameFalseStateSkipsReschedule() {
        // No state change means no WorkManager call.
        assertFalse(YhqReminderScheduler.shouldSyncReminderSchedule(false, false));
    }

    @Test
    public void sameTrueStateSkipsReschedule() {
        // Existing enabled state should not drift due to redundant reschedules.
        assertFalse(YhqReminderScheduler.shouldSyncReminderSchedule(true, true));
    }

    @Test
    public void falseToTrueReschedules() {
        // User enabled reminders; periodic work must be enqueued.
        assertTrue(YhqReminderScheduler.shouldSyncReminderSchedule(false, true));
    }

    @Test
    public void trueToFalseReschedules() {
        // User disabled reminders; unique work must be cancelled.
        assertTrue(YhqReminderScheduler.shouldSyncReminderSchedule(true, false));
    }
}
