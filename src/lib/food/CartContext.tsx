"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem, CartItem, CartItemOption } from "./foodData";

interface CartContextType {
  items: CartItem[];
  addItem: (menuItem: MenuItem, selectedOptions?: CartItemOption[], quantity?: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  revoDiscountPercent: number;
  setRevoDiscountPercent: (percent: number) => void;
  subtotal: number;
  revoDiscountAmount: number;
  deliveryFee: number;
  setDeliveryFee: (fee: number) => void;
  finalTotal: number;
  totalItemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [revoDiscountPercent, setRevoDiscountPercent] = useState<number>(20);
  const [deliveryFee, setDeliveryFee] = useState<number>(190);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const revoDiscountAmount = Math.round(subtotal * (revoDiscountPercent / 100));
  const finalTotal = Math.max(0, subtotal - revoDiscountAmount + (items.length > 0 ? deliveryFee : 0));
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const addItem = (menuItem: MenuItem, selectedOptions: CartItemOption[] = [], quantity = 1) => {
    // Generate unique ID based on item ID and selected option strings
    const optionsKey = selectedOptions
      .map(o => `${o.groupTitle}:${o.optionName}`)
      .sort()
      .join("|");
    const cartItemId = `${menuItem.id}-${optionsKey}`;

    const optionsExtraPrice = selectedOptions.reduce((sum, o) => sum + o.extraPrice, 0);
    const unitPriceWithOptions = menuItem.price + optionsExtraPrice;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((i) => i.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * unitPriceWithOptions
        };
        return updated;
      }

      const newItem: CartItem = {
        id: cartItemId,
        menuItemId: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity,
        imageUrl: menuItem.imageUrl,
        selectedOptions,
        unitPriceWithOptions,
        totalPrice: quantity * unitPriceWithOptions
      };
      return [...prevItems, newItem];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.unitPriceWithOptions
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        revoDiscountPercent,
        setRevoDiscountPercent,
        subtotal,
        revoDiscountAmount,
        deliveryFee,
        setDeliveryFee,
        finalTotal,
        totalItemCount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
