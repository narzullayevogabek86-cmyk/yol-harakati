const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const CleanCSS = require('clean-css');
const JavaScriptObfuscator = require('javascript-obfuscator');

const ROOT_DIR = __dirname;
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const MANIFEST_PATH = path.join(ASSETS_DIR, 'manifest.json');
const BUILD_TARGET = process.env.YHQ_BUILD_TARGET === 'native' ? 'native' : 'web';

function createHash(content) {
    return crypto.createHash('sha256').update(content).digest('hex').slice(0, 12);
}

async function ensureAssetsDir() {
    await fs.mkdir(ASSETS_DIR, { recursive: true });
}

async function cleanupOldAssets(nextFiles) {
    const entries = await fs.readdir(ASSETS_DIR, { withFileTypes: true }).catch(() => []);
    const keep = new Set(nextFiles);

    await Promise.all(entries.map(async (entry) => {
        if (!entry.isFile()) return;
        if (entry.name === 'manifest.json') return;
        if (keep.has(entry.name)) return;
        await fs.unlink(path.join(ASSETS_DIR, entry.name)).catch(() => {});
    }));
}

async function buildCssAsset() {
    const sourceCss = await fs.readFile(path.join(ROOT_DIR, 'style.css'), 'utf8');
    const result = new CleanCSS({ level: 2 }).minify(sourceCss);
    if (Array.isArray(result.errors) && result.errors.length > 0) {
        throw new Error(result.errors.join('\n'));
    }

    const cssContent = result.styles;
    const cssFileName = `app.${createHash(cssContent)}.css`;
    await fs.writeFile(path.join(ASSETS_DIR, cssFileName), cssContent, 'utf8');
    return cssFileName;
}

async function buildJsAsset() {
    const [
        finesUz,
        finesRu,
        finesQq,
        finesTj,
        appJs
    ] = await Promise.all([
        fs.readFile(path.join(ROOT_DIR, 'fines-data.js'), 'utf8'),
        fs.readFile(path.join(ROOT_DIR, 'fines-data.ru.js'), 'utf8'),
        fs.readFile(path.join(ROOT_DIR, 'fines-data.qq.js'), 'utf8'),
        fs.readFile(path.join(ROOT_DIR, 'fines-data.tj.js'), 'utf8'),
        fs.readFile(path.join(ROOT_DIR, 'script.js'), 'utf8')
    ]);

    const bundleSource = [
        `window.__YHQ_BUILD_TARGET__=${JSON.stringify(BUILD_TARGET)};`,
        finesUz,
        'window.FINES_RAW_TEXT_UZ = window.FINES_RAW_TEXT;',
        finesRu,
        finesQq,
        finesTj,
        prepareAppSource(appJs)
    ].join('\n;\n');

    const obfuscated = JavaScriptObfuscator.obfuscate(bundleSource, {
        compact: true,
        simplify: true,
        stringArray: true,
        stringArrayThreshold: 0.75,
        splitStrings: true,
        splitStringsChunkLength: 8,
        identifierNamesGenerator: 'hexadecimal',
        transformObjectKeys: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        selfDefending: false,
        renameGlobals: false,
        unicodeEscapeSequence: false
    }).getObfuscatedCode();

    const jsFileName = `app.${createHash(obfuscated)}.js`;
    await fs.writeFile(path.join(ASSETS_DIR, jsFileName), obfuscated, 'utf8');
    return jsFileName;
}

function prepareAppSource(source) {
    if (BUILD_TARGET !== 'native') {
        return source
            .replace(/\/\*\s*WEB_SECURE_FALLBACK_START\s*\*\//g, '')
            .replace(/\/\*\s*WEB_SECURE_FALLBACK_END\s*\*\//g, '');
    }

    return source
        .replace(/\/\*\s*WEB_SECURE_FALLBACK_START\s*\*\/[\s\S]*?\/\*\s*WEB_SECURE_FALLBACK_END\s*\*\//g, '');
}

async function buildManifest(cssFileName, jsFileName) {
    const manifest = {
        css: `/assets/${cssFileName}`,
        js: `/assets/${jsFileName}`
    };
    await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
    return manifest;
}

async function main() {
    await ensureAssetsDir();
    const [cssFileName, jsFileName] = await Promise.all([
        buildCssAsset(),
        buildJsAsset()
    ]);
    await cleanupOldAssets([cssFileName, jsFileName]);
    await buildManifest(cssFileName, jsFileName);
    process.stdout.write(`Built assets: ${cssFileName}, ${jsFileName}\n`);
}

main().catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
});
