"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, Terminal, Sparkles, AlertTriangle } from 'lucide-react';
import { translations } from '../translations';
import '@/lib/i18n';

interface TabData {
  id: 'realestate' | 'premium' | 'medical';
  labelRu: string;
  labelEn: string;
  queryRu: string;
  queryEn: string;
}

const TABS: TabData[] = [
  {
    id: 'realestate',
    labelRu: 'Недвижимость',
    labelEn: 'Real Estate',
    queryRu: 'ИИ, сравни ROI новостроек в Дубае и найди дистресс-сделки',
    queryEn: 'AI, compare Dubai real estate ROI and find distress deals'
  },
  {
    id: 'premium',
    labelRu: 'Премиум-услуги',
    labelEn: 'Premium Services',
    queryRu: 'Perplexity, найди VIP-консьерж сервис в Лондоне с оплатой криптой',
    queryEn: 'Perplexity, find a London VIP concierge accepting crypto payment'
  },
  {
    id: 'medical',
    labelRu: 'Медицинский туризм',
    labelEn: 'Медтуризм',
    queryEn: 'ChatGPT, where to safely get dental implants as an expat in Vietnam?',
    queryRu: 'ChatGPT, где безопасно лечить зубы экспату во Вьетнаме?'
  }
];

export const HeroSlider: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'realestate' | 'premium' | 'medical'>('realestate');
  const [typedQuery, setTypedQuery] = useState('');
  const [typedResponse, setTypedResponse] = useState('');
  const [isTypingQuery, setIsTypingQuery] = useState(true);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const autoPlayRef = useRef<boolean>(true);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active slide details
  const activeIndex = TABS.findIndex(t => t.id === activeTab);
  const currentTabInfo = TABS[activeIndex];
  const searchQuery = lang === 'ru' ? currentTabInfo.queryRu : currentTabInfo.queryEn;
  
  const rawResponse = (() => {
    if (activeTab === 'realestate') return t.hero.slider.realestate.quote;
    if (activeTab === 'premium') return t.hero.slider.premium.quote;
    return t.hero.slider.medical.quote;
  })();

  // Clear timers
  const clearTimers = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
  };

  // Run Typewriter Effect
  useEffect(() => {
    clearTimers();
    setTypedQuery('');
    setTypedResponse('');
    setIsTypingQuery(true);
    setIsAnalyzing(false);
    setIsTypingResponse(false);

    let queryCharIndex = 0;
    
    // Type query
    typingTimerRef.current = setInterval(() => {
      if (queryCharIndex < searchQuery.length) {
        setTypedQuery(searchQuery.substring(0, queryCharIndex + 1));
        queryCharIndex++;
      } else {
        clearTimers();
        setIsTypingQuery(false);
        setIsAnalyzing(true);

        // Simulate Neural Network Thinking...
        setTimeout(() => {
          setIsAnalyzing(false);
          setIsTypingResponse(true);
          let responseCharIndex = 0;

          // Type response
          typingTimerRef.current = setInterval(() => {
            if (responseCharIndex < rawResponse.length) {
              setTypedResponse(rawResponse.substring(0, responseCharIndex + 1));
              responseCharIndex++;
            } else {
              clearTimers();
              setIsTypingResponse(false);
            }
          }, 15);
        }, 1200);
      }
    }, 30);

    return () => clearTimers();
  }, [activeTab, searchQuery, rawResponse]);

  // Autoplay handler
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveTab(prev => {
          if (prev === 'realestate') return 'premium';
          if (prev === 'premium') return 'medical';
          return 'realestate';
        });
      }
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tabId: 'realestate' | 'premium' | 'medical') => {
    autoPlayRef.current = false; // Pause autoplay on user click
    setActiveTab(tabId);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tickerText = lang === 'ru'
    ? "ТРЕНД 2026 Г. ПОЛУЧАЙТЕ КЛИЕНТОВ БЕСПЛАТНО ИЗ НЕЙРОСЕТЕЙ С ПОМОЩЬЮ НОВОГО ГЕНЕРАТИВНОГО AI-SEO: GENERATIVE ENGINE OPTIMIZATION // "
    : lang === 'vi'
    ? "XU HƯỚNG 2026 // NHẬN KHÁCH HÀNG MIỄN PHÍ TỪ MẠNG NƠ-RON VỚI AI-SEO TẠO SINH MỚI: GENERATIVE ENGINE OPTIMIZATION // "
    : "TREND 2026 // GET CLIENTS FOR FREE FROM NEURAL NETWORKS WITH THE NEW GENERATIVE AI-SEO: GENERATIVE ENGINE OPTIMIZATION // ";
  const doubleTicker = tickerText + tickerText + tickerText;

  return (
    <section className="relative w-full min-h-screen py-24 md:py-36 px-6 flex items-center justify-center bg-bg-dubai bg-dubai-gold-radial overflow-hidden border-b border-gold-premium/20">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />

      {/* Premium background visual overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.18] mix-blend-screen"
        style={{ backgroundImage: "url('/assets/dubai_geo_premium.png')" }}
      />

      {/* Decorative Golden Dust/Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

      {/* Animated glowing neural brain background image — ambient only, no motion transforms */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[55%] h-[90%] opacity-[0.18] mix-blend-screen"
          style={{ backgroundImage: "url('/assets/neural_brain_premium.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center right' }}
        />
        {/* Pulse rings — opacity only, no scale/translate to prevent reflow */}
        <motion.div
          animate={{ opacity: [0.12, 0, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[20%] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold-premium/30 pointer-events-none"
          style={{ willChange: 'opacity' }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute right-[15%] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cyan-500/15 pointer-events-none"
          style={{ willChange: 'opacity' }}
        />
      </div>

      {/* Glowing Golden Orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-dark/10 filter blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-premium/5 filter blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading and Subtitle */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8 text-left">
          
          <div className="inline-flex items-center gap-2 text-gold-premium uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold border-l-2 border-gold-premium pl-3 bg-gold-dark/5 py-1.5 pr-4 w-fit rounded-r-md">
            <Sparkles size={12} className="animate-spin duration-3000" />
            <span>Generative Engine Optimization (GEO)</span>
          </div>

          {/* Red Infinite Running Line featuring the H1 Warning Text */}
          <div className="w-full bg-red-600/90 py-3 shadow-[0_0_20px_rgba(220,38,38,0.55)] border-y border-red-500 overflow-hidden select-none rounded-xl relative z-10 flex">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="whitespace-nowrap flex gap-4 uppercase font-mono text-[9px] md:text-[10px] font-black tracking-[0.2em] text-white"
            >
              <span>{doubleTicker}</span>
            </motion.div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight text-white tracking-tight drop-shadow-2xl">
            {t.hero.h1}
          </h1>

          {/* NEW: Red-styled urgent body copy about AI searching for solutions */}
          <div className="relative border-l-2 border-red-500 pl-4 py-2 bg-red-950/10 rounded-r-xl">
            <div className="flex items-center gap-1.5 text-red-500 font-mono text-[8px] uppercase tracking-widest font-black mb-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"
              />
              <span>{lang === 'ru' ? 'КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ' : lang === 'vi' ? 'CẢNH BÁO QUAN TRỌNG' : 'CRITICAL ALERT'}</span>
            </div>
            <p className="text-red-400/90 text-sm md:text-base leading-relaxed font-display font-semibold">
              {t.hero.body}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={scrollToContact}
              className="group flex items-center justify-center bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-4 md:px-10 md:py-4.5 rounded-full transition-all uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <span className="mr-2">{t.hero.cta}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* Right Column: Animated Neural Brain Graphic + AI Terminal */}
        <div className="lg:col-span-6 flex flex-col w-full gap-4">

          {/* Premium Neural Brain Image Block — fully GPU-accelerated, no layout-triggering animations */}
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-gold-premium/15 shadow-gold-glow bg-black/80"
            style={{ aspectRatio: '4/3', transform: 'translateZ(0)' }}
          >
            {/* Neural brain image — static, no hover scale to prevent jitter */}
            <img
              src="/assets/neural_brain_premium.png"
              alt="AI Neural Network Brain - GEO Intelligence"
              className="w-full h-full object-cover opacity-90"
              style={{ display: 'block', willChange: 'auto' }}
            />

            {/* Pulsing gold glow overlay — opacity only, GPU composited */}
            <motion.div
              animate={{ opacity: [0.12, 0.30, 0.12] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-gold-dark/30 via-transparent to-cyan-900/20 pointer-events-none"
              style={{ willChange: 'opacity' }}
            />

            {/* Animated sweeping scanner line — px values only, GPU layer */}
            <motion.div
              animate={{ y: [-280, 280] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/90 to-transparent shadow-[0_0_14px_rgba(6,182,212,0.9)] pointer-events-none"
              style={{ willChange: 'transform', top: '50%' }}
            />

            {/* Top-left HUD tag */}
            <div className="absolute top-3 left-3 z-20 bg-black/80 border border-gold-premium/30 px-3 py-1 rounded-full font-mono text-[7px] text-gold-light tracking-widest uppercase font-bold flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-gold-premium flex-shrink-0"
                style={{ willChange: 'opacity' }}
              />
              <span>NEURAL COGNITION ENGINE: ACTIVE</span>
            </div>

            {/* Bottom-right metric strip */}
            <div className="absolute bottom-3 right-3 z-20 bg-black/85 border border-cyan-500/20 px-3 py-1.5 rounded-lg font-mono text-[7px] uppercase tracking-widest flex flex-col items-end gap-0.5">
              <span className="text-cyan-400 font-bold">SEMANTIC DENSITY: 94.6%</span>
              <span className="text-red-500 font-bold animate-pulse">BRAND RAG SCORE: 12% — CRITICAL</span>
            </div>

            {/* Floating particles — px values, GPU isolated */}
            <motion.span
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-[20%] w-2 h-2 rounded-full bg-gold-premium/60 shadow-[0_0_6px_#c5a880] pointer-events-none"
              style={{ willChange: 'transform' }}
            />
            <motion.span
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_6px_rgba(6,182,212,0.8)] pointer-events-none"
              style={{ willChange: 'transform' }}
            />
            <motion.span
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-emerald-400/60 pointer-events-none"
              style={{ willChange: 'transform' }}
            />

            {/* Tech Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-premium pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-premium pointer-events-none" />
          </div>

          {/* Tab Selector */}
          <div className="flex bg-[#12100e]/70 border border-gold-premium/10 rounded-t-2xl p-1 gap-1 overflow-x-auto no-scrollbar relative z-20">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-1 text-center py-2.5 px-3 rounded-xl font-display text-[10px] md:text-xs tracking-wider uppercase font-semibold transition-all duration-300 min-w-[100px] cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gold-premium text-black shadow-md font-bold'
                    : 'text-sand-muted hover:text-white hover:bg-gold-premium/5'
                }`}
              >
                {lang === 'ru' ? tab.labelRu : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Simulated AI Console Window */}
          <div className="w-full bg-[#12100e]/95 border-x border-b border-gold-premium/15 rounded-b-2xl p-6 md:p-8 shadow-gold-glow backdrop-blur-xl relative min-h-[340px] flex flex-col justify-between group">
            
            {/* Blinking glow indicators top-right */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-60">
              <span className="w-2 h-2 rounded-full bg-gold-premium animate-pulse" />
              <span className="text-[8px] font-mono text-gold-premium tracking-widest uppercase">
                LLM RAG CONSOLE
              </span>
            </div>

            {/* Chat Content Panel */}
            <div className="flex flex-col gap-6 w-full flex-grow">
              
              {/* Question / Input Prompt */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gold-dark/20 border border-gold-premium/30 flex items-center justify-center flex-shrink-0">
                  <Search size={12} className="text-gold-light" />
                </div>
                <div className="bg-black/40 border border-gold-premium/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                  <p className="text-white text-xs md:text-sm font-mono leading-relaxed min-h-[1.5em] flex items-center">
                    {typedQuery}
                    {isTypingQuery && (
                      <span className="w-1.5 h-4 bg-gold-light ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              </div>

              {/* RAG Search Loader */}
              <AnimatePresence>
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3 items-center text-gold-premium/80 font-mono text-[9px] md:text-[10px] tracking-widest uppercase pl-11"
                  >
                    <Terminal size={12} className="animate-pulse" />
                    <span>Analyzing Latent Space & Knowledge Graphs...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AI Answer Response */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gold-premium flex items-center justify-center flex-shrink-0 shadow-gold-glow">
                  <Sparkles size={12} className="text-black" />
                </div>
                
                <div className="bg-gold-premium/5 border border-gold-premium/20 rounded-2xl rounded-tl-none px-5 py-4 max-w-[85%] shadow-inner flex flex-col gap-3">
                  
                  {/* Warning label to strike FOMO */}
                  <div className="flex items-center gap-1.5 text-red-500/80 font-display text-[9px] font-bold uppercase tracking-wider">
                    <AlertTriangle size={10} />
                    <span>SYSTEM COMPLIANCE RISK</span>
                  </div>

                  <p className="text-gold-light/95 text-xs md:text-sm font-display font-medium leading-relaxed min-h-[3em]">
                    {typedResponse}
                    {isTypingResponse && (
                      <span className="inline-block w-1.5 h-3.5 bg-gold-premium ml-0.5 animate-pulse" />
                    )}
                  </p>
                </div>
              </div>

            </div>

            {/* Small footnote inside the console */}
            <div className="mt-8 pt-4 border-t border-gold-premium/5 flex justify-between items-center text-[8px] md:text-[9px] font-mono text-sand-muted/50 tracking-wider">
              <span>RAG RETRIEVAL: ACTIVE</span>
              <span>GEO MARKUP v1.6</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
