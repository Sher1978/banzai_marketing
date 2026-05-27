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
  isActive?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ num, era, title, desc, icon, isActive = false }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl min-h-[280px] ${
        isActive
          ? 'bg-gradient-to-b from-[#1c1813] to-[#12100e] border-gold-premium/40 shadow-gold-glow'
          : 'bg-[#12100e]/40 border-gold-premium/10 hover:border-gold-premium/30'
      }`}
    >
      {/* Node indicator */}
      <div className="flex justify-between items-start mb-6">
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

      <div>
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
          />
          
          <TimelineStep 
            num="02" 
            era={t.step2.era} 
            title={t.step2.title} 
            desc={t.step2.desc} 
            icon={<Share2 size={18} />} 
          />
          
          <TimelineStep 
            num="03" 
            era={t.step3.era} 
            title={t.step3.title} 
            desc={t.step3.desc} 
            icon={<Sparkles size={18} />} 
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
