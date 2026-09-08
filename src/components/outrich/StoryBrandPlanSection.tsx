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
        <section id="plan" className="relative py-20 md:py-32 px-4 sm:px-6 bg-structural-mesh border-b border-white/10 overflow-hidden">
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

                {/* 3 Step Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const StepIcon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="relative bg-[#0d0d12] border-2 border-white/10 hover:border-[#ffe600] rounded-3xl p-6 sm:p-8 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,230,0,0.25)] group"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl font-black text-[#ffe600] font-mono">
                                        {step.num}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] group-hover:bg-[#ffe600] group-hover:text-black transition-colors">
                                        <StepIcon size={24} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-black text-white uppercase leading-tight group-hover:text-[#ffe600] transition-colors">
                                        {isRu ? step.titleRu : step.titleEn}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-medium">
                                        {isRu ? step.descRu : step.descEn}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Action CTA */}
                <div className="text-center pt-4">
                    <button
                        onClick={openLeadModal}
                        className="bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-sm px-10 py-5 rounded-full uppercase tracking-wider shadow-[0_0_30px_rgba(255,230,0,0.45)] transition-transform hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
                    >
                        <span>{isRu ? 'Запишитесь на разбор' : 'Book Audit'}</span>
                        <ArrowRight size={18} className="stroke-[3]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StoryBrandPlanSection;
