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
      badgeBg: "bg-blue-100 text-blue-700",
    },
    {
      step: "02",
      icon: PackageCheck,
      title: "2. Переупаковка и Setup под ключ",
      subtitle: "Фиксированная настройка",
      text: "Мы берем на себя полную настройку: аппетитная фуд-съемка/визуал, локализация SEO-описаний на 3 языка (English, Тайский/Вьетнамский, Русский), сборка маржинальных Grab-комбо и правильная архитектура модификаторов.",
      badge: "Шаг 2 • Под ключ",
      badgeBg: "bg-emerald-100 text-[#00B14F]",
    },
    {
      step: "03",
      icon: Zap,
      title: "3. Полная операционка и ежедневный автопилот",
      subtitle: "Ваш внешний отдел доставки",
      text: "Наша команда ведет аккаунт ежедневно: запуск и постоянная оптимизация рекламы в Grab Ads, обновление меню, проведение маржинальных активов, решение проблем с курьерами и саппортом 24/7.",
      badge: "Шаг 3 • Автопилот",
      badgeBg: "bg-purple-100 text-purple-700",
    },
    {
      step: "04",
      icon: Receipt,
      title: "4. Отчетность 2 раза в месяц и прозрачный расчет",
      subtitle: "Оплата только за реальный результат",
      text: "Каждые 15 дней мы формируем прозрачный отчет Grabix с выпиской всех продаж и чистого чека. Вы платите процент ТОЛЬКО с нового чистого прироста вашей прибыли. Нет роста — комиссия 0%.",
      badge: "Шаг 4 • Процент с прироста",
      badgeBg: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section className="py-20 bg-[#E5E8EC] border-y border-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/10 border border-[#00B14F]/30 text-[#00B14F] text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Прозрачный механизм работы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Как именно работает наш бизнес и агентство?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
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
                className="bg-[#F8FAFC] border-2 border-gray-300/80 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#00B14F] transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00B14F]/10 border border-[#00B14F]/20 flex items-center justify-center text-[#00B14F] group-hover:bg-[#00B14F] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-gray-300 group-hover:text-[#00B14F]/40 transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 ${st.badgeBg}`}>
                    {st.badge}
                  </span>

                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {st.title}
                  </h3>
                  <div className="text-xs font-bold text-[#00B14F] mb-4">
                    {st.subtitle}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed font-normal bg-white p-4 rounded-2xl border border-gray-200">
                    {st.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-extrabold text-gray-800">
                  <span className="flex items-center gap-1.5 text-[#00B14F]">
                    <CheckCircle2 className="w-4 h-4" />
                    Гарантия контроля качества
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* FINANCIAL GUARANTEE BOX */}
        <div className="bg-white border-2 border-[#00B14F] rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#00B14F] shrink-0 mt-1">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-black text-gray-900 mb-1">
                Главный принцип нашего бизнеса: Нет прироста — нет оплаты
              </h4>
              <p className="text-gray-700 text-sm font-medium">
                Наша агентская комиссия рассчитывается исключительно от нового дельта-роста вашей
                чистой прибыли. Мы замотивированы выжать максимум из каждого квадратного километра вашей доставки.
              </p>
            </div>
          </div>
          <a
            href="#audit-form"
            className="bg-[#00B14F] hover:bg-[#009643] text-white font-extrabold text-sm px-6 py-4 rounded-2xl whitespace-nowrap shadow-md shadow-[#00B14F]/25 hover:shadow-lg transition-all"
          >
            Получить аудит вашего меню
          </a>
        </div>
      </div>
    </section>
  );
}
