"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Utensils, Sparkles } from "lucide-react";

export default function FoodHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCTA = () => {
    const element = document.getElementById("audit-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/95 backdrop-blur-md shadow-lg border-b border-gray-800/80 py-3"
          : "bg-[#121212] border-b border-gray-800/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <Link href="/food" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#00B14F] flex items-center justify-center text-white font-bold shadow-md shadow-[#00B14F]/30 group-hover:scale-105 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  OutRich<span className="text-[#00B14F]">.Food</span>
                </span>
                <span className="bg-[#00B14F]/20 border border-[#00B14F]/30 text-[#00FF66] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Asia
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">
                Grab & Foodpanda Agency
              </span>
            </div>
          </Link>
        </div>

        {/* Coverage Badges - Desktop */}
        <div className="hidden md:flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-full px-4 py-1.5 text-xs text-gray-300 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00B14F] animate-pulse" />
            Пхукет
          </span>
          <span className="text-gray-700">•</span>
          <span>Нячанг</span>
          <span className="text-gray-700">•</span>
          <span>Бали (Чангу)</span>
          <span className="text-gray-700">•</span>
          <span>Бангкок</span>
          <span className="text-gray-700">•</span>
          <span>Дананг</span>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToCTA}
            className="bg-[#00B14F] hover:bg-[#009643] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-[#00B14F]/30 hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Забронировать аудит</span>
          </button>
        </div>
      </div>
    </header>
  );
}
