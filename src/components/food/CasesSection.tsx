"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, TrendingUp, Award, MapPin, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function CasesSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const isRu = lang === "ru";
  const isUk = lang === "uk";

  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cases = [
    {
      id: 1,
      title: isRu ? "🥩 Стейк-хаус & Гриль" : isUk ? "🥩 Стейк-хаус та Гриль" : "🥩 Steakhouse & Grill",
      district: isRu ? "Европейский квартал" : isUk ? "Європейський квартал" : "European Quarter",
      rating: "4.8",
      was: isRu
        ? "Владелец вложился в интерьер, зал был полон только вечером, доставка приносила минимальную выручку."
        : isUk
        ? "Власник вклався в інтер'єр, зал був повний тільки ввечері, доставка приносила мінімальну виручку."
        : "Owner invested heavily in decor; dining hall filled only in evenings, delivery generated negligible revenue.",
      became: isRu
        ? "Мы ввели «Мясные боксы на двоих» и настроили рекламу на отели первой линии. Доставка сейчас делает столько же выручки, сколько посадка в зале."
        : isUk
        ? "Ми ввели «М'ясні бокси на двох» та налаштували рекламу на готелі першої лінії. Доставка зараз робить стільки ж виручки, скільки посадка в залі."
        : "We created 'Meat Combo Boxes for Two' and targeted beachfront resort hotels. Delivery now generates equal revenue to full hall seating.",
      metrics: isRu
        ? "Доставка = 50% общей выручки ресторана"
        : isUk
        ? "Доставка = 50% загальної виручки ресторану"
        : "Delivery = 50% of Total Restaurant Revenue",
      tag: isRu ? "Рост х4.5" : isUk ? "Зростання х4.5" : "4.5X Growth",
    },
    {
      id: 2,
      title: isRu ? "🥟 Dark Kitchen Русской кухни" : isUk ? "🥟 Dark Kitchen Східної кухні" : "🥟 European Comfort Dark Kitchen",
      district: isRu ? "Северный район" : isUk ? "Північний район" : "North District",
      rating: "4.9",
      was: isRu
        ? "Заведение висело на 70-м месте в поиске, нулевая видимость, убытки от внутренних скидок Grab."
        : isUk
        ? "Заклад висів на 70-му місці в пошуку, нульова видимість, збитки від внутрішніх знижок Grab."
        : "Ranked #70 in search results, zero visibility, losing money on misconfigured internal Grab promos.",
      became: isRu
        ? "Полная переупаковка меню, запуск «Обеденных комбо» для экспатов. Рост заказов на 340%, стабильное нахождение в ТОП-5 в радиусе 4 км."
        : isUk
        ? "Повна переупаковка меню, запуск «Обідніх комбо» для експатів. Зростання замовлень на 340%, стабільне знаходження в ТОП-5 у радіусі 4 км."
        : "Complete menu repackaging, launch of expat lunch bundles. 340% order growth, locked in TOP-5 within a 4-km radius.",
      metrics: isRu
        ? "+340% заказов • ТОП-5 в радиусе 4 км"
        : isUk
        ? "+340% замовлень • ТОП-5 у радіусі 4 км"
        : "+340% Orders • TOP-5 in 4-km Radius",
      tag: isRu ? "ТОП-5 Grab" : isUk ? "ТОП-5 Grab" : "TOP-5 Grab",
    },
    {
      id: 3,
      title: isRu ? "🍤 Локальное бистро морепродуктов" : isUk ? "🍤 Локальне бістро морепродуктів" : "🍤 Local Seafood Bistro",
      district: isRu ? "Район Лотоса" : isUk ? "Район Лотоса" : "Lotus Beach District",
      rating: "4.7",
      was: isRu
        ? "Жесточайшая конкуренция с уличными заведениями офлайн. Туристы проходили мимо из-за скромной вывески."
        : isUk
        ? "Жорстока конкуренція з вуличними закладами офлайн. Туристи проходили повз через скромну вивіску."
        : "Fierce competition with street food stalls. Tourists walked by due to modest signboards.",
      became: isRu
        ? "Обошли конкурентов в диджитал-поле. Создали премиальный визуал в Grab, ввели наборы креветок под пиво с быстрой доставкой на пляж. Выручка х2,5 за первые два месяца."
        : isUk
        ? "Обійшли конкурентів у діджитал-полі. Створили преміальний візуал у Grab, ввели набори креветок під пиво з швидкою доставкою на пляж. Виручка х2,5 за перші два місяці."
        : "Outperformed competitors digitally. Crafted premium Grab visuals and launched beer-and-shrimp combos delivered straight to hotel beaches. 2.5X revenue in 60 days.",
      metrics: isRu
        ? "Выручка х2.5 за 60 дней"
        : isUk
        ? "Виручка х2.5 за 60 днів"
        : "2.5X Revenue in 60 Days",
      tag: isRu ? "Рост х2.5" : isUk ? "Зростання х2.5" : "2.5X Growth",
    },
  ];

  const reports = [
    {
      id: "report1",
      title: "Go Bowls Grab Food",
      sales: "28 210 740 ₫",
      net: "17 960 774 ₫",
      rating: "4.4 ★",
      img: "/assets/food/report1.jpg",
    },
    {
      id: "report2",
      title: "M-Bar Sushi Grab Food",
      sales: "44 919 000 ₫",
      net: "29 361 118 ₫",
      rating: "4.5 ★",
      img: "/assets/food/report2.jpg",
    },
    {
      id: "report3",
      title: "SVOI Grab Food",
      sales: "49 337 250 ₫",
      net: "34 280 506 ₫",
      rating: "4.9 ★",
      img: "/assets/food/report3.jpg",
    },
  ];

  // Auto-scroll cases slider every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCaseIndex((prev) => (prev + 1) % cases.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, cases.length]);

  return (
    <section className="py-20 bg-[#121212] text-white border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/20 border border-[#00B14F]/40 text-[#00FF66] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <Award className="w-4 h-4" />
            {isRu
              ? "Портфель из 23 заведений по всей Азии"
              : isUk
              ? "Портфель з 23 закладів по всій Азії"
              : "Portfolio of 23+ Venues Across Asia"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            {isRu
              ? "23 заведения по всей Азии уже работают с нами."
              : isUk
              ? "23 заклади по всій Азії вже працюють з нами."
              : "23+ restaurants across Asia partner with us."}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            {isRu
              ? "Мы успешно запускаем проекты от Таиланда до Индонезии. Вот несколько свежих примеров из туристических столиц, где мы уже заняли лидирующие позиции:"
              : isUk
              ? "Ми успішно запускаємо проекти від Таїланду до Індонезії. Ось кілька свіжих прикладів з туристичних столиць, де ми вже зайняли лідуючі позиції:"
              : "We successfully launch restaurant projects from Thailand to Bali. Here are verified case studies from resort hotspots where we secured top rankings:"}
          </p>
        </div>

        {/* 🌟 AUTO-SCROLLING CASES SLIDER 🌟 */}
        <div
          className="mb-20 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Header Controls */}
          <div className="flex items-center justify-between mb-6 bg-gray-900/80 border border-gray-800 rounded-2xl p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-gray-300">
                {isRu ? "Интерактивные кейсы клиентов" : isUk ? "Інтерактивні кейси клієнтів" : "Interactive Client Cases"} ({activeCaseIndex + 1} / {cases.length})
              </span>
            </div>

            {/* Slider Dots & Navigation */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {cases.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCaseIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeCaseIndex === idx
                        ? "w-8 bg-[#00FF66]"
                        : "w-2 bg-gray-700 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveCaseIndex((prev) => (prev > 0 ? prev - 1 : cases.length - 1))
                  }
                  className="p-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveCaseIndex((prev) => (prev + 1) % cases.length)
                  }
                  className="p-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ACTIVE CASE SLIDE */}
          <div className="relative overflow-hidden min-h-[340px]">
            <AnimatePresence mode="wait">
              {cases.map((item, idx) => {
                if (idx !== activeCaseIndex) return null;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-[#00B14F] rounded-3xl p-8 shadow-2xl shadow-[#00B14F]/15 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#00B14F] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md shadow-[#00B14F]/30">
                            {item.tag}
                          </span>
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span>{item.rating}</span>
                          </div>
                        </div>

                        <span className="text-xs text-gray-400 font-semibold">
                          {isRu ? "Авто-слайдер • Наведите мышкой для паузы" : isUk ? "Авто-слайдер • Наведіть мишкою для паузи" : "Auto-slider • Hover to pause"}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.district}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
                        <div className="bg-red-500/10 border border-red-500/25 p-4 rounded-2xl text-gray-300">
                          <span className="font-bold text-red-400 block mb-1">
                            {isRu ? "Было:" : isUk ? "Було:" : "Before:"}
                          </span>
                          {item.was}
                        </div>
                        <div className="bg-[#00B14F]/10 border border-[#00B14F]/30 p-4 rounded-2xl text-gray-200">
                          <span className="font-bold text-[#00FF66] block mb-1">
                            {isRu ? "Стало:" : isUk ? "Стало:" : "After:"}
                          </span>
                          {item.became}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs sm:text-sm font-extrabold text-white">
                      <span className="text-[#00FF66] flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#00FF66]" />
                        {item.metrics}
                      </span>
                      <span className="text-gray-400 text-xs font-medium">
                        {isRu ? "Отчет системы подтвержден" : isUk ? "Звіт системи підтверджено" : "System Report Verified"}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* REAL SYSTEM REPORTS GALLERY */}
        <div className="bg-gray-950 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-gray-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="bg-[#00B14F] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              {isRu ? "Прозрачная отчетность Grabix" : isUk ? "Прозора звітність Grabix" : "Grabix Financial Statements"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
              {isRu ? "Реальные отчеты нашей системы для клиентов" : isUk ? "Реальні звіти нашої системи для клієнтів" : "Real System Financial Reports"}
            </h3>
            <p className="text-gray-300 text-sm font-normal">
              {isRu
                ? "Мы предоставляем клиентам детальный финотчет 2 раза в месяц. Каждая цифра подкреплена выписками из кабинета Grab Food."
                : isUk
                ? "Ми надаємо клієнтам детальний фінзвіт 2 рази на місяць. Кожна цифра підкріплена виписками з кабінету Grab Food."
                : "We deliver bi-monthly financial statements. Every figure is backed by official Grab Food partner dashboard statements."}
            </p>
          </div>

          {/* 3 Report Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((rep) => (
              <div
                key={rep.id}
                onClick={() => setSelectedReport(rep.img)}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00B14F] cursor-pointer transition-all hover:scale-[1.02]"
              >
                <div className="relative aspect-[9/16] w-full bg-black">
                  <Image
                    src={rep.img}
                    alt={rep.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-gray-900 text-xs font-extrabold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                      <span>{isRu ? "Увеличить отчет" : isUk ? "Збільшити звіт" : "Zoom Report"}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-900 border-t border-gray-800">
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span className="text-white">{rep.title}</span>
                    <span className="text-amber-400">{rep.rating}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 flex justify-between">
                    <span>{isRu ? "Выручка:" : isUk ? "Виручка:" : "Gross:"} {rep.sales}</span>
                    <span className="text-[#00FF66] font-bold">{isRu ? "На счет:" : isUk ? "На рахунок:" : "Net:"} {rep.net}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedReport && (
        <div
          onClick={() => setSelectedReport(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-2xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute -top-12 right-0 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedReport}
                alt="Grab Partner Report"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
