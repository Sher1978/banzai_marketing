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
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight text-white tracking-tight drop-shadow-2xl">
            {t.hero.h1}
          </h1>

          <p className="text-sand-muted text-sm md:text-base lg:text-lg leading-relaxed font-normal">
            {t.hero.body}
          </p>

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

        {/* Right Column: AI Interactive Terminal Screen */}
        <div className="lg:col-span-6 flex flex-col w-full">
          
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
