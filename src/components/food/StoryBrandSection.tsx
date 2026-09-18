"use client";

import React from "react";
import { Flame, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function StoryBrandSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const isRu = lang === "ru";
  const isUk = lang === "uk";

  return (
    <section className="py-20 bg-[#121212] text-white border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 border border-gray-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            {isRu ? "Разделение дорог" : isUk ? "Роздоріжжя" : "Fork in the Road"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {isRu
              ? "Каким будет ваш бизнес в этом сезоне?"
              : isUk
              ? "Яким буде ваш бізнес у цьому сезоні?"
              : "Where will your restaurant be this season?"}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-normal">
            {isRu
              ? "Выбор стратегии определяет, будете ли вы выживать в зале или заберете весь район через доставку."
              : isUk
              ? "Вибір стратегії визначає, чи будете ви виживати в залі, чи заберете весь район через доставку."
              : "Your strategic choice dictates whether you struggle offline or dominate your entire district via delivery."}
          </p>
        </div>

        {/* SPLIT SCREEN COMPARISON */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CATASTROPHE CARD */}
          <div className="bg-gray-900/90 rounded-3xl p-8 border-2 border-red-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    {isRu ? "Сценарий №1" : isUk ? "Сценарій №1" : "Scenario #1"}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    💥 {isRu ? "Картина Катастрофы" : isUk ? "Картина Катастрофи" : "Catastrophe Path"}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal bg-gray-950 p-5 rounded-2xl border border-gray-800">
                {isRu
                  ? "Ваш повар скучает, аренда и фудкост съедают бюджет, а вы продолжаете верить, что новые стулья привлекут людей с улицы. Ваша карточка в Grab собирает пыль. Вы получаете лишь 30% от возможных денег."
                  : isUk
                  ? "Ваш кухар сумує, оренда та фудкост з'їдають бюджет, а ви продовжуєте вірити, що нові стільці приваблять людей з вулиці. Ваша картка в Grab збирає пил. Ви отримуєте лише 30% від можливих грошей."
                  : "Your kitchen staff is idle, rent eats your cash, and you hope new decor brings walk-ins. Your Grab listing gathers dust while you capture only 30% of potential revenue."}
              </p>

              <ul className="space-y-3 text-xs font-medium text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  {isRu
                    ? "Зависимость от погоды, сезонов и проходимости улицы"
                    : isUk
                    ? "Залежність від погоди, сезонів та прохідності вулиці"
                    : "Dependence on weather, tourism seasons, and foot traffic"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  {isRu
                    ? "Потери на комиссии агрегаторов из-за отсутствия маркетинга"
                    : isUk
                    ? "Втрати на комісії агрегаторів через відсутність маркетингу"
                    : "Wasted platform commissions due to lack of marketing"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  {isRu
                    ? "Зал заполнен только 3-4 часа в сутки во время ужина"
                    : isUk
                    ? "Зал заповнений тільки 3-4 години на добу під час вечері"
                    : "Dining hall filled only 3-4 dinner hours per day"}
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-red-400 font-bold">
              {isRu
                ? "Итог: постоянный дефицит чистой прибыли и сжигание ресурсов."
                : isUk
                ? "Підсумок: постійний дефіцит чистого прибутку та спалювання ресурсів."
                : "Result: Ongoing cash deficit and resource burnout."}
            </div>
          </div>

          {/* TRIUMPH CARD */}
          <div className="bg-gray-900/90 rounded-3xl p-8 border-2 border-[#00B14F] shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B14F]/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00B14F]/20 border border-[#00B14F]/30 flex items-center justify-center text-[#00FF66]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00FF66]">
                    {isRu ? "Сценарий №2 (OutRich)" : isUk ? "Сценарій №2 (OutRich)" : "Scenario #2 (OutRich)"}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    🏆 {isRu ? "Картина Триумфа" : isUk ? "Картина Триумфу" : "Triumph Path"}
                  </h3>
                </div>
              </div>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-normal bg-gray-950 p-5 rounded-2xl border border-gray-800">
                {isRu
                  ? "Доставка становится главным, бесконечным драйвером продаж. Ваш планшет на кухне разрывается от заказов с утра до ночи. Вы выжали максимум из инфраструктуры: зал кормит тех, кто пришел за атмосферой, а Grab кормит тысячи туристов в их номерах."
                  : isUk
                  ? "Доставка стає головним, нескінченним драйвером продажів. Ваш планшет на кухні розривається від замовлень з ранку до ночі. Ви вижали максимум з інфраструктури: зал годує тих, хто прийшов за атмосферою, а Grab годує тисячі туристів у їхніх номерах."
                  : "Delivery becomes your primary sales engine. Your kitchen tablet pings with Grab orders morning to night. Offline hall feeds walk-ins, while Grab feeds thousands of resort tourists in their hotel rooms."}
              </p>

              <ul className="space-y-3 text-xs font-bold text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                  {isRu
                    ? "Стабильный поток заказов 14+ часов в сутки"
                    : isUk
                    ? "Стабільний потік замовлень 14+ годин на добу"
                    : "Steady order flow 14+ hours per day"}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                  {isRu
                    ? "Максимальный рейтинг и позиция в ТОП-5 агрегатора"
                    : isUk
                    ? "Максимальний рейтинг та позиція в ТОП-5 агрегатора"
                    : "TOP-5 aggregator ranking & prime visibility"}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                  {isRu
                    ? "Агентская комиссия платится ТОЛЬКО с новой чистой прибыли"
                    : isUk
                    ? "Агентська комісія сплачується ТІЛЬКИ з нового чистого прибутку"
                    : "Agency fee paid ONLY from new net profit growth"}
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-[#00FF66] font-bold flex items-center justify-between">
              <span>
                {isRu
                  ? "Итог: Рост чистой выручки в 3 раза за 60 дней"
                  : isUk
                  ? "Підсумок: Зростання чистої виручки у 3 рази за 60 днів"
                  : "Result: 3X Net Revenue Growth in 60 Days"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
