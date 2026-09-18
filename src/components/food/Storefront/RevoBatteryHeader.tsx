"use client";

import React, { useState, useEffect } from "react";
import { RevoSettings } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  settings: RevoSettings;
  primaryColor?: string;
  venueId?: string;
}

export const RevoBatteryHeader: React.FC<Props> = ({
  settings,
  primaryColor = "#00FF66",
  venueId = "demo-burger"
}) => {
  const { setRevoDiscountPercent } = useCart();
  const [tierState, setTierState] = useState<{
    discountPercent: number;
    timerText: string;
    batteryWidth: string;
    hasTimer: boolean;
  }>({
    discountPercent: settings.maxDiscountPercent || 20,
    timerText: "48ч 00м",
    batteryWidth: "100%",
    hasTimer: true
  });

  useEffect(() => {
    if (!settings.isEnabled) return;

    // Load or initialize persistent visitor timer start time
    const storageKey = `revo_timer_start_${venueId}`;
    let startTime = Number(localStorage.getItem(storageKey));
    if (!startTime || isNaN(startTime)) {
      startTime = Date.now();
      localStorage.setItem(storageKey, String(startTime));
    }

    const maxHours = settings.maxDiscountHours || 48;
    const medHours = settings.mediumDiscountHours || 24;

    const maxSec = maxHours * 3600;
    const medSec = medHours * 3600;

    const updateTimer = () => {
      const elapsedSec = Math.floor((Date.now() - startTime) / 1000);

      // TIER 1: Max Discount (e.g. 20% for 48 hours)
      if (elapsedSec < maxSec) {
        const remaining = maxSec - elapsedSec;
        const h = Math.floor(remaining / 3600);
        const m = Math.floor((remaining % 3600) / 60);
        const s = remaining % 60;
        const timerText = `${h}ч ${m < 10 ? "0" + m : m}м ${s < 10 ? "0" + s : s}с`;
        
        setRevoDiscountPercent(settings.maxDiscountPercent || 20);
        setTierState({
          discountPercent: settings.maxDiscountPercent || 20,
          timerText,
          batteryWidth: "100%",
          hasTimer: true
        });
      }
      // TIER 2: Medium Discount (e.g. 10% for next 24 hours)
      else if (elapsedSec < maxSec + medSec) {
        const remaining = maxSec + medSec - elapsedSec;
        const h = Math.floor(remaining / 3600);
        const m = Math.floor((remaining % 3600) / 60);
        const s = remaining % 60;
        const timerText = `${h}ч ${m < 10 ? "0" + m : m}м ${s < 10 ? "0" + s : s}с`;

        setRevoDiscountPercent(settings.mediumDiscountPercent || 10);
        setTierState({
          discountPercent: settings.mediumDiscountPercent || 10,
          timerText,
          batteryWidth: "55%",
          hasTimer: true
        });
      }
      // TIER 3: Baseline Minimum Discount (e.g. 5% indefinitely, no timer)
      else {
        setRevoDiscountPercent(settings.minDiscountPercent || 5);
        setTierState({
          discountPercent: settings.minDiscountPercent || 5,
          timerText: "Базовая",
          batteryWidth: "25%",
          hasTimer: false
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [settings, setRevoDiscountPercent, venueId]);

  if (!settings.isEnabled) return null;

  return (
    <div className="bg-[#1A1C20] border-b border-white/10 p-3 sm:p-4 sticky top-0 z-30 backdrop-blur-xl bg-opacity-95 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Animated Battery Visual Icon */}
          <div className="w-11 h-5 sm:w-12 sm:h-6 bg-black border-2 border-white/30 rounded-lg p-0.5 relative flex items-center shadow-inner flex-shrink-0">
            <div
              className="h-full rounded transition-all duration-500"
              style={{
                width: tierState.batteryWidth,
                backgroundColor: primaryColor,
                boxShadow: `0 0 12px ${primaryColor}`
              }}
            />
            <div className="w-1.5 h-3 bg-white/40 absolute -right-2 rounded-r" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider" style={{ color: primaryColor }}>
                <FontAwesomeIcon icon={faBolt} /> СКИДКА REVO -{tierState.discountPercent}%
              </span>
              <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-mono">
                ПРИ ЧЕКАУТЕ
              </span>
            </div>
            <span className="text-[11px] text-white/70 block">
              {tierState.hasTimer
                ? "Чаще возвращаешься - выше скидка!"
                : "Базовая постоянная скидка Revo"}
            </span>
          </div>
        </div>

        {/* Countdown Timer Display (Hours & Minutes) */}
        {tierState.hasTimer ? (
          <div className="flex items-center gap-1.5 bg-black/80 px-3 py-1.5 rounded-xl border border-[#00FF66]/40 font-mono text-xs text-[#00FF66] font-bold flex-shrink-0 shadow">
            <FontAwesomeIcon icon={faClock} className="text-[#00FF66]" />
            <span>{tierState.timerText}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 font-mono text-xs text-white/60 flex-shrink-0">
            <span>Постоянная</span>
          </div>
        )}
      </div>
    </div>
  );
};
