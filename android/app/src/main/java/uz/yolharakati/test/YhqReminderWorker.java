package uz.yolharakati.test;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

public class YhqReminderWorker extends Worker {
    private static final int NOTIFICATION_ID = 4107;

    private static final String[] TITLES = new String[]{
        "Testni boshlang",
        "5 ta savol yeching",
        "Bugungi mashq vaqti",
        "Imtihonga tayyorlaning"
    };

    private static final String[] MESSAGES = new String[]{
        "2 daqiqa ajrating va bilimingizni tekshirib ko'ring.",
        "Hozir bitta bilet ochib ko'ring.",
        "Bugungi testni qoldirmang.",
        "Bir nechta savol bilan o'zingizni sinang."
    };

    public YhqReminderWorker(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        final Context context = getApplicationContext();
        if (!YhqReminderPreferences.areNotificationsEnabledPreference(context)) {
            return Result.success();
        }

        final NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);
        if (!notificationManager.areNotificationsEnabled()) {
            return Result.success();
        }

        YhqReminderScheduler.createNotificationChannel(context);

        final int index = (int) ((System.currentTimeMillis() / 86_400_000L) % TITLES.length);
        final String title = TITLES[Math.floorMod(index, TITLES.length)];
        final String message = MESSAGES[Math.floorMod(index, MESSAGES.length)];

        final NotificationCompat.Builder notification = new NotificationCompat.Builder(context, YhqReminderScheduler.CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_notification)
            .setContentTitle(title)
            .setContentText(message)
            .setStyle(new NotificationCompat.BigTextStyle().bigText(message))
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .setContentIntent(createLaunchIntent(context));

        notificationManager.notify(NOTIFICATION_ID, notification.build());
        return Result.success();
    }

    private static PendingIntent createLaunchIntent(Context context) {
        final Intent launchIntent = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
        if (launchIntent == null) {
            return null;
        }

        launchIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);

        return PendingIntent.getActivity(
            context,
            0,
            launchIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );
    }
}
