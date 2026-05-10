import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import FounderSection from "@/components/FounderSection";
import ProcessSection from "@/components/ProcessSection";
import FeatureSection from "@/components/FeatureSection";
import ComparisonSection from "@/components/ComparisonSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import FooterCTA from "@/components/FooterCTA";
import ModalController from "@/components/ModalController";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Hero />
      <PainSection />
      <FounderSection />
      <ProcessSection />
      <FeatureSection />
      <ComparisonSection />
      <FooterCTA />
      <ModalController />
    </main>
  );
}
