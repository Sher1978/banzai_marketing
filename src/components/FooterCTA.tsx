"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";
import { ArrowRight } from 'lucide-react';
import { openLeadModal } from './ModalController';

/**
 * FooterCTA - The final conversion block.
 */
const FooterCTA: React.FC = () => {
    const { t } = useTranslation();
    const bullets = t('footer_cta.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    return (
        <section className="relative py-32 px-6 bg-black overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="space-y-12"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                        {t('footer_cta.title')}
                    </h2>

                    <div className="max-w-2xl mx-auto space-y-6">
                        {bullets.map((bullet, idx) => (
                            <div key={idx}>
                                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {bullet.bold}
                                </p>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed uppercase tracking-[0.2em] font-medium">
                                    {bullet.subtext}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12">
                        <button
                            onClick={openLeadModal}
                            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-black text-xl uppercase tracking-widest transition-all hover:bg-secondary hover:text-white sharp-border hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]"
                        >
                            <span className="relative z-10 mr-4">{t('footer_cta.button')}</span>
                            <ArrowRight size={24} className="relative z-10 transition-transform group-hover:translate-x-2" />
                            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </button>
                    </div>
                </motion.div>

                {/* Legal/Small HUD Footer */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-6">
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                        © 2026 BanzAI_Marketing_System // All_Rights_Reserved
                    </div>
                    <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                        <a href="#" className="hover:text-primary transition-colors">Privacy_Protocol</a>
                        <a href="#" className="hover:text-secondary transition-colors">Terms_of_Engagement</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
