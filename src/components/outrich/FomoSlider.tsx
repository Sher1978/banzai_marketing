"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, MessageSquare, Target, ArrowRight, Flame, ShieldAlert } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const FomoSlider: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const [activeTab, setActiveTab] = useState(0);

    const slides = [
        {
            id: 0,
            categoryRu: 'Локальный бизнес & Заведения',
            categoryEn: 'Local Business & Venues',
            titleRu: 'Покупка кликов убивает вашу маржу. Вы это уже знаете.',
            titleEn: 'Buying ad clicks is killing your margin. You already know it.',
            quoteRu: 'Пора забрать 80% клиентов с Google Карт и из ИИ-поисковиков прямо у вашей двери.',
            quoteEn: 'Time to capture 80% of local customers from Google Maps and AI search right at your doorstep.',
            ctaRu: 'Обсудить проект',
            ctaEn: 'Discuss Project',
            icon: MapPin,
            badgeRu: 'ГОРОДСКОЙ ТРАФИК',
            badgeEn: 'LOCAL TRAFFIC',
            statRu: '80% кликов в Top-3',
            statEn: '80% clicks in Top-3',
            image: '/assets/map_outreach_revo_banner.png'
        },
        {
            id: 1,
            categoryRu: 'Услуги и Сервисы',
            categoryEn: 'Services & Experts',
            titleRu: 'Сарафанное радио исчерпало себя?',
            titleEn: 'Has word of mouth reached its limit?',
            quoteRu: 'Включите перехват людей, которые прямо сейчас ищут ваши услуги в городских чатах Telegram.',
            quoteEn: 'Enable client interception targeting buyers searching for your services right now in Telegram chats.',
            ctaRu: 'Обсудить проект',
            ctaEn: 'Discuss Project',
            icon: MessageSquare,
            badgeRu: 'ПЕРЕХВАТ В ЧАТАХ',
            badgeEn: 'CHAT INTERCEPTION',
            statRu: 'Реакция за 12 мс',
            statEn: '12ms instant ping',
            image: '/assets/lead_radar_interception.png'
        },
        {
            id: 2,
            categoryRu: 'Корпоративные продажи',
            categoryEn: 'Corporate Direct Reach',
            titleRu: 'Обычные письма летят в спам.',
            titleEn: 'Standard cold emails go straight to spam.',
            quoteRu: 'Отправляйте прямые персональные предложения владельцам бизнеса и директорам, на которые хочется ответить.',
            quoteEn: 'Send direct tailored proposals to business owners and directors that get actual replies.',
            ctaRu: 'Обсудить проект',
            ctaEn: 'Discuss Project',
            icon: Target,
            badgeRu: 'ПИСЬМА ДИРЕКТОРАМ',
            badgeEn: 'DIRECT CONTACT',
            statRu: 'Прямой выход на владельцев',
            statEn: 'Direct Owner Reach',
            image: '/assets/hero_dubai_ai_skyline.png'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[activeTab];
    const IconComp = currentSlide.icon;

    return (
        <section id="fomo" className="relative py-20 md:py-32 px-4 sm:px-6 bg-structural-mesh border-b border-white/10 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-12">
                {/* Urgency Alert Bar */}
                <div className="bg-red-500/10 border border-red-500/40 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                        <p className="text-xs md:text-sm text-white font-mono font-bold">
                            {isRu
                                ? '🚨 ОКНО ВОЗМОЖНОСТЕЙ ЗАКРЫВАЕТСЯ: Компании, занявшие Top-3 в Google AI Overview сегодня, удерживают лидерство весь 2026 год.'
                                : '🚨 WINDOW CLOSING: Brands capturing Top-3 in Google AI Overview today secure dominance for all of 2026.'}
                        </p>
                    </div>
                    <button
                        onClick={openLeadModal}
                        className="text-xs font-black text-black bg-[#ffe600] px-4 py-2 rounded-lg uppercase tracking-wider whitespace-nowrap hover:scale-105 transition-transform"
                    >
                        {isRu ? 'Запишитесь на разбор' : 'Book Audit'}
                    </button>
                </div>

                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px]">
                        <Flame size={14} className="fill-black" />
                        <span>{isRu ? 'ГДЕ ВЫ ТЕРЯЕТЕ КЛИЕНТОВ' : 'WHERE YOU LOSE LEADS'}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                        {isRu ? (
                            <>
                                Где вы теряете клиентов <span className="text-[#ffe600] text-glow-yellow">прямо сейчас?</span>
                            </>
                        ) : (
                            <>
                                Where are you losing clients <span className="text-[#ffe600] text-glow-yellow">right now?</span>
                            </>
                        )}
                    </h2>
                    <p className="text-white/70 text-sm md:text-base font-medium">
                        {isRu
                            ? 'Выберите ваш сегмент бизнеса и действуйте немедленно, пока нишу не заняли конкуренты.'
                            : 'Select your business domain and act immediately before competitors claim the territory.'}
                    </p>
                </div>

                {/* Tabs Selector */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {slides.map((slide, idx) => {
                        const TabIcon = slide.icon;
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? 'bg-[#ffe600] text-black shadow-[0_0_25px_rgba(255,230,0,0.5)] scale-105'
                                        : 'bg-[#121217] text-white/70 hover:text-white border border-white/10 hover:border-[#ffe600]/40'
                                }`}
                            >
                                <TabIcon size={16} />
                                <span>{isRu ? slide.categoryRu : slide.categoryEn}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Animated Slide Showcase Card */}
                <div className="relative min-h-[420px] bg-[#0d0d12] border-2 border-[#ffe600]/50 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_0_50px_rgba(255,230,0,0.15)] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid lg:grid-cols-12 gap-8 items-center"
                        >
                            {/* Left Info Column */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-[#ffe600]/10 border border-[#ffe600]/40 px-3.5 py-1 rounded-full text-[#ffe600] text-xs font-mono font-bold">
                                    <IconComp size={14} />
                                    <span>{isRu ? currentSlide.badgeRu : currentSlide.badgeEn}</span>
                                </div>

                                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                                    {isRu ? currentSlide.titleRu : currentSlide.titleEn}
                                </h3>

                                <p className="text-base sm:text-lg text-white/80 leading-relaxed border-l-4 border-[#ffe600] pl-4 italic">
                                    "{isRu ? currentSlide.quoteRu : currentSlide.quoteEn}"
                                </p>

                                <div className="pt-2 flex flex-wrap items-center gap-6">
                                    <button
                                        onClick={openLeadModal}
                                        className="bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs md:text-sm px-8 py-4 rounded-full uppercase tracking-wider shadow-[0_0_25px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
                                    >
                                        <span>{isRu ? currentSlide.ctaRu : currentSlide.ctaEn}</span>
                                        <ArrowRight size={16} className="stroke-[3]" />
                                    </button>

                                    <div className="flex items-center gap-2 text-xs font-mono text-[#ffe600] font-bold">
                                        <ShieldAlert size={16} />
                                        <span>{isRu ? currentSlide.statRu : currentSlide.statEn}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image Graphic Preview */}
                            <div className="lg:col-span-5 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                                <img
                                    src={currentSlide.image}
                                    alt={isRu ? currentSlide.categoryRu : currentSlide.categoryEn}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-mono text-[#ffe600] font-bold">
                                        OutRich.Dubai AI System
                                    </span>
                                    <span className="text-[10px] font-mono text-white/50 uppercase">
                                        Status: Operational
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FomoSlider;
