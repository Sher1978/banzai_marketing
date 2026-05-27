"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Database, Cpu, Award, Zap } from 'lucide-react';
import '@/lib/i18n';

export const Technology: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  // SVG for Step 1: Knowledge Graph (Interconnected nodes)
  const renderKnowledgeGraphSVG = () => (
    <svg className="w-full h-40 text-gold-premium/40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="60" r="16" className="stroke-gold-premium stroke-2 fill-black/60" />
      <circle cx="40" cy="30" r="10" className="stroke-gold-dark stroke-2 fill-black/60" />
      <circle cx="160" cy="30" r="10" className="stroke-gold-dark stroke-2 fill-black/60" />
      <circle cx="40" cy="90" r="10" className="stroke-gold-dark stroke-2 fill-black/60" />
      <circle cx="160" cy="90" r="10" className="stroke-gold-dark stroke-2 fill-black/60" />
      
      {/* Connector lines */}
      <line x1="50" y1="35" x2="86" y2="52" className="stroke-gold-premium/30 stroke-1" strokeDasharray="3 3" />
      <line x1="150" y1="35" x2="114" y2="52" className="stroke-gold-premium/30 stroke-1" strokeDasharray="3 3" />
      <line x1="50" y1="85" x2="86" y2="68" className="stroke-gold-premium/30 stroke-1" strokeDasharray="3 3" />
      <line x1="150" y1="85" x2="114" y2="68" className="stroke-gold-premium/30 stroke-1" strokeDasharray="3 3" />
      
      <line x1="40" y1="40" x2="40" y2="80" className="stroke-gold-premium/10 stroke-1" />
      <line x1="160" y1="40" x2="160" y2="80" className="stroke-gold-premium/10 stroke-1" />

      {/* Core pulses */}
      <circle cx="100" cy="60" r="6" className="fill-gold-light animate-pulse" />
      <circle cx="40" cy="30" r="3" className="fill-gold-premium" />
      <circle cx="160" cy="30" r="3" className="fill-gold-premium" />
      <circle cx="40" cy="90" r="3" className="fill-gold-premium" />
      <circle cx="160" cy="90" r="3" className="fill-gold-premium" />
      
      {/* Technical Labels */}
      <text x="100" y="62" className="fill-gold-light font-mono font-bold text-[6px]" textAnchor="middle">CORE</text>
      <text x="40" y="32" className="fill-gold-premium/80 font-mono text-[4px]" textAnchor="middle">DATA</text>
      <text x="160" y="32" className="fill-gold-premium/80 font-mono text-[4px]" textAnchor="middle">KPI</text>
      <text x="40" y="92" className="fill-gold-premium/80 font-mono text-[4px]" textAnchor="middle">ROI</text>
      <text x="160" y="92" className="fill-gold-premium/80 font-mono text-[4px]" textAnchor="middle">TRUST</text>
    </svg>
  );

  // SVG for Step 2: RAG (Retrieval scan chunking)
  const renderRAGSVG = () => (
    <svg className="w-full h-40 text-gold-premium/40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* File chunks */}
      <rect x="20" y="25" width="40" height="30" rx="3" className="stroke-gold-dark stroke-1 fill-black/60" />
      <rect x="80" y="25" width="40" height="30" rx="3" className="stroke-gold-premium stroke-2 fill-black/60" />
      <rect x="140" y="25" width="40" height="30" rx="3" className="stroke-gold-dark stroke-1 fill-black/60" />

      {/* Grid search scanlines */}
      <line x1="85" y1="35" x2="115" y2="35" className="stroke-gold-premium stroke-1" />
      <line x1="85" y1="45" x2="105" y2="45" className="stroke-gold-premium stroke-1" />
      
      {/* Retrieval Vector Scanner */}
      <path d="M 100 85 L 100 55" className="stroke-gold-light stroke-2 animate-bounce" />
      <circle cx="100" cy="85" r="14" className="stroke-gold-light stroke-1.5 fill-black/80" />
      <circle cx="100" cy="85" r="4" className="fill-gold-light" />
      
      <path d="M 90 85 A 10 10 0 0 1 110 85" className="stroke-gold-premium/40 stroke-1" />

      <text x="100" y="110" className="fill-gold-premium font-mono text-[6px]" textAnchor="middle">VECTOR RETRIEVER</text>
      <text x="40" y="65" className="fill-sand-muted/50 font-mono text-[4px]" textAnchor="middle">CHUNK_A</text>
      <text x="100" y="65" className="fill-gold-light font-mono text-[4px]" textAnchor="middle">SEMANTIC_MATCH</text>
      <text x="160" y="65" className="fill-sand-muted/50 font-mono text-[4px]" textAnchor="middle">CHUNK_C</text>
    </svg>
  );

  // SVG for Step 3: Citation (ChatGPT answers)
  const renderCitationSVG = () => (
    <svg className="w-full h-40 text-gold-premium/40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="170" height="80" rx="6" className="stroke-gold-premium/30 stroke-1 fill-black/80 shadow-2xl" />
      
      {/* Bot Chat Bubble header */}
      <circle cx="35" cy="40" r="8" className="fill-gold-premium" />
      <path d="M 33 40 L 37 40 M 35 38 L 35 42" className="stroke-black stroke-1" />
      
      <rect x="52" y="32" width="120" height="50" rx="4" className="stroke-gold-premium/15 fill-gold-premium/5" />
      
      <line x1="62" y1="42" x2="162" y2="42" className="stroke-white/80 stroke-1" />
      <line x1="62" y1="50" x2="162" y2="50" className="stroke-white/80 stroke-1" />
      <line x1="62" y1="58" x2="122" y2="58" className="stroke-white/80 stroke-1" />
      
      {/* Gold Citation link */}
      <rect x="127" y="54" width="35" height="10" rx="2" className="stroke-gold-premium stroke-1 fill-gold-dark/20 animate-pulse" />
      <text x="144" y="61" className="fill-gold-light font-mono font-black text-[5.5px]" textAnchor="middle">[1] BanzAI marketing</text>

      <text x="100" y="112" className="fill-gold-light font-mono tracking-widest text-[5px]" textAnchor="middle">GROUND TRUTH INJECTION</text>
    </svg>
  );

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="tech">
      
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-premium/[0.02] filter blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6"
          >
            {t.tech.title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sand-muted text-sm md:text-base lg:text-lg leading-relaxed font-normal text-balance"
          >
            {t.tech.subtitle}
          </motion.p>
        </div>

        {/* 3 Step Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-surface-dubai/50 border border-gold-premium/15 hover:border-gold-premium/40 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-md transition-all duration-300 group flex flex-col justify-between min-h-[460px]"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-3xl md:text-4xl font-black text-gold-premium/30 group-hover:text-gold-light transition-colors">
                  {t.tech.steps[0].num}
                </span>
                <div className="w-10 h-10 rounded-full bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center text-gold-premium group-hover:bg-gold-premium group-hover:text-black transition-all duration-300">
                  <Database size={18} />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-display font-black text-white mb-4 uppercase tracking-wide group-hover:text-gold-light transition-colors">
                {t.tech.steps[0].title}
              </h3>
              
              <p className="text-sand-muted/80 text-xs md:text-sm leading-relaxed mb-6 font-display font-medium">
                {t.tech.steps[0].text}
              </p>
            </div>

            <div className="w-full bg-black/40 rounded-xl p-4 border border-gold-premium/5 shadow-inner">
              {renderKnowledgeGraphSVG()}
              <div className="text-[8px] font-mono text-gold-premium/50 text-center tracking-widest uppercase mt-2">
                SYSTEM: {t.tech.steps[0].tech}
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-surface-dubai/50 border border-gold-premium/15 hover:border-gold-premium/40 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-md transition-all duration-300 group flex flex-col justify-between min-h-[460px]"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-3xl md:text-4xl font-black text-gold-premium/30 group-hover:text-gold-light transition-colors">
                  {t.tech.steps[1].num}
                </span>
                <div className="w-10 h-10 rounded-full bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center text-gold-premium group-hover:bg-gold-premium group-hover:text-black transition-all duration-300">
                  <Cpu size={18} />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-display font-black text-white mb-4 uppercase tracking-wide group-hover:text-gold-light transition-colors">
                {t.tech.steps[1].title}
              </h3>
              
              <p className="text-sand-muted/80 text-xs md:text-sm leading-relaxed mb-6 font-display font-medium">
                {t.tech.steps[1].text}
              </p>
            </div>

            <div className="w-full bg-black/40 rounded-xl p-4 border border-gold-premium/5 shadow-inner">
              {renderRAGSVG()}
              <div className="text-[8px] font-mono text-gold-premium/50 text-center tracking-widest uppercase mt-2">
                SYSTEM: {t.tech.steps[1].tech}
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="bg-surface-dubai/50 border border-gold-premium/15 hover:border-gold-premium/40 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-md transition-all duration-300 group flex flex-col justify-between min-h-[460px]"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-3xl md:text-4xl font-black text-gold-premium/30 group-hover:text-gold-light transition-colors">
                  {t.tech.steps[2].num}
                </span>
                <div className="w-10 h-10 rounded-full bg-gold-premium/5 border border-gold-premium/20 flex items-center justify-center text-gold-premium group-hover:bg-gold-premium group-hover:text-black transition-all duration-300">
                  <Award size={18} />
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-display font-black text-white mb-4 uppercase tracking-wide group-hover:text-gold-light transition-colors">
                {t.tech.steps[2].title}
              </h3>
              
              <p className="text-sand-muted/80 text-xs md:text-sm leading-relaxed mb-6 font-display font-medium">
                {t.tech.steps[2].text}
              </p>
            </div>

            <div className="w-full bg-black/40 rounded-xl p-4 border border-gold-premium/5 shadow-inner">
              {renderCitationSVG()}
              <div className="text-[8px] font-mono text-gold-premium/50 text-center tracking-widest uppercase mt-2">
                SYSTEM: {t.tech.steps[2].tech}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Micro-annotation badge below the grid */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#12100e] border border-gold-premium/10 px-5 py-2.5 rounded-full text-glow-gold">
            <Zap size={14} className="text-gold-light" />
            <span className="font-mono text-[9px] md:text-[10px] text-gold-light tracking-widest uppercase font-bold">
              GENERATIVE VALUE: ORGANIC CONVERSION DOMINANCE PROTOCOL
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;
