"use client";

import React from "react";
import { VenueBranding } from "@/lib/food/foodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMotorcycle, faClock, faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

interface Props {
  branding: VenueBranding;
}

export const VenueHeader: React.FC<Props> = ({ branding }) => {
  return (
    <div className="relative border-b border-white/10 overflow-hidden">
      {/* Cover Image Banner */}
      <div className="w-full h-48 sm:h-64 bg-black relative overflow-hidden">
        {branding.coverUrl ? (
          <img
            src={branding.coverUrl}
            alt={branding.title}
            className="w-full h-full object-cover filter brightness-75 scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-slate-900 via-zinc-900 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />
      </div>

      {/* Info Content Overlay */}
      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-10 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            {/* Logo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-black border-4 border-[#121212] overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src={branding.logoUrl || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200"}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold bg-[#00FF66]/20 border border-[#00FF66]/50 text-[#00FF66] px-2.5 py-0.5 rounded-full uppercase">
                  ПРЯМОЙ ЗАКАЗ ИЗ РЕСТОРАНА
                </span>
                <span className="text-[10px] font-mono bg-white/10 text-white/90 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[#F59E0B]" /> 4.9
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                {branding.title}
              </h1>
            </div>
          </div>
        </div>

        <p className="text-sm text-white/70 mt-3 leading-relaxed">
          {branding.description}
        </p>

        {/* Address and Delivery Info Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
          <div className="bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#00FF66] text-xs" />
            <span className="text-xs text-white/80 font-medium truncate">{branding.address}</span>
          </div>

          <div className="bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2">
            <FontAwesomeIcon icon={faMotorcycle} className="text-[#3B82F6] text-xs" />
            <span className="text-xs text-white/80 font-medium">Доставка: {branding.deliveryFee} ₽</span>
          </div>

          <div className="bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2 col-span-2 sm:col-span-1">
            <FontAwesomeIcon icon={faClock} className="text-[#F59E0B] text-xs" />
            <span className="text-xs text-white/80 font-medium">Мин. заказ: {branding.minOrderAmount} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};
