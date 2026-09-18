"use client";

import React, { useState, useEffect } from "react";
import { 
  getVenueBySlug, 
  saveVenueData, 
  getVenueOrders, 
  VenueData, 
  Order, 
  DEFAULT_DEMO_VENUE 
} from "@/lib/food/foodData";
import { BrandingTab } from "@/components/food/Admin/BrandingTab";
import { MenuManagerTab } from "@/components/food/Admin/MenuManagerTab";
import { RevoSettingsTab } from "@/components/food/Admin/RevoSettingsTab";
import { OrdersStatsTab } from "@/components/food/Admin/OrdersStatsTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faPalette, faUtensils, faBolt, faShoppingBag, faExternalLinkAlt, faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function FoodAdminPage() {
  const [activeTab, setActiveTab] = useState<"branding" | "menu" | "revo" | "orders">("branding");
  const [venue, setVenue] = useState<VenueData>(DEFAULT_DEMO_VENUE);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const venueData = await getVenueBySlug("demo-burger");
        setVenue(venueData);
        const orderList = await getVenueOrders("demo-burger");
        setOrders(orderList);
      } catch (err) {
        console.error("Error loading venue admin data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSaveVenue = async (updatedVenue?: VenueData) => {
    const target = updatedVenue || venue;
    setSaving(true);
    try {
      await saveVenueData(target);
      setVenue(target);
      showToast(" Настройки успешно сохранены в БД!");
    } catch (err) {
      alert("Ошибка при сохранении данных в БД");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-3">
          <FontAwesomeIcon icon={faSpinner} spin className="text-4xl text-[#00FF66]" />
          <p className="text-sm font-mono text-white/70">Загрузка панели управления заведением...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#00FF66]/30 pb-20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#00FF66] text-black font-black px-6 py-3.5 rounded-2xl shadow-[0_0_30px_rgba(0,255,102,0.8)] z-50 flex items-center gap-2 animate-bounce">
          <FontAwesomeIcon icon={faCheckCircle} /> {toastMessage}
        </div>
      )}

      {/* Header Bar */}
      <header className="bg-[#1E2024]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/40 flex items-center justify-center text-[#00FF66] font-bold">
              <FontAwesomeIcon icon={faStore} />
            </div>
            <div>
              <h1 className="text-lg font-black text-white flex items-center gap-2">
                 Панель Владельца: <span className="text-[#00FF66]">{venue.branding.title}</span>
              </h1>
              <span className="text-xs font-mono text-white/60 block">ID Slug: /{venue.slug}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`/food/${venue.slug}`}
              target="_blank"
              rel="noreferrer"
              className="bg-black/60 hover:bg-black text-white border border-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[#00FF66]" /> Открыть Мобильное Меню
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/10 scrollbar-none">
          <button
            onClick={() => setActiveTab("branding")}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "branding"
                ? "bg-[#00FF66] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                : "bg-[#1E2024] text-white/70 hover:text-white border border-white/10"
            }`}
          >
            <FontAwesomeIcon icon={faPalette} /> Брендинг & Тема
          </button>

          <button
            onClick={() => setActiveTab("menu")}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "menu"
                ? "bg-[#00FF66] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                : "bg-[#1E2024] text-white/70 hover:text-white border border-white/10"
            }`}
          >
            <FontAwesomeIcon icon={faUtensils} /> Меню & Фото блюд
          </button>

          <button
            onClick={() => setActiveTab("revo")}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "revo"
                ? "bg-[#00FF66] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                : "bg-[#1E2024] text-white/70 hover:text-white border border-white/10"
            }`}
          >
            <FontAwesomeIcon icon={faBolt} /> Настройки Revo
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "orders"
                ? "bg-[#00FF66] text-black shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                : "bg-[#1E2024] text-white/70 hover:text-white border border-white/10"
            }`}
          >
            <FontAwesomeIcon icon={faShoppingBag} /> Заказы & Аналитика ({orders.length})
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === "branding" && (
          <BrandingTab
            branding={venue.branding}
            onChange={(b) => setVenue({ ...venue, branding: b })}
            onSave={() => handleSaveVenue()}
            isSaving={saving}
          />
        )}

        {activeTab === "menu" && (
          <MenuManagerTab
            categories={venue.categories}
            items={venue.items}
            onSaveCategories={(cats) => {
              const updated = { ...venue, categories: cats };
              setVenue(updated);
            }}
            onSaveItems={(itms) => {
              const updated = { ...venue, items: itms };
              setVenue(updated);
            }}
            onSaveAll={() => handleSaveVenue()}
            isSaving={saving}
          />
        )}

        {activeTab === "revo" && (
          <RevoSettingsTab
            settings={venue.revoSettings}
            onChange={(s) => setVenue({ ...venue, revoSettings: s })}
            onSave={() => handleSaveVenue()}
            isSaving={saving}
          />
        )}

        {activeTab === "orders" && <OrdersStatsTab orders={orders} />}
      </main>
    </div>
  );
}
