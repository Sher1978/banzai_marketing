"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Zap, TrendingUp } from 'lucide-react';

/**
 * SolutionSection — "Решение BanzAI marketing"
 * Two-pillar approach: Viral Content (virale.uno) + Channel Optimization (SEO / Content / GEO)
 * Placed before FounderSection on the main landing page.
 */
const SolutionSection: React.FC = () => {
  return (
    <section
      id="solution"
      className="relative py-28 px-6 bg-background-dark overflow-hidden"
    >
      {/* Subtle cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none" />

      {/* Top accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 border border-primary/20 px-4 py-1.5 rounded-full mb-6 bg-primary/5">
            <Zap size={10} />
            <span>Наше Решение</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            Два двигателя роста.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              Один результат.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
            Для устойчивого роста конверсии необходимо работать одновременно в двух направлениях:
            создавать контент, который захватывает внимание, и оптимизировать каналы, по которым
            этот контент находят клиенты — включая новый стандарт{' '}
            <span className="text-red-500 font-bold">ГЕО</span>-оптимизации для ИИ-поиска.
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Pillar 1: Viral Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group rounded-3xl border border-primary/20 bg-surface-dark overflow-hidden hover:border-primary/40 transition-all duration-500"
          >
            {/* Top gradient bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

            {/* Inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col h-full">
              {/* Pillar number */}
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">
                  Направление — 01
                </div>
                <div className="font-mono text-[10px] text-white/20">CONTENT_ENGINE</div>
              </div>

              {/* Image illustration */}
              <div className="relative w-full aspect-square max-w-[240px] mx-auto mb-8 flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/10">
                  <Image
                    src="/assets/viral_content_pillar.png"
                    alt="Viral Content Engine — AI-powered массовый контент"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                Контент:
                <br />
                <span className="text-secondary">Массовый и Вовлекающий</span>
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                ИИ позволяет создавать контент в промышленных масштабах без потери качества.
                Сотни релевантных постов, видео и статей, настроенных на конкретную аудиторию,
                генерируют органический охват и вовлечённость, недостижимые вручную.
              </p>

              {/* Link to virale.uno */}
              <a
                href="https://www.virale.uno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-secondary border border-secondary/30 hover:border-secondary hover:bg-secondary/10 px-4 py-2.5 rounded-xl transition-all duration-300 w-fit group/link"
              >
                <span className="uppercase tracking-widest">virale.uno</span>
                <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Pillar 2: Channel Optimization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group rounded-3xl border border-white/10 bg-surface-dark overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            {/* Top gradient bar */}
            <div className="h-1 bg-gradient-to-r from-white/30 via-red-600 to-white/30" />

            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-8 md:p-10 flex flex-col h-full">
              {/* Pillar number */}
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Направление — 02
                </div>
                <div className="font-mono text-[10px] text-white/20">CHANNEL_OPT</div>
              </div>

              {/* Image illustration */}
              <div className="relative w-full aspect-square max-w-[240px] mx-auto mb-8 flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-red-900/20 blur-xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-red-900/20">
                  <Image
                    src="/assets/geo_channels_pillar.png"
                    alt="Оптимизация каналов — SEO, Контент-маркетинг, ГЕО"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                Каналы:
                <br />
                <span className="text-white/70">SEO · Контент-маркетинг ·</span>{' '}
                <span className="text-red-500 animate-pulse-red">ГЕО</span>
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                Классические каналы трафика дополняются новым стандартом —{' '}
                <span className="text-red-400 font-semibold">Generative Engine Optimization (ГЕО)</span>.
                Ваш бренд должен присутствовать не только в Google, но и в ответах ChatGPT, Gemini
                и Perplexity — там, где принимают решения 40% самых платежеспособных клиентов.
              </p>

              {/* Channel tags */}
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 border border-white/10 px-3 py-1 rounded-full">
                  SEO
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 px-3 py-1 rounded-full">
                  Контент-маркетинг
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 border border-red-500/40 px-3 py-1 rounded-full bg-red-950/30 shadow-[0_0_8px_rgba(220,38,38,0.2)]">
                  ГЕО ↗ NEW
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom synthesis banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/[0.06] via-surface-dark to-secondary/[0.06] p-8 md:p-12 overflow-hidden"
        >
          {/* Glow lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center">
              <TrendingUp size={36} className="text-primary" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-3">
                Синергия двух направлений
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">
                BanzAI marketing делает и то, и другое.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Мы в компании <span className="text-white font-semibold">BanzAI marketing</span> реализуем оба направления
                с помощью передовых ИИ-инструментов — буквально{' '}
                <span className="text-secondary font-semibold">конструируя вирусность</span> наших клиентов
                и обеспечивая их присутствие там, где завтра будет весь трафик.
              </p>
            </div>

            {/* CTA arrow */}
            <div className="flex-shrink-0 hidden md:flex flex-col items-center gap-2 text-white/20 font-mono text-[10px] uppercase tracking-widest">
              <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              <span>↓</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SolutionSection;
