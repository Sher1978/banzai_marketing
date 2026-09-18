"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Rocket, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const StoryBrandPlanSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    const steps = [
        {
            num: '01',
            titleRu: 'Бесплатный разбор бизнеса',
            titleEn: 'Free Business Analysis',
            descRu: 'Проводим разбор вашей ниши, находим потери бюджета и определяем бесплатные каналы клиентов на Google Картах и в ИИ-сетях.',
            descEn: 'We analyze your niche, spot budget drains, and identify free client acquisition channels on Google Maps & AI networks.',
            icon: Search
        },
        {
            num: '02',
            titleRu: 'Настройка систем',
            titleEn: 'System Setup',
            descRu: 'Выводим компанию на первые строчки Карт, подключаем Revo для 5* отзывов и запускаем точечный поиск клиентов в чатах и почте.',
            descEn: 'We push your brand to Top Google Maps spots, connect Revo for 5-star reviews, and deploy direct client finding in chats and email.',
            icon: Rocket
        },
        {
            num: '03',
            titleRu: 'Системный поток клиентов',
            titleEn: 'Systematic Client Stream',
            descRu: 'Вы получаете готовую систему, которая приводит заказчиков каждый месяц без рабской зависимости от дорогой рекламы.',
            descEn: 'You get a ready system that drives buyers every month without dependency on expensive ads.',
            icon: TrendingUp
        }
    ];

    return (
        <section id="plan" className="relative py-10 md:py-16 px-4 sm:px-6 bg-structural-mesh border-b border-white/10 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px]">
                        <ShieldCheck size={14} className="fill-black" />
                        <span>{isRu ? 'С ЧЕГО НАЧАТЬ // 3-ШАГОВЫЙ ПЛАН' : 'WHERE TO START // 3-STEP PLAN'}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight">
                        {isRu ? (
                            <>
                                С чего начать: <br className="hidden sm:block" />
                                <span className="text-[#ffe600] text-glow-yellow">Пошаговый план запуска системы</span>
                            </>
                        ) : (
                            <>
                                Where to start: <br className="hidden sm:block" />
                                <span className="text-[#ffe600] text-glow-yellow">Step-by-step launch plan</span>
                            </>
                        )}
                    </h2>
                    <p className="text-white/70 text-base md:text-lg font-medium">
                        {isRu
                            ? 'Простой путь к собственной системе получения клиентов.'
                            : 'A simple roadmap to your own client acquisition system.'}
                    </p>
                </div>

                {/* 3 Step Cards Grid with Connecting Route Arrows */}
                <div className="relative">
                    {/* Desktop Horizontal Connecting Neon Route Bar */}
                    <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#ffe600] via-[#00FF66] to-[#ffe600] -translate-y-1/2 z-0 opacity-40 rounded-full" />

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, idx) => {
                            const StepIcon = step.icon;
                            const isLast = idx === steps.length - 1;
                            const isFeatured = idx === 2; // Step 03 is the final destination stream

                            return (
                                <div key={idx} className="relative flex flex-col items-center">
                                    {/* Step Card */}
                                    <div
                                        className={`w-full relative bg-[#0d0d12] rounded-3xl p-6 sm:p-8 space-y-6 transition-all duration-300 group flex flex-col justify-between text-left ${
                                            isFeatured 
                                                ? 'border-4 border-[#ffe600] shadow-[0_0_45px_rgba(255,230,0,0.4)] bg-gradient-to-b from-[#14141e] to-[#0d0d12]' 
                                                : 'border-2 border-white/20 hover:border-[#ffe600] shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(255,230,0,0.25)]'
                                        }`}
                                    >
                                        {/* Step Top Bar: 3D Number Badge + Glowing Icon */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tighter ${isFeatured ? 'text-[#ffe600] drop-shadow-[0_0_15px_rgba(255,230,0,0.8)]' : 'text-white'}`}>
                                                    {step.num}
                                                </span>
                                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-[#ffe600] border border-[#ffe600]/30">
                                                    {idx === 0 ? 'ШАГ 1' : idx === 1 ? 'ШАГ 2' : 'ФИНАЛ'}
                                                </span>
                                            </div>

                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                                                isFeatured 
                                                    ? 'bg-[#ffe600] text-black shadow-[0_0_20px_rgba(255,230,0,0.8)]' 
                                                    : 'bg-[#ffe600]/10 border border-[#ffe600]/40 text-[#ffe600] group-hover:bg-[#ffe600] group-hover:text-black'
                                            }`}>
                                                <StepIcon size={24} className="stroke-[2.5]" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className={`text-xl font-black uppercase leading-tight transition-colors ${isFeatured ? 'text-[#ffe600]' : 'text-white group-hover:text-[#ffe600]'}`}>
                                                {isRu ? step.titleRu : step.titleEn}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                                                {isRu ? step.descRu : step.descEn}
                                            </p>
                                        </div>

                                        {/* Route Indicator Footnote */}
                                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                                            <span>Маршрут роста</span>
                                            <span className="text-[#ffe600] font-bold">
                                                {idx === 0 ? 'Анализ ➔' : idx === 1 ? 'Запуск ➔' : 'Результат ★'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Route Arrow Indicator Between Cards (Desktop & Mobile) */}
                                    {!isLast && (
                                        <>
                                            {/* Desktop Right Connecting Arrow Pill */}
                                            <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#09090e] border-2 border-[#ffe600] items-center justify-center text-[#ffe600] shadow-[0_0_20px_rgba(255,230,0,0.6)] animate-pulse">
                                                <ArrowRight size={20} className="stroke-[3]" />
                                            </div>

                                            {/* Mobile Down Connecting Arrow Pill */}
                                            <div className="md:hidden my-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#09090e] border-2 border-[#ffe600] text-[#ffe600] shadow-[0_0_20px_rgba(255,230,0,0.6)] rotate-90">
                                                <ArrowRight size={20} className="stroke-[3]" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Action CTA Button */}
                <div className="text-center pt-4 space-y-3">
                    <button
                        onClick={() => window.open('https://outrich.online/maps', '_blank')}
                        className="bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-sm sm:text-base px-10 py-5 rounded-full uppercase tracking-wider shadow-[0_0_35px_rgba(255,230,0,0.6)] transition-transform hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
                    >
                        <span>{isRu ? 'ОТКРЫТЬ КАРТУ МАРШРУТА НА LANDING /MAPS' : 'OPEN ROADMAP ON /MAPS'}</span>
                        <ArrowRight size={18} className="stroke-[3]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StoryBrandPlanSection;
