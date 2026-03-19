const fs = require('fs');
const path = require('path');

const targetFile = path.join(
    __dirname,
    'node_modules',
    '@capacitor',
    'android',
    'capacitor',
    'src',
    'main',
    'java',
    'com',
    'getcapacitor',
    'plugin',
    'SystemBars.java'
);

const legacy = 'Build.VERSION_CODES.VANILLA_ICE_CREAM';
const replacement = '35';

try {
    if (!fs.existsSync(targetFile)) {
        process.stdout.write('patch-capacitor-android: target file not found, skip\n');
        process.exit(0);
    }

    const raw = fs.readFileSync(targetFile, 'utf8');
    if (!raw.includes(legacy)) {
        process.stdout.write('patch-capacitor-android: already patched\n');
        process.exit(0);
    }

    const next = raw.split(legacy).join(replacement);
    fs.writeFileSync(targetFile, next, 'utf8');
    process.stdout.write('patch-capacitor-android: patched SystemBars.java\n');
} catch (error) {
    process.stderr.write(`patch-capacitor-android failed: ${error.message}\n`);
    process.exit(1);
}

