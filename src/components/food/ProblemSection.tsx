"use client";

import React from "react";
import {
  AlertTriangle,
  EyeOff,
  Layers,
  Clock,
  Plus,
  UtensilsCrossed,
  TrendingDown,
  Hourglass,
} from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden border-y border-gray-800">
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
          {/* CARD 1 */}
          <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B14F]/5 rounded-full blur-2xl pointer-events-none" />
            
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

            {/* SCHEMATIC 1: FOOD COMBO UI (Sandwich + Dessert + Drink) */}
            <div className="mt-5 p-4 bg-gray-950/90 border border-gray-800 rounded-2xl relative overflow-hidden group-hover:border-[#00B14F]/40 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 mb-3 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-[#00FF66]">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#00FF66]" />
                  Схема Grab Food-Комбо
                </span>
                <span className="text-[10px] text-[#00FF66] bg-[#00B14F]/20 px-2 py-0.5 rounded-full border border-[#00B14F]/30 font-extrabold">
                  +35% к чеку
                </span>
              </div>

              <div className="flex items-center justify-between gap-1 sm:gap-2">
                {/* Item 1: Sandwich */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-1">🥪</span>
                  <span className="text-[10px] font-bold text-white uppercase">Сэндвич</span>
                  <span className="text-[9px] text-gray-400">$8.00</span>
                </div>

                <Plus className="w-3.5 h-3.5 text-gray-500 shrink-0" />

                {/* Item 2: Dessert */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-1">🍰</span>
                  <span className="text-[10px] font-bold text-white uppercase">Десерт</span>
                  <span className="text-[9px] text-gray-400">$4.50</span>
                </div>

                <Plus className="w-3.5 h-3.5 text-gray-500 shrink-0" />

                {/* Item 3: Drink */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-1">🥤</span>
                  <span className="text-[10px] font-bold text-white uppercase">Напиток</span>
                  <span className="text-[9px] text-gray-400">$3.50</span>
                </div>
              </div>

              {/* Result Banner */}
              <div className="mt-2.5 pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                <span className="text-gray-400">Итоговый Grab-сет:</span>
                <span className="text-white font-extrabold flex items-center gap-1">
                  <span className="line-through text-gray-500 text-[10px]">$16.00</span>
                  <span className="text-[#00FF66]">$22.50 Combo</span>
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00B14F]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

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

            {/* SCHEMATIC 2: ACCOUNT BALANCE UI (-$123,456) */}
            <div className="mt-5 p-4 bg-gray-950/90 border border-red-500/30 rounded-2xl relative overflow-hidden group-hover:border-red-500/60 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 mb-2 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-red-400 font-bold">
                  <TrendingDown className="w-4 h-4 text-red-400" />
                  Баланс аккаунта в Grab
                </span>
                <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20 font-bold">
                  Слив маржи
                </span>
              </div>

              <div className="my-2 text-center bg-red-950/40 border border-red-500/20 rounded-xl p-3">
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                  Потерянный потенциал выручки
                </div>
                <div className="text-2xl sm:text-3xl font-black text-red-500 tracking-tight drop-shadow-[0_0_10px_rgba(239,68,68,0.4)] animate-pulse">
                  -$123,456
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
                <span>Причина: Невидимость в поисках</span>
                <span className="text-red-400 font-semibold">0 SEO ключей</span>
              </div>
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

            {/* SCHEMATIC 3: HOURGLASS & CHARTS UI */}
            <div className="mt-5 p-4 bg-gray-950/90 border border-gray-800 rounded-2xl relative overflow-hidden group-hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 mb-3 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Hourglass className="w-4 h-4 text-amber-400" />
                  Затраты времени владельца
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 font-bold">
                  -4.5 ч / день
                </span>
              </div>

              {/* Hourglass & Bar Chart UI */}
              <div className="flex items-center justify-between gap-3 bg-gray-900 border border-gray-800 rounded-xl p-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Hourglass className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Ручной контроль</div>
                    <div className="text-[9px] text-gray-400">Ставки, курьеры, отзывы</div>
                  </div>
                </div>

                {/* Mini Activity Chart Bars */}
                <div className="flex items-end gap-1 h-7 px-2 border-l border-gray-800">
                  <div className="bg-amber-500/40 w-1.5 h-[40%] rounded-sm" />
                  <div className="bg-amber-500/70 w-1.5 h-[75%] rounded-sm" />
                  <div className="bg-amber-400 w-1.5 h-[100%] rounded-sm animate-pulse" />
                  <div className="bg-amber-500/60 w-1.5 h-[60%] rounded-sm" />
                  <div className="bg-amber-500/80 w-1.5 h-[90%] rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
