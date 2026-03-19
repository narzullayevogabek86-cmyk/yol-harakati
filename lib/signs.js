const fs = require('fs/promises');
const path = require('path');
const vm = require('vm');

const SIGNS_CATEGORY_FOLDERS = {
    warning: "ogohlantiruvchi belgilar_files",
    priority: "imtiyozli belgilar_files",
    prohibitory: "ta'qiqlovchi belgilar_files",
    mandatory: "Buyuruvchi belgilar_files",
    information: "Axborot-ko'rsatgich belgilar_files",
    service: "servis belgilar_files",
    extra: "qo'shimcha axborot belgilari_files",
    temporary: "vaqtinchalik yo'l belgilari_files",
    lights: "svetaforlar va tartibga soluvchining ishoralari_files",
    identification: "transport vositalarining tiniqlik belgilari_files",
    hazard: "xavflilik belgilari_files"
};

const APP_LANGUAGES = ['uz', 'uz_cyrl', 'kaa', 'ru', 'tg'];
const SIGNS_IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|gif|svg)$/i;
const SIGNS_BUNDLE_FILE_PATTERN = /^index-.*\.js$/i;
const SIGNS_TG_TRANSLATIONS_FILE = 'signs-tg-translations.json';
const SIGNS_KAA_TRANSLATIONS_FILE = 'signs-kaa-translations.json';
const SIGNS_SOURCE_LANGUAGE_BY_APP_LANGUAGE = {
    uz: 'uz',
    uz_cyrl: 'en',
    kaa: 'uz',
    tg: 'ru',
    ru: 'ru'
};
const SIGNS_CATEGORY_SOURCE_KEYS = {
    warning: 'ogohlantiruvchi_belgilar',
    priority: 'imtiyozli_belgilari',
    prohibitory: 'taqiqlovchi_belgilar',
    mandatory: 'buyuruvchi_belgilar',
    information: 'axborot_ishora_belgilari',
    service: 'servis_belgilari',
    extra: 'qoshimcha_axborot_belgilari',
    temporary: 'vaqtinchalik_yol_belgilari',
    lights: 'svetaforlar_va_tartibga_soluvchining_ishoralari',
    identification: 'transport_vositalarining_tiniqlik_belgilari',
    hazard: 'xavflilik_belgilari'
};
const SIGNS_KAA_TEXT_REPLACEMENTS = [
    [/\byo'?\s*harakati qoidalari\b/giu, 'jol háreketi qaǵıydaları'],
    [/\byo'?l belgilar(?:i|i bo'yicha)?\b/giu, 'jol belgileri'],
    [/\bogohlantiruvchi\b/giu, 'eskertiwshi'],
    [/\bimtiyozli\b/giu, 'imtiyazlı'],
    [/\btaqiqlovchi\b/giu, 'tıyıwshı'],
    [/\bbuyuruvchi\b/giu, 'buyırıwshı'],
    [/\baxborot\b/giu, 'xabar'],
    [/\bko'rsatgich\b/giu, 'kórsetkish'],
    [/\bqo'shimcha\b/giu, 'qosımsha'],
    [/\bvaqtinchalik\b/giu, 'waqtınshalıq'],
    [/\bxavflilik\b/giu, 'qáwiplilik'],
    [/\bxavfli\b/giu, 'qáwipli'],
    [/\bharakatlanish\b/giu, 'háreketleniw'],
    [/\bharakat\b/giu, 'háreket'],
    [/\bbo'yicha\b/giu, 'boyınsha'],
    [/\bbelgilari\b/giu, 'belgileri'],
    [/\bbelgilar\b/giu, 'belgiler'],
    [/\btransport vositalari\b/giu, 'transport quraları'],
    [/\btransport vositasi\b/giu, 'transport quralı'],
    [/\btransport vositalarining\b/giu, 'transport quralarınıń'],
    [/\btiniqlik\b/giu, 'taniqlıq'],
    [/\bva\b/giu, 'hám'],
    [/\byoki\b/giu, 'yaki'],
    [/\bbilan\b/giu, 'menen'],
    [/\btemir yo'l\b/giu, 'temir jol'],
    [/\byo'l\b/giu, 'jol'],
    [/\bo'\b/giu, 'ó'],
    [/\bg'\b/giu, 'ǵ'],
    [/O'/g, 'Ó'],
    [/o'/g, 'ó'],
    [/G'/g, 'Ǵ'],
    [/g'/g, 'ǵ']
];
const SIGNS_TG_FALLBACK_REPLACEMENTS = [
    [/\bЗнак\b/g, 'Аломат'],
    [/\bзнак\b/g, 'аломат'],
    [/\bзнаки\b/g, 'аломатҳо'],
    [/\bзнаков\b/g, 'аломатҳо'],
    [/\bдорожный\b/g, 'роҳ'],
    [/\bдорожные\b/g, 'роҳ'],
    [/\bдороги\b/g, 'роҳ'],
    [/\bдорога\b/g, 'роҳ'],
    [/\bдвижение\b/g, 'ҳаракат'],
    [/\bдвижения\b/g, 'ҳаракат'],
    [/\bналево\b/g, 'ба чап'],
    [/\bнаправо\b/g, 'ба рост'],
    [/\bпешеходный переход\b/g, 'гузаргоҳи пиёдагард'],
    [/\bтранспортных средств\b/g, 'воситаҳои нақлиёт'],
    [/\bтранспортного средства\b/g, 'воситаи нақлиёт'],
    [/\bзапрещается\b/g, 'манъ аст'],
    [/\bразрешается\b/g, 'иҷозат дода мешавад'],
    [/\bуказывает\b/g, 'нишон медиҳад'],
    [/\bуказывают\b/g, 'нишон медиҳанд']
];

const signsMetadataCache = new Map();
const signsTgTranslationsCache = new Map();
const signsKaaTranslationsCache = new Map();

function normalizeSignsCategory(categoryCode) {
    return SIGNS_CATEGORY_FOLDERS[categoryCode] ? categoryCode : null;
}

function normalizeSignsLanguage(languageCode) {
    const normalized = String(languageCode || 'uz').trim();
    return APP_LANGUAGES.includes(normalized) ? normalized : 'uz';
}

function getSignsSourceLanguage(languageCode) {
    return SIGNS_SOURCE_LANGUAGE_BY_APP_LANGUAGE[normalizeSignsLanguage(languageCode)] || 'uz';
}

function normalizeApostrophes(value) {
    return String(value || '').replace(/[ʻʼ`’‘]/g, "'");
}

function getTitleCaseFromSource(source, target) {
    if (!source || !target) {
        return target;
    }
    if (source === source.toUpperCase()) {
        return target.toUpperCase();
    }
    if (source[0] && source[0] === source[0].toUpperCase()) {
        return target[0].toUpperCase() + target.slice(1);
    }
    return target;
}

function replaceAllCaseAware(value, pattern, replacement) {
    return value.replace(pattern, (match) => getTitleCaseFromSource(match, replacement));
}

async function readTranslations(rootDir, fileName, cacheMap) {
    const cacheKey = path.resolve(rootDir);
    if (cacheMap.has(cacheKey)) {
        return cacheMap.get(cacheKey);
    }

    let parsed = {};
    try {
        const raw = await fs.readFile(path.join(cacheKey, fileName), 'utf8');
        const value = JSON.parse(raw);
        parsed = value && typeof value === 'object' ? value : {};
    } catch (_error) {
        parsed = {};
    }

    cacheMap.set(cacheKey, parsed);
    return parsed;
}

function translateSignsTextToKaa(value, kaaTranslations = {}) {
    if (typeof value !== 'string' || !value.trim()) {
        return value || '';
    }

    const direct = kaaTranslations[value];
    if (typeof direct === 'string' && direct.trim()) {
        return direct.trim();
    }

    let result = normalizeApostrophes(value);
    for (const [pattern, replacement] of SIGNS_KAA_TEXT_REPLACEMENTS) {
        result = replaceAllCaseAware(result, pattern, replacement);
    }
    return result;
}

function translateSignsTextToTg(value, tgTranslations = {}) {
    if (typeof value !== 'string' || !value.trim()) {
        return value || '';
    }

    const direct = tgTranslations[value];
    if (typeof direct === 'string' && direct.trim()) {
        return direct.trim();
    }

    let result = value;
    for (const [pattern, replacement] of SIGNS_TG_FALLBACK_REPLACEMENTS) {
        result = result.replace(pattern, replacement);
    }
    return result;
}

function localizeSignsText(value, languageCode, options = {}) {
    if (typeof value !== 'string' || !value.trim()) {
        return value || '';
    }

    const language = normalizeSignsLanguage(languageCode);
    if (language === 'kaa') {
        return translateSignsTextToKaa(value, options.kaaTranslations);
    }

    if (language === 'tg') {
        return translateSignsTextToTg(value, options.tgTranslations);
    }

    return value;
}

function getSignsLabelSuffix(languageCode) {
    switch (normalizeSignsLanguage(languageCode)) {
        case 'ru':
            return 'знак';
        case 'tg':
            return 'аломат';
        case 'uz_cyrl':
            return 'белгиси';
        default:
            return 'belgisi';
    }
}

function buildSignsLabelFromFileName(fileName, languageCode = 'uz') {
    const baseName = fileName.replace(/\.[^.]+$/, '');
    if (!baseName || /^logo$/i.test(baseName) || /^index-/i.test(baseName) || /^n$/i.test(baseName)) {
        return null;
    }

    const code = baseName.replace(/^z/i, '').replace(/_/g, '.');
    if (!code) {
        return null;
    }

    return `${code} ${getSignsLabelSuffix(languageCode)}`;
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractBalancedArrayLiteral(sourceText, startIndex) {
    if (typeof sourceText !== 'string' || startIndex < 0 || sourceText[startIndex] !== '[') {
        return null;
    }

    let depth = 0;
    let activeQuote = '';
    let escaped = false;

    for (let index = startIndex; index < sourceText.length; index += 1) {
        const char = sourceText[index];

        if (activeQuote) {
            if (escaped) {
                escaped = false;
                continue;
            }
            if (char === '\\') {
                escaped = true;
                continue;
            }
            if (char === activeQuote) {
                activeQuote = '';
            }
            continue;
        }

        if (char === '"' || char === "'" || char === '`') {
            activeQuote = char;
            continue;
        }

        if (char === '[') {
            depth += 1;
            continue;
        }

        if (char === ']') {
            depth -= 1;
            if (depth === 0) {
                return {
                    value: sourceText.slice(startIndex, index + 1),
                    endIndex: index + 1
                };
            }
        }
    }

    return null;
}

function parseArrayLiteralSafe(arrayLiteralText) {
    if (typeof arrayLiteralText !== 'string' || !arrayLiteralText.trim() || arrayLiteralText.includes('${')) {
        return [];
    }

    try {
        const parsed = vm.runInNewContext(`(${arrayLiteralText})`, Object.create(null), {
            timeout: 300
        });
        return Array.isArray(parsed) ? parsed : [];
    } catch (_error) {
        return [];
    }
}

function normalizeSignsMetadataEntry(rawEntry) {
    if (!rawEntry || typeof rawEntry !== 'object') {
        return null;
    }

    const image = typeof rawEntry.image === 'string' ? rawEntry.image.trim() : '';
    if (!image || /^logo\./i.test(image) || /^index-/i.test(image)) {
        return null;
    }

    return {
        image,
        sign: typeof rawEntry.sign === 'string' ? rawEntry.sign.trim() : '',
        title: typeof rawEntry.title === 'string' ? rawEntry.title.trim() : '',
        description: typeof rawEntry.description === 'string' ? rawEntry.description.trim() : ''
    };
}

function extractSignsMetadataFromBundle(bundleSource, sourceCategoryKey, languageCode) {
    if (typeof bundleSource !== 'string' || !sourceCategoryKey) {
        return [];
    }

    const categoryToken = `t==="${sourceCategoryKey}"`;
    const categoryStart = bundleSource.indexOf(categoryToken);
    if (categoryStart < 0) {
        return [];
    }

    const nextCategoryStart = bundleSource.indexOf('else if(t==="', categoryStart + categoryToken.length);
    const categoryBlock = nextCategoryStart > -1
        ? bundleSource.slice(categoryStart, nextCategoryStart)
        : bundleSource.slice(categoryStart);

    const languagePatterns = [
        new RegExp(`if\\([\\w$]+\\.language===\\"${escapeRegExp(languageCode)}\\"\\)return\\[`),
        /if\([\w$]+\.language==="uz"\)return\[/,
        /if\([\w$]+\.language==="ru"\)return\[/
    ];

    let matchedPattern = null;
    for (const pattern of languagePatterns) {
        const found = categoryBlock.match(pattern);
        if (found) {
            matchedPattern = found[0];
            break;
        }
    }

    if (!matchedPattern) {
        return [];
    }

    const arrayStart = categoryBlock.indexOf(matchedPattern) + matchedPattern.length - 1;
    const extracted = extractBalancedArrayLiteral(categoryBlock, arrayStart);
    if (!extracted?.value) {
        return [];
    }

    return parseArrayLiteralSafe(extracted.value)
        .map(normalizeSignsMetadataEntry)
        .filter(Boolean);
}

async function getSignsMetadataForCategory({ categoryId, folderPath, entries, languageCode }) {
    const sourceCategoryKey = SIGNS_CATEGORY_SOURCE_KEYS[categoryId];
    if (!sourceCategoryKey) {
        return [];
    }

    const cacheKey = `${path.resolve(folderPath)}::${sourceCategoryKey}::${languageCode}`;
    if (signsMetadataCache.has(cacheKey)) {
        return signsMetadataCache.get(cacheKey);
    }

    const bundleEntry = entries.find((entry) => entry.isFile() && SIGNS_BUNDLE_FILE_PATTERN.test(entry.name));
    if (!bundleEntry) {
        signsMetadataCache.set(cacheKey, []);
        return [];
    }

    try {
        const bundleSource = await fs.readFile(path.join(folderPath, bundleEntry.name), 'utf8');
        const metadata = extractSignsMetadataFromBundle(bundleSource, sourceCategoryKey, languageCode);
        signsMetadataCache.set(cacheKey, metadata);
        return metadata;
    } catch (_error) {
        signsMetadataCache.set(cacheKey, []);
        return [];
    }
}

async function getSignsItemsForCategory({ rootDir, categoryId, languageCode, allowMissingFolder = false }) {
    const category = normalizeSignsCategory(categoryId);
    if (!category) {
        return [];
    }

    const normalizedLanguage = normalizeSignsLanguage(languageCode);
    const folderName = SIGNS_CATEGORY_FOLDERS[category];
    const folderPath = path.join(path.resolve(rootDir), folderName);
    const entries = await fs.readdir(folderPath, { withFileTypes: true }).catch((error) => {
        if (allowMissingFolder && error?.code === 'ENOENT') {
            return [];
        }
        throw error;
    });
    const sourceLanguage = getSignsSourceLanguage(normalizedLanguage);
    const tgTranslations = normalizedLanguage === 'tg'
        ? await readTranslations(rootDir, SIGNS_TG_TRANSLATIONS_FILE, signsTgTranslationsCache)
        : null;
    const kaaTranslations = normalizedLanguage === 'kaa'
        ? await readTranslations(rootDir, SIGNS_KAA_TRANSLATIONS_FILE, signsKaaTranslationsCache)
        : null;
    const localize = (text) => localizeSignsText(text, normalizedLanguage, { tgTranslations, kaaTranslations });

    const metadataEntries = await getSignsMetadataForCategory({
        categoryId: category,
        folderPath,
        entries,
        languageCode: sourceLanguage
    });

    const imageEntries = entries
        .filter((entry) => entry.isFile() && SIGNS_IMAGE_EXTENSIONS.test(entry.name))
        .filter((entry) => !/^logo\./i.test(entry.name))
        .filter((entry) => !/^index-/i.test(entry.name));

    const fileByLowerName = new Map(imageEntries.map((entry) => [entry.name.toLowerCase(), entry]));
    const usedLowerNames = new Set();

    const metadataItems = metadataEntries.map((entry) => {
        const matchingImageEntry = fileByLowerName.get(entry.image.toLowerCase());
        if (!matchingImageEntry) {
            return null;
        }

        usedLowerNames.add(matchingImageEntry.name.toLowerCase());
        const fallbackLabel = buildSignsLabelFromFileName(matchingImageEntry.name, normalizedLanguage) || '';

        return {
            id: `${category}:${matchingImageEntry.name}`,
            code: localize(entry.sign || fallbackLabel),
            title: localize(entry.title || fallbackLabel),
            description: localize(entry.description || ''),
            image: `/${encodeURIComponent(folderName)}/${encodeURIComponent(matchingImageEntry.name)}`
        };
    }).filter(Boolean);

    const fallbackItems = imageEntries
        .filter((entry) => !usedLowerNames.has(entry.name.toLowerCase()))
        .map((entry) => {
            const label = buildSignsLabelFromFileName(entry.name, normalizedLanguage);
            if (!label) {
                return null;
            }

            return {
                id: `${category}:${entry.name}`,
                code: localize(label),
                title: '',
                description: '',
                image: `/${encodeURIComponent(folderName)}/${encodeURIComponent(entry.name)}`
            };
        })
        .filter(Boolean)
        .sort((left, right) => left.code.localeCompare(right.code, 'en', {
            numeric: true,
            sensitivity: 'base'
        }));

    return metadataItems.concat(fallbackItems);
}

async function buildLocalizedSignsIndex({ rootDir, languageCodes = APP_LANGUAGES, allowMissingFolder = false } = {}) {
    const localizedCategories = Object.create(null);

    for (const languageCode of languageCodes) {
        const categories = Object.create(null);
        for (const categoryId of Object.keys(SIGNS_CATEGORY_FOLDERS)) {
            categories[categoryId] = await getSignsItemsForCategory({
                rootDir,
                categoryId,
                languageCode,
                allowMissingFolder
            });
        }
        localizedCategories[languageCode] = categories;
    }

    return localizedCategories;
}

module.exports = {
    APP_LANGUAGES,
    SIGNS_CATEGORY_FOLDERS,
    normalizeSignsCategory,
    normalizeSignsLanguage,
    getSignsItemsForCategory,
    buildLocalizedSignsIndex
};
