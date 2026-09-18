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

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.num}
                className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] group-hover:bg-[#00B14F] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-gray-700 group-hover:text-[#00B14F]/40 transition-colors">
                      {prob.num}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md mb-3">
                    {prob.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B14F] transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
