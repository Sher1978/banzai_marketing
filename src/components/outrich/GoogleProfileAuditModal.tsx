"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertTriangle, TrendingDown, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
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

    const scanStepsRu = [
        "Анализ индексации Google Maps & AI Overview...",
        "Проверка позиций в локальном Top-3 органика...",
        "Расчет упущенных клиентов и стоимости клика...",
        "Формирование персонализированного отчета..."
    ];

    const scanStepsEn = [
        "Scanning Google Maps & AI Overview indexing...",
        "Auditing positions in local Top-3 organic map pack...",
        "Calculating missed revenue & competitor CPL...",
        "Generating custom AI diagnostic report..."
    ];

    const scanSteps = isRu ? scanStepsRu : scanStepsEn;

    useEffect(() => {
        if (!isOpen) {
            setScanning(true);
            setStep(0);
            return;
        }

        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev < scanSteps.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setScanning(false), 600);
                    return prev;
                }
            });
        }, 750);

        return () => clearInterval(interval);
    }, [isOpen, scanSteps.length]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-[#0a0a0d] border border-[#ffe600]/40 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(255,230,0,0.25)] overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={22} />
                    </button>

                    {scanning ? (
                        /* Scanning State */
                        <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
                            <div className="relative w-20 h-20 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-4 border-[#ffe600]/20 animate-ping" />
                                <div className="absolute inset-0 rounded-full border-4 border-[#ffe600] border-t-transparent animate-spin" />
                                <MapPin size={32} className="text-[#ffe600]" />
                            </div>

                            <div className="space-y-2">
                                <span className="neon-yellow-badge text-[10px]">
                                    {isRu ? 'ИИ-СКАНИРОВАНИЕ ПРОФИЛЯ' : 'AI PROFILE AUDIT'}
                                </span>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                                    {query || (isRu ? 'Ваш Google-профиль' : 'Your Google Profile')}
                                </h3>
                                <p className="text-sm font-mono text-[#ffe600] animate-pulse">
                                    {scanSteps[step]}
                                </p>
                            </div>
                        </div>
                    ) : (
                        /* Results State */
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="neon-yellow-badge text-[10px]">
                                    {isRu ? 'РЕЗУЛЬТАТЫ ЭКСПРЕСС-ДИАГНОСТИКИ' : 'EXPRESS DIAGNOSTIC RESULT'}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                                    {query ? `«${query}»` : (isRu ? 'Ваш бизнес на Google Картах' : 'Your Business on Google Maps')}
                                </h3>
                                <p className="text-xs text-white/60 font-mono mt-1">
                                    {isRu
                                        ? 'Статус: Выявлен упущенный локальный трафик в Top-3'
                                        : 'Status: Missed local Top-3 traffic detected'}
                                </p>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[#121217] border border-red-500/30 p-4 rounded-xl space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-red-400 font-bold uppercase">
                                        <AlertTriangle size={14} />
                                        <span>{isRu ? 'Позиция в AI Overview' : 'AI Overview Rank'}</span>
                                    </div>
                                    <span className="text-2xl font-black text-red-400 block">Outside Top-3</span>
                                    <p className="text-[10px] text-white/50">
                                        {isRu ? 'ИИ-ассистенты не рекомендуют ваш профиль первым' : 'AI assistants do not prioritize your business'}
                                    </p>
                                </div>

                                <div className="bg-[#121217] border border-[#ffe600]/30 p-4 rounded-xl space-y-1">
                                    <div className="flex items-center gap-1.5 text-xs text-[#ffe600] font-bold uppercase">
                                        <TrendingDown size={14} />
                                        <span>{isRu ? 'Утечка клиентов' : 'Daily Client Leak'}</span>
                                    </div>
                                    <span className="text-2xl font-black text-[#ffe600] block">-74%</span>
                                    <p className="text-[10px] text-white/50">
                                        {isRu ? 'Горячих клиентов уходит прямым конкурентам' : 'Hot buyers redirected to Top-3 competitors'}
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Findings */}
                            <div className="bg-[#14141c] border border-white/10 p-4 rounded-xl space-y-2">
                                <h4 className="text-xs font-mono text-[#ffe600] uppercase tracking-wider font-bold">
                                    {isRu ? '// КЛЮЧЕВЫЕ ТОЧКИ РОСТА ДЛЯ ВЫХОДА В TOP-3:' : '// KEY GROWTH POINTS FOR TOP-3:'}
                                </h4>
                                <ul className="space-y-1.5 text-xs text-white/80">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                        <span>{isRu ? 'Оптимизация GEO-тегов и семантики под ChatGPT & Google Gemini' : 'GEO-tag & semantic optimization for ChatGPT & Gemini'}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                        <span>{isRu ? 'Подключение системы Revo (авто-рост 5* отзывов и фильтр негатива)' : 'Revo automated 5-star review engine & negative filter'}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-[#ffe600] flex-shrink-0" />
                                        <span>{isRu ? 'ИИ-перехват клиентов из локальных геолокационных чатов' : 'AI client interception from local geo-chats'}</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Call to action */}
                            <div className="pt-2 flex flex-col gap-3">
                                <button
                                    onClick={() => {
                                        onClose();
                                        openLeadModal();
                                    }}
                                    className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-black text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_25px_rgba(255,230,0,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                                >
                                    <span>{isRu ? 'Запишитесь на разбор' : 'Book Audit'}</span>
                                    <ArrowRight size={16} className="stroke-[3]" />
                                </button>
                                <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 font-mono">
                                    <ShieldCheck size={12} className="text-[#ffe600]" />
                                    <span>{isRu ? 'Бесплатный разбор 15 минут • Без обязательств' : 'Free 15-min consultation • No obligation'}</span>
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
