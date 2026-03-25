import { useEffect, useState } from 'react';
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
        if (existingScript?.dataset.failed === 'true') {
            existingScript.remove();
        }

        const retryableScript = document.querySelector(`script[data-legacy-src="${src}"]`);
        if (retryableScript) {
            if (retryableScript.dataset.loaded === 'true') {
                resolve();
                return;
            }

            retryableScript.addEventListener('load', () => resolve(), { once: true });
            retryableScript.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.dataset.legacySrc = src;
        script.addEventListener('load', () => {
            script.dataset.loaded = 'true';
            delete script.dataset.failed;
            resolve();
        }, { once: true });
        script.addEventListener('error', () => {
            script.dataset.failed = 'true';
            script.remove();
            reject(new Error(`Failed to load ${src}`));
        }, { once: true });
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
        })().catch((error) => {
            legacyDataScriptsPromise = null;
            throw error;
        });
    }

    return legacyDataScriptsPromise;
}

function getLegacyAppShellHtml() {
    return document.getElementById('legacy-app-shell')?.innerHTML || '';
}

export default function App() {
    const [initError, setInitError] = useState(null);
    const [initAttempt, setInitAttempt] = useState(0);

    useEffect(() => {
        let active = true;
        setInitError(null);

        ensureLegacyDataScripts()
            .then(() => initLegacyApp())
            .catch((error) => {
                console.error('Legacy app init error:', error);
                if (active) {
                    setInitError(error);
                }
            });

        return () => {
            active = false;
        };
    }, [initAttempt]);

    if (initError) {
        const message = initError?.message ? String(initError.message) : 'UNKNOWN_LEGACY_BOOTSTRAP_ERROR';
        return (
            <div className="coming-soon" style={{ minHeight: '100vh', justifyContent: 'center' }}>
                <h2>Ilova yuklanmadi</h2>
                <p>Legacy app init xatoda to'xtadi. Qayta urinish yoki sahifani qayta yuklash mumkin.</p>
                <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{message}</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
                    <button className="btn btn-primary" onClick={() => setInitAttempt((value) => value + 1)}>
                        Qayta urinish
                    </button>
                    <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                        Sahifani yangilash
                    </button>
                </div>
            </div>
        );
    }

    return <div dangerouslySetInnerHTML={{ __html: getLegacyAppShellHtml() }} />;
}
