"use client";

import React, { useRef } from "react";
import { MenuItem, MenuCategory } from "@/lib/food/foodData";
import { DishCard } from "@/components/food/Storefront/DishCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  // Duplicate items array if length is small to create loop feel
  const displayItems = items.length < 4 ? [...items, ...items] : items;

  return (
    <section
      id={`category-section-${category.id}`}
      className="space-y-4 scroll-mt-28 relative group/section"
    >
      {/* Category Header with Scroll Buttons */}
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

        {/* Scroll Control Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleScrollLeft}
            className="w-8 h-8 rounded-full bg-black/60 border border-white/20 hover:border-white text-white/80 hover:text-white flex items-center justify-center text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            title="Прокрутить назад"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-8 h-8 rounded-full bg-black/60 border border-white/20 hover:border-white text-white/80 hover:text-white flex items-center justify-center text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            title="Прокрутить вперед"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-none no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayItems.map((dish, idx) => (
          <div
            key={`${dish.id}-${idx}`}
            className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start"
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
