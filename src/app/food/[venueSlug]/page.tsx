"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getVenueBySlug, VenueData, MenuItem, DEFAULT_DEMO_VENUE } from "@/lib/food/foodData";
import { CartProvider, useCart } from "@/lib/food/CartContext";
import { RevoBatteryHeader } from "@/components/food/Storefront/RevoBatteryHeader";
import { VenueHeader } from "@/components/food/Storefront/VenueHeader";
import { CategoryNav } from "@/components/food/Storefront/CategoryNav";
import { DishCard } from "@/components/food/Storefront/DishCard";
import { DishDetailModal } from "@/components/food/Storefront/DishDetailModal";
import { CartDrawer } from "@/components/food/Storefront/CartDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSpinner, faBolt } from "@fortawesome/free-solid-svg-icons";

function StorefrontContent() {
  const params = useParams();
  const slug = (params?.venueSlug as string) || "demo-burger";

  const [venue, setVenue] = useState<VenueData>(DEFAULT_DEMO_VENUE);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  const {
    items: cartItems,
    totalItemCount,
    finalTotal,
    revoDiscountAmount,
    isCartOpen,
    setIsCartOpen,
    setDeliveryFee
  } = useCart();

  useEffect(() => {
    async function loadVenue() {
      setLoading(true);
      try {
        const data = await getVenueBySlug(slug);
        setVenue(data);
        if (data.branding.deliveryFee !== undefined) {
          setDeliveryFee(data.branding.deliveryFee);
        }
      } catch (err) {
        console.error("Error loading venue storefront:", err);
      } finally {
        setLoading(false);
      }
    }
    loadVenue();
  }, [slug, setDeliveryFee]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-3">
          <FontAwesomeIcon icon={faSpinner} spin className="text-4xl text-[#00FF66]" />
          <p className="text-sm font-mono text-white/70">Загрузка меню заведения...</p>
        </div>
      </div>
    );
  }

  const { branding, revoSettings, categories, items } = venue;
  const primaryColor = branding.primaryColor || "#00FF66";

  const filteredItems = activeCategory === "all"
    ? items
    : items.filter((i) => i.categoryId === activeCategory);

  return (
    <div
      className="min-h-screen text-white font-sans selection:bg-[#00FF66]/30 pb-28"
      style={{
        backgroundColor: branding.backgroundColor || "#121212",
        fontFamily: branding.fontFamily ? `'${branding.fontFamily}', sans-serif` : "sans-serif"
      }}
    >
      {/* ⚡ Revo Battery Timer Bar */}
      <RevoBatteryHeader settings={revoSettings} primaryColor={primaryColor} />

      {/* 🏨 Venue Cover & Header */}
      <VenueHeader branding={branding} />

      {/* 📁 Sticky Category Tabs */}
      <CategoryNav
        categories={categories}
        activeCategoryId={activeCategory}
        onSelectCategory={setActiveCategory}
        primaryColor={primaryColor}
      />

      {/* 🍔 Menu Items Grid */}
      <main className="max-w-3xl mx-auto px-4 pt-6 space-y-8">
        {activeCategory === "all" ? (
          categories.map((cat) => {
            const catItems = items.filter((i) => i.categoryId === cat.id);
            if (catItems.length === 0) return null;
            return (
              <section key={cat.id} className="space-y-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2 border-l-4 pl-3" style={{ borderColor: primaryColor }}>
                  {cat.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {catItems.map((dish) => (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      onOpenModal={setSelectedDishModal}
                      primaryColor={primaryColor}
                    />
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <section className="space-y-4">
            <h2 className="text-xl font-black text-white border-l-4 pl-3" style={{ borderColor: primaryColor }}>
              {categories.find((c) => c.id === activeCategory)?.name || "Категория"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  onOpenModal={setSelectedDishModal}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 🛒 Floating Bottom Cart Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-0 w-full z-40 px-4 pointer-events-none">
          <div className="max-w-md mx-auto pointer-events-auto">
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full py-4 px-6 rounded-full text-black font-black text-sm uppercase tracking-wider shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer border border-white/20"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-black text-white text-xs font-mono font-bold flex items-center justify-center">
                  {totalItemCount}
                </span>
                <span>Перейти к заказу</span>
              </div>

              <div className="flex items-center gap-2 font-mono font-black text-base">
                {revoDiscountAmount > 0 && (
                  <span className="text-[10px] bg-black/20 text-black px-2 py-0.5 rounded uppercase font-bold flex items-center gap-1">
                    <FontAwesomeIcon icon={faBolt} /> Revo
                  </span>
                )}
                <span>{finalTotal} ₽</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* 🍲 Modal for dish options */}
      {selectedDishModal && (
        <DishDetailModal
          dish={selectedDishModal}
          onClose={() => setSelectedDishModal(null)}
          primaryColor={primaryColor}
        />
      )}

      {/* 💳 Checkout Drawer */}
      {isCartOpen && (
        <CartDrawer
          branding={branding}
          venueId={venue.id}
          onClose={() => setIsCartOpen(false)}
          primaryColor={primaryColor}
        />
      )}
    </div>
  );
}

export default function StorefrontPage() {
  return (
    <CartProvider>
      <StorefrontContent />
    </CartProvider>
  );
}
