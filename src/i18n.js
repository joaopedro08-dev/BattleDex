import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';
import esTranslation from './locales/es/translation.json';
import jpTranslation from './locales/jp/translation.json';
import frTranslation from './locales/fr/translation.json';
import cnTranslation from './locales/cn/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        debug: true,

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                translation: enTranslation,
            },
            pt: {
                translation: ptTranslation,
            },
            es: {
                translation: esTranslation,
            },
            jp: {
                translation: jpTranslation,
            },
            fr: {
                translation: frTranslation,
            },
            cn: {
                translation: cnTranslation,
            },
        },
    });

export default i18n;