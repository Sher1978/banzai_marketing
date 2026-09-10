"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, ShieldCheck, Sparkles, Zap, MapPin, AlertTriangle } from 'lucide-react';
import '@/lib/i18n';
import { openLeadModal } from '../ModalController';
import OutrichRevenueWidget from './OutrichRevenueWidget';

export const OutrichHero: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    return (
        <section id="hero" className="relative w-full max-w-full overflow-hidden min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 flex items-center bg-[#070709] border-b border-[#ffe600]/20">
            {/* Background Dubai Image (Brightened & High Visibility) */}
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-80"
                style={{ backgroundImage: "url('/assets/hero_dubai_ai_skyline.png')" }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-gradient-to-b from-[#070709]/60 via-[#070709]/75 to-[#070709] pointer-events-none"
                aria-hidden="true"
            />

            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-15" />

            <div className="max-w-[1440px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Hero Headline & Value Offer */}
                <div className="lg:col-span-7 space-y-6 md:space-y-8">
                    {/* iOS 26 Neon Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#ffe600] text-black font-bold text-[11px] md:text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(255,230,0,0.4)] animate-pulse">
                        <Zap size={14} className="fill-black" />
                        <span>{isRu ? '🔥 2 СЛОТА НА ЭТУ НЕДЕЛЮ' : '🔥 2 SLOTS THIS WEEK'}</span>
                    </div>

                    {/* Main Headline - Pragmatic Business Style */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] uppercase tracking-tight">
                        {isRu ? (
                            <>
                                Перестаньте платить <br className="hidden sm:block" />
                                <span className="text-[#ffe600] text-glow-yellow">за каждый клик</span> по рекламе.
                            </>
                        ) : (
                            <>
                                Stop Paying <br className="hidden sm:block" />
                                <span className="text-[#ffe600] text-glow-yellow">For Every Click</span> On Ads.
                            </>
                        )}
                    </h1>

                    {/* Subtitle & Value Statement */}
                    <div className="space-y-3 max-w-2xl">
                        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl text-xs md:text-sm text-white/90 font-medium space-y-3 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                            <div className="font-bold text-red-400 uppercase tracking-wider text-[11px] md:text-xs">
                                {isRu ? '🚨 Прямая реклама съедает прибыль. Факты 2026 года:' : '🚨 Direct ads eat your margin. The 2026 reality:'}
                            </div>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span className="leading-snug">
                                        {isRu 
                                            ? <><strong className="text-white">Google Ads:</strong> Клик подорожал на 12–27%. Из-за ИИ-ответов в поиске обычные сайты теряют трафик.</> 
                                            : <><strong className="text-white">Google Ads:</strong> Clicks are 12-27% more expensive. Google's AI answers are stealing website traffic.</>}
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span className="leading-snug">
                                        {isRu 
                                            ? <><strong className="text-white">Meta Ads:</strong> Цена показов выросла на 20%. Один лид (CPA) обходится в $35–$65, а в B2B — от $120 до $300+.</> 
                                            : <><strong className="text-white">Meta Ads:</strong> Ad costs are up 20%. A single client (CPA) now costs $35–$65, and $120–$300+ in B2B.</>}
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-2 mt-2 border-t border-red-500/20 text-white font-semibold leading-snug">
                                {isRu 
                                    ? <span className="text-[#ffe600]">Итог:</span> 
                                    : <span className="text-[#ffe600]">Result:</span>}
                                {' '}
                                {isRu 
                                    ? 'Покупать клики невыгодно — вся маржа уходит площадкам. Мы приводим клиентов в обход дорогой рекламы.' 
                                    : 'Buying clicks kills your profit. We acquire clients for you outside of expensive ad networks.'}
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => openLeadModal()}
                            className="w-full sm:w-auto bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-xs md:text-sm px-8 py-4 md:px-10 md:py-5 rounded-full uppercase tracking-wider shadow-[0_0_30px_rgba(255,230,0,0.45)] hover:shadow-[0_0_40px_rgba(255,230,0,0.7)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 cursor-pointer"
                        >
                            <span>
                                {isRu
                                    ? 'Обсудить проект'
                                    : 'Discuss Project'}
                            </span>
                            <ArrowRight size={18} className="stroke-[3]" />
                        </button>
                    </div>

                    {/* Quick Stats Badges */}
                    <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/10 text-xs font-mono text-white/60">
                        <div className="flex items-center gap-2">
                            <Sparkles size={14} className="text-[#ffe600]" />
                            <span>{isRu ? '10+ ЛЕТ В БИЗНЕСЕ' : '10+ YRS EXPERIENCE'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-[#ffe600]" />
                            <span>{isRu ? 'ИГОРЬ ШЕРЛОК & OUTRICH.AI' : 'IGOR SHERLOCK & OUTRICH.AI'}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: New Integrated Revenue Widget */}
                <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 z-20">
                    <OutrichRevenueWidget />
                </div>
            </div>
        </section>
    );
};

export default OutrichHero;
