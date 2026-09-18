"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bot, Radar, MailCheck, ArrowRight, Sparkles, CheckCircle2, ChevronDown, Star, Battery, Zap, Utensils, ShoppingBag, TrendingUp } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const ProductsTechSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    // State for expanded direction cards - all 3 open by default
    const [expandedDirections, setExpandedDirections] = useState<Record<string, boolean>>({
        dir1: true,
        dir2: true,
        dir3: true,
    });

    const toggleDirection = (dir: 'dir1' | 'dir2' | 'dir3') => {
        setExpandedDirections((prev) => ({
            ...prev,
            [dir]: !prev[dir],
        }));
    };

    return (
        <section id="products" className="relative py-12 md:py-16 px-4 sm:px-6 bg-[#09090e] border-y-4 border-[#ffe600] overflow-hidden my-6">
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
                                <span className="text-[#ffe600] text-glow-yellow">Три рабочих направления</span>
                            </>
                        ) : (
                            <>
                                OutRich Tools: <br />
                                <span className="text-[#ffe600] text-glow-yellow">Three Working Directions</span>
                            </>
                        )}
                    </h2>

                    <p className="text-white/90 text-sm sm:text-base font-medium max-w-3xl mx-auto">
                        {isRu
                            ? 'Запускаем органический поток клиентов, организуем прямой перехват готового спроса и развиваем продажи ресторанов в агрегаторах доставки еды.'
                            : 'We drive organic traffic, intercept active buyer intent, and scale food delivery revenues across major aggregator platforms.'}
                    </p>
                </div>

                {/* DIRECTION 1: Organic AI Traffic (Google Maps & AI) */}
                <div className="relative group">
                    {/* Pulsing Backlight Glow */}
                    <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-[#ffe600]/40 via-[#00FF66]/30 to-[#ffe600]/40 blur-xl opacity-80 group-hover:opacity-100 animate-pulse pointer-events-none transition-all duration-500" />
                    
                    <div className="relative ios-glass-card rounded-3xl p-6 sm:p-10 border-4 border-[#ffe600] shadow-[0_0_60px_rgba(255,230,0,0.35)] space-y-6 transition-all duration-300 bg-[#09090e]">
                        <div
                            onClick={() => toggleDirection('dir1')}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group/title"
                        >
                            <div className="flex items-center gap-4">
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
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover/title:text-[#ffe600] transition-colors uppercase">
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
                                    <a 
                                        href="https://outrich.online/maps" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-[#ffe600]/60 shadow-2xl group cursor-pointer hover:border-[#ffe600] transition-all"
                                    >
                                        <img
                                            src="/assets/map_outreach_revo_banner.png"
                                            alt="Map Outreach + Revo Banner"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-85" />
                                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                                            <span className="neon-yellow-badge text-[10px] shadow-[0_0_20px_rgba(255,230,0,0.6)]">
                                                MAPOUTRICH + REVO // GEO & AIO OPTIMIZATION
                                            </span>
                                            <span className="text-xs font-mono text-[#ffe600] font-bold bg-black/90 px-3 py-1 rounded-full border border-[#ffe600]/40 group-hover:bg-[#ffe600] group-hover:text-black transition-colors">
                                                Первые строчки Google: АКТИВНО ⚡
                                            </span>
                                        </div>
                                    </a>

                                    {/* Sub-Products Grid */}
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
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/maps', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#ffe600] hover:bg-[#ffe600] hover:text-black text-[#ffe600] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (Лендинг)' : 'Learn More (Landing)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
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
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/maps', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#ffe600] hover:bg-[#ffe600] hover:text-black text-[#ffe600] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (Лендинг)' : 'Learn More (Landing)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>

                                        {/* 3. Приложение Revo */}
                                        <div className="bg-[#12121a] border-2 border-[#ffe600]/40 p-6 rounded-2xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Battery size={22} className="text-[#ffe600]" />
                                                <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Приложение Revo' : 'Revo Ecosystem'}</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                                {isRu
                                                    ? 'Оцифровываем ваших клиентов. Они получают бонусы, оставляют вам 5 звезд и возвращаются снова.'
                                                    : 'Digitize your customers. They receive bonuses, leave 5-star reviews, and come back.'}
                                            </p>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/maps', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#ffe600] hover:bg-[#ffe600] hover:text-black text-[#ffe600] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (Лендинг)' : 'Learn More (Landing)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* DIRECTION 2: Outbound Intent (LeadRadar) */}
                <div className="relative group">
                    {/* Pulsing Backlight Glow */}
                    <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-[#ffe600]/40 via-[#00FF66]/30 to-[#ffe600]/40 blur-xl opacity-80 group-hover:opacity-100 animate-pulse pointer-events-none transition-all duration-500" />

                    <div className="relative ios-glass-card rounded-3xl p-6 sm:p-10 border-4 border-[#ffe600] shadow-[0_0_60px_rgba(255,230,0,0.35)] space-y-6 transition-all duration-300 bg-[#09090e]">
                        <div
                            onClick={() => toggleDirection('dir2')}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group/title"
                        >
                            <div className="flex items-center gap-4">
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
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover/title:text-[#ffe600] transition-colors uppercase">
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
                                    {/* Banner graphic opening leadradar.win */}
                                    <a
                                        href="https://leadradar.win"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-[#ffe600]/60 shadow-2xl group cursor-pointer hover:border-[#ffe600] transition-all"
                                    >
                                        <img
                                            src="/assets/lead_radar_interception.png"
                                            alt="LeadRadar AI Interception"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-85" />
                                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                                            <span className="neon-yellow-badge text-[10px] shadow-[0_0_20px_rgba(255,230,0,0.6)]">
                                                REALTIME CHAT INTERCEPTION & DIRECT CONTACT
                                            </span>
                                            <span className="text-xs font-mono text-[#ffe600] font-bold bg-black/90 px-3 py-1 rounded-full border border-[#ffe600]/40 group-hover:bg-[#ffe600] group-hover:text-black transition-colors">
                                                leadradar.win: ПЕРЕЙТИ ⚡
                                            </span>
                                        </div>
                                    </a>

                                    {/* Sub-Products Grid */}
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
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://leadradar.win', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#ffe600] hover:bg-[#ffe600] hover:text-black text-[#ffe600] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Перейти на leadradar.win' : 'Visit leadradar.win'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
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
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://leadradar.win', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#ffe600] hover:bg-[#ffe600] hover:text-black text-[#ffe600] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Перейти на leadradar.win' : 'Visit leadradar.win'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* DIRECTION 3: Food Delivery Growth Engine (Grab & Foodpanda) */}
                <div className="relative group">
                    {/* Pulsing Backlight Glow */}
                    <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-[#00FF66]/40 via-[#ffe600]/30 to-[#00FF66]/40 blur-xl opacity-80 group-hover:opacity-100 animate-pulse pointer-events-none transition-all duration-500" />

                    <div className="relative ios-glass-card rounded-3xl p-6 sm:p-10 border-4 border-[#00FF66]/80 shadow-[0_0_60px_rgba(0,255,102,0.3)] space-y-6 transition-all duration-300 bg-[#09090e]">
                        <div
                            onClick={() => toggleDirection('dir3')}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group/title"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#00FF66] shadow-[0_0_25px_rgba(0,255,102,0.5)] flex-shrink-0">
                                    <img
                                        src="/assets/food/infinite_hall.png"
                                        alt="Grab & Foodpanda Delivery Agency"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <Utensils size={24} className="stroke-[#00FF66] stroke-[2.5]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono text-[#00FF66] font-black uppercase tracking-wider">
                                            НАПРАВЛЕНИЕ 03 // ДОСТАВКА ЕДЫ
                                        </span>
                                        <span className="bg-[#00B14F]/20 text-[#00FF66] border border-[#00B14F]/50 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                                            FOOD DELIVERY
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover/title:text-[#00FF66] transition-colors uppercase">
                                        {isRu ? 'Продвижение в сервисах доставки еды' : 'Grab & Foodpanda Growth Engine'}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 self-end md:self-auto bg-[#00B14F]/20 border border-[#00B14F]/40 px-4 py-2 rounded-full">
                                <span className="text-xs font-mono text-[#00FF66] font-bold">
                                    {expandedDirections.dir3 ? (isRu ? 'Свернуть' : 'Collapse') : (isRu ? 'Подробнее' : 'Expand')}
                                </span>
                                <div className={`w-8 h-8 rounded-full border border-[#00FF66] flex items-center justify-center text-black bg-[#00FF66] transition-transform duration-300 ${expandedDirections.dir3 ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={18} className="stroke-[3]" />
                                </div>
                            </div>
                        </div>

                        {/* Expandable Content for Direction 3 */}
                        <AnimatePresence>
                            {expandedDirections.dir3 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8 pt-6 border-t border-[#00FF66]/30 overflow-hidden"
                                >
                                    {/* Banner graphic opening /food */}
                                    <a
                                        href="https://outrich.online/food"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border-2 border-[#00FF66]/60 shadow-2xl group cursor-pointer hover:border-[#00FF66] transition-all"
                                    >
                                        <img
                                            src="/assets/food/infinite_hall.png"
                                            alt="Food Delivery Agency Banner"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-85" />
                                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                                            <span className="bg-[#00B14F]/30 border border-[#00B14F]/60 text-[#00FF66] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                                                GRAB & FOODPANDA AGENCY // ASIA GROWTH ENGINE
                                            </span>
                                            <span className="text-xs font-mono text-[#00FF66] font-bold bg-black/90 px-3 py-1 rounded-full border border-[#00B14F]/60 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                                                outrich.online/food: ПЕРЕЙТИ ⚡
                                            </span>
                                        </div>
                                    </a>

                                    {/* Sub-Products Grid: 3 Direct Tools */}
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Tool 3.1: Grab & Foodpanda ТОП-5 */}
                                        <div className="bg-[#12121a] border-2 border-[#00B14F]/50 p-6 rounded-2xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Utensils size={22} className="text-[#00FF66]" />
                                                <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Grab & Foodpanda ТОП-5' : 'Aggregator Ranking'}</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                                {isRu
                                                    ? 'Выводим ваш ресторан в ТОП-5 выдачи агрегаторов Grab и Foodpanda. Масштабируем поток заказов по всему району.'
                                                    : 'We bring your restaurant into the Top-5 rankings on Grab & Foodpanda, expanding order radius.'}
                                            </p>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/food', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#00FF66] hover:bg-[#00FF66] hover:text-black text-[#00FF66] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (outrich.online/food)' : 'Learn More (food)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>

                                        {/* Tool 3.2: Переупаковка меню и SEO */}
                                        <div className="bg-[#12121a] border-2 border-[#00B14F]/50 p-6 rounded-2xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <ShoppingBag size={22} className="text-[#00FF66]" />
                                                <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Переупаковка меню & SEO' : 'Menu Optimization'}</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                                {isRu
                                                    ? 'Продающие фото блюд, SEO-тексты на 3 языках и смарт комбо-наборы для роста среднего чека ресторана на +35%.'
                                                    : 'Appetizing food photos, 3-language SEO descriptions, and high-converting combo sets boosting AOV by +35%.'}
                                            </p>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/food', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#00FF66] hover:bg-[#00FF66] hover:text-black text-[#00FF66] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (outrich.online/food)' : 'Learn More (food)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>

                                        {/* Tool 3.3: Оплата с прироста */}
                                        <div className="bg-[#12121a] border-2 border-[#00B14F]/50 p-6 rounded-2xl space-y-4">
                                            <div className="flex items-center gap-3">
                                                <TrendingUp size={22} className="text-[#00FF66]" />
                                                <h4 className="text-lg font-bold text-white uppercase">{isRu ? 'Оплата с чистой прибыли' : 'Profit-Share Model'}</h4>
                                            </div>
                                            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                                {isRu
                                                    ? 'Берем управление доставкой под ключ без постоянных фикс-оплат — вы платите процент только с чистого прироста.'
                                                    : 'We manage full delivery operations turn-key — paying only a performance percentage from new net profit.'}
                                            </p>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); window.open('https://outrich.online/food', '_blank'); }}
                                                className="mt-4 bg-transparent border border-[#00FF66] hover:bg-[#00FF66] hover:text-black text-[#00FF66] font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>{isRu ? 'Узнать больше (outrich.online/food)' : 'Learn More (food)'}</span>
                                                <ArrowRight size={14} className="stroke-[3]" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
