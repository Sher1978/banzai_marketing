import React from "react";
import type { Metadata } from "next";
import RevoAlternativeLanding from "@/components/RevoAlternativeLanding";

export const metadata: Metadata = {
  title: "OutRich.Dubai — Google Maps Local Pack Dominance 2026",
  description: "Automated AI systems for Google Maps Local Pack dominance & client retention.",
  alternates: {
    canonical: "https://outrich.online/maps",
  },
};

export default function MapsPage() {
  return (
    <main className="w-full min-h-screen bg-[#121212] text-white">
      <RevoAlternativeLanding />
    </main>
  );
}
