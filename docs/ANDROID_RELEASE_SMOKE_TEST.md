# Android release smoke test

Run these checks on a **release APK/AAB**, not debug.
ProGuard/R8 full mode can silently break the JS bridge even when debug passes.

## 1. Bootstrap flow
- Cold start the app.
- Verify the first `bootstrapState` event has `status: "loading"` and `fatal: false`.
- Verify a second event follows with `status: "ready"` and `fatal: false`.
- There must be no terminal-failure event (`fatal: true`) on a clean install.

> **Payload reference:** fields are `status`, `fatal`, `code` (optional), `detailMessage` (optional).
> There is no `loading` boolean field. Use `status` to distinguish state.

## 2. Notification permission prompt (Android 13+)
- Launch on a device running API 33+.
- Trigger the notification permission prompt from Settings or first-run flow.
- Confirm the JS side receives an updated permission snapshot after grant/deny.
- Deny, then re-enter the app: snapshot must reflect denied state.

## 3. Reminder toggle persistence
- Enable reminders from Settings.
- Force-stop the app and relaunch.
- Confirm reminders are still enabled (preference persists across process death).
- Disable reminders, force-stop, relaunch, confirm disabled state persists.

## 4. Quiz flow end to end
- Run a question search and confirm results appear.
- Open a question, submit one answer, then submit a full quiz.
- Open at least one encrypted image-backed question and confirm the image renders.

## 5. Permission change from system Settings
- Grant notification permission from the app.
- Go to system Settings → App → Permissions → revoke notifications.
- Return to the app (via recents, not cold start).
- Verify the bridge emits exactly one fresh permission snapshot reflecting revoked state.

## 6. Release build ProGuard check
- After steps 1–5 pass on debug, repeat step 1 and step 5 on a **release** build.
- These two steps exercise `addJavascriptInterface` / `evaluateJavascript` paths
  that ProGuard can break if keep rules are incomplete.
- For step 1, confirm the `status` field is present in both bootstrap events.

## Recommended devices
- API 33+ physical device: required for runtime notification permission (steps 2, 5, 6).
- Mid-range API 28–30 device (3 GB RAM): required to catch latency issues on
  `searchQuestions`, `getImage`, and `submitQuiz` (step 4).
  Flag if any call exceeds 300 ms on first invocation after cold start.
