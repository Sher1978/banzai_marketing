"use client";

import React from "react";
import { Flame, Trophy, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export default function StoryBrandSection() {
  return (
    <section className="py-20 bg-[#E5E8EC] border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            Разделение дорог
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Каким будет ваш бизнес в этом сезоне?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Выбор стратегии определяет, будете ли вы выживать в зале или заберете весь район через доставку.
          </p>
        </div>

        {/* SPLIT SCREEN COMPARISON */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CATASTROPHE CARD */}
          <div className="bg-white rounded-3xl p-8 border-2 border-red-200 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#E72929]">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E72929]">
                    Сценарий №1
                  </span>
                  <h3 className="text-2xl font-black text-gray-900">
                    💥 Картина Катастрофы
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium bg-red-50/50 p-5 rounded-2xl border border-red-100">
                Ваш повар скучает, аренда и фудкост съедают бюджет, а вы продолжаете верить, что новые
                стулья привлекут людей с улицы. Ваша карточка в Grab собирает пыль. Вы получаете лишь
                <span className="font-bold text-[#E72929]"> 30% от возможных денег</span> и работаете в
                постоянном напряжении, пытаясь покрыть издержки зала.
              </p>

              <ul className="space-y-3 text-xs font-medium text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Зависимость от погоды, сезонов и проходимости улицы
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Потери на комиссии агрегаторов из-за отсутствия маркетинга
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Зал заполнен только 3-4 часа в сутки во время ужина
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-red-600 font-bold">
              Итог: постоянный дефицит чистой прибыли и сжигание ресурсов.
            </div>
          </div>

          {/* TRIUMPH CARD */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#00B14F] shadow-2xl shadow-[#00B14F]/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/10 flex items-center justify-center text-[#00B14F]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00B14F]">
                    Сценарий №2 (OutRich)
                  </span>
                  <h3 className="text-2xl font-black text-gray-900">
                    🏆 Картина Триумфа
                  </h3>
                </div>
              </div>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 font-medium bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
                Доставка становится главным, бесконечным драйвером продаж. Ваш планшет на кухне
                разрывается от заказов с утра до ночи. Вы выжали максимум из инфраструктуры: зал кормит
                тех, кто пришел за атмосферой, а Grab кормит{" "}
                <span className="font-bold text-[#00B14F]">тысячи туристов в их номерах</span>. Вы
                контролируете рынок.
              </p>

              <ul className="space-y-3 text-xs font-bold text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                  Стабильный поток заказов 14+ часов в сутки
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                  Максимальный рейтинг и позиция в ТОП-5 агрегатора
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B14F]" />
                  Агентская комиссия платится ТОЛЬКО с новой чистой прибыли
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-[#00B14F] font-bold flex items-center justify-between">
              <span>Итог: Рост чистой выручки в 3 раза за 60 дней</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
