"use client";

import React from "react";
import { CheckCircle2, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function SolutionSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const isRu = lang === "ru";
  const isUk = lang === "uk";

  const stage1Items = isRu
    ? [
        "Глубокий аудит 5-км радиуса конкурентов в Grab/Foodpanda",
        "SEO-оптимизация наименований, тегов и категорий",
        "Сборка маржинальных Grab-сеттингов и продающих комбо",
        "Профессиональная локализация меню на 3 языка (EN, TH/VN, RU)",
      ]
    : isUk
    ? [
        "Глибокий аудит 5-км радіуса конкурентів у Grab/Foodpanda",
        "SEO-оптимізація найменувань, тегів та категорій",
        "Збірка маржинальних Grab-сетів та продаючих комбо",
        "Професійна локалізація меню 3 мовами (EN, TH/VN, RU)",
      ]
    : [
        "Deep audit of 5-km competitor radius in Grab/Foodpanda",
        "SEO optimization of dish names, tags, and categories",
        "High-margin Grab combo assembly & selling bundles",
        "Professional 3-language menu localization (EN, TH/VN, RU)",
      ];

  const stage2Items = isRu
    ? [
        "Постоянное ежедневное ведение и обслуживание профиля",
        "Маркетинг и управление рекламными кампаниями Grab Ads",
        "Аналитика и регулярная оптимизация конверсии в заказы",
        "Оперативное добавление, удаление и изменение позиций в меню",
        "Разрешение конфликтных ситуаций с курьерами и клиентами",
        "Прямое взаимодействие с официальной поддержкой Grab 24/7",
      ]
    : isUk
    ? [
        "Постійне щоденне ведення та обслуговування профілю",
        "Маркетинг та управління рекламними кампаніями Grab Ads",
        "Аналітика та регулярна оптимізація конверсії у замовлення",
        "Оперативне додавання, видалення та зміна позицій у меню",
        "Вирішення конфліктних ситуацій з кур'єрами та клієнтами",
        "Пряма взаємодія з офіційною підтримкою Grab 24/7",
      ]
    : [
        "Continuous daily management and profile maintenance",
        "Grab Ads marketing campaign management & strategy",
        "Analytics & ongoing conversion rate optimization",
        "Instant menu item additions, edits, and price updates",
        "Conflict resolution with drivers and customer complaints",
        "Direct 24/7 liaison with official Grab partner support",
      ];

  return (
    <section className="py-20 bg-[#121212] text-white relative border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/20 border border-[#00B14F]/40 text-[#00FF66] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            {t.solBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            {t.solTitle}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {t.solSub}
          </p>
        </div>

        {/* 2 EQUAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* STAGE 1 CARD */}
          <div className="bg-gray-900/95 rounded-3xl p-8 border-2 border-gray-800 hover:border-[#00B14F] shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#00B14F]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00B14F]/25 transition-all" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-block bg-gray-800 text-gray-300 text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-gray-700">
                  {t.stage1Badge}
                </div>
                <span className="bg-gray-800 text-gray-300 text-[11px] font-black px-3 py-1 rounded-full border border-gray-700 uppercase tracking-wider">
                  {t.stage1Tag}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {t.stage1Title}
              </h3>

              <div className="inline-flex items-baseline gap-2 bg-[#00B14F]/20 text-[#00FF66] border border-[#00B14F]/40 px-4 py-2 rounded-2xl mb-6 font-extrabold text-base sm:text-lg shadow-inner">
                <span>{t.stage1Price}</span>
                <span className="text-xs text-gray-300 font-semibold">{t.stage1PriceSub}</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal min-h-[72px]">
                {t.stage1Desc}
              </p>

              {/* STAGE 1 BULLETS */}
              <div className="space-y-3.5 pt-6 border-t border-gray-800">
                {stage1Items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-200"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#00FF66] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STAGE 2 CARD */}
          <div className="bg-gray-900/95 rounded-3xl p-8 border-2 border-[#00B14F] shadow-2xl shadow-[#00B14F]/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#00FF66]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00FF66]/30 transition-all" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-block bg-[#00B14F] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md shadow-[#00B14F]/30">
                  {t.stage2Badge}
                </div>
                <span className="bg-[#00B14F] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md shadow-[#00B14F]/30">
                  {t.stage2Tag}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {t.stage2Title}
              </h3>

              <div className="inline-flex items-baseline gap-2 bg-[#00B14F]/20 text-[#00FF66] border border-[#00B14F]/40 px-4 py-2 rounded-2xl mb-6 font-extrabold text-base sm:text-lg">
                <span>{t.stage2Price}</span>
                <span className="text-xs text-gray-300 font-semibold">{t.stage2PriceSub}</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal min-h-[72px]">
                {t.stage2Desc}
              </p>

              {/* STAGE 2 BULLETS */}
              <div className="space-y-3.5 pt-6 border-t border-gray-800">
                {stage2Items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-200"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#00FF66] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHT BANNER */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 rounded-3xl p-8 text-white shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#00B14F] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#00B14F]/40">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-black mb-1 text-white">
                {t.solBannerTitle}
              </h4>
              <p className="text-gray-300 text-sm font-normal">
                {t.solBannerSub}
              </p>
            </div>
          </div>
          <a
            href="#audit-form"
            className="bg-[#00B14F] hover:bg-[#009643] text-white text-sm font-extrabold px-6 py-3.5 rounded-2xl whitespace-nowrap shadow-lg shadow-[#00B14F]/30 hover:shadow-xl transition-all"
          >
            {t.solBannerCta}
          </a>
        </div>
      </div>
    </section>
  );
}
