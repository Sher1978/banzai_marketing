"use client";

import React, { useState, useEffect } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

export const openLeadModal = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('open-lead-modal'));
    }
};

const ModalController: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-lead-modal', handleOpen);
        return () => window.removeEventListener('open-lead-modal', handleOpen);
    }, []);

    return <LeadCaptureModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export default ModalController;
