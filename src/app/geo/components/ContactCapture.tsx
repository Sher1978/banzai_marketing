"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Send, FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import '@/lib/i18n';

export const ContactCapture: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  // State for Audit Form
  const [auditStatus, setAuditStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // State for Lead Magnet Form
  const [magnetStatus, setMagnetStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Handle Audit Form Submit
  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuditStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        setAuditStatus("success");
        form.reset();
      } else {
        setAuditStatus("error");
      }
    } catch (error) {
      setAuditStatus("error");
    }
  };

  // Handle Lead Magnet Form Submit
  const handleMagnetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMagnetStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        setMagnetStatus("success");
        form.reset();
      } else {
        setMagnetStatus("error");
      }
    } catch (error) {
      setMagnetStatus("error");
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden animate-fade-in" id="contact">
      
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-premium/[0.03] filter blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Express Audit Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#12100e]/80 border border-gold-premium/15 p-8 md:p-10 rounded-3xl shadow-gold-glow flex flex-col justify-between relative group"
        >
          {/* Glowing Tech Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-premium/40 rounded-tl-3xl group-hover:border-gold-premium transition-all duration-300 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-premium/40 rounded-br-3xl group-hover:border-gold-premium transition-all duration-300 pointer-events-none" />

          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4">
              {t.contact.title}
            </h3>
            
            <p className="text-sand-muted text-xs md:text-sm leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <form onSubmit={handleAuditSubmit} className="flex flex-col gap-5">
              
              {/* Form Metadata */}
              <input type="hidden" name="_subject" value="Заявка на ГЕО" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  placeholder={`${t.contact.form.name.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : '(OPTIONAL)'}`}
                />
              </div>

              {/* Contact field */}
              <div className="relative">
                <input
                  type="text"
                  name="contact"
                  required
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  placeholder={t.contact.form.contact.toUpperCase()}
                />
              </div>

              {/* Industry Select field */}
              <div className="relative">
                <select
                  name="industry"
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    {`${t.contact.form.industryOptions.placeholder.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : '(OPTIONAL)'}`}
                  </option>
                  <option value="realestate">{t.contact.form.industryOptions.realestate}</option>
                  <option value="premium">{t.contact.form.industryOptions.premium}</option>
                  <option value="medical">{t.contact.form.industryOptions.medical}</option>
                  <option value="other">{t.contact.form.industryOptions.other}</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-premium/60 pointer-events-none">
                  ▼
                </div>
              </div>

              {/* Website link */}
              <div className="relative">
                <input
                  type="url"
                  name="website"
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                  placeholder={`${t.contact.form.website.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : '(OPTIONAL)'}`}
                />
              </div>

              {/* Submit CTA Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={auditStatus === "loading" || auditStatus === "success"}
                className="w-full relative px-6 py-4.5 bg-transparent overflow-hidden mt-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gold-premium hover:border-gold-light transition-colors group/btn cursor-pointer"
              >
                {/* Background transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                
                <span className="relative z-10 font-display font-black text-xs md:text-sm text-white group-hover/btn:text-black tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2">
                  {auditStatus === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gold-premium border-t-transparent rounded-full animate-spin" />
                      <span>{t.contact.form.loading}</span>
                    </>
                  ) : auditStatus === "success" ? (
                    <>
                      <CheckCircle size={14} className="text-black group-hover/btn:text-black" />
                      <span>{t.contact.form.success}</span>
                    </>
                  ) : auditStatus === "error" ? (
                    <>
                      <AlertCircle size={14} />
                      <span>{t.contact.form.error}</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>{t.contact.form.cta}</span>
                    </>
                  )}
                </span>
              </motion.button>

            </form>
          </div>

          {/* Form status prompt */}
          <div className="mt-6 flex flex-col gap-2 relative z-20">
            {auditStatus === "success" && (
              <p className="text-emerald-400 font-mono text-[10px] text-center uppercase tracking-widest animate-pulse">
                {t.contact.form.success}
              </p>
            )}
            {auditStatus === "error" && (
              <p className="text-red-500 font-mono text-[10px] text-center uppercase tracking-widest">
                {t.contact.form.error}
              </p>
            )}
            <p className="text-[9px] md:text-[10px] font-mono text-sand-muted/50 text-center tracking-wide italic">
              {t.contact.form.footnote}
            </p>
          </div>

        </motion.div>

        {/* Right Column: Lead Magnet Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-gradient-to-b from-[#1c1813] to-[#12100e] border border-gold-premium/15 p-8 md:p-10 rounded-3xl flex flex-col justify-between relative group/magnet shadow-lg"
        >
          {/* Top Decorative Graphic resembling document binding */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold-premium to-gold-dark rounded-t-3xl" />

          <div>
            {/* Magnet Badge */}
            <div className="inline-flex items-center gap-1.5 text-[8px] font-mono border border-gold-premium/30 px-2.5 py-1 rounded-full text-gold-light bg-gold-dark/10 tracking-widest uppercase font-bold mb-8">
              <FileText size={10} />
              <span>FREE PDF REPORT</span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4 leading-tight">
              {t.contact.magnet.title}
            </h3>
            
            <p className="text-sand-muted text-xs md:text-sm leading-relaxed mb-6">
              {t.contact.magnet.desc}
            </p>

            {/* Document visual cover placeholder */}
            <div className="w-full aspect-[4/3] bg-black/40 rounded-2xl border border-gold-premium/5 p-4 flex flex-col justify-between mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="flex justify-between items-start">
                <span className="font-mono text-[7px] text-gold-premium/50 uppercase tracking-widest">
                  REPORT B-GEO // 2026
                </span>
                <HelpCircle size={14} className="text-gold-premium/30" />
              </div>
              <div>
                <h4 className="font-display font-black text-xs md:text-sm text-gold-light tracking-wide leading-tight mb-1">
                  КАК ИИ РАЗРУШАЕТ
                  <br />
                  КЛАССИЧЕСКИЕ ВОРОНКИ
                </h4>
                <div className="w-8 h-0.5 bg-gold-premium rounded" />
              </div>
              <div className="flex justify-between items-center text-[7px] font-mono text-sand-muted/50">
                <span>SIZE: 9.4 MB</span>
                <span>FORMAT: VECTOR PDF</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleMagnetSubmit} className="flex flex-col gap-4">
            
            <input type="hidden" name="_subject" value="Banzai Marketing GEO - Lead Magnet PDF Download" />
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative">
              <input
                type="text"
                name="contact_magnet"
                required
                className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/40 transition-all font-mono"
                placeholder={t.contact.magnet.input.toUpperCase()}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={magnetStatus === "loading" || magnetStatus === "success"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs px-6 py-4.5 rounded-xl uppercase tracking-wider shadow-gold-glow hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              {magnetStatus === "loading" ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>{t.contact.form.loading}</span>
                </>
              ) : magnetStatus === "success" ? (
                <>
                  <CheckCircle size={14} />
                  <span>{t.contact.form.success}</span>
                </>
              ) : magnetStatus === "error" ? (
                <>
                  <AlertCircle size={14} />
                  <span>{t.contact.form.error}</span>
                </>
              ) : (
                <>
                  <FileText size={12} />
                  <span>{t.contact.magnet.cta}</span>
                </>
              )}
            </motion.button>
          </form>

          {magnetStatus === "success" && (
            <p className="text-emerald-400 font-mono text-[10px] text-center uppercase tracking-widest animate-pulse mt-4">
              {t.contact.magnet.success}
            </p>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default ContactCapture;
