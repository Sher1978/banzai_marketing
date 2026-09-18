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
            <FontAwesomeIcon icon={faBolt} /> Настройки Механики Скидок Revo
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
          Скидка Revo имитирует сгорающий заряд батарейки. Посетитель видит обратный отсчет и максимальную скидку, побуждая его оформить заказ здесь и сейчас!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-3">
            <label className="text-xs text-white/70 flex items-center gap-2 font-bold">
              <FontAwesomeIcon icon={faPercent} className="text-[#00FF66]" /> Максимальный размер скидки (%)
            </label>
            <input
              type="number"
              min={5}
              max={50}
              value={settings.maxDiscountPercent}
              onChange={(e) => onChange({ ...settings, maxDiscountPercent: Number(e.target.value) })}
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white text-lg font-mono focus:outline-none focus:border-[#00FF66]"
            />
            <span className="text-[11px] text-white/50 block">Например: 20%. Клиент сможет получить до 20% скидки при быстром заказе.</span>
          </div>

          <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-3">
            <label className="text-xs text-white/70 flex items-center gap-2 font-bold">
              <FontAwesomeIcon icon={faClock} className="text-[#FBBC05]" /> Скорость сгорания скидки (Секунд на этап)
            </label>
            <input
              type="number"
              min={10}
              max={300}
              value={settings.cycleIntervalSeconds}
              onChange={(e) => onChange({ ...settings, cycleIntervalSeconds: Number(e.target.value) })}
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white text-lg font-mono focus:outline-none focus:border-[#00FF66]"
            />
            <span className="text-[11px] text-white/50 block">Каждые N секунд процент скидки уменьшается (например 20% -&gt; 15% -&gt; 10% -&gt; 5%).</span>
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="bg-black/80 p-6 rounded-2xl border border-[#00FF66]/30 space-y-3">
          <span className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-wider block">
            ⚡ ПРЕВЬЮ ВИДЖЕТА РЕВО В МЕНЮ
          </span>
          <div className="flex items-center justify-between gap-4 bg-[#121212] p-4 rounded-xl border border-white/10">
            <div>
              <span className="text-sm font-bold text-white block">Скидка Revo при чекауте:</span>
              <span className="text-xs text-white/60 block">Оформи заказ до сгорания таймера!</span>
            </div>
            <div className="bg-[#00FF66]/20 border border-[#00FF66] px-4 py-2 rounded-xl text-[#00FF66] font-mono font-black text-xl">
              -{settings.maxDiscountPercent}%
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
