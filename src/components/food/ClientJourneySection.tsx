"use client";

import React from "react";
import { Search, Settings, TrendingUp, ArrowRight, CheckCircle2, Coffee } from "lucide-react";

export default function ClientJourneySection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      badge: "Шаг 1 • 30 секунд",
      title: "1️⃣ Заявка на бесплатный аудит",
      text: "Вы оставляете заявку за 30 секунд. Наш эксперт сканирует ваш профиль в Grab/Foodpanda, находит точки потери маржи и готовит персональную карту роста для вашего района.",
      tag: "Бесплатно",
      bgBadge: "bg-[#00B14F]/10 text-[#00B14F]",
    },
    {
      step: "02",
      icon: Settings,
      badge: "Шаг 2 • За 3 дня",
      title: "2️⃣ Переупаковка и запуск под ключ",
      text: "За 3 дня мы полностью пересобираем ваше меню: оцифровываем фото, пишем SEO-тексты на 3 языках, настраиваем комбо-наборы и запускаем математически просчитанные промо-кампании.",
      tag: "Настройка",
      bgBadge: "bg-blue-100 text-blue-700",
    },
    {
      step: "03",
      icon: TrendingUp,
      badge: "Шаг 3 • Результат",
      title: "3️⃣ Рост заказов и чистой прибыли",
      text: "Вы получаете поток прямых заказов из агрегатора. В конце месяца мы сводим финансовую аналитику, и вы выплачиваете нам процент только с реально полученного прироста чистой прибыли.",
      tag: "Комиссия за прирост",
      bgBadge: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section className="py-20 bg-[#E5E8EC] border-t border-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/10 border border-[#00B14F]/30 text-[#00B14F] text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Coffee className="w-4 h-4" />
            Простой путь клиента (3-Step Plan)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Начать получать X3 заказов из Grab — проще, чем заварить кофе
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
            Вам не нужно разбираться в алгоритмах, нанимать маркетологов или менять процессы на кухне.
            Мы берем всю техническую и операционную работу на себя.
          </p>
        </div>

        {/* 3 STEPS HORIZONTAL TRACKING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Grab Delivery Tracking Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-1 bg-gradient-to-r from-[#00B14F] via-blue-500 to-[#00B14F] -translate-y-8 z-0 opacity-30" />

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-[#F8FAFC] border-2 border-gray-300 rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-[#00B14F] transition-all duration-300 relative z-10 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00B14F] text-white flex items-center justify-center font-bold shadow-lg shadow-[#00B14F]/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider bg-gray-200 text-gray-800">
                      {st.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#00B14F] transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed font-normal bg-white p-4 rounded-2xl border border-gray-200">
                    {st.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-extrabold">
                  <span className={`px-2.5 py-1 rounded-lg ${st.bgBadge}`}>
                    {st.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[#00B14F]">
                    <span>Далее</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
