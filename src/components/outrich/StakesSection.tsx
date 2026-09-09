"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Skull, Trophy, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const StakesSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    return (
        <section className="relative py-10 md:py-16 px-4 sm:px-6 bg-[#070709] border-b border-white/10 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px]">
                        <Trophy size={14} className="fill-black" />
                        <span>{isRu ? 'ВЫБОР ЗА ВАМИ' : 'YOUR CHOICE'}</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight">
                        {isRu ? (
                            <>
                                Два пути для вашего бизнеса: <br />
                                <span className="text-[#ffe600] text-glow-yellow">Потери или Своя система?</span>
                            </>
                        ) : (
                            <>
                                Two Paths For Business: <br />
                                <span className="text-[#ffe600] text-glow-yellow">Ad Drain or Own System?</span>
                            </>
                        )}
                    </h2>
                </div>

                {/* 2-Column Comparison */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Disaster Column (Losing Scenario) */}
                    <div className="bg-[#0f0b0d] border-2 border-red-500/40 rounded-3xl p-6 sm:p-10 space-y-6 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                        <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                                <Skull size={22} />
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-red-400 font-bold uppercase block">
                                    {isRu ? 'ПУТЬ 1' : 'PATH 1'}
                                </span>
                                <h3 className="text-xl font-bold text-white uppercase">
                                    {isRu ? 'Аренда платной рекламы' : 'Renting Paid Ads'}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {isRu
                                ? 'Продолжать отдавать деньги поисковикам за дорогую рекламу и терять прибыль. Каждый месяц клики становятся дороже, а маржа — меньше.'
                                : 'Continue giving money to search engines for expensive ads and losing margin. Every month clicks cost more.'}
                        </p>

                        <ul className="space-y-2 text-xs text-red-300">
                            <li className="flex items-center gap-2">
                                <AlertTriangle size={14} className="flex-shrink-0" />
                                <span>{isRu ? 'Рост цены за каждый клик' : 'Click price inflation'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AlertTriangle size={14} className="flex-shrink-0" />
                                <span>{isRu ? 'Зависимость от бюджета: выключили рекламу — нет заказчиков' : 'Stop ads — zero buyers'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AlertTriangle size={14} className="flex-shrink-0" />
                                <span>{isRu ? 'Потеря потенциальных покупателей на Google Картах' : 'Losing buyers on Google Maps'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Victory Column (Winning Scenario) */}
                    <div className="bg-[#0c0c10] border-2 border-[#ffe600] rounded-3xl p-6 sm:p-10 space-y-6 shadow-[0_0_40px_rgba(255,230,0,0.25)]">
                        <div className="flex items-center gap-3 border-b border-[#ffe600]/30 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#ffe600] flex items-center justify-center text-black font-black">
                                <Trophy size={22} />
                            </div>
                            <div>
                                <span className="neon-yellow-badge text-[9px]">
                                    {isRu ? 'ПУТЬ 2' : 'PATH 2'}
                                </span>
                                <h3 className="text-xl font-bold text-white uppercase mt-1">
                                    {isRu ? 'Собственная система' : 'Your Own System'}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {isRu
                                ? 'Один раз собрать систему, которая будет сама приводить клиентов каждый месяц через алгоритмы Google, ИИ и прямую работу.'
                                : 'Build a system once to bring clients automatically every month through Google algorithms, AI, and direct reach.'}
                        </p>

                        <ul className="space-y-2 text-xs text-white/90">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                <span>{isRu ? 'Постоянный бесплатный поток целевых клиентов' : 'Predictable organic client stream 24/7'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                <span>{isRu ? 'Авто-рост 5* отзывов и повторных визитов' : 'Automated 5-star review growth & repeat visits'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                <span>{isRu ? 'Полная независимость от бюджета на контекст и таргет' : 'Total independence from ad budgets'}</span>
                            </li>
                        </ul>

                        <button
                            onClick={openLeadModal}
                            className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_20px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>{isRu ? 'Оставить заявку на разбор' : 'Book Free Analysis'}</span>
                            <ArrowRight size={16} className="stroke-[3]" />
                        </button>
                        <p className="text-[11px] text-center font-mono text-[#ffe600]">
                            {isRu
                                ? '⚡ Время решает всё: Компании, начавшие внедрение сегодня, запечатывают приоритет в Google AI Overview.'
                                : '⚡ Time is critical: Brands initiating setup today seal algorithm priority in Google AI Overview.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StakesSection;
