"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { translations } from '../translations';
import '@/lib/i18n';

export const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  const handleLanguageChange = (newLang: 'ru' | 'en') => {
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <nav className="w-full max-w-5xl bg-surface-dubai/80 backdrop-blur-xl border border-gold-premium/15 px-6 py-4 rounded-full shadow-gold-glow flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-display font-black text-sm md:text-lg tracking-[0.25em] bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark bg-clip-text text-transparent drop-shadow-sm select-none">
            {t.nav.logo}
          </span>
          <span className="text-[9px] font-mono border border-gold-premium/30 px-1.5 py-0.5 rounded text-gold-premium tracking-wider bg-gold-dark/10">
            GEO
          </span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('tech')}
            className="text-xs uppercase tracking-widest text-sand-muted hover:text-gold-light transition-colors font-medium font-display cursor-pointer"
          >
            {t.nav.tech}
          </button>
          <button
            onClick={() => scrollToSection('cases')}
            className="text-xs uppercase tracking-widest text-sand-muted hover:text-gold-light transition-colors font-medium font-display cursor-pointer"
          >
            {t.nav.cases}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xs uppercase tracking-widest text-sand-muted hover:text-gold-light transition-colors font-medium font-display cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Back button */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-widest text-sand-muted hover:text-white transition-colors uppercase"
          >
            <ArrowLeft size={12} className="text-gold-premium" />
            <span className="hidden sm:inline">{t.nav.back}</span>
          </Link>

          <span className="w-px h-4 bg-gold-premium/20" />

          {/* Language Switcher */}
          <div className="flex items-center bg-black/40 border border-gold-premium/10 rounded-full px-3 py-1.5 gap-2.5">
            <Globe size={12} className="text-gold-premium/60" />
            <button
              onClick={() => handleLanguageChange('ru')}
              className={`text-[10px] font-bold transition-all cursor-pointer hover:text-white ${lang === 'ru' ? 'text-gold-light text-glow-gold' : 'text-sand-muted/50'}`}
            >
              RU
            </button>
            <span className="text-gold-premium/20 text-[10px] select-none">|</span>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`text-[10px] font-bold transition-all cursor-pointer hover:text-white ${lang === 'en' ? 'text-gold-light text-glow-gold' : 'text-sand-muted/50'}`}
            >
              EN
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
