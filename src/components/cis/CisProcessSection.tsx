"use client";

import React from 'react';

const STEPS = [
  {
    num: "01",
    title: "Изучаем спрос и карты",
    desc: "Анализируем поисковый спрос в вашем городе (СНГ), запросы целевой аудитории, карточки 3 главных конкурентов и точки недополученной прибыли."
  },
  {
    num: "02",
    title: "Проектируем сайт и оффер",
    desc: "Формируем архитектуру страниц под кластеры услуг, пишем продающие тексты, продумываем удобный путь клиента от знакомства до первого сообщения."
  },
  {
    num: "03",
    title: "Разрабатываем и запускаем SEO",
    desc: "Создаем реактивный сайт на Next.js, наполняем витрину 2ГИС, Google и Яндекса, внедряем микроразметку и синхронизируем все каналы."
  },
  {
    num: "04",
    title: "Измеряем результат и окупаемость",
    desc: "Подключаем сквозную аналитику, фиксируем обращения, дорабатываем конверсию и масштабируем органический поток горячих клиентов."
  }
];

export default function CisProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#080d12] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="max-w-[720px] mb-14">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
            <span className="w-5 h-[2px] bg-[#ffe500]" />
            <span>КАК МЫ РАБОТАЕМ</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
            От карточки компании <br />
            к <span className="text-[#ffe500]">новому каналу заявок.</span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
            Сначала находим реальный потенциал спроса в вашем городе, затем проектируем сайт и гео-профили под задачи бизнеса.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="border-t-2 border-[#ffe500] pt-6 pr-4 flex flex-col justify-between group hover:border-[#ffe500] transition-colors"
            >
              <div>
                <span className="text-[38px] font-black text-[#36424e] group-hover:text-[#ffe500] transition-colors block mb-2">
                  {step.num}
                </span>
                <h3 className="text-[17px] font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#a7b0ba] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
