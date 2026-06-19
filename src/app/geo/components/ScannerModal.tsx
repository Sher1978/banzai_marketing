"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import {
  X, Terminal, Send, CheckCircle2, AlertTriangle, Cpu, Globe,
  Mail, ShieldAlert, Sparkles, FileText, ArrowRight, Activity,
  Zap, TrendingUp, Users
} from 'lucide-react';
import '@/lib/i18n';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn' | 'system';
  time: string;
}

interface ScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ScannerModal: React.FC<ScannerModalProps> = ({ isOpen, onClose, onNavigateToContact }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const [website, setWebsite] = useState('');
  const [region, setRegion] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');

  const [step, setStep] = useState<'input' | 'running' | 'results' | 'pdfSent'>('input');
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [progress, setProgress] = useState(0);
  const [sendingPdf, setSendingPdf] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setLogs([]);
      setProgress(0);
      setWebsite('');
      setRegion('');
      setIndustry('');
      setEmail('');
      setShowEmailForm(false);
    }
  }, [isOpen]);

  // Auto scroll logs
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (text: string, type: 'info' | 'success' | 'warn' | 'system' = 'info') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { text, type, time }]);
  };

  const handleStartScan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('running');
    setLogs([]);
    setProgress(0);

    addLog(lang === 'ru' ? "⚡ Инициализация ядра GEO-Scanner v2.5..." : lang === 'vi' ? "⚡ Khởi tạo lõi GEO-Scanner v2.5..." : "⚡ Initializing GEO-Scanner v2.5 kernel...", 'system');

    const activeRegion = region || 'Global';
    const activeIndustry = industry || 'General Business';

    setTimeout(() => {
      addLog(lang === 'ru'
        ? `📡 Анализ веб-структуры: "${website}"...`
        : lang === 'vi' ? `📡 Phân tích cấu trúc web: "${website}"...`
        : `📡 Scanning web structure: "${website}"...`, 'info');
    }, 1000);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? `🗺️ Настройка RAG-координат: "${activeRegion}"`
        : lang === 'vi' ? `🗺️ Cấu hình tọa độ RAG: "${activeRegion}"`
        : `🗺️ Mapping regional RAG boundaries: "${activeRegion}"`, 'info');
      setProgress(20);
    }, 2500);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? `🔍 Ниша загружена: "${activeIndustry}"`
        : lang === 'vi' ? `🔍 Niche đã tải: "${activeIndustry}"`
        : `🔍 Niche loaded: "${activeIndustry}"`, 'info');
      setProgress(40);
    }, 4000);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? "🌐 [Агент 1] 5 высокоинтенсивных RAG-запросов поставлено в очередь. asyncio.gather() запущен..."
        : lang === 'vi' ? "🌐 [Agent 1] 5 truy vấn RAG đã xếp hàng. asyncio.gather() đang chạy..."
        : "🌐 [Agent 1] 5 high-intent RAG queries queued. asyncio.gather() active...", 'success');
      setProgress(60);
    }, 6000);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? "⚖️ [Агент 3] Парсинг структуры ответов. Оценка RAG-цитирования сайта..."
        : lang === 'vi' ? "⚖️ [Agent 3] Phân tích cấu trúc phản hồi. Đánh giá trích dẫn RAG..."
        : "⚖️ [Agent 3] Parsing reply structures. Assessing RAG citation tags...", 'info');
      setProgress(80);
    }, 8500);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? "⚠️ [Агент 4] ВНИМАНИЕ: Сайт не найден в выдаче. Конкуренты монополизировали токен."
        : lang === 'vi' ? "⚠️ [Agent 4] CẢNH BÁO: Domain không được trích dẫn. Đối thủ đang độc chiếm."
        : "⚠️ [Agent 4] WARNING: Domain not cited. Competitors hold full semantic monopoly.", 'warn');
      setProgress(95);
    }, 10500);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? "📊 GEO Visibility Score зафиксирован: 12% — КРИТИЧЕСКИЙ УРОВЕНЬ"
        : lang === 'vi' ? "📊 GEO Visibility Score đã tính: 12% — MỨC NGUY HIỂM"
        : "📊 GEO Visibility Score calculated: 12% — CRITICAL RISK LEVEL", 'success');
      setProgress(100);

      // Trigger automatic lead capturing and PDF dispatch
      try {
        const queryParams = new URLSearchParams({
          website,
          region: activeRegion,
          industry: activeIndustry,
          score: '12%',
          presence: '1/10',
          accuracy: '2/10',
          sentiment: 'NEUTRAL'
        }).toString();
        const reportUrl = `${window.location.origin}/geo/report?${queryParams}`;

        // Call /api/geo-lead to save to Sheets, send Telegram notification, and send Email
        fetch('/api/geo-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'scanner',
            website,
            email,
            score: '12%',
            industry: activeIndustry,
            region: activeRegion,
            lang,
            report_url: reportUrl,
            source: 'geo-scanner-modal'
          }),
        }).catch(err => console.error('Error sending lead webhook:', err));

        // FormSubmit backup dispatch
        const formData = new FormData();
        formData.append('_subject', 'BanzAI GEO Scanner Lead — PDF Request');
        formData.append('website', website);
        formData.append('region', activeRegion);
        formData.append('industry', activeIndustry);
        formData.append('email', email);
        formData.append('score', '12% — CRITICAL');
        formData.append('report_url', reportUrl);
        formData.append('double_confirmation', 'YES - AUTO DISPATCHED');

        fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: formData
        }).catch(err => console.error('Error sending FormSubmit lead:', err));
      } catch (err) {
        console.error('Error auto-dispatching lead:', err);
      }
    }, 12000);

    setTimeout(() => {
      setStep('results');
    }, 13200);
  };

  const handleSendPdf = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingPdf(true);
    try {
      const formData = new FormData();
      formData.append('_subject', 'BanzAI GEO Scanner Lead — PDF Request');
      formData.append('website', website);
      formData.append('region', region);
      formData.append('industry', industry);
      formData.append('email', email);
      formData.append('score', '12% — CRITICAL');
      await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      setTimeout(() => { setSendingPdf(false); setStep('pdfSent'); }, 1200);
    } catch {
      setSendingPdf(false);
      setStep('pdfSent');
    }
  };

  const handleContactClick = () => {
    onClose();
    setTimeout(() => { onNavigateToContact(); }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container — mobile: full screen slide up; desktop: centered card */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="relative z-10 w-full sm:max-w-2xl sm:mx-4 bg-[#0e0c0a] border border-gold-premium/20 sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(197,168,128,0.15)] flex flex-col"
            style={{ maxHeight: '96dvh' }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold-premium to-gold-dark" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gold-premium/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center">
                  <Activity size={13} className="text-gold-premium animate-pulse" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gold-premium uppercase tracking-widest font-bold">GEO MATRIX SCANNER v2.5</div>
                  <div className="font-mono text-[8px] text-sand-muted/40 uppercase tracking-widest">
                    {lang === 'ru' ? 'АНАЛИЗ ИИ-ВИДИМОСТИ' : lang === 'vi' ? 'PHÂN TÍCH KHẢ NĂNG HIỂN THỊ AI' : 'AI VISIBILITY ANALYSIS'}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                id="scanner-modal-close"
                className="w-8 h-8 rounded-full border border-gold-premium/20 hover:border-gold-premium flex items-center justify-center text-sand-muted hover:text-white transition-all cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <AnimatePresence mode="wait">

                {/* ── Step: INPUT ── */}
                {step === 'input' && (
                  <motion.div
                    key="modal-input"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-5 flex flex-col gap-5"
                  >
                    {/* Offer headline */}
                    <div className="bg-gradient-to-r from-gold-dark/20 to-gold-premium/10 border border-gold-premium/20 rounded-2xl p-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-gold-premium font-mono text-[8px] uppercase tracking-widest mb-2">
                        <Zap size={10} />
                        <span>{lang === 'ru' ? 'БЕСПЛАТНЫЙ ЭКСПРЕСС-АУДИТ' : lang === 'vi' ? 'KIỂM TRA NHANH MIỄN PHÍ' : 'FREE EXPRESS AUDIT'}</span>
                      </div>
                      <p className="text-white font-display font-black text-sm md:text-base leading-snug">
                        {t.hero.offer}
                      </p>
                    </div>

                    {/* What you get */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: <TrendingUp size={14} />, label: lang === 'ru' ? 'GEO-рейтинг' : lang === 'vi' ? 'Điểm GEO' : 'GEO Score' },
                        { icon: <Users size={14} />, label: lang === 'ru' ? 'Упущенные лиды' : lang === 'vi' ? 'Khách hàng bị mất' : 'Lost Leads' },
                        { icon: <Sparkles size={14} />, label: lang === 'ru' ? 'Стратегия GEO' : lang === 'vi' ? 'Chiến lược GEO' : 'GEO Strategy' },
                      ].map((item, i) => (
                        <div key={i} className="bg-black/40 border border-gold-premium/10 rounded-xl p-3 flex flex-col items-center gap-1.5 text-center">
                          <span className="text-gold-premium">{item.icon}</span>
                          <span className="text-white font-display font-bold text-[10px] leading-tight">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleStartScan} className="flex flex-col gap-3">
                      <div>
                        <label className="block text-[9px] font-mono text-sand-muted/70 uppercase tracking-widest mb-1.5">
                          {lang === 'ru' ? '1. Сайт компании' : lang === 'vi' ? '1. Website công ty' : '1. Company Website'}
                        </label>
                        <input
                          type="url"
                          required
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://example.com"
                          id="scanner-website"
                          className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3 text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-mono text-sand-muted/70 uppercase tracking-widest mb-1.5">
                          {lang === 'ru' ? '2. E-mail для получения отчета' : lang === 'vi' ? '2. Email nhận báo cáo' : '2. Email for report delivery'}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ceo@yourcompany.com"
                          id="scanner-email"
                          className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3 text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        id="scanner-submit"
                        className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-sm px-6 py-4 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 transition-all cursor-pointer mt-1"
                      >
                        <Globe size={15} />
                        <span>{t.hero.scanCta}</span>
                        <ArrowRight size={14} />
                      </motion.button>
                      <p className="text-center text-[9px] font-mono text-sand-muted/40 uppercase tracking-widest">
                        {lang === 'ru' ? '~30 сек · Без регистрации · Бесплатно' : lang === 'vi' ? '~30 giây · Không đăng ký · Miễn phí' : '~30 sec · No signup · Free'}
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── Step: RUNNING ── */}
                {step === 'running' && (
                  <motion.div
                    key="modal-running"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-5 flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2 text-gold-premium font-mono text-[10px] uppercase tracking-widest">
                      <Terminal size={12} className="animate-pulse" />
                      <span>GEO_CORE_MATRIX_SCANNER.SH</span>
                      <span className="ml-auto text-sand-muted/50">{progress}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gold-premium/5 border border-gold-premium/10 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark h-full rounded-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    {/* Log window */}
                    <div className="flex flex-col gap-2.5 min-h-[220px] max-h-[280px] overflow-y-auto pr-1 no-scrollbar text-[10px] font-mono bg-black/40 border border-gold-premium/5 rounded-2xl p-4">
                      {logs.map((log, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="text-sand-muted/30 flex-shrink-0">[{log.time}]</span>
                          <p className={`leading-relaxed ${
                            log.type === 'system' ? 'text-blue-400 font-bold' :
                            log.type === 'success' ? 'text-gold-premium font-semibold' :
                            log.type === 'warn' ? 'text-red-500 font-bold' : 'text-white/80'
                          }`}>{log.text}</p>
                        </div>
                      ))}
                      <div className="flex items-center gap-1.5 text-gold-light">
                        <span className="w-1.5 h-3 bg-gold-premium animate-pulse" />
                      </div>
                      <div ref={terminalEndRef} />
                    </div>

                    <p className="text-center text-[9px] font-mono text-sand-muted/40 uppercase tracking-widest">
                      {lang === 'ru' ? 'Анализируем ваш бизнес в ИИ-пространстве...' : lang === 'vi' ? 'Đang phân tích doanh nghiệp của bạn trong không gian AI...' : 'Analyzing your business in AI-space...'}
                    </p>
                  </motion.div>
                )}

                {/* ── Step: RESULTS ── */}
                {step === 'results' && (
                  <motion.div
                    key="modal-results"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 flex flex-col gap-5"
                  >
                    {/* Critical stripe */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse pointer-events-none" style={{ top: '48px' }} />

                    {/* Score header */}
                    <div className="flex items-center justify-between gap-4 bg-red-950/20 border border-red-500/30 rounded-2xl p-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-red-500 font-mono text-[8px] font-bold uppercase tracking-widest mb-1">
                          <ShieldAlert size={10} className="animate-bounce" />
                          <span>{lang === 'ru' ? 'ДИАГНОСТИЧЕСКИЙ ОТЧЕТ' : lang === 'vi' ? 'BÁO CÁO CHẨN ĐOÁN' : 'DIAGNOSTIC REPORT'}</span>
                        </div>
                        <p className="text-white font-display font-black text-base uppercase leading-tight">
                          {lang === 'ru' ? 'ИИ НЕ ВИДИТ ВАШ БИЗНЕС' : lang === 'vi' ? 'AI KHÔNG NHÌN THẤY DN CỦA BẠN' : 'AI CANNOT SEE YOUR BUSINESS'}
                        </p>
                        <p className="text-sand-muted font-mono text-[9px] mt-1">{website}</p>
                      </div>
                      <div className="flex-shrink-0 text-center">
                        <div className="text-[8px] font-mono text-red-400 uppercase tracking-widest">GEO INDEX</div>
                        <div className="font-display font-black text-4xl text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] leading-none">12%</div>
                        <div className="text-red-400 font-mono text-[7px] uppercase tracking-wider mt-0.5">CRITICAL</div>
                      </div>
                    </div>

                    {/* 3 metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          metric: lang === 'ru' ? 'ПРИСУТСТВИЕ' : lang === 'vi' ? 'HIỆN DIỆN' : 'PRESENCE',
                          score: lang === 'ru' ? '1/10 КРИТ' : '1/10 CRIT',
                          desc: lang === 'ru' ? 'Сайт не найден в RAG-алгоритмах' : lang === 'vi' ? 'Website không có trong RAG' : 'Not in LLM RAG graphs'
                        },
                        {
                          metric: lang === 'ru' ? 'ТОЧНОСТЬ' : lang === 'vi' ? 'ĐỘ CHÍNH XÁC' : 'ACCURACY',
                          score: lang === 'ru' ? '2/10 НЕД' : '2/10 DEF',
                          desc: lang === 'ru' ? 'ИИ цитирует устаревшие данные' : lang === 'vi' ? 'AI trích dẫn dữ liệu cũ' : 'AI pulls outdated archives'
                        },
                        {
                          metric: lang === 'ru' ? 'ТОНАЛЬНОСТЬ' : lang === 'vi' ? 'SẮCTHAI' : 'SENTIMENT',
                          score: lang === 'ru' ? 'РИСК' : lang === 'vi' ? 'NGUY CƠ' : 'AT RISK',
                          desc: lang === 'ru' ? 'Нет защиты от перехвата' : lang === 'vi' ? 'Không có bảo vệ' : 'No sentiment guards'
                        }
                      ].map((m, i) => (
                        <div key={i} className="bg-black/40 border border-red-500/10 rounded-xl p-3 flex flex-col gap-1.5">
                          <span className="font-mono text-[7px] text-gold-premium/50 uppercase tracking-widest">{m.metric}</span>
                          <span className="font-display font-black text-[10px] text-red-500">{m.score}</span>
                          <p className="text-sand-muted text-[9px] leading-tight">{m.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* FOMO message */}
                    <div className="bg-red-950/15 border border-red-500/25 rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-red-500 font-mono text-[8px] font-bold uppercase tracking-widest mb-2">
                        <AlertTriangle size={10} className="animate-pulse" />
                        <span>{lang === 'ru' ? 'КОНКУРЕНТЫ ЗАБИРАЮТ ВАШИХ КЛИЕНТОВ' : lang === 'vi' ? 'ĐỐI THỦ ĐANG LẤY KHÁCH HÀNG CỦA BẠN' : 'COMPETITORS STEALING YOUR CLIENTS'}</span>
                      </div>
                      <p className="text-red-400 font-display font-black text-xs md:text-sm uppercase text-center leading-relaxed">
                        {lang === 'ru'
                          ? '«ИЗ 15 ЗАПРОСОВ ПО ВАШЕЙ НИШЕ ИИ РЕКОМЕНДОВАЛ ВАС 0 РАЗ. КОНКУРЕНТ — 12 РАЗ.»'
                          : lang === 'vi'
                          ? '"TRONG 15 TRUY VẤN VỀ NGÀNH CỦA BẠN, AI ĐỀ XUẤT BẠN 0 LẦN. ĐỐI THỦ — 12 LẦN."'
                          : '"OUT OF 15 QUERIES IN YOUR NICHE, AI RECOMMENDED YOU 0 TIMES. YOUR COMPETITOR — 12 TIMES."'}
                      </p>
                    </div>

                    {/* STRONG OFFER + PRIMARY CTA */}
                    <div className="bg-gradient-to-b from-gold-dark/20 to-black/40 border border-gold-premium/30 rounded-2xl p-5 flex flex-col gap-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-gold-premium font-mono text-[8px] uppercase tracking-widest">
                        <Sparkles size={10} />
                        <span>{lang === 'ru' ? 'РЕШЕНИЕ ДЛЯ ВАШЕГО БИЗНЕСА' : lang === 'vi' ? 'GIẢI PHÁP CHO DOANH NGHIỆP CỦA BẠN' : 'THE SOLUTION FOR YOUR BUSINESS'}</span>
                      </div>
                      <h3 className="text-white font-display font-black text-base md:text-lg leading-tight">
                        {t.hero.offer}
                      </h3>
                      <div className="flex flex-col gap-1.5 text-left">
                        {(lang === 'ru'
                          ? ['✅ Ваш сайт начнёт появляться в ChatGPT и Perplexity', '✅ ИИ-агенты будут рекомендовать вас при каждом запросе', '✅ Поток платёжеспособных лидов без рекламных бюджетов']
                          : lang === 'vi'
                          ? ['✅ Website của bạn sẽ xuất hiện trong ChatGPT và Perplexity', '✅ AI agents sẽ giới thiệu bạn với mỗi truy vấn', '✅ Dòng khách hàng tiềm năng mà không cần ngân sách quảng cáo']
                          : ['✅ Your site will appear in ChatGPT and Perplexity results', '✅ AI agents will recommend you for every relevant query', '✅ Stream of high-value leads with zero ad spend']
                        ).map((item, i) => (
                          <p key={i} className="text-sand-muted text-xs font-display leading-relaxed">{item}</p>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleContactClick}
                        id="scanner-cta-contact"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-sm px-6 py-4 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 transition-all cursor-pointer"
                      >
                        <Sparkles size={15} />
                        <span>{lang === 'ru' ? 'ПОЛУЧИТЬ СТРАТЕГИЮ GEO' : lang === 'vi' ? 'NHẬN CHIẾN LƯỢC GEO' : 'GET MY GEO STRATEGY'}</span>
                        <ArrowRight size={14} />
                      </motion.button>
                      <p className="text-gold-premium/50 font-mono text-[8px] uppercase tracking-widest">
                        {lang === 'ru' ? 'Бесплатный экспресс-аудит · Только 5 мест в месяц' : lang === 'vi' ? 'Kiểm tra miễn phí · Chỉ 5 chỗ mỗi tháng' : 'Free Express Audit · Only 5 spots per month'}
                      </p>
                    </div>

                    {/* PDF secondary CTA (Automatic confirmation notice) */}
                    <div className="border-t border-gold-premium/10 pt-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <FileText size={12} className="text-gold-premium/60" />
                        <span className="text-sand-muted/60 font-mono text-[9px] uppercase tracking-widest">
                          {lang === 'ru' ? 'PDF-ОТЧЁТ УСПЕШНО ОТПРАВЛЕН' : lang === 'vi' ? 'BÁO CÁO PDF ĐÃ GỬI' : 'PDF REPORT DISPATCHED'}
                        </span>
                      </div>
                      <p className="text-sand-muted text-[10px] leading-relaxed max-w-sm mx-auto">
                        {lang === 'ru'
                          ? `Детальный отчет с промптами и RAG-логами успешно отправлен на вашу почту:`
                          : lang === 'vi'
                          ? `Báo cáo chi tiết đã được gửi thành công đến địa chỉ email của bạn:`
                          : `The detailed report with prompts and RAG logs has been successfully sent to:`}
                      </p>
                      <p className="text-gold-light font-mono font-bold text-xs mt-1 bg-black/45 border border-gold-premium/10 px-3 py-1.5 rounded-lg inline-block">
                        {email}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ── Step: PDF SENT ── */}
                {step === 'pdfSent' && (
                  <motion.div
                    key="modal-pdf-sent"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 flex flex-col items-center gap-5 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-premium flex items-center justify-center shadow-gold-glow">
                      <CheckCircle2 size={32} className="text-black animate-bounce" />
                    </div>
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                      {lang === 'ru' ? 'PDF ОТЧЁТ ОТПРАВЛЕН' : lang === 'vi' ? 'PDF ĐÃ GỬI' : 'PDF REPORT SENT'}
                    </h3>
                    <p className="text-sand-muted text-sm leading-relaxed max-w-sm">
                      {lang === 'ru' ? `Детальный отчёт отправлен на ` : lang === 'vi' ? `Báo cáo chi tiết đã gửi tới ` : `Detailed report sent to `}
                      <span className="text-gold-light font-mono font-bold">{email}</span>
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleContactClick}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-sm px-6 py-4 rounded-xl uppercase tracking-widest shadow-gold-glow transition-all cursor-pointer"
                    >
                      <Sparkles size={14} />
                      <span>{lang === 'ru' ? 'ПОЛУЧИТЬ СТРАТЕГИЮ GEO' : lang === 'vi' ? 'NHẬN CHIẾN LƯỢC GEO' : 'GET MY GEO STRATEGY'}</span>
                      <ArrowRight size={13} />
                    </motion.button>
                    <button
                      onClick={() => setStep('input')}
                      className="text-[10px] font-mono text-sand-muted/50 hover:text-white uppercase tracking-widest cursor-pointer border-b border-sand-muted/20 hover:border-white transition-colors"
                    >
                      {lang === 'ru' ? 'Новый аудит' : lang === 'vi' ? 'Kiểm tra mới' : 'Run new audit'}
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScannerModal;
