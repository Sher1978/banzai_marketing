"use client";

import React, { useEffect } from "react";

export default function MapsPage() {
  useEffect(() => {
    // Ensure smooth client-side redirect if not rewritten at edge
    if (typeof window !== "undefined") {
      window.location.replace("https://bot-lab-21910.web.app/maps");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-4">
      <div className="w-12 h-12 border-4 border-[#00FF66]/20 border-t-[#00FF66] rounded-full animate-spin mb-4" />
      <p className="text-sm font-mono text-[#00FF66] uppercase tracking-widest animate-pulse">
        Loading Google Maps Local Pack Dominance System...
      </p>
    </div>
  );
}
