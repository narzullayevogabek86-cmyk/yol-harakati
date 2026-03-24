const fs = require('fs/promises');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const IMAGES_DIR = path.join(ROOT_DIR, 'images');
const NATIVE_SECURE_SOURCE_DIR = path.join(ROOT_DIR, 'native-secure');
const ANDROID_SECURE_ASSETS_DIR = path.join(ROOT_DIR, 'android', 'app', 'src', 'main', 'assets', 'secure');
const BUILD_TARGET = process.env.YHQ_BUILD_TARGET === 'native' ? 'native' : 'web';
const SOURCE_FILES_WITH_IMAGE_REFS = ['index.html', 'style.css', 'script.js'];
const NATIVE_SIGNS_ALLOWED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);
const STATIC_ROOT_FILES = [
    'style.css',
    'fines-data.js',
    'fines-data.ru.js',
    'fines-data.qq.js',
    'fines-data.tj.js',
    'signs-static.json',
    'signs-tg-translations.json'
];

async function ensureDistExists() {
    await fs.mkdir(DIST_DIR, { recursive: true });
}

async function collectProtectedQuestionImageFiles() {
    const questionFiles = [
        'questions.uz.json',
        'questions.qq.json',
        'questions.ru.json',
        'questions.tg.json'
    ];
    const protectedFiles = new Set();

    await Promise.all(questionFiles.map(async (fileName) => {
        const filePath = path.join(ROOT_DIR, fileName);
        const raw = await fs.readFile(filePath, 'utf8').catch(() => null);
        if (!raw) {
            return;
        }

        let parsed;
        try {
            parsed = JSON.parse(raw);
        } catch (_error) {
            return;
        }

        const tickets = Array.isArray(parsed?.tickets)
            ? parsed.tickets
            : (Array.isArray(parsed) ? parsed : []);

        tickets.forEach((ticket) => {
            if (!Array.isArray(ticket?.questions)) {
                return;
            }

            ticket.questions.forEach((question) => {
                const imageRef = typeof question?.image === 'string'
                    ? question.image.trim()
                    : '';
                if (!imageRef.startsWith('images/')) {
                    return;
                }

                protectedFiles.add(path.basename(imageRef));
            });
        });
    }));

    return protectedFiles;
}

async function collectReferencedUiImageFiles() {
    const referencedFiles = new Set();
    const imageRefPattern = /images\/([^"'`)>\s]+)/g;

    await Promise.all(SOURCE_FILES_WITH_IMAGE_REFS.map(async (fileName) => {
        const filePath = path.join(ROOT_DIR, fileName);
        const raw = await fs.readFile(filePath, 'utf8').catch(() => '');
        if (!raw) {
            return;
        }

        for (const match of raw.matchAll(imageRefPattern)) {
            const imageFileName = match[1] ? path.basename(match[1].trim()) : '';
            if (imageFileName) {
                referencedFiles.add(imageFileName);
            }
        }
    }));

    return referencedFiles;
}

async function copyImagesDir() {
    const targetDir = path.join(DIST_DIR, 'images');
    await fs.rm(targetDir, { recursive: true, force: true });
    await fs.mkdir(targetDir, { recursive: true });

    const hiddenQuestionImages = BUILD_TARGET === 'native'
        ? await collectProtectedQuestionImageFiles()
        : new Set();
    const referencedUiImages = BUILD_TARGET === 'native'
        ? await collectReferencedUiImageFiles()
        : null;
    const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });

    await Promise.all(entries.map(async (entry) => {
        const sourcePath = path.join(IMAGES_DIR, entry.name);
        const targetPath = path.join(targetDir, entry.name);

        if (entry.isDirectory()) {
            await fs.cp(sourcePath, targetPath, { recursive: true });
            return;
        }

        if (!entry.isFile()) {
            return;
        }

        if (hiddenQuestionImages.has(entry.name)) {
            return;
        }

        if (BUILD_TARGET === 'native' && referencedUiImages && !referencedUiImages.has(entry.name)) {
            return;
        }

        await fs.copyFile(sourcePath, targetPath);
    }));
}

async function copySignsAssetDir(dirName) {
    const sourceDir = path.join(ROOT_DIR, dirName);
    const targetDir = path.join(DIST_DIR, dirName);

    await fs.rm(targetDir, { recursive: true, force: true });

    if (BUILD_TARGET !== 'native') {
        await fs.cp(sourceDir, targetDir, { recursive: true });
        return;
    }

    await fs.mkdir(targetDir, { recursive: true });
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });

    await Promise.all(entries.map(async (entry) => {
        if (!entry.isFile()) {
            return;
        }

        const ext = path.extname(entry.name).toLowerCase();
        if (!NATIVE_SIGNS_ALLOWED_EXTENSIONS.has(ext)) {
            return;
        }

        await fs.copyFile(
            path.join(sourceDir, entry.name),
            path.join(targetDir, entry.name)
        );
    }));
}

async function copyNativeSecureAssets() {
    if (BUILD_TARGET !== 'native') {
        return;
    }

    await fs.rm(ANDROID_SECURE_ASSETS_DIR, { recursive: true, force: true });
    await fs.mkdir(path.dirname(ANDROID_SECURE_ASSETS_DIR), { recursive: true });
    await fs.cp(NATIVE_SECURE_SOURCE_DIR, ANDROID_SECURE_ASSETS_DIR, { recursive: true });
}

async function copyRootStaticFiles() {
    await Promise.all(STATIC_ROOT_FILES.map(async (fileName) => {
        await fs.copyFile(
            path.join(ROOT_DIR, fileName),
            path.join(DIST_DIR, fileName)
        );
    }));
}

async function copyStaticDirs() {
    const entries = await fs.readdir(ROOT_DIR, { withFileTypes: true });
    const signsAssetDirs = entries
        .filter((entry) => entry.isDirectory() && entry.name.endsWith('_files'))
        .map((entry) => entry.name);

    await Promise.all([
        copyRootStaticFiles(),
        copyImagesDir(),
        ...signsAssetDirs.map((dirName) => copySignsAssetDir(dirName))
    ]);
}

async function main() {
    await ensureDistExists();
    await Promise.all([
        copyStaticDirs(),
        copyNativeSecureAssets()
    ]);
    process.stdout.write(`Built ${BUILD_TARGET} dist\n`);
}

main().catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
});
