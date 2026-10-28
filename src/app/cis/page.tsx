import React from "react";
import type { Metadata } from "next";
import CisLandingView from "@/components/cis/CisLandingView";

export const metadata: Metadata = {
  title: "Mind Ambush — Сайт как источник клиентов | Маркетинг и Карты для СНГ",
  description: "Создание продающих сайтов, разработка приложений и продвижение на картах (2ГИС, Google, Яндекс) для бизнеса в Казахстане, РФ и СНГ. Приводим клиентов без рабской зависимости от рекламы.",
  keywords: [
    "Mind Ambush",
    "создание сайтов СНГ",
    "продвижение 2ГИС",
    "продвижение Google Карты",
    "Яндекс Карты бизнес",
    "разработка сайтов Астана",
    "разработка сайтов Алматы",
    "лидогенерация СНГ",
    "Telegram Mini Apps"
  ],
  alternates: {
    canonical: "https://outrich.online/cis",
  },
  openGraph: {
    title: "Mind Ambush — Сайт как источник клиентов | СНГ",
    description: "Вас уже находят на картах. А где изучают и выбирают? Создание сайтов, приложений и вывод в ТОП 2ГИС/Google/Яндекс.",
    type: "website",
    url: "https://outrich.online/cis",
    siteName: "Mind Ambush by OutRich Agency",
    locale: "ru_RU",
  },
};

export default function CisPage() {
  return <CisLandingView />;
}
