const REQUIRED = {
    major: 24,
    minor: 14,
    patch: 1
};

function parseVersion(versionText) {
    const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(versionText);
    if (!match) {
        return null;
    }

    return {
        major: Number(match[1]),
        minor: Number(match[2]),
        patch: Number(match[3])
    };
}

function isSupported(version) {
    if (!version || version.major !== REQUIRED.major) {
        return false;
    }

    if (version.minor > REQUIRED.minor) {
        return true;
    }

    if (version.minor < REQUIRED.minor) {
        return false;
    }

    return version.patch >= REQUIRED.patch;
}

const current = parseVersion(process.versions.node);

if (!isSupported(current)) {
    process.stderr.write(
        [
            `Unsupported Node.js version: ${process.versions.node}`,
            `This repo is pinned to Node ${REQUIRED.major}.${REQUIRED.minor}.${REQUIRED.patch} LTS (24.x).`,
            'Reason: the toolchain uses Vite 7 and Capacitor CLI 8, and this project is standardized on Node 24 LTS for reproducible builds.',
            'Use `nvm use` in the repo root or install Node 24.14.1 before running npm scripts.'
        ].join('\n') + '\n'
    );
    process.exit(1);
}
