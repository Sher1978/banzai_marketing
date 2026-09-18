"use client";

import React, { useState } from "react";
import { VenueBranding } from "@/lib/food/foodData";
import { uploadImageWithFallback } from "@/lib/food/uploadHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPalette, faFont, faStore, faSpinner, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  branding: VenueBranding;
  onChange: (updated: VenueBranding) => void;
  onSave: () => void;
  isSaving: boolean;
}

const PRESET_ACCENTS = ["#00FF66", "#FF385C", "#3B82F6", "#F59E0B", "#8B5CF6", "#EC4899", "#10B981"];
const PRESET_BGS = ["#121212", "#0F172A", "#18181B", "#000000", "#1E1B4B"];
const FONTS = ["Outfit", "Inter", "Montserrat", "Playfair Display", "Roboto"];

export const BrandingTab: React.FC<Props> = ({ branding, onChange, onSave, isSaving }) => {
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [logoSuccess, setLogoSuccess] = useState(false);
  const [coverSuccess, setCoverSuccess] = useState(false);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingLogo(true);
    setLogoSuccess(false);
    try {
      const url = await uploadImageWithFallback(file, "logos");
      onChange({ ...branding, logoUrl: url });
      setLogoSuccess(true);
      setTimeout(() => setLogoSuccess(false), 3000);
    } catch (err) {
      alert("Ошибка при загрузке логотипа");
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingCover(true);
    setCoverSuccess(false);
    try {
      const url = await uploadImageWithFallback(file, "covers");
      onChange({ ...branding, coverUrl: url });
      setCoverSuccess(true);
      setTimeout(() => setCoverSuccess(false), 3000);
    } catch (err) {
      alert("Ошибка при загрузке обложки");
    } finally {
      setUploadingCover(false);
    }
  };

  return (
    <div className="space-y-8 text-white">
      {/* 🟢 Блок Основной Информации */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-4">
        <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
          <FontAwesomeIcon icon={faStore} /> Информация о заведении
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-white/70 block mb-1">Название заведения</label>
            <input
              type="text"
              value={branding.title}
              onChange={(e) => onChange({ ...branding, title: e.target.value })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div>
            <label className="text-xs text-white/70 block mb-1">Телефон для связи</label>
            <input
              type="text"
              value={branding.phone}
              onChange={(e) => onChange({ ...branding, phone: e.target.value })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-xs text-white/70 block mb-1">Описание / Слоган заведения</label>
            <textarea
              rows={2}
              value={branding.description}
              onChange={(e) => onChange({ ...branding, description: e.target.value })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div>
            <label className="text-xs text-white/70 block mb-1">Адрес заведения</label>
            <input
              type="text"
              value={branding.address}
              onChange={(e) => onChange({ ...branding, address: e.target.value })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div>
            <label className="text-xs text-white/70 block mb-1">Мин. сумма заказа (₽)</label>
            <input
              type="number"
              value={branding.minOrderAmount}
              onChange={(e) => onChange({ ...branding, minOrderAmount: Number(e.target.value) })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div>
            <label className="text-xs text-white/70 block mb-1">Стоимость доставки (₽)</label>
            <input
              type="number"
              value={branding.deliveryFee}
              onChange={(e) => onChange({ ...branding, deliveryFee: Number(e.target.value) })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>

          <div>
            <label className="text-xs text-white/70 block mb-1">Email для уведомлений о заказах</label>
            <input
              type="email"
              value={branding.notifyEmail || ""}
              onChange={(e) => onChange({ ...branding, notifyEmail: e.target.value })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            />
          </div>
        </div>
      </div>

      {/* 🖼 Блок Загрузки Изображений (Логотип и Обложка) */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-6">
        <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
          <FontAwesomeIcon icon={faUpload} /> Логотип & Обложка мобильного меню
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Upload Box */}
          <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-semibold text-white block">Логотип заведения</span>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-black border border-white/20 overflow-hidden flex items-center justify-center relative">
                {branding.logoUrl ? (
                  <img src={branding.logoUrl} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white/40">Нет фото</span>
                )}
              </div>
              <div className="flex-1">
                <label className="cursor-pointer inline-flex items-center gap-2 bg-[#00FF66]/20 border border-[#00FF66]/50 text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all">
                  {uploadingLogo ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin /> Загрузка...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faUpload} /> Загрузить лого
                    </>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} disabled={uploadingLogo} />
                </label>
                {logoSuccess && <span className="text-xs text-[#00FF66] flex items-center gap-1 mt-2"><FontAwesomeIcon icon={faCheckCircle} /> Загружено!</span>}
              </div>
            </div>
          </div>

          {/* Cover Upload Box */}
          <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-3">
            <span className="text-sm font-semibold text-white block">Обложка шапки (Banner)</span>
            <div className="flex flex-col gap-3">
              <div className="w-full h-24 rounded-xl bg-black border border-white/20 overflow-hidden relative">
                {branding.coverUrl ? (
                  <img src={branding.coverUrl} alt="Cover" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-white/40 flex items-center justify-center h-full">Нет обложки</span>
                )}
              </div>
              <label className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00FF66]/20 border border-[#00FF66]/50 text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all w-fit">
                {uploadingCover ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin /> Загрузка...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUpload} /> Загрузить обложку
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} disabled={uploadingCover} />
              </label>
              {coverSuccess && <span className="text-xs text-[#00FF66] flex items-center gap-1"><FontAwesomeIcon icon={faCheckCircle} /> Успешно загружено!</span>}
            </div>
          </div>
        </div>
      </div>

      {/* 🎨 Цвета & Шрифты */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-6">
        <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
          <FontAwesomeIcon icon={faPalette} /> Кастомизация Дизайна
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Accent Color */}
          <div className="space-y-2">
            <label className="text-xs text-white/70 block">Акцентный цвет бренда</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={branding.primaryColor}
                onChange={(e) => onChange({ ...branding, primaryColor: e.target.value })}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
              />
              <span className="font-mono text-sm uppercase">{branding.primaryColor}</span>
            </div>
            <div className="flex gap-2 pt-2">
              {PRESET_ACCENTS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onChange({ ...branding, primaryColor: c })}
                  className="w-6 h-6 rounded-full border border-white/20 transition-transform hover:scale-125"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-2">
            <label className="text-xs text-white/70 block">Фон приложения</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={branding.backgroundColor}
                onChange={(e) => onChange({ ...branding, backgroundColor: e.target.value })}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
              />
              <span className="font-mono text-sm uppercase">{branding.backgroundColor}</span>
            </div>
            <div className="flex gap-2 pt-2">
              {PRESET_BGS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onChange({ ...branding, backgroundColor: c })}
                  className="w-6 h-6 rounded-full border border-white/20 transition-transform hover:scale-125"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-2">
            <label className="text-xs text-white/70 block">Шрифт (Google Font)</label>
            <select
              value={branding.fontFamily}
              onChange={(e) => onChange({ ...branding, fontFamily: e.target.value as any })}
              className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00FF66]"
            >
              {FONTS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={onSave}
          disabled={isSaving}
          className="bg-[#00FF66] hover:bg-[#10B981] text-black font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          {isSaving ? <FontAwesomeIcon icon={faSpinner} spin /> : "Сохранить настройки брендинга"}
        </button>
      </div>
    </div>
  );
};
