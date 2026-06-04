"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Zap, HelpCircle, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import '@/lib/i18n';

export const PricingTable: React.FC<{ openLeadModal?: () => void }> = ({ openLeadModal }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const packagesInfo = [
    {
      index: 0,
      icon: <HelpCircle size={18} className="text-gold-premium" />,
      tag: t.pricing.packages[0].tag,
      name: t.pricing.packages[0].name,
      desc: t.pricing.packages[0].desc,
      result: t.pricing.packages[0].result,
      badge: null,
      image: "/assets/tech_rag_markup.png",
      borderClass: "border-gold-premium/15 hover:border-gold-premium/40 bg-surface-dubai/40",
      ctaText: lang === 'ru' ? "ЗАПУСТИТЬ БАЗОВЫЙ ЭТАП" : lang === 'vi' ? "BẮT ĐẦU GIAI ĐOẠN CƠ BẢN" : "START BASIC STAGE",
    },
    {
      index: 1,
      icon: <Zap size={18} className="text-gold-light" />,
      tag: t.pricing.packages[1].tag,
      name: t.pricing.packages[1].name,
      desc: t.pricing.packages[1].desc,
      result: t.pricing.packages[1].result,
      badge: lang === 'ru' ? "РЕКОМЕНДУЕМ" : lang === 'vi' ? "KHUYÊN DÙNG" : "POPULAR",
      image: "/assets/tech_dao_extraction.png",
      borderClass: "border-gold-premium/50 bg-[#1a1612]/80 shadow-gold-glow",
      ctaText: lang === 'ru' ? "ПОЛУЧИТЬ АКТИВНЫЙ GEO" : lang === 'vi' ? "NHẬN ACTIVE GEO" : "GET ACTIVE GEO",
    },
    {
      index: 2,
      icon: <Zap size={18} className="text-cyan-400" />,
      tag: t.pricing.packages[2].tag,
      name: t.pricing.packages[2].name,
      desc: t.pricing.packages[2].desc,
      result: t.pricing.packages[2].result,
      badge: lang === 'ru' ? "МАКСИМАЛЬНЫЙ" : lang === 'vi' ? "TỐI ДА" : "ULTIMATE",
      image: "/assets/geo_channels_pillar.png",
      borderClass: "border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]",
      ctaText: lang === 'ru' ? "ДОСТИЧЬ ДОМИНИРОВАНИЯ" : lang === 'vi' ? "ĐẠT THỐNG TRỊ AGENTIC" : "DOMINATE SYSTEM",
    }
  ];

  const handleCtaClick = () => {
    if (openLeadModal) {
      openLeadModal();
    } else {
      const contactSection = document.getElementById('audit-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="pricing">
      
      {/* Background cyber grid and glow */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-premium/[0.012] filter blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 text-[9px] font-mono border border-gold-premium/30 px-3 py-1.5 rounded-full text-gold-light bg-gold-dark/10 tracking-widest uppercase font-bold mb-6">
            <Zap size={10} className="animate-pulse" />
            <span>GEO SERVICE LEVELS</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight mb-6 leading-tight"
          >
            {t.pricing.title}
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
            className="text-sand-muted text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {lang === 'ru'
              ? "Выход в топ рекомендаций нейросетей требует системного инженерного подхода. Мы предлагаем три уровня доминирования в вашей нише."
              : lang === 'vi'
              ? "Xuất hiện trong top đề xuất mạng nơ-ron đòi hỏi tiếp cận kỹ thuật hệ thống. Chúng tôi cung cấp ba cấp độ thống trị trong ngành của bạn."
              : "Appearing in top AI recommendations requires a systematic engineering approach. We offer three levels of dominance in your niche."}
          </motion.p>
        </div>

        {/* 3 Columns Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packagesInfo.map((pkg) => (
            <motion.div
              key={pkg.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pkg.index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between backdrop-blur-xl ${pkg.borderClass}`}
            >
              {/* Featured Badge */}
              {pkg.badge && (
                <div className={`absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full text-[8px] font-mono tracking-widest uppercase font-black shadow-md ${
                  pkg.index === 2 
                    ? "bg-cyan-500 text-black" 
                    : "bg-gradient-to-r from-gold-light to-gold-dark text-black"
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Image illustration */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-tech-image-container aspect-[16/10] mb-6 group-hover:border-gold-premium/30 transition-all duration-300 border border-white/5 shadow-inner">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Header info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                    pkg.index === 2 
                      ? "bg-cyan-950 border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]" 
                      : "bg-gold-dark/10 border-gold-premium/15 text-gold-light"
                  }`}>
                    {pkg.icon}
                  </div>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-wider ${
                    pkg.index === 2 ? "text-cyan-400" : "text-gold-light"
                  }`}>
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg md:text-xl text-white uppercase tracking-wider mb-6">
                  {pkg.name}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-white/[0.05] mb-6" />

                {/* Bullets mapping */}
                <div className="flex flex-col gap-5 text-left mb-8">
                  {/* Desc bullet */}
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 flex-shrink-0">
                      <Check size={14} className={pkg.index === 2 ? "text-cyan-400" : "text-gold-premium"} />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-sand-muted/40 block">
                        {t.pricing.headers.desc}
                      </span>
                      <p className="text-sand-muted/95 text-xs leading-relaxed font-display font-medium">
                        {pkg.desc}
                      </p>
                    </div>
                  </div>

                  {/* Result bullet */}
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 flex-shrink-0">
                      <Check size={14} className={pkg.index === 2 ? "text-cyan-400" : "text-gold-premium"} />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-sand-muted/40 block">
                        {t.pricing.headers.result}
                      </span>
                      <p className="text-white text-xs font-semibold leading-relaxed font-display">
                        {pkg.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleCtaClick}
                className={`w-full group mt-4 px-6 py-4 rounded-xl font-display font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.index === 1
                    ? "bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black hover:brightness-110 shadow-gold-glow"
                    : pkg.index === 2
                    ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                    : "border border-gold-premium/30 hover:border-gold-premium hover:bg-gold-premium/5 text-white"
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingTable;
