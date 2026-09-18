"use client";

import React, { useState, useEffect } from "react";
import { RevoSettings } from "@/lib/food/foodData";
import { useCart } from "@/lib/food/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  settings: RevoSettings;
  primaryColor?: string;
}

export const RevoBatteryHeader: React.FC<Props> = ({ settings, primaryColor = "#00FF66" }) => {
  const { revoDiscountPercent, setRevoDiscountPercent } = useCart();
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(settings.cycleIntervalSeconds || 45);

  useEffect(() => {
    if (!settings.isEnabled) return;

    // Cycle through discounts: 20% -> 15% -> 10% -> 5%
    const steps = [
      settings.maxDiscountPercent,
      Math.max(5, Math.round(settings.maxDiscountPercent * 0.75)),
      Math.max(5, Math.round(settings.maxDiscountPercent * 0.5)),
      Math.max(5, Math.round(settings.maxDiscountPercent * 0.25))
    ];

    let currentStepIdx = 0;
    setRevoDiscountPercent(steps[0]);

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          currentStepIdx = (currentStepIdx + 1) % steps.length;
          setRevoDiscountPercent(steps[currentStepIdx]);
          return settings.cycleIntervalSeconds || 45;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [settings, setRevoDiscountPercent]);

  if (!settings.isEnabled) return null;

  const batteryFillWidth = `${Math.min(100, (revoDiscountPercent / settings.maxDiscountPercent) * 100)}%`;

  return (
    <div className="bg-[#1A1C20] border-b border-white/10 p-4 sticky top-0 z-30 backdrop-blur-xl bg-opacity-95 shadow-lg">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Animated Battery Icon */}
          <div className="w-12 h-6 bg-black border-2 border-white/30 rounded-lg p-0.5 relative flex items-center shadow-inner flex-shrink-0">
            <div
              className="h-full rounded transition-all duration-500"
              style={{
                width: batteryFillWidth,
                backgroundColor: primaryColor,
                boxShadow: `0 0 12px ${primaryColor}`
              }}
            />
            {/* Battery Tip */}
            <div className="w-1.5 h-3 bg-white/40 absolute -right-2 rounded-r" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-black uppercase tracking-wider" style={{ color: primaryColor }}>
                <FontAwesomeIcon icon={faBolt} /> СКИДКА REVO -{revoDiscountPercent}%
              </span>
              <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-mono">
                ПРИ ЧЕКАУТЕ
              </span>
            </div>
            <span className="text-[11px] text-white/70 block">
              Оформи заказ сейчас, пока процент скидки не упал!
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center gap-1 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 font-mono text-xs text-white/90 flex-shrink-0">
          <FontAwesomeIcon icon={faClock} className="text-white/50 text-[10px]" />
          <span>{timeLeftSeconds}с</span>
        </div>
      </div>
    </div>
  );
};
