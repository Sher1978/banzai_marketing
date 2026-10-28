"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CIS_CASES } from './data';
import { CisCaseItem } from './types';

interface CisCasesSectionProps {
  onSelectCase: (caseItem: CisCaseItem) => void;
  onOpenAudit: () => void;
}

export default function CisCasesSection({ onSelectCase, onOpenAudit }: CisCasesSectionProps) {
  const [filter, setFilter] = useState<'all' | 'leads' | 'web' | 'maps' | 'apps'>('all');

  const filteredCases = filter === 'all'
    ? CIS_CASES
    : CIS_CASES.filter(c => c.category === filter);

  return (
    <section id="cases" className="py-20 md:py-28 bg-[#080d12] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
              <span className="w-5 h-[2px] bg-[#ffe500]" />
              <span>ЭКСПЕРТИЗА В ДЕЙСТВИИ</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
              Не верьте обещаниям.<br />
              <span className="text-[#ffe500]">Смотрите на работу.</span>
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
              Показываем ход мысли, технические решения и подтверждённые результаты в маркетинге, разработке сайтов и выводе бизнеса в ТОП.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Все проекты' },
              { id: 'leads', label: 'Лиды & Продажи' },
              { id: 'maps', label: 'Карты & SEO' },
              { id: 'web', label: 'Сайты & Платформы' },
              { id: 'apps', label: 'Mini Apps' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-[2px] transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#ffe500] text-[#111820]'
                    : 'bg-[#151e27] text-[#a7b0ba] hover:text-white border border-[#2b3540]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredCases.map((item) => (
            <article
              key={item.id}
              className="bg-[#10171f] border border-[#29323c] rounded-[3px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#ffe500]/50 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Optional Case Image Preview */}
                {item.image && (
                  <div className="relative w-full h-[180px] sm:h-[210px] rounded-[2px] overflow-hidden mb-5 bg-[#0b1016] border border-[#222b35]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10171f] via-transparent to-transparent opacity-80" />
                    {item.externalUrl && (
                      <div className="absolute top-3 right-3 bg-[#111820]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1 border border-white/10">
                        <span>Live Preview</span>
                        <ExternalLink className="w-3 h-3 text-[#ffe500]" />
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ffe500]">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[24px] font-bold text-white group-hover:text-[#ffe500] transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[13px] text-[#a7b0ba] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Metrics Highlight */}
                <div className="flex flex-wrap gap-6 py-3.5 px-4 bg-[#0a0f14] border border-[#232c37] rounded-[2px] mb-5">
                  <div>
                    <strong className="text-[24px] sm:text-[27px] font-extrabold text-white block leading-none mb-1">
                      {item.metric1.value}
                    </strong>
                    <span className="text-[10px] text-[#8c97a2] uppercase tracking-wider block">
                      {item.metric1.label}
                    </span>
                  </div>

                  <div className="border-l border-[#232c37] pl-6">
                    <strong className="text-[24px] sm:text-[27px] font-extrabold text-[#ffe500] block leading-none mb-1">
                      {item.metric2.value}
                    </strong>
                    <span className="text-[10px] text-[#8c97a2] uppercase tracking-wider block">
                      {item.metric2.label}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-[2px] bg-[#17222c] text-[#a7b4c2] border border-[#2a3642]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-4 border-t border-[#29323c] flex items-center justify-between">
                <span className="text-[10px] text-[#717d88] italic line-clamp-1 max-w-[240px]">
                  {item.note}
                </span>

                <button
                  onClick={() => onSelectCase(item)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#ffe500] hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Детали кейса</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner after Cases */}
        <div className="mt-12 p-6 sm:p-8 bg-[#111820] border border-[#2b3542] rounded-[3px] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#ffe500]/10 border border-[#ffe500]/30 rounded-[3px] text-[#ffe500]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[17px] font-bold text-white mb-0.5">
                Хотите такие же измеримые результаты для своей компании?
              </h4>
              <p className="text-[13px] text-[#a7b0ba]">
                Проанализируем вашу нишу, покажем конкурентов и рассчитаем реалистичный прогноз трафика.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[12px] font-black uppercase tracking-wider px-6 py-3.5 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] transition-all cursor-pointer whitespace-nowrap shadow-[0_4px_15px_rgba(255,229,0,0.2)]"
          >
            <span>Разобрать мой бизнес</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
