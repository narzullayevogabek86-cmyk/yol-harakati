const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const {
    normalizeLanguage,
    normalizeQuizMode,
    sanitizeDataset,
    buildQuizBank,
    getRawDataset,
    getQuestionRecord,
    gradeTicketSubmission
} = require('./lib/quiz');
const {
    normalizeSignsCategory,
    normalizeSignsLanguage,
    getSignsItemsForCategory
} = require('./lib/signs');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;

const SIGNS_TG_TRANSLATIONS_FILE = 'signs-tg-translations.json';
const SAFE_CATEGORY_ASSET_EXTENSIONS = /\.(png|jpe?g|webp|gif|svg|css|js)$/i;
const ROOT_RESOLVED = path.resolve(ROOT_DIR);
const INDEX_CSS_TAG = '<link rel="stylesheet" href="style.css">';
const LEGACY_SCRIPT_BLOCK_PATTERN = /<script src="fines-data\.js"><\/script>\s*<script>\s*window\.FINES_RAW_TEXT_UZ = window\.FINES_RAW_TEXT;\s*<\/script>\s*<script src="fines-data\.ru\.js"><\/script>\s*<script src="fines-data\.qq\.js"><\/script>\s*<script src="fines-data\.tj\.js"><\/script>\s*<script src="script\.js"><\/script>/;

let appHtmlCache = null;
let assetManifestCache = null;

async function ensureAssetManifest() {
    if (assetManifestCache) {
        return assetManifestCache;
    }

    const raw = await fs.readFile(path.join(ROOT_DIR, 'assets', 'manifest.json'), 'utf8');
    const manifest = JSON.parse(raw);
    if (typeof manifest?.css !== 'string' || typeof manifest?.js !== 'string') {
        throw new Error('Invalid assets manifest');
    }

    assetManifestCache = manifest;
    return assetManifestCache;
}

async function buildAppHtml() {
    if (appHtmlCache) {
        return appHtmlCache;
    }

    const [indexHtml, manifest] = await Promise.all([
        fs.readFile(path.join(ROOT_DIR, 'index.html'), 'utf8'),
        ensureAssetManifest()
    ]);

    if (!indexHtml.includes(INDEX_CSS_TAG)) {
        throw new Error('Unable to locate style.css link in index.html');
    }
    if (!LEGACY_SCRIPT_BLOCK_PATTERN.test(indexHtml)) {
        throw new Error('Unable to locate legacy script block in index.html');
    }

    appHtmlCache = indexHtml
        .replace(INDEX_CSS_TAG, `<link rel="stylesheet" href="${manifest.css}">`)
        .replace(LEGACY_SCRIPT_BLOCK_PATTERN, `<script src="${manifest.js}" defer></script>`);

    return appHtmlCache;
}

function isPathInside(parentPath, childPath) {
    const normalizedParent = `${path.resolve(parentPath)}${path.sep}`;
    const normalizedChild = path.resolve(childPath);
    return normalizedChild.startsWith(normalizedParent);
}

app.use(express.json({ limit: '1mb' }));

app.get(['/', '/index.html'], async (_req, res) => {
    try {
        const html = await buildAppHtml();
        res.type('html').send(html);
    } catch (_error) {
        res.status(500).send('App load failed');
    }
});

app.get('/signs-tg-translations.json', (_req, res) => {
    res.sendFile(path.join(ROOT_DIR, SIGNS_TG_TRANSLATIONS_FILE), (error) => {
        if (error && !res.headersSent) {
            res.status(404).json({
                ok: false,
                error: 'SIGNS_TG_TRANSLATIONS_NOT_FOUND'
            });
        }
    });
});

app.get('/signs-static.json', (_req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'signs-static.json'), (error) => {
        if (error && !res.headersSent) {
            res.status(404).json({
                ok: false,
                error: 'SIGNS_STATIC_NOT_FOUND'
            });
        }
    });
});

app.get('/api/questions', async (req, res) => {
    try {
        const language = normalizeLanguage(req.query.lang);
        const dataset = await getRawDataset(ROOT_DIR, language);

        res.json({
            ok: true,
            language,
            tickets: sanitizeDataset(dataset)
        });
    } catch (_error) {
        res.status(500).json({
            ok: false,
            error: 'QUESTIONS_LOAD_FAILED'
        });
    }
});

app.get('/api/signs', async (req, res) => {
    try {
        const category = normalizeSignsCategory(String(req.query.category || ''));
        if (!category) {
            return res.status(400).json({
                ok: false,
                error: 'INVALID_CATEGORY'
            });
        }

        const language = normalizeSignsLanguage(String(req.query.lang || req.query.language || 'uz'));
        const items = await getSignsItemsForCategory({
            rootDir: ROOT_DIR,
            categoryId: category,
            languageCode: language
        });

        return res.json({
            ok: true,
            category,
            language,
            items
        });
    } catch (_error) {
        return res.status(500).json({
            ok: false,
            error: 'SIGNS_LOAD_FAILED'
        });
    }
});

app.post('/api/quiz/validate', async (req, res) => {
    try {
        const {
            language,
            mode,
            ticketNumber,
            questionIndex,
            answerIndex
        } = req.body || {};

        const record = await getQuestionRecord({
            rootDir: ROOT_DIR,
            languageCode: language,
            mode,
            ticketNumber,
            questionIndex
        });

        if (!record || !Number.isInteger(answerIndex)) {
            return res.status(400).json({
                ok: false,
                error: 'INVALID_ANSWER_REQUEST'
            });
        }

        return res.json({
            ok: true,
            isCorrect: answerIndex === record.question.correct
        });
    } catch (_error) {
        return res.status(500).json({
            ok: false,
            error: 'ANSWER_VALIDATION_FAILED'
        });
    }
});

app.post('/api/quiz/submit', async (req, res) => {
    try {
        const {
            language,
            mode,
            ticketNumber,
            answers
        } = req.body || {};

        if (!Array.isArray(answers)) {
            return res.status(400).json({
                ok: false,
                error: 'INVALID_SUBMISSION'
            });
        }

        const ticketPosition = Number(ticketNumber);
        if (!Number.isInteger(ticketPosition) || ticketPosition < 1) {
            return res.status(400).json({
                ok: false,
                error: 'INVALID_TICKET'
            });
        }

        const quizMode = normalizeQuizMode(mode);
        const dataset = await getRawDataset(ROOT_DIR, language);
        const bank = buildQuizBank(dataset, quizMode);
        const ticket = bank[ticketPosition - 1];
        if (!ticket || !Array.isArray(ticket.questions)) {
            return res.status(404).json({
                ok: false,
                error: 'TICKET_NOT_FOUND'
            });
        }

        const result = gradeTicketSubmission({
            ticket,
            ticketPosition,
            mode: quizMode,
            bankLength: bank.length,
            answers
        });

        return res.json({
            ok: true,
            ...result
        });
    } catch (_error) {
        return res.status(500).json({
            ok: false,
            error: 'QUIZ_SUBMIT_FAILED'
        });
    }
});

app.use('/assets', express.static(path.join(ROOT_DIR, 'assets'), {
    immutable: true,
    maxAge: '1y'
}));
app.use('/images', express.static(path.join(ROOT_DIR, 'images')));

app.get('/:folderName/:fileName', (req, res, next) => {
    const { folderName, fileName } = req.params;
    if (!folderName.endsWith('_files')) {
        return next();
    }
    if (!SAFE_CATEGORY_ASSET_EXTENSIONS.test(fileName)) {
        return next();
    }

    const folderPath = path.resolve(ROOT_DIR, folderName);
    const filePath = path.resolve(folderPath, fileName);
    if (!isPathInside(ROOT_RESOLVED, folderPath) || !isPathInside(folderPath, filePath)) {
        return res.status(400).send('Invalid path');
    }

    return res.sendFile(filePath, (error) => {
        if (error) {
            next();
        }
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server ready on http://localhost:${PORT}`);
    });
}

module.exports = app;
