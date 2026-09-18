import React from "react";
import type { Metadata } from "next";
import FoodLandingPage from "@/components/food/FoodLandingPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "OutRich.Food — Рост прибыли из Grab & Foodpanda в 3 раза по всей Азии",
  description:
    "Увеличим вашу прибыль из сервисов доставки Grab и Foodpanda в 3 раза. Настройка под ключ за $500 и ведение за 10% от чистой прибыли.",
  alternates: {
    canonical: "https://outrich.online/food",
  },
  openGraph: {
    title: "OutRich.Food — Агентство роста доставки Grab & Foodpanda",
    description:
      "Увеличим вашу прибыль из Grab и Foodpanda в 3 раза. Настройка за $500 и 10% с чистой прибыли.",
    url: "https://outrich.online/food",
    siteName: "OutRich.Food",
    type: "website",
  },
};

export default function FoodPage() {
  return <FoodLandingPage />;
}
