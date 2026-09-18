"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, TrendingUp, Award, MapPin, X, ZoomIn } from "lucide-react";

export default function CasesSection() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const cases = [
    {
      id: 1,
      title: "🥩 Стейк-хаус & Гриль",
      district: "Европейский квартал",
      rating: "4.8",
      was: "Владелец вложился в интерьер, зал был полон только вечером, доставка приносила минимальную выручку.",
      became:
        "Мы ввели «Мясные боксы на двоих» и настроили рекламу на отели первой линии. Доставка сейчас делает столько же выручки, сколько посадка в зале.",
      metrics: "Доставка = 50% общей выручки ресторана",
      tag: "Рост х4.5",
    },
    {
      id: 2,
      title: "🥟 Dark Kitchen Русской кухни",
      district: "Северный район",
      rating: "4.9",
      was: "Заведение висело на 70-м месте в поиске, нулевая видимость, убытки от внутренних скидок Grab.",
      became:
        "Полная переупаковка меню, запуск «Обеденных комбо» для экспатов. Рост заказов на 340%, стабильное нахождение в ТОП-5 в радиусе 4 км.",
      metrics: "+340% заказов • ТОП-5 в радиусе 4 км",
      tag: "ТОП-5 Grab",
    },
    {
      id: 3,
      title: "🍤 Локальное бистро морепродуктов",
      district: "Район Лотоса",
      rating: "4.7",
      was: "Жесточайшая конкуренция с уличными заведениями офлайн. Туристы проходили мимо из-за скромной вывески.",
      became:
        "Обошли конкурентов в диджитал-поле. Создали премиальный визуал в Grab, ввели наборы креветок под пиво с быстрой доставкой на пляж. Выручка х2,5 за первые два месяца.",
      metrics: "Выручка х2.5 за 60 дней",
      tag: "Рост х2.5",
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

  return (
    <section className="py-20 bg-[#121212] text-white border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#00B14F]/20 border border-[#00B14F]/40 text-[#00FF66] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <Award className="w-4 h-4" />
            Портфель из 23 заведений по всей Азии
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            23 заведения по всей Азии уже работают с нами.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Мы успешно запускаем проекты от Таиланда до Индонезии. Вот несколько свежих примеров из
            туристической столицы Вьетнама (Нячанг), где мы уже заняли лидирующие позиции:
          </p>
        </div>

        {/* 3 CASE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/90 border border-gray-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl hover:border-[#00B14F] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#00B14F] text-white text-xs font-extrabold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{item.district}</span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="bg-red-500/10 border border-red-500/20 p-3.5 rounded-2xl text-gray-300">
                    <span className="font-bold text-red-400 block mb-0.5">
                      Было:
                    </span>
                    {item.was}
                  </div>
                  <div className="bg-[#00B14F]/10 border border-[#00B14F]/30 p-3.5 rounded-2xl text-gray-200">
                    <span className="font-bold text-[#00FF66] block mb-0.5">
                      Стало:
                    </span>
                    {item.became}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-bold text-white">
                <span className="text-[#00FF66] flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {item.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* REAL SYSTEM REPORTS GALLERY */}
        <div className="bg-gray-950 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-gray-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="bg-[#00B14F] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              Прозрачная отчетность Grabix
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
              Реальные отчеты нашей системы для клиентов
            </h3>
            <p className="text-gray-300 text-sm font-normal">
              Мы предоставляем клиентам детальный финотчет 2 раза в месяц. Каждая цифра подкреплена
              выписками из кабинета Grab Food.
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
                      <span>Увеличить отчет</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-900 border-t border-gray-800">
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span className="text-white">{rep.title}</span>
                    <span className="text-amber-400">{rep.rating}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 flex justify-between">
                    <span>Выручка: {rep.sales}</span>
                    <span className="text-[#00FF66] font-bold">На счет: {rep.net}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR REPORTS */}
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
