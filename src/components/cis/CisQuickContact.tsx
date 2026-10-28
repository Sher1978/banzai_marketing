"use client";

import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';

interface CisQuickContactProps {
  onOpenAudit: () => void;
}

export default function CisQuickContact({ onOpenAudit }: CisQuickContactProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open ? (
        <div className="bg-[#111820] border border-[#3b4754] p-4 rounded-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.8)] text-white w-[260px] animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#252f3a] mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffe500]">
              Связь с агентством
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#8896a4] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href="https://t.me/sher_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-[2px] bg-[#17222e] hover:bg-[#1f2d3d] text-white text-[12px] font-medium transition-colors"
            >
              <Send className="w-4 h-4 text-[#2ea5ff]" />
              <span>Написать в Telegram</span>
            </a>

            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-[2px] bg-[#17222e] hover:bg-[#1f2d3d] text-white text-[12px] font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>Написать в WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-1.5 p-2.5 rounded-[2px] bg-[#ffe500] text-[#111820] text-[11px] font-black uppercase tracking-wider hover:bg-[#ffea2e] transition-colors mt-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Заказать экспресс-аудит</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-13 h-13 rounded-full bg-[#ffe500] text-[#111820] grid place-items-center shadow-[0_6px_25px_rgba(255,229,0,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-[#111820]"
          aria-label="Связаться"
        >
          <MessageCircle className="w-6 h-6 text-[#111820]" />
        </button>
      )}
    </div>
  );
}
