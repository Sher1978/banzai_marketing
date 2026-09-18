"use client";

import React, { useRef, useEffect } from "react";
import { MenuItem, MenuCategory } from "@/lib/food/foodData";
import { DishCard } from "@/components/food/Storefront/DishCard";

interface Props {
  category: MenuCategory;
  items: MenuItem[];
  onOpenModal: (dish: MenuItem) => void;
  primaryColor?: string;
}

export const CategorySectionSlider: React.FC<Props> = ({
  category,
  items,
  onOpenModal,
  primaryColor = "#00FF66"
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  // Triplicate items only if items > 1 for smooth infinite loop
  const shouldLoop = items.length > 1;
  const displayItems = shouldLoop ? [...items, ...items, ...items] : items;

  useEffect(() => {
    if (!shouldLoop) return;
    const el = sliderRef.current;
    if (!el) return;

    // Set initial scroll position to start of middle set once on mount
    const singleSet = el.scrollWidth / 3;
    if (singleSet > 0 && el.scrollLeft < 10) {
      el.scrollLeft = singleSet;
    }

    let isAdjusting = false;
    const handleInfiniteScroll = () => {
      if (isAdjusting) return;
      const setWidth = el.scrollWidth / 3;
      if (setWidth <= 0) return;

      if (el.scrollLeft >= setWidth * 2) {
        isAdjusting = true;
        el.scrollLeft -= setWidth;
        setTimeout(() => { isAdjusting = false; }, 50);
      } else if (el.scrollLeft <= 5) {
        isAdjusting = true;
        el.scrollLeft += setWidth;
        setTimeout(() => { isAdjusting = false; }, 50);
      }
    };

    el.addEventListener("scroll", handleInfiniteScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleInfiniteScroll);
  }, [items, shouldLoop]);

  return (
    <section
      id={`category-section-${category.id}`}
      className="space-y-3.5 scroll-mt-28 relative group/section"
    >
      {/* Category Title Header */}
      <div className="flex justify-between items-center px-1">
        <h2
          className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 border-l-4 pl-3"
          style={{ borderColor: primaryColor }}
        >
          {category.name}
          <span className="text-xs font-mono font-normal text-white/50 bg-white/10 px-2.5 py-0.5 rounded-full">
            {items.length}
          </span>
        </h2>
      </div>

      {/* Horizontal Slider Track - touch-action auto allows vertical page scroll naturally */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-none no-scrollbar py-2 -mx-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          touchAction: "pan-x pan-y"
        }}
      >
        {displayItems.map((dish, idx) => (
          <div
            key={`${dish.id}-${idx}`}
            className="w-[285px] xs:w-[310px] sm:w-[350px] md:w-[380px] flex-shrink-0"
          >
            <DishCard
              dish={dish}
              onOpenModal={onOpenModal}
              primaryColor={primaryColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
