"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const getInitialLang = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('i18nextLng');
        if (saved && (saved === 'ru' || saved === 'en')) return saved;
    }
    return 'ru';
};

i18n
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`../../public/locales/${language}/${namespace}.json`)))
    .init({
        fallbackLng: 'ru',
        lng: getInitialLang(),
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        ns: ['common'],
        defaultNS: 'common',
    });

export default i18n;
