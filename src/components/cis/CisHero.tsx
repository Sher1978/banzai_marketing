"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Search, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface CisHeroProps {
  onOpenAudit: () => void;
}

const SEARCH_QUERIES = [
  "ремонт оборудования в Астане",
  "стоматология и импланты в Алматы",
  "B2B поставки и производство в Москве",
  "разработка приложений в Ташкенте",
  "строительство домов и отделка в Бишкеке"
];

export default function CisHero({ onOpenAudit }: CisHeroProps) {
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQueryIndex((prev) => (prev + 1) % SEARCH_QUERIES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial glow & geometric grid accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-[#ffe500]/[0.04] blur-[120px]" />
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#ffe500 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }} 
        />
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Offer */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-5">
              <span className="w-5 h-[2px] bg-[#ffe500]" />
              <span>САЙТ КАК ИСТОЧНИК ЗАЯВОК</span>
            </div>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.04] font-extrabold tracking-[-0.04em] text-white mb-6">
              Вас уже находят.<br />
              А где изучают <br />
              <span className="text-[#ffe500]">и выбирают?</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#c6cdd4] max-w-[540px] mb-8 font-normal">
              Клиент видит вашу компанию в <strong className="text-white font-semibold">2ГИС, Google или Яндекс Картах</strong>. Но без продающего сайта ему сложнее изучить услуги, сравнить предложения и решиться на обращение.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[13px] font-extrabold uppercase tracking-wider px-7 py-4 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] hover:-translate-y-0.5 transition-all shadow-[0_8px_30px_rgba(255,229,0,0.28)] cursor-pointer"
              >
                <span>НАЙТИ ТОЧКИ РОСТА</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#cases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[13px] font-extrabold uppercase tracking-wider px-7 py-4 rounded-[2px] bg-transparent text-white border border-[#3b4550] hover:border-[#ffe500]/60 hover:text-[#ffe500] hover:-translate-y-0.5 transition-all"
              >
                <span>СМОТРЕТЬ КЕЙСЫ</span>
              </a>
            </div>

            <div className="mt-6 text-[12px] text-[#a7b0ba] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ee6b2] animate-pulse" />
              <span>Покажем, как превратить локальный поиск в поток обращений, а сайт — в главный актив бизнеса.</span>
            </div>
          </div>

          {/* Right Column: Visual Mockup Card & Orbit */}
          <div className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center pt-4 lg:pt-0">
            {/* Background Orbit Ring */}
            <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] border border-[#ffe500]/20 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-7 border border-dashed border-[#ffe500]/25 rounded-full" />
              <div className="absolute inset-16 border border-[#ffe500]/15 rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ffe500] shadow-[0_0_10px_#ffe500]" />
            </div>

            {/* Main Interactive Site Mockup Card */}
            <div className="relative z-10 w-[min(380px,100%)] bg-[#f4f5f4] text-[#141a20] p-6 rounded-md shadow-[0_24px_80px_rgba(0,0,0,0.7)] -rotate-1 hover:rotate-0 transition-transform duration-300 border border-white/20">
              {/* Card Header */}
              <div className="flex justify-between items-center border-b border-[#d9dcde] pb-3 text-[10px] font-extrabold tracking-[0.14em]">
                <span className="uppercase text-[#141a20]">ВАША КОМПАНИЯ</span>
                <span className="text-[#75808a] font-semibold tracking-normal flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Сайт · 24/7
                </span>
              </div>

              {/* Card Headline */}
              <h3 className="text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] mt-5 mb-2 text-[#111820]">
                Нужная услуга.<br />
                <span className="text-[#78818a] font-bold">Понятный выбор.</span>
              </h3>

              <p className="text-[11px] text-[#606a72] leading-relaxed mb-4">
                Ответы на вопросы клиента, прозрачные цены, сильные стороны и понятный следующий шаг.
              </p>

              {/* Dynamic Mock Search Input */}
              <div className="bg-[#e7e9e8] rounded-[3px] py-2.5 px-3 text-[#505a62] text-[11px] font-medium flex items-center gap-2 mb-3 border border-[#d2d7da]">
                <Search className="w-3.5 h-3.5 text-[#ffe500] shrink-0" />
                <span className="truncate">{SEARCH_QUERIES[queryIndex]}</span>
              </div>

              {/* Mock Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="bg-white border border-[#d9dcde] px-2 py-1 rounded-[2px] text-[9px] font-semibold text-[#303840]">
                  Услуги и цены
                </span>
                <span className="bg-white border border-[#d9dcde] px-2 py-1 rounded-[2px] text-[9px] font-semibold text-[#303840]">
                  Преимущества
                </span>
                <span className="bg-white border border-[#d9dcde] px-2 py-1 rounded-[2px] text-[9px] font-semibold text-[#303840]">
                  Отзывы клиентов
                </span>
                <span className="bg-white border border-[#d9dcde] px-2 py-1 rounded-[2px] text-[9px] font-semibold text-[#303840]">
                  Онлайн-запись
                </span>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center pt-2 border-t border-[#e2e5e7] text-[10px] font-bold">
                <span className="text-[#4b5560] tracking-wider text-[9px]">ПОИСК → ДОВЕРИЕ → ЗАЯВКА</span>
                <button
                  onClick={onOpenAudit}
                  className="bg-[#ffe500] hover:bg-[#ebd400] text-[#111820] font-black px-2.5 py-1.5 rounded-[2px] text-[10px] uppercase tracking-wide cursor-pointer shadow-sm"
                >
                  Оставить заявку ↗
                </button>
              </div>
            </div>

            {/* Floating Badge A: Top Right */}
            <div className="absolute top-2 -right-2 sm:-right-4 bg-[#111820]/95 backdrop-blur-md border border-[#3a444d] p-3 text-[11px] shadow-[0_14px_35px_rgba(0,0,0,0.6)] z-20 rounded-[2px]">
              <strong className="text-[#ffe500] block text-[17px] font-extrabold leading-tight">24/7</strong>
              <span className="text-[#c1c8d0] text-[10px]">Ваш бизнес доступен онлайн</span>
            </div>

            {/* Floating Badge B: Bottom Left */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#111820]/95 backdrop-blur-md border border-[#3a444d] p-3 text-[11px] shadow-[0_14px_35px_rgba(0,0,0,0.6)] z-20 rounded-[2px]">
              <strong className="text-[#ffe500] block text-[17px] font-extrabold leading-tight">SEO & КАРТЫ</strong>
              <span className="text-[#c1c8d0] text-[10px]">Канал горячих клиентов без кликов</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
