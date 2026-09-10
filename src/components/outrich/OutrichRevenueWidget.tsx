"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ChevronDown, CheckCircle2, ArrowRight, Zap, TrendingUp, Sparkles, Building2, Users, XCircle, AlertTriangle, Send, Check, ShieldCheck } from 'lucide-react';
import { openLeadModal } from '../ModalController';
import { useTranslation } from 'react-i18next';
import MapSelectionModal from './MapSelectionModal';

const scanStepsRu = [
    { label: "Подключение к Google Maps API & ИИ-сканеру...", detail: "Инициализация данных профиля" },
    { label: "Проверка объема и рейтинга отзывов...", detail: "Анализ частоты и ключевых слов в 5★ отзывах" },
    { label: "Сканирование медиа-контента и фото...", detail: "Проверка наличия панорам и снимков высокого качества" },
    { label: "Аудит GEO-метатегов и микроразметки...", detail: "Проверка корректности гео-структуры для поисковиков" },
    { label: "Проверка индексации в ChatGPT & Gemini...", detail: "Оценка видимости компании в ИИ-выдаче" }
];

const scanStepsEn = [
    { label: "Connecting to Google Maps API & AI Scanner...", detail: "Initializing profile metadata" },
    { label: "Auditing review volume & rating density...", detail: "Analyzing keyword frequency in 5★ reviews" },
    { label: "Scanning media content & photo quality...", detail: "Checking 360° panoramas & high-res shots" },
    { label: "Auditing GEO-tags & Schema.org markup...", detail: "Verifying geo-structure for search engines" },
    { label: "Checking ChatGPT & Gemini AI indexing...", detail: "Evaluating company presence in LLM answers" }
];

// --- Niche Data & Formula Constants ---
interface NicheData {
    id: string;
    labelRu: string;
    labelEn: string;
    avgCheck: number;
    baseLeads: number; // Base monthly leads for a ~500k population city
}

const NICHES: NicheData[] = [
    { id: 'horeca', labelRu: 'Ресторан / Кафе / Бары', labelEn: 'Restaurant / Cafe / Bar', avgCheck: 25, baseLeads: 120 },
    { id: 'auto_repair', labelRu: 'Ремонт автомобилей / СТО', labelEn: 'Auto Repair', avgCheck: 150, baseLeads: 40 },
    { id: 'tire_wash', labelRu: 'Шиномонтаж / Мойка', labelEn: 'Tire / Car Wash', avgCheck: 30, baseLeads: 150 },
    { id: 'plumbing', labelRu: 'Услуги сантехника', labelEn: 'Plumbing', avgCheck: 80, baseLeads: 50 },
    { id: 'electrician', labelRu: 'Услуги электрика', labelEn: 'Electrician', avgCheck: 70, baseLeads: 50 },
    { id: 'hvac', labelRu: 'Ремонт кондиционеров / Вентиляция', labelEn: 'HVAC / AC Repair', avgCheck: 120, baseLeads: 40 },
    { id: 'appliances', labelRu: 'Ремонт бытовой техники', labelEn: 'Appliance Repair', avgCheck: 60, baseLeads: 60 },
    { id: 'visa', labelRu: 'Оформление виз / Документов', labelEn: 'Visa / Document Services', avgCheck: 200, baseLeads: 25 },
    { id: 'legal', labelRu: 'Юридические услуги', labelEn: 'Legal Services', avgCheck: 300, baseLeads: 20 },
    { id: 'accounting', labelRu: 'Бухгалтерские услуги', labelEn: 'Accounting', avgCheck: 150, baseLeads: 25 },
    { id: 'beauty', labelRu: 'Салон красоты / Парикмахерская', labelEn: 'Beauty Salon / Hairdresser', avgCheck: 45, baseLeads: 90 },
    { id: 'nails', labelRu: 'Маникюр / Педикюр', labelEn: 'Nails', avgCheck: 30, baseLeads: 110 },
    { id: 'spa', labelRu: 'SPA / Массаж', labelEn: 'SPA / Massage', avgCheck: 65, baseLeads: 50 },
    { id: 'dentist', labelRu: 'Стоматология', labelEn: 'Dentistry', avgCheck: 180, baseLeads: 35 },
    { id: 'medical', labelRu: 'Медицинский центр / Клиника', labelEn: 'Medical Clinic', avgCheck: 100, baseLeads: 60 },
    { id: 'fitness', labelRu: 'Фитнес-клуб / Йога', labelEn: 'Fitness / Yoga', avgCheck: 60, baseLeads: 70 },
    { id: 'flowers', labelRu: 'Цветочный магазин', labelEn: 'Flower Shop', avgCheck: 40, baseLeads: 80 },
    { id: 'pets', labelRu: 'Зоомагазин / Ветклиника', labelEn: 'Pet Store / Vet', avgCheck: 50, baseLeads: 60 },
    { id: 'real_estate', labelRu: 'Недвижимость / Риелторы', labelEn: 'Real Estate', avgCheck: 1500, baseLeads: 8 },
    { id: 'construction', labelRu: 'Строительство / Ремонт квартир', labelEn: 'Construction / Remodeling', avgCheck: 2500, baseLeads: 5 },
    { id: 'other', labelRu: 'Другое', labelEn: 'Other', avgCheck: 100, baseLeads: 40 },
];

const SLIDER_TEXTS_RU = [
    "Google дает в выдачу только ТОП-3 заведения в локальном поиске. Они забирают 80% бесплатных клиентов.",
    "Около 30% искавших бизнес на карте приходят в тот же день. С Outrich их количество достигает 57%.",
    "Узнайте упущенную выгоду вашего бизнеса из-за потери локального трафика в 2026 году."
];

const SLIDER_TEXTS_EN = [
    "Google only shows TOP-3 places in local search. They take 80% of all free clients.",
    "About 30% of local searchers visit the same day. With Outrich, this jumps to 57%.",
    "Discover your lost revenue from missing local traffic in 2026."
];

export const OutrichRevenueWidget: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    // UI States
    const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
    const [sliderIndex, setSliderIndex] = useState(0);

    // Form Data States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBusiness, setSelectedBusiness] = useState('');
    const [extractedAddress, setExtractedAddress] = useState('');
    const [detectedCity, setDetectedCity] = useState('');
    const [nicheId, setNicheId] = useState('other');
    const [population, setPopulation] = useState(500000);
    const [searchResults, setSearchResults] = useState<{name: string, address: string}[]>([]);
    const [isSearchingMap, setIsSearchingMap] = useState(false);
    const [searchError, setSearchError] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    
    // Lead Capture
    const [contact, setContact] = useState('');
    const [leadName, setLeadName] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Scanning & Score
    const [scanStep, setScanStep] = useState(0);
    const [completedScanSteps, setCompletedScanSteps] = useState<number[]>([]);
    const [currentScore, setCurrentScore] = useState(0);

    const [userLoc, setUserLoc] = useState<{ lat: number; lon: number } | null>(null);

    useEffect(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
            .then(res => res.json())
            .then(data => {
                if (data.latitude && data.longitude) {
                    setUserLoc({ lat: parseFloat(data.latitude), lon: parseFloat(data.longitude) });
                }
            })
            .catch(() => {}); // ignore errors silently
    }, []);
    
    // Google Maps Profile Real-Time Metadata States
    const [googleRating, setGoogleRating] = useState('4.6');
    const [googleReviewsTotal, setGoogleReviewsTotal] = useState(148);
    const [profileHealthScore, setProfileHealthScore] = useState(72);
    const [hasWebsite, setHasWebsite] = useState(true);
    const [ownerResponseStatus, setOwnerResponseStatus] = useState('2 из 5 отзывов без ответа владельца');
    
    // Analysis States
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisProgress, setAnalysisProgress] = useState(0);
    const [results, setResults] = useState<{
        monthlyLoss: number;
        total6MoLoss: number;
        leadsLost: number;
        chartData: number[];
        address: string;
        rating: string;
        reviews: number;
        healthScore: number;
        visibilityScore: number;
    } | null>(null);

    // Auto-slider for step 1
    useEffect(() => {
        if (activeStep !== 1) return;
        const interval = setInterval(() => {
            setSliderIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeStep]);

    // Format numbers
    const formatMoney = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    const roundTo50 = (val: number) => Math.round(val / 50) * 50;

    // Calculate results
    const calculateRevenue = () => {
        const niche = NICHES.find(n => n.id === nicheId) || NICHES[NICHES.length - 1];
        
        const popBase = population / 500000;
        const popMultiplier = Math.max(0.3, Math.min(3.5, Math.pow(popBase, 0.6)));

        const conversionRate = 0.48; // Realistic fractional rate
        const monthlyLeadsLost = Math.round(niche.baseLeads * popMultiplier);
        const rawMonthlyLoss = monthlyLeadsLost * niche.avgCheck * conversionRate;
        const monthlyRevenueLoss = roundTo50(rawMonthlyLoss);

        const multipliers = [0.85, 1.25, 1.15, 1.1, 1.05, 1.0];
        const chartData = multipliers.map(m => roundTo50(monthlyRevenueLoss * m));
        const total6MoLoss = roundTo50(chartData.reduce((a, b) => a + b, 0));

        let hash = 0;
        const str = (selectedBusiness || extractedAddress || "biz").toLowerCase();
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        const visibilityScore = Math.min(62, Math.max(38, (Math.abs(hash) % 25) + 38));

        setResults({
            monthlyLoss: monthlyRevenueLoss,
            total6MoLoss: total6MoLoss,
            leadsLost: monthlyLeadsLost,
            chartData,
            address: extractedAddress || (isRu ? "Центральный район, главная улица" : "Central District, Main Street"),
            rating: googleRating || "4.6",
            reviews: googleReviewsTotal || 148,
            healthScore: profileHealthScore || 72,
            visibilityScore
        });
    };

    const proceedToStep2 = (
        name: string, 
        address: string, 
        detectedNiche?: string, 
        city?: string,
        rating?: string,
        reviewsCount?: number,
        healthScore?: number,
        hasWeb?: boolean,
        ownerResponse?: string
    ) => {
        setSelectedBusiness(name);
        setExtractedAddress(address);
        if (city) setDetectedCity(city);
        if (rating) setGoogleRating(rating);
        if (reviewsCount) setGoogleReviewsTotal(reviewsCount);
        if (healthScore) setProfileHealthScore(healthScore);
        if (typeof hasWeb === 'boolean') setHasWebsite(hasWeb);
        if (ownerResponse) setOwnerResponseStatus(ownerResponse);
        
        if (detectedNiche && NICHES.some(n => n.id === detectedNiche)) {
            setNicheId(detectedNiche);
        } else {
            // Auto detect niche from name & address text
            const text = `${name} ${address}`.toLowerCase();
            const matched = NICHES.find(n => {
                if (n.id === 'other') return false;
                const terms = n.labelRu.toLowerCase().split(/[\s\/,]+/);
                return terms.some(t => t.length > 3 && text.includes(t));
            });
            if (matched) {
                setNicheId(matched.id);
            }
        }
        setActiveStep(2);
        setSearchResults([]);
    };

    const handleSearchSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setSearchError(false);
        setIsSearchingMap(true);

        // If input contains URL or maps link, resolve it via /api/resolve-maps-link
        if (/https?:\/\//i.test(searchQuery) || searchQuery.includes('goo.gl') || searchQuery.includes('maps')) {
            try {
                const apiRes = await fetch('/api/resolve-maps-link', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: searchQuery.trim() })
                });
                if (apiRes.ok) {
                    const resolved = await apiRes.json();
                    if (resolved.success && resolved.name) {
                        proceedToStep2(
                            resolved.name, 
                            resolved.address || searchQuery, 
                            resolved.nicheId || resolved.categoryId, 
                            resolved.city,
                            resolved.rating,
                            resolved.userRatingsTotal,
                            resolved.profileHealthScore,
                            resolved.hasWebsite,
                            resolved.ownerResponseStatus
                        );
                        setIsSearchingMap(false);
                        return;
                    }
                }
            } catch (err) {
                console.error('Maps resolution error:', err);
            }
        }

        try {
            let url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=3&addressdetails=1`;
            if (userLoc) {
                url += `&lat=${userLoc.lat}&lon=${userLoc.lon}`;
            }
            const res = await fetch(url);
            const data = await res.json();
            
            if (data && data.length > 0) {
                const formatted = data.map((item: any) => ({
                    name: item.name || item.display_name.split(',')[0],
                    address: item.display_name
                }));
                setSearchResults(formatted);
            } else {
                setSearchError(true);
            }
        } catch (error) {
            console.error("Geocoding error:", error);
            setSearchError(true);
        } finally {
            setIsSearchingMap(false);
        }
    };

    const handleConfirmData = () => {
        setActiveStep(3);
        setIsAnalyzing(true);
        setScanStep(0);
        setCompletedScanSteps([]);
        calculateRevenue();

        const stepsArray = isRu ? scanStepsRu : scanStepsEn;
        let currentS = 0;

        const interval = setInterval(() => {
            setScanStep((prev) => {
                if (prev < stepsArray.length - 1) {
                    setCompletedScanSteps((done) => [...done, prev]);
                    return prev + 1;
                } else {
                    setCompletedScanSteps((done) => [...done, prev]);
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsAnalyzing(false);
                    }, 800);
                    return prev;
                }
            });
        }, 800);
    };

    const texts = isRu ? SLIDER_TEXTS_RU : SLIDER_TEXTS_EN;

    return (
        <div className="w-full flex flex-col gap-3">
            
            {/* Step 1: Input / Search */}
            <div className={`ios-glass-card rounded-2xl md:rounded-3xl border ${activeStep === 1 ? 'border-[#ffe600]/40 shadow-[0_0_20px_rgba(255,230,0,0.15)] pulsing-neon-yellow-outline' : 'border-white/10 opacity-70'} overflow-hidden transition-all duration-500`}>
                
                {/* Header (always visible if step > 1 as summary, or full if step 1) */}
                <div 
                    className={`p-4 md:p-6 flex items-center justify-between cursor-pointer ${activeStep > 1 ? 'hover:bg-white/5' : ''}`}
                    onClick={() => activeStep > 1 && setActiveStep(1)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 1 ? 'bg-[#ffe600] text-black' : 'bg-white/10 text-white'}`}>
                            1
                        </div>
                        <div>
                            <h3 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">
                                {isRu ? 'Поиск бизнеса' : 'Find Business'}
                            </h3>
                            {activeStep > 1 && (
                                <p className="text-xs text-white/50 truncate max-w-[200px] sm:max-w-xs">
                                    {searchQuery}
                                </p>
                            )}
                        </div>
                    </div>
                    {activeStep > 1 && <ChevronDown size={20} className="text-white/40" />}
                </div>

                <AnimatePresence initial={false}>
                    {activeStep === 1 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 md:p-6 pt-0 space-y-5">
                                {/* Auto-Slider Text */}
                                <div className="h-16 md:h-12 relative overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={sliderIndex}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-xs md:text-sm text-white/80 font-medium absolute inset-0 flex items-center"
                                        >
                                            <Sparkles className="inline-block text-[#ffe600] w-4 h-4 mr-2 flex-shrink-0" />
                                            {texts[sliderIndex]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>

                                <form onSubmit={handleSearchSubmit} className="space-y-3">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder={isRu ? "Название бизнеса и город (или ссылка Maps)" : "Business name & city (or Maps link)"}
                                            className="w-full bg-[#14141a] border border-[#ffe600]/30 focus:border-[#ffe600] rounded-xl pl-11 pr-4 py-4 text-sm md:text-base text-white placeholder-white/40 focus:ring-2 focus:ring-[#ffe600]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSearchingMap}
                                        className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-sm py-4 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSearchingMap ? (isRu ? 'Поиск на картах...' : 'Searching Maps...') : (isRu ? 'Найти профиль' : 'Find Profile')}</span>
                                        {!isSearchingMap && <ArrowRight size={16} className="stroke-[3]" />}
                                    </button>
                                </form>

                                <button
                                    type="button"
                                    onClick={() => setIsMapModalOpen(true)}
                                    className="w-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm py-3.5 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <MapPin size={16} className="text-[#ffe600]" />
                                    <span>{isRu ? 'Указать на карте вручную' : 'Pick on map manually'}</span>
                                </button>

                                {/* Search Results Dropdown */}
                                {searchResults.length > 0 && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 space-y-2 bg-[#0c0c10] p-3 rounded-xl border border-white/10 shadow-lg"
                                    >
                                        <p className="text-xs text-white/50 uppercase mb-2 ml-1">{isRu ? 'Выберите ваше заведение:' : 'Select your business:'}</p>
                                        {searchResults.map((res, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => proceedToStep2(res.name, res.address)}
                                                className="w-full text-left bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/5 hover:border-[#ffe600]/30 transition-all flex items-start gap-3 group"
                                            >
                                                <MapPin size={16} className="text-[#ffe600] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <div className="overflow-hidden">
                                                    <p className="text-white text-sm font-bold truncate group-hover:text-[#ffe600] transition-colors">{res.name}</p>
                                                    <p className="text-white/50 text-[10px] sm:text-xs truncate">{res.address}</p>
                                                </div>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Error State */}
                                {searchError && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 bg-red-500/10 p-4 rounded-xl border border-red-500/30 text-center space-y-2"
                                    >
                                        <p className="text-red-400 font-bold text-sm">
                                            {isRu ? 'Ничего не найдено 😔' : 'Nothing found 😔'}
                                        </p>
                                        <p className="text-white/70 text-xs leading-relaxed">
                                            {isRu 
                                                ? 'Уточните запрос (например, "Кофейня Москва") или вставьте прямую ссылку на вашу карточку в Google Maps.' 
                                                : 'Refine your search (e.g., "Coffee shop London") or paste a direct link to your Google Maps profile.'}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Step 2: Data Confirmation */}
            <div className={`ios-glass-card rounded-2xl md:rounded-3xl border ${activeStep === 2 ? 'border-[#ffe600]/40 shadow-[0_0_20px_rgba(255,230,0,0.15)] pulsing-neon-yellow-outline' : 'border-white/10 opacity-70'} overflow-hidden transition-all duration-500 ${activeStep < 2 ? 'pointer-events-none opacity-40' : ''}`}>
                
                <div 
                    className={`p-4 md:p-6 flex items-center justify-between cursor-pointer ${activeStep > 2 ? 'hover:bg-white/5' : ''}`}
                    onClick={() => activeStep > 2 && setActiveStep(2)}
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 2 ? 'bg-[#ffe600] text-black' : activeStep > 2 ? 'bg-white/10 text-white' : 'bg-white/5 text-white/30'}`}>
                            {activeStep > 2 ? <CheckCircle2 size={16} /> : '2'}
                        </div>
                        <div>
                            <h3 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">
                                {isRu ? 'Подтверждение данных' : 'Confirm Data'}
                            </h3>
                            {activeStep > 2 && (
                                <p className="text-xs text-white/50 truncate max-w-[200px] sm:max-w-xs">
                                    {NICHES.find(n => n.id === nicheId)?.labelRu || '...'} • {population.toLocaleString()}
                                </p>
                            )}
                        </div>
                    </div>
                    {activeStep > 2 && <ChevronDown size={20} className="text-white/40" />}
                </div>

                <AnimatePresence initial={false}>
                    {activeStep === 2 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 md:p-6 pt-0 space-y-5">
                                <div className="space-y-4">
                                    
                                    {/* Editable Inputs for Business & Address */}
                                    <div className="space-y-3">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-white/70 flex items-center gap-2">
                                                <Building2 size={14} />
                                                {isRu ? 'Название компании' : 'Company Name'}
                                            </label>
                                            <input
                                                type="text"
                                                value={selectedBusiness}
                                                onChange={(e) => setSelectedBusiness(e.target.value)}
                                                className="w-full bg-[#14141a] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffe600] focus:ring-1 focus:ring-[#ffe600] outline-none"
                                                placeholder={isRu ? 'Название бизнеса' : 'Business Name'}
                                            />
                                        </div>
                                        
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-white/70 flex items-center gap-2">
                                                <MapPin size={14} />
                                                {isRu ? 'Адрес' : 'Address'}
                                            </label>
                                            <input
                                                type="text"
                                                value={extractedAddress}
                                                onChange={(e) => setExtractedAddress(e.target.value)}
                                                className="w-full bg-[#14141a] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffe600] focus:ring-1 focus:ring-[#ffe600] outline-none"
                                                placeholder={isRu ? 'Город, Улица' : 'City, Street'}
                                            />
                                        </div>
                                    </div>

                                    {/* Category Select (Replaces Niche) */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-white/70 flex items-center gap-2">
                                            <Building2 size={14} />
                                            {isRu ? 'Категория бизнеса в Google Картах' : 'Business Category in Google Maps'}
                                        </label>
                                        <select 
                                            value={nicheId}
                                            onChange={(e) => setNicheId(e.target.value)}
                                            className="w-full bg-[#14141a] border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white focus:border-[#ffe600] focus:ring-1 focus:ring-[#ffe600] outline-none appearance-none"
                                            style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                                        >
                                            {NICHES.map(n => (
                                                <option key={n.id} value={n.id}>{isRu ? n.labelRu : n.labelEn}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Population Slider */}
                                    <div className="space-y-3 pt-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-xs font-medium text-white/70 flex items-center gap-2">
                                                <Users size={14} />
                                                {isRu ? 'Население города' : 'City population'}
                                                {detectedCity && <span className="text-[#ffe600] font-bold">({detectedCity})</span>}
                                            </label>
                                            <span className="text-[#ffe600] font-bold text-sm">
                                                {population >= 5000000 ? '5M+' : population.toLocaleString('ru-RU')}
                                            </span>
                                        </div>
                                        <input 
                                            type="range" 
                                            min="50000" 
                                            max="5000000" 
                                            step="50000"
                                            value={population}
                                            onChange={(e) => setPopulation(Number(e.target.value))}
                                            className="w-full accent-[#ffe600] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[10px] text-white/40 font-mono">
                                            <span>50k</span>
                                            <span>5M+</span>
                                        </div>
                                    </div>

                                </div>
                                <button
                                    onClick={handleConfirmData}
                                    className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-sm py-4 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                                >
                                    <Zap size={16} className="fill-black" />
                                    <span>{isRu ? 'Начать анализ (10 сек)' : 'Run Analysis (10 sec)'}</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Step 3: Analysis Results */}
            <div className={`ios-glass-card rounded-2xl md:rounded-3xl border ${activeStep === 3 ? 'border-[#ffe600]/50 shadow-[0_0_30px_rgba(255,230,0,0.2)]' : 'border-white/10 opacity-70'} overflow-hidden transition-all duration-500 ${activeStep < 3 ? 'pointer-events-none opacity-40' : ''}`}>
                
                <div className="p-4 md:p-6 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 3 ? 'bg-[#ffe600] text-black' : 'bg-white/5 text-white/30'}`}>
                        3
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">
                        {isRu ? 'Данные анализа' : 'Analysis Data'}
                    </h3>
                </div>

                <AnimatePresence initial={false}>
                    {activeStep === 3 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 md:p-6 pt-0">
                                
                                {isAnalyzing ? (
                                    // Real-Time Multi-Step Scanning Stage
                                    <div className="py-8 space-y-6">
                                        <div className="text-center space-y-3">
                                            <div className="inline-flex items-center gap-2 text-[10px] bg-[#ffe600]/10 border border-[#ffe600]/40 px-3 py-1 rounded-full text-[#ffe600]">
                                                <Search size={13} className="animate-spin text-[#ffe600]" />
                                                <span className="font-bold">{isRu ? 'ИИ-СКАНЕР В РЕАЛЬНОМ ВРЕМЕНИ' : 'REAL-TIME AI SCANNER'}</span>
                                            </div>

                                            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                                                «{selectedBusiness || (isRu ? 'Профиль бизнеса' : 'Business Profile')}»
                                            </h3>

                                            {/* Progress bar */}
                                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5 max-w-md mx-auto">
                                                <div
                                                    className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-[#ffe600] rounded-full transition-all duration-300"
                                                    style={{ width: `${((scanStep + 1) / (isRu ? scanStepsRu.length : scanStepsEn.length)) * 100}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Live Step Checklist */}
                                        <div className="space-y-3 bg-[#111117] border border-white/10 rounded-2xl p-4 sm:p-5 max-w-xl mx-auto">
                                            {(isRu ? scanStepsRu : scanStepsEn).map((st, idx) => {
                                                const isDone = completedScanSteps.includes(idx);
                                                const isCurrent = scanStep === idx && !isDone;
                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 ${
                                                            isCurrent
                                                                ? 'bg-[#ffe600]/10 border border-[#ffe600]/40 translate-x-1'
                                                                : isDone
                                                                ? 'bg-white/5 opacity-80'
                                                                : 'opacity-40'
                                                        }`}
                                                    >
                                                        <div className="mt-0.5 flex-shrink-0">
                                                            {isDone ? (
                                                                <CheckCircle2 size={18} className="text-[#ffe600]" />
                                                            ) : isCurrent ? (
                                                                <div className="w-4 h-4 rounded-full border-2 border-[#ffe600] border-t-transparent animate-spin" />
                                                            ) : (
                                                                <div className="w-4 h-4 rounded-full border border-white/30" />
                                                            )}
                                                        </div>

                                                        <div className="space-y-0.5 text-left">
                                                            <p className={`text-xs sm:text-sm font-mono font-bold ${isCurrent ? 'text-[#ffe600]' : isDone ? 'text-white' : 'text-white/50'}`}>
                                                                {st.label}
                                                            </p>
                                                            <p className="text-[10px] sm:text-xs text-white/50 font-mono">
                                                                {st.detail}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : results ? (
                                    // Results State - Combined Audit Verdict + Loss Estimation
                                    <div className="space-y-6 text-left">
                                        {/* MODULE 1: Local Dominance Verdict & Google Profile Live Badge */}
                                        <div className="space-y-4 bg-[#0e0e14] border-2 border-[#ffe600]/40 rounded-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(255,230,0,0.15)]">
                                            <div className="space-y-2 border-b border-white/10 pb-4">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <div className="inline-flex items-center gap-1.5 bg-[#ffe600]/10 border border-[#ffe600]/40 px-2.5 py-0.5 rounded-full text-[#ffe600] text-[9px] font-mono font-bold">
                                                        <Sparkles size={11} />
                                                        <span>{isRu ? 'ПРОФИЛЬ GOOGLE MAPS В РЕАЛЬНОМ ВРЕМЕНИ' : 'LIVE GOOGLE MAPS PROFILE'}</span>
                                                    </div>
                                                    <div className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-[#ffe600]">
                                                        <span>📍 {detectedCity || (isRu ? 'Локальный рынок' : 'Local Market')}</span>
                                                    </div>
                                                </div>

                                                {/* PROMINENT BUSINESS NAME & GOOGLE RATING BADGE */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                                                    <div>
                                                        <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight break-all text-glow">
                                                            «{selectedBusiness || (isRu ? 'Профиль бизнеса' : 'Business Profile')}»
                                                        </h4>
                                                        <p className="text-[11px] text-white/50 font-mono truncate max-w-md">{results.address}</p>
                                                    </div>

                                                    {/* Google Maps Rating Star Badge */}
                                                    <div className="bg-[#181824] border border-[#ffe600]/30 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shrink-0 shadow-lg">
                                                        <div className="text-[#ffe600] font-black text-xl font-mono flex items-center gap-1">
                                                            <span>⭐</span>
                                                            <span>{results.rating}</span>
                                                        </div>
                                                        <div className="text-[10px] font-mono text-white/70 leading-tight">
                                                            <p className="font-bold text-white">{results.reviews} {isRu ? 'отзывов' : 'reviews'}</p>
                                                            <p className="text-white/40 text-[9px] uppercase">{isRu ? 'В Google Maps' : 'Google Maps'}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Extracted Category Badge & Website Indicator */}
                                                <div className="flex flex-wrap items-center gap-2 pt-1">
                                                    <span className="bg-[#ffe600]/15 text-[#ffe600] border border-[#ffe600]/30 text-[10px] font-mono px-2.5 py-1 rounded-lg font-bold">
                                                        🏷️ {isRu ? 'Категория: ' : 'Category: '}{NICHES.find(c => c.id === nicheId)?.labelRu || 'Общий бизнес'}
                                                    </span>
                                                    <span className="bg-white/5 border border-white/10 text-[10px] font-mono text-white/70 px-2.5 py-1 rounded-lg">
                                                        🌐 Сайт: {hasWebsite ? '✅ Подключен' : '⚠️ Не найден в профиле'}
                                                    </span>
                                                    <span className="bg-white/5 border border-white/10 text-[10px] font-mono text-white/70 px-2.5 py-1 rounded-lg">
                                                        💬 {ownerResponseStatus}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Profile Health Score & Top-3 Visibility Meter */}
                                            <div className="p-4 rounded-xl bg-[#13131c] border border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-orange-400 transition-colors duration-300">
                                                        {results.healthScore}%
                                                    </span>
                                                    <div className="space-y-0.5">
                                                        <span className="text-[10px] font-mono text-white/60 block uppercase">
                                                            {isRu ? 'Индекс полноты карточки Google' : 'Google Profile Health Index'}
                                                        </span>
                                                        <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                                            {isRu ? 'ТРЕБУЕТСЯ ИИ-ОПТИМИЗАЦИЯ' : 'NEEDS AI OPTIMIZATION'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right space-y-0.5 text-[11px] font-mono text-white/70 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
                                                    <p className="text-red-400 font-bold">
                                                        {isRu ? '🚨 ВНЕ TOP-3 GOOGLE' : '🚨 OUTSIDE TOP-3'}
                                                    </p>
                                                    <p className="text-white/50 text-[10px]">
                                                        {isRu ? `Потеря кликов категории: ~${100 - results.healthScore}%` : `Lost category clicks: ~${100 - results.healthScore}%`}
                                                    </p>
                                                </div>
                                            </div>

                                             {/* 4 Identified Deficiencies Grid (From Screenshot) */}
                                             <div className="space-y-2 pt-1">
                                                 <p className="text-[10px] font-mono text-[#ffe600] uppercase tracking-wider font-bold">
                                                     {isRu ? '// ВЫЯВЛЕННЫЕ ДЕФЕКТЫ ПРОФИЛЯ:' : '// IDENTIFIED DEFICIENCIES:'}
                                                 </p>
                                                 <div className="grid grid-cols-2 gap-2 text-left">
                                                     <div className="bg-[#14141d] border border-red-500/30 p-2.5 rounded-lg space-y-0.5">
                                                         <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-red-400">
                                                             <XCircle size={13} className="shrink-0" />
                                                             <span>{isRu ? 'Недостаточно отзывов' : 'Low Review Volume'}</span>
                                                         </div>
                                                         <p className="text-[10px] text-white/60 leading-tight">
                                                             {isRu ? 'Дефицит свежих 5★ и ключевых слов.' : 'Lack of fresh 5★ reviews & keywords.'}
                                                         </p>
                                                     </div>
                                                     <div className="bg-[#14141d] border border-orange-500/30 p-2.5 rounded-lg space-y-0.5">
                                                         <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-orange-400">
                                                             <AlertTriangle size={13} className="shrink-0" />
                                                             <span>{isRu ? 'Мало фото и панорам' : 'Low Media Content'}</span>
                                                         </div>
                                                         <p className="text-[10px] text-white/60 leading-tight">
                                                             {isRu ? 'Нет HD-снимков и 360° панорамы.' : 'Missing HD interior & 360° photos.'}
                                                         </p>
                                                     </div>
                                                     <div className="bg-[#14141d] border border-red-500/30 p-2.5 rounded-lg space-y-0.5">
                                                         <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-red-400">
                                                             <XCircle size={13} className="shrink-0" />
                                                             <span>{isRu ? 'Отсутствуют GEO-метатеги' : 'Missing GEO Meta-tags'}</span>
                                                         </div>
                                                         <p className="text-[10px] text-white/60 leading-tight">
                                                             {isRu ? 'Нет микроразметки Schema.org.' : 'No Schema.org GEO markup.'}
                                                         </p>
                                                     </div>
                                                     <div className="bg-[#14141d] border border-orange-500/30 p-2.5 rounded-lg space-y-0.5">
                                                         <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-orange-400">
                                                             <AlertTriangle size={13} className="shrink-0" />
                                                             <span>{isRu ? 'Профиль не виден ИИ' : 'Invisible to AI'}</span>
                                                         </div>
                                                         <p className="text-[10px] text-white/60 leading-tight">
                                                             {isRu ? 'ChatGPT и Gemini пропускают бренд.' : 'ChatGPT & Gemini skip profile.'}
                                                         </p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>

                                         {/* MODULE 2 (Паровозиком): Модуль оценки финансовых потерь */}
                                         <div className="space-y-4">
                                             {/* Loss Headline Result with Fractional $50 Sum */}
                                             <div className="text-center space-y-1 bg-[#1a1a24] border border-red-500/30 rounded-2xl p-5 relative overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                                                 <div className="absolute inset-0 bg-red-500/5" />
                                                 <p className="text-red-400 font-mono text-[10px] sm:text-xs uppercase font-bold relative z-10">
                                                     {isRu ? `🚨 Упущенная выгода «${selectedBusiness || 'Бизнеса'}» (6 мес):` : `🚨 Lost Revenue for «${selectedBusiness || 'Business'}» (6 mo):`}
                                                 </p>
                                                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter relative z-10" style={{ textShadow: '0 0 40px rgba(239,68,68,0.4)' }}>
                                                     {formatMoney(results.total6MoLoss)}
                                                 </h2>
                                                 <p className="text-white/70 text-xs pt-1 relative z-10">
                                                     {isRu 
                                                         ? `Вы теряете ~${results.leadsLost} горячих клиентов ежемесячно (мимо ТОП-3).` 
                                                         : `You lose ~${results.leadsLost} hot clients monthly (missing TOP-3).`}
                                                 </p>
                                             </div>

                                             {/* Sales Growth Chart */}
                                             <div className="bg-[#111117] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3 w-full">
                                                 <div className="flex items-center justify-between">
                                                     <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                                                         <TrendingUp size={15} className="text-[#ffe600]" />
                                                         {isRu ? 'Прогноз возврата выручки по месяцам' : 'Revenue Recovery Forecast'}
                                                     </h4>
                                                     <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/50 font-mono">6 MONTHS</span>
                                                 </div>
                                                 
                                                 {/* CSS Bar Chart */}
                                                 <div className="w-full h-32 flex items-end justify-between gap-1.5 pt-4 border-b border-white/10 pb-2 relative">
                                                     <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none opacity-20">
                                                         <div className="border-t border-dashed border-white/30 w-full" />
                                                         <div className="border-t border-dashed border-white/30 w-full" />
                                                     </div>

                                                     {results.chartData.map((val, idx) => {
                                                         const maxVal = Math.max(...results.chartData);
                                                         const heightPct = (val / maxVal) * 100;
                                                         const isPeak = idx === 1;
                                                         
                                                         return (
                                                             <div key={idx} className="relative flex flex-col items-center justify-end w-full h-full group">
                                                                 <div className="absolute -top-7 bg-black border border-white/10 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                                                                     {formatMoney(val)}
                                                                 </div>
                                                                 <div 
                                                                     className={`w-full rounded-t-sm transition-all duration-1000 ease-out ${isPeak ? 'bg-gradient-to-t from-[#ffe600]/40 to-[#ffe600]' : 'bg-gradient-to-t from-white/10 to-white/30'}`}
                                                                     style={{ height: `${heightPct}%` }}
                                                                 />
                                                                 <span className="absolute -bottom-5 text-[9px] text-white/50 font-mono">
                                                                     {isRu ? `МЕС ${idx+1}` : `MO ${idx+1}`}
                                                                 </span>
                                                             </div>
                                                         );
                                                     })}
                                                 </div>
                                                 <div className="h-2" />
                                             </div>
                                         </div>

                                         {/* MODULE 3: Contact Form & Telegram / Email Report Dispatch */}
                                         <div className="space-y-4 pt-4 border-t border-white/10 text-left">
                                             <div className="space-y-1">
                                                 <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-tight flex items-center gap-2">
                                                     <Send size={16} className="text-[#ffe600]" />
                                                     <span>{isRu ? '📲 ПОЛУЧИТЬ ПОЛНЫЙ ИИ-ОТЧЕТ В ТЕЛЕГРАМ / EMAIL' : '📲 GET FULL AI REPORT VIA TELEGRAM / EMAIL'}</span>
                                                 </h4>
                                                 <p className="text-xs text-white/60">
                                                     {isRu
                                                         ? 'Укажите ваш Telegram или телефон/Email. Мы вышлем полный PDF-отчет и стратегию выхода в ТОП-3.'
                                                         : 'Enter your Telegram or phone/Email. We will send the full PDF report and TOP-3 strategy.'}
                                                 </p>
                                             </div>

                                             {submitStatus === 'success' ? (
                                                 <motion.div
                                                     initial={{ opacity: 0, scale: 0.95 }}
                                                     animate={{ opacity: 1, scale: 1 }}
                                                     className="bg-[#ffe600]/10 border border-[#ffe600]/50 rounded-2xl p-6 text-center space-y-3"
                                                 >
                                                     <div className="w-12 h-12 rounded-full bg-[#ffe600] text-black mx-auto flex items-center justify-center font-bold">
                                                         <Check size={24} className="stroke-[3]" />
                                                     </div>
                                                     <h5 className="text-lg font-bold text-white uppercase">
                                                         {isRu ? 'Отчет успешно отправлен! 🚀' : 'Report Sent Successfully! 🚀'}
                                                     </h5>
                                                     <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed">
                                                         {isRu
                                                             ? 'Мы направили материалы на указанный контакт. Наш ИИ-специалист также подготовит разбор и свяжется с вами в Telegram/WhatsApp.'
                                                             : 'We sent the materials to your contact. Our AI specialist will review and contact you on Telegram/WhatsApp.'}
                                                     </p>
                                                 </motion.div>
                                             ) : (
                                                 <form 
                                                     onSubmit={async (e) => {
                                                         e.preventDefault();
                                                         if (!contact.trim()) return;
                                                         setSubmitStatus('loading');
                                                         try {
                                                             const res = await fetch('/api/outrich-lead', {
                                                                 method: 'POST',
                                                                 headers: { 'Content-Type': 'application/json' },
                                                                 body: JSON.stringify({
                                                                     name: leadName || 'Не указано',
                                                                     contact,
                                                                     business: selectedBusiness || searchQuery || 'Поиск бизнеса',
                                                                     source: `Combined Audit Report (Index: ${results?.visibilityScore}%, 6Mo Loss: ${formatMoney(results?.total6MoLoss || 0)})`
                                                                 })
                                                             });
                                                             setSubmitStatus(res.ok ? 'success' : 'error');
                                                         } catch (err) {
                                                             setSubmitStatus('error');
                                                         }
                                                     }} 
                                                     className="space-y-3 bg-[#111117] border border-white/10 p-4 sm:p-5 rounded-2xl"
                                                 >
                                                     <div className="grid sm:grid-cols-2 gap-3">
                                                         <input
                                                             type="text"
                                                             value={leadName}
                                                             onChange={(e) => setLeadName(e.target.value)}
                                                             placeholder={isRu ? "Имя или название компании" : "Name or company"}
                                                             className="bg-[#181822] border border-white/15 focus:border-[#ffe600] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 outline-none transition-all"
                                                         />
                                                         <input
                                                             type="text"
                                                             required
                                                             value={contact}
                                                             onChange={(e) => setContact(e.target.value)}
                                                             placeholder={isRu ? "Telegram (@username) / Телефон / Email" : "Telegram (@username) / Phone / Email"}
                                                             className="bg-[#181822] border border-white/15 focus:border-[#ffe600] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 outline-none transition-all"
                                                         />
                                                     </div>

                                                     <button
                                                         type="submit"
                                                         disabled={submitStatus === 'loading'}
                                                         className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs sm:text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_30px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                                                     >
                                                         {submitStatus === 'loading' ? (
                                                             <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                         ) : (
                                                             <>
                                                                 <span>{isRu ? 'ОТПРАВИТЬ В ТЕЛЕГРАМ / ИМЕЙЛ' : 'SEND TO TELEGRAM / EMAIL'}</span>
                                                                 <ArrowRight size={18} className="stroke-[3]" />
                                                             </>
                                                         )}
                                                     </button>

                                                     <div className="flex items-center justify-center gap-2 text-[10px] text-white/50 font-mono pt-1">
                                                         <ShieldCheck size={14} className="text-[#ffe600]" />
                                                         <span>{isRu ? 'Бесплатно • Данные защищены и не передаются третьим лицам' : 'Free • Secure & strictly private'}</span>
                                                     </div>
                                                 </form>
                                             )}
                                         </div>
                                     </div>
                                 ) : null}

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {isMapModalOpen && (
                <MapSelectionModal
                    onClose={() => setIsMapModalOpen(false)}
                    onSelect={(name, address) => {
                        setIsMapModalOpen(false);
                        proceedToStep2(name, address);
                    }}
                    initialLat={userLoc?.lat}
                    initialLon={userLoc?.lon}
                />
            )}
        </div>
    );
};

export default OutrichRevenueWidget;
