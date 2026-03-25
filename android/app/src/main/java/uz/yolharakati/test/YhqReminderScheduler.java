package uz.yolharakati.test;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;

import androidx.annotation.VisibleForTesting;
import androidx.work.ExistingPeriodicWorkPolicy;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;

import java.util.Calendar;
import java.util.concurrent.TimeUnit;

public final class YhqReminderScheduler {
    public static final String CHANNEL_ID = "yhq_test_reminders";

    private static final String UNIQUE_WORK_NAME = "yhq_daily_test_reminder";
    private static final int REMINDER_HOUR_OF_DAY = 20;
    private static final int REMINDER_MINUTE = 0;
    private static final long MIN_INITIAL_DELAY_MS = TimeUnit.MINUTES.toMillis(1);

    private YhqReminderScheduler() {
    }

    // Only touch WorkManager when the desired reminder state actually changed.
    @VisibleForTesting
    static boolean shouldSyncReminderSchedule(boolean previousState, boolean shouldSchedule) {
        return previousState != shouldSchedule;
    }

    public static void syncReminderSchedule(Context context, boolean shouldSchedule) {
        final boolean previousState = YhqReminderPreferences.getLastReminderScheduleState(context);
        if (!shouldSyncReminderSchedule(previousState, shouldSchedule)) {
            return;
        }

        if (shouldSchedule) {
            ensureReminderScheduled(context);
        } else {
            cancelReminder(context);
        }

        YhqReminderPreferences.setLastReminderScheduleState(context, shouldSchedule);
    }

    public static void ensureReminderScheduled(Context context) {
        createNotificationChannel(context);

        final long initialDelayMs = computeInitialDelayMs();
        final PeriodicWorkRequest request = new PeriodicWorkRequest.Builder(
            YhqReminderWorker.class,
            24,
            TimeUnit.HOURS
        )
            .setInitialDelay(initialDelayMs, TimeUnit.MILLISECONDS)
            .build();

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            UNIQUE_WORK_NAME,
            // KEEP avoids resetting the existing initial delay on redundant enable flows.
            ExistingPeriodicWorkPolicy.KEEP,
            request
        );
    }

    public static void cancelReminder(Context context) {
        WorkManager.getInstance(context).cancelUniqueWork(UNIQUE_WORK_NAME);
    }

    public static void createNotificationChannel(Context context) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return;
        }

        final NotificationManager manager = context.getSystemService(NotificationManager.class);
        if (manager == null) {
            return;
        }

        final NotificationChannel channel = new NotificationChannel(
            CHANNEL_ID,
            context.getString(R.string.notifications_channel_name),
            NotificationManager.IMPORTANCE_DEFAULT
        );
        channel.setDescription(context.getString(R.string.notifications_channel_description));
        channel.enableVibration(true);
        manager.createNotificationChannel(channel);
    }

    private static long computeInitialDelayMs() {
        // WorkManager should not fire immediately after enqueue.
        final Calendar now = Calendar.getInstance();
        final Calendar nextRun = Calendar.getInstance();
        nextRun.set(Calendar.HOUR_OF_DAY, REMINDER_HOUR_OF_DAY);
        nextRun.set(Calendar.MINUTE, REMINDER_MINUTE);
        nextRun.set(Calendar.SECOND, 0);
        nextRun.set(Calendar.MILLISECOND, 0);

        if (!nextRun.after(now)) {
            nextRun.add(Calendar.DAY_OF_YEAR, 1);
        }

        return Math.max(MIN_INITIAL_DELAY_MS, nextRun.getTimeInMillis() - now.getTimeInMillis());
    }
}
