"use client";

import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function FoodFooter() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const isRu = lang === "ru";
  const isUk = lang === "uk";

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
                {t.footerSub} © {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <span className="text-gray-300">{isRu ? "Покрытие:" : isUk ? "Покриття:" : "Coverage:"}</span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇹🇭 Thailand (Phuket, Bangkok, Pattaya)
            </span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇻🇳 Vietnam (Nha Trang, Da Nang, Saigon)
            </span>
            <span className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
              🇮🇩 Indonesia (Bali)
            </span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <p>
            {isRu
              ? "OutRich.Food — независимое международное маркетинговое агентство. Не является аффилированным лицом компании Grab Holdings Ltd. Все права защищены."
              : isUk
              ? "OutRich.Food — незалежне міжнародне маркетингове агентство. Не є афілійованою особою компанії Grab Holdings Ltd. Усі права захищені."
              : "OutRich.Food is an independent international growth agency. Not affiliated with Grab Holdings Ltd. All trademarks belong to their respective owners."}
          </p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>{isRu ? "Разработано для лидеров общепита в Азии" : isUk ? "Розроблено для лідерів громадського харчування в Азії" : "Built for F&B leaders in Asia"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
