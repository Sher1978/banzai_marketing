"use client";

import React from "react";
import {
  Search,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function ClientJourneySection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const isRu = lang === "ru";
  const isUk = lang === "uk";

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0F17] via-[#111827] to-[#0B0F17] text-white relative overflow-hidden border-y border-gray-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00B14F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/20 border border-[#00B14F]/50 text-[#00FF66] text-xs font-black px-4 py-2 rounded-full mb-4 uppercase tracking-widest shadow-lg shadow-[#00B14F]/20">
            <Sparkles className="w-4 h-4" />
            {t.cjBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            {t.cjTitlePrefix}
            <span className="text-[#00FF66] underline decoration-[#00B14F]/60 underline-offset-8">
              {t.cjTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-xl font-normal leading-relaxed">
            {t.cjSub}
          </p>
        </div>

        {/* 3 STEPS CARDS WITH INFOGRAPHICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* STEP 1 */}
          <div className="bg-gradient-to-b from-gray-900/95 to-gray-950/95 border-2 border-[#00B14F]/40 hover:border-[#00FF66] rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-[#00B14F]/10 hover:shadow-[#00B14F]/25 transition-all duration-300 relative group transform hover:-translate-y-1.5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00B14F] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#00B14F]/40 group-hover:scale-105 transition-transform">
                  01
                </div>
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider bg-[#00B14F]/20 text-[#00FF66] border border-[#00B14F]/40">
                  {t.cjStep1Tag}
                </span>
              </div>

              {/* Fixed Header & Description Container */}
              <div className="min-h-[210px] flex flex-col justify-start mb-4">
                <h3 className="text-2xl font-black text-white group-hover:text-[#00FF66] transition-colors leading-tight mb-3">
                  {t.cjStep1Title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {t.cjStep1Desc}
                </p>
              </div>

              {/* INFOGRAPHIC UI CARD 1: RADAR SCANNER */}
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-4 mb-4 min-h-[145px] flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-gray-800 pb-2">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <Search className="w-3.5 h-3.5 text-[#00FF66]" />
                      Grab AI Scanner
                    </span>
                    <span className="text-[#00FF66] animate-pulse text-[11px]">
                      ● {isRu ? "Сканирование 5 км" : isUk ? "Сканування 5 км" : "5-km radius scan"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{isRu ? "Сливы выручки:" : isUk ? "Зливи виручки:" : "Margin leaks:"}</span>
                    <span className="text-red-400 font-bold">-28% {isRu ? "маржи" : isUk ? "маржі" : "margin"}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{isRu ? "Квота района:" : isUk ? "Квота району:" : "District quota:"}</span>
                    <span className="text-[#00FF66] font-bold">{isRu ? "1 место свободно" : isUk ? "1 місце вільне" : "1 spot open"}</span>
                  </div>
                </div>
                {/* Progress bar visual */}
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-gradient-to-r from-[#00B14F] to-[#00FF66] h-full w-[78%]" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-extrabold text-[#00FF66]">
              <span>{t.cjStep1Result}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-gradient-to-b from-gray-900/95 to-gray-950/95 border-2 border-[#00B14F]/60 hover:border-[#00FF66] rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-[#00B14F]/15 hover:shadow-[#00B14F]/30 transition-all duration-300 relative group transform hover:-translate-y-1.5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00B14F] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#00B14F]/40 group-hover:scale-105 transition-transform">
                  02
                </div>
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/40">
                  {t.cjStep2Tag}
                </span>
              </div>

              {/* Fixed Header & Description Container */}
              <div className="min-h-[210px] flex flex-col justify-start mb-4">
                <h3 className="text-2xl font-black text-white group-hover:text-[#00FF66] transition-colors leading-tight mb-3">
                  {t.cjStep2Title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {t.cjStep2Desc}
                </p>
              </div>

              {/* INFOGRAPHIC UI CARD 2: MENU SETUP MATRIX */}
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-4 mb-4 min-h-[145px] flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-gray-800 pb-2">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <Settings className="w-3.5 h-3.5 text-blue-400" />
                      Setup Matrix 100%
                    </span>
                    <span className="text-blue-400 font-bold text-[11px]">
                      3 {isRu ? "Языка (EN/TH/RU)" : isUk ? "Мови (EN/TH/RU)" : "Languages (EN/TH/RU)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Grab-combo:</span>
                    <span className="text-[#00FF66] font-bold">+35% order value</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>SEO index:</span>
                    <span className="text-blue-400 font-bold">Done</span>
                  </div>
                </div>
                {/* 3 Checkmark badges */}
                <div className="flex gap-2 mt-2">
                  <span className="bg-gray-900 border border-gray-800 text-[10px] text-gray-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00FF66]" /> Photos
                  </span>
                  <span className="bg-gray-900 border border-gray-800 text-[10px] text-gray-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00FF66]" /> SEO
                  </span>
                  <span className="bg-gray-900 border border-gray-800 text-[10px] text-gray-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00FF66]" /> Combos
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-extrabold text-blue-400">
              <span>{t.cjStep2Result}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-gradient-to-b from-gray-900/95 to-gray-950/95 border-2 border-[#00B14F] hover:border-[#00FF66] rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-[#00B14F]/20 hover:shadow-[#00B14F]/40 transition-all duration-300 relative group transform hover:-translate-y-1.5">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00B14F] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#00B14F]/40 group-hover:scale-105 transition-transform">
                  03
                </div>
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {t.cjStep3Tag}
                </span>
              </div>

              {/* Fixed Header & Description Container */}
              <div className="min-h-[210px] flex flex-col justify-start mb-4">
                <h3 className="text-2xl font-black text-white group-hover:text-[#00FF66] transition-colors leading-tight mb-3">
                  {t.cjStep3Title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {t.cjStep3Desc}
                </p>
              </div>

              {/* INFOGRAPHIC UI CARD 3: GROWTH CHART */}
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-4 mb-4 min-h-[145px] flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-gray-800 pb-2">
                    <span className="flex items-center gap-1.5 text-[#00FF66]">
                      <TrendingUp className="w-3.5 h-3.5 text-[#00FF66]" />
                      Revenue Growth +340%
                    </span>
                    <span className="text-amber-400 font-bold text-[11px]">
                      Grabix Report 2x/mo
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Rank status:</span>
                    <span className="text-[#00FF66] font-bold">TOP-5 in 4-km radius</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Service fee:</span>
                    <span className="text-[#00FF66] font-bold">% from new growth only</span>
                  </div>
                </div>

                {/* Infographic mini chart bars */}
                <div className="flex items-end gap-1.5 h-4 mt-2">
                  <div className="bg-gray-800 w-full h-[25%] rounded-sm" />
                  <div className="bg-gray-800 w-full h-[40%] rounded-sm" />
                  <div className="bg-[#00B14F]/60 w-full h-[65%] rounded-sm" />
                  <div className="bg-[#00B14F] w-full h-[85%] rounded-sm" />
                  <div className="bg-[#00FF66] w-full h-[100%] rounded-sm" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-extrabold text-[#00FF66]">
              <span>{t.cjStep3Result}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
