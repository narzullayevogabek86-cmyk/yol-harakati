const {
    normalizeLanguage,
    sanitizeDataset,
    getRawDataset,
    json
} = require('./lib/shared');

exports.handler = async (event) => {
    try {
        const language = normalizeLanguage(event?.queryStringParameters?.lang);
        const dataset = await getRawDataset(language);

        return json(200, {
            ok: true,
            language,
            tickets: sanitizeDataset(dataset)
        });
    } catch (error) {
        return json(500, {
            ok: false,
            error: 'QUESTIONS_LOAD_FAILED'
        });
    }
};
