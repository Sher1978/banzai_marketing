"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Globe } from 'lucide-react';
import '@/lib/i18n';
import { openLeadModal } from './ModalController';

/**
 * Hero component with "two-level reading" hierarchy and Dubai background.
 */
export const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
    const sectionRef = React.useRef<HTMLDivElement>(null);

    const toggleLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const bullets = t('hero.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    return (
        <section className="relative w-full min-h-[90vh] py-20 lg:py-32 px-6 flex items-center bg-[#050505] overflow-hidden border-b border-primary/20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none opacity-100"
                style={{ backgroundImage: "url('/assets/dubai-bg.jpg')" }}
                aria-hidden="true"
            />

            {/* Dark Overlay with Backdrop Blur */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none"
                aria-hidden="true"
            />

            {/* Language Switcher */}
            <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                <div className="flex bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 gap-2 shadow-2xl">
                    <Globe size={14} className="text-secondary/60 self-center" />
                    <button
                        onClick={() => toggleLanguage('en')}
                        className={`text-[10px] font-bold transition-all hover:text-white ${i18n.language === 'en' ? 'text-secondary text-glow' : 'text-slate-400'}`}
                    >
                        EN
                    </button>
                    <span className="text-white/10 text-[10px]">|</span>
                    <button
                        onClick={() => toggleLanguage('ru')}
                        className={`text-[10px] font-bold transition-all hover:text-white ${i18n.language === 'ru' ? 'text-secondary text-glow' : 'text-slate-400'}`}
                    >
                        RU
                    </button>
                </div>
            </div>

            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-10"></div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col justify-center">
                {/* Content Column (Main focus) */}
                <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold border-l-2 border-secondary pl-3 shadow-[0_0_10px_rgba(6,182,212,0.3)] bg-black/40 py-1 pr-4 w-fit">
                        {t('hero.badge')}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-8xl font-black leading-[0.85] text-white tracking-tighter drop-shadow-2xl">
                        {t('hero.title').split(' ').map((word: string, i: number) => (
                            <span key={i} className={i % 2 !== 0 ? 'text-secondary brightness-125' : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <div className="space-y-4 md:space-y-6 max-w-xl">
                        {bullets.map((bullet, idx) => (
                            <div key={idx} className="border-l border-primary/30 pl-4 md:pl-6 ml-1 group hover:border-secondary transition-colors text-balance">
                                <p className="text-white/95 text-base md:text-xl font-bold mb-1 tracking-tight">
                                    {bullet.bold}
                                </p>
                                <p className="text-white/50 text-[10px] md:text-xs lg:text-sm leading-relaxed uppercase tracking-widest font-medium">
                                    {bullet.subtext}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-5 mt-4">
                        <button
                            onClick={openLeadModal}
                            className="group flex items-center justify-center bg-secondary hover:bg-cyan-400 text-black font-black text-xs md:text-base px-6 py-3 md:px-12 md:py-5 rounded-none transition-all uppercase tracking-wider sharp-border shadow-neon-glow"
                        >
                            <span className="mr-2">{t('hero.button_primary')}</span>
                            <ArrowRight size={16} className="md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex items-center justify-center border border-white/20 hover:border-white/40 text-white hover:bg-white/5 backdrop-blur-md font-bold text-xs md:text-base px-6 py-3 md:px-10 md:py-5 ">
                            {t('hero.button_secondary')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
