# Android Next Sprint Debt

These items stay out of the current release branch and should be scheduled explicitly in the next sprint:

1. Replace the manual permissions bridge built on `addJavascriptInterface` and `evaluateJavascript`
   with a typed Capacitor-facing API so release shrinker rules and lifecycle handling are simpler.
2. Move permission and UI lifecycle responsibilities out of `MainActivity`
   into focused Android components to reduce activity coupling.
3. Move reminder notification copy out of `YhqReminderWorker`
   into `strings.xml` so localization and content review stop depending on native code changes.
