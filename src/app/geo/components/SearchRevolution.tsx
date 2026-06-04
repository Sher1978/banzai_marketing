"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { ChevronDown, AlertTriangle, TrendingDown, Users, RefreshCw, AlertCircle } from 'lucide-react';
import '@/lib/i18n';

interface AccordionItemProps {
  num: string;
  title: string;
  desc: string;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ num, title, desc, isOpen, onToggle, icon }) => {
  return (
    <div 
      className={`border rounded-3xl transition-all duration-500 overflow-hidden backdrop-blur-xl ${
        isOpen 
          ? 'bg-gradient-to-b from-[#1c1813] to-[#12100e] border-gold-premium/45 shadow-gold-glow' 
          : 'bg-[#12100e]/40 border-gold-premium/10 hover:border-gold-premium/25'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Node Number & Icon Wrapper */}
          <div className="flex items-center gap-3">
            <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
              isOpen ? 'bg-gold-premium/20 text-gold-light' : 'bg-gold-premium/5 text-gold-premium/40'
            }`}>
              {num}
            </span>
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
              isOpen 
                ? 'bg-gold-premium text-black border-gold-premium shadow-gold-glow' 
                : 'bg-gold-dark/5 text-gold-premium/60 border-gold-premium/15'
            }`}>
              {icon}
            </div>
          </div>
          <h3 className="font-display font-black text-xs md:text-sm lg:text-base text-white uppercase tracking-wider">
            {title}
          </h3>
        </div>
        
        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`w-6 h-6 rounded-full flex items-center justify-center border ${
            isOpen ? 'border-gold-premium text-gold-premium' : 'border-gold-premium/20 text-gold-premium/40'
          }`}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-gold-premium/5 flex flex-col md:flex-row gap-6 items-start relative">
              {/* Decorative side accent line */}
              <div className="hidden md:block w-0.5 h-16 bg-gradient-to-b from-gold-premium to-transparent rounded ml-1 mr-4 mt-1" />
              
              <div className="flex-grow flex flex-col gap-4">
                <p className="text-sand-muted/95 text-xs md:text-sm leading-relaxed font-display font-medium max-w-3xl">
                  {desc}
                </p>
                <div className="inline-flex items-center gap-2 text-[9px] font-mono text-gold-premium/60 uppercase tracking-widest bg-gold-dark/5 w-fit px-3 py-1 rounded">
                  <span className="w-1 h-1 rounded-full bg-gold-premium animate-ping" />
                  <span>ANALYSIS SYSTEM STATUS: CRITICAL RISK IN CLASSIC SEO</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SearchRevolution: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const icons = [
    <TrendingDown size={16} key="trend" />,
    <Users size={16} key="users" />,
    <RefreshCw size={16} key="refresh" />
  ];

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="revolution">
      
      {/* Background Cyber Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/[0.012] filter blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-premium/[0.015] filter blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          <div className="inline-flex items-center gap-1.5 text-[9px] font-mono border border-red-500/30 px-3 py-1.5 rounded-full text-red-400 bg-red-950/10 tracking-widest uppercase font-black mb-6">
            <AlertCircle size={10} className="animate-pulse" />
            <span>{lang === 'ru' ? 'СЛОМАННАЯ ВОРОНКА' : lang === 'vi' ? 'PHỄU BỊ PHÁ VỠ' : 'BROKEN ACQUISITION FUNNEL'}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight mb-6 leading-tight"
          >
            {t.seo.title}
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
            className="text-sand-muted text-sm md:text-base leading-relaxed font-normal text-balance"
          >
            {t.seo.subtitle}
          </motion.p>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="flex flex-col gap-4">
          {t.seo.bullets.map((bullet, index) => (
            <AccordionItem
              key={index}
              num={`0${index + 1}`}
              title={bullet.title}
              desc={bullet.text}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              icon={icons[index]}
            />
          ))}
        </div>

        {/* Zero-Click FOMO Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-[#16120e] border border-gold-premium/30 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center shadow-gold-glow relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-premium/35 to-transparent" />

          {/* Red Warning Sign */}
          <div className="w-14 h-14 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-500 flex-shrink-0 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            <AlertTriangle size={24} />
          </div>

          <div className="text-left flex-grow">
            <h4 className="font-display font-black text-red-500 text-xs md:text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>{lang === 'ru' ? 'ПРЕДУПРЕЖДЕНИЕ ZERO-CLICK ERA' : lang === 'vi' ? 'CẢNH BÁO KỶ NGUYÊN ZERO-CLICK' : 'ZERO-CLICK ERA ALERT'}</span>
            </h4>
            <p className="text-sand-muted text-xs md:text-sm leading-relaxed font-display font-semibold text-pretty">
              {t.seo.fomo}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SearchRevolution;
