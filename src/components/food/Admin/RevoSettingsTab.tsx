"use client";

import React from "react";
import { RevoSettings } from "@/lib/food/foodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock, faPercent, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface Props {
  settings: RevoSettings;
  onChange: (updated: RevoSettings) => void;
  onSave: () => void;
  isSaving: boolean;
}

export const RevoSettingsTab: React.FC<Props> = ({ settings, onChange, onSave, isSaving }) => {
  return (
    <div className="space-y-8 text-white">
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
            <FontAwesomeIcon icon={faBolt} /> Настройки Механики Скидок Revo по Часам
          </h3>
          <label className="flex items-center gap-3 cursor-pointer bg-black/60 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-xs font-bold text-white">Включить скидку Revo:</span>
            <input
              type="checkbox"
              checked={settings.isEnabled}
              onChange={(e) => onChange({ ...settings, isEnabled: e.target.checked })}
              className="w-5 h-5 accent-[#00FF66]"
            />
          </label>
        </div>

        <p className="text-sm text-white/70 leading-relaxed">
          Настройте 3 этапа скидок Revo в часах: Максимальный (с обратным отсчетом в часах), Средний и Минимальный постоянный без отсчета.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TIER 1: MAX */}
          <div className="bg-black/50 p-5 rounded-xl border border-[#00FF66]/30 space-y-4">
            <span className="text-xs font-mono font-bold text-[#00FF66] uppercase block">
              1. Максимальная скидка (Этап 1)
            </span>

            <div>
              <label className="text-[11px] text-white/70 block mb-1 font-bold">Скидка (%)</label>
              <input
                type="number"
                min={1}
                max={90}
                value={settings.maxDiscountPercent || 20}
                onChange={(e) => onChange({ ...settings, maxDiscountPercent: Number(e.target.value) })}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-white font-mono focus:outline-none focus:border-[#00FF66]"
              />
            </div>

            <div>
              <label className="text-[11px] text-white/70 block mb-1 font-bold">Длительность (Часов)</label>
              <input
                type="number"
                min={1}
                max={168}
                value={settings.maxDiscountHours || 48}
                onChange={(e) => onChange({ ...settings, maxDiscountHours: Number(e.target.value) })}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-white font-mono focus:outline-none focus:border-[#00FF66]"
              />
              <span className="text-[10px] text-white/50 mt-1 block">По умолчанию 48 часов</span>
            </div>
          </div>

          {/* TIER 2: MEDIUM */}
          <div className="bg-black/50 p-5 rounded-xl border border-[#F59E0B]/30 space-y-4">
            <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase block">
              2. Средняя скидка (Этап 2)
            </span>

            <div>
              <label className="text-[11px] text-white/70 block mb-1 font-bold">Скидка (%)</label>
              <input
                type="number"
                min={1}
                max={90}
                value={settings.mediumDiscountPercent || 10}
                onChange={(e) => onChange({ ...settings, mediumDiscountPercent: Number(e.target.value) })}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-white font-mono focus:outline-none focus:border-[#F59E0B]"
              />
            </div>

            <div>
              <label className="text-[11px] text-white/70 block mb-1 font-bold">Длительность (Часов)</label>
              <input
                type="number"
                min={1}
                max={168}
                value={settings.mediumDiscountHours || 24}
                onChange={(e) => onChange({ ...settings, mediumDiscountHours: Number(e.target.value) })}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-white font-mono focus:outline-none focus:border-[#F59E0B]"
              />
              <span className="text-[10px] text-white/50 mt-1 block">По умолчанию 24 часа</span>
            </div>
          </div>

          {/* TIER 3: MIN */}
          <div className="bg-black/50 p-5 rounded-xl border border-white/20 space-y-4">
            <span className="text-xs font-mono font-bold text-white/80 uppercase block">
              3. Постоянная скидка (Без отсчета)
            </span>

            <div>
              <label className="text-[11px] text-white/70 block mb-1 font-bold">Скидка (%)</label>
              <input
                type="number"
                min={1}
                max={50}
                value={settings.minDiscountPercent || 5}
                onChange={(e) => onChange({ ...settings, minDiscountPercent: Number(e.target.value) })}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-white font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div className="pt-2 text-[10px] text-white/50 leading-relaxed">
              Работает бессрочно после сгорания 1 и 2 этапов. Без таймера обратного отсчета.
            </div>
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="bg-black/80 p-6 rounded-2xl border border-[#00FF66]/30 space-y-3">
          <span className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-wider block">
            ⚡ ПРЕВЬЮ ВИДЖЕТА РЕВО В МЕНЮ (ЭТАП 1)
          </span>
          <div className="flex items-center justify-between gap-4 bg-[#121212] p-4 rounded-xl border border-white/10">
            <div>
              <span className="text-sm font-bold text-white block">Скидка Revo при чекауте:</span>
              <span className="text-xs text-white/60 block">Чаще возвращаешься - выше скидка!</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-black/80 border border-[#00FF66]/50 px-3 py-1.5 rounded-xl text-[#00FF66] font-mono text-xs font-bold">
                <FontAwesomeIcon icon={faClock} /> {settings.maxDiscountHours || 48}ч 00м 00с
              </div>
              <div className="bg-[#00FF66]/20 border border-[#00FF66] px-4 py-2 rounded-xl text-[#00FF66] font-mono font-black text-xl">
                -{settings.maxDiscountPercent || 20}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={onSave}
          disabled={isSaving}
          className="bg-[#00FF66] hover:bg-[#10B981] text-black font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,255,102,0.4)] transition-all flex items-center gap-2 cursor-pointer"
        >
          {isSaving ? <FontAwesomeIcon icon={faSpinner} spin /> : "Сохранить настройки Revo"}
        </button>
      </div>
    </div>
  );
};
