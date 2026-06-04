"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { translations } from '../translations';
import '@/lib/i18n';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  website: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, website }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [websiteVal, setWebsiteVal] = useState(website || '');

  useEffect(() => {
    if (isOpen) {
      setWebsiteVal(website || '');
    }
  }, [isOpen, website]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setStatus("idle"), 500);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const contact = (formData.get('contact') as string) || '';
    const websiteForm = websiteVal;

    try {
      const [formRes] = await Promise.allSettled([
        fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: formData
        }),
        fetch("/api/geo-lead", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'audit', name, contact, website: websiteForm, lang }),
        })
      ]);

      if (formRes.status === 'fulfilled' && formRes.value.ok) {
        setStatus("success");
        form.reset();
        
        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = '/geo/thank-you';
        }, 600);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-lg bg-bg-dubai border border-gold-premium/30 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(197,168,128,0.25)] relative z-10 overflow-hidden group text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gold-premium/20 hover:border-gold-premium/50 bg-black/40 text-gold-premium flex items-center justify-center cursor-pointer transition-colors duration-300 z-50"
              aria-label="Close form"
            >
              <X size={14} />
            </button>

            {/* Background cyber grid */}
            <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-premium/[0.015] filter blur-[150px] pointer-events-none rounded-full" />

            <div className="relative z-10">
              <span className="font-mono text-[7px] text-gold-premium/50 uppercase tracking-widest block mb-2">
                GEO AUDIT PROTOCOL // LEVEL_01
              </span>
              
              <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4">
                {t.contact.title}
              </h3>
              
              <p className="text-sand-muted text-xs leading-relaxed mb-6">
                {lang === 'ru'
                  ? "Заполните форму, чтобы получить индивидуальный GEO-аудит видимости вашего бизнеса в диалоговых ИИ-агентах."
                  : lang === 'vi'
                  ? "Điền thông tin để nhận kết quả kiểm tra GEO chi tiết về mức độ hiển thị của doanh nghiệp trong AI."
                  : "Fill out the form to receive your detailed GEO visibility audit for neural search platforms."}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-20">
                {/* Subject and Honey */}
                <input type="hidden" name="_subject" value="BanzAI Marketing GEO - Audit Request (Modal)" />
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold">
                    {lang === 'ru' ? "Ваше имя" : lang === 'vi' ? "Tên của bạn" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-[#181512] border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                    placeholder={`${t.contact.form.name.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : lang === 'vi' ? '(TÙY CHỌN)' : '(OPTIONAL)'}`}
                  />
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold">
                    {lang === 'ru' ? "Ваши контакты (Имейл / WhatsApp / Телефон)" : lang === 'vi' ? "Liên hệ (Email / WhatsApp / Điện thoại)" : "Contact (Email / WhatsApp / Phone)"}
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full bg-[#181512] border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-3.5 text-xs text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                    placeholder={lang === 'ru' ? "EMAIL / WHATSAPP / ТЕЛЕФОН" : lang === 'vi' ? "EMAIL / WHATSAPP / ĐIỆN THOẠI" : "EMAIL / WHATSAPP / PHONE"}
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-[9px] font-mono text-sand-muted uppercase tracking-widest font-bold">
                    {lang === 'ru' ? "Ссылка на сайт" : lang === 'vi' ? "Liên kết trang web" : "Your Website Link"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="website"
                      value={websiteVal}
                      onChange={(e) => setWebsiteVal(e.target.value)}
                      className="w-full bg-[#181512] border border-gold-premium/15 focus:border-gold-premium rounded-xl pl-4 pr-10 py-3.5 text-xs text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                      placeholder={`${t.contact.form.website.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : lang === 'vi' ? '(TÙY CHỌN)' : '(OPTIONAL)'}`}
                    />
                    {websiteVal && (
                      <button
                        type="button"
                        onClick={() => setWebsiteVal('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sand-muted/40 hover:text-white transition-colors cursor-pointer"
                        title="Clear website"
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Submit Audit CTA */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full group mt-4 px-6 py-4 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-display font-black text-xs text-black tracking-widest uppercase flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.form.loading}</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle size={14} />
                        <span>{t.contact.form.success}</span>
                      </>
                    ) : status === "error" ? (
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

              {status === "success" && (
                <p className="text-emerald-400 font-mono text-[9px] text-center uppercase tracking-widest animate-pulse mt-4">
                  {t.contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 font-mono text-[9px] text-center uppercase tracking-widest mt-4">
                  {t.contact.form.error}
                </p>
              )}

              <p className="text-[8px] font-mono text-sand-muted/50 text-center tracking-wide italic mt-6">
                {t.contact.form.footnote}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
