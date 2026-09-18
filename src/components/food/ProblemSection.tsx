"use client";

import React from "react";
import { AlertTriangle, EyeOff, Layers, Clock, Flame } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Layers,
      num: "01",
      title: "Нет продуктовой матрицы",
      description:
        "Вы продаете те же блюда, что и в зале. Без специальных «Grab-комбо», апселов и правильных групп модификаторов средний чек не растет, а клиент уходит к более продуманным сетам.",
      badge: "Утечка чека",
    },
    {
      icon: EyeOff,
      num: "02",
      title: "Слепые зоны алгоритмов",
      description:
        "Отсутствие SEO-ключей в названиях, неправильно настроенные «промо-часы» (Happy Hours) и мертвые акции, сжигающие маржу без реального роста рейтинга.",
      badge: "Невидимость в ТОПе",
    },
    {
      icon: Clock,
      num: "03",
      title: "Это требует ежедневной работы",
      description:
        "В Grab нужно играть каждый день — тестировать офферы, управлять ставками рекламы, решать проблемы с курьерами. У вас, как у владельца, на это просто нет времени.",
      badge: "Дефицит ресурса",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00B14F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" />
            Главный миф владельцев ресторанов
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Думаете, достаточно просто добавить меню в приложение и ждать курьеров?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            На улице вы конкурируете с тремя заведениями по соседству. Внутри Grab вы одновременно
            конкурируете с <span className="text-[#00B14F] font-bold">сотней ресторанов</span> в
            радиусе 5 км.
          </p>
          <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-300 font-medium">
            Если вы просто загрузили прайс-лист — вы невидимы. Присутствие ради присутствия — это
            мертвый профиль и минус 30% комиссии платформе на пустом месте.
          </div>
        </div>

        {/* 3 Problem Cards Grid with Schematic Infographics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] group-hover:bg-[#00B14F] group-hover:text-white transition-all">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-700 group-hover:text-[#00B14F]/40 transition-colors">
                  01
                </span>
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md mb-3">
                Утечка чека
              </span>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                Нет продуктовой матрицы
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Вы продаете те же блюда, что и в зале. Без специальных «Grab-комбо», апселов и правильных групп модификаторов средний чек не растет, а клиент уходит к более продуманным сетам.
              </p>
            </div>

            {/* SCHEMATIC INFOGRAPHIC 1: Product Matrix & Revenue Leak */}
            <div className="mt-5 p-3.5 bg-gray-950/80 border border-gray-800 rounded-2xl relative overflow-hidden group-hover:border-[#00B14F]/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2 border-b border-gray-800/80 pb-1.5">
                <span className="flex items-center gap-1.5 text-red-400 font-bold">
                  <Flame className="w-3.5 h-3.5" /> Схема матричных потерь
                </span>
                <span className="text-gray-500">Чек: $12 вместо $38</span>
              </div>
              {/* Vector Node Diagram */}
              <svg className="w-full h-16 text-gray-600" viewBox="0 0 240 65" fill="none">
                <path d="M20 32 H70 M70 32 L110 15 M70 32 L110 50 M110 15 H160 M110 50 H160 M160 15 L200 32 M160 50 L200 32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="20" cy="32" r="8" fill="#1e293b" stroke="#00B14F" strokeWidth="2" />
                <text x="20" y="35" textAnchor="middle" fill="#00FF66" fontSize="8" fontWeight="bold">Single</text>
                
                <rect x="70" y="8" width="45" height="15" rx="4" fill="#1e1b4b" stroke="#ef4444" strokeWidth="1" />
                <text x="92" y="19" textAnchor="middle" fill="#ef4444" fontSize="7">Combo Upsell</text>
                
                <rect x="70" y="42" width="45" height="15" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <text x="92" y="53" textAnchor="middle" fill="#94a3b8" fontSize="7">Add-ons</text>

                <circle cx="200" cy="32" r="10" fill="#450a0a" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                <text x="200" y="35" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="bold">-65%</text>
              </svg>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B14F]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] group-hover:bg-[#00B14F] group-hover:text-white transition-all">
                  <EyeOff className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-700 group-hover:text-[#00B14F]/40 transition-colors">
                  02
                </span>
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md mb-3">
                Невидимость в ТОПе
              </span>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                Слепые зоны алгоритмов
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Отсутствие SEO-ключей в названиях, неправильно настроенные «промо-часы» (Happy Hours) и мертвые акции, сжигающие маржу без реального роста рейтинга.
              </p>
            </div>

            {/* SCHEMATIC INFOGRAPHIC 2: Blind Zone Radar & Visibility Map */}
            <div className="mt-5 p-3.5 bg-gray-950/80 border border-gray-800 rounded-2xl relative overflow-hidden group-hover:border-[#00B14F]/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2 border-b border-gray-800/80 pb-1.5">
                <span className="flex items-center gap-1.5 text-red-400 font-bold">
                  <EyeOff className="w-3.5 h-3.5" /> Схема слепой зоны Grab
                </span>
                <span className="text-gray-500">Позиция: #87 в 5 км</span>
              </div>
              {/* Vector Radar Diagram */}
              <svg className="w-full h-16 text-gray-600" viewBox="0 0 240 65" fill="none">
                <circle cx="120" cy="32" r="28" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="120" cy="32" r="18" stroke="#334155" strokeWidth="1" />
                <circle cx="120" cy="32" r="6" fill="#00B14F" />
                <line x1="80" y1="32" x2="160" y2="32" stroke="#334155" strokeWidth="1" />
                <line x1="120" y1="5" x2="120" y2="59" stroke="#334155" strokeWidth="1" />
                
                <circle cx="148" cy="18" r="5" fill="#ef4444" stroke="#f87171" strokeWidth="1.5" className="animate-ping" />
                <text x="175" y="20" fill="#ef4444" fontSize="8" fontWeight="bold">Слепая зона</text>
                <text x="175" y="30" fill="#94a3b8" fontSize="7">0 SEO ключей</text>

                <path d="M120 32 L145 15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] group-hover:bg-[#00B14F] group-hover:text-white transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-700 group-hover:text-[#00B14F]/40 transition-colors">
                  03
                </span>
              </div>

              <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md mb-3">
                Дефицит ресурса
              </span>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                Это требует ежедневной работы
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                В Grab нужно играть каждый день — тестировать офферы, управлять ставками рекламы, решать проблемы с курьерами. У вас, как у владельца, на это просто нет времени.
              </p>
            </div>

            {/* SCHEMATIC INFOGRAPHIC 3: Daily Timeline & Operational Deficit */}
            <div className="mt-5 p-3.5 bg-gray-950/80 border border-gray-800 rounded-2xl relative overflow-hidden group-hover:border-[#00B14F]/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2 border-b border-gray-800/80 pb-1.5">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Clock className="w-3.5 h-3.5" /> Операционный дефицит
                </span>
                <span className="text-gray-500">24/7 ручной контроль</span>
              </div>
              {/* Vector Timeline & Overload Diagram */}
              <svg className="w-full h-16 text-gray-600" viewBox="0 0 240 65" fill="none">
                <line x1="20" y1="45" x2="220" y2="45" stroke="#334155" strokeWidth="2" />
                <text x="20" y="58" fill="#64748b" fontSize="7">08:00</text>
                <text x="70" y="58" fill="#64748b" fontSize="7">12:00</text>
                <text x="120" y="58" fill="#64748b" fontSize="7">16:00</text>
                <text x="170" y="58" fill="#64748b" fontSize="7">20:00</text>
                <text x="215" y="58" fill="#64748b" fontSize="7">23:59</text>

                <path d="M20 45 L50 25 L80 40 L110 10 L140 35 L170 15 L200 42 L220 45" stroke="#eab308" strokeWidth="2" fill="none" />
                
                <rect x="95" y="2" width="50" height="15" rx="3" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
                <text x="120" y="12" textAnchor="middle" fill="#fbbf24" fontSize="7" fontWeight="bold">Перегрузка 100%</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
