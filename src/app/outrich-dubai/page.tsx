import React from 'react';
import type { Metadata } from 'next';
import OutrichHeader from '@/components/outrich/OutrichHeader';
import OutrichHero from '@/components/outrich/OutrichHero';
import FomoSlider from '@/components/outrich/FomoSlider';
import AuctionTrapSection from '@/components/outrich/AuctionTrapSection';
import FounderGuideSection from '@/components/outrich/FounderGuideSection';
import ProductsTechSection from '@/components/outrich/ProductsTechSection';
import StoryBrandPlanSection from '@/components/outrich/StoryBrandPlanSection';
import StakesSection from '@/components/outrich/StakesSection';
import OutrichFooterCTA from '@/components/outrich/OutrichFooterCTA';
import ModalController from '@/components/ModalController';

export const metadata: Metadata = {
  title: "OutRich.Dubai agency — Автономные ИИ-системы лидогенерации 2026",
  description: "Прогнозируемый поток клиентов без рабской зависимости от дорогой рекламы. Строим автономные ИИ-системы под ключ.",
  keywords: ["OutRich.Dubai agency", "AI Lead Generation Dubai", "Игорь Шерлок", "Map Outreach", "LeadRadar", "Generative Engine Optimization"],
  openGraph: {
    title: "OutRich.Dubai agency — ИИ-Системы Лидогенерации 2026",
    description: "Прогнозируемый поток клиентов без рабской зависимости от дорогой рекламы. Строим автономные ИИ-системы лидогенерации под ключ.",
    type: "website",
    url: "https://outrich.online",
    siteName: "OutRich.Dubai agency",
    locale: "ru_RU",
    images: [
      {
        url: "https://outrich.online/assets/hero_dubai_ai_skyline.png",
        width: 1200,
        height: 630,
        alt: "OutRich.Dubai agency — Autonomous AI Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OutRich.Dubai agency — ИИ-Системы Лидогенерации 2026",
    description: "Прогнозируемый поток клиентов без рабской зависимости от дорогой рекламы.",
    images: ["https://outrich.online/assets/hero_dubai_ai_skyline.png"],
  },
};

export default function OutrichMirrorPage() {
  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-[#ffe600] selection:text-black max-w-full overflow-x-hidden">
      <OutrichHeader />
      <OutrichHero />
      <FomoSlider />
      <AuctionTrapSection />
      <FounderGuideSection />
      <ProductsTechSection />
      <StoryBrandPlanSection />
      <StakesSection />
      <OutrichFooterCTA />
      <ModalController />
    </main>
  );
}
