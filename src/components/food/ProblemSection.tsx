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
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function ProblemSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

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
            {t.probBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            {t.probTitle}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            {t.probSub}
          </p>
          <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-gray-300 font-medium">
            {t.probAlert}
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
                {t.p1Tag}
              </span>

              {/* Fixed Header & Text container to guarantee exact alignment */}
              <div className="min-h-[170px] flex flex-col justify-start mb-4">
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                  {t.p1Title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {t.p1Desc}
                </p>
              </div>
            </div>

            {/* SCHEMATIC 1: FOOD COMBO UI */}
            <div className="p-4 bg-gray-950/90 border border-gray-800 rounded-2xl min-h-[160px] flex flex-col justify-between group-hover:border-[#00B14F]/40 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-[#00FF66]">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#00FF66]" />
                  {t.p1WidgetHeader}
                </span>
                <span className="text-[10px] text-[#00FF66] bg-[#00B14F]/20 px-2 py-0.5 rounded-full border border-[#00B14F]/30 font-extrabold">
                  {t.p1WidgetBadge}
                </span>
              </div>

              <div className="flex items-center justify-between gap-1 sm:gap-2 my-auto py-1">
                {/* Item 1 */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-0.5">🥪</span>
                  <span className="text-[10px] font-bold text-white uppercase">{t.p1Item1}</span>
                  <span className="text-[9px] text-gray-400">$8.00</span>
                </div>

                <Plus className="w-3.5 h-3.5 text-gray-500 shrink-0" />

                {/* Item 2 */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-0.5">🍰</span>
                  <span className="text-[10px] font-bold text-white uppercase">{t.p1Item2}</span>
                  <span className="text-[9px] text-gray-400">$4.50</span>
                </div>

                <Plus className="w-3.5 h-3.5 text-gray-500 shrink-0" />

                {/* Item 3 */}
                <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-2 text-center flex flex-col items-center justify-center">
                  <span className="text-xl mb-0.5">🥤</span>
                  <span className="text-[10px] font-bold text-white uppercase">{t.p1Item3}</span>
                  <span className="text-[9px] text-gray-400">$3.50</span>
                </div>
              </div>

              {/* Result Banner */}
              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                <span className="text-gray-400">{t.p1Result}</span>
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
                {t.p2Tag}
              </span>

              {/* Fixed Header & Text container to guarantee exact alignment */}
              <div className="min-h-[170px] flex flex-col justify-start mb-4">
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                  {t.p2Title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {t.p2Desc}
                </p>
              </div>
            </div>

            {/* SCHEMATIC 2: ACCOUNT BALANCE UI */}
            <div className="p-4 bg-gray-950/90 border border-red-500/30 rounded-2xl min-h-[160px] flex flex-col justify-between group-hover:border-red-500/60 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-red-400 font-bold">
                  <TrendingDown className="w-4 h-4 text-red-400" />
                  {t.p2WidgetHeader}
                </span>
                <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20 font-bold">
                  {t.p2WidgetBadge}
                </span>
              </div>

              <div className="my-auto py-1 text-center bg-red-950/40 border border-red-500/20 rounded-xl p-2.5">
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                  {t.p2WidgetStat}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-red-500 tracking-tight drop-shadow-[0_0_10px_rgba(239,68,68,0.4)] animate-pulse">
                  -$123,456
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[10px] text-gray-400">
                <span>{t.p2WidgetReason}</span>
                <span className="text-red-400 font-semibold">0 SEO keys</span>
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
                {t.p3Tag}
              </span>

              {/* Fixed Header & Text container to guarantee exact alignment */}
              <div className="min-h-[170px] flex flex-col justify-start mb-4">
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00B14F] transition-colors">
                  {t.p3Title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {t.p3Desc}
                </p>
              </div>
            </div>

            {/* SCHEMATIC 3: HOURGLASS UI */}
            <div className="p-4 bg-gray-950/90 border border-gray-800 rounded-2xl min-h-[160px] flex flex-col justify-between group-hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 border-b border-gray-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Hourglass className="w-4 h-4 text-amber-400" />
                  {t.p3WidgetHeader}
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 font-bold">
                  {t.p3WidgetBadge}
                </span>
              </div>

              {/* Hourglass & Bar Chart UI */}
              <div className="my-auto py-1 flex items-center justify-between gap-3 bg-gray-900 border border-gray-800 rounded-xl p-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Hourglass className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">{t.p3WidgetControl}</div>
                    <div className="text-[9px] text-gray-400">{t.p3WidgetSub}</div>
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

              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[10px] text-gray-400">
                <span>{t.p3WidgetStatus}</span>
                <span className="text-amber-400 font-semibold">{t.p3WidgetStatusVal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
