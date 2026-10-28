"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface CisHeaderProps {
  onOpenAudit: () => void;
}

export default function CisHeader({ onOpenAudit }: CisHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080d12]/90 backdrop-blur-md border-b border-[#29323c]/50 transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="#top" className="flex items-center gap-3 group text-white decoration-transparent">
          <div className="w-8 h-8 border-2 border-[#ffe500] grid place-items-center rotate-45 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,229,0,0.3)]">
            <span className="-rotate-45 font-black text-sm text-[#ffe500]">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[0.14em] text-sm text-white group-hover:text-[#ffe500] transition-colors uppercase">
              MIND AMBUSH
            </span>
            <span className="text-[9px] tracking-[0.22em] text-[#a7b0ba] font-semibold uppercase -mt-0.5">
              STRATEGY · MARKETING · GROWTH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[12px] font-semibold text-[#c1c8d0] tracking-wide">
          <a href="#services" className="hover:text-[#ffe500] transition-colors py-1">Услуги</a>
          <a href="#problem" className="hover:text-[#ffe500] transition-colors py-1">Возможности</a>
          <a href="#process" className="hover:text-[#ffe500] transition-colors py-1">Как работает</a>
          <a href="#cases" className="hover:text-[#ffe500] transition-colors py-1">Кейсы</a>
          <a href="#pricing" className="hover:text-[#ffe500] transition-colors py-1">Тарифы</a>
          <a href="#faq" className="hover:text-[#ffe500] transition-colors py-1">FAQ</a>
        </nav>

        {/* Header Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center justify-center gap-2 text-[12px] font-extrabold uppercase tracking-wider px-5 py-3 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(255,229,0,0.25)] active:translate-y-0 cursor-pointer"
          >
            <span>РАЗОБРАТЬ МОЙ БИЗНЕС</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#c1c8d0] hover:text-[#ffe500] focus:outline-none"
            aria-label="Переключить меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d131a] border-b border-[#29323c] px-5 py-5 flex flex-col gap-4 text-sm animate-in slide-in-from-top-2 duration-200">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Услуги агентства
          </a>
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Возможности и решение
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Как мы работаем
          </a>
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Подтверждённые кейсы
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Тарифы и пакеты
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#ffe500] font-medium py-1.5"
          >
            Частые вопросы
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-[2px] bg-[#ffe500] text-[#111820] mt-2 shadow-[0_4px_15px_rgba(255,229,0,0.3)]"
          >
            <span>РАЗОБРАТЬ МОЙ БИЗНЕС</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
