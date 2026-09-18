"use client";

import React, { useRef } from "react";
import { MenuCategory } from "@/lib/food/foodData";

interface Props {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (catId: string) => void;
  primaryColor?: string;
}

export const CategoryNav: React.FC<Props> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  primaryColor = "#00FF66"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    if (catId === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetSec = document.getElementById(`category-section-${catId}`);
      if (targetSec) {
        const yOffset = -120; // Account for sticky headers
        const y = targetSec.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="sticky top-[57px] z-20 bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 py-3 px-4 shadow-md">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto flex gap-2 overflow-x-auto scrollbar-none no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <button
          data-cat-id="all"
          onClick={() => handleCategoryClick("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeCategoryId === "all"
              ? "text-black shadow-lg scale-105"
              : "bg-white/5 text-white/70 hover:text-white border border-white/10"
          }`}
          style={activeCategoryId === "all" ? { backgroundColor: primaryColor } : {}}
        >
          Все блюда
        </button>

        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              data-cat-id={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "text-black shadow-lg scale-105"
                  : "bg-white/5 text-white/70 hover:text-white border border-white/10"
              }`}
              style={isActive ? { backgroundColor: primaryColor } : {}}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
