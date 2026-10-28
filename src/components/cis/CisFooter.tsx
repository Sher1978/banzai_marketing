"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function CisFooter() {
  return (
    <footer className="w-full bg-[#080d12] border-t border-[#29323c] py-12 text-[#7e8994] text-[11px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1c242d]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-[#ffe500] grid place-items-center rotate-45">
              <span className="-rotate-45 font-black text-[11px] text-[#ffe500]">M</span>
            </div>
            <div>
              <span className="font-extrabold text-white text-[13px] tracking-wider uppercase block">
                MIND AMBUSH
              </span>
              <span className="text-[9px] tracking-widest text-[#78848f] uppercase">
                STRATEGY · MARKETING · GROWTH · BY OUTRICH AGENCY
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-[11px] text-[#a7b0ba]">
            <a href="#services" className="hover:text-[#ffe500] transition-colors">Услуги</a>
            <a href="#problem" className="hover:text-[#ffe500] transition-colors">Возможности</a>
            <a href="#process" className="hover:text-[#ffe500] transition-colors">Как работаем</a>
            <a href="#cases" className="hover:text-[#ffe500] transition-colors">Кейсы</a>
            <a href="#pricing" className="hover:text-[#ffe500] transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-[#ffe500] transition-colors">FAQ</a>
            <a href="#audit" className="hover:text-[#ffe500] transition-colors">Аудит</a>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c1c8d0] hover:text-[#ffe500] transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} MIND AMBUSH & OutRich Agency. Все права защищены.
          </div>
          <div className="text-[10px] text-[#606b76]">
            География клиентов: Казахстан (Астана, Алматы) · Россия · Узбекистан (Ташкент) · Кыргызстан · ОАЭ (Дубай)
          </div>
        </div>

      </div>
    </footer>
  );
}
