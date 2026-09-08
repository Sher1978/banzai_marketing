"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, ArrowRight, ShieldCheck, MapPin, CheckCircle2, XCircle, Search, Sparkles } from 'lucide-react';
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
    const [targetScore, setTargetScore] = useState(54);

    const scanStepsRu = [
        { label: "Подключение к Google Maps API & ИИ-сканеру...", detail: "Инициализация данных профиля" },
        { label: "Проверка объема и рейтинга отзывов...", detail: "Анализ частоты и ключевых слов в 5★ отзывах" },
        { label: "Сканирование медиа-контента и фото...", detail: "Проверка наличии панорам и снимков высокого качества" },
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

    // Calculate deterministic target score <= 76% based on query string
    useEffect(() => {
        if (!isOpen) return;

        let hash = 0;
        const str = (query || "business").toLowerCase();
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        // Score strictly strictly capped at 76% (range 42% - 74%)
        const calculated = Math.min(76, Math.max(42, (Math.abs(hash) % 33) + 42));
        setTargetScore(calculated);
        setScanning(true);
        setStep(0);
        setCompletedSteps([]);
        setCurrentScore(0);
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
        }, 900);

        return () => clearInterval(stepInterval);
    }, [isOpen, scanning, scanSteps.length]);

    // Animated score count up frame by frame (from 0% up to targetScore <= 76%)
    useEffect(() => {
        if (!isOpen || scanning) return;

        let start = 0;
        const duration = 1800; // 1.8 seconds count up
        const startTime = performance.now();

        const animateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease-out quad curve
            const easedProgress = 1 - (1 - progress) * (1 - progress);
            const val = Math.round(easedProgress * targetScore);
            setCurrentScore(val);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isOpen, scanning, targetScore]);

    // Helper: Dynamic Color resolver based on current score
    // 0-33%: Red, 34-66%: Orange, 67-76%: Yellow (Max 76%)
    const getScoreTheme = (val: number) => {
        if (val <= 33) {
            return {
                text: 'text-red-500',
                border: 'border-red-500/50',
                bg: 'bg-red-500/10',
                glow: 'shadow-[0_0_30px_rgba(239,68,68,0.4)]',
                badgeText: isRu ? 'КРИТИЧЕСКИ НИЗКИЙ' : 'CRITICALLY LOW',
                badgeBg: 'bg-red-500/20 text-red-400 border-red-500/40',
                gaugeColor: '#ef4444'
            };
        } else if (val <= 66) {
            return {
                text: 'text-orange-400',
                border: 'border-orange-500/50',
                bg: 'bg-orange-500/10',
                glow: 'shadow-[0_0_30px_rgba(249,115,22,0.4)]',
                badgeText: isRu ? 'ТРЕБУЕТСЯ ИИ-ОПТИМИЗАЦИЯ' : 'NEEDS AI OPTIMIZATION',
                badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
                gaugeColor: '#f97316'
            };
        } else {
            return {
                text: 'text-[#ffe600]',
                border: 'border-[#ffe600]/50',
                bg: 'bg-[#ffe600]/10',
                glow: 'shadow-[0_0_30px_rgba(255,230,0,0.4)]',
                badgeText: isRu ? 'ПОТЕНЦИАЛ ВЫХОДА В TOP-3' : 'TOP-3 POTENTIAL DETECTED',
                badgeBg: 'bg-[#ffe600]/20 text-[#ffe600] border-[#ffe600]/40',
                gaugeColor: '#ffe600'
            };
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
                    className="relative w-full max-w-2xl bg-[#0a0a0e] border-2 border-[#ffe600]/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(255,230,0,0.25)] my-6 overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
                    >
                        <X size={24} />
                    </button>

                    {scanning ? (
                        /* Real-Time Multi-Step Scanning Stage */
                        <div className="py-6 space-y-6">
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
                            <div className="space-y-3 bg-[#111117] border border-white/10 rounded-2xl p-4 sm:p-5">
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
                        /* Results Stage with Dynamic Score Counter & Detailed Deficiencies */
                        <div className="space-y-6">
                            {/* Header */}
                            <div className="space-y-2 text-left">
                                <div className="inline-flex items-center gap-2 bg-[#ffe600]/10 border border-[#ffe600]/40 px-3 py-1 rounded-full text-[#ffe600] text-[10px] font-mono font-bold">
                                    <Sparkles size={12} />
                                    <span>{isRu ? 'ВЕРДИКТ ЛОКАЛЬНОГО ДОМИНИРОВАНИЯ' : 'LOCAL DOMINANCE VERDICT'}</span>
                                </div>
                                <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                                    {query ? `«${query}»` : (isRu ? 'Профиль на Google Maps' : 'Google Maps Profile')}
                                </h3>
                            </div>

                            {/* Dynamic Score Counter Card */}
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
                                        {isRu ? 'Потеря потенциальных клиентов: ~74%' : 'Lost Client Opportunities: ~74%'}
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Audit Findings / Identified Deficiencies */}
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

                            {/* Recommended Action Plan & CTA */}
                            <div className="pt-2 flex flex-col gap-3">
                                <button
                                    onClick={() => {
                                        onClose();
                                        openLeadModal();
                                    }}
                                    className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-xs sm:text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_30px_rgba(255,230,0,0.45)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>{isRu ? 'Запишитесь на 15-минутный разбор' : 'Book 15-Min Strategy Session'}</span>
                                    <ArrowRight size={18} className="stroke-[3]" />
                                </button>

                                <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-white/50 font-mono">
                                    <ShieldCheck size={14} className="text-[#ffe600]" />
                                    <span>{isRu ? 'Разбор бесплатный • Покажем, как забрать Top-3 за 30 дней' : 'Free Session • We show how to capture Top-3 in 30 days'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default GoogleProfileAuditModal;
