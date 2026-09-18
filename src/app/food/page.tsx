import React from "react";
import type { Metadata } from "next";
import FoodLandingPage from "@/components/food/FoodLandingPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "OutRich.Food — 3X Restaurant Delivery Revenue Growth in Asia",
  description:
    "Triple your restaurant profit from Grab & Foodpanda in 30 days. Turnkey setup for $500 and monthly management for 10% of net profit growth.",
  alternates: {
    canonical: "https://outrich.online/food",
  },
  openGraph: {
    title: "OutRich.Food — Grab & Foodpanda Growth Agency in Asia",
    description:
      "Triple your restaurant profit from Grab & Foodpanda in 30 days. Turnkey setup for $500 and 10% of net profit growth.",
    url: "https://outrich.online/food",
    siteName: "OutRich.Food",
    images: [
      {
        url: "https://outrich.online/og-food.png",
        width: 1200,
        height: 630,
        alt: "OutRich.Food — Grab & Foodpanda Growth Agency in Asia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OutRich.Food — Grab & Foodpanda Growth Agency in Asia",
    description:
      "Triple your restaurant profit from Grab & Foodpanda in 30 days. Turnkey setup for $500 and 10% of net profit growth.",
    images: ["https://outrich.online/og-food.png"],
  },
};

export default function FoodPage() {
  return <FoodLandingPage />;
}
