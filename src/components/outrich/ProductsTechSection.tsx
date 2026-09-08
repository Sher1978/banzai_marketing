"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bot, Radar, MailCheck, ArrowRight, Sparkles, CheckCircle2, ChevronDown, Star, Zap } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const ProductsTechSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    // State for expanded direction cards - both open by default
    const [expandedDirections, setExpandedDirections] = useState<Record<string, boolean>>({
        dir1: true,
        dir2: true,
    });

    const toggleDirection = (dir: 'dir1' | 'dir2') => {
        setExpandedDirections((prev) => ({
            ...prev,
            [dir]: !prev[dir],
        }));
    };

    return (
        <section id="products" className="relative py-24 md:py-36 px-4 sm:px-6 bg-[#09090e] border-y-4 border-[#ffe600] overflow-hidden my-12">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,230,0,0.18)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
                {/* Visual Header Box - Distinct from rest of page */}
                <div className="text-center space-y-4 max-w-4xl mx-auto ios-glass-yellow-highlight p-8 md:p-12 rounded-3xl text-center">
                    <div className="inline-flex items-center gap-2 neon-yellow-badge text-[11px] shadow-[0_0_25px_rgba(255,230,0,0.6)] animate-pulse">
                        <Zap size={14} className="fill-black stroke-black" />
                        <span>{isRu ? 'ЧТО МЫ ДЕЛАЕМ И КАК ЭТО ПОМОГАЕТ ВАМ' : 'WHAT WE DO & HOW IT HELPS YOU'}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                        {isRu ? (
                            <>
                                Инструменты OutRich: <br />
                                <span className="text-[#ffe600] text-glow-yellow">Два рабочих направления</span>
                            </>
                        ) : (
                            <>
                                OutRich Tools: <br />
                                <span className="text-[#ffe600] text-glow-yellow">Two Working Directions</span>
                            </>
                        )}
                    </h2>

                    <p className="text-white/90 text-sm sm:text-base font-medium max-w-3xl mx-auto">
                        {isRu
                            ? 'Запускаем бесплатный органический поток клиентов в Ваш бизнес прямо к двери, системно повышаем возвращаемость и сумму среднего чека.'
                            : 'We launch a free organic flow of clients directly to your doorstep and systematically increase repeat visits and average order value.'}
                    </p>
                </div>

                {/* DIRECTION 1: Organic AI Traffic (FAVORITE: MapOutRich + Revo) */}
                <div className="ios-glass-card rounded-3xl p-6 sm:p-10 border-4 border-[#ffe600] shadow-[0_0_60px_rgba(255,230,0,0.35)] space-y-6 transition-all duration-300">
                    <div
                        onClick={() => toggleDirection('dir1')}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            {/* Photorealistic Thumbnail + Glowing Icon */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#ffe600] shadow-[0_0_25px_rgba(255,230,0,0.5)] flex-shrink-0">
                                <img
                                    src="/assets/map_outreach_revo_banner.png"
                                    alt="Map Outreach"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <Star size={24} className="fill-[#ffe600] stroke-black" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-mono text-[#ffe600] font-black uppercase tracking-wider">
                                        НАПРАВЛЕНИЕ 01 // ВХОДЯЩИЕ КЛИЕНТЫ
                                    </span>
                                    <span className="neon-yellow-badge text-[9px] animate-pulse">INBOUND</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ffe600] transition-colors uppercase">
                                    {isRu ? 'Делаем так, чтобы клиенты находили вас сами' : 'Clients Find You Organically'}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-auto bg-[#ffe600]/10 border border-[#ffe600]/40 px-4 py-2 rounded-full">
                            <span className="text-xs font-mono text-[#ffe600] font-bold">
                                {expandedDirections.dir1 ? (isRu ? 'Свернуть' : 'Collapse') : (isRu ? 'Подробнее' : 'Expand')}
                            </span>
                            <div className={`w-8 h-8 rounded-full border border-[#ffe600] flex items-center justify-center text-black bg-[#ffe600] transition-transform duration-300 ${expandedDirections.dir1 ? 'rotate-180' : ''}`}>
                                <ChevronDown size={18} className="stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    {/* Expandable Content for Direction 1 */}
                    <AnimatePresence>
                        {expandedDirections.dir1 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8 pt-6 border-t border-[#ffe600]/30 overflow-hidden"
                            >
                                {/* Banner graphic */}
                                <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-[#ffe600]/60 shadow-2xl">
                                    <img
                                        src="/assets/map_outreach_revo_banner.png"
                                        alt="Map Outreach + Revo Banner"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-85" />
                                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                                        <span className="neon-yellow-badge text-[10px] shadow-[0_0_20px_rgba(255,230,0,0.6)]">
                                            MAPOUTRICH + REVO // GEO & AIO OPTIMIZATION
                                        </span>
                                        <span className="text-xs font-mono text-[#ffe600] font-bold bg-black/90 px-3 py-1 rounded-full border border-[#ffe600]/40">
                                            Первые строчки Google: АКТИВНО
                                        </span>
                                    </div>
                                </div>

                                {/* Sub-Products Grid: 3 Direct Tools */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* 1. Google Карта */}
                                    <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={22} className="text-[#ffe600]" />
                                            <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Google Карты' : 'Google Maps Top-3'}</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                            {isRu
                                                ? 'Выводим ваш бизнес на первые строчки в картах. Человек ищет услугу рядом — видит вас, приходит к вам.'
                                                : 'We bring your business to Top-3 on Google Maps. People search nearby services, see you, and visit.'}
                                        </p>
                                    </div>

                                    {/* 2. Сайты для ИИ (GEO) */}
                                    <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Bot size={22} className="text-[#ffe600]" />
                                            <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Сайты для ИИ (GEO)' : 'AI Optimization (GEO)'}</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                            {isRu
                                                ? 'Адаптируем ваш сайт так, чтобы ChatGPT или другие нейросети рекомендовали именно вашу компанию, когда им задают вопрос.'
                                                : 'We adapt your site so ChatGPT and AI models recommend your exact business when asked.'}
                                        </p>
                                    </div>

                                    {/* 3. Приложение Revo */}
                                    <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Star size={22} className="text-[#ffe600]" />
                                            <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Приложение Revo' : 'Revo Ecosystem'}</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                            {isRu
                                                ? 'Оцифровываем ваших клиентов. Они получают бонусы, оставляют вам 5 звезд и возвращаются снова.'
                                                : 'Digitize your customers. They receive bonuses, leave 5-star reviews, and come back.'}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* DIRECTION 2: Outbound */}
                <div className="ios-glass-card rounded-3xl p-6 sm:p-10 border-4 border-[#ffe600] shadow-[0_0_60px_rgba(255,230,0,0.35)] space-y-6 transition-all duration-300">
                    <div
                        onClick={() => toggleDirection('dir2')}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            {/* Photorealistic Thumbnail + Glowing Icon */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#ffe600] shadow-[0_0_25px_rgba(255,230,0,0.5)] flex-shrink-0">
                                <img
                                    src="/assets/lead_radar_interception.png"
                                    alt="LeadRadar AI"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <Radar size={24} className="stroke-[#ffe600] stroke-[2.5]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-mono text-[#ffe600] font-black uppercase tracking-wider">
                                        НАПРАВЛЕНИЕ 02 // ПРЯМОЙ ПОИСК
                                    </span>
                                    <span className="neon-yellow-badge text-[9px]">OUTBOUND</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ffe600] transition-colors uppercase">
                                    {isRu ? 'Сами выходим на тех, кто готов платить' : 'Directly Reaching Ready Buyers'}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 self-end md:self-auto bg-[#ffe600]/10 border border-[#ffe600]/40 px-4 py-2 rounded-full">
                            <span className="text-xs font-mono text-[#ffe600] font-bold">
                                {expandedDirections.dir2 ? (isRu ? 'Свернуть' : 'Collapse') : (isRu ? 'Подробнее' : 'Expand')}
                            </span>
                            <div className={`w-8 h-8 rounded-full border border-[#ffe600] flex items-center justify-center text-black bg-[#ffe600] transition-transform duration-300 ${expandedDirections.dir2 ? 'rotate-180' : ''}`}>
                                <ChevronDown size={18} className="stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    {/* Expandable Content for Direction 2 */}
                    <AnimatePresence>
                        {expandedDirections.dir2 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8 pt-6 border-t border-[#ffe600]/30 overflow-hidden"
                            >
                                {/* Banner graphic */}
                                <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-[#ffe600]/60 shadow-2xl">
                                    <img
                                        src="/assets/lead_radar_interception.png"
                                        alt="LeadRadar AI Interception"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-85" />
                                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                                        <span className="neon-yellow-badge text-[10px] shadow-[0_0_20px_rgba(255,230,0,0.6)]">
                                            REALTIME CHAT INTERCEPTION & DIRECT CONTACT
                                        </span>
                                        <span className="text-xs font-mono text-[#ffe600] font-bold bg-black/90 px-3 py-1 rounded-full border border-[#ffe600]/40">
                                            Реакция: 12 мс
                                        </span>
                                    </div>
                                </div>

                                {/* Sub-Products Grid: 2 Direct Tools */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Tool 2.1: Перехват в чатах */}
                                    <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Radar size={22} className="text-[#ffe600]" />
                                            <h4 className="text-xl font-bold text-white uppercase">{isRu ? 'Перехват в чатах' : 'Live Chat Interception'}</h4>
                                        </div>
                                        <p className="text-sm text-white/90 leading-relaxed font-medium">
                                            {isRu
                                                ? 'Наш алгоритм круглосуточно читает городские чаты. Кто-то спросил: «Где найти юриста/ресторан/сервис?» — мы моментально отправляем ему ваше предложение.'
                                                : 'Our algorithm reads local chats 24/7. When someone asks for a service, we instantly send them your tailored proposal.'}
                                        </p>
                                    </div>

                                    {/* Tool 2.2: Прямые письма директорам */}
                                    <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-3">
                                            <MailCheck size={22} className="text-[#ffe600]" />
                                            <h4 className="text-xl font-bold text-white uppercase">{isRu ? 'Прямые письма директорам' : 'Direct Executive Contact'}</h4>
                                        </div>
                                        <p className="text-sm text-white/90 leading-relaxed font-medium">
                                            {isRu
                                                ? 'Находим контакты владельцев бизнеса и директоров, собираем информацию о них и отправляем письмо, на которое хочется ответить. Без спама, строго по делу.'
                                                : 'We find owner and director contacts, gather intelligence, and send emails that get replies. Zero spam, strictly relevant.'}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Action Button */}
                <div className="text-center pt-4 space-y-3">
                    <button
                        onClick={openLeadModal}
                        className="bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-xs sm:text-sm px-10 py-5 rounded-full uppercase tracking-wider shadow-[0_0_35px_rgba(255,230,0,0.5)] transition-transform hover:scale-105 inline-flex items-center gap-3 cursor-pointer"
                    >
                        <span>{isRu ? 'Обсудить проект' : 'Discuss Project'}</span>
                        <ArrowRight size={18} className="stroke-[3]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsTechSection;
