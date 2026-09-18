"use client";

import React, { useState, useEffect } from "react";
import { MenuItem, CartItemOption } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus, faCheck, faUtensils } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dish: MenuItem;
  onClose: () => void;
  primaryColor?: string;
}

export const DishDetailModal: React.FC<Props> = ({ dish, onClose, primaryColor = "#00FF66" }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOption[]>([]);
  const [imgError, setImgError] = useState(false);

  // Lock background body scrolling when modal is open
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  const handleOptionToggle = (groupTitle: string, optionName: string, extraPrice: number) => {
    setSelectedOptions((prev) => {
      const exists = prev.some((o) => o.groupTitle === groupTitle && o.optionName === optionName);
      if (exists) {
        return prev.filter((o) => !(o.groupTitle === groupTitle && o.optionName === optionName));
      }
      return [...prev, { groupTitle, optionName, extraPrice }];
    });
  };

  const optionsExtraTotal = selectedOptions.reduce((sum, o) => sum + o.extraPrice, 0);
  const unitPrice = dish.price + optionsExtraTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addItem(dish, selectedOptions, quantity);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="bg-[#1C1E22] border border-white/20 rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center text-base border border-white/30 hover:bg-black transition-all shadow-lg cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Scrollable Modal Content (Image + Details + Modifiers) */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        >
          {/* Dish Big Cover Image - Full Uncropped View (object-contain) */}
          <div className="w-full bg-black relative p-2 flex items-center justify-center min-h-[220px] max-h-[340px] overflow-hidden rounded-t-3xl border-b border-white/10">
            {!imgError && dish.imageUrl ? (
              <img
                src={dish.imageUrl}
                alt={dish.name}
                onError={() => setImgError(true)}
                className="w-full max-h-[320px] object-contain rounded-2xl"
              />
            ) : (
              <div className="w-full h-56 bg-zinc-900 rounded-2xl flex flex-col items-center justify-center text-white/40 space-y-2">
                <FontAwesomeIcon icon={faUtensils} className="text-4xl text-[#00FF66]/50" />
                <span className="text-xs font-mono">Banzai Food</span>
              </div>
            )}
          </div>

          {/* Dish Details */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-black text-white">{dish.name}</h2>
            <p className="text-sm text-white/80 leading-relaxed">{dish.description}</p>

            {/* Modifiers List */}
            {dish.modifiers && dish.modifiers.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                {dish.modifiers.map((group) => (
                  <div key={group.id} className="space-y-2">
                    <span className="text-xs font-mono font-bold text-white/80 uppercase block">
                      {group.title} {group.required && <span className="text-[#FF385C]">*</span>}
                    </span>
                    <div className="space-y-2">
                      {group.options.map((opt, i) => {
                        const isSelected = selectedOptions.some(
                          (o) => o.groupTitle === group.title && o.optionName === opt.name
                        );
                        return (
                          <div
                            key={i}
                            onClick={() => handleOptionToggle(group.title, opt.name, opt.extraPrice)}
                            className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? "bg-white/10 border-[#00FF66] text-white"
                                : "bg-black/40 border-white/10 text-white/70 hover:text-white"
                            }`}
                          >
                            <span className="text-xs font-bold flex items-center gap-2">
                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                  isSelected ? "bg-[#00FF66] border-[#00FF66] text-black font-black" : "border-white/30"
                                }`}
                              >
                                {isSelected && <FontAwesomeIcon icon={faCheck} />}
                              </span>
                              {opt.name}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#00FF66]">
                              {opt.extraPrice > 0 ? `+${opt.extraPrice} ₽` : "Бесплатно"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#121212] border-t border-white/10 flex items-center justify-between gap-4 shrink-0 z-20">
          <div className="flex items-center gap-3 bg-black/80 border border-white/20 rounded-full px-3 py-1.5">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="font-mono font-bold text-white text-base px-2">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-full text-black flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: primaryColor }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3.5 px-6 rounded-full text-black font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex justify-between items-center cursor-pointer"
            style={{ backgroundColor: primaryColor }}
          >
            <span>В корзину</span>
            <span className="font-mono font-black text-sm">{totalPrice} ₽</span>
          </button>
        </div>
      </div>
    </div>
  );
};
