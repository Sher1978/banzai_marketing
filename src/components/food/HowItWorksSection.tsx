"use client";

import React from "react";
import { Search, PackageCheck, Zap, Receipt, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "1. Экспресс-аудит и проверка квоты района",
      subtitle: "Бесплатно за 15 минут",
      text: "Вы оставляете заявку. Мы проверяем квоту эксклюзивности вашего района (не более 2 ресторанов одной кухни), сканируем радиус 5 км в Grab/Foodpanda, оцениваем меню конкурентов и находим точки потенциального X3 роста.",
      badge: "Шаг 1 • Бесплатно",
      badgeBg: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    },
    {
      step: "02",
      icon: PackageCheck,
      title: "2. Переупаковка и Setup под ключ",
      subtitle: "Фиксированная настройка",
      text: "Мы берем на себя полную настройку: аппетитная фуд-съемка/визуал, локализация SEO-описаний на 3 языка (English, Тайский/Вьетнамский, Русский), сборка маржинальных Grab-комбо и правильная архитектура модификаторов.",
      badge: "Шаг 2 • Под ключ",
      badgeBg: "bg-[#00B14F]/20 text-[#00FF66] border border-[#00B14F]/40",
    },
    {
      step: "03",
      icon: Zap,
      title: "3. Полная операционка и ежедневный автопилот",
      subtitle: "Ваш внешний отдел доставки",
      text: "Наша команда ведет аккаунт ежедневно: запуск и постоянная оптимизация рекламы в Grab Ads, обновление меню, проведение маржинальных активов, решение проблем с курьерами и саппортом 24/7.",
      badge: "Шаг 3 • Автопилот",
      badgeBg: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    },
    {
      step: "04",
      icon: Receipt,
      title: "4. Отчетность 2 раза в месяц и прозрачный расчет",
      subtitle: "Оплата только за реальный результат",
      text: "Каждые 15 дней мы формируем прозрачный отчет Grabix с выпиской всех продаж и чистого чека. Вы платите процент ТОЛЬКО с нового чистого прироста вашей прибыли. Нет роста — комиссия 0%.",
      badge: "Шаг 4 • Процент с прироста",
      badgeBg: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    },
  ];

  return (
    <section className="py-20 bg-[#121212] text-white border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/20 border border-[#00B14F]/40 text-[#00FF66] text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Прозрачный механизм работы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Как именно работает наш бизнес и агентство?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed">
            Мы не просто даем советы. Мы берем на себя весь пласт ежедневной рутины, управление
            рекламой и доставкой в Grab, работая как ваш полноценный удаленный партнер за % от роста.
          </p>
        </div>

        {/* 4 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-gray-900/90 border border-gray-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:border-[#00B14F] transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00B14F]/20 border border-[#00B14F]/30 flex items-center justify-center text-[#00FF66] group-hover:bg-[#00B14F] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-gray-700 group-hover:text-[#00FF66]/40 transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 ${st.badgeBg}`}>
                    {st.badge}
                  </span>

                  <h3 className="text-xl font-black text-white mb-1">
                    {st.title}
                  </h3>
                  <div className="text-xs font-bold text-[#00FF66] mb-4">
                    {st.subtitle}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed font-normal bg-gray-950 p-4 rounded-2xl border border-gray-800">
                    {st.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-extrabold text-gray-300">
                  <span className="flex items-center gap-1.5 text-[#00FF66]">
                    <CheckCircle2 className="w-4 h-4" />
                    Гарантия контроля качества
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* FINANCIAL GUARANTEE BOX WITH PULSING GREEN BACKLIGHT */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00B14F] via-[#00FF66] to-[#00B14F] rounded-3xl opacity-70 blur-lg animate-pulse group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-gray-900 border-2 border-[#00FF66] rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/20 border border-[#00FF66]/40 flex items-center justify-center text-[#00FF66] shrink-0 mt-1 shadow-md shadow-[#00B14F]/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white mb-1">
                  Главный принцип нашего бизнеса: Нет прироста — нет оплаты
                </h4>
                <p className="text-gray-300 text-sm font-normal">
                  Наша агентская комиссия рассчитывается исключительно от нового дельта-роста вашей
                  чистой прибыли. Мы замотивированы выжать максимум из каждого квадратного километра вашей доставки.
                </p>
              </div>
            </div>
            <a
              href="#audit-form"
              className="bg-[#00B14F] hover:bg-[#009643] text-white font-extrabold text-sm px-6 py-4 rounded-2xl whitespace-nowrap shadow-xl shadow-[#00B14F]/40 hover:shadow-2xl transition-all"
            >
              Получить аудит вашего меню
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
