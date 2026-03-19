const { resolveProjectRoot } = require('../../lib/project-root');
const {
    SIGNS_CATEGORY_FOLDERS,
    normalizeSignsCategory,
    normalizeSignsLanguage,
    getSignsItemsForCategory
} = require('../../lib/signs');

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

async function resolveSignsRootDir() {
    if (!rootDirPromise) {
        rootDirPromise = resolveProjectRoot({
            startDir: __dirname,
            requiredPaths: Object.values(SIGNS_CATEGORY_FOLDERS)
        });
    }

    return rootDirPromise;
}

exports.handler = async (event) => {
    try {
        if ((event?.httpMethod || '').toUpperCase() !== 'GET') {
            return json(405, { ok: false, error: 'METHOD_NOT_ALLOWED' });
        }

        const category = normalizeSignsCategory(String(event?.queryStringParameters?.category || ''));
        if (!category) {
            return json(400, { ok: false, error: 'INVALID_CATEGORY' });
        }

        const language = normalizeSignsLanguage(
            String(event?.queryStringParameters?.lang || event?.queryStringParameters?.language || 'uz')
        );
        const rootDir = await resolveSignsRootDir();
        const items = await getSignsItemsForCategory({
            rootDir,
            categoryId: category,
            languageCode: language
        });

        return json(200, {
            ok: true,
            category,
            language,
            items
        });
    } catch (_error) {
        return json(500, {
            ok: false,
            error: 'SIGNS_LOAD_FAILED'
        });
    }
};
