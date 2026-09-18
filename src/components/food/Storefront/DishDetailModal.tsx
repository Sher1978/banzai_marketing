"use client";

import React, { useState } from "react";
import { MenuItem, CartItemOption } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dish: MenuItem;
  onClose: () => void;
  primaryColor?: string;
}

export const DishDetailModal: React.FC<Props> = ({ dish, onClose, primaryColor = "#00FF66" }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<CartItemOption[]>([]);

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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#1C1E22] border border-white/20 rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col justify-between shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm border border-white/20 hover:bg-black"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div>
          {/* Dish Big Cover Image */}
          <div className="w-full h-56 sm:h-64 bg-black relative">
            <img src={dish.imageUrl} alt={dish.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E22] via-transparent to-transparent" />
          </div>

          {/* Dish Details */}
          <div className="p-6 space-y-4 -mt-6 relative z-10">
            <h2 className="text-2xl font-black text-white">{dish.name}</h2>
            <p className="text-sm text-white/70 leading-relaxed">{dish.description}</p>

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
                            <span className="text-xs font-mono">
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

        {/* Footer Actions */}
        <div className="p-6 bg-[#121212] border-t border-white/10 flex items-center justify-between gap-4 sticky bottom-0 z-20">
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
