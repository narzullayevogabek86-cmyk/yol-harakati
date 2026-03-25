const {
    normalizeQuizMode,
    buildQuizBank,
    getRawDataset,
    gradeTicketSubmission,
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
            answers
        } = payload;

        if (!Array.isArray(answers)) {
            return json(400, { ok: false, error: 'INVALID_SUBMISSION' });
        }

        const ticketPosition = Number(ticketNumber);
        if (!Number.isInteger(ticketPosition) || ticketPosition < 1) {
            return json(400, { ok: false, error: 'INVALID_TICKET' });
        }

        const dataset = await getRawDataset(language);
        const quizMode = normalizeQuizMode(mode);
        const bank = buildQuizBank(dataset, quizMode);
        const ticket = bank[ticketPosition - 1];

        if (!ticket || !Array.isArray(ticket.questions)) {
            return json(404, { ok: false, error: 'TICKET_NOT_FOUND' });
        }

        const result = gradeTicketSubmission({
            ticket,
            ticketPosition,
            mode: quizMode,
            bankLength: bank.length,
            answers
        });

        return json(200, {
            ok: true,
            ...result
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
            error: 'QUIZ_SUBMIT_FAILED'
        });
    }
};
