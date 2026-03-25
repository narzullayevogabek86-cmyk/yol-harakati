const {
    LANGUAGE_FILES,
    QUIZ_MODE_STANDARD,
    QUIZ_MODE_FIFTY,
    normalizeLanguage,
    normalizeQuizMode,
    sanitizeDataset,
    buildQuizBank,
    getTicketExamConfig,
    getRawDataset: getRawDatasetFromRoot,
    getQuestionRecord: getQuestionRecordFromRoot,
    gradeTicketSubmission
} = require('../../../lib/quiz');
const { resolveProjectRoot } = require('../../../lib/project-root');

let rootDirPromise = null;

function json(statusCode, payload) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
    };
}

function parseJsonBody(event) {
    const rawBody = event?.body;
    if (rawBody == null || rawBody === '') {
        return {};
    }

    const bodyText = event?.isBase64Encoded
        ? Buffer.from(String(rawBody), 'base64').toString('utf8')
        : String(rawBody);

    try {
        const parsed = JSON.parse(bodyText);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
        error.code = 'INVALID_JSON_BODY';
        throw error;
    }
}

async function resolveQuestionsRootDir() {
    if (!rootDirPromise) {
        rootDirPromise = resolveProjectRoot({
            startDir: __dirname,
            requiredPaths: Array.from(new Set(Object.values(LANGUAGE_FILES)))
        });
    }

    return rootDirPromise;
}

async function getRawDataset(languageCode) {
    const rootDir = await resolveQuestionsRootDir();
    return getRawDatasetFromRoot(rootDir, languageCode);
}

async function getQuestionRecord(options) {
    const rootDir = await resolveQuestionsRootDir();
    return getQuestionRecordFromRoot({
        rootDir,
        ...options
    });
}

module.exports = {
    QUIZ_MODE_STANDARD,
    QUIZ_MODE_FIFTY,
    normalizeLanguage,
    normalizeQuizMode,
    sanitizeDataset,
    buildQuizBank,
    getTicketExamConfig,
    getRawDataset,
    getQuestionRecord,
    gradeTicketSubmission,
    json,
    parseJsonBody
};
