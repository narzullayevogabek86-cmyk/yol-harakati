# Yol Harakati

This repository contains a static JavaScript web app for driving-test content, a local Express server, Netlify functions, and a Capacitor Android target.

## Commands

- `npm start`: rebuilds generated assets and starts the local server on port `3001`
- `npm run build`: generates encrypted question payloads and hashed web assets
- `npm run build:dist`: builds the deployable `dist/` folder for Netlify
- `npm run build:dist:native`: builds the native-ready `dist/` output and secure mobile assets
- `npm run android:sync`: rebuilds native assets and syncs the Capacitor Android project

## Source Layout

Edit these as the project source of truth:

- `index.html`, `style.css`, `script.js`
- `server.js`
- `lib/`
- `netlify/functions/`
- `questions*.json`
- `fines-data*.js`
- `images/`
- `*_files/` sign asset folders
- `signs-*.json`, `signs-*.csv`
- `build-*.js`, `patch-capacitor-android.js`

## Generated Outputs

These are build artifacts and should be regenerated instead of edited manually:

- `assets/`: hashed CSS/JS bundles plus `manifest.json`
- `protected/`: encrypted question payloads for the web build
- `native-secure/`: encrypted questions and images for the native build
- `signs-static.json`: generated sign metadata used by the app and deploy build
- `dist/`: deployable site output
- `.netlify/`, `.zisi-out/`: local deployment tooling output
- `android/app/src/main/assets/public/`: copied web assets for Capacitor
- `android/app/src/main/assets/secure/`: copied secure native payloads

## Working Rules

- Treat the root content files and data files as the canonical inputs.
- If `dist/`, `assets/`, `protected/`, or `native-secure/` look stale, rebuild them instead of patching them by hand.
- The next refactor target should be shared quiz/sign logic, which is currently duplicated across local server, Netlify functions, and build scripts.
