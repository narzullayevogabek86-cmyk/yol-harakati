const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const ROOT_DIR = __dirname;
const OUTPUT_DIR = path.join(ROOT_DIR, 'protected');
const NATIVE_SECURE_DIR = path.join(ROOT_DIR, 'native-secure');
const NATIVE_SECURE_QUESTIONS_DIR = path.join(NATIVE_SECURE_DIR, 'questions');
const NATIVE_SECURE_IMAGES_DIR = path.join(NATIVE_SECURE_DIR, 'question-images');
const PBKDF2_ITERATIONS = 180000;
const KEY_SIZE_BYTES = 32;
const IV_SIZE_BYTES = 12;
const SALT_SIZE_BYTES = 16;
const SECRET_PARTS = ['YHQ', '::', 'offline', '::', 'guard', '::', '2026'];
const PASSPHRASE = SECRET_PARTS.join('');
const IMAGE_MAGIC = Buffer.from('YHQIMGV1', 'utf8');
const IMAGE_SECRET_NAMESPACE = '::native-image-key';
const MISSING_IMAGE_FALLBACK = 'images/umumiiy rasm bu son qoyilmaganlarga qoyilsin.jpg';
const QUESTIONS_FILES = [
    { source: 'questions.uz.json', output: 'questions.uz.enc.json' },
    { source: 'questions.qq.json', output: 'questions.qq.enc.json' },
    { source: 'questions.ru.json', output: 'questions.ru.enc.json' },
    { source: 'questions.tg.json', output: 'questions.tg.enc.json' }
];

function toBase64(buffer) {
    return Buffer.from(buffer).toString('base64');
}

function encryptJson(plainText) {
    const salt = crypto.randomBytes(SALT_SIZE_BYTES);
    const iv = crypto.randomBytes(IV_SIZE_BYTES);
    const key = crypto.pbkdf2Sync(PASSPHRASE, salt, PBKDF2_ITERATIONS, KEY_SIZE_BYTES, 'sha256');
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();

    return {
        v: 1,
        alg: 'aes-256-gcm',
        kdf: 'pbkdf2-sha256',
        iter: PBKDF2_ITERATIONS,
        salt: toBase64(salt),
        iv: toBase64(iv),
        tag: toBase64(tag),
        data: toBase64(encrypted)
    };
}

function createImageKey() {
    return crypto
        .createHash('sha256')
        .update(PASSPHRASE + IMAGE_SECRET_NAMESPACE, 'utf8')
        .digest();
}

function createProtectedImageAssetName(imageRef) {
    return crypto
        .createHash('sha256')
        .update(String(imageRef || ''), 'utf8')
        .digest('hex')
        .slice(0, 40) + '.bin';
}

function encryptImageBuffer(buffer) {
    const iv = crypto.randomBytes(IV_SIZE_BYTES);
    const cipher = crypto.createCipheriv('aes-256-gcm', createImageKey(), iv);
    const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([IMAGE_MAGIC, iv, encrypted, tag]);
}

async function collectProtectedImageRefs() {
    const refs = new Set();

    await Promise.all(QUESTIONS_FILES.map(async ({ source }) => {
        const raw = await fs.readFile(path.join(ROOT_DIR, source), 'utf8');
        const parsed = JSON.parse(raw);
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
                refs.add(imageRef.replace(/\\/g, '/'));
            });
        });
    }));

    return Array.from(refs).sort();
}

async function main() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.rm(NATIVE_SECURE_DIR, { recursive: true, force: true });
    await fs.mkdir(NATIVE_SECURE_QUESTIONS_DIR, { recursive: true });
    await fs.mkdir(NATIVE_SECURE_IMAGES_DIR, { recursive: true });

    await Promise.all(QUESTIONS_FILES.map(async ({ source, output }) => {
        const sourcePath = path.join(ROOT_DIR, source);
        const outputPath = path.join(OUTPUT_DIR, output);
        const nativeOutputPath = path.join(NATIVE_SECURE_QUESTIONS_DIR, output);
        const jsonRaw = await fs.readFile(sourcePath, 'utf8');
        const payload = encryptJson(jsonRaw);
        const payloadText = JSON.stringify(payload);
        await Promise.all([
            fs.writeFile(outputPath, payloadText, 'utf8'),
            fs.writeFile(nativeOutputPath, payloadText, 'utf8')
        ]);
    }));

    const imageRefs = await collectProtectedImageRefs();
    await Promise.all(imageRefs.map(async (imageRef) => {
        const inputPath = path.join(ROOT_DIR, imageRef);
        const assetName = createProtectedImageAssetName(imageRef);
        const outputPath = path.join(NATIVE_SECURE_IMAGES_DIR, assetName);
        let buffer;
        try {
            buffer = await fs.readFile(inputPath);
        } catch (error) {
            buffer = await fs.readFile(path.join(ROOT_DIR, MISSING_IMAGE_FALLBACK));
        }
        await fs.writeFile(outputPath, encryptImageBuffer(buffer));
    }));

    process.stdout.write(`Built protected questions payloads and ${imageRefs.length} protected images\n`);
}

main().catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
});
