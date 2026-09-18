"use client";

import React from "react";
import Link from "next/link";
import { Utensils, Globe, ShieldCheck, Heart } from "lucide-react";

export default function FoodFooter() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00B14F] flex items-center justify-center text-white font-bold">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-base text-white tracking-tight">
                OutRich<span className="text-[#00B14F]">.Food</span>
              </span>
              <p className="text-[11px] text-gray-500">
                Asia Grab & Foodpanda Growth Agency © {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <span className="text-gray-300">Покрытие:</span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇹🇭 Таиланд (Пхукет, Бангкок, Паттайя)
            </span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇻🇳 Вьетнам (Нячанг, Дананг, Сайгон)
            </span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇮🇩 Индонезия (Бали)
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <p>
            OutRich.Food — независимое международное маркетинговое агентство. Не является аффилированным лицом компании Grab Holdings Ltd. Все товарные знаки принадлежат их законным владельцам.
          </p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Разработано для лидеров общепита в Азии</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
