"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Globe, Share2, Compass, AlertTriangle } from 'lucide-react';
import '@/lib/i18n';

interface TimelineStepProps {
  num: string;
  era: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  isActive?: boolean;
}

const renderStep1Illustration = (isActive: boolean) => (
  <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid backdrop */}
    <path d="M 0 40 L 200 40 M 100 0 L 100 80" className="stroke-white/[0.03] stroke-1" />
    
    {/* Globe contour */}
    <motion.circle 
      cx="100" 
      cy="40" 
      r="30" 
      className={`stroke-[1.5] transition-colors duration-500 fill-none ${
        isActive ? 'stroke-gold-premium/40' : 'stroke-gold-premium/20'
      }`} 
    />
    <circle cx="100" cy="40" r="18" className="stroke-gold-premium/10 stroke-1 fill-none" />

    {/* Spinning latitude/longitude lines */}
    <g style={{ transformOrigin: '100px 40px' }}>
      <motion.path 
        d="M 70 40 A 30 15 0 0 1 130 40 A 30 15 0 0 1 70 40" 
        className="stroke-gold-premium/20 stroke-1 fill-none" 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '100px 40px' }}
      />
      <motion.path 
        d="M 100 10 A 15 30 0 0 1 100 70 A 15 30 0 0 1 100 10" 
        className="stroke-gold-premium/20 stroke-1 fill-none" 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '100px 40px' }}
      />
    </g>

    {/* Sleek Search Interface Panel */}
    <g transform="translate(45, 30)">
      <rect x="0" y="0" width="110" height="20" rx="6" className="stroke-gold-premium/30 fill-black/95 stroke-1 shadow-2xl" />
      <line x1="8" y1="10" x2="22" y2="10" className="stroke-gold-light stroke-1.5" />
      {/* Magnifier */}
      <circle cx="94" cy="10" r="3.5" className="stroke-gold-light stroke-1 fill-none" />
      <line x1="96.5" y1="12.5" x2="100.5" y2="16.5" className="stroke-gold-light stroke-1" />
      <text x="28" y="13" className="fill-gold-light/60 font-mono text-[7px] tracking-wider uppercase font-bold">WWW.SEARCH...</text>
    </g>

    {/* Floating cyber bits */}
    <motion.circle cx="100" cy="10" r="2" className="fill-gold-light" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="70" cy="55" r="1.5" className="fill-gold-premium" animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} />
    <motion.circle cx="130" cy="25" r="1.5" className="fill-gold-premium" animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} />
  </svg>
);

const renderStep2Illustration = (isActive: boolean) => (
  <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid backdrop */}
    <path d="M 0 40 L 200 40" className="stroke-white/[0.03] stroke-1" />

    {/* Connections */}
    <motion.path 
      d="M 55 25 L 100 40 L 145 25 L 125 58 L 75 58 Z" 
      className="stroke-gold-premium/20 stroke-1 fill-none"
      strokeDasharray="3 3"
      animate={{ strokeDashoffset: [0, -20] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    <line x1="100" y1="40" x2="125" y2="58" className="stroke-gold-premium/15 stroke-0.5" />
    <line x1="100" y1="40" x2="75" y2="58" className="stroke-gold-premium/15 stroke-0.5" />

    {/* Connected nodes */}
    <circle cx="100" cy="40" r="13" className="stroke-gold-premium stroke-1.5 fill-black" />
    <circle cx="55" cy="25" r="8" className="stroke-gold-dark stroke-1 fill-black" />
    <circle cx="145" cy="25" r="8" className="stroke-gold-dark stroke-1 fill-black" />
    <circle cx="75" cy="58" r="9" className="stroke-gold-dark stroke-1 fill-black" />
    <circle cx="125" cy="58" r="9" className="stroke-gold-dark stroke-1 fill-black" />

    {/* Animated Pulse waves from center */}
    <motion.circle cx="100" cy="40" r="22" className="stroke-gold-premium/30 stroke-0.5 fill-none" animate={{ scale: [0.8, 1.4], opacity: [1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />

    {/* Content Elements */}
    <g transform="translate(95.5, 36.5)">
      {/* Heart */}
      <path d="M 4.5 1.5 A 1.5 1.5 0 0 0 1 1.5 L 1 1.5 A 1.5 1.5 0 0 0 -2.5 1.5 L 1 5 Z" className="fill-red-500/80 animate-pulse" />
    </g>

    <g transform="translate(51.5, 21.5)">
      {/* SMM Message */}
      <rect x="0" y="0" width="7" height="5" rx="1" className="fill-gold-premium/45" />
      <polygon points="2,5 1,7 4,5" className="fill-gold-premium/45" />
    </g>

    <g transform="translate(141.5, 21.5)">
      {/* Video clip */}
      <polygon points="2,1 6,3.5 2,6" className="fill-gold-light" />
    </g>

    <g transform="translate(71, 54)">
      {/* Connect node */}
      <circle cx="4" cy="4" r="1.5" className="fill-gold-premium/70" />
      <line x1="4" y1="4" x2="7" y2="4" className="stroke-gold-premium/70 stroke-0.5" />
    </g>

    <g transform="translate(121, 54)">
      {/* Thumbs up emoji */}
      <text x="4" y="6.5" className="fill-gold-premium text-[8px]" textAnchor="middle">👍</text>
    </g>
  </svg>
);

const renderStep3Illustration = (isActive: boolean) => (
  <svg className="w-full h-full" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Aura rings */}
    <circle cx="100" cy="40" r="34" className="stroke-gold-premium/5 stroke-[0.5]" strokeDasharray="3 3" />
    <motion.circle cx="100" cy="40" r="28" className="stroke-gold-premium/15 stroke-1 fill-none" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 4, repeat: Infinity }} />

    {/* Glowing Intelligence Core */}
    <circle cx="100" cy="40" r="16" className="stroke-gold-premium stroke-2 fill-black/90 shadow-[0_0_20px_rgba(212,163,89,0.4)]" />
    <motion.circle cx="100" cy="40" r="10" className="fill-gold-light/20" animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
    <circle cx="100" cy="40" r="5" className="fill-gold-light animate-pulse" />

    {/* Rotating Synapses (Framer Motion rotation) */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "100px 40px" }}
    >
      <line x1="100" y1="40" x2="100" y2="12" className="stroke-gold-light stroke-[1.5]" />
      <circle cx="100" cy="12" r="3" className="stroke-gold-light stroke-2 fill-black" />
      <circle cx="100" cy="12" r="1" className="fill-gold-light" />

      <line x1="100" y1="40" x2="124" y2="54" className="stroke-gold-premium/60 stroke-1" strokeDasharray="2 2" />
      <circle cx="124" cy="54" r="3" className="stroke-gold-premium fill-black" />
      
      <line x1="100" y1="40" x2="76" y2="54" className="stroke-gold-premium/60 stroke-1" strokeDasharray="2 2" />
      <circle cx="76" cy="54" r="3" className="stroke-gold-premium fill-black" />
    </motion.g>

    {/* Sparks */}
    <motion.path 
      d="M 144 26 L 146 31 L 151 33 L 146 35 L 144 40 L 142 35 L 137 33 L 142 31 Z" 
      className="fill-gold-light" 
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }} 
      transition={{ duration: 2, repeat: Infinity }} 
    />
    <motion.path 
      d="M 58 26 L 59 29 L 62 30 L 59 31 L 58 34 L 57 31 L 54 30 L 57 29 Z" 
      className="fill-gold-premium" 
      animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.9, 0.4] }} 
      transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }} 
    />

    {/* Generative waves */}
    <path d="M 12 40 Q 22 30 32 40 T 52 40" className="stroke-gold-premium/15 stroke-1" />
    <path d="M 188 40 Q 178 50 168 40 T 148 40" className="stroke-gold-premium/15 stroke-1" />
  </svg>
);

const TimelineStep: React.FC<TimelineStepProps> = ({ num, era, title, desc, icon, illustration, isActive = false }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl min-h-[380px] overflow-hidden ${
        isActive
          ? 'bg-gradient-to-b from-[#1c1813] to-[#12100e] border-gold-premium/40 shadow-gold-glow'
          : 'bg-[#12100e]/40 border-gold-premium/10 hover:border-gold-premium/30'
      }`}
    >
      {/* Massive decorative background number (1, 2, 3) */}
      <div className={`absolute -right-2 top-[35%] text-[130px] font-black font-display leading-none select-none pointer-events-none transition-all duration-500 ${
        isActive ? 'text-gold-premium/[0.07] scale-105' : 'text-gold-premium/[0.02]'
      }`}>
        {parseInt(num, 10)}
      </div>

      {/* Node indicator */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-sand-muted/50">
          {era}
        </span>
        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
          isActive 
            ? 'bg-gold-premium text-black border-gold-premium shadow-gold-glow' 
            : 'bg-gold-dark/5 text-gold-premium/60 border-gold-premium/15'
        }`}>
          {icon}
        </div>
      </div>

      {/* Central Interactive Pictogram */}
      <div className="my-4 w-full flex items-center justify-center h-28 relative overflow-hidden bg-black/35 rounded-2xl border border-white/[0.03] relative z-10 shadow-inner group-hover:border-gold-premium/20 transition-all duration-300">
        {illustration}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
            isActive ? 'bg-gold-premium/20 text-gold-light' : 'bg-gold-premium/5 text-gold-premium/60'
          }`}>
            {num}
          </span>
          <h3 className="font-display font-black text-sm md:text-base text-white uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <p className="text-sand-muted/95 text-xs md:text-sm leading-relaxed font-display font-medium">
          {desc}
        </p>
      </div>

      {isActive && (
        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-light"></span>
        </span>
      )}
    </motion.div>
  );
};

export const SearchRevolution: React.FC = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === 'ru';

  const t = {
    title: isRu ? "Третья поисковая революция" : "The Third Search Revolution",
    subtitle: isRu 
      ? "Интернет фундаментально изменился трижды. Те, кто пропустил первые две волны, потеряли миллиарды. Те, кто проигнорирует третью — исчезнут из выдачи навсегда."
      : "The internet has fundamentally changed three times. Those who missed the first two waves lost billions. Those who ignore the third will disappear from search index forever.",
    step1: {
      era: "1990s // ERA 01",
      title: isRu ? "Изобретение интернета -> SEO" : "Web Invention -> SEO",
      desc: isRu 
        ? "Люди учатся искать сайты. Компании ведут войну за позиции по ключевым словам. Бизнес, которого нет в Google или Яндексе, перестает существовать."
        : "People learn to search for pages via keywords. Brands battle for index positions. Businesses not present in Google index ceased to exist."
    },
    step2: {
      era: "2010s // ERA 02",
      title: isRu ? "Эра соцсетей -> Content Marketing" : "Social Nets -> Content Marketing",
      desc: isRu 
        ? "Люди ищут рекомендации и живые отзывы. Рождение SMM, видеоконтента и инфлюенс-маркетинга. Бизнес учится привлекать внимание и выстраивать доверие."
        : "Users seek reviews and human connections. Birth of SMM, viral clips, and influencer trust. Businesses learn to capture attention and build authority."
    },
    step3: {
      era: "2026 // ERA 03 (NOW)",
      title: isRu ? "Генеративный ИИ -> GEO" : "Generative AI -> GEO",
      desc: isRu 
        ? "Люди больше не ищут ссылки. Они просят искусственный интеллект выдать готовое решение. GEO внедряет ваш бренд прямо в Latent Space языковых моделей."
        : "Users no longer browse blue links. They ask AI to evaluate and serve the ultimate answer. GEO injects your brand directly into the LLMs' Latent Space."
    },
    alert: {
      title: isRu ? "ОКНО ВОЗМОЖНОСТЕЙ КРАЙНЕ УЗКОЕ" : "THE WINDOW OF OPPORTUNITY IS NARROW",
      desc: isRu 
        ? "Прямо сейчас, пока нейросети обучаются и закрепляют свои базы знаний (Ground Truth), у вас есть уникальная короткая возможность вырваться вперед и монополизировать выдачу в поисковых языковых моделях своей ниши. Когда Latent Space устоится, войти туда будет в 10 раз дороже."
        : "Right now, while neural engines ingest training sets and define their Ground Truth datasets, you have a unique brief window of opportunity to break out and monopolize generative search outputs in your sector. Once the Latent Space solidifies, entering it will be 10x more expensive."
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="revolution">
      
      {/* Visual Accents */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-600/[0.015] filter blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6"
          >
            {t.title}
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
            {t.subtitle}
          </motion.p>
        </div>

        {/* 3 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          <TimelineStep 
            num="01" 
            era={t.step1.era} 
            title={t.step1.title} 
            desc={t.step1.desc} 
            icon={<Globe size={18} />} 
            illustration={renderStep1Illustration(false)}
          />
          
          <TimelineStep 
            num="02" 
            era={t.step2.era} 
            title={t.step2.title} 
            desc={t.step2.desc} 
            icon={<Share2 size={18} />} 
            illustration={renderStep2Illustration(false)}
          />
          
          <TimelineStep 
            num="03" 
            era={t.step3.era} 
            title={t.step3.title} 
            desc={t.step3.desc} 
            icon={<Sparkles size={18} />} 
            illustration={renderStep3Illustration(true)}
            isActive={true}
          />

        </div>

        {/* FOMO Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-[#16120e] border border-gold-premium/30 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center shadow-gold-glow relative overflow-hidden group"
        >
          {/* Subtle running golden glow across outline */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-premium/30 to-transparent" />

          {/* Red warning octagon */}
          <div className="w-14 h-14 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-500 flex-shrink-0 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            <AlertTriangle size={24} />
          </div>

          <div className="text-left flex-grow">
            <h4 className="font-display font-black text-red-500 text-xs md:text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>{t.alert.title}</span>
            </h4>
            <p className="text-sand-muted text-xs md:text-sm leading-relaxed font-display font-medium text-pretty">
              {t.alert.desc}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SearchRevolution;
