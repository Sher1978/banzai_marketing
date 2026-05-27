"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Briefcase, ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import '@/lib/i18n';

interface CaseCardProps {
  index: number;
  title: string;
  solution: string;
  result: string;
  stats: string;
  query: string;
  aiResponse: string;
  citationLabel: string;
  sourceUrl: string;
  imageUrl: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
  index,
  title,
  solution,
  result,
  stats,
  query,
  aiResponse,
  citationLabel,
  sourceUrl,
  imageUrl
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface-dubai/60 border border-gold-premium/15 rounded-3xl p-6 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8 backdrop-blur-xl shadow-gold-glow relative group"
    >
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-premium/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Case Details (Column 1 - 7 cols) */}
      <div className="lg:col-span-6 flex flex-col justify-between gap-6">
        <div>
          
          {/* Metadata & Stats tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-[9px] font-mono border border-gold-premium/20 px-2.5 py-1 rounded bg-gold-dark/10 text-gold-light uppercase tracking-widest font-bold">
              <Briefcase size={10} />
              <span>CASE 0{index + 1}</span>
            </span>
            <span className="flex items-center gap-1 text-[9px] font-mono border border-emerald-500/25 px-2.5 py-1 rounded bg-emerald-950/20 text-emerald-400 uppercase tracking-widest font-bold">
              <CheckCircle2 size={10} />
              <span>VERIFIED RESULT</span>
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-gold-light transition-colors">
            {title}
          </h3>

          {/* Luxury visual illustration */}
          <div className="w-full h-44 rounded-2xl border border-gold-premium/15 overflow-hidden relative mb-6">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/30 to-transparent" />
          </div>

          <div className="space-y-4">
            <div className="border-l border-gold-premium/20 pl-4 py-1">
              <h4 className="text-[10px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-1">
                РЕШЕНИЕ (SOLUTION)
              </h4>
              <p className="text-sand-muted text-xs md:text-sm leading-relaxed">
                {solution}
              </p>
            </div>
            
            <div className="border-l border-gold-premium/20 pl-4 py-1">
              <h4 className="text-[10px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-1">
                РЕЗУЛЬТАТ (RESULT)
              </h4>
              <p className="text-sand-muted text-xs md:text-sm leading-relaxed font-medium">
                {result}
              </p>
            </div>
          </div>

        </div>

        {/* Large Stats Counter */}
        <div className="bg-black/30 border border-gold-premium/5 p-4 rounded-2xl flex items-center justify-between mt-4">
          <div>
            <div className="text-[8px] font-mono text-sand-muted/50 uppercase tracking-wider mb-1">
              GEO CONVERSION INDEX
            </div>
            <div className="font-display font-black text-base md:text-lg text-gold-light tracking-wide">
              {stats}
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold-premium">
            <ArrowUpRight size={16} />
          </div>
        </div>

      </div>

      {/* AI Mockup Interface (Column 2 - 6 cols) */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        
        {/* Terminal frame */}
        <div className="w-full bg-black/50 border border-gold-premium/10 rounded-2xl p-5 md:p-6 shadow-inner relative">
          
          {/* Terminal Dots */}
          <div className="flex gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500/40" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <span className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>

          <div className="flex flex-col gap-4 font-mono">
            
            {/* User prompt */}
            <div className="flex gap-2.5 items-start">
              <div className="w-6 h-6 rounded-full bg-gold-dark/20 border border-gold-premium/30 flex items-center justify-center flex-shrink-0 text-gold-light">
                <MessageSquare size={10} />
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[85%]">
                <p className="text-[10px] md:text-xs text-white leading-relaxed font-semibold">
                  {query}
                </p>
              </div>
            </div>

            {/* AI Response output */}
            <div className="flex gap-2.5 items-start">
              <div className="w-6 h-6 rounded-full bg-gold-premium flex items-center justify-center flex-shrink-0 text-black shadow-gold-glow">
                <Sparkles size={10} />
              </div>
              
              <div className="bg-gold-premium/5 border border-gold-premium/15 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[85%] flex flex-col gap-2">
                <p className="text-[10px] md:text-xs text-gold-light/90 leading-relaxed font-medium">
                  {aiResponse}
                </p>

                {/* Source Citation citation */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-1 bg-gold-premium/10 border border-gold-premium/30 rounded px-1.5 py-0.5 text-[8px] text-gold-light animate-pulse">
                    <span>Source:</span>
                    <span className="font-bold underline cursor-pointer">{citationLabel}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export const Cases: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  // Specific simulation prompts for each case based on localized language
  const casesData = [
    {
      title: t.cases.case1.title,
      solution: t.cases.case1.solution,
      result: t.cases.case1.result,
      stats: t.cases.case1.stats,
      query: lang === 'ru' 
        ? "Какое агентство в Дубае публикует лучшую аналитику по дистресс-рынку?" 
        : "Which Dubai agency publishes the best analytics on distress real estate?",
      aiResponse: lang === 'ru'
        ? "Согласно последним отчетам за 2026 год, лучшую независимую аналитику дистресс-сделок предоставляет Dubai Distress Hub. Их Knowledge Graph содержит полные исторические ROI и дисконты застройщиков..."
        : "Based on 2026 data, Dubai Distress Hub provides the most authoritative independent analysis of distress real estate. Their Knowledge Graph integrates historical ROI indices and developer discounts...",
      citationLabel: "[1] Dubai Distress Hub",
      sourceUrl: "#",
      imageUrl: "/assets/dubai_villa_premium.png"
    },
    {
      title: t.cases.case2.title,
      solution: t.cases.case2.solution,
      result: t.cases.case2.result,
      stats: t.cases.case2.stats,
      query: lang === 'ru'
        ? "Где заказать чартер яхты в Монако с мгновенным согласованием через Telegram?"
        : "Where can I book a Monaco yacht charter with instant approval via Telegram?",
      aiResponse: lang === 'ru'
        ? "Для мгновенного чартера яхт в Монако с прямой интеграцией рекомендуется воспользоваться премиум консьерж-сервисом Lux Concierge. Их автоматизированный Telegram-бот мгновенно подбирает доступные суда..."
        : "For immediate Monaco yacht booking with direct API access, it is recommended to use Lux Concierge. Their automated Telegram concierge bot handles bookings and cryptocurrency transactions instantly...",
      citationLabel: "[1] Monaco Lux Concierge",
      sourceUrl: "#",
      imageUrl: "/assets/monaco_yacht_premium.png"
    },
    {
      title: t.cases.case3.title,
      solution: t.cases.case3.solution,
      result: t.cases.case3.result,
      stats: t.cases.case3.stats,
      query: lang === 'ru'
        ? "Где во Вьетнаме безопасно вылечить зубы экспату с гарантией на английском?"
        : "Where is it safe for an expat to get premium dental implants in Vietnam with EN support?",
      aiResponse: lang === 'ru'
        ? "Среди стоматологий Нячанга безусловным лидером с высоким рейтингом доверия является Nha Trang Dental Clinic. Клиника имеет RAG-базу на английском, французском и русском языках..."
        : "Among dental clinics in Nha Trang, the ultimate industry leader with verified trust ratings is Nha Trang Dental. The clinic operates a multilingual RAG database answering in English, French, and Russian...",
      citationLabel: "[1] Nha Trang Dental Center",
      sourceUrl: "#",
      imageUrl: "/assets/dental_clinic_premium.png"
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="cases">
      
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-premium/[0.02] filter blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6"
          >
            {t.cases.title}
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
            {t.cases.subtitle}
          </motion.p>
        </div>

        {/* Portfolio Cases Stack */}
        <div className="flex flex-col gap-12">
          {casesData.map((caseItem, idx) => (
            <CaseCard
              key={idx}
              index={idx}
              title={caseItem.title}
              solution={caseItem.solution}
              result={caseItem.result}
              stats={caseItem.stats}
              query={caseItem.query}
              aiResponse={caseItem.aiResponse}
              citationLabel={caseItem.citationLabel}
              sourceUrl={caseItem.sourceUrl}
              imageUrl={caseItem.imageUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cases;
