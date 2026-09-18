"use client";

import React, { useState } from "react";
import { AlertCircle, Send, CheckCircle, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getFoodT } from "./foodTranslations";

export default function FinalCTASection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2);
  const lang = currentLang === "ru" ? "ru" : currentLang === "uk" ? "uk" : "en";
  const t = getFoodT(lang);

  const [formData, setFormData] = useState({
    nameTelegram: "",
    grabUrl: "",
    cityDistrict: "",
    cuisine: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nameTelegram || !formData.cityDistrict) {
      setErrorMsg(
        lang === "ru"
          ? "Пожалуйста, заполните имя/Telegram и город/район."
          : lang === "uk"
          ? "Будь ласка, заповніть ім'я/Telegram та місто/район."
          : "Please fill in your Name/Telegram and City/District."
      );
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/outrich-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nameTelegram,
          grabUrl: formData.grabUrl,
          location: formData.cityDistrict,
          cuisine: formData.cuisine,
          source: "outrich.online/food",
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit-form" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B14F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DISTRICT LIMIT WARNING BOX */}
        <div className="relative mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/60 via-amber-400/80 to-amber-500/60 rounded-3xl opacity-75 blur-xl animate-pulse group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-gray-900/95 border-2 border-amber-400 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-md shadow-amber-500/20">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 mb-1 block">
                  {t.ctaQuotaBadge}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  {t.ctaQuotaTitle}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {t.ctaQuotaText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FORM CONTAINER */}
        <div className="bg-gray-800/90 border border-gray-700 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {t.formTitle}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              {t.formSub}
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#00B14F] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00B14F]/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                {t.successTitle}
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                {t.successDesc}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#00B14F] hover:underline"
              >
                {lang === "ru" ? "Заполнить еще одну заявку" : lang === "uk" ? "Заповнити ще одну заявку" : "Submit another request"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Name / Telegram */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                    {t.l1Name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.ph1Name}
                    value={formData.nameTelegram}
                    onChange={(e) =>
                      setFormData({ ...formData, nameTelegram: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00B14F] transition-colors placeholder:text-gray-500 font-medium"
                  />
                </div>

                {/* 2. Grab URL */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                    {t.l2Url}
                  </label>
                  <input
                    type="text"
                    placeholder={t.ph2Url}
                    value={formData.grabUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, grabUrl: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00B14F] transition-colors placeholder:text-gray-500 font-medium"
                  />
                </div>

                {/* 3. City / District */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                    {t.l3Loc}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.ph3Loc}
                    value={formData.cityDistrict}
                    onChange={(e) =>
                      setFormData({ ...formData, cityDistrict: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00B14F] transition-colors placeholder:text-gray-500 font-medium"
                  />
                </div>

                {/* 4. Cuisine */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-2">
                    {t.l4Cuisine}
                  </label>
                  <input
                    type="text"
                    placeholder={t.ph4Cuisine}
                    value={formData.cuisine}
                    onChange={(e) =>
                      setFormData({ ...formData, cuisine: e.target.value })
                    }
                    className="w-full bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#00B14F] transition-colors placeholder:text-gray-500 font-medium"
                  />
                </div>
              </div>

              {/* PULSING GRAB GREEN CTA BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00B14F] hover:bg-[#009643] text-white font-black text-base sm:text-lg px-8 py-5 rounded-2xl shadow-xl shadow-[#00B14F]/40 hover:shadow-2xl hover:shadow-[#00B14F]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Send className="w-5 h-5" />
                  <span>
                    {loading ? t.btnSending : t.btnSubmit}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-[#00B14F]" />
                <span>{t.privacy}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
