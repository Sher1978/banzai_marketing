import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OutRich.Dubai — Google Maps Local Pack Dominance 2026",
  description: "Automated AI systems for Google Maps Local Pack dominance & client retention.",
  alternates: {
    canonical: "https://outrich.online/maps",
  },
};

export default function MapsPage() {
  return (
    <main className="w-full h-screen bg-[#121212] overflow-hidden m-0 p-0">
      <iframe
        src="https://bot-lab-21910.web.app/maps"
        className="w-full h-full border-none m-0 p-0 block"
        style={{ width: "100vw", height: "100vh", border: "none" }}
        title="OutRich Google Maps Local Pack Dominance System"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </main>
  );
}
