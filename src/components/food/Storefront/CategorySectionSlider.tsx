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

  // Triplicate items array so there's always a seamless 360° ring in both directions
  const shouldLoop = items.length > 0;
  const displayItems = shouldLoop ? [...items, ...items, ...items, ...items] : items;

  useEffect(() => {
    if (!shouldLoop) return;
    const el = sliderRef.current;
    if (!el) return;

    // Set initial scroll position in the middle set once on mount
    const setWidth = el.scrollWidth / 4;
    if (setWidth > 0 && el.scrollLeft < 10) {
      el.scrollLeft = setWidth;
    }

    let isAdjusting = false;
    const handleInfiniteScroll = () => {
      if (isAdjusting) return;
      const setWidth = el.scrollWidth / 4;
      if (setWidth <= 0) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      // Swiping right near the end of container -> jump back by 1 set
      if (el.scrollLeft >= maxScrollLeft - 20) {
        isAdjusting = true;
        el.scrollLeft -= setWidth;
        setTimeout(() => { isAdjusting = false; }, 40);
      }
      // Swiping left near the start of container -> jump forward by 1 set
      else if (el.scrollLeft <= 10) {
        isAdjusting = true;
        el.scrollLeft += setWidth;
        setTimeout(() => { isAdjusting = false; }, 40);
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

      {/* 360-Degree Infinite Looping Horizontal Slider */}
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
