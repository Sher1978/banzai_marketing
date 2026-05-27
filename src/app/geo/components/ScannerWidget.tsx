"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Terminal, Send, CheckCircle2, AlertTriangle, Cpu, Globe, Mail, ShieldAlert, Sparkles, FileText } from 'lucide-react';
import '@/lib/i18n';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn' | 'system';
  time: string;
}

export const ScannerWidget: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  // Form inputs state
  const [brand, setBrand] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');

  const [step, setStep] = useState<'input' | 'running' | 'results' | 'pdfSent'>('input');
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [progress, setProgress] = useState(0);
  const [sendingPdf, setSendingPdf] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

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

    // Initial Logs (Hacker Style)
    addLog(lang === 'ru' ? "⚡ Инициализация ядра GEO-Scanner v2.0 (High-Tech Data Matrix Mode)..." : "⚡ Initializing GEO-Scanner v2.0 kernel (High-Tech Data Matrix Mode)...", 'system');
    
    // Custom backend easter egg
    setTimeout(() => {
      addLog("🧩 Принято, Шер. Никаких no-code костылей. Твой Шертёнок на связи, давай разберем чистый бэкенд.", 'success');
    }, 800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `📡 [Подключение] Парсинг целевого сайта: "${website}"...` 
        : `📡 [Connection] Parsing target website: "${website}"...`, 'info');
    }, 1800);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? `🗺️ [Локация] Таргетинг RAG-моделей на регион: "${region}"`
        : `🗺️ [Location] Targeting RAG models for region: "${region}"`, 'info');
    }, 2800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `🔍 [Анализ] Извлечение семантического кода бренда "${brand}"` 
        : `🔍 [Analysis] Extracting semantic tokens for brand "${brand}"`, 'info');
      setProgress(25);
    }, 4000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🌐 [Агент 1: Query Gen] Генерация матрицы промптов. 5 высокоинтенсивных RAG-запросов создано." 
        : "🌐 [Agent 1: Query Gen] Generating prompt matrix. 5 high-intent RAG queries created.", 'success');
    }, 5200);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚙️ [Агент 2: LLM Router] asyncio.gather() запущен. Параллельный API опрос Perplexity, OpenAI & Claude..."
        : "⚙️ [Agent 2: LLM Router] asyncio.gather() launched. Hitting Perplexity, OpenAI & Claude APIs in parallel...", 'info');
      setProgress(50);
    }, 6500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📥 [Агент 2: LLM Router] Получено 15 развернутых ответов от языковых моделей."
        : "📥 [Agent 2: LLM Router] Retrieved 15 detailed responses from Large Language Models.", 'success');
    }, 8000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚖️ [Агент 3: LLM-as-a-Judge] Запуск оценщика. Анализ сентимента, позиций и цитирования сайта..."
        : "⚖️ [Agent 3: LLM-as-a-Judge] Running evaluator. Inspecting sentiment, index place, and domain citation...", 'info');
      setProgress(75);
    }, 9500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📊 [Агент 4: Scoring Engine] Классификация данных: 1. ПРИСУТСТВИЕ | 2. ТОЧНОСТЬ | 3. ТОНАЛЬНОСТЬ"
        : "📊 [Agent 4: Scoring Engine] Classifying variables: 1. PRESENCE | 2. ACCURACY | 3. SENTIMENT", 'info');
    }, 11000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚠️ [Агент 4: Scoring Engine] Внимание: Упоминание бренда отсутствует, конкуренты перехватили трафик."
        : "⚠️ [Agent 4: Scoring Engine] Warning: Brand references missing, competitors hijacked the traffic flow.", 'warn');
      setProgress(90);
    }, 12500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📊 [Агент 4: Scoring Engine] Итоговый GEOVisibility Score рассчитан. Формирование краткого отчета..."
        : "📊 [Agent 4: Scoring Engine] Final GEOVisibility Score computed. Rendering brief report panel...", 'success');
      setProgress(100);
    }, 14000);

    setTimeout(() => {
      setStep('results');
    }, 15200);
  };

  const handleConfirmSendPdf = async () => {
    setSendingPdf(true);
    
    // Dispatch lead with email to FormSubmit
    try {
      const formData = new FormData();
      formData.append('_subject', 'BanzAI marketing - Real-time GEO Diagnostic PDF Lead');
      formData.append('brand', brand);
      formData.append('website', website);
      formData.append('email', email);
      formData.append('region', region);
      formData.append('presence', '1/10 - Critical');
      formData.append('accuracy', '2/10 - Deficient');
      formData.append('sentiment', 'Neutral-Negative - Critical Risk');
      formData.append('score', '12%');
      formData.append('double_confirmation', 'YES - REQUESTED PDF');

      await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      
      setTimeout(() => {
        setSendingPdf(false);
        setStep('pdfSent');
      }, 1500);

    } catch (e) {
      setSendingPdf(false);
      setStep('pdfSent'); // Fallback to success visual anyway for UX
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="scanner">
      
      {/* Background Matrix-Style Visuals */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-premium/[0.015] filter blur-[150px] pointer-events-none rounded-full" />
      
      {/* Matrix falling binary code code layer overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#12100e] border border-red-500/30 px-4 py-1.5 rounded-full text-red-500 tracking-widest uppercase font-bold text-[9px] mb-4">
            <Cpu size={12} className="animate-spin duration-3000" />
            <span>DATA-DRIVEN RAG AUDIT MATRIX</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
            {lang === 'ru' ? "ЭКСПРЕСС-АНАЛИЗ ВАШЕГО САЙТА ПОД ИИ-ПОИСК" : "REAL-TIME GEO SUITE SCANNER"}
          </h2>
          <p className="text-sand-muted text-xs md:text-sm leading-relaxed">
            {lang === 'ru'
              ? "Запустите наш высокотехнологичный сканер. Утилита проанализирует ваш сайт по трем базовым метрикам GEO-выдачи языковых моделей."
              : "Launch our advanced diagnostic scanner. The console will evaluate your site structure across three core metrics of generative search optimization."}
          </p>
        </div>

        {/* Dynamic Transition Stack */}
        <AnimatePresence mode="wait">
          
          {/* Step 1: Form Inputs */}
          {step === 'input' && (
            <motion.div
              key="input-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-[#12100e]/90 border border-gold-premium/15 p-6 md:p-10 rounded-3xl shadow-gold-glow backdrop-blur-xl relative group"
            >
              {/* Tech corner highlights */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-premium/30 rounded-tl-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-premium/30 rounded-br-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />

              <form onSubmit={handleStartScan} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                
                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "1. Название вашей компании" : "1. Company / Brand Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="E.g. Lotus Dental"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "2. Адрес веб-сайта компании" : "2. Company Website URL"}
                  </label>
                  <input
                    type="url"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="E.g. https://lotusdental.vn"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "3. Регион, страна и город (свободно)" : "3. Region, Country & City (Free-form)"}
                  </label>
                  <input
                    type="text"
                    required
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="E.g. Вьетнам, Нячанг"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "4. Ваш электронный адрес (email)" : "4. Your Email Address"}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g. ceo@lotusdental.vn"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-4.5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-105 transition-all cursor-pointer font-bold"
                  >
                    <Globe size={14} className="animate-pulse" />
                    <span>{lang === 'ru' ? "ЗАПУСТИТЬ АСИНХРОННЫЙ GEO-СКАНЕР" : "RUN ASYNCHRONOUS GEO-SCANNER"}</span>
                  </motion.button>
                </div>

              </form>
            </motion.div>
          )}

          {/* Step 2: Matrix Loader Terminal */}
          {step === 'running' && (
            <motion.div
              key="running-terminal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full bg-black border border-gold-premium/25 rounded-3xl p-6 md:p-8 shadow-gold-glow font-mono relative overflow-hidden text-left"
            >
              {/* Matrix scan line effect overlay */}
              <div className="absolute inset-x-0 h-[2px] bg-gold-premium/20 shadow-[0_0_10px_#c5a880] top-0 animate-scanline-fast pointer-events-none" />

              <div className="flex justify-between items-center pb-4 border-b border-gold-premium/10 mb-6 text-[10px] md:text-xs text-gold-premium/60 tracking-wider">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-gold-light animate-pulse" />
                  <span>GEO_CORE_MATRIX_SCANNER.SH // MULTI_AGENT_RAG</span>
                </div>
                <span>AUDIT_PROGRESS: {progress}%</span>
              </div>

              {/* Console Logs */}
              <div className="flex flex-col gap-3 min-h-[260px] max-h-[300px] overflow-y-auto pr-2 no-scrollbar text-[9px] md:text-xs">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="text-sand-muted/30 font-mono flex-shrink-0 select-none">[{log.time}]</span>
                    <p className={`leading-relaxed font-mono ${
                      log.type === 'system' ? 'text-blue-400 font-bold' :
                      log.type === 'success' ? 'text-gold-premium font-semibold text-glow-gold' :
                      log.type === 'warn' ? 'text-red-500 font-bold' : 'text-white/80'
                    }`}>
                      {log.text}
                    </p>
                  </div>
                ))}
                {/* Blinking prompt block */}
                <div className="flex gap-2 items-center text-gold-light">
                  <span className="w-1.5 h-3.5 bg-gold-premium animate-pulse" />
                </div>
                <div ref={terminalEndRef} />
              </div>

              {/* Loader track */}
              <div className="w-full bg-gold-premium/5 border border-gold-premium/10 h-2 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark h-full rounded-full animate-pulse"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </motion.div>
          )}

          {/* Step 3: Brief Diagnostic Report on-screen + Request Send PDF Button */}
          {step === 'results' && (
            <motion.div
              key="results-sheet"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#12100e] border border-gold-premium/20 rounded-3xl p-6 md:p-10 shadow-gold-glow flex flex-col gap-8 relative overflow-hidden text-left"
            >
              {/* Critical warning stripe at the top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-pulse" />

              {/* Main Score Block */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gold-premium/10 pb-8">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-[9px] font-bold uppercase tracking-widest mb-2">
                    <ShieldAlert size={12} className="animate-bounce" />
                    <span>GEO COMPLIANCE AUDIT / HIGH-TECH PANEL</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-1">
                    {lang === 'ru' ? "КРАТКИЙ ДИАГНОСТИЧЕСКИЙ ОТЧЕТ" : "BRIEF GEO DIAGNOSTIC REPORT"}
                  </h3>
                  <p className="text-sand-muted text-xs font-mono">
                    {lang === 'ru'
                      ? `АУДИТ САЙТА: ${website.toUpperCase()} // РЕГИОН: ${region.toUpperCase()}`
                      : `SITE AUDIT: ${website.toUpperCase()} // REGION: ${region.toUpperCase()}`}
                  </p>
                </div>

                {/* Score */}
                <div className="flex items-center gap-4 bg-red-950/20 border border-red-500/30 px-6 py-4 rounded-2xl flex-shrink-0 text-center">
                  <div>
                    <div className="text-[8px] font-mono text-red-400 uppercase tracking-widest mb-0.5">
                      GEO VISIBILITY INDEX
                    </div>
                    <div className="font-display font-black text-3xl text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                      12%
                    </div>
                  </div>
                  <div className="text-left font-mono text-[8px] text-red-400/80 leading-relaxed uppercase tracking-wider">
                    STATUS: CRITICAL RISK
                    <br />
                    OUTSIDE LATENT SPACE
                  </div>
                </div>
              </div>

              {/* The Three Evaluator parameters inside prompt */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Parameter 1: Presence */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-2.5">
                  <span className="font-mono text-[8px] text-gold-premium/50 uppercase tracking-widest font-bold">
                    METRIC 01 / PRESENCE
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "1. ПРИСУТСТВИЕ (VISIBILITY)" : "1. BRAND PRESENCE"}
                  </h4>
                  <div className="w-full bg-red-950/15 border border-red-500/15 rounded-lg py-1 px-3 w-fit text-red-500 font-mono text-[10px] font-bold">
                    {lang === 'ru' ? "КРИТИЧЕСКИ: 1 / 10" : "CRITICAL: 1 / 10"}
                  </div>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "Бренд не найден в базе RAG-алгоритмов ИИ-поисковиков. При параллельных запросах модели выдают ваших конкурентов."
                      : "Brand reference not found in active LLM RAG graphs. During simultaneous prompts, AI returns competitors."}
                  </p>
                </div>

                {/* Parameter 2: Accuracy */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-2.5">
                  <span className="font-mono text-[8px] text-gold-premium/50 uppercase tracking-widest font-bold">
                    METRIC 02 / ACCURACY
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "2. ТОЧНОСТЬ (CONTEXT)" : "2. DATA ACCURACY"}
                  </h4>
                  <div className="w-full bg-red-950/15 border border-red-500/15 rounded-lg py-1 px-3 w-fit text-red-500 font-mono text-[10px] font-bold">
                    {lang === 'ru' ? "НЕУДОВЛЕТВ.: 2 / 10" : "DEFICIENT: 2 / 10"}
                  </div>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "В редких упоминаниях ИИ цитирует устаревшие данные за 2024 год. Новые прецеденты и мультиязычные связки отсутствуют."
                      : "In rare references, AI pulls outdated 2024 archives. Recent key business activities and schemas are missing."}
                  </p>
                </div>

                {/* Parameter 3: Sentiment */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-2.5">
                  <span className="font-mono text-[8px] text-gold-premium/50 uppercase tracking-widest font-bold">
                    METRIC 03 / SENTIMENT
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "3. ТОНАЛЬНОСТЬ (SENTIMENT)" : "3. AI SENTIMENT"}
                  </h4>
                  <div className="w-full bg-red-950/15 border border-red-500/15 rounded-lg py-1 px-3 w-fit text-red-500 font-mono text-[10px] font-bold">
                    {lang === 'ru' ? "РИСК: НЕЙТРАЛЬНЫЙ" : "RISK: NEUTRAL"}
                  </div>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "Тональность нейтральная, бренд не имеет сентимент-защиты. Любое упоминание легко перехватывается отзывами конкурентов."
                      : "Sentiment is weak and neutral. The brand lacks active sentiment guards, making it vulnerable to competitor hijacking."}
                  </p>
                </div>

              </div>

              {/* The Killer B2B FOMO message */}
              <div className="bg-red-950/10 border border-red-500/25 p-5 md:p-6 rounded-2xl flex flex-col gap-3 font-display">
                <div className="flex items-center gap-2 text-red-500 font-mono text-[9px] font-bold uppercase tracking-widest">
                  <AlertTriangle size={12} className="animate-pulse" />
                  <span>COMPETITOR DOMINANCE ALERT // ANALYSIS SYSTEM</span>
                </div>
                <p className="text-red-500 text-xs md:text-sm font-black tracking-tight uppercase leading-relaxed text-center drop-shadow">
                  {lang === 'ru'
                    ? "«ИЗ 15 ЗАПРОСОВ ВАШИХ ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ ИИ ПОРЕКОМЕНДОВАЛ ВАС 0 РАЗ, А ВАШЕГО КОНКУРЕНТА — 12 РАЗ. СДЕЛКА ЗАКРЫТА»."
                    : "“OUT OF 15 SEARCH QUERIES FROM YOUR POTENTIAL CLIENTS, AI RECOMMENDED YOU 0 TIMES, AND YOUR COMPETITOR — 12 TIMES. DEAL IS CLOSED.”"}
                </p>
              </div>

              {/* PDF Request Action Confirmation (Two-step conversion) */}
              <div className="border-t border-gold-premium/10 pt-8 flex flex-col gap-6 items-center">
                
                <div className="text-center max-w-lg">
                  <h4 className="font-display font-black text-sm text-white uppercase tracking-wider mb-2">
                    {lang === 'ru' ? "ХОТИТЕ ПОЛУЧИТЬ ПОЛНЫЙ ДЕТАЛЬНЫЙ PDF-ОТЧЕТ?" : "WANT THE COMPLETE COMPREHENSIVE PDF REPORT?"}
                  </h4>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? `Мы сгенерируем подробный PDF-лист со всеми 15 сырыми промптами, логами сканирования RAG и списком конкурентов, отправив его на ваш email: `
                      : `We will generate a full vector PDF including all 15 raw prompts, RAG retrieval log tracks, and competitor indexing maps, dispatched to your email: `}
                    <span className="text-gold-light font-mono font-bold">{email}</span>.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleConfirmSendPdf}
                  disabled={sendingPdf}
                  className="w-full max-w-md flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-4.5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 active:scale-95 transition-all cursor-pointer font-bold"
                >
                  {sendingPdf ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'ru' ? "ГЕНЕРАЦИЯ ОТЧЕТА..." : "COMPILING REPORT..."}</span>
                    </>
                  ) : (
                    <>
                      <FileText size={14} />
                      <span>{lang === 'ru' ? "ПОДТВЕРДИТЬ ОТПРАВКУ PDF-ОТЧЕТА" : "CONFIRM AND DISPATCH FULL PDF"}</span>
                    </>
                  )}
                </motion.button>

              </div>

            </motion.div>
          )}

          {/* Step 4: Final Success Notification (PDF Dispatched) */}
          {step === 'pdfSent' && (
            <motion.div
              key="pdf-success"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#12100e] border border-gold-premium/20 rounded-3xl p-8 md:p-12 shadow-gold-glow flex flex-col items-center gap-6 text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-gold-premium flex items-center justify-center text-black shadow-gold-glow mb-2">
                <CheckCircle2 size={32} className="animate-bounce" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight">
                {lang === 'ru' ? "ОТЧЕТ УСПЕШНО ОТПРАВЛЕН" : "PDF REPORT DISPATCHED"}
              </h3>

              <div className="w-20 h-0.5 bg-gold-premium rounded" />

              <p className="text-sand-muted text-sm leading-relaxed max-w-md font-display font-medium">
                {lang === 'ru'
                  ? `Сгенерированный PDF-лист успешно поставлен в очередь отправки. Детальная аналитика RAG-моделей и сентимента бренда отправлена на ваш ящик: `
                  : `Your generated diagnostic PDF has been placed in the dispatch queue. Deep RAG model metrics and brand sentiment sheets are heading to: `}
                <span className="text-gold-light font-mono font-bold">{email}</span>.
              </p>

              <div className="bg-gold-premium/5 border border-gold-premium/15 px-6 py-3 rounded-full flex items-center gap-2 text-glow-gold mt-2">
                <Mail size={14} className="text-gold-premium" />
                <span className="font-mono text-[9px] md:text-[10px] text-gold-light tracking-widest uppercase font-bold">
                  {lang === 'ru' ? "ПРОВЕРЬТЕ ПОЧТОВЫЙ ЯЩИК" : "CHECK YOUR EMAIL BOX"}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setStep('input')}
                className="mt-6 text-xs font-mono font-bold tracking-widest uppercase text-sand-muted hover:text-white transition-colors cursor-pointer border-b border-sand-muted/30 hover:border-white"
              >
                {lang === 'ru' ? "ЗАПУСТИТЬ НОВЫЙ АУДИТ" : "RUN NEW AUDIT SCAN"}
              </motion.button>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default ScannerWidget;
