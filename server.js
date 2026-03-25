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
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DIST_INDEX_FILE = path.join(DIST_DIR, 'index.html');
const SIGNS_TG_TRANSLATIONS_FILE = 'signs-tg-translations.json';

app.use(express.json({ limit: '1mb' }));
app.use((error, req, res, next) => {
    if (
        error
        && error instanceof SyntaxError
        && error.status === 400
        && Object.prototype.hasOwnProperty.call(error, 'body')
        && req.path.startsWith('/api/')
    ) {
        return res.status(400).json({
            ok: false,
            error: 'INVALID_JSON_BODY'
        });
    }

    return next(error);
});

app.get(['/', '/index.html'], async (_req, res) => {
    try {
        await fs.access(DIST_INDEX_FILE);
        res.sendFile(DIST_INDEX_FILE);
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

app.use('/api', (_req, res) => {
    res.status(404).json({
        ok: false,
        error: 'API_ROUTE_NOT_FOUND'
    });
});

app.use(express.static(DIST_DIR));

app.get('*', async (_req, res, next) => {
    try {
        await fs.access(DIST_INDEX_FILE);
        res.sendFile(DIST_INDEX_FILE);
    } catch (_error) {
        next();
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server ready on http://localhost:${PORT}`);
    });
}

module.exports = app;
