"use client";

import React, { useState, useEffect } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

export const openLeadModal = (productName?: string | unknown) => {
    const name = typeof productName === 'string' ? productName : undefined;
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-lead-modal', { detail: { productName: name } }));
    }
};

const ModalController: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productName, setProductName] = useState<string | undefined>();

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent;
            setProductName(customEvent.detail?.productName);
            setIsOpen(true);
        };
        window.addEventListener('open-lead-modal', handleOpen);
        return () => window.removeEventListener('open-lead-modal', handleOpen);
    }, []);

    return <LeadCaptureModal isOpen={isOpen} onClose={() => setIsOpen(false)} productName={productName} />;
};

export default ModalController;
