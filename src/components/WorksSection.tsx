"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import "@/lib/i18n";

interface WorkItem {
    url: string;
    image: string;
    title: string;
    badge: string;
    descRu: string;
    descEn: string;
    trafficGrowth: string;
    leadsGrowth: string;
    period: string;
    periodEn: string;
    chartPoints: number[];
    highlightsRu: string[];
    highlightsEn: string[];
    color: string;
}

const works: WorkItem[] = [
    {
        url: "https://resonation-rho.vercel.app/",
        image: "/assets/resonation.png",
        title: "RESONation",
        badge: "SOCIAL NETWORK / SAAS",
        descRu: "Платформа дешифровки Социального Кода для предпринимателей и визионеров нового времени. Поиск партнеров, друзей и единомышленников в 32 раза быстрее за счет математики резонанса.",
        descEn: "Social Code decryption platform for entrepreneurs and visionaries of the new era. Find partners, friends, and like-minded people 32 times faster via resonance mathematics.",
        trafficGrowth: "+410%",
        leadsGrowth: "5.6x",
        period: "3 мес.",
        periodEn: "3 months",
        chartPoints: [12, 22, 35, 58, 92, 140, 210],
        highlightsRu: [
            "Разработка математического ядра совместимости социальных кодов",
            "Снижение времени на поиск синергичных партнеров в 32 раза",
            "Интеграция интерактивного радара социальных связей на Canvas/SVG",
            "Конверсия в регистрацию на живые события выросла до 42%"
        ],
        highlightsEn: [
            "Developed mathematical compatibility engine for social codes",
            "Reduced time to find synergistic partners by 32x",
            "Integrated interactive Canvas/SVG social connection radar",
            "Conversion rate to live networking events boosted to 42%"
        ],
        color: "#a855f7" // Purple
    },
    {
        url: "https://resonation-relation.vercel.app/",
        image: "/assets/resonation_relation.png",
        title: "Anima Space",
        badge: "COMMUNITY / RELATIONSHIPS",
        descRu: "Экосистема и закрытое комьюнити осознанных отношений. Выход из тупика одиночества и конфликтов через метод «Теневого Танца», соматику и Код Личности.",
        descEn: "Closed community and ecosystem of conscious relationships. A way out of the dead end of loneliness and conflicts through the 'Shadow Dance' method, somatics, and Personality Code.",
        trafficGrowth: "+290%",
        leadsGrowth: "4.1x",
        period: "5 мес.",
        periodEn: "5 months",
        chartPoints: [10, 18, 25, 45, 68, 95, 130],
        highlightsRu: [
            "Разработка концепции и запуск закрытой экосистемы отношений",
            "Интеграция интерактивного ИИ-теста оценки Теневого саботажа",
            "Снижение уровня оттока участников (Churn Rate) в клубе до 4%",
            "Проведение более 50 соматических сессий TantraKiz в СНГ и ОАЭ"
        ],
        highlightsEn: [
            "Developed and launched the private relationship ecosystem concept",
            "Integrated an interactive AI-powered Shadow Sabotage assessment test",
            "Reduced monthly member churn rate (Churn Rate) to under 4%",
            "Conducted 50+ offline somatic TantraKiz sessions in CIS and UAE"
        ],
        color: "#be123c" // Burgundy
    },
    {
        url: "https://project-lejbs.vercel.app/",
        image: "/assets/ostwest_premium.png",
        title: "OstWest Premium",
        badge: "LUXURY TRAVEL / CONCIERGE",
        descRu: "Премиальный консьерж-сервис подбора люксовых туров по всему миру. Интерактивная 3D-модель Земли, персонализация маршрутов и 24/7 поддержка в пути.",
        descEn: "Premium concierge service for luxury global tours. Features an interactive 3D globe visualization, route personalization, and 24/7 client support.",
        trafficGrowth: "+340%",
        leadsGrowth: "4.2x",
        period: "3 мес.",
        periodEn: "3 months",
        chartPoints: [15, 24, 38, 52, 75, 110, 145],
        highlightsRu: [
            "Разработка интерактивной 3D-модели Земли с направлениями",
            "Конверсия в заявку на индивидуальный тур выросла до 14%",
            "Глубокая персонализация подбора под запросы клиентов",
            "Интеграция с WhatsApp-консьержем для мгновенной связи"
        ],
        highlightsEn: [
            "Interactive 3D Earth globe visualization with destinations",
            "Personalized luxury tour booking conversion increased to 14%",
            "Deep personalization based on premium clients' requests",
            "Seamless WhatsApp concierge integration for instant support"
        ],
        color: "#bef264" // Lime Green
    },
    {
        url: "https://shershadowcapital.online",
        image: "/assets/sher_shadow_capital.png",
        title: "Sher Shadow Capital",
        badge: "BUSINESS CONSULTING",
        descRu: "Премиальный консалтинг и Теневой Аудит (SFI) для топ-лидеров. Разблокировка когнитивных барьеров и вывод личной и бизнес-эффективности на максимум.",
        descEn: "Elite consulting and Shadow Friction Index (SFI) audit for top leaders. Unlocking cognitive barriers and maximizing personal and business efficiency.",
        trafficGrowth: "+180%",
        leadsGrowth: "3.5x",
        period: "6 мес.",
        periodEn: "6 months",
        chartPoints: [12, 19, 15, 27, 38, 54, 72],
        highlightsRu: [
            "Теневой Аудит (SFI) когнитивных барьеров",
            "Оптимизация воронки для топ-менеджмента",
            "Рост LTV ключевых клиентов на 45%",
            "Полный редизайн цифрового позиционирования"
        ],
        highlightsEn: [
            "Shadow Friction Index (SFI) audit",
            "Top-management funnel optimization",
            "Key client LTV growth by 45%",
            "Complete digital positioning redesign"
        ],
        color: "#e2b857" // Gold
    },
    {
        url: "https://www.friendlycode.fun/",
        image: "/assets/friendly_code.png",
        title: "REVOO B2C App",
        badge: "LOYALTY / WEB APP",
        descRu: "Клиентское веб-приложение лояльности REVOO для ресторанов и заведений. Интерактивная «стеклянная батарейка» с динамическим кэшбеком от 5% до 20%.",
        descEn: "Client-facing web application for the REVOO loyalty ecosystem. Features an interactive 'glass battery' showing dynamic cashback from 5% to 20%.",
        trafficGrowth: "+310%",
        leadsGrowth: "4.8x",
        period: "4 мес.",
        periodEn: "4 months",
        chartPoints: [5, 10, 22, 35, 62, 85, 110],
        highlightsRu: [
            "Геймификация с интерактивной «стеклянной батарейкой»",
            "Средний чек гостей вырос на 28%",
            "Удержание клиентов (Retention Rate) выросло до 64%",
            "Интеграция с Apple Wallet и Google Pay"
        ],
        highlightsEn: [
            "Gamification via interactive 'glass battery'",
            "Average guest check increased by 28%",
            "Customer Retention Rate boosted to 64%",
            "Seamless Apple Wallet & Google Pay integration"
        ],
        color: "#3b82f6" // Blue
    },
    {
        url: "https://paybio.top/",
        image: "/assets/paybio.png",
        title: "PayBio",
        badge: "TELEGRAM SAAS",
        descRu: "Платформа для запуска автоматических Telegram-магазинов за 60 секунд. Продажа гайдов, курсов и слотов на консультации в один клик прямо внутри мессенджера.",
        descEn: "Telegram Mini App platform to launch automated digital stores in 60 seconds. Sell guides, courses, and booking slots directly inside Telegram in 1 click.",
        trafficGrowth: "+450%",
        leadsGrowth: "5.2x",
        period: "3 мес.",
        periodEn: "3 months",
        chartPoints: [8, 15, 30, 48, 75, 120, 165],
        highlightsRu: [
            "Запуск продаж цифровых товаров в Telegram за 60 секунд",
            "Интеграция платежных шлюзов в один клик",
            "Снижение стоимости лида (CPL) на 65%",
            "Конверсия из посещения в покупку выросла на 24%"
        ],
        highlightsEn: [
            "Launch Telegram digital store in 60 seconds",
            "One-click payment gateway integration",
            "Lead acquisition cost (CPL) cut by 65%",
            "Visitor-to-buyer conversion boosted by 24%"
        ],
        color: "#06b6d4" // Cyan
    },
    {
        url: "https://revoo.win/business",
        image: "/assets/revoo_business.png",
        title: "REVOO Business",
        badge: "REPUTATION / B2B SAAS",
        descRu: "B2B SaaS-платформа программы лояльности для ресторанов. Автоматическое удержание клиентов за счет когнитивной геймификации и буст оценок на Google Maps.",
        descEn: "B2B SaaS loyalty platform for restaurants and venues. Automates customer retention via behavioral gamification and boosts ratings on Google Maps.",
        trafficGrowth: "+220%",
        leadsGrowth: "3.1x",
        period: "5 мес.",
        periodEn: "5 months",
        chartPoints: [15, 20, 25, 42, 58, 78, 98],
        highlightsRu: [
            "Автоматический сбор положительных отзывов на Google Maps",
            "Снижение оттока клиентов (Churn Rate) на 35%",
            "Прямая интеграция с популярными ресторанными POS-системами",
            "Глубокая поведенческая аналитика визитов"
        ],
        highlightsEn: [
            "Automated positive review collection on Google Maps",
            "Customer churn rate reduced by 35%",
            "Direct integration with major restaurant POS systems",
            "Deep behavioral analytics and cohort analysis"
        ],
        color: "#f59e0b" // Amber
    },
    {
        url: "https://www.virale.uno/",
        image: "/assets/virale.png",
        title: "Viral Engine",
        badge: "AI VIDEO ENGINE",
        descRu: "Инженерный ИИ-сервис для генерации вирусных Reels и Shorts за 10 минут. Автоматическое написание сценариев в стиле автора и интеллектуальный видеомонтаж.",
        descEn: "AI-powered production engine for viral Reels and Shorts in 10 minutes. Features personalized voice matching (Digital DNA) and automated video editing.",
        trafficGrowth: "+580%",
        leadsGrowth: "6.4x",
        period: "2 мес.",
        periodEn: "2 months",
        chartPoints: [10, 28, 45, 90, 160, 290, 480],
        highlightsRu: [
            "Генерация сценариев на основе цифрового следа (Digital DNA)",
            "Экономия времени на монтаж и продакшн до 90%",
            "Суммарный органический охват превысил 12M+ просмотров",
            "Идеальное попадание в tone-of-voice автора"
        ],
        highlightsEn: [
            "Script generation based on author's Digital DNA",
            "Video editing and production cost cut by 90%",
            "Total organic video reach exceeded 12M+ views",
            "Flawless matching of the author's tone-of-voice"
        ],
        color: "#ec4899" // Pink
    },
    {
        url: "https://project-wbfhb.vercel.app/",
        image: "/assets/healthcare_net.png",
        title: "Healthcare Net",
        badge: "MEDICAL / B2B CATALOG",
        descRu: "Интерактивный B2B-каталог медицинского и эстетического оборудования премиум-класса для клиник в Дубае. Подбор систем и генерация коммерческих предложений.",
        descEn: "Interactive B2B catalog of premium medical and aesthetic equipment for clinics in Dubai. Platform matching and automated commercial proposals.",
        trafficGrowth: "+125%",
        leadsGrowth: "2.4x",
        period: "6 мес.",
        periodEn: "6 months",
        chartPoints: [25, 30, 32, 45, 52, 68, 78],
        highlightsRu: [
            "Интерактивный 3D-каталог медицинских лазеров и систем",
            "Встроенный калькулятор окупаемости ROI для клиник",
            "Рост конверсии в B2B-заявку на 110%",
            "Автогенерация PDF-презентаций оборудования"
        ],
        highlightsEn: [
            "Interactive 3D medical laser catalog and display",
            "Integrated ROI calculator for healthcare providers",
            "B2B quote conversion increased by 110%",
            "Automated branded PDF commercial proposal generator"
        ],
        color: "#6366f1" // Indigo
    },
    {
        url: "https://keep-r-www.vercel.app/",
        image: "/assets/keep_r.png",
        title: "KeepR",
        badge: "ASSET DIGITAL PASSPORT",
        descRu: "Экосистема цифровых паспортов для суперкаров и премиальных активов в Дубае. Криптографический аудит истории обслуживания и фиксация рыночной наценки.",
        descEn: "Digital passport ecosystem for supercars and premium assets in Dubai. Cryptographically secure service history audits and market premium logging.",
        trafficGrowth: "+160%",
        leadsGrowth: "2.8x",
        period: "4 мес.",
        periodEn: "4 months",
        chartPoints: [10, 14, 18, 28, 35, 49, 62],
        highlightsRu: [
            "Криптографический паспорт подлинности истории суперкара",
            "Защищенные от подделки записи технического аудита",
            "Дополнительная наценка к рыночной стоимости при перепродаже",
            "Интеграция с авто-дилерами премиум-сегмента ОАЭ"
        ],
        highlightsEn: [
            "Cryptographically secure premium supercar history ledger",
            "Tamper-proof physical audit and forensic logs",
            "Enabled premium resale value markup in Dubai market",
            "API integrations with elite UAE car dealerships"
        ],
        color: "#10b981" // Emerald
    },
    {
        url: "https://rohstofftrader.net/",
        image: "/assets/rohstofftrader.png",
        title: "Commodity Traders",
        badge: "COMMODITIES / ANALYTICS",
        descRu: "Инвестиционный портал оценки горнодобывающих акций и аналитики сырьевых активов для немецких инвесторов. Интерактивные опросники и автоматическая PDF-генерация отчетов.",
        descEn: "Investment portal evaluating mining stocks and commodities analytics for German investors. Features interactive surveys and automated PDF report generation.",
        trafficGrowth: "+240%",
        leadsGrowth: "3.7x",
        period: "5 мес.",
        periodEn: "5 months",
        chartPoints: [20, 25, 38, 55, 72, 98, 128],
        highlightsRu: [
            "Интерактивный геймифицированный опросник квалификации инвесторов",
            "Автоматическая генерация аналитических PDF-отчетов",
            "Снижение стоимости привлечения инвестора на 48%",
            "Прямая синхронизация с CRM и Telegram-каналами"
        ],
        highlightsEn: [
            "Interactive profiling flow for investor qualification",
            "Automated PDF mining stock report generation",
            "Investor acquisition cost reduced by 48%",
            "Real-time CRM and private Telegram channel syncing"
        ],
        color: "#14b8a6" // Teal
    }
];

const generateSvgPaths = (points: number[]) => {
    const width = 500;
    const height = 180;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;

    const coords = points.map((val, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - ((val - min) / range) * (height - 40) - 20;
        return { x, y };
    });

    // Make smooth cubic bezier curve
    let linePath = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
        const curr = coords[i];
        const next = coords[i + 1];
        const cpX1 = curr.x + (next.x - curr.x) / 2;
        const cpY1 = curr.y;
        const cpX2 = curr.x + (next.x - curr.x) / 2;
        const cpY2 = next.y;
        linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }

    const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

    return { linePath, areaPath, coords };
};

const WorksSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftVal, setScrollLeftVal] = useState(0);
    const isDraggingRef = useRef(false);
    const isPausedRef = useRef(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;
        setIsMouseDown(true);
        isDraggingRef.current = false;
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeftVal(container.scrollLeft);
        isPausedRef.current = true;
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        // Keep it paused briefly to prevent instant jumping
        setTimeout(() => {
            isPausedRef.current = false;
        }, 1500);
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
        isPausedRef.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const container = containerRef.current;
        if (!container) return;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll-fast multiplier
        if (Math.abs(walk) > 5) {
            isDraggingRef.current = true;
        }
        container.scrollLeft = scrollLeftVal - walk;
    };

    const handleTouchStart = () => {
        isPausedRef.current = true;
    };

    const handleTouchEnd = () => {
        setTimeout(() => {
            isPausedRef.current = false;
        }, 2000);
    };

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let lastTime = performance.now();
        const speed = 40; // pixels per second

        const update = (time: number) => {
            if (!isPausedRef.current && !isMouseDown && !selectedWork && container) {
                const delta = (time - lastTime) / 1000;
                container.scrollLeft += speed * delta;
            }
            lastTime = time;
            animationFrameId = requestAnimationFrame(update);
        };

        animationFrameId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMouseDown, selectedWork]);

    return (
        <section className="relative py-16 md:py-32 px-6 bg-dubai-night border-y border-white/5 overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                    <div className="space-y-4">
                        <span className="text-xs font-mono tracking-[0.4em] text-primary uppercase block">
                            {isRu ? "ПОРТФОЛИО // НАШИ КЕЙСЫ" : "PORTFOLIO // CASES"}
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                        >
                            {isRu ? "Наши Работы" : "Our Works"}
                        </motion.h2>
                    </div>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/30 to-transparent hidden md:block mb-4" />
                </div>
            </div>

            {/* Infinite Horizontal Auto-Scrolling Marquee Slider */}
            <div className="w-full relative z-10 overflow-hidden py-4 select-none">
                {/* Left and Right Fade Overlays */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dubai-night via-dubai-night/85 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dubai-night via-dubai-night/85 to-transparent z-20 pointer-events-none" />

                <div 
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onScroll={handleScroll}
                    className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide px-6 cursor-grab active:cursor-grabbing"
                >
                    {/* Double the array for seamless infinite looping */}
                    {[...works, ...works].map((work, idx) => (
                        <div
                            key={idx}
                            onClick={(e) => {
                                if (isDraggingRef.current) {
                                    e.preventDefault();
                                    return;
                                }
                                setSelectedWork(work);
                            }}
                            className="group flex flex-col space-y-6 flex-shrink-0 w-[300px] md:w-[480px] cursor-pointer"
                        >
                            {/* Large Card Mockup */}
                            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black/40 sharp-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                {/* Image Wrapper */}
                                <div className="w-full h-full relative overflow-hidden">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        priority={idx < 4}
                                    />
                                    {/* Glassmorphic Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>

                                {/* External Link Icon / Badge Overlay */}
                                <div className="absolute top-6 right-6 flex items-center space-x-3 z-20">
                                    <span className="text-[10px] font-mono tracking-wider bg-black/80 text-white/90 border border-white/10 px-3 py-1 uppercase backdrop-blur-md">
                                        {work.badge}
                                    </span>
                                    <div className="w-8 h-8 rounded-none border border-white/20 bg-black/80 flex items-center justify-center text-white transition-all duration-300 group-hover:border-primary group-hover:text-primary backdrop-blur-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Glow Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Card Details */}
                            <div className="space-y-3 px-2">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                                        {work.title}
                                    </h3>
                                    <span className="text-xs text-white/40 font-mono tracking-tighter">
                                        {work.url.replace("https://", "").replace("www.", "").split('/')[0]}
                                    </span>
                                </div>
                                <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {isRu ? work.descRu : work.descEn}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Case Details Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedWork(null)}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl bg-dubai-night border border-white/10 sharp-border p-6 md:p-8 flex flex-col space-y-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-8"
                        >
                            {/* Glowing Tech Corner lines */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-40 pointer-events-none" style={{ borderColor: selectedWork.color }} />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-40 pointer-events-none" style={{ borderColor: selectedWork.color }} />

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedWork(null)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Header */}
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono tracking-[0.3em] uppercase block" style={{ color: selectedWork.color }}>
                                    {selectedWork.badge}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                    {selectedWork.title}
                                </h2>
                                <a
                                    href={selectedWork.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-white/40 hover:text-white transition-colors font-mono inline-flex items-center gap-1.5"
                                >
                                    {selectedWork.url.replace("https://", "")}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                                <div className="space-y-1 text-center md:text-left">
                                    <span className="text-xs font-mono text-white/40 block">
                                        {isRu ? "РОСТ ТРАФИКА" : "TRAFFIC GROWTH"}
                                    </span>
                                    <span className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: selectedWork.color }}>
                                        {selectedWork.trafficGrowth}
                                    </span>
                                </div>
                                <div className="space-y-1 text-center md:text-left border-x border-white/5 px-2 md:px-6">
                                    <span className="text-xs font-mono text-white/40 block">
                                        {isRu ? "МУЛЬТИПЛИКАТОР ЛИДОВ" : "LEAD MULTIPLIER"}
                                    </span>
                                    <span className="text-2xl md:text-4xl font-black tracking-tight text-white">
                                        {selectedWork.leadsGrowth}
                                    </span>
                                </div>
                                <div className="space-y-1 text-center md:text-left">
                                    <span className="text-xs font-mono text-white/40 block">
                                        {isRu ? "ПЕРИОД" : "TIMEFRAME"}
                                    </span>
                                    <span className="text-2xl md:text-4xl font-black tracking-tight text-white/80">
                                        {isRu ? selectedWork.period : selectedWork.periodEn}
                                    </span>
                                </div>
                            </div>

                            {/* Interactive SVG Chart */}
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider block">
                                    {isRu ? "// МЕТРИКА РОСТА ТРАФИКА (ДИНАМИКА ОНЛАЙН)" : "// TRAFFIC GROWTH DYNAMICS (REALTIME SIMULATION)"}
                                </span>
                                <div className="relative w-full bg-black/40 border border-white/5 p-4 rounded-none overflow-hidden aspect-[5/2] md:aspect-[3/1]">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none opacity-40">
                                        <div className="w-full h-[1px] border-b border-white/5 border-dashed" />
                                        <div className="w-full h-[1px] border-b border-white/5 border-dashed" />
                                        <div className="w-full h-[1px] border-b border-white/5 border-dashed" />
                                    </div>
                                    <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-20">
                                        <div className="h-full w-[1px] border-r border-white/5 border-dashed" />
                                        <div className="h-full w-[1px] border-r border-white/5 border-dashed" />
                                        <div className="h-full w-[1px] border-r border-white/5 border-dashed" />
                                    </div>

                                    {/* SVG Chart Render */}
                                    <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
                                        <defs>
                                            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="5" result="blur" />
                                                <feMerge>
                                                    <feMergeNode in="blur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                            <linearGradient id={`grad-${selectedWork.title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor={selectedWork.color} stopOpacity="0.3" />
                                                <stop offset="100%" stopColor={selectedWork.color} stopOpacity="0.0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Chart Fill Area */}
                                        <path
                                            d={generateSvgPaths(selectedWork.chartPoints).areaPath}
                                            fill={`url(#grad-${selectedWork.title.replace(/\s+/g, '')})`}
                                        />

                                        {/* Glowing line path */}
                                        <path
                                            d={generateSvgPaths(selectedWork.chartPoints).linePath}
                                            fill="none"
                                            stroke={selectedWork.color}
                                            strokeWidth="3.5"
                                            filter="url(#glow-filter)"
                                            strokeLinecap="round"
                                        />

                                        {/* Glowing dots */}
                                        {generateSvgPaths(selectedWork.chartPoints).coords.map((coord, i) => (
                                            <circle
                                                key={i}
                                                cx={coord.x}
                                                cy={coord.y}
                                                r={i === selectedWork.chartPoints.length - 1 ? "5" : "3.5"}
                                                fill={i === selectedWork.chartPoints.length - 1 ? "#ffffff" : selectedWork.color}
                                                stroke={selectedWork.color}
                                                strokeWidth="1.5"
                                                filter={i === selectedWork.chartPoints.length - 1 ? "url(#glow-filter)" : ""}
                                            />
                                        ))}
                                    </svg>
                                </div>
                            </div>

                            {/* Case Highlights */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest">
                                    {isRu ? "КЛЮЧЕВЫЕ ДОСТИЖЕНИЯ:" : "KEY ACHIEVEMENTS:"}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    {(isRu ? selectedWork.highlightsRu : selectedWork.highlightsEn).map((hl, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-white/80">
                                            <span className="flex-shrink-0 text-xs font-mono mt-0.5" style={{ color: selectedWork.color }}>
                                                [0{i + 1}]
                                            </span>
                                            <span>{hl}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Modal Footer / Action Button */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <p className="text-xs text-white/30 font-mono">
                                    {isRu ? "* ВСЕ МЕТРИКИ ВЕРИФИЦИРОВАНЫ АУДИТОРСКОЙ СИСТЕМОЙ BANZAI" : "* ALL METRICS VERIFIED BY BANZAI AUDITING PROTOCOL"}
                                </p>
                                <a
                                    href={selectedWork.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto text-center px-8 py-4 text-sm font-black text-black uppercase tracking-wider sharp-border transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none"
                                    style={{ backgroundColor: selectedWork.color }}
                                >
                                    {isRu ? "Перейти на сайт" : "Visit Live Site"}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom inline style for scrollbar hiding */}
            <style dangerouslySetInnerHTML={{ __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}} />
        </section>
    );
};

export default WorksSection;
