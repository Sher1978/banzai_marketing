"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import "@/lib/i18n";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset status after close
            setTimeout(() => setStatus("idle"), 500);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => onClose(), 2500); // Close automatically after success
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                >
                    {/* Background click to close */}
                    <div className="absolute inset-0" onClick={onClose} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="w-full max-w-lg bg-[#0a0a0a] border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl relative z-10 overflow-hidden group"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-50"
                        >
                            <X size={24} />
                        </button>

                        {/* Cyber Grid Background */}
                        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

                        {/* Glowing corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl transition-all duration-500 group-hover:border-primary group-hover:w-12 group-hover:h-12 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl transition-all duration-500 group-hover:border-secondary group-hover:w-12 group-hover:h-12 pointer-events-none" />

                        <div className="relative z-20 mb-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2 text-glow">
                                {t('contact.title')}
                            </h2>
                            <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                                {t('contact.subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-20">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                                    placeholder={t('contact.form.name')}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                                    placeholder={t('contact.form.email')}
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    required
                                    rows={3}
                                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm resize-none"
                                    placeholder={t('contact.form.message')}
                                ></textarea>
                            </div>

                            <input type="text" name="_honey" className="hidden" />
                            <input type="hidden" name="_captcha" value="false" />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full relative px-8 py-4 bg-transparent overflow-hidden group/btn mt-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-primary hover:border-primary"
                            >
                                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 font-bold text-white tracking-[0.2em] text-sm group-hover/btn:text-glow transition-all duration-300 flex items-center justify-center gap-2">
                                    {status === "loading" ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : status === "success" ? (
                                        t('contact.form.success')
                                    ) : status === "error" ? (
                                        t('contact.form.error')
                                    ) : (
                                        t('contact.form.submit')
                                    )}
                                </span>
                            </motion.button>

                            {status === "success" && (
                                <p className="text-secondary font-mono text-xs text-center uppercase tracking-widest mt-1 animate-pulse">
                                    {t('contact.form.success')}
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 font-mono text-xs text-center uppercase tracking-widest mt-1">
                                    {t('contact.form.error')}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LeadCaptureModal;
