const fs = require('fs/promises');
const path = require('path');

const { APP_LANGUAGES, buildLocalizedSignsIndex } = require('./lib/signs');

const ROOT_DIR = __dirname;
const OUTPUT_FILE = path.join(ROOT_DIR, 'signs-static.json');

async function main() {
    const localizedCategories = await buildLocalizedSignsIndex({
        rootDir: ROOT_DIR,
        languageCodes: APP_LANGUAGES,
        allowMissingFolder: true
    });

    const payload = {
        version: 2,
        generatedAt: new Date().toISOString(),
        categories: localizedCategories.uz,
        localizedCategories
    };

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(payload), 'utf8');
    process.stdout.write('Built signs-static.json\n');
}

main().catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
});
