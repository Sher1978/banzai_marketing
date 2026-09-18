"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Settings, RefreshCw, Headset, TrendingUp } from "lucide-react";

export default function SolutionSection() {
  const stage2Items = [
    "Постоянное ежедневное ведение и обслуживание профиля",
    "Маркетинг и управление внутренними рекламными кампаниями",
    "Аналитика и регулярная оптимизация аккаунта",
    "Донастройка и улучшение показателей конверсии в процессе работы",
    "Оперативное добавление, удаление и изменение позиций в меню",
    "Решение технических и организационных вопросов платформы",
    "Разрешение конфликтных ситуаций, в том числе связанных с водителями/курьерами",
    "Прямое взаимодействие с официальным саппортом Grab по любым проблемам",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#E5E8EC] via-[#EAEFF4] to-[#E5E8EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/10 border border-[#00B14F]/30 text-[#00B14F] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            Полное агентское сопровождение
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Эту ежедневную войну с алгоритмами ведем мы.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Мы полностью забираем на себя операционную работу с платформами доставки, обеспечивая
            постоянное обслуживание, управление, маркетинг, аналитику и развитие вашего аккаунта Grab
            на полном автопилоте.
          </p>
        </div>

        {/* 2 STAGES CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* STAGE 1 (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-100 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-block bg-gray-900 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl mb-6">
                ЭТАП 1
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Глубокая аналитика и идеальный Setup
              </h3>
              <div className="inline-flex items-baseline gap-2 bg-emerald-50 text-[#00B14F] border border-emerald-200 px-4 py-2 rounded-2xl mb-6 font-extrabold text-base sm:text-lg">
                <span>Фиксированная настройка</span>
                <span className="text-xs text-gray-500 font-semibold">под ключ</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                Мы полностью анализируем ваш профиль. Затем переупаковываем его в строгом соответствии с
                поисковыми алгоритмами Grab и Foodpanda: аппетитные фото, переведенные SEO-тексты на 3
                языка (английский, тайский/вьетнамский, русский), правильная архитектура меню и комбо.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                <span>SEO-оптимизация наименований и описаний</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                <span>Сборка продающих Grab-сеттингов и комбо</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                <span>Локализация на 3 ключевых языка Азии</span>
              </div>
            </div>
          </div>

          {/* STAGE 2 (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border-2 border-[#00B14F] shadow-2xl shadow-[#00B14F]/10 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-[#00B14F] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Ежедневный автопилот
            </div>
            <div>
              <div className="inline-block bg-[#00B14F] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl mb-6">
                ЭТАП 2
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Полное сопровождение и ведение
              </h3>
              <div className="inline-flex items-baseline gap-2 bg-[#00B14F]/10 text-[#00B14F] border border-[#00B14F]/30 px-4 py-2 rounded-2xl mb-6 font-extrabold text-base sm:text-lg">
                <span>Процент от чистой прибыли</span>
                <span className="text-xs text-gray-600 font-semibold">
                  (только с нового прироста)
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                Наша команда профи становится вашим внешним отделом доставки. В нашу ежедневную работу входит:
              </p>

              {/* 8 Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {stage2Items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00B14F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHT BANNER */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#00B14F] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#00B14F]/40">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-black mb-1">
                Наш интерес — только ваш финансовый рост.
              </h4>
              <p className="text-gray-300 text-sm font-normal">
                Мы получаем процент исключительно с прироста вашей чистой маржи. Нет роста — мы работаем бесплатно.
              </p>
            </div>
          </div>
          <a
            href="#audit-form"
            className="bg-[#00B14F] hover:bg-[#009643] text-white text-sm font-extrabold px-6 py-3.5 rounded-2xl whitespace-nowrap shadow-lg shadow-[#00B14F]/30 hover:shadow-xl transition-all"
          >
            Начать работу с нами
          </a>
        </div>
      </div>
    </section>
  );
}
