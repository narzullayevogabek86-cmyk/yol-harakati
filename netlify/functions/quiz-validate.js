const {
    getQuestionRecord,
    json,
    parseJsonBody
} = require('./lib/shared');

exports.handler = async (event) => {
    try {
        if ((event?.httpMethod || '').toUpperCase() !== 'POST') {
            return json(405, { ok: false, error: 'METHOD_NOT_ALLOWED' });
        }

        const payload = parseJsonBody(event);
        const {
            language,
            mode,
            ticketNumber,
            questionIndex,
            answerIndex
        } = payload;

        const ticketPosition = Number(ticketNumber);
        const questionPosition = Number(questionIndex);
        const userAnswer = Number(answerIndex);
        if (
            !Number.isInteger(ticketPosition) || ticketPosition < 1 ||
            !Number.isInteger(questionPosition) || questionPosition < 0 ||
            !Number.isInteger(userAnswer)
        ) {
            return json(400, { ok: false, error: 'INVALID_ANSWER_REQUEST' });
        }

        const record = await getQuestionRecord({
            languageCode: language,
            mode,
            ticketNumber,
            questionIndex
        });
        if (!record || !Number.isInteger(record.question?.correct)) {
            return json(400, { ok: false, error: 'INVALID_ANSWER_REQUEST' });
        }

        return json(200, {
            ok: true,
            isCorrect: userAnswer === record.question.correct
        });
    } catch (error) {
        if (error?.code === 'INVALID_JSON_BODY') {
            return json(400, {
                ok: false,
                error: 'INVALID_JSON_BODY'
            });
        }

        return json(500, {
            ok: false,
            error: 'ANSWER_VALIDATION_FAILED'
        });
    }
};
