const fs = require('fs/promises');
const path = require('path');

const rootDirCache = new Map();

async function pathExists(targetPath) {
    try {
        await fs.access(targetPath);
        return true;
    } catch (_error) {
        return false;
    }
}

function collectCandidateRoots(startDir) {
    const candidates = [];
    let currentDir = path.resolve(startDir || process.cwd());

    while (true) {
        candidates.push(currentDir);
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            break;
        }
        currentDir = parentDir;
    }

    candidates.push(path.resolve(process.cwd()));
    return Array.from(new Set(candidates));
}

async function resolveProjectRoot({ startDir = __dirname, requiredPaths = [] } = {}) {
    const normalizedRequiredPaths = Array.from(new Set(
        (Array.isArray(requiredPaths) ? requiredPaths : [])
            .filter(Boolean)
            .map((value) => String(value))
    ));
    const cacheKey = `${path.resolve(startDir)}::${normalizedRequiredPaths.slice().sort().join('|')}`;
    if (rootDirCache.has(cacheKey)) {
        return rootDirCache.get(cacheKey);
    }

    const candidates = collectCandidateRoots(startDir);
    for (const candidate of candidates) {
        let allPathsExist = true;
        for (const relativePath of normalizedRequiredPaths) {
            if (!await pathExists(path.join(candidate, relativePath))) {
                allPathsExist = false;
                break;
            }
        }

        if (allPathsExist) {
            rootDirCache.set(cacheKey, candidate);
            return candidate;
        }
    }

    throw new Error(`Unable to resolve project root (checked: ${candidates.join(', ')})`);
}

module.exports = {
    pathExists,
    resolveProjectRoot
};
