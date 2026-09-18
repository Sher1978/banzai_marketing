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
      className="bg-[#1E2024]/95 hover:bg-[#25282D] rounded-3xl border border-white/10 p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg relative group h-full w-full"
    >
      <div>
        {/* Top Image Box - Full Width, No wasted margins */}
        <div className="w-full h-36 sm:h-40 rounded-2xl bg-black border border-white/10 overflow-hidden relative flex items-center justify-center">
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
              <span className="text-[10px] font-mono font-bold text-white/40">Banzai Food</span>
            </div>
          )}

          {/* Badges */}
          {dish.isBundle && (
            <span className="absolute top-2 left-2 bg-[#FF385C] text-white font-black text-[9px] uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md z-10">
              <FontAwesomeIcon icon={faBolt} /> Бандл
            </span>
          )}
          {dish.isHit && !dish.isBundle && (
            <span className="absolute top-2 left-2 bg-[#F59E0B] text-black font-black text-[9px] uppercase px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md z-10">
              <FontAwesomeIcon icon={faFire} /> Хит
            </span>
          )}
        </div>

        {/* Text Details */}
        <div className="mt-2.5 space-y-1">
          <h3 className="font-bold text-white text-sm sm:text-base leading-tight truncate" title={dish.name}>
            {dish.name}
          </h3>
          <p className="text-[11px] text-white/60 line-clamp-2 leading-tight">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Action Row - Price + Add Button */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
        <span className="text-sm sm:text-base font-black font-mono text-white">
          {dish.price} ₽
        </span>

        {totalCountInCart > 0 ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 bg-black/80 rounded-full px-1.5 py-0.5 border border-white/20"
          >
            <button
              onClick={handleDecrement}
              className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[10px] font-bold"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="font-mono font-bold text-white text-xs px-1">{totalCountInCart}</span>
            <button
              onClick={handleIncrement}
              className="w-5 h-5 rounded-full text-black flex items-center justify-center text-[10px] font-bold"
              style={{ backgroundColor: primaryColor }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddClick}
            className="px-3 py-1.5 rounded-full text-black font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 cursor-pointer flex-shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className="hidden xs:inline">Добавить</span>
          </button>
        )}
      </div>
    </div>
  );
};
