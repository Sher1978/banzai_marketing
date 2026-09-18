"use client";

import React from "react";
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
  return (
    <div className="sticky top-[57px] z-20 bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 py-3 px-4 shadow-md">
      <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => onSelectCategory("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeCategoryId === "all"
              ? "text-black shadow-lg"
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
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "text-black shadow-lg"
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
