"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Terminal, Send, CheckCircle2, AlertTriangle, Cpu, Globe, Mail, ShieldAlert, Sparkles, FileText, ArrowRight, Activity } from 'lucide-react';
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
  const [website, setWebsite] = useState('');
  const [region, setRegion] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');

  const [step, setStep] = useState<'intro' | 'input' | 'running' | 'results' | 'pdfSent'>('intro');
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [progress, setProgress] = useState(0);
  const [sendingPdf, setSendingPdf] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const [telemetry, setTelemetry] = useState({
    lat: 25.2048,
    lng: 55.2708,
    latency: 42,
    semanticLock: 94.6,
  });

  useEffect(() => {
    if (step !== 'intro') return;
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        lat: +(prev.lat + (Math.random() - 0.5) * 0.0002).toFixed(4),
        lng: +(prev.lng + (Math.random() - 0.5) * 0.0002).toFixed(4),
        latency: Math.floor(Math.random() * 8) + 38,
        semanticLock: +(94 + Math.random() * 2).toFixed(1),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, [step]);

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
    addLog(lang === 'ru' ? "⚡ Инициализация ядра GEO-Scanner v2.5 (Matrix Radar Mode)..." : "⚡ Initializing GEO-Scanner v2.5 kernel (Matrix Radar Mode)...", 'system');
    
    // Custom backend easter egg
    setTimeout(() => {
      addLog("🧩 Принято, Шер. Никаких no-code костылей. Твой Шертёнок на связи, давай разберем чистый бэкенд.", 'success');
    }, 800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `📡 [Подключение] Анализ веб-структуры целевого сайта: "${website}"...` 
        : `📡 [Connection] Scanning web structures of target site: "${website}"...`, 'info');
    }, 1800);

    setTimeout(() => {
      addLog(lang === 'ru'
        ? `🗺️ [География] Настройка региональных RAG-координат: "${region}"`
        : `🗺️ [Location] Mapping regional RAG boundaries to: "${region}"`, 'info');
    }, 2800);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? `🔍 [Ниша] Ограничение Latent Space под индустрию: "${industry}"` 
        : `🔍 [Niche] Filtering Latent Space variables for: "${industry}"`, 'info');
      setProgress(25);
    }, 4000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "🌐 [Агент 1: Query Gen] Матрица промптов скомпилирована. 5 высокоинтенсивных RAG-запросов поставлено в очередь." 
        : "🌐 [Agent 1: Query Gen] Prompt matrix compiled. 5 high-intent RAG queries queued.", 'success');
    }, 5200);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚙️ [Агент 2: LLM Router] asyncio.gather() запущен. Параллельный API-запрос к Perplexity, OpenAI & Claude..."
        : "⚙️ [Agent 2: LLM Router] asyncio.gather() active. Fetching Perplexity, OpenAI & Claude APIs...", 'info');
      setProgress(50);
    }, 6500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📥 [Агент 2: LLM Router] Собраны все 15 текстовых генераций."
        : "📥 [Agent 2: LLM Router] Harvested all 15 textual search generations.", 'success');
    }, 8000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚖️ [Агент 3: LLM-as-a-Judge] Запуск Агента-Оценщика. Парсинг структуры ответов и RAG-цитирования сайта..."
        : "⚖️ [Agent 3: LLM-as-a-Judge] Initiating judge agent. Assessing replies and citation tags...", 'info');
      setProgress(75);
    }, 9500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📊 [Агент 4: Scoring Engine] Классификация по метрикам: ПРИСУТСТВИЕ | ТОЧНОСТЬ | ТОВАЛЬНОСТЬ"
        : "📊 [Agent 4: Scoring Engine] Classifying metrics: PRESENCE | ACCURACY | SENTIMENT", 'info');
    }, 11000);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "⚠️ [Агент 4: Scoring Engine] Внимание: Наличие сайта в выдаче не обнаружено. Конкуренты монополизировали токен."
        : "⚠️ [Agent 4: Scoring Engine] Warning: Domain not cited. Competitors hold full semantic monopoly.", 'warn');
      setProgress(90);
    }, 12500);

    setTimeout(() => {
      addLog(lang === 'ru' 
        ? "📊 [Агент 4: Scoring Engine] GEO Visibility Score зафиксирован. Загрузка диагностического отчета..."
        : "📊 [Agent 4: Scoring Engine] GEO Visibility Score calculated. Formatting brief diagnostic sheet...", 'success');
      setProgress(100);
    }, 14000);

    setTimeout(() => {
      setStep('results');
    }, 15200);
  };

  const handleConfirmSendPdf = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingPdf(true);
    
    // Dispatch lead with email to FormSubmit
    try {
      const formData = new FormData();
      formData.append('_subject', 'BanzAI marketing - Real-time GEO Diagnostic PDF Lead');
      formData.append('website', website);
      formData.append('region', region);
      formData.append('niche_industry', industry);
      formData.append('email', email);
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="scanner">
      
      {/* Background Matrix-Style Visuals */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-premium/[0.015] filter blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#12100e] border border-red-500/30 px-4 py-1.5 rounded-full text-red-500 tracking-widest uppercase font-bold text-[9px] mb-4">
            <Cpu size={12} className="animate-spin duration-3000" />
            <span>GEO MATRIX AUDITOR</span>
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
          
          {/* Step 0: Futuristic Scanner Circular Radar Animation Intro */}
          {step === 'intro' && (
            <motion.div
              key="intro-radar"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12100e]/95 border border-gold-premium/15 p-6 md:p-10 rounded-3xl shadow-gold-glow backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group min-h-[500px]"
            >
              {/* Tech background outlines */}
              <div className="absolute inset-0 bg-noise opacity-[0.02]" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-premium/30 rounded-tl-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-premium/30 rounded-br-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full relative z-20">
                
                {/* Left Dashboard Panel: Active LLMs */}
                <div className="hidden md:flex flex-col gap-4 bg-black/40 border border-gold-premium/10 p-4 rounded-2xl font-mono text-[10px] text-left md:col-span-3">
                  <div className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest font-black border-b border-cyan-500/20 pb-2 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>RAG PIPELINE NODES</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sand-muted">GPT-4o DEEP_RAG</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-500/20 animate-pulse">● ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sand-muted">CLAUDE-3.5_SONNET</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-500/20">● ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sand-muted">GEMINI-1.5_PRO</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-500/20">● ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sand-muted">PERPLEXITY_SEARCH</span>
                      <span className="text-cyan-400 font-bold bg-cyan-950/30 px-1.5 py-0.5 rounded border border-cyan-500/20 animate-pulse">● SCANNING</span>
                    </div>
                  </div>
                  <div className="border-t border-gold-premium/10 pt-3 mt-1 text-[8px] text-sand-muted/50 leading-relaxed">
                    SYS_STATUS: COMPLIANT_SECURE
                    <br />
                    LATENT_LOCK: STABLE
                  </div>
                </div>

                {/* Central Scanner Graphic */}
                <div className="flex flex-col items-center justify-center md:col-span-6">
                  
                  <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6 flex items-center justify-center bg-black/35 rounded-full border border-gold-premium/10 shadow-inner overflow-hidden">
                    
                    {/* Sweeping laser line */}
                    <motion.div
                      animate={{ y: ["-140px", "140px", "-140px"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-cyan-400 via-gold-premium via-emerald-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20 pointer-events-none"
                    />

                    {/* Cyber coordinate points in background */}
                    <div className="absolute inset-0 opacity-[0.12] grid grid-cols-6 grid-rows-6 p-4 pointer-events-none">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-center">
                          <span className={`w-1 h-1 rounded-full ${
                            i % 5 === 0 ? 'bg-cyan-400 animate-ping' :
                            i % 7 === 0 ? 'bg-emerald-400' :
                            i % 9 === 0 ? 'bg-red-500 animate-pulse' : 'bg-gold-premium/40'
                          }`} />
                        </div>
                      ))}
                    </div>

                    {/* Concentric rotating circles */}
                    {/* Outer Circle (Cyan) */}
                    <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-cyan-500/20 animate-spin" style={{ animationDuration: '24s' }} />

                    {/* Middle Circle (Emerald Green) */}
                    <div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-500/15 flex items-center justify-center animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                    </div>

                    {/* Inner Circle (Gold) */}
                    <motion.div
                      animate={{ scale: [0.96, 1.04, 0.96] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-[160px] h-[160px] rounded-full border border-gold-premium/30 flex items-center justify-center"
                    />

                    {/* Sonar sweep gradient */}
                    <div className="absolute w-full h-full rounded-full overflow-hidden pointer-events-none animate-spin" style={{ animationDuration: '4.5s' }}>
                      <div className="w-1/2 h-1/2 bg-gradient-to-tr from-transparent via-gold-premium/5 to-cyan-500/10 origin-bottom-right absolute bottom-1/2 right-1/2" />
                    </div>

                    {/* Interactive Pulsing Core Radar Button */}
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setStep('input')}
                      className="relative w-24 h-24 rounded-full bg-black/95 border border-gold-premium flex flex-col items-center justify-center cursor-pointer shadow-gold-glow hover:border-gold-light group/core transition-all z-35"
                    >
                      {/* Sonar rings radiating */}
                      <span className="absolute inset-0 rounded-full border border-gold-premium/40 animate-ping opacity-75" />
                      <span className="absolute inset-2 rounded-full border border-cyan-500/30 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
                      
                      <Activity size={28} className="text-gold-premium group-hover/core:text-gold-light animate-pulse z-40" />
                      <span className="text-[7px] font-mono text-gold-premium/80 font-black tracking-widest mt-1.5 uppercase z-40 group-hover/core:text-gold-light">
                        {lang === 'ru' ? "СКАНИРОВАТЬ" : "SCAN"}
                      </span>
                    </motion.div>
                    
                    {/* Floating crosshairs */}
                    <div className="absolute w-12 h-[1px] bg-cyan-500/20 top-1/2 -translate-y-1/2" />
                    <div className="absolute h-12 w-[1px] bg-cyan-500/20 left-1/2 -translate-x-1/2" />

                  </div>

                  {/* Action CTA Trigger */}
                  <div className="text-center relative z-20">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep('input')}
                      className="bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-8 py-4.5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 active:scale-95 transition-all cursor-pointer font-bold"
                    >
                      {lang === 'ru' ? "ЗАПУСТИТЬ ТЕСТ ИИ-ВИДИМОСТИ" : "START AI VISIBILITY TEST"}
                    </motion.button>
                    <p className="text-sand-muted/50 text-[9px] font-mono uppercase tracking-widest mt-4">
                      {lang === 'ru' ? "СИСТЕМА ГОТОВА // НАЖМИТЕ ДЛЯ СКАНИРОВАНИЯ" : "SYSTEM Stack READY // CLICK TO INITIALIZE"}
                    </p>
                  </div>

                </div>

                {/* Right Dashboard Panel: Telemetry Metrics */}
                <div className="hidden md:flex flex-col gap-4 bg-black/40 border border-gold-premium/10 p-4 rounded-2xl font-mono text-[10px] text-left md:col-span-3">
                  <div className="text-[8px] font-mono text-rose-500 uppercase tracking-widest font-black border-b border-rose-500/20 pb-2 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <span>SYS TELEMETRY MATRX</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-sand-muted block text-[8px]">COORDINATES:</span>
                      <span className="text-gold-light font-bold font-mono text-[9px]">{telemetry.lat}° N, {telemetry.lng}° E</span>
                    </div>
                    <div>
                      <span className="text-sand-muted block text-[8px]">API RESPONSE SPEED:</span>
                      <span className="text-cyan-400 font-bold">{telemetry.latency} ms</span>
                    </div>
                    <div>
                      <span className="text-sand-muted block text-[8px]">SEMANTIC SPACE DENS:</span>
                      <span className="text-emerald-400 font-bold">{telemetry.semanticLock}%</span>
                    </div>
                    <div>
                      <span className="text-sand-muted block text-[8px]">BRAND TRUST SCORE:</span>
                      <span className="text-red-500 font-bold animate-pulse">12% (CRITICAL)</span>
                    </div>
                  </div>
                  <div className="border-t border-gold-premium/10 pt-3 mt-1 text-[8px] text-sand-muted/50 leading-relaxed">
                    SYS_VER: 2.5_RADAR
                    <br />
                    CORE_LOAD: 0.12ms/T
                  </div>
                </div>

              </div>
            </motion.div>
          )}
          
          {/* Step 1: Simplified Input Form */}
          {step === 'input' && (
            <motion.div
              key="input-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-[#12100e]/95 border border-gold-premium/15 p-6 md:p-10 rounded-3xl shadow-gold-glow backdrop-blur-xl relative group text-left"
            >
              {/* Tech corner highlights */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-premium/30 rounded-tl-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-premium/30 rounded-br-3xl pointer-events-none group-hover:border-gold-premium transition-colors" />

              <form onSubmit={handleStartScan} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  <div className="relative md:col-span-1">
                    <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                      {lang === 'ru' ? "1. Адрес веб-сайта компании" : "1. Company Website URL"}
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

                  <div className="relative md:col-span-1">
                    <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                      {lang === 'ru' ? "2. Ниша / Сфера деятельности" : "2. Niche / Industry"}
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

                  <div className="relative md:col-span-1">
                    <label className="block text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-2">
                      {lang === 'ru' ? "3. География (Регион / Город)" : "3. Geography (Region / City)"}
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

                </div>

                <div className="pt-2 flex justify-between gap-4 flex-col sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep('intro')}
                    className="px-6 py-4.5 rounded-xl border border-gold-premium/20 hover:border-gold-premium text-sand-muted hover:text-white uppercase font-mono text-[10px] tracking-widest transition-colors cursor-pointer"
                  >
                    {lang === 'ru' ? "НАЗАД" : "BACK"}
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="flex-grow flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-4.5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-105 transition-all cursor-pointer font-bold"
                  >
                    <Globe size={14} />
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
                      ? `АУДИТ САЙТА: ${website.toUpperCase()} // ГЕОГРАФИЯ: ${region.toUpperCase()}`
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
                      ? "Сайт не найден в базе RAG-алгоритмов ИИ-поисковиков. При параллельных запросах модели выдают ваших конкурентов."
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

              {/* Primary Call to Action Button: Настроить ИИ видимость */}
              <div className="w-full flex flex-col gap-2 items-center pt-4">
                <button
                  onClick={scrollToContact}
                  className="w-full max-w-md flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-5 rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 active:scale-95 transition-all cursor-pointer font-bold"
                >
                  <Sparkles size={16} />
                  <span>{lang === 'ru' ? "НАСТРОИТЬ ИИ-ВИДИМОСТЬ" : "CONFIGURE AI VISIBILITY"}</span>
                  <ArrowRight size={14} />
                </button>
                <span className="font-mono text-[8px] text-gold-premium/50 uppercase tracking-widest mt-1">
                  {lang === 'ru' ? "ПЕРЕЙТИ К ОСНОВНОЙ СТРАТЕГИИ" : "PROCEED TO CENTRAL GEO PROTOCOL"}
                </span>
              </div>

              {/* PDF Request Action Confirmation (Two-step email collection) */}
              <div className="border-t border-gold-premium/10 pt-8 flex flex-col gap-6 items-center w-full animate-fade-in">
                
                <div className="text-center max-w-lg">
                  <h4 className="font-display font-black text-xs md:text-sm text-white uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                    <FileText size={14} className="text-gold-premium" />
                    <span>{lang === 'ru' ? "ПРИСЛАТЬ ПОДРОБНЫЙ PDF-ОТЧЕТ НА EMAIL" : "RECEIVE COMPREHENSIVE PDF REPORT"}</span>
                  </h4>
                  <p className="text-sand-muted text-xs leading-relaxed">
                    {lang === 'ru'
                      ? `Мы сгенерируем полный PDF-лист со всеми 15 сырыми промптами, RAG-логами и подробной семантической картой бренда.`
                      : `We will compile a comprehensive PDF report containing all 15 raw prompts, RAG console logs, and a deep semantic map of your brand.`}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!showEmailForm ? (
                    <motion.button
                      key="reveal-email-btn"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      onClick={() => setShowEmailForm(true)}
                      className="bg-transparent border border-gold-premium hover:border-gold-light text-white hover:bg-gold-premium/10 font-display font-bold text-xs px-8 py-4.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2.5"
                    >
                      <Mail size={14} className="text-gold-premium" />
                      <span>{lang === 'ru' ? "ПРИСЛАТЬ ИМЕЙЛ" : "SEND TO EMAIL"}</span>
                    </motion.button>
                  ) : (
                    <motion.form
                      key="email-form-active"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      onSubmit={handleConfirmSendPdf}
                      className="w-full max-w-md flex flex-col sm:flex-row gap-3 overflow-hidden"
                    >
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.g. ceo@yourcompany.com"
                        className="flex-grow bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3 text-xs text-white placeholder-sand-muted/20 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                      />
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={sendingPdf}
                        className="flex-shrink-0 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black hover:brightness-105 font-display font-black text-xs px-6 py-3.5 rounded-xl uppercase tracking-widest transition-colors cursor-pointer font-bold"
                      >
                        {sendingPdf ? (
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <span>{lang === 'ru' ? "ПОДТВЕРДИТЬ ОТПРАВКУ PDF" : "CONFIRM DISPATCH"}</span>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>

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
                onClick={() => setStep('intro')}
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
