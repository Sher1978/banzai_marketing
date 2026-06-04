"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../translations';
import '@/lib/i18n';

export const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLanguageChange = (newLang: 'ru' | 'en' | 'vi') => {
    i18n.changeLanguage(newLang);
    setMobileOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop / Fixed Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-header"
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:py-5">

          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-black text-sm md:text-base tracking-[0.15em] text-white uppercase group-hover:text-secondary transition-colors duration-300">
              BanzAI
            </span>
            <span className="text-secondary text-sm md:text-base font-black tracking-[0.15em] group-hover:text-white transition-colors duration-300">
              marketing
            </span>
            <span className="text-[8px] font-mono border border-secondary/40 px-1.5 py-0.5 rounded text-secondary tracking-wider bg-secondary/5 ml-1">
              GEO
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: t.nav.tech, id: 'tech' },
              { label: t.nav.cases, id: 'cases' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 group cursor-pointer"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[11px] uppercase tracking-[0.2em] text-black bg-secondary hover:bg-cyan-400 px-5 py-2 font-bold transition-all duration-300 sharp-border cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-5">
            {/* Back link */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-white/40 hover:text-secondary transition-colors uppercase group"
            >
              <ArrowLeft size={11} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>{t.nav.back}</span>
            </Link>

            <span className="w-px h-4 bg-white/10" />

            {/* Language Switcher */}
            <div className="flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 gap-2">
              <Globe size={11} className="text-secondary/60" />
              {(['ru', 'en', 'vi'] as const).map((code, i, arr) => (
                <React.Fragment key={code}>
                  <button
                    onClick={() => handleLanguageChange(code)}
                    className={`text-[10px] font-bold transition-all cursor-pointer hover:text-white ${
                      lang === code ? 'text-secondary text-glow-cyan' : 'text-white/30'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                  {i < arr.length - 1 && (
                    <span className="text-white/10 text-[10px] select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background-dark/97 backdrop-blur-xl flex flex-col pt-24 px-8 pb-12"
          >
            {/* Cyber grid overlay */}
            <div className="absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 flex-1">
              <button
                onClick={() => scrollToSection('tech')}
                className="text-left text-2xl font-black uppercase tracking-tight text-white hover:text-secondary transition-colors border-b border-white/5 pb-6"
              >
                {t.nav.tech}
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-left text-2xl font-black uppercase tracking-tight text-white hover:text-secondary transition-colors border-b border-white/5 pb-6"
              >
                {t.nav.cases}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-2xl font-black uppercase tracking-tight text-secondary"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="relative z-10 flex flex-col gap-5 mt-auto">
              {/* Language switcher */}
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-secondary/60" />
                {(['ru', 'en', 'vi'] as const).map((code, i, arr) => (
                  <React.Fragment key={code}>
                    <button
                      onClick={() => handleLanguageChange(code)}
                      className={`text-sm font-bold transition-all ${
                        lang === code ? 'text-secondary' : 'text-white/30'
                      }`}
                    >
                      {code.toUpperCase()}
                    </button>
                    {i < arr.length - 1 && (
                      <span className="text-white/10">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Back to main site */}
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/30 hover:text-white transition-colors uppercase"
              >
                <ArrowLeft size={12} />
                {t.nav.back}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
