const fs = require('fs/promises');
const path = require('path');

const QUIZ_MODE_STANDARD = 'standard';
const QUIZ_MODE_FIFTY = 'fifty';
const FIFTY_EXAM_REGULAR_TICKETS = 24;
const FIFTY_EXAM_REGULAR_QUESTIONS = 50;
const FIFTY_EXAM_LAST_TICKET_QUESTIONS = 23;
const FINAL_TICKET_PASS_CORRECT = 3;

const LANGUAGE_FILES = {
    uz: 'questions.uz.json',
    uz_cyrl: 'questions.uz.json',
    kaa: 'questions.qq.json',
    ru: 'questions.ru.json',
    tg: 'questions.tg.json'
};

const questionsCacheByRoot = new Map();

function normalizeLanguage(languageCode) {
    return LANGUAGE_FILES[languageCode] ? languageCode : 'uz';
}

function normalizeQuizMode(mode) {
    return mode === QUIZ_MODE_FIFTY ? QUIZ_MODE_FIFTY : QUIZ_MODE_STANDARD;
}

function sanitizeQuestion(question) {
    const { correct, ...safeQuestion } = question || {};
    return safeQuestion;
}

function sanitizeDataset(dataset) {
    if (!Array.isArray(dataset)) {
        return [];
    }

    return dataset.map((ticket, ticketIndex) => ({
        ticketNumber: Number(ticket?.ticketNumber) || (ticketIndex + 1),
        questions: Array.isArray(ticket?.questions)
            ? ticket.questions.filter(Boolean).map(sanitizeQuestion)
            : []
    }));
}

function buildQuizBank(dataset, mode) {
    if (!Array.isArray(dataset)) {
        return [];
    }

    if (mode !== QUIZ_MODE_FIFTY) {
        return dataset;
    }

    const allQuestions = [];
    dataset.forEach((ticket, ticketIndex) => {
        const ticketQuestions = Array.isArray(ticket?.questions) ? ticket.questions.filter(Boolean) : [];
        ticketQuestions.forEach((question, questionIndex) => {
            allQuestions.push({
                ...question,
                sourceTicketNumber: ticketIndex + 1,
                sourceQuestionNumber: questionIndex + 1
            });
        });
    });

    const tickets = [];
    let cursor = 0;

    for (let index = 0; index < FIFTY_EXAM_REGULAR_TICKETS; index += 1) {
        tickets.push({
            ticketNumber: index + 1,
            questions: allQuestions.slice(cursor, cursor + FIFTY_EXAM_REGULAR_QUESTIONS)
        });
        cursor += FIFTY_EXAM_REGULAR_QUESTIONS;
    }

    tickets.push({
        ticketNumber: FIFTY_EXAM_REGULAR_TICKETS + 1,
        questions: allQuestions.slice(cursor, cursor + FIFTY_EXAM_LAST_TICKET_QUESTIONS)
    });

    return tickets;
}

function getTicketExamConfig(ticket, ticketNumber, mode, bankLength) {
    const totalQuestions = Array.isArray(ticket?.questions) ? ticket.questions.length : 0;
    if (mode === QUIZ_MODE_FIFTY) {
        return {
            totalQuestions,
            requiredCorrect: Math.ceil(totalQuestions * 0.9)
        };
    }

    const isFinalShortTicket = ticketNumber === bankLength && totalQuestions === 3;
    if (isFinalShortTicket) {
        return {
            totalQuestions,
            requiredCorrect: Math.min(FINAL_TICKET_PASS_CORRECT, totalQuestions)
        };
    }

    return {
        totalQuestions,
        requiredCorrect: Math.ceil(totalQuestions * 0.9)
    };
}

async function ensureQuestionsCache(rootDir) {
    const cacheKey = path.resolve(rootDir);
    if (questionsCacheByRoot.has(cacheKey)) {
        return questionsCacheByRoot.get(cacheKey);
    }

    const uniqueEntries = Array.from(new Set(Object.values(LANGUAGE_FILES)));
    const loaded = await Promise.all(uniqueEntries.map(async (fileName) => {
        const raw = await fs.readFile(path.join(cacheKey, fileName), 'utf8');
        return [fileName, JSON.parse(raw)];
    }));

    const byFileName = Object.fromEntries(loaded);
    const questionsCache = Object.fromEntries(
        Object.entries(LANGUAGE_FILES).map(([languageCode, fileName]) => [languageCode, byFileName[fileName]])
    );

    questionsCacheByRoot.set(cacheKey, questionsCache);
    return questionsCache;
}

async function getRawDataset(rootDir, languageCode) {
    const cache = await ensureQuestionsCache(rootDir);
    return cache[normalizeLanguage(languageCode)] || cache.uz;
}

async function getQuestionRecord({ rootDir, languageCode, mode, ticketNumber, questionIndex }) {
    const ticketPosition = Number(ticketNumber);
    const questionPosition = Number(questionIndex);
    if (!Number.isInteger(ticketPosition) || ticketPosition < 1) {
        return null;
    }
    if (!Number.isInteger(questionPosition) || questionPosition < 0) {
        return null;
    }

    const dataset = await getRawDataset(rootDir, languageCode);
    const quizMode = normalizeQuizMode(mode);
    const bank = buildQuizBank(dataset, quizMode);
    const ticket = bank[ticketPosition - 1];
    const question = ticket?.questions?.[questionPosition];
    if (!question) {
        return null;
    }

    return {
        ticket,
        bankLength: bank.length,
        question,
        sourceTicketNumber: Number(question.sourceTicketNumber) || ticketPosition,
        sourceQuestionNumber: Number(question.sourceQuestionNumber) || (questionPosition + 1)
    };
}

function gradeTicketSubmission({ ticket, ticketPosition, mode, bankLength, answers }) {
    const examConfig = getTicketExamConfig(ticket, ticketPosition, mode, bankLength);
    let correct = 0;

    const questionResults = ticket.questions.map((question, index) => {
        const userAnswer = Number.isInteger(answers[index]) ? answers[index] : null;
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) {
            correct += 1;
        }

        return {
            ticket: Number(question.sourceTicketNumber) || ticketPosition,
            question: Number(question.sourceQuestionNumber) || (index + 1),
            isWrong: !isCorrect
        };
    });

    return {
        correct,
        totalQuestions: examConfig.totalQuestions,
        requiredCorrect: examConfig.requiredCorrect,
        passed: correct >= examConfig.requiredCorrect,
        questionResults
    };
}

module.exports = {
    QUIZ_MODE_STANDARD,
    QUIZ_MODE_FIFTY,
    LANGUAGE_FILES,
    normalizeLanguage,
    normalizeQuizMode,
    sanitizeDataset,
    buildQuizBank,
    getTicketExamConfig,
    getRawDataset,
    getQuestionRecord,
    gradeTicketSubmission
};
