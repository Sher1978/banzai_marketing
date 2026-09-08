"use client";

import React, { useEffect } from 'react';
import i18n from '@/lib/i18n';

/**
 * Provider-like component that ensures i18n is initialized.
 * In a more complex setup, this could use I18nextProvider.
 */
export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('i18nextLng');
            if (saved && (saved === 'ru' || saved === 'en')) {
                if (i18n.language !== saved) {
                    i18n.changeLanguage(saved);
                }
            } else {
                i18n.changeLanguage('ru');
                localStorage.setItem('i18nextLng', 'ru');
            }
        }
    }, []);

    return <>{children}</>;
}
