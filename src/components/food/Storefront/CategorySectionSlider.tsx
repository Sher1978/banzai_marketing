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

  // Triplicate items array so there is always a predecessor and successor set for 360° infinite looping
  const displayItems = [...items, ...items, ...items];

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    // Set initial scroll position to start of the middle set
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0) {
      el.scrollLeft = singleSetWidth;
    }

    const handleInfiniteScroll = () => {
      const singleSet = el.scrollWidth / 3;
      if (singleSet <= 0) return;

      // If user reaches end of 2nd set, silently jump back to 1st set equivalent position
      if (el.scrollLeft >= singleSet * 2) {
        el.scrollLeft -= singleSet;
      }
      // If user scrolls backwards to the start of 1st set, jump forward to 2nd set
      else if (el.scrollLeft <= 10) {
        el.scrollLeft += singleSet;
      }
    };

    el.addEventListener("scroll", handleInfiniteScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleInfiniteScroll);
  }, [items]);

  return (
    <section
      id={`category-section-${category.id}`}
      className="space-y-4 scroll-mt-28 relative group/section"
    >
      {/* Category Header */}
      <div className="flex justify-between items-center">
        <h2
          className="text-xl font-black text-white flex items-center gap-2 border-l-4 pl-3"
          style={{ borderColor: primaryColor }}
        >
          {category.name}
          <span className="text-xs font-mono font-normal text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        </h2>
      </div>

      {/* Infinite Ring Horizontal Carousel Track */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-none no-scrollbar py-2 -mx-4 px-4 touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayItems.map((dish, idx) => (
          <div
            key={`${dish.id}-${idx}`}
            className="w-[280px] sm:w-[320px] flex-shrink-0"
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
