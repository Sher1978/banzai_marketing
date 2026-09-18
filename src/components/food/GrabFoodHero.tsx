"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Maximize2,
  Armchair,
  Globe2,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function GrabFoodHero() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  // Calculator state: default $10,000
  const [revenue, setRevenue] = useState(10000);

  // Math: Estimated missed delivery revenue (approx 2.3x offline revenue)
  const calculateLoss = (val: number) => {
    return Math.round(val * 2.3);
  };

  const missedAmount = calculateLoss(revenue);

  const formatUsd = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const scrollToCTA = () => {
    const element = document.getElementById("audit-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fomoCards = [
    {
      id: 1,
      icon: Maximize2,
      badge: t.fomo1Badge,
      title: t.fomo1Title,
      text: t.fomo1Text,
      image: "/assets/food/infinite_hall.png",
      alt: "Infinite restaurant hall",
    },
    {
      id: 2,
      icon: Armchair,
      badge: t.fomo2Badge,
      title: t.fomo2Title,
      text: t.fomo2Text,
      image: "/assets/food/tourists_grab.png",
      alt: "Tourists choosing restaurant in Grab",
    },
    {
      id: 3,
      icon: Globe2,
      badge: t.fomo3Badge,
      title: t.fomo3Title,
      text: t.fomo3Text,
      image: "/assets/food/asia_growth.png",
      alt: "Asian food delivery market growth chart",
    },
  ];

  const [activeFomoIndex, setActiveFomoIndex] = useState(0);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#121212] text-white overflow-hidden border-b border-gray-800">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#00B14F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#00B14F]/20 border border-[#00B14F]/40 text-[#00FF66] text-xs font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            {t.heroBadge}
          </span>
          <span className="inline-flex items-center gap-1 bg-gray-900 border border-gray-800 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">
            {t.heroCountries}
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            {t.heroTitlePrefix}
            <span className="text-[#00FF66] underline decoration-[#00B14F]/50 underline-offset-8">
              {t.heroTitleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto">
            {t.heroSub}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToCTA}
              className="bg-[#00B14F] hover:bg-[#009643] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#00B14F]/40 hover:shadow-2xl hover:shadow-[#00B14F]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3"
            >
              <span>{t.heroCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 bg-gray-900/90 border border-gray-800 rounded-xl px-4 py-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#00FF66]" />
              <span>{t.heroTrust}</span>
            </div>
          </div>
        </div>

        {/* Interactive Revenue Calculator & FOMO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* CALCULATOR CARD (7 cols) */}
          <div className="lg:col-span-7 bg-gray-900/90 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      {t.calcTitle}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {t.calcSub}
                    </p>
                  </div>
                </div>
                <span className="bg-gray-800 text-gray-300 text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                  Grab & Foodpanda ROI
                </span>
              </div>

              {/* Slider Input */}
              <div className="my-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-300">
                    {t.calcLabel}
                  </label>
                  <span className="text-xl font-extrabold text-[#00FF66] bg-[#00B14F]/10 px-3 py-1 rounded-xl border border-[#00B14F]/30">
                    {formatUsd(revenue)}
                  </span>
                </div>

                <input
                  type="range"
                  min={2000}
                  max={50000}
                  step={1000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00B14F]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>$2,000 / mo</span>
                  <span>$25,000 / mo</span>
                  <span>$50,000 / mo</span>
                </div>
              </div>
            </div>

            {/* DYNAMIC RED ALERT BOX */}
            <div className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent border border-red-500/30 rounded-2xl p-5 sm:p-6 mt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                    {t.calcLossTag}
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-white mb-2">
                    {t.calcLossTextPrefix}
                    <span className="text-red-400 font-black underline decoration-red-500">
                      {formatUsd(missedAmount)}
                    </span>
                    {t.calcLossTextSuffix}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                    {t.calcLossSub}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOMO SLIDER / CARDS (5 cols) */}
          <div className="lg:col-span-5 bg-gray-900/90 rounded-3xl p-6 sm:p-8 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00FF66]" />
                  <span className="font-extrabold text-sm text-white uppercase tracking-wide">
                    {t.fomoHeader}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {fomoCards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFomoIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeFomoIndex === idx
                          ? "bg-[#00B14F] w-6"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Card Content */}
              <div className="relative min-h-[380px]">
                {fomoCards.map((card, idx) => {
                  if (idx !== activeFomoIndex) return null;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <span className="inline-block bg-[#00B14F]/20 text-[#00FF66] text-xs font-bold px-3 py-1 rounded-full border border-[#00B14F]/30 mb-2">
                          {card.badge}
                        </span>
                        <h4 className="text-xl font-black text-white leading-snug">
                          {card.title}
                        </h4>
                      </div>

                      {card.image && (
                        <div className="relative rounded-2xl overflow-hidden border border-gray-800 h-44 sm:h-48 group shadow-xl">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none" />
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal bg-gray-950/90 p-4 rounded-2xl border border-gray-800 shadow-md">
                        {card.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-800 mt-4">
              <button
                onClick={() =>
                  setActiveFomoIndex((prev) => (prev > 0 ? prev - 1 : fomoCards.length - 1))
                }
                className="p-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-gray-400">
                {activeFomoIndex + 1} / {fomoCards.length}
              </span>
              <button
                onClick={() =>
                  setActiveFomoIndex((prev) => (prev < fomoCards.length - 1 ? prev + 1 : 0))
                }
                className="p-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
