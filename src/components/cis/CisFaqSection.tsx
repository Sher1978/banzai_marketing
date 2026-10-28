"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { CIS_FAQS } from './data';

export default function CisFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#080d12] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="max-w-[720px] mb-12">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
            <span className="w-5 h-[2px] bg-[#ffe500]" />
            <span>ОТВЕТЫ НА ВОПРОСЫ</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
            Всё, что важно знать <br />
            <span className="text-[#ffe500]">до старта проекта.</span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
            Честно и прозрачно о процессах, окупаемости и результатах работы.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-[850px] space-y-3">
          {CIS_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#10171f] border border-[#29323c] rounded-[3px] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#ffe500] transition-colors cursor-pointer"
                >
                  <span className="text-[15px] sm:text-[16px] font-bold leading-snug">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded bg-[#16202b] text-[#ffe500] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[13px] sm:text-[14px] text-[#a7b0ba] leading-relaxed border-t border-[#232c37]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
