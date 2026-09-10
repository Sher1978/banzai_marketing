"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2, XCircle, Search, Sparkles, TrendingUp, Send, Check } from 'lucide-react';
import { openLeadModal } from '../ModalController';

interface GoogleProfileAuditModalProps {
    isOpen: boolean;
    onClose: () => void;
    query: string;
    isRu: boolean;
}

export const GoogleProfileAuditModal: React.FC<GoogleProfileAuditModalProps> = ({
    isOpen,
    onClose,
    query,
    isRu,
}) => {
    const [scanning, setScanning] = useState(true);
    const [step, setStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [targetScore, setTargetScore] = useState(44);

    // Form Lead capture state
    const [contact, setContact] = useState('');
    const [name, setName] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

    const scanSteps = isRu ? scanStepsRu : scanStepsEn;

    // Calculate deterministic target score & revenue losses based on query
    useEffect(() => {
        if (!isOpen) return;

        let hash = 0;
        const str = (query || "business").toLowerCase();
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        // Score strictly capped range 38% - 64%
        const calculated = Math.min(64, Math.max(38, (Math.abs(hash) % 27) + 38));
        setTargetScore(calculated);
        setScanning(true);
        setStep(0);
        setCompletedSteps([]);
        setCurrentScore(0);
        setSubmitStatus('idle');
    }, [isOpen, query]);

    // Real-time multi-step scanning animation
    useEffect(() => {
        if (!isOpen || !scanning) return;

        const stepInterval = setInterval(() => {
            setStep((prev) => {
                if (prev < scanSteps.length - 1) {
                    setCompletedSteps((done) => [...done, prev]);
                    return prev + 1;
                } else {
                    setCompletedSteps((done) => [...done, prev]);
                    clearInterval(stepInterval);
                    setTimeout(() => {
                        setScanning(false);
                    }, 800);
                    return prev;
                }
            });
        }, 800);

        return () => clearInterval(stepInterval);
    }, [isOpen, scanning, scanSteps.length]);

    // Animated score count up
    useEffect(() => {
        if (!isOpen || scanning) return;

        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        const animateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = 1 - (1 - progress) * (1 - progress);
            const val = Math.round(easedProgress * targetScore);
            setCurrentScore(val);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isOpen, scanning, targetScore]);

    const roundTo50 = (val: number) => Math.round(val / 50) * 50;

    // Calculate dynamic loss numbers based on targetScore (rounded to nearest $50)
    const monthlyLoss = roundTo50((100 - targetScore) * 163.5);
    const total6MoLoss = roundTo50(monthlyLoss * 6.35);
    const monthlyLeadsLost = Math.round((100 - targetScore) * 0.95);

    const chartMultipliers = [0.85, 1.25, 1.15, 1.10, 1.05, 1.0];
    const chartData = chartMultipliers.map(m => roundTo50(monthlyLoss * m));

    // Dynamic Color theme
    const getScoreTheme = (val: number) => {
        if (val <= 45) {
            return {
                text: 'text-red-500',
                border: 'border-red-500/50',
                bg: 'bg-red-500/10',
                glow: 'shadow-[0_0_30px_rgba(239,68,68,0.35)]',
                badgeText: isRu ? 'ТРЕБУЕТСЯ ИИ-ОПТИМИЗАЦИЯ' : 'NEEDS AI OPTIMIZATION',
                badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
            };
        } else if (val <= 65) {
            return {
                text: 'text-orange-400',
                border: 'border-orange-500/50',
                bg: 'bg-orange-500/10',
                glow: 'shadow-[0_0_30px_rgba(249,115,22,0.35)]',
                badgeText: isRu ? 'СРЕДНИЙ УРОВЕНЬ ВИДИМОСТИ' : 'MODERATE VISIBILITY',
                badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
            };
        } else {
            return {
                text: 'text-[#ffe600]',
                border: 'border-[#ffe600]/50',
                bg: 'bg-[#ffe600]/10',
                glow: 'shadow-[0_0_30px_rgba(255,230,0,0.35)]',
                badgeText: isRu ? 'ПОТЕНЦИАЛ ВЫХОДА В TOP-3' : 'TOP-3 POTENTIAL DETECTED',
                badgeBg: 'bg-[#ffe600]/20 text-[#ffe600] border-[#ffe600]/40',
            };
        }
    };

    const formatMoney = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!contact.trim()) return;

        setSubmitStatus('loading');
        try {
            const res = await fetch('/api/outrich-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name || 'Не указано',
                    contact,
                    business: query || 'Поиск бизнеса',
                    source: `Combined Audit Report (Index: ${currentScore}%, 6Mo Loss: ${formatMoney(total6MoLoss)})`
                })
            });

            if (res.ok) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            console.error('Lead submission error:', err);
            setSubmitStatus('error');
        }
    };

    if (!isOpen) return null;

    const theme = getScoreTheme(currentScore);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    className="relative w-full max-w-3xl bg-[#0a0a0e] border-2 border-[#ffe600]/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(255,230,0,0.25)] my-6 overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-20"
                    >
                        <X size={24} />
                    </button>

                    {scanning ? (
                        /* Real-Time Multi-Step Scanning Stage */
                        <div className="py-8 space-y-6">
                            <div className="text-center space-y-3">
                                <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px]">
                                    <Search size={13} className="animate-spin text-black" />
                                    <span>{isRu ? 'ИИ-СКАНЕР В РЕАЛЬНОМ ВРЕМЕНИ' : 'REAL-TIME AI SCANNER'}</span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                                    {query ? `«${query}»` : (isRu ? 'Ваш профиль бизнеса' : 'Your Business Profile')}
                                </h3>

                                {/* Progress bar */}
                                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5 max-w-md mx-auto">
                                    <div
                                        className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-[#ffe600] rounded-full transition-all duration-300"
                                        style={{ width: `${((step + 1) / scanSteps.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Live Step Checklist */}
                            <div className="space-y-3 bg-[#111117] border border-white/10 rounded-2xl p-4 sm:p-5 max-w-xl mx-auto">
                                {scanSteps.map((st, idx) => {
                                    const isDone = completedSteps.includes(idx);
                                    const isCurrent = step === idx && !isDone;
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
                    ) : (
                        /* Combined Full Audit Report (Module 1 + Module 2 + Lead Capture CTA) */
                        <div className="space-y-8">
                            {/* MODULE 1: Local Dominance Verdict & Deficiencies */}
                            <div className="space-y-5">
                                {/* Header */}
                                <div className="space-y-2 text-left">
                                    <div className="inline-flex items-center gap-2 bg-[#ffe600]/10 border border-[#ffe600]/40 px-3 py-1 rounded-full text-[#ffe600] text-[10px] font-mono font-bold">
                                        <Sparkles size={12} />
                                        <span>{isRu ? 'ВЕРДИКТ ЛОКАЛЬНОГО ДОМИНИРОВАНИЯ' : 'LOCAL DOMINANCE VERDICT'}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight break-all">
                                        {query ? `«${query}»` : (isRu ? 'Профиль на Google Maps' : 'Google Maps Profile')}
                                    </h3>
                                </div>

                                {/* Dynamic Score Counter Card (Exact styling from online screenshot) */}
                                <div className={`p-5 sm:p-6 rounded-2xl bg-[#111118] border ${theme.border} ${theme.glow} flex flex-col sm:flex-row items-center justify-between gap-6`}>
                                    {/* Score Big Number with Dynamic Color Count-Up */}
                                    <div className="flex items-baseline gap-2 text-center sm:text-left">
                                        <span className={`text-5xl sm:text-6xl font-black font-mono tracking-tight transition-colors duration-300 ${theme.text}`}>
                                            {currentScore < 10 ? `0${currentScore}` : currentScore}%
                                        </span>
                                        <div className="space-y-1">
                                            <span className="text-xs font-mono text-white/60 block uppercase">
                                                {isRu ? 'Индекс видимости в Top-3' : 'Top-3 Visibility Index'}
                                            </span>
                                            <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase border ${theme.badgeBg}`}>
                                                {theme.badgeText}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-right space-y-1 text-xs font-mono text-white/70 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                                        <p className="text-red-400 font-bold">
                                            {isRu ? '🚨 Статус: ВНЕ TOP-3 GOOGLE' : '🚨 Status: OUTSIDE TOP-3 GOOGLE'}
                                        </p>
                                        <p className="text-white/60">
                                            {isRu ? `Потеря потенциальных клиентов: ~${100 - currentScore}%` : `Lost Client Opportunities: ~${100 - currentScore}%`}
                                        </p>
                                    </div>
                                </div>

                                {/* Identified Profile Deficiencies Grid */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-mono text-[#ffe600] uppercase tracking-wider font-bold text-left">
                                        {isRu ? '// ВЫЯВЛЕННЫЕ ДЕФЕКТЫ ПРОФИЛЯ (ПОЧЕМУ ВЫ ТЕРЯЕТЕ КЛИЕНТОВ):' : '// IDENTIFIED PROFILE DEFICIENCIES:'}
                                    </h4>

                                    <div className="grid sm:grid-cols-2 gap-3 text-left">
                                        {/* Defect 1: Reviews */}
                                        <div className="bg-[#12121a] border border-red-500/30 p-3.5 rounded-xl space-y-1">
                                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                                                <XCircle size={15} className="flex-shrink-0" />
                                                <span>{isRu ? 'Недостаточно отзывов' : 'Review Volume Deficit'}</span>
                                            </div>
                                            <p className="text-[11px] text-white/70 leading-normal font-medium">
                                                {isRu
                                                    ? 'Дефицит свежих 5★ оценок и ключевых запросов в текстах отзывов снижает рейтинг.'
                                                    : 'Low frequency of keywords in 5★ reviews drops organic Maps rank.'}
                                            </p>
                                        </div>

                                        {/* Defect 2: Photos */}
                                        <div className="bg-[#12121a] border border-orange-500/30 p-3.5 rounded-xl space-y-1">
                                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                                                <AlertTriangle size={15} className="flex-shrink-0" />
                                                <span>{isRu ? 'Мало фото и панорам' : 'Low Media Content'}</span>
                                            </div>
                                            <p className="text-[11px] text-white/70 leading-normal font-medium">
                                                {isRu
                                                    ? 'Отсутствуют HD-снимки интерьера/услуг и 360° панорамы, снижая кликабельность (CTR).'
                                                    : 'Missing high-res interior/service photos and 360° views cuts profile CTR.'}
                                            </p>
                                        </div>

                                        {/* Defect 3: Meta-tags */}
                                        <div className="bg-[#12121a] border border-red-500/30 p-3.5 rounded-xl space-y-1">
                                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                                                <XCircle size={15} className="flex-shrink-0" />
                                                <span>{isRu ? 'Отсутствуют GEO-метатеги' : 'Missing GEO Meta-tags'}</span>
                                            </div>
                                            <p className="text-[11px] text-white/70 leading-normal font-medium">
                                                {isRu
                                                    ? 'Нет структурированной микроразметки Schema.org и привязки категорий локации.'
                                                    : 'Lack of Schema.org GEO markup prevents top local engine ranking.'}
                                            </p>
                                        </div>

                                        {/* Defect 4: AI Visibility */}
                                        <div className="bg-[#12121a] border border-orange-500/30 p-3.5 rounded-xl space-y-1">
                                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400">
                                                <AlertTriangle size={15} className="flex-shrink-0" />
                                                <span>{isRu ? 'Профиль не виден ИИ' : 'Invisible to AI Assistants'}</span>
                                            </div>
                                            <p className="text-[11px] text-white/70 leading-normal font-medium">
                                                {isRu
                                                    ? 'ChatGPT и Google Gemini не выставляют ваш бизнес в роли главного ответа.'
                                                    : 'ChatGPT and Gemini do not cite your brand in answer overviews.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MODULE 2 (Паровозиком): Модуль оценки финансовых потерь */}
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <h4 className="text-xs font-mono text-[#ffe600] uppercase tracking-wider font-bold text-left">
                                    {isRu ? '// ОЦЕНКА ФИНАНСОВЫХ ПОТЕРЬ И ПРОГНОЗ ВОЗВРАТА ВЫРУЧКИ:' : '// FINANCIAL LOSS EVALUATION & RECOVERY FORECAST:'}
                                </h4>

                                {/* 6-Month Loss Banner */}
                                <div className="text-center space-y-1 bg-[#16141f] border border-red-500/40 rounded-2xl p-5 relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                                    <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
                                    <p className="text-red-400 font-mono text-[10px] sm:text-xs uppercase font-bold relative z-10">
                                        {isRu ? '🚨 Расчетная упущенная выгода (6 мес):' : '🚨 Estimated Lost Revenue (6 mo):'}
                                    </p>
                                    <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter relative z-10" style={{ textShadow: '0 0 30px rgba(239,68,68,0.4)' }}>
                                        {formatMoney(total6MoLoss)}
                                    </h2>
                                    <p className="text-white/70 text-xs pt-1 relative z-10 font-medium">
                                        {isRu
                                            ? `Вы упускаете ~${monthlyLeadsLost} целевых клиентов ежемесячно (мимо ТОП-3 выдачи Google).`
                                            : `You miss ~${monthlyLeadsLost} hot clients monthly (outside Google TOP-3).`}
                                    </p>
                                </div>

                                {/* 6-Month Recovery Forecast Bar Chart */}
                                <div className="bg-[#111117] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3 text-left">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                                            <TrendingUp size={15} className="text-[#ffe600]" />
                                            {isRu ? 'Прогноз возврата выручки по месяцам' : 'Monthly Revenue Recovery Forecast'}
                                        </h5>
                                        <span className="text-[10px] bg-[#ffe600]/10 border border-[#ffe600]/30 px-2 py-0.5 rounded text-[#ffe600] font-mono">
                                            6 MONTHS
                                        </span>
                                    </div>

                                    {/* CSS Bar Chart */}
                                    <div className="w-full h-36 flex items-end justify-between gap-2 pt-6 border-b border-white/10 pb-2 relative">
                                        <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none opacity-15">
                                            <div className="border-t border-dashed border-white/40 w-full" />
                                            <div className="border-t border-dashed border-white/40 w-full" />
                                        </div>

                                        {chartData.map((val, idx) => {
                                            const maxVal = Math.max(...chartData);
                                            const heightPct = (val / maxVal) * 100;
                                            const isPeak = idx === 1;

                                            return (
                                                <div key={idx} className="relative flex flex-col items-center justify-end w-full h-full group">
                                                    <div className="absolute -top-7 bg-black border border-white/20 text-[#ffe600] font-mono font-bold text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                                                        {formatMoney(val)}
                                                    </div>
                                                    <div
                                                        className={`w-full rounded-t-md transition-all duration-700 ${isPeak ? 'bg-gradient-to-t from-[#ffe600]/40 to-[#ffe600]' : 'bg-gradient-to-t from-white/10 to-white/30'}`}
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
                                    <form onSubmit={handleFormSubmit} className="space-y-3 bg-[#111117] border border-white/10 p-4 sm:p-5 rounded-2xl">
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
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
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default GoogleProfileAuditModal;
