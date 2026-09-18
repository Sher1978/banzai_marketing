"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  DollarSign,
  Maximize2,
  Armchair,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function GrabFoodHero() {
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
      badge: "Бесконечный вместимость",
      title: "⚡ Нет потолка по столам.",
      text: "Офлайн вы ограничены 15 столиками. В агрегаторах у вас бесконечный зал на 1000 мест. Ваш ресторан может зарабатывать в разы больше своей физической вместимости.",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-200",
      iconColor: "text-[#00B14F]",
    },
    {
      id: 2,
      icon: Armchair,
      badge: "Поведение туристов в Азии",
      title: "⚡ Туристам плевать на ваши дорогие диваны.",
      text: "Вы вложили $50,000 в ремонт и атмосферу. Но 8 из 10 туристов в курортных городах сейчас открывают приложение, потому что хотят есть «здесь и сейчас». Им важны сочные фото, отзывы и горячая еда, а не ваши люстры.",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-200",
      iconColor: "text-amber-600",
    },
    {
      id: 3,
      icon: Globe2,
      badge: "Рынок Азии 2026",
      title: "⚡ Диджитал-экспансия Азии.",
      text: "Глобальный рынок доставки в Азии стабильно растет каждый год. Тот, кто не заберет ТОП выдачи агрегатора сегодня, завтра останется с пустым залом.",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      iconColor: "text-blue-600",
    },
  ];

  const [activeFomoIndex, setActiveFomoIndex] = useState(0);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#E2E6EA] via-[#E8EDF2] to-[#E2E6EA] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#00B14F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#00B14F]/10 border border-[#00B14F]/20 text-[#00B14F] text-xs font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Агентство доставки Grab & Foodpanda по всей Азии
          </span>
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            🇹🇭 Таиланд • 🇻🇳 Вьетнам • 🇮🇩 Бали • 🇲🇾 Малайзия
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
            Доставка — это ваш основной бизнес, а не подработка. Мы увеличим вашу прибыль из Grab{" "}
            <span className="text-[#00B14F] underline decoration-[#00B14F]/30 underline-offset-8">
              в 3 раза.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Ваши клиенты не пришли к вам сегодня не потому, что у вас невкусно. Они просто ждут,
            когда еда приедет к ним. Запускаем ваш рост на платформах Grab и Foodpanda по всей Азии.
            Настраиваем доставку под ключ за <span className="font-bold text-gray-900">$500</span> и
            берем управление на себя за <span className="font-bold text-[#00B14F]">10% от чистой прибыли</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToCTA}
              className="bg-[#00B14F] hover:bg-[#009643] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#00B14F]/30 hover:shadow-2xl hover:shadow-[#00B14F]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3"
            >
              <span>Забронировать аудит заведения</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white/80 border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#00B14F]" />
              <span>Оплата 10% только с прироста чистой прибыли</span>
            </div>
          </div>
        </div>

        {/* Interactive Revenue Calculator & FOMO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* CALCULATOR CARD (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/60 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E72929]/10 flex items-center justify-center text-[#E72929] font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900">
                      Интерактивный Калькулятор
                    </h3>
                    <p className="text-xs text-gray-500">
                      Сколько вы теряете прямо сейчас?
                    </p>
                  </div>
                </div>
                <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                  Grab & Foodpanda ROI
                </span>
              </div>

              {/* Slider Input */}
              <div className="my-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Укажите вашу текущую выручку в зале (в месяц):
                  </label>
                  <span className="text-xl font-extrabold text-gray-900 bg-emerald-50 text-[#00B14F] px-3 py-1 rounded-xl border border-emerald-200/80">
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
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00B14F]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>$2,000 / мес</span>
                  <span>$25,000 / мес</span>
                  <span>$50,000 / мес</span>
                </div>
              </div>
            </div>

            {/* DYNAMIC RED ALERT BOX */}
            <div className="bg-gradient-to-br from-[#E72929]/5 via-[#E72929]/10 to-red-100/30 border border-[#E72929]/20 rounded-2xl p-5 sm:p-6 mt-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#E72929] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E72929] mb-1">
                    Упущенный потенциал доставки
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-gray-900 mb-2">
                    Вы упускаете минимум{" "}
                    <span className="text-[#E72929] font-black underline decoration-red-300">
                      {formatUsd(missedAmount)}
                    </span>{" "}
                    из Grab
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    Если вы думаете, что доставка — это лишь приятный бонус к залу, вы забираете
                    только <span className="font-bold text-gray-900">30% своего реального потенциала</span> на
                    азиатском рынке.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOMO SLIDER / CARDS (5 cols) */}
          <div className="lg:col-span-5 bg-[#00B14F]/5 rounded-3xl p-6 sm:p-8 border border-[#00B14F]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#00B14F]/15">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00B14F]" />
                  <span className="font-extrabold text-sm text-gray-900 uppercase tracking-wide">
                    Killer Arguments
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
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Card Content */}
              <div className="relative min-h-[220px]">
                {fomoCards.map((card, idx) => {
                  if (idx !== activeFomoIndex) return null;
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <span className="inline-block bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-gray-200">
                        {card.badge}
                      </span>
                      <h4 className="text-xl font-black text-gray-900 leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed font-normal bg-white/70 p-4 rounded-2xl border border-gray-200/60 shadow-sm">
                        {card.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons for FOMO cards */}
            <div className="flex items-center justify-between pt-6 border-t border-[#00B14F]/15 mt-4">
              <button
                onClick={() =>
                  setActiveFomoIndex((prev) => (prev > 0 ? prev - 1 : fomoCards.length - 1))
                }
                className="p-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-gray-500">
                {activeFomoIndex + 1} из {fomoCards.length}
              </span>
              <button
                onClick={() =>
                  setActiveFomoIndex((prev) => (prev < fomoCards.length - 1 ? prev + 1 : 0))
                }
                className="p-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
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
