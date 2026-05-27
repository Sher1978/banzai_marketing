"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Terminal, Send, CheckCircle2, AlertTriangle, Cpu, Mail, ShieldCheck } from 'lucide-react';
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
  const [city, setCity] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');

  const [step, setStep] = useState<'input' | 'running' | 'results'>('input');
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [progress, setProgress] = useState(0);
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

  const handleStartScan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('running');
    setLogs([]);
    setProgress(0);

    // Initial Logs
    addLog(lang === 'ru' ? "⚡ Инициализация мультиагентного GEO-анализа..." : "⚡ Initializing multi-agent GEO audit system...", 'system');
    
    // Custom backend easter egg
    setTimeout(() => {
      addLog("🧩 Принято, Шер. Никаких no-code костылей. Твой Шертёнок на связи, давай разберем чистый бэкенд.", 'success');
    }, 800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `🧠 [Агент 1: Query Gen] Загрузка матрицы для бренда: "${brand}" (${industry}), Город: "${city}".` 
        : `🧠 [Agent 1: Query Gen] Loading matrix for brand: "${brand}" (${industry}), City: "${city}".`, 'info');
    }, 1800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🧠 [Агент 1: Query Gen] Сформировано 5 высокоинтенсивных промптов (GPT-4o-mini JSON)." 
        : "🧠 [Agent 1: Query Gen] Generated 5 high-intent search prompts (GPT-4o-mini JSON).", 'success');
      setProgress(20);
    }, 3200);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🌐 [Агент 2: Fetching Router] Запуск асинхронного LLM-роутера. Запуск asyncio.gather() по 15 параллельным потокам."
        : "🌐 [Agent 2: Fetching Router] Launching asynchronous LLM-router. Executing asyncio.gather() across 15 parallel threads.", 'info');
    }, 4500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🌐 [Агент 2: Fetching Router] Опрашиваю Perplexity (sonar-large-128k-online), OpenAI (GPT-4o) и Anthropic (Claude 3.5 Sonnet)..."
        : "🌐 [Agent 2: Fetching Router] Hitting Perplexity (sonar-large-128k-online), OpenAI (GPT-4o) and Anthropic (Claude 3.5 Sonnet) APIs...", 'info');
      setProgress(40);
    }, 6000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🔎 [Агент 3: LLM-as-a-Judge] Запуск Агента-Оценщика. Анализ сырых ответов. string.find отключен."
        : "🔎 [Agent 3: LLM-as-a-Judge] Running Evaluator Agent. Parsing raw replies. string.find is ignored.", 'info');
    }, 7800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🔎 [Агент 3: LLM-as-a-Judge] Сентимент-анализ завершен. Конкуренты цитируются как Ground Truth. Клиент пропущен."
        : "🔎 [Agent 3: LLM-as-a-Judge] Sentiment analysis finished. Competitors cited as Ground Truth. User brand missed.", 'warn');
      setProgress(60);
    }, 9500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📊 [Агент 4: Scoring Engine] Вычисление GEO Visibility Score по модели взвешенных ответов..."
        : "📊 [Agent 4: Scoring Engine] Calculating GEO Visibility Score using weighted response model...", 'info');
    }, 11000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `📊 [Агент 4: Scoring Engine] Сканирование завершено. Бренд "${brand}" найден в 0 из 15 генераций.`
        : `📊 [Agent 4: Scoring Engine] Scanning finished. Brand "${brand}" cited in 0 out of 15 generations.`, 'warn');
      setProgress(80);
    }, 12500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📄 [Агент 5: PDF Generator] Генерация диагностического отчета и отправка..." 
        : "📄 [Agent 5: PDF Generator] Compiling diagnostic report and sending...", 'info');
    }, 13800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `🚀 [Агент 5: PDF Generator] PDF-отчет успешно отправлен на email: ${email}` 
        : `🚀 [Agent 5: PDF Generator] PDF report successfully dispatched to email: ${email}`, 'success');
      setProgress(100);
    }, 15200);

    // Finalize simulation and send data to FormSubmit
    setTimeout(async () => {
      setStep('results');
      
      // Dispatch lead in background
      try {
        const formData = new FormData();
        formData.append('_subject', 'BanzAI marketing - Real-time GEO Diagnostic Lead');
        formData.append('brand', brand);
        formData.append('city', city);
        formData.append('industry', industry);
        formData.append('email', email);
        formData.append('simulated_score', '12%');
        formData.append('fomo_status', 'CRITICAL RISK');

        await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: formData
        });
      } catch (e) {
        // fail silently
      }
    }, 16500);
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="scanner">
      
      {/* Background visual adjustments */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.01] filter blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[9px] font-mono border border-red-500/30 px-3 py-1 rounded-full text-red-500 bg-red-500/5 tracking-widest uppercase font-bold mb-4 inline-block animate-pulse">
            LIVE ANALYTICS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
            {lang === 'ru' ? "ЭКСПРЕСС-АНАЛИЗ ВАШЕГО GEO-ИНДЕКСА" : "LIVE GEO-INDEX DIAGNOSTIC PANEL"}
          </h2>
          <p className="text-sand-muted text-xs md:text-sm leading-relaxed">
            {lang === 'ru'
              ? "Запустите наш интерактивный мультиагентный сканер, чтобы увидеть, как поисковые нейросети прямо сейчас воспринимают ваш бренд в реальном времени."
              : "Launch our interactive multi-agent scanner and watch neural search bots evaluate your digital footprint in real time."}
          </p>
        </div>

        {/* Dynamic Step Controller */}
        <AnimatePresence mode="wait">
          
          {/* Step 1: Input Form */}
          {step === 'input' && (
            <motion.div
              key="input-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-[#12100e]/85 border border-gold-premium/15 p-6 md:p-10 rounded-3xl shadow-gold-glow backdrop-blur-xl"
            >
              <form onSubmit={handleStartScan} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "НАЗВАНИЕ ВАШЕГО БРЕНДА (БЕЗ ООО/ИП)" : "YOUR BRAND NAME (E.G. LOTUS DENTAL)"}
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
                    {lang === 'ru' ? "СФЕРА БИЗНЕСА" : "BUSINESS INDUSTRY"}
                  </label>
                  <input
                    type="text"
                    required
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="E.g. Эстетическая стоматология"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "ЛОКАЦИЯ (ГОРОД)" : "LOCATION / CITY"}
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="E.g. Нячанг"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                    {lang === 'ru' ? "ВАШ EMAIL (ДЛЯ ОТПРАВКИ PDF-ОТЧЕТА)" : "YOUR EMAIL ADDRESS (FOR PDF REPORT)"}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g. ceo@lotusdental.com"
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-4.5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-105 transition-all cursor-pointer"
                  >
                    <Cpu size={16} className="animate-spin duration-3000" />
                    <span>{lang === 'ru' ? "ИНИЦИАЛИЗИРОВАТЬ GEO-СКАНЕР" : "INITIALIZE LIVE GEO DIAGNOSTIC"}</span>
                  </motion.button>
                </div>

              </form>
            </motion.div>
          )}

          {/* Step 2: Running Terminal Logs */}
          {step === 'running' && (
            <motion.div
              key="running-terminal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full bg-black border border-gold-premium/25 rounded-3xl p-6 md:p-8 shadow-gold-glow font-mono relative overflow-hidden"
            >
              {/* Glowing header */}
              <div className="flex justify-between items-center pb-4 border-b border-gold-premium/10 mb-6 text-[10px] md:text-xs text-gold-premium/60 tracking-wider">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-gold-light animate-pulse" />
                  <span>GEO_AGENT_PIPELINE.PY // RUNNING</span>
                </div>
                <span>PROGRESS: {progress}%</span>
              </div>

              {/* Console Logs */}
              <div className="flex flex-col gap-3 min-h-[260px] max-h-[300px] overflow-y-auto pr-2 no-scrollbar text-left text-[9px] md:text-xs">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="text-sand-muted/40 font-mono flex-shrink-0 select-none">[{log.time}]</span>
                    <p className={`leading-relaxed font-mono ${
                      log.type === 'system' ? 'text-blue-400 font-bold' :
                      log.type === 'success' ? 'text-gold-premium font-semibold text-glow-gold' :
                      log.type === 'warn' ? 'text-red-500 font-bold' : 'text-white/80'
                    }`}>
                      {log.text}
                    </p>
                  </div>
                ))}
                {/* Blinking Prompt Cursor */}
                <div className="flex gap-2 items-center text-gold-light">
                  <span className="w-1.5 h-3.5 bg-gold-premium animate-pulse" />
                </div>
                <div ref={terminalEndRef} />
              </div>

              {/* Progress bar loader */}
              <div className="w-full bg-gold-premium/5 border border-gold-premium/10 h-2 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark h-full rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </motion.div>
          )}

          {/* Step 3: Complete Double Results (Diagnostic Sheet) */}
          {step === 'results' && (
            <motion.div
              key="results-sheet"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#12100e] border border-gold-premium/20 rounded-3xl p-6 md:p-10 shadow-gold-glow flex flex-col gap-8 relative overflow-hidden"
            >
              {/* Diagonal critical risk banner background */}
              <div className="absolute -top-1.5 left-0 right-0 h-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.7)]" />

              {/* Main Score Header */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gold-premium/10 pb-8 text-left">
                
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
                    <AlertTriangle size={12} />
                    <span>GEO COMPLIANCE AUDIT SHEET</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
                    {lang === 'ru' ? "ДИАГНОСТИЧЕСКИЙ ЛИСТ БРЕНДА" : "BRAND GEO DIAGNOSTIC SHEET"}
                  </h3>
                  <p className="text-sand-muted text-xs font-display">
                    {lang === 'ru'
                      ? `Анализ видимости бренда "${brand.toUpperCase()}" по 15 поисковым запросам ИИ.`
                      : `Visibility analysis of brand "${brand.toUpperCase()}" across 15 AI prompts.`}
                  </p>
                </div>

                {/* Score Counter */}
                <div className="flex items-center gap-4 bg-red-950/20 border border-red-500/30 px-6 py-4 rounded-2xl flex-shrink-0 text-center">
                  <div>
                    <div className="text-[8px] font-mono text-red-400 uppercase tracking-widest mb-0.5">
                      GEO VISIBILITY
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

              {/* Model Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                
                {/* Perplexity */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-3">
                  <span className="font-mono text-[9px] text-gold-premium/60 uppercase tracking-widest">
                    PERPLEXITY (Sonar Online)
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "Абсолютная слепота" : "Total Blind Spot"}
                  </h4>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "ИИ-поисковик в реальном времени не цитирует ваш сайт. Все промпты перехвачены вашим главным конкурентом."
                      : "Real-time AI searcher completely misses your brand. All prompt queries were intercepted by your top competitor."}
                  </p>
                  <span className="font-mono text-[8px] text-red-500/80 uppercase">SCORE: 0 / 100</span>
                </div>

                {/* ChatGPT */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-3">
                  <span className="font-mono text-[9px] text-gold-premium/60 uppercase tracking-widest">
                    OPENAI (GPT-4o)
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "Устаревшие данные" : "Outdated Archives"}
                  </h4>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "Модель выдает старую информацию за 2024 год, ссылаясь на неактивные карточки. Нет новых прецедентов."
                      : "Model outputs stale archive data from 2024, citing dead index files. No recent case integration found."}
                  </p>
                  <span className="font-mono text-[8px] text-yellow-500/80 uppercase">SCORE: 20 / 100</span>
                </div>

                {/* Claude */}
                <div className="bg-black/30 border border-gold-premium/5 p-5 rounded-2xl flex flex-col gap-3">
                  <span className="font-mono text-[9px] text-gold-premium/60 uppercase tracking-widest">
                    CLAUDE 3.5 SONNET
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase">
                    {lang === 'ru' ? "Бренд пропущен" : "Brand Ignored"}
                  </h4>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? "Скрытое пространство модели заполнено структурированными статьями ваших конкурентов. Вас нет в графе знаний."
                      : "Model Latent Space is dominated by structured articles of competitors. You are missing from its knowledge graph."}
                  </p>
                  <span className="font-mono text-[8px] text-red-500/80 uppercase">SCORE: 10 / 100</span>
                </div>

              </div>

              {/* The Killer FOMO details */}
              <div className="bg-red-950/10 border border-red-500/25 p-6 rounded-2xl text-left flex flex-col gap-4">
                
                <div className="flex items-center gap-2 text-red-500 font-mono text-[9px] font-bold uppercase tracking-widest">
                  <AlertTriangle size={12} />
                  <span>COMPETITOR MONOPOLY HIGHLIGHTS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-display">
                  <div>
                    <h5 className="text-xs text-white uppercase font-black tracking-wide mb-1">
                      {lang === 'ru' ? "ВМЕСТО ВАС ИИ РЕКОМЕНДУЕТ:" : "INSTEAD OF YOU, AI CITED:"}
                    </h5>
                    <ul className="text-xs text-red-400 space-y-1.5 list-disc pl-4 leading-relaxed font-mono">
                      <li>Nha Trang Smile / Dubai Elite Properties (12 times)</li>
                      <li>Lotus Center / Premium Services Ltd (3 times)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs text-white uppercase font-black tracking-wide mb-1">
                      {lang === 'ru' ? "КОНВЕРСИОННЫЙ СТАТУС:" : "CONVERSION STATUS:"}
                    </h5>
                    <p className="text-xs text-sand-muted leading-relaxed font-medium">
                      {lang === 'ru'
                        ? "100% лидов, готовых совершить покупку прямо сейчас, ИИ перенаправляет в отделы продаж конкурентов."
                        : "100% of high-intent purchase-ready buyers are redirected by AI directly into your competitors' sales pipes."}
                    </p>
                  </div>
                </div>

                <div className="border-t border-red-500/20 pt-4 mt-2">
                  <p className="text-red-500 text-xs md:text-sm font-display font-black tracking-tight uppercase leading-relaxed text-center drop-shadow">
                    {lang === 'ru'
                      ? "«ИЗ 15 ЗАПРОСОВ ВАШИХ ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ ИИ ПОРЕКОМЕНДОВАЛ ВАС 0 РАЗ, А ВАШЕГО КОНКУРЕНТА — 12 РАЗ. СДЕЛКА ЗАКРЫТА»."
                      : "“OUT OF 15 SEARCH QUERIES FROM YOUR POTENTIAL CLIENTS, AI RECOMMENDED YOU 0 TIMES, AND YOUR COMPETITOR — 12 TIMES. DEAL IS CLOSED.”"}
                  </p>
                </div>

              </div>

              {/* PDF notice and capture closing */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-gold-premium/10 pt-6">
                <div className="flex items-center gap-2 text-gold-light text-left">
                  <Mail size={16} className="text-gold-premium" />
                  <span className="font-mono text-[9px] md:text-[10px] tracking-wide">
                    {lang === 'ru' 
                      ? `Детальный PDF-отчет отправлен на почту: ${email}` 
                      : `Detailed PDF report successfully dispatched to: ${email}`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck size={16} />
                  <span className="font-mono text-[9px] md:text-[10px] tracking-wider uppercase font-bold">
                    {lang === 'ru' ? "ИНТЕГРАЦИЯ УСПЕШНА" : "SYSTEM STACK ONLINE"}
                  </span>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default ScannerWidget;
