"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, MessageSquare, Bot, Target, ShieldAlert, ArrowRight, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { openLeadModal } from '../ModalController';

export const FomoSlider: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const [activeTab, setActiveTab] = useState(0);

    const slides = [
        {
            id: 0,
            categoryRu: 'B2C и Локальный бизнес',
            categoryEn: 'B2C & Local Business',
            titleRu: 'Покупка рекламы съедает всю чистую прибыль. Вы и сами это видите.',
            titleEn: 'Buying ads eats all net profit. You see it yourself.',
            quoteRu: 'Вы платите за каждый клик, а клиенты всё равно уходят к тем, кто висит на первых строчках в Google Карт и Яндекс Картах. Эти позиции не покупаются в рекламном кабинете — поисковики отдают их тем, чей профиль правильно настроен под алгоритмы.',
            quoteEn: 'You pay per click while clients go to Top-3 Google Maps businesses. Those spots are not bought in ad portals — search engines grant them to properly optimized profiles.',
            ctaRu: 'Забрать позиции в картах',
            ctaEn: 'Capture Top Maps Ranking',
            icon: MapPin,
            badgeRu: 'ГОРОДСКОЙ ТРАФИК И КАРТЫ',
            badgeEn: 'LOCAL MAP TRAFFIC',
            statRu: 'Вывод бизнеса в первые строчки Карт',
            statEn: 'Top-3 Maps ranking without pay-per-click',
            image: '/assets/map_outreach_revo_banner.webp',
            overlayTitleRu: '🚨 ДЕНЕЖНАЯ УТЕЧКА В РЕКЛАМЕ',
            overlayTitleEn: '🚨 AD BUDGET LEAK',
            overlayTextRu: 'Слив бюджета на дорожающие клики',
            overlayTextEn: 'Draining budget on inflated cost-per-click',
            overlayHighlightRu: '🏆 Top-3 Google Maps Захвачен',
            overlayHighlightEn: '🏆 Top-3 Google Maps Secured',
            overlayTag: 'MAPS ENGINE'
        },
        {
            id: 1,
            categoryRu: 'B2B и Работа с компаниями',
            categoryEn: 'B2B & Corporate Reach',
            titleRu: 'Ваша база холодных писем и звонков летит напрямую в спам.',
            titleEn: 'Your cold emails and calls go straight to spam.',
            quoteRu: 'Обычные массовые рассылки больше не работают — фильтры их блокируют, а секретари удаляют. ИИ находит прямые контакты владельцев, изучает информацию о компании и собирает такое письмо, которое решает конкретную проблему директора.',
            quoteEn: 'Generic mass mailings are dead. AI identifies direct contacts of business owners, analyzes company data, and crafts letters solving the director\'s exact pain.',
            ctaRu: 'Посмотреть примеры писем',
            ctaEn: 'View Sample Letters',
            icon: Mail,
            badgeRu: 'ПРЯМЫЕ ПРОДАЖИ B2B',
            badgeEn: 'DIRECT B2B SALES',
            statRu: 'Прямой выход на тех, кто подписывает чеки',
            statEn: 'Direct access to decision makers & check signers',
            image: '/assets/ai_b2b_conveyor.webp',
            overlayTitleRu: '🛡️ СПАМ-ФИЛЬТРЫ БЛОКИРУЮТ',
            overlayTitleEn: '🛡️ SPAM FILTERS BLOCKING',
            overlayTextRu: 'Массовый холодный спам: 0% ответов',
            overlayTextEn: 'Mass cold emails: 0% open rate',
            overlayHighlightRu: '✉️ Прямой контакт с Директором',
            overlayHighlightEn: '✉️ Direct CEO / Owner Reach',
            overlayTag: 'DIRECT B2B'
        },
        {
            id: 2,
            categoryRu: 'Сфера услуг и Эксперты',
            categoryEn: 'Services & Experts',
            titleRu: 'Надеяться только на рекомендации знакомых больше нельзя.',
            titleEn: 'Relying only on word of mouth is no longer viable.',
            quoteRu: 'Каждый день люди ищут специалистов в городских и тематических Telegram-чатах. ИИ мониторит эти переписки 24/7 и за доли секунды находит сообщения, где человек прямо сейчас ищет вашу услугу, передавая контакт вам.',
            quoteEn: 'People search for experts in Telegram chats daily. AI monitors messages 24/7 and instantly catches users asking for your exact service.',
            ctaRu: 'Посмотреть, как работает',
            ctaEn: 'See How It Works',
            icon: MessageSquare,
            badgeRu: 'ПОИСК КЛИЕНТОВ В МЕССЕНДЖЕРАХ',
            badgeEn: 'MESSENGER LEAD SEARCH',
            statRu: 'Перехват горячих запросов в реальном времени',
            statEn: 'Real-time hot lead interception',
            image: '/assets/lead_radar_interception.webp',
            overlayTitleRu: '⚡ ИИ-ПЕРЕХВАТ В ЧАТАХ (24/7)',
            overlayTitleEn: '⚡ REALTIME RADAR (24/7)',
            overlayTextRu: 'Запрос: «Где найти лучшего эксперта?»',
            overlayTextEn: 'Query: "Looking for top expert now"',
            overlayHighlightRu: '🎯 Контакт перехвачен [12ms]',
            overlayHighlightEn: '🎯 Lead Intercepted [12ms]',
            overlayTag: 'TELEGRAM RADAR'
        },
        {
            id: 3,
            categoryRu: 'Поиск в эпоху ИИ',
            categoryEn: 'AI Search & Web',
            titleRu: 'Ваш сайт не видят ИИ-помощники, через которых люди начинают искать услуги.',
            titleEn: 'AI assistants do not see your website when clients search.',
            quoteRu: 'Все больше людей ищут решения не через обычные ссылки в поиске, а задают вопросы ИИ-помощникам вроде ChatGPT. Мы перенастраиваем структуру вашего сайта так, чтобы нейросети рекомендовали именно вашу компанию как главное решение.',
            quoteEn: 'More buyers use ChatGPT instead of standard web links. We optimize your site structure so AI assistants prioritize your company as the top recommendation.',
            ctaRu: 'Проверить свой сайт',
            ctaEn: 'Audit Your Website',
            icon: Bot,
            badgeRu: 'ИИ-ПОИСК И САЙТЫ',
            badgeEn: 'AI SEARCH & GEO WEBSITES',
            statRu: 'Готовность сайта к выдаче в ответах нейросетей',
            statEn: 'Full GEO readiness for ChatGPT & Gemini answers',
            image: '/assets/tech_llm_citation.webp',
            overlayTitleRu: '🤖 ИИ-ПОИСК ВМЕСТО GOOGLE',
            overlayTitleEn: '🤖 AI OVERVIEW OVERTAKE',
            overlayTextRu: 'ИИ НЕ видят стандартные сайты',
            overlayTextEn: 'Standard sites invisible to AI LLMs',
            overlayHighlightRu: '🤖 ChatGPT выводит вас в Лидеры',
            overlayHighlightEn: '🤖 ChatGPT Recommends Your Site',
            overlayTag: 'GEO OPTIMIZATION'
        },
        {
            id: 4,
            categoryRu: 'Повторные визиты и База',
            categoryEn: 'Retention & Repeat Sales',
            titleRu: 'Привлекать нового клиента каждый раз с нуля — финансовое самоубийство.',
            titleEn: 'Acquiring every new client from scratch is financial suicide.',
            quoteRu: 'Платить за рекламу и терять человека после первой же покупки — значит работать на рекламный кабинет, а не на свой кошелек. Мы внедряем систему в Telegram, которая выдает человеку цифровой бонус при первом визите, автоматически собирает отзывы и заставляет его возвращаться снова.',
            quoteEn: 'Paying for ads only to lose buyers after 1 purchase feeds ad networks instead of your bank account. We deploy a Telegram engine granting digital perks and driving repeat sales.',
            ctaRu: 'Настроить возврат клиентов',
            ctaEn: 'Setup Client Retention',
            icon: Target,
            badgeRu: 'ПОВТОРНЫЕ ПРОДАЖИ И БАЗА',
            badgeEn: 'REPEAT SALES & SYSTEM',
            statRu: 'Поток повторных продаж без трат на рекламу',
            statEn: 'Continuous repeat sales with zero extra ad spend',
            image: '/assets/cafe_mobile_payment.webp',
            overlayTitleRu: '🔄 УТЕЧКА КЛИЕНТОВ ПОСЛЕ ПОКУПКИ',
            overlayTitleEn: '🔄 CLIENT CHURN AFTER 1ST VISIT',
            overlayTextRu: 'Разовые покупки съедают LTV',
            overlayTextEn: 'Single purchases destroy LTV margin',
            overlayHighlightRu: '⭐ Revo Telegram: +130% Возвратов',
            overlayHighlightEn: '⭐ Revo Engine: +130% Repeat Sales',
            overlayTag: 'REVO RETENTION'
        },
        {
            id: 5,
            categoryRu: 'Ловушка рекламных аукционов',
            categoryEn: 'Ad Auction Trap',
            titleRu: 'Вы пытаетесь перебить ставками корпорации с неисчерпаемыми бюджетами.',
            titleEn: 'You are outbidding corporations with bottomless budgets.',
            quoteRu: 'В рекламных кабинетах вы платите не за покупателя, а за показ на экране. На этом же аукционе за внимание одного и того же человека с вами соревнуются гиганты вроде Coca-Cola, банк и онлайн-казино. Соревноваться с ними кошельком бессмысленно. Нужно забирать людей там, где нет аукционных торгов.',
            quoteEn: 'Ad portals charge per view, not per buyer. You compete against banks and massive brands for the same user\'s attention. Competing by wallet size is impossible — capture clients outside bidding auctions.',
            ctaRu: 'Узнать, как обойти аукцион',
            ctaEn: 'Bypass Ad Auctions',
            icon: ShieldAlert,
            badgeRu: 'БОРЬБА ЗА РЕКЛАМУ И АУКЦИОНЫ',
            badgeEn: 'AD AUCTION DRAIN',
            statRu: 'Получение клиентов в обход рекламных торгов',
            statEn: 'Client acquisition bypassing overheated ad bidding',
            image: '/assets/ad_auction_trap.webp',
            overlayTitleRu: '🔥 АУКЦИОННЫЙ ТУПИК',
            overlayTitleEn: '🔥 AD AUCTION DEAD-END',
            overlayTextRu: 'Перегретые торги с гигантами рынка',
            overlayTextEn: 'Overheated bidding vs mega brands',
            overlayHighlightRu: '⚡ Внеаукционный Поток Клиентов',
            overlayHighlightEn: '⚡ Zero Auction Direct Client Flow',
            overlayTag: 'AUCTION BYPASS'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % slides.length);
    };

    const currentSlide = slides[activeTab];
    const IconComp = currentSlide.icon;

    return (
        <section id="fomo" className="relative py-12 md:py-32 px-3 sm:px-6 bg-structural-mesh border-b border-white/10 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-8 md:space-y-12">
                {/* Urgency Alert Bar */}
                <div className="bg-red-500/10 border border-red-500/40 p-3.5 sm:p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 max-w-4xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <div className="flex items-center gap-3 text-left">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                        <p className="text-[11px] sm:text-xs md:text-sm text-white font-mono font-bold leading-tight">
                            {isRu
                                ? '🚨 ОКНО ВОЗМОЖНОСТЕЙ ЗАКРЫВАЕТСЯ: Компании, занявшие Top-3 в Google AI Overview сегодня, удерживают лидерство весь 2026 год.'
                                : '🚨 WINDOW CLOSING: Brands capturing Top-3 in Google AI Overview today secure dominance for all of 2026.'}
                        </p>
                    </div>
                    <button
                        onClick={openLeadModal}
                        className="w-full md:w-auto text-[11px] font-black text-black bg-[#ffe600] px-4 py-2.5 rounded-lg uppercase tracking-wider whitespace-nowrap hover:scale-105 transition-transform cursor-pointer"
                    >
                        {isRu ? 'Запишитесь на разбор' : 'Book Audit'}
                    </button>
                </div>

                {/* Header */}
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 neon-yellow-badge text-[9px] sm:text-[10px]">
                        <Flame size={12} className="fill-black" />
                        <span>{isRu ? 'ГДЕ ВЫ ТЕРЯЕТЕ КЛИЕНТОВ' : 'WHERE YOU LOSE LEADS'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
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
                    <p className="text-white/70 text-xs sm:text-base font-medium hidden sm:block">
                        {isRu
                            ? 'Выберите ваш сегмент бизнеса и действуйте немедленно, пока нишу не заняли конкуренты.'
                            : 'Select your business domain and act immediately before competitors claim the territory.'}
                    </p>
                </div>

                {/* Combined Desktop & Mobile Tab Navigation */}
                <div className="flex flex-nowrap overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden gap-2 sm:gap-4 pb-4 px-2 sm:px-0 justify-start sm:justify-center snap-x">
                    {slides.map((slide, idx) => {
                        const TabIcon = slide.icon;
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex-shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer snap-start border ${
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

                {/* Sleek Mobile Navigation Pill Control (Replaces scrollbar) */}
                <div className="sm:hidden flex items-center justify-between gap-3 bg-[#0d0d14] border border-[#ffe600]/40 px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,230,0,0.15)]">
                    <button
                        onClick={handlePrev}
                        className="w-8 h-8 rounded-full bg-[#ffe600]/10 border border-[#ffe600]/50 flex items-center justify-center text-[#ffe600] active:scale-95 transition-transform cursor-pointer"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="text-center font-mono text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-2 truncate">
                        <span className="text-[#ffe600] font-black">{activeTab + 1}/{slides.length}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/90 truncate max-w-[170px]">
                            {isRu ? currentSlide.categoryRu : currentSlide.categoryEn}
                        </span>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-8 h-8 rounded-full bg-[#ffe600]/10 border border-[#ffe600]/50 flex items-center justify-center text-[#ffe600] active:scale-95 transition-transform cursor-pointer"
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Animated Slide Showcase Card */}
                <div className="relative min-h-[380px] bg-[#0d0d12] border-2 border-[#ffe600]/50 rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-14 shadow-[0_0_50px_rgba(255,230,0,0.15)] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, { offset }) => {
                                if (offset.x < -50) handleNext();
                                else if (offset.x > 50) handlePrev();
                            }}
                            className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center touch-pan-y"
                        >
                            {/* Left Info Column */}
                            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center gap-2 bg-[#ffe600]/10 border border-[#ffe600]/40 px-3 py-1 rounded-full text-[#ffe600] text-[10px] sm:text-xs font-mono font-bold">
                                        <IconComp size={13} />
                                        <span>{isRu ? currentSlide.badgeRu : currentSlide.badgeEn}</span>
                                    </div>
                                    <span className="sm:hidden font-mono text-[10px] text-white/40">
                                        {activeTab + 1} / {slides.length}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                                    {isRu ? currentSlide.titleRu : currentSlide.titleEn}
                                </h3>

                                <p className="text-xs sm:text-lg text-white/80 leading-relaxed border-l-2 sm:border-l-4 border-[#ffe600] pl-3 sm:pl-4 italic">
                                    "{isRu ? currentSlide.quoteRu : currentSlide.quoteEn}"
                                </p>

                                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                    <button
                                        onClick={openLeadModal}
                                        className="w-full sm:w-auto bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs md:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full uppercase tracking-wider shadow-[0_0_25px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>{isRu ? currentSlide.ctaRu : currentSlide.ctaEn}</span>
                                        <ArrowRight size={16} className="stroke-[3]" />
                                    </button>

                                    <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-xs font-mono text-[#ffe600] font-bold">
                                        <ShieldAlert size={15} className="flex-shrink-0" />
                                        <span>{isRu ? currentSlide.statRu : currentSlide.statEn}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image Graphic Preview with Emotional Cyber HUD Overlay */}
                            <div className="lg:col-span-5 relative aspect-video sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#ffe600]/30 shadow-[0_0_30px_rgba(255,230,0,0.2)] group/img">
                                <img
                                    src={currentSlide.image}
                                    alt={isRu ? currentSlide.categoryRu : currentSlide.categoryEn}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-black/40 to-transparent opacity-30 sm:opacity-90 pointer-events-none" />

                                {/* Floating Emotional HUD Card */}
                                <div className="hidden sm:block absolute top-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-red-500/40 space-y-1.5 shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono font-black text-red-400 uppercase tracking-wider">
                                            {isRu ? currentSlide.overlayTitleRu : currentSlide.overlayTitleEn}
                                        </span>
                                        <span className="text-[9px] font-mono text-white/50 bg-white/10 px-2 py-0.5 rounded">
                                            {currentSlide.overlayTag}
                                        </span>
                                    </div>
                                    <p className="text-xs font-mono text-white/90">
                                        {isRu ? currentSlide.overlayTextRu : currentSlide.overlayTextEn}
                                    </p>
                                </div>

                                {/* Bottom Solution Highlight Overlay */}
                                <div className="hidden sm:block absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md p-3 rounded-xl border border-[#ffe600]/60 space-y-1">
                                    <span className="text-xs font-mono font-black text-[#ffe600] block text-glow-yellow">
                                        {isRu ? currentSlide.overlayHighlightRu : currentSlide.overlayHighlightEn}
                                    </span>
                                    <div className="flex items-center justify-between text-[9px] font-mono text-white/60">
                                        <span>OutRich.Dubai AI Engine</span>
                                        <span className="text-[#ffe600] font-bold">STATUS: OPERATIONAL</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Bottom Progress Dots */}
                    <div className="sm:hidden flex items-center justify-center gap-2 pt-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeTab === idx ? 'w-6 bg-[#ffe600]' : 'w-2 bg-white/20'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FomoSlider;
