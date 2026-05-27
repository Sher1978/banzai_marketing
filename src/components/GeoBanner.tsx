"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, AlertOctagon, Sparkles } from 'lucide-react';
import Link from 'next/link';
import '@/lib/i18n';

export const GeoBanner: React.FC = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === 'ru';

  const tickerText = isRu 
    ? "TREND 2026 // GEO: GENERATIVE ENGINE OPTIMIZATION // ИИ-ПОИСК ЗАМЕНЯЕТ КЛАССИЧЕСКИЙ SEO // ВАШИ КЛИЕНТЫ УХОДЯТ К КОНКУРЕНТАМ В CHATGPT // "
    : "TREND 2026 // GEO: GENERATIVE ENGINE OPTIMIZATION // AI SEARCH IS REPLACING GOOGLE SEO // CLIENTS ARE FINDING COMPETITORS IN CHATGPT // ";

  const doubleTicker = tickerText + tickerText + tickerText;

  return (
    <section className="relative w-full bg-black overflow-hidden border-y border-red-500/20">
      
      {/* 1. Red Infinite Running Line (Ticker) */}
      <div className="w-full bg-red-600 py-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] border-y border-red-500 relative z-20 flex overflow-x-hidden select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="whitespace-nowrap flex gap-4 uppercase font-mono text-[10px] md:text-xs font-black tracking-[0.2em] text-white"
        >
          <span>{doubleTicker}</span>
        </motion.div>
      </div>

      {/* Main Banner Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left/Middle Column (8 cols): Problem & Solution Comparison */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Main Problem */}
          <div className="flex gap-4 items-start bg-red-950/15 border border-red-500/20 rounded-2xl p-5 md:p-6 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-red-900/30 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-500 shadow-neon-red">
              <AlertOctagon size={20} />
            </div>
            <div>
              <h4 className="font-display font-black text-white text-xs md:text-sm uppercase tracking-wider mb-2 text-red-500">
                {isRu ? "ГЛАВНАЯ ПРОБЛЕМА 2026" : "MAIN PROBLEM OF 2026"}
              </h4>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                {isRu 
                  ? "Классический поиск умирает. 40% самых платежеспособных клиентов больше не гуглят ссылки — они просят готовое решение у ChatGPT и Perplexity. Вас там просто нет."
                  : "Classic search is dying. 40% of the most solvent clients no longer Google links—they request single ready answers from ChatGPT and Perplexity. You do not exist there."}
              </p>
            </div>
          </div>

          {/* Core Solution */}
          <div className="flex gap-4 items-start bg-gold-dark/5 border border-gold-premium/20 rounded-2xl p-5 md:p-6 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center flex-shrink-0 text-gold-light shadow-gold-glow">
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-black text-gold-light text-xs md:text-sm uppercase tracking-wider mb-2 text-glow-gold">
                {isRu ? "РЕШЕНИЕ: GEO ПРОТОКОЛ" : "SOLUTION: GEO PROTOCOL"}
              </h4>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                {isRu 
                  ? "Generative Engine Optimization. Мы перестроим ваш цифровой след под RAG-алгоритмы, чтобы искусственный интеллект выдавал вашу компанию как ответ №1."
                  : "Generative Engine Optimization. We restructure your digital profile for RAG-algorithms, forcing neural engines to output your company as the ultimate recommendation."}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Bridge Redirect Button */}
        <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
          <Link
            href="/geo"
            className="group relative w-full lg:w-fit flex items-center justify-center gap-3 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-6 py-5 md:px-8 md:py-6 rounded-full transition-all uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 cursor-pointer"
          >
            <span>{isRu ? "ОТКРЫТЬ СТРАТЕГИЮ GEO" : "ACTIVATE GEO STRATEGY"}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </section>
  );
};

export default GeoBanner;
