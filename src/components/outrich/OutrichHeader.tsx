"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowUpRight, Zap } from 'lucide-react';
import '@/lib/i18n';
import { openLeadModal } from '../ModalController';

export const OutrichHeader: React.FC = () => {
    const { i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('i18nextLng', lang);
        }
    };

    const isRu = i18n.language === 'ru';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#070709]/90 backdrop-blur-xl border-b border-[#ffe600]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-full bg-[#ffe600] flex items-center justify-center text-black font-black text-lg shadow-[0_0_20px_rgba(255,230,0,0.5)] group-hover:scale-105 transition-transform">
                        <Zap size={20} className="fill-black stroke-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-black tracking-tighter text-white group-hover:text-[#ffe600] transition-colors flex items-center gap-1 uppercase">
                            OutRich<span className="text-[#ffe600]">.Dubai</span>
                        </span>
                        <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase -mt-1">
                            AI LeadGen Agency 2026
                        </span>
                    </div>
                </a>

                {/* Navigation Links - Desktop */}
                <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-white/70">
                    <a href="#fomo" className="hover:text-[#ffe600] transition-colors">
                        {isRu ? 'Триггеры 2026' : 'FOMO 2026'}
                    </a>
                    <a href="#auction-trap" className="hover:text-[#ffe600] transition-colors">
                        {isRu ? 'Ловушка рекламы' : 'Ad Trap'}
                    </a>
                    <a href="#guide" className="hover:text-[#ffe600] transition-colors">
                        {isRu ? 'Проводник & Кейсы' : 'Guide & Cases'}
                    </a>
                    <a href="#products" className="hover:text-[#ffe600] transition-colors">
                        {isRu ? 'ИИ-Продукты' : 'AI Stack'}
                    </a>
                    <a href="#plan" className="hover:text-[#ffe600] transition-colors">
                        {isRu ? 'План Роста' : '3-Step Plan'}
                    </a>
                </nav>

                {/* Right controls: Lang Switcher + Primary CTA */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher */}
                    <div className="flex items-center bg-black/60 border border-white/10 rounded-full px-3 py-1 gap-1.5 backdrop-blur-md">
                        <Globe size={13} className="text-[#ffe600]" />
                        <button
                            onClick={() => toggleLanguage('ru')}
                            className={`text-[10px] font-black uppercase transition-all ${
                                isRu ? 'text-[#ffe600] text-glow-yellow' : 'text-white/40 hover:text-white'
                            }`}
                        >
                            RU
                        </button>
                        <span className="text-white/20 text-[10px]">|</span>
                        <button
                            onClick={() => toggleLanguage('en')}
                            className={`text-[10px] font-black uppercase transition-all ${
                                !isRu ? 'text-[#ffe600] text-glow-yellow' : 'text-white/40 hover:text-white'
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={openLeadModal}
                        className="hidden sm:flex items-center gap-2 bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,230,0,0.35)] hover:shadow-[0_0_30px_rgba(255,230,0,0.6)] hover:scale-105 cursor-pointer"
                    >
                        <span>{isRu ? 'Запись на разбор' : 'Book AI Audit'}</span>
                        <ArrowUpRight size={14} className="stroke-[3]" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default OutrichHeader;
