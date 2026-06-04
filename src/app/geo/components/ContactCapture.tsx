"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Send, FileText, CheckCircle, AlertCircle, Plus, Minus, HelpCircle, ChevronDown, X } from 'lucide-react';
import '@/lib/i18n';

interface FaqItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ q, a, isOpen, onToggle }) => {
  return (
    <div className={`border rounded-2xl transition-all duration-300 ${
      isOpen ? 'bg-[#1c1813]/60 border-gold-premium/40' : 'bg-black/25 border-white/[0.05] hover:border-gold-premium/20'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="font-display font-black text-xs md:text-sm text-white uppercase tracking-wider pr-4">
          {q}
        </span>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
          isOpen ? 'border-gold-premium text-gold-premium' : 'border-white/10 text-white/40'
        }`}>
          {isOpen ? <Minus size={10} /> : <Plus size={10} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-6 md:px-6 md:pb-8 pt-1 text-sand-muted text-xs md:text-sm leading-relaxed font-display font-medium">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ContactCaptureProps {
  website: string;
  setWebsite: (val: string) => void;
}

export const ContactCapture: React.FC<ContactCaptureProps> = ({ website, setWebsite }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  // Accordion states
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = [
    {
      title: lang === 'ru' ? "1. Основы GEO и принципы ИИ-поиска" : lang === 'vi' ? "1. Nguyên lý cơ bản về GEO & Tìm kiếm AI" : "1. GEO Basics & AI Search Principles",
      items: t.faq.list.slice(0, 13)
    },
    {
      title: lang === 'ru' ? "2. Технические настройки и Schema-разметка" : lang === 'vi' ? "2. Cấu hình Kỹ thuật & Định dạng Schema" : "2. Technical Settings & Schema Markups",
      items: t.faq.list.slice(13, 28)
    },
    {
      title: lang === 'ru' ? "3. Авторитет бренда, ИИ-репутация и Карты" : lang === 'vi' ? "3. Uy tín thương hiệu, Danh tiếng AI & Bản đồ" : "3. Brand Authority, AI Reputation & Maps",
      items: t.faq.list.slice(28, 40)
    }
  ];

  // Form submission states
  const [auditStatus, setAuditStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [magnetStatus, setMagnetStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuditStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const contact = (formData.get('contact') as string) || '';
    const websiteForm = website;

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
        setAuditStatus("success");
        form.reset();
        
        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = '/geo/thank-you';
        }, 600);
      } else {
        setAuditStatus("error");
      }
    } catch (error) {
      setAuditStatus("error");
    }
  };

  const handleMagnetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMagnetStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const contact = (formData.get('contact_magnet') as string) || '';

    try {
      await Promise.allSettled([
        fetch("https://formsubmit.co/ajax/0451611@gmail.com", {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: formData
        }),
        fetch("/api/geo-lead", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'magnet',
            email: contact.includes('@') ? contact : undefined,
            contact,
            lang,
            source: 'pdf-magnet',
          }),
        })
      ]);

      setMagnetStatus("success");
      form.reset();
      
      // Auto open pdf magnet route
      if (typeof window !== 'undefined') {
        window.open('/geo/report', '_blank');
      }
    } catch (error) {
      setMagnetStatus("error");
    }
  };

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="contact">
      
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-premium/[0.02] filter blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ==================== FAQ Accordion Section ==================== */}
        <div className="max-w-3xl mx-auto mb-28">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-4">
              {t.faq.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-premium mx-auto" />
          </div>

          <div className="flex flex-col gap-6">
            {categories.map((cat, catIdx) => {
              const isCatOpen = openCategory === catIdx;
              return (
                <div key={catIdx} className="border border-gold-premium/15 rounded-2xl bg-[#12100e]/40 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
                  <button
                    onClick={() => setOpenCategory(prev => prev === catIdx ? null : catIdx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none bg-black/20 hover:bg-black/35 transition-colors duration-300"
                  >
                    <span className="font-display font-black text-xs md:text-sm text-gold-premium uppercase tracking-wider">
                      {cat.title}
                    </span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                      isCatOpen ? 'border-gold-premium text-gold-premium rotate-180' : 'border-white/10 text-white/40'
                    }`}>
                      <ChevronDown size={12} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isCatOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 md:p-6 flex flex-col gap-4 border-t border-gold-premium/10 bg-black/10">
                          {cat.items.map((item, faqIdx) => {
                            const faqKey = `${catIdx}-${faqIdx}`;
                            const isFaqOpen = openFaq === faqKey;
                            return (
                              <FaqItem
                                key={faqIdx}
                                q={item.q}
                                a={item.a}
                                isOpen={isFaqOpen}
                                onToggle={() => setOpenFaq(prev => prev === faqKey ? null : faqKey)}
                              />
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== Double Funnel Lead Capture Forms ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12" id="audit-form">
          
          {/* Left Column: Express Audit Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#12100e]/80 border border-gold-premium/15 p-8 md:p-10 rounded-3xl shadow-gold-glow flex flex-col justify-between relative group"
          >
            {/* Glowing Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-premium/30 rounded-tl-3xl group-hover:border-gold-premium transition-all duration-300 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-premium/30 rounded-br-3xl group-hover:border-gold-premium transition-all duration-300 pointer-events-none" />

            <div className="w-full">
              <span className="font-mono text-[7px] text-gold-premium/50 uppercase tracking-widest block mb-2">
                GEO AUDIT FUNNEL // LEVEL_01
              </span>
              
              <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4">
                {t.contact.title}
              </h3>
              
              <p className="text-sand-muted text-xs md:text-sm leading-relaxed mb-8">
                {t.contact.subtitle}
              </p>

              <form onSubmit={handleAuditSubmit} className="flex flex-col gap-5">
                
                {/* Subject and Honey */}
                <input type="hidden" name="_subject" value="BanzAI Marketing GEO - Audit Request" />
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                  placeholder={`${t.contact.form.name.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : lang === 'vi' ? '(TÙY CHỌN)' : '(OPTIONAL)'}`}
                />

                {/* Contact */}
                <input
                  type="text"
                  name="contact"
                  required
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                  placeholder={t.contact.form.contact.toUpperCase()}
                />

                {/* Website */}
                <div className="relative">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl pl-4 pr-10 py-4 text-xs md:text-sm text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
                    placeholder={`${t.contact.form.website.toUpperCase()} ${lang === 'ru' ? '(НЕОБЯЗАТЕЛЬНО)' : lang === 'vi' ? '(TÙY CHỌN)' : '(OPTIONAL)'}`}
                  />
                  {website && (
                    <button
                      type="button"
                      onClick={() => setWebsite('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sand-muted/40 hover:text-white transition-colors cursor-pointer"
                      title="Clear website"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Submit Audit CTA */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={auditStatus === "loading" || auditStatus === "success"}
                  className="w-full group mt-2 px-6 py-4.5 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark text-black font-display font-black text-xs md:text-sm rounded-xl uppercase tracking-widest shadow-gold-glow hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-display font-black text-xs md:text-sm text-black tracking-widest uppercase flex items-center justify-center gap-2">
                    {auditStatus === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.form.loading}</span>
                      </>
                    ) : auditStatus === "success" ? (
                      <>
                        <CheckCircle size={14} />
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

            {/* Footnote */}
            <div className="mt-6 flex flex-col gap-2 relative z-20">
              {auditStatus === "success" && (
                <p className="text-emerald-400 font-mono text-[9px] text-center uppercase tracking-widest animate-pulse">
                  {t.contact.form.success}
                </p>
              )}
              {auditStatus === "error" && (
                <p className="text-red-500 font-mono text-[9px] text-center uppercase tracking-widest">
                  {t.contact.form.error}
                </p>
              )}
              <p className="text-[9px] md:text-[10px] font-mono text-sand-muted/50 text-center tracking-wide italic">
                {t.contact.form.footnote}
              </p>
            </div>
          </motion.div>

          {/* Right Column: PDF Lead Magnet Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#1c1813] to-[#12100e] border border-gold-premium/15 p-8 md:p-10 rounded-3xl flex flex-col justify-between relative group/magnet shadow-lg"
          >
            {/* Top document strip style */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold-premium to-gold-dark rounded-t-3xl" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 text-[8px] font-mono border border-gold-premium/30 px-2.5 py-1 rounded-full text-gold-light bg-gold-dark/10 tracking-widest uppercase font-bold mb-8">
                <FileText size={10} />
                <span>FREE PDF RESOURCE</span>
              </div>

              <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black text-white uppercase tracking-tight mb-4 leading-tight">
                {t.contact.magnetTitle}
              </h3>
              
              <p className="text-sand-muted text-xs md:text-sm leading-relaxed mb-6">
                {t.contact.magnetDesc}
              </p>

              {/* Graphical Book Cover */}
              <div className="w-full aspect-[4/3] bg-black/50 rounded-2xl border border-gold-premium/5 p-4 flex flex-col justify-between mb-8 shadow-inner relative overflow-hidden group-hover/magnet:border-gold-premium/15 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/5 rounded-full filter blur-xl pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[7px] text-gold-premium/50 uppercase tracking-widest">
                    REPORT B-GEO // 2026
                  </span>
                  <HelpCircle size={14} className="text-gold-premium/30" />
                </div>
                
                <div>
                  <h4 className="font-display font-black text-xs md:text-sm text-gold-light tracking-wide leading-tight mb-1">
                    {lang === 'ru' ? "КАК ИИ РАЗРУШАЕТ" : lang === 'vi' ? "CÁCH AI PHÁ HỦY" : "HOW AI DESTROYS"}
                    <br />
                    {lang === 'ru' ? "КЛАССИЧЕСКИЕ ВОРОНКИ" : lang === 'vi' ? "PHỄU BÁN HÀNG" : "CLASSIC FUNNELS"}
                  </h4>
                  <div className="w-8 h-0.5 bg-gold-premium rounded" />
                </div>
                
                <div className="flex justify-between items-center text-[7px] font-mono text-sand-muted/50">
                  <span>SIZE: 9.4 MB</span>
                  <span>FORMAT: VECTOR PDF</span>
                </div>
              </div>
            </div>

            {/* PDF Form */}
            <form onSubmit={handleMagnetSubmit} className="flex flex-col gap-4">
              
              <input type="hidden" name="_subject" value="BanzAI Marketing GEO - PDF Download" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="relative">
                <input
                  type="text"
                  name="contact_magnet"
                  required
                  className="w-full bg-black/60 border border-gold-premium/15 focus:border-gold-premium rounded-xl px-4 py-4 text-xs text-white placeholder-sand-muted/30 focus:outline-none focus:ring-1 focus:ring-gold-premium/45 transition-all font-mono"
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
              <p className="text-emerald-400 font-mono text-[9px] text-center uppercase tracking-widest animate-pulse mt-4">
                {t.contact.magnet.success}
              </p>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactCapture;
