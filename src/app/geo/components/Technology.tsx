"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Unlock, Cpu, Network, Share2, Terminal, Zap, CheckCircle2 } from 'lucide-react';
import '@/lib/i18n';

export const Technology: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  // Currently hovered/active layer (0 to 4)
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const icons = [
    <Unlock size={18} key="unlock" />,
    <Cpu size={18} key="cpu" />,
    <Network size={18} key="network" />,
    <Share2 size={18} key="share" />,
    <Terminal size={18} key="terminal" />
  ];

  const systemTags = [
    "CRAWLER_RULES: BOT_UNBLOCKED // HTTP_200",
    "CONTENT_DAO: SEMANTIC_TOKENIZATION_ACTIVE",
    "KNOWLEDGE_GRAPH: RDF_ENTITIES_SYNCHRONIZED",
    "EARNED_MEDIA: PLATFORM_MENTIONS_VERIFIED",
    "LAPIS_INTERFACE: AUTONOMOUS_AGENT_COMPATIBLE"
  ];

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="tech">
      
      {/* Background Cyber Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-premium/[0.015] filter blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight mb-6 leading-tight"
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
            className="text-sand-muted text-sm md:text-base leading-relaxed font-normal text-balance"
          >
            {t.tech.subtitle}
          </motion.p>
        </div>

        {/* E-E-A-T Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 bg-gold-premium/[0.03] border border-gold-premium/15 rounded-3xl p-6 md:p-8 text-center shadow-gold-glow relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-premium/30 to-transparent" />
          
          <h4 className="font-display font-black text-gold-light text-xs uppercase tracking-widest mb-3 text-glow-gold">
            {lang === 'ru' ? "МЫ НЕ ДЕЛАЕМ SEO — МЫ ВНЕДРЯЕМ АЛГОРИТМИЧЕСКОЕ ПРЕВОСХОДСТВО" : lang === 'vi' ? "CHÚNG TÔI KHÔNG LÀM SEO — CHÚNG TÔI TRIỂN KHAI SỰ VƯỢT TRỘI THUẬT TOÁN" : "WE DO NOT DO SEO — WE IMPLEMENT ALGORITHMIC SUPERIORITY"}
          </h4>
          
          <p className="text-sand-muted text-xs md:text-sm leading-relaxed font-display font-medium max-w-3xl mx-auto text-pretty">
            {lang === 'ru'
              ? "Алгоритмы ИИ-поиска больше не индексируют ссылки ради рекламы. Роботы сканируют интернет, чтобы найти авторитетное готовое решение — и находят его именно на вашем структурированном сайте. Это дает вам 100% доверие пользователя: его персональный ИИ-ассистент уже выбрал вас как лидера отрасли."
              : lang === 'vi'
              ? "Thuật toán tìm kiếm AI không còn lập chỉ mục đường link vì quảng cáo. Robot quét internet để tìm giải pháp uy tín có sẵn — và tìm thấy chính xác trên trang web được cấu trúc của bạn. Điều này mang lại sự tin cậy 100%: trợ lý AI cá nhân đã chọn bạn làm đơn vị dẫn đầu."
              : "AI search algorithms no longer index links for ads. Bots scan the internet to find an authoritative ready-made solution—and locate it exactly on your structured site. This grants you 100% user trust: their personal AI assistant has already handpicked you as the industry leader."}
          </p>
        </motion.div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D-like Glowing Stack Diagram (4 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-[280px] lg:max-w-full aspect-[4/5] relative flex flex-col justify-between py-6">
              
              {/* Stack Layers Rendered bottom-to-top */}
              {[4, 3, 2, 1, 0].map((idx) => {
                const isHovered = activeLayer === idx;
                const isAnyHovered = activeLayer !== null;
                
                // Colors: Gold to Cyan gradient
                const layerColors = [
                  "border-gold-premium/30 bg-gold-dark/5 text-gold-light", // Layer 1: AI Readiness
                  "border-gold-premium/40 bg-gold-dark/10 text-gold-light", // Layer 2: DAO
                  "border-gold-premium/50 bg-[#1c1813]/60 text-gold-light", // Layer 3: Knowledge Graph
                  "border-cyan-500/30 bg-cyan-950/5 text-cyan-400",       // Layer 4: Earned Media
                  "border-cyan-500/50 bg-cyan-950/20 text-cyan-400"        // Layer 5: LAPIS
                ];

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      scale: isHovered ? 1.05 : isAnyHovered ? 0.96 : 1,
                      y: isHovered ? -5 : 0,
                      opacity: isHovered ? 1 : isAnyHovered ? 0.5 : 0.85,
                      z: isHovered ? 30 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative w-full h-[52px] rounded-xl border px-5 flex items-center justify-between shadow-2xl backdrop-blur-xl transition-colors duration-300 ${
                      isHovered ? 'border-cyan-400 bg-black/90 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : layerColors[idx]
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* Layer indicator node */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] font-black opacity-40">L_0{idx + 1}</span>
                      <span className="font-display font-black text-[9px] md:text-[10px] tracking-wider uppercase">
                        {idx === 0 ? "AI READINESS" :
                         idx === 1 ? "DIRECT ANSWER" :
                         idx === 2 ? "KNOWLEDGE GRAPH" :
                         idx === 3 ? "EARNED MEDIA" : "LAPIS INTERFACE"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[8px] opacity-40">OK</span>
                      <CheckCircle2 size={12} className={isHovered ? "text-cyan-400" : "opacity-40"} />
                    </div>

                    {/* Glowing effect inside card */}
                    {isHovered && (
                      <motion.div 
                        layoutId="activeGlowStack"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-transparent to-gold-premium/10 pointer-events-none" 
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Central connection vector lines running down behind */}
              <div className="absolute top-0 bottom-0 left-[22px] w-[1px] bg-gradient-to-b from-cyan-500/30 via-gold-premium/20 to-transparent -z-10 pointer-events-none" />
              
            </div>
          </div>

          {/* Right Column: Detailed Hover-Linked Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {t.tech.bullets.map((bullet, index) => {
              const isActive = activeLayer === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                  whileHover={{ x: 6 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl relative group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1c1813] to-[#12100e] border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                      : 'bg-[#12100e]/40 border-gold-premium/10 hover:border-gold-premium/30'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                        isActive 
                          ? 'bg-cyan-500 text-black border-cyan-500' 
                          : 'bg-gold-dark/5 text-gold-premium/60 border-gold-premium/15 group-hover:border-gold-premium/45'
                      }`}>
                        {icons[index]}
                      </div>
                      
                      <h3 className="font-display font-black text-xs md:text-sm text-white uppercase tracking-wider">
                        {bullet.title}
                      </h3>
                    </div>
                    
                    <span className="font-mono text-[9px] text-sand-muted/30">
                      STEP_0{index + 1}
                    </span>
                  </div>

                  <p className="text-sand-muted/95 text-xs md:text-sm leading-relaxed font-display font-medium">
                    <span className="text-white font-bold block mb-1">{bullet.boldText}</span>
                    {bullet.text}
                  </p>

                  {/* System metadata label at bottom */}
                  <div className="mt-4 pt-3 border-t border-white/[0.03] flex justify-between items-center text-[7.5px] font-mono text-sand-muted/40 tracking-wider">
                    <span>{systemTags[index]}</span>
                    <span>v1.6</span>
                  </div>

                  {/* Layer connection line pulse on active */}
                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom indicator badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#12100e] border border-gold-premium/10 px-5 py-2.5 rounded-full text-glow-gold">
            <Zap size={14} className="text-cyan-400" />
            <span className="font-mono text-[9px] text-gold-light tracking-widest uppercase font-bold">
              GENERATIVE VALUE: ORGANIC CONVERSION DOMINANCE PROTOCOL
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;
