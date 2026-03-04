"use client";

import React, { useEffect } from 'react';
import i18n from '@/lib/i18n';

/**
 * Provider-like component that ensures i18n is initialized.
 * In a more complex setup, this could use I18nextProvider.
 */
export default function I18nProvider({ children }: { children: React.ReactNode }) {
    // Initialization is handled by importing the i18n instance in @/lib/i18n
    return <>{children}</>;
}
