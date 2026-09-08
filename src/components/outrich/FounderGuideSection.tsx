"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink, Sparkles, X, ChevronRight, Zap } from 'lucide-react';
import Image from 'next/image';
import { openLeadModal } from '../ModalController';

interface PortfolioCase {
    id: string;
    url: string;
    image: string;
    title: string;
    badge: string;
    descRu: string;
    descEn: string;
    trafficGrowth: string;
    leadsGrowth: string;
    periodRu: string;
    periodEn: string;
    chartPoints: number[];
    highlightsRu: string[];
    highlightsEn: string[];
}

const portfolioCases: PortfolioCase[] = [
    {
        id: "sherlock-cars",
        url: "https://sherlock-cars-dubai.vercel.app/",
        image: "/assets/sherlock_cars.webp",
        title: "Sherlock Cars Dubai",
        badge: "AUTOMOTIVE / AI PLATFORM",
        descRu: "Премиальный автоподбор и ИИ-платформа поиска автомобилей в Дубае. Выездная мультиточечная диагностика суперкаров, прямые API-интеграции и VIP-сопровождение.",
        descEn: "Premium luxury car inspection and AI search ecosystem in Dubai. Turnkey multi-point diagnostics for supercars, direct database API feeds, and VIP export.",
        trafficGrowth: "+520%",
        leadsGrowth: "6.1x",
        periodRu: "3 мес.",
        periodEn: "3 months",
        chartPoints: [15, 28, 48, 85, 150, 260, 410],
        highlightsRu: [
            "Разработка проприетарной ИИ-системы перехвата авто по API за 12 мс",
            "Выездная мультиточечная диагностика премиальных авто и суперкаров",
            "Интеграция Telegram-бота с автоматической обработкой заявок",
            "Рост закрытых сделок под ключ до 38%"
        ],
        highlightsEn: [
            "Developed proprietary AI vehicle interception engine via 12ms API ping",
            "Turnkey multi-point diagnostic inspection for luxury SUVs & supercars",
            "Integrated automated qualification Telegram bot",
            "Turnkey deal completion rate boosted to 38%"
        ]
    },
    {
        id: "anima-space",
        url: "https://resonation-relation.vercel.app/",
        image: "/assets/resonation_relation.webp",
        title: "Anima Space",
        badge: "COMMUNITY / RELATIONSHIPS",
        descRu: "Экосистема и закрытое комьюнити осознанных отношений. Выход из тупика одиночества и конфликтов через метод «Теневого Танца», соматику и Код Личности.",
        descEn: "Closed community and ecosystem of conscious relationships. A way out of loneliness and conflicts through somatics and Personality Code.",
        trafficGrowth: "+290%",
        leadsGrowth: "4.1x",
        periodRu: "5 мес.",
        periodEn: "5 months",
        chartPoints: [10, 18, 25, 45, 68, 95, 130],
        highlightsRu: [
            "Разработка концепции и запуск закрытой экосистемы отношений",
            "Интеграция интерактивного ИИ-теста оценки Теневого саботажа",
            "Сохранение регулярного состава участников до 96%",
            "Проведение более 50 соматических сессий TantraKiz в СНГ и ОАЭ"
        ],
        highlightsEn: [
            "Private relationship ecosystem development and launch",
            "Integrated interactive AI Shadow Sabotage assessment test",
            "Member retention rate boosted to 96%",
            "Conducted 50+ somatic TantraKiz sessions in CIS and UAE"
        ]
    },
    {
        id: "ostwest-premium",
        url: "https://project-lejbs.vercel.app/",
        image: "/assets/ostwest_premium.webp",
        title: "OstWest Premium",
        badge: "LUXURY TRAVEL / CONCIERGE",
        descRu: "Премиальный консьерж-сервис подбора люксовых туров по всему миру. Интерактивная 3D-модель Земли, персонализация маршрутов и 24/7 поддержка.",
        descEn: "Premium concierge service for luxury global tours. Features interactive 3D globe visualization and 24/7 client support.",
        trafficGrowth: "+340%",
        leadsGrowth: "4.2x",
        periodRu: "3 мес.",
        periodEn: "3 months",
        chartPoints: [15, 24, 38, 52, 75, 110, 145],
        highlightsRu: [
            "Разработка интерактивной 3D-модели Земли с направлениями",
            "Доля обращений на индивидуальные туры выросла до 14%",
            "Интеграция с WhatsApp-консьержем для мгновенной связи"
        ],
        highlightsEn: [
            "Interactive 3D Earth globe visualization with destinations",
            "Personalized luxury tour booking rate increased to 14%",
            "Seamless WhatsApp concierge integration for instant support"
        ]
    },
    {
        id: "sher-shadow-capital",
        url: "https://shershadowcapital.online",
        image: "/assets/sher_shadow_capital.webp",
        title: "Sher Shadow Capital",
        badge: "BUSINESS CONSULTING",
        descRu: "Премиальный консалтинг и Теневой Аудит (SFI) для руководителей. Разблокировка когнитивных барьеров и вывод личной и бизнес-эффективности на максимум.",
        descEn: "Elite consulting and Shadow Friction Index (SFI) audit for leaders. Unlocking cognitive barriers and maximizing business efficiency.",
        trafficGrowth: "+180%",
        leadsGrowth: "3.5x",
        periodRu: "6 мес.",
        periodEn: "6 months",
        chartPoints: [12, 19, 15, 27, 38, 54, 72],
        highlightsRu: [
            "Теневой Аудит (SFI) когнитивных барьеров",
            "Оптимизация работы с первыми лицами компании",
            "Рост повторных заказов от ключевых клиентов на 45%"
        ],
        highlightsEn: [
            "Shadow Friction Index (SFI) audit",
            "Top-management decision flow optimization",
            "Repeat contracts from key clients up by 45%"
        ]
    },
    {
        id: "revoo-b2c",
        url: "https://www.friendlycode.fun/",
        image: "/assets/friendly_code.webp",
        title: "REVOO B2C App",
        badge: "LOYALTY / WEB APP",
        descRu: "Клиентское веб-приложение лояльности REVOO для ресторанов и заведений. Интерактивная «стеклянная батарейка» с динамическим кэшбеком от 5% до 20%.",
        descEn: "Client-facing web application for REVOO loyalty ecosystem. Features interactive 'glass battery' showing dynamic cashback from 5% to 20%.",
        trafficGrowth: "+310%",
        leadsGrowth: "4.8x",
        periodRu: "4 мес.",
        periodEn: "4 months",
        chartPoints: [5, 10, 22, 35, 62, 85, 110],
        highlightsRu: [
            "Геймификация с интерактивной «стеклянной батарейкой»",
            "Средний чек гостей вырос на 28%",
            "Возвращаемость гостей выросла до 64%"
        ],
        highlightsEn: [
            "Gamification via interactive 'glass battery'",
            "Average guest check increased by 28%",
            "Repeat customer visits boosted to 64%"
        ]
    },
    {
        id: "paybio",
        url: "https://paybio.top/",
        image: "/assets/paybio.webp",
        title: "PayBio",
        badge: "TELEGRAM SAAS",
        descRu: "Платформа для запуска автоматических Telegram-магазинов за 60 секунд. Продажа гайдов, курсов и слотов на консультации в один клик.",
        descEn: "Telegram Mini App platform to launch automated digital stores in 60 seconds. Sell digital products directly inside Telegram in 1 click.",
        trafficGrowth: "+450%",
        leadsGrowth: "5.2x",
        periodRu: "3 мес.",
        periodEn: "3 months",
        chartPoints: [8, 15, 30, 48, 75, 120, 165],
        highlightsRu: [
            "Запуск продаж цифровых товаров в Telegram за 60 секунд",
            "Интеграция платежных шлюзов в один клик",
            "Снижение затрат на привлечение покупателя на 65%"
        ],
        highlightsEn: [
            "Launch Telegram digital store in 60 seconds",
            "One-click payment gateway integration",
            "Customer acquisition costs cut by 65%"
        ]
    },
    {
        id: "revoo-business",
        url: "https://revoo.win/business",
        image: "/assets/revoo_business.webp",
        title: "REVOO Business",
        badge: "REPUTATION / SAAS",
        descRu: "Платформа программы лояльности для ресторанов. Автоматическое удержание клиентов и буст оценок на Google Maps.",
        descEn: "Loyalty platform for restaurants and venues. Automates customer return visits and boosts ratings on Google Maps.",
        trafficGrowth: "+220%",
        leadsGrowth: "3.1x",
        periodRu: "5 мес.",
        periodEn: "5 months",
        chartPoints: [15, 20, 25, 42, 58, 78, 98],
        highlightsRu: [
            "Автоматический сбор положительных отзывов на Google Maps",
            "Снижение ухода клиентов на 35%",
            "Прямая интеграция с ресторанными POS-системами"
        ],
        highlightsEn: [
            "Automated positive review collection on Google Maps",
            "Customer loss rate reduced by 35%",
            "Direct integration with major restaurant POS systems"
        ]
    },
    {
        id: "viral-engine",
        url: "https://www.virale.uno/",
        image: "/assets/virale.webp",
        title: "Viral Engine",
        badge: "AI VIDEO ENGINE",
        descRu: "Инженерный ИИ-сервис для генерации вирусных Reels и Shorts за 10 минут. Автоматическое написание сценариев по цифровому следу автора.",
        descEn: "AI-powered production engine for viral Reels and Shorts in 10 minutes. Personalized script creation based on author's Digital DNA.",
        trafficGrowth: "+580%",
        leadsGrowth: "6.4x",
        periodRu: "2 мес.",
        periodEn: "2 months",
        chartPoints: [10, 28, 45, 90, 160, 290, 480],
        highlightsRu: [
            "Генерация сценариев на основе цифрового следа (Digital DNA)",
            "Экономия времени на монтаж и продакшн до 90%",
            "Суммарный органический охват 12M+ просмотров"
        ],
        highlightsEn: [
            "Script generation based on author's Digital DNA",
            "Video editing and production cost cut by 90%",
            "Total organic video reach exceeded 12M+ views"
        ]
    },
    {
        id: "healthcare-net",
        url: "https://project-wbfhb.vercel.app/",
        image: "/assets/healthcare_net.webp",
        title: "Healthcare Net",
        badge: "MEDICAL CATALOG",
        descRu: "Интерактивный каталог медицинского и эстетического оборудования премиум-класса для клиник в Дубае.",
        descEn: "Interactive catalog of premium medical equipment for clinics in Dubai with automated commercial proposals.",
        trafficGrowth: "+125%",
        leadsGrowth: "2.4x",
        periodRu: "6 мес.",
        periodEn: "6 months",
        chartPoints: [25, 30, 32, 45, 52, 68, 78],
        highlightsRu: [
            "Интерактивный 3D-каталог медицинских лазеров и систем",
            "Встроенный калькулятор окупаемости оборудования для клиник",
            "Рост прямых коммерческих запросов на 110%"
        ],
        highlightsEn: [
            "Interactive 3D medical laser catalog display",
            "Integrated equipment payback calculator for clinics",
            "Direct business inquiry volume increased by 110%"
        ]
    },
    {
        id: "emirates-net",
        url: "https://project-wbfhb.vercel.app/umbrella-v4/",
        image: "/assets/emirates_net.webp",
        title: "Emirates Net Group",
        badge: "HOLDING / CONGLOMERATE",
        descRu: "Интерактивная экосистема холдинга Emirates Net Group, объединяющая 5 ведущих компаний в ОАЭ.",
        descEn: "Interactive ecosystem of Emirates Net Group holding, uniting 5 leading sectors across UAE.",
        trafficGrowth: "+320%",
        leadsGrowth: "4.5x",
        periodRu: "4 мес.",
        periodEn: "4 months",
        chartPoints: [18, 26, 42, 60, 85, 120, 160],
        highlightsRu: [
            "Интерактивная Canvas-визуализация структуры холдинга",
            "Повышение вовлеченности инвесторов на 150%",
            "Интеграция профилей компаний в единый хаб"
        ],
        highlightsEn: [
            "Interactive Canvas-based visualization of holding sectors",
            "Boosted investor and partner engagement by 150%",
            "Integrated company profiles into a single digital hub"
        ]
    },
    {
        id: "keep-r",
        url: "https://keep-r-www.vercel.app/",
        image: "/assets/keep_r.webp",
        title: "KeepR",
        badge: "ASSET DIGITAL PASSPORT",
        descRu: "Экосистема цифровых паспортов для суперкаров и премиальных активов в Дубае. Криптографический аудит истории обслуживания.",
        descEn: "Digital passport ecosystem for supercars in Dubai with cryptographically secure service history logs.",
        trafficGrowth: "+160%",
        leadsGrowth: "2.8x",
        periodRu: "4 мес.",
        periodEn: "4 months",
        chartPoints: [10, 14, 18, 28, 35, 49, 62],
        highlightsRu: [
            "Криптографический паспорт подлинности суперкара",
            "Защищенные от подделки записи технического аудита",
            "Дополнительная наценка при перепродаже"
        ],
        highlightsEn: [
            "Cryptographically secure premium supercar ledger",
            "Tamper-proof physical audit and forensic logs",
            "Enabled premium resale value markup in Dubai market"
        ]
    },
    {
        id: "commodity-traders",
        url: "https://rohstofftrader.net/",
        image: "/assets/rohstofftrader.png",
        title: "Commodity Traders",
        badge: "COMMODITIES / ANALYTICS",
        descRu: "Инвестиционный портал оценки горнодобывающих акций и аналитики сырьевых активов для немецких инвесторов.",
        descEn: "Investment portal evaluating mining stocks and commodities analytics for German investors with automated report generation.",
        trafficGrowth: "+240%",
        leadsGrowth: "3.7x",
        periodRu: "5 мес.",
        periodEn: "5 months",
        chartPoints: [20, 25, 38, 55, 72, 98, 128],
        highlightsRu: [
            "Интерактивный геймифицированный опросник инвесторов",
            "Автоматическая генерация аналитических PDF-отчетов",
            "Снижение стоимости привлечения инвестора на 48%"
        ],
        highlightsEn: [
            "Interactive profiling flow for investor qualification",
            "Automated PDF mining stock report generation",
            "Investor acquisition cost reduced by 48%"
        ]
    }
];

export const FounderGuideSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const [selectedCase, setSelectedCase] = useState<PortfolioCase | null>(null);

    // Infinite Marquee Auto-scroll setup
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
        const walk = (x - startX) * 1.5;
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
        const speed = 45; // pixels per second right-to-left

        const update = (time: number) => {
            if (!isPausedRef.current && !isMouseDown && !selectedCase && container) {
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
    }, [isMouseDown, selectedCase]);

    return (
        <section id="guide" className="relative py-20 md:py-32 px-4 sm:px-6 bg-[#070709] border-b border-white/10 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10 space-y-20">
                {/* Part A: Founder & Guide Bio (Igor Sherlock) */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Igor Sherlock Photo */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-[#ffe600] shadow-[0_0_50px_rgba(255,230,0,0.3)]">
                            <Image
                                src="/assets/sher-profile.webp"
                                alt="Игорь Шерлок - OutRich.Dubai agency"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            
                            <div className="absolute bottom-6 left-6 right-6 space-y-1">
                                <span className="neon-yellow-badge text-[10px]">
                                    FOUNDER & SYSTEM ARCHITECT
                                </span>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                                    Игорь Шерлок (Igor Sherlock)
                                </h3>
                                <p className="text-xs font-mono text-white/70">
                                    Sherlock Cars Dubai • Revo • OutRich.Dubai
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Founder Story & Authority */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-[#ffe600]/10 border border-[#ffe600]/40 px-4 py-1.5 rounded-full text-[#ffe600] font-bold text-xs uppercase tracking-wider">
                            <ShieldCheck size={16} />
                            <span>{isRu ? 'ПРОВОДНИК & ОСНОВАТЕЛЬ БРЕНДА' : 'THE GUIDE & FOUNDER'}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                            {isRu ? (
                                <>
                                    Владелец отличного бизнеса заслуживает очереди из клиентов, <br />
                                    <span className="text-[#ffe600] text-glow-yellow">а не сжигания маржи в рекламе.</span>
                                </>
                            ) : (
                                <>
                                    A great business owner deserves a queue of clients, <br />
                                    <span className="text-[#ffe600] text-glow-yellow">not burning margin on ads.</span>
                                </>
                            )}
                        </h2>

                        <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                            <p>
                                {isRu
                                    ? 'Игорь Шерлок и агентство OutRich.ai. Больше 10 лет в бизнесе. Мы не просто настраиваем рекламу — мы сами строили бизнесы (например, Sherlock Cars в Дубае) без внешних инвестиций, на 100% ИИ-контенте.'
                                    : 'Igor Sherlock & OutRich.ai agency. 10+ years in business. We do not just run ads — we built real companies (like Sherlock Cars Dubai) with 0 external funding using 100% AI content.'}
                            </p>
                            <p>
                                {isRu
                                    ? 'Мы знаем, как считать деньги и где искать клиентов. Ниже представлены наши реальные кейсы (включая проекты из портфолио Bonza Marketing).'
                                    : 'We know how to calculate numbers and find real buyers. Below are our actual cases (including portfolio projects from Bonza Marketing).'}
                            </p>
                        </div>

                        {/* Badges / Metrics */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center sm:text-left">
                            <div>
                                <span className="text-2xl sm:text-3xl font-black text-[#ffe600] block">10+ Yrs</span>
                                <span className="text-[11px] font-mono text-white/50 uppercase">
                                    {isRu ? 'Опыт в маркетинге' : 'Marketing Experience'}
                                </span>
                            </div>
                            <div>
                                <span className="text-2xl sm:text-3xl font-black text-white block">Sherlock Cars</span>
                                <span className="text-[11px] font-mono text-white/50 uppercase">
                                    {isRu ? 'Дубай без инвестиций' : 'Dubai Luxury Auto'}
                                </span>
                            </div>
                            <div>
                                <span className="text-2xl sm:text-3xl font-black text-[#ffe600] block">12+ Cases</span>
                                <span className="text-[11px] font-mono text-white/50 uppercase">
                                    {isRu ? 'Реализованных ИИ-систем' : 'Deployed AI Systems'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part B: Portfolio Cases Marquee Slider (Infinite Smooth Right-to-Left Auto-Scroll) */}
                <div className="space-y-8 pt-10 border-t border-white/10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px] mb-2">
                                <Award size={14} className="fill-black" />
                                <span>{isRu ? 'СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО' : 'SOCIAL PROOF & PORTFOLIO'}</span>
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                                {isRu ? 'Наши кейсы и реализованные ИИ-системы' : 'Our Portfolio & Deployed AI Systems'}
                            </h3>
                        </div>
                        <p className="text-xs text-[#ffe600] font-mono animate-pulse">
                            {isRu ? '← прокручивайте или свайпайте карточки кейсов →' : '← drag or swipe cards to explore cases →'}
                        </p>
                    </div>

                    {/* Infinite Horizontal Auto-Scrolling Marquee Slider */}
                    <div className="w-full relative z-10 py-4 select-none">
                        <div className="hidden sm:block absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#070709] to-transparent z-20 pointer-events-none" />
                        <div className="hidden sm:block absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#070709] to-transparent z-20 pointer-events-none" />

                        <div
                            ref={containerRef}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onScroll={handleScroll}
                            className="flex flex-col sm:flex-row gap-8 sm:gap-8 overflow-y-visible sm:overflow-x-auto sm:scrollbar-hide sm:no-scrollbar px-2 sm:px-4 sm:cursor-grab sm:active:cursor-grabbing py-2"
                        >
                            {/* We map over original portfolioCases twice but on mobile we only need one set, though CSS can't easily trim an array map. However, we can just let it show twice, or we can slice it. Let's slice for mobile using a responsive class trick or just map the duplicated array but with a vertical flex layout */}
                            {[...portfolioCases, ...portfolioCases].slice(0, 5).map((item, idx) => (
                                <div
                                    key={`mob-${idx}`}
                                    onClick={(e) => {
                                        if (isDraggingRef.current) {
                                            e.preventDefault();
                                            return;
                                        }
                                        setSelectedCase(item);
                                    }}
                                    className="sm:hidden group w-full bg-[#0d0d12] border-2 border-white/10 hover:border-[#ffe600] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,230,0,0.3)] cursor-pointer flex flex-col justify-between"
                                >
                                    {/* Large Preview Image Container */}
                                    <div className="relative w-full h-[220px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-[#ffe600] font-bold border border-white/15 uppercase tracking-wider">
                                            {item.badge}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-[#ffe600] transition-colors uppercase tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-white/70 line-clamp-2 font-medium leading-relaxed">
                                                {isRu ? item.descRu : item.descEn}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] font-mono text-white/40 block uppercase">
                                                    {isRu ? 'РОСТ ТРАФИКА' : 'TRAFFIC GROWTH'}
                                                </span>
                                                <span className="text-xl font-bold text-[#ffe600]">
                                                    {item.metric}
                                                </span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-[#ffe600]/10 flex items-center justify-center group-hover:bg-[#ffe600] transition-colors">
                                                <ArrowRight size={18} className="text-[#ffe600] group-hover:text-black" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {[...portfolioCases, ...portfolioCases].map((item, idx) => (
                                <div
                                    key={`desk-${idx}`}
                                    onClick={(e) => {
                                        if (isDraggingRef.current) {
                                            e.preventDefault();
                                            return;
                                        }
                                        setSelectedCase(item);
                                    }}
                                    className="hidden sm:flex group flex-shrink-0 w-[285px] sm:w-[440px] bg-[#0d0d12] border-2 border-white/10 hover:border-[#ffe600] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,230,0,0.3)] cursor-pointer flex-col justify-between"
                                >
                                    {/* Large Preview Image Container */}
                                    <div className="relative w-full h-[220px] sm:h-[280px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-[#ffe600] font-bold border border-white/15 uppercase tracking-wider">
                                            {item.badge}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-[#ffe600] transition-colors uppercase tracking-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-white/70 line-clamp-2 font-medium leading-relaxed">
                                                {isRu ? item.descRu : item.descEn}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] font-mono text-white/40 block uppercase">
                                                    {isRu ? 'РОСТ ТРАФИКА' : 'TRAFFIC GROWTH'}
                                                </span>
                                                <span className="text-xl font-bold text-[#ffe600]">
                                                    {item.trafficGrowth}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-mono text-white/40 block uppercase">
                                                    {isRu ? 'МУЛЬТИПЛИКАТОР' : 'MULTIPLIER'}
                                                </span>
                                                <span className="text-xl font-bold text-white">
                                                    {item.leadsGrowth}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Details Modal */}
            <AnimatePresence>
                {selectedCase && (
                    <div
                        onClick={() => setSelectedCase(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl bg-[#0c0c10] border-2 border-[#ffe600]/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(255,230,0,0.3)] my-8"
                        >
                            <button
                                onClick={() => setSelectedCase(null)}
                                className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="space-y-2">
                                <span className="neon-yellow-badge text-[10px]">
                                    {selectedCase.badge}
                                </span>
                                <h3 className="text-3xl font-black text-white uppercase">
                                    {selectedCase.title}
                                </h3>
                                <a
                                    href={selectedCase.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-[#ffe600] font-mono hover:underline"
                                >
                                    <span>{selectedCase.url.replace('https://', '')}</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-4 bg-[#121218] p-4 rounded-2xl border border-white/10 text-center">
                                <div>
                                    <span className="text-[10px] font-mono text-white/40 block">РОСТ ТРАФИКА</span>
                                    <span className="text-2xl font-black text-[#ffe600]">{selectedCase.trafficGrowth}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-white/40 block">МУЛЬТИПЛИКАТОР</span>
                                    <span className="text-2xl font-black text-white">{selectedCase.leadsGrowth}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-white/40 block">ПЕРИОД</span>
                                    <span className="text-2xl font-black text-[#ffe600]">{isRu ? selectedCase.periodRu : selectedCase.periodEn}</span>
                                </div>
                            </div>

                            <p className="text-sm text-white/80 leading-relaxed font-medium">
                                {isRu ? selectedCase.descRu : selectedCase.descEn}
                            </p>

                            <div className="space-y-2">
                                <h4 className="text-xs font-mono text-[#ffe600] uppercase tracking-wider font-bold">
                                    // КЛЮЧЕВЫЕ ДОСТИЖЕНИЯ:
                                </h4>
                                <ul className="space-y-2 text-xs text-white/80">
                                    {(isRu ? selectedCase.highlightsRu : selectedCase.highlightsEn).map((hl, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Sparkles size={14} className="text-[#ffe600] flex-shrink-0 mt-0.5" />
                                            <span>{hl}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <a
                                    href={selectedCase.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs px-8 py-3.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(255,230,0,0.4)] flex items-center justify-center gap-2"
                                >
                                    <span>Перейти на сайт кейса</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FounderGuideSection;
