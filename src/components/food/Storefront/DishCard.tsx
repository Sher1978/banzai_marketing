"use client";

import React from "react";
import { MenuItem } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faBolt, faFire } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dish: MenuItem;
  onOpenModal: (dish: MenuItem) => void;
  primaryColor?: string;
}

export const DishCard: React.FC<Props> = ({ dish, onOpenModal, primaryColor = "#00FF66" }) => {
  const { items, addItem, updateQuantity } = useCart();

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
      className="bg-[#1E2024]/90 hover:bg-[#25282D] rounded-3xl border border-white/10 p-3.5 flex gap-4 cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] relative group overflow-hidden"
    >
      {/* Photo Box */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-black border border-white/10 overflow-hidden flex-shrink-0 relative">
        <img
          src={dish.imageUrl}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {dish.isBundle && (
          <span className="absolute top-1.5 left-1.5 bg-[#FF385C] text-white font-black text-[9px] uppercase px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow">
            <FontAwesomeIcon icon={faBolt} /> Бандл
          </span>
        )}
        {dish.isHit && !dish.isBundle && (
          <span className="absolute top-1.5 left-1.5 bg-[#F59E0B] text-black font-black text-[9px] uppercase px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow">
            <FontAwesomeIcon icon={faFire} /> Хит
          </span>
        )}
      </div>

      {/* Info Box */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="font-bold text-white text-base leading-snug line-clamp-1">{dish.name}</h3>
          <p className="text-xs text-white/60 line-clamp-2 mt-1 leading-relaxed">{dish.description}</p>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
          <span className="text-base sm:text-lg font-black font-mono text-white">
            {dish.price} ₽
          </span>

          {totalCountInCart > 0 ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-black/80 rounded-full px-2 py-1 border border-white/20"
            >
              <button
                onClick={handleDecrement}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition-all"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="font-mono font-bold text-white text-sm px-1">{totalCountInCart}</span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 rounded-full text-black flex items-center justify-center text-xs font-bold transition-all"
                style={{ backgroundColor: primaryColor }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddClick}
              className="px-3.5 py-1.5 rounded-full text-black font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1 cursor-pointer"
              style={{ backgroundColor: primaryColor }}
            >
              <FontAwesomeIcon icon={faPlus} /> Добавить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
