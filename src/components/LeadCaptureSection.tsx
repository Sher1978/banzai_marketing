"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";

const LeadCaptureSection: React.FC = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="relative py-32 px-6 bg-dubai-night border-t border-primary/20 overflow-hidden" id="contact">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4 text-glow mx-auto text-balance">
                        {t('contact.title')}
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium tracking-wide">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-[#0a0a0a]/80 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-xl shadow-2xl relative group"
                >
                    {/* Glowing corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl transition-all duration-500 group-hover:border-primary group-hover:w-12 group-hover:h-12 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-2xl transition-all duration-500 group-hover:border-secondary group-hover:w-12 group-hover:h-12 pointer-events-none" />

                    <div className="flex flex-col gap-6 relative z-20">
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
                                rows={4}
                                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm resize-none"
                                placeholder={t('contact.form.message')}
                            ></textarea>
                        </div>

                        {/* Honeypot for spam */}
                        <input type="text" name="_honey" className="hidden" />
                        {/* Disable Captcha for smoother UX */}
                        <input type="hidden" name="_captcha" value="false" />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="w-full relative px-8 py-5 bg-transparent overflow-hidden group/btn mt-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-primary/50 hover:border-primary"
                        >
                            <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 font-bold text-white tracking-[0.2em] text-sm md:text-base group-hover/btn:text-glow transition-all duration-300 flex items-center justify-center gap-2">
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
                            <p className="text-secondary font-mono text-xs text-center uppercase tracking-widest mt-2 animate-pulse">
                                {t('contact.form.success')}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 font-mono text-xs text-center uppercase tracking-widest mt-2">
                                {t('contact.form.error')}
                            </p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default LeadCaptureSection;
