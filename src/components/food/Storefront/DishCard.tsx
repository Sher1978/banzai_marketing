"use client";

import React, { useState } from "react";
import { MenuItem } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faBolt, faFire, faUtensils } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dish: MenuItem;
  onOpenModal: (dish: MenuItem) => void;
  primaryColor?: string;
}

export const DishCard: React.FC<Props> = ({ dish, onOpenModal, primaryColor = "#00FF66" }) => {
  const { items, addItem, updateQuantity } = useCart();
  const [imgError, setImgError] = useState(false);

  // Find total count of this dish in cart
  const cartItemsOfDish = items.filter((i) => i.menuItemId === dish.id);
  const totalCountInCart = cartItemsOfDish.reduce((sum, i) => sum + i.quantity, 0);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dish.modifiers && dish.modifiers.length > 0) {
      onOpenModal(dish);
    } else {
      addItem(dish);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItemsOfDish.length > 0) {
      updateQuantity(cartItemsOfDish[0].id, 1);
    } else {
      addItem(dish);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItemsOfDish.length > 0) {
      updateQuantity(cartItemsOfDish[0].id, -1);
    }
  };

  return (
    <div
      onClick={() => onOpenModal(dish)}
      className="bg-[#1E2024]/95 hover:bg-[#25282D] rounded-3xl border border-white/10 p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-xl relative group h-full w-full"
    >
      <div>
        {/* Top Image Box - Full Width, Clear Aspect Ratio */}
        <div className="w-full h-44 sm:h-52 rounded-2xl bg-black border border-white/10 overflow-hidden relative flex items-center justify-center">
          {!imgError && dish.imageUrl ? (
            <img
              src={dish.imageUrl}
              alt=""
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center text-white/30 space-y-1">
              <FontAwesomeIcon icon={faUtensils} className="text-3xl text-[#00FF66]/50" />
              <span className="text-xs font-mono font-bold text-white/40">Banzai Food</span>
            </div>
          )}

          {/* Badges */}
          {dish.isBundle && (
            <span className="absolute top-3 left-3 bg-[#FF385C] text-white font-black text-[10px] uppercase px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md z-10">
              <FontAwesomeIcon icon={faBolt} /> Бандл
            </span>
          )}
          {dish.isHit && !dish.isBundle && (
            <span className="absolute top-3 left-3 bg-[#F59E0B] text-black font-black text-[10px] uppercase px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md z-10">
              <FontAwesomeIcon icon={faFire} /> Хит
            </span>
          )}
        </div>

        {/* Text Details - Spacious Multi-line Title & Description */}
        <div className="mt-3.5 space-y-1.5">
          <h3 className="font-bold text-white text-base sm:text-lg leading-snug line-clamp-2" title={dish.name}>
            {dish.name}
          </h3>
          <p className="text-xs text-white/70 line-clamp-3 sm:line-clamp-4 leading-relaxed">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Action Row - Price + Full Add Button */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
        <span className="text-base sm:text-lg font-black font-mono text-white">
          {dish.price} ₽
        </span>

        {totalCountInCart > 0 ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-black/80 rounded-full px-2.5 py-1 border border-white/20"
          >
            <button
              onClick={handleDecrement}
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="font-mono font-bold text-white text-sm px-1">{totalCountInCart}</span>
            <button
              onClick={handleIncrement}
              className="w-6 h-6 rounded-full text-black flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: primaryColor }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddClick}
            className="px-4 py-2 rounded-full text-black font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer flex-shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Добавить</span>
          </button>
        )}
      </div>
    </div>
  );
};
