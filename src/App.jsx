import { useEffect } from 'react';
import { initLegacyApp } from '../script.js';

const LEGACY_DATA_SCRIPTS = [
    'fines-data.js',
    'fines-data.ru.js',
    'fines-data.qq.js',
    'fines-data.tj.js'
];

let legacyDataScriptsPromise = null;

function loadLegacyScript(src) {
    return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[data-legacy-src="${src}"]`);
        if (existingScript) {
            if (existingScript.dataset.loaded === 'true') {
                resolve();
                return;
            }

            existingScript.addEventListener('load', () => resolve(), { once: true });
            existingScript.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.dataset.legacySrc = src;
        script.addEventListener('load', () => {
            script.dataset.loaded = 'true';
            resolve();
        }, { once: true });
        script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        document.body.appendChild(script);
    });
}

function ensureLegacyDataScripts() {
    if (!legacyDataScriptsPromise) {
        legacyDataScriptsPromise = (async () => {
            for (const scriptSrc of LEGACY_DATA_SCRIPTS) {
                await loadLegacyScript(scriptSrc);
                if (scriptSrc === 'fines-data.js') {
                    window.FINES_RAW_TEXT_UZ = window.FINES_RAW_TEXT;
                }
            }
        })();
    }

    return legacyDataScriptsPromise;
}

function getLegacyAppShellHtml() {
    return document.getElementById('legacy-app-shell')?.innerHTML || '';
}

export default function App() {
    useEffect(() => {
        ensureLegacyDataScripts()
            .then(() => initLegacyApp())
            .catch((error) => {
                console.error('Legacy app init error:', error);
            });
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: getLegacyAppShellHtml() }} />;
}
