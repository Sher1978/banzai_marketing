"use client";

import React from "react";
import FoodHeader from "./FoodHeader";
import GrabFoodHero from "./GrabFoodHero";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import HowItWorksSection from "./HowItWorksSection";
import ClientJourneySection from "./ClientJourneySection";
import CasesSection from "./CasesSection";
import StoryBrandSection from "./StoryBrandSection";
import FinalCTASection from "./FinalCTASection";
import FoodFooter from "./FoodFooter";

export default function FoodLandingPage() {
  return (
    <div className="min-h-screen bg-[#E5E8EC] font-sans text-gray-900 antialiased selection:bg-[#00B14F] selection:text-white">
      <FoodHeader />
      <main className="bg-[#E5E8EC]">
        <GrabFoodHero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ClientJourneySection />
        <CasesSection />
        <StoryBrandSection />
        <FinalCTASection />
      </main>
      <FoodFooter />
    </div>
  );
}
