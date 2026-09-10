"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertOctagon, TrendingUp, DollarSign, Cpu, ArrowRight } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const AuctionTrapSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    return (
        <section id="auction-trap" className="relative py-10 md:py-16 px-4 sm:px-6 bg-[#070709] border-b border-white/10 overflow-hidden">
            {/* Background cyber grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/40 px-4 py-1.5 rounded-full text-red-400 font-bold text-[11px] uppercase tracking-wider">
                        <AlertOctagon size={14} />
                        <span>{isRu ? 'ГЛАВНАЯ ПРОБЛЕМА' : 'CORE PROBLEM'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                        {isRu ? (
                            <>
                                Можно получать больше клиентов, <br />
                                <span className="text-[#ffe600] text-glow-yellow">но с нулевыми затратами на рекламу.</span>
                            </>
                        ) : (
                            <>
                                You can get more clients, <br />
                                <span className="text-[#ffe600] text-glow-yellow">with zero ad spend.</span>
                            </>
                        )}
                    </h2>

                    <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                        {isRu
                            ? 'Вы вынуждены платить за рекламу столько же, сколько огромные корпорации с безлимитными бюджетами. Покупка рекламы съедает прибыль, потому что вы соревнуетесь кошельками с гигантами вроде Coca-Cola. Единственный выход — находить клиентов там, где нет рекламных торгов.'
                            : 'You are forced to pay as much for ads as corporations with unlimited budgets. Ad spend eats your profit because you compete with giants like Coca-Cola. The only solution is to find clients outside ad auctions.'}
                    </p>
                </div>

                {/* Concept Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Card 1: The Auction Trap (The Reality) */}
                    <div className="bg-[#0f0e13] border-2 border-red-500/40 rounded-3xl p-6 sm:p-10 space-y-6 shadow-[0_0_30px_rgba(239,68,68,0.15)] relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <span className="text-xs font-mono text-red-400 font-bold tracking-widest uppercase flex items-center gap-2">
                                <DollarSign size={16} />
                                {isRu ? 'ОБЫЧНАЯ РЕКЛАМА' : 'STANDARD ADVERTISING'}
                            </span>
                            <span className="text-[10px] font-mono text-red-400/70 border border-red-500/30 px-2 py-0.5 rounded">
                                {isRu ? 'СЛИВ БЮДЖЕТА' : 'BUDGET DRAIN'}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white uppercase">
                            {isRu ? 'Вы соревнуетесь кошельками с гигантами.' : 'You compete with corporate budgets.'}
                        </h3>

                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {isRu
                                ? 'В рекламных торгах за внимание человека вы соревнуетесь с крупными брендами. У них огромные бюджеты, а вы просто переплачиваете за каждый клик.'
                                : 'In ad bidding for attention, you compete with major brands. They have vast budgets, and you overpay for every click.'}
                        </p>

                        <div className="bg-red-950/40 border border-red-500/30 p-4 rounded-xl space-y-2">
                            <div className="flex items-center justify-between text-xs font-mono text-red-300 font-bold">
                                <span>{isRu ? 'Рост стоимости рекламы' : 'Ad Price Inflation'}</span>
                                <span>+340%</span>
                            </div>
                            <div className="w-full h-2 bg-red-950 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[85%]" />
                            </div>
                            <p className="text-[11px] text-red-300/70 font-mono">
                                {isRu
                                    ? '*Аренда показов на платных площадках сжирает чистую прибыль.'
                                    : '*Renting impressions on paid platforms drains net profit.'}
                            </p>
                        </div>
                    </div>

                    {/* Card 2: OutRich Autonomous AI Solution */}
                    <div className="bg-[#0c0c10] border-2 border-[#ffe600] rounded-3xl p-6 sm:p-10 space-y-6 shadow-[0_0_40px_rgba(255,230,0,0.25)] relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-[#ffe600]/30 pb-4">
                            <span className="neon-yellow-badge text-[10px]">
                                {isRu ? 'СИСТЕМА OUTRICH' : 'OUTRICH SYSTEM'}
                            </span>
                            <span className="text-[10px] font-mono text-[#ffe600] font-bold">
                                {isRu ? 'БЕЗ ПЛАТНОЙ РЕКЛАМЫ' : 'ZERO AD SLAVERY'}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white uppercase">
                            {isRu ? 'Перестаньте платить за клики. Постройте свою систему.' : 'Stop paying per click. Build your system.'}
                        </h3>

                        <p className="text-sm text-white/80 leading-relaxed font-medium">
                            {isRu
                                ? 'Вместо переплаты за показы наши системы приводят заказчиков бесплатно из поиска Google, рекоменаций ИИ и прямой работы с покупателями.'
                                : 'Instead of overpaying for ad spots, our systems fetch buyers free from Google search, AI recommendations, and direct outreach.'}
                        </p>

                        <div className="bg-[#14141d] border border-[#ffe600]/30 p-4 rounded-xl space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-[#ffe600] font-bold">
                                <span>{isRu ? 'Экономия на рекламном бюджете' : 'Ad Budget Savings'}</span>
                                <span>80%</span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-mono text-white/80">
                                <span>{isRu ? 'Повторные возвращения клиентов' : 'Repeat Client Returns'}</span>
                                <span>+260%</span>
                            </div>
                        </div>

                        <button
                            onClick={openLeadModal}
                            className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_20px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>{isRu ? 'Обсудить проект' : 'Discuss Project'}</span>
                            <ArrowRight size={16} className="stroke-[3]" />
                        </button>
                        <p className="text-[11px] text-center font-mono text-[#ffe600]/80">
                            {isRu
                                ? '⚡ Цены на платные клики растут каждый месяц. Начните получать клиентов иначе.'
                                : '⚡ Paid click prices grow every month. Start capturing clients differently.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuctionTrapSection;
