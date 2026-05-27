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
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column (7 cols): Header, Cards & Main CTA Button */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 bg-[#12100e] border border-red-500/30 px-3.5 py-1.5 rounded-full text-red-500 tracking-widest uppercase font-bold text-[9px] w-fit">
            <Sparkles size={12} className="animate-pulse" />
            <span>GEO SEARCH INTELLIGENCE // TREND 2026</span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight leading-tight">
            {isRu ? "ИИ-ПОИСК ВЫТЕСНЯЕТ ОБЫЧНЫЙ GOOGLE И ЯНДЕКС" : "AI SEARCH IS PHASING OUT CLASSIC GOOGLE SEO"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            {/* Main Problem */}
            <div className="flex gap-4 items-start bg-red-950/10 border border-red-500/15 rounded-2xl p-5 backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-red-900/30 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-500 shadow-neon-red">
                <AlertOctagon size={18} />
              </div>
              <div>
                <h4 className="font-display font-black text-white text-[11px] uppercase tracking-wider mb-1.5 text-red-500">
                  {isRu ? "ГЛАВНАЯ УГРОЗА 2026" : "MAIN THREAT OF 2026"}
                </h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  {isRu 
                    ? "Покупатели больше не гуглят ссылки. 40% VIP-клиентов просят готовое решение у ChatGPT и Perplexity. Если вас там нет — они уходят к конкурентам."
                    : "Buyers no longer Google links. 40% of VIP clients request direct recommendations from ChatGPT and Perplexity. If you're missing, they buy from competitors."}
                </p>
              </div>
            </div>

            {/* Core Solution */}
            <div className="flex gap-4 items-start bg-gold-dark/5 border border-gold-premium/15 rounded-2xl p-5 backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center flex-shrink-0 text-gold-light shadow-gold-glow">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <div>
                <h4 className="font-display font-black text-gold-light text-[11px] uppercase tracking-wider mb-1.5 text-glow-gold">
                  {isRu ? "РЕШЕНИЕ: GEO ПРОТОКОЛ" : "SOLUTION: GEO PROTOCOL"}
                </h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  {isRu 
                    ? "Мы перенастроим ваш цифровой след под RAG-алгоритмы, гарантируя, что искусственный интеллект порекомендует именно вас от лица BanzAI marketing."
                    : "We reconstruct your digital footprints for RAG-schemas, forcing AI neural search nodes to output your company as the top recommendation."}
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA Link inside left column */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/geo"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm px-8 py-4.5 rounded-xl transition-all uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 cursor-pointer font-bold"
            >
              <span>{isRu ? "ОТКРЫТЬ СТРАТЕГИЮ GEO" : "ACTIVATE GEO STRATEGY"}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="font-mono text-[8px] text-sand-muted/50 uppercase tracking-widest sm:ml-2">
              {isRu ? "БЕСПЛАТНЫЙ ЭКСПРЕСС-АНАЛИЗ САЙТА ЗА 15 СЕКУНД" : "FREE 15-SECOND AI WEB SCANNING ENABLED"}
            </span>
          </div>
        </div>

        {/* Right Column (5 cols): Gorgeous High-tech Cyberpunk Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 relative group w-full"
        >
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-gold-premium/20 overflow-hidden bg-black/60 shadow-gold-glow p-2 flex items-center justify-center">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-dark/20 to-cyan-500/20 blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

            {/* High-fidelity generated illustration image */}
            <img
              src="/assets/dubai_geo_premium.png"
              alt="BanzAI Premium GEO Analysis Illustration"
              className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            {/* Technical overlay HUD elements */}
            <div className="absolute top-4 left-4 z-20 bg-black/85 border border-gold-premium/30 px-3 py-1 rounded-full text-gold-light font-mono text-[7px] md:text-[8px] tracking-widest uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-premium animate-pulse" />
              <span>SYS_GEO_SCANNER: ONLINE</span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 bg-black/90 border border-red-500/30 px-3 py-1.5 rounded-lg text-white font-mono text-[7px] tracking-widest uppercase font-bold flex flex-col gap-0.5 items-end">
              <span className="text-red-500 font-black">AI SEARCH ENGINE COGNITION</span>
              <span className="text-[9px] text-glow-gold text-gold-premium">GEO MULTI-RAG SECURE</span>
            </div>

            {/* Tech Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-premium pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-premium pointer-events-none" />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default GeoBanner;
