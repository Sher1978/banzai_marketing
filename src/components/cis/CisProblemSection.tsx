"use client";

import React from 'react';
import { ArrowUpRight, ShieldCheck, Search, MessageSquareShare } from 'lucide-react';

interface CisProblemSectionProps {
  onOpenAudit: () => void;
}

export default function CisProblemSection({ onOpenAudit }: CisProblemSectionProps) {
  return (
    <section id="problem" className="py-20 md:py-28 relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[720px] mb-12">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
            <span className="w-5 h-[2px] bg-[#ffe500]" />
            <span>УПУЩЕННЫЙ СПРОС</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
            Карточка знакомит.<br />
            <span className="text-[#ffe500]">Сайт помогает выбрать.</span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
            Когда потенциальный клиент находит компанию на картах (2ГИС, Google, Яндекс), ему часто нужно больше информации перед обращением. Если он не находит понятных ответов — он переходит к следующей карточке конкурента.
          </p>
        </div>

        {/* 3 Pillar Problem / Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          <article className="bg-[#10171f] border border-[#29323c] p-7 rounded-[3px] hover:border-[#ffe500]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#ffe500] uppercase">
                01 / ДОВЕРИЕ
              </span>
              <ShieldCheck className="w-5 h-5 text-[#ffe500]/60 group-hover:text-[#ffe500] transition-colors" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">
              Хватает ли информации?
            </h3>
            <p className="text-[13px] text-[#a7b0ba] leading-relaxed">
              Подробные описания услуг, прозрачный прайс, реальные примеры работ и фото команды снимают базовые сомнения клиента за секунды.
            </p>
          </article>

          <article className="bg-[#10171f] border border-[#29323c] p-7 rounded-[3px] hover:border-[#ffe500]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#ffe500] uppercase">
                02 / ПОИСК
              </span>
              <Search className="w-5 h-5 text-[#ffe500]/60 group-hover:text-[#ffe500] transition-colors" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">
              Вас находят по услугам?
            </h3>
            <p className="text-[13px] text-[#a7b0ba] leading-relaxed">
              Отдельные целевые страницы под каждое направление и поисковый запрос создают мощную органическую видимость в Google и Яндексе без платы за клики.
            </p>
          </article>

          <article className="bg-[#10171f] border border-[#29323c] p-7 rounded-[3px] hover:border-[#ffe500]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#ffe500] uppercase">
                03 / КОНВЕРСИЯ
              </span>
              <MessageSquareShare className="w-5 h-5 text-[#ffe500]/60 group-hover:text-[#ffe500] transition-colors" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">
              Понятно, как обратиться?
            </h3>
            <p className="text-[13px] text-[#a7b0ba] leading-relaxed">
              Сайт ведет клиента к мгновенному звонку, сообщению в WhatsApp или заявке в 1 клик вместо того, чтобы оставлять его один на один с сомнениями.
            </p>
          </article>

        </div>

        {/* Yellow Bridge Banner */}
        <div className="bg-[#ffe500] text-[#111820] p-8 sm:p-10 md:p-12 rounded-[2px] shadow-[0_12px_40px_rgba(255,229,0,0.18)] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
          <div>
            <h3 className="text-[24px] sm:text-[32px] font-black tracking-[-0.03em] leading-tight mb-2.5">
              Не просто сайт. <span className="underline decoration-[#111820]/30 decoration-2">Система привлечения.</span>
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-relaxed max-w-[700px] text-[#222830] font-medium">
              Соединяем поисковую оптимизацию, понятную упаковку услуг и удобный путь к заявке. Без пустых обещаний «быстрых миллионов»: органический трафик требует стратегии и правильной технической базы, но навсегда избавляет от зависимости платить за каждый клик в перегретых аукционах.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="inline-flex items-center justify-center gap-2 text-[13px] font-black uppercase tracking-wider px-8 py-4 rounded-[2px] bg-[#111820] text-white hover:bg-[#1a232d] hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            <span>ОБСУДИТЬ ПРОЕКТ</span>
            <ArrowUpRight className="w-4 h-4 text-[#ffe500]" />
          </button>
        </div>

      </div>
    </section>
  );
}
