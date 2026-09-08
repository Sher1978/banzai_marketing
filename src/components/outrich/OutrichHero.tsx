"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, ShieldCheck, Sparkles, Zap, MapPin, AlertTriangle } from 'lucide-react';
import '@/lib/i18n';
import { openLeadModal } from '../ModalController';
import GoogleProfileAuditModal from './GoogleProfileAuditModal';

export const OutrichHero: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    const [auditQuery, setAuditQuery] = useState('');
    const [auditError, setAuditError] = useState('');
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    const isGoogleMapsUrl = (url: string) => {
        const cleaned = url.trim().toLowerCase();
        return (
            cleaned.includes('google.com/maps') ||
            cleaned.includes('maps.google') ||
            cleaned.includes('maps.app.goo.gl') ||
            cleaned.includes('goo.gl/maps') ||
            cleaned.includes('maps.app') ||
            (cleaned.startsWith('http') && cleaned.includes('maps'))
        );
    };

    const handleAuditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isGoogleMapsUrl(auditQuery)) {
            setAuditError(
                isRu
                    ? 'Принимаются только прямые ссылки на Google Maps (например: https://maps.app.goo.gl/...)'
                    : 'Only direct Google Maps profile URLs are accepted (e.g. https://maps.app.goo.gl/...)'
            );
            return;
        }
        setAuditError('');
        setIsAuditModalOpen(true);
    };

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
                        <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed">
                            {isRu
                                ? 'Мы строим системы, которые приводят клиентов бесплатно через алгоритмы Google, ИИ и прямые продажи.'
                                : 'We build systems that bring clients organically through Google algorithms, AI, and direct sales.'}
                        </p>
                        <div className="bg-[#ffe600]/10 border-l-4 border-[#ffe600] p-3 rounded-r-xl text-xs md:text-sm text-white/90 font-medium">
                            {isRu
                                ? '⚡ Покупка рекламы съедает прибыль, потому что вы соревнуетесь кошельками с гигантами вроде Coca-Cola.'
                                : '⚡ Buying ad clicks drains profit because you compete with billion-dollar corporate budgets.'}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button
                            onClick={openLeadModal}
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

                {/* Right Column: Interactive Google Profile Audit Widget with Pulsing Neon Outline */}
                <div className="lg:col-span-5">
                    <div className="relative ios-glass-card pulsing-neon-yellow-outline rounded-3xl p-6 md:p-8 space-y-6">
                        {/* Glow corner indicator */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffe600]/10 rounded-bl-full pointer-events-none blur-xl" />

                        <div className="space-y-2">
                            <span className="neon-yellow-badge text-[10px]">
                                {isRu ? 'ИИ-ДИАГНОСТИКА' : 'AI AUDIT MODULE'}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                                <MapPin className="text-[#ffe600]" size={22} />
                                <span>{isRu ? 'УЗНАЙТЕ ПОТЕНЦИАЛ ВАШЕГО БИЗНЕСА' : 'Discover Your Business Potential'}</span>
                            </h3>
                            <p className="text-xs text-white/80 leading-relaxed font-medium">
                                {isRu
                                    ? 'Узнайте за 10 секунд, почему вашего бизнеса нет на первых строчках Google и сколько клиентов вы отдаете конкурентам.'
                                    : 'Find out in 10 seconds why your business isn\'t ranking on Google and how many clients you\'re losing to competitors.'}
                            </p>
                        </div>

                        {/* Audit Form */}
                        <form onSubmit={handleAuditSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                    <input
                                        type="text"
                                        required
                                        value={auditQuery}
                                        onChange={(e) => {
                                            setAuditQuery(e.target.value);
                                            if (auditError) setAuditError('');
                                        }}
                                        placeholder={
                                            isRu
                                                ? 'Ссылка на Google Maps (https://maps.app.goo.gl/...)'
                                                : 'Google Maps Profile URL (https://maps.app.goo.gl/...)'
                                        }
                                        className={`w-full bg-[#14141a] border ${
                                            auditError ? 'border-red-500 ring-2 ring-red-500/30' : 'border-[#ffe600]/40 focus:border-[#ffe600]'
                                        } rounded-xl pl-11 pr-4 py-4 text-xs sm:text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-[#ffe600]/20 outline-none transition-all`}
                                    />
                                </div>

                                {auditError && (
                                    <div className="bg-red-500/10 border border-red-500/40 p-3 rounded-xl text-xs font-mono text-red-400 font-bold flex items-start gap-2 text-left">
                                        <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                                        <span>{auditError}</span>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-xs sm:text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_20px_rgba(255,230,0,0.35)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>{isRu ? 'Проверить ссылку' : 'Verify Maps Link'}</span>
                                <ArrowRight size={16} className="stroke-[3]" />
                            </button>
                        </form>

                        <div className="bg-[#121218] border border-white/10 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#ffe600]/10 flex items-center justify-center flex-shrink-0 text-[#ffe600]">
                                <Sparkles size={16} />
                            </div>
                            <p className="text-[11px] text-white/60 leading-tight">
                                {isRu
                                    ? 'ИИ проверит видимость вашей компании в Картах и нейросетях за несколько секунд.'
                                    : 'AI will check your company visibility in Google Maps & search engines in seconds.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Audit Result Modal */}
            <GoogleProfileAuditModal
                isOpen={isAuditModalOpen}
                onClose={() => setIsAuditModalOpen(false)}
                query={auditQuery}
                isRu={isRu}
            />
        </section>
    );
};

export default OutrichHero;
