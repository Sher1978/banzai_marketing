"use client";

import React from 'react';

export default function CisProofStrip() {
  return (
    <div className="w-full border-y border-[#29323c] bg-[#0c1218] py-6">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          
          <div className="flex items-center gap-3.5">
            <b className="text-[26px] font-black text-[#ffe500] leading-none shrink-0">01</b>
            <span className="text-[13px] font-medium text-[#d1d6db] leading-snug">
              Сайт отвечает на ключевые вопросы и снимает страхи до звонка
            </span>
          </div>

          <div className="flex items-center gap-3.5 md:border-l border-[#29323c] md:pl-8">
            <b className="text-[26px] font-black text-[#ffe500] leading-none shrink-0">02</b>
            <span className="text-[13px] font-medium text-[#d1d6db] leading-snug">
              Поисковая оптимизация и карты приводят клиентов без оплаты за клик
            </span>
          </div>

          <div className="flex items-center gap-3.5 md:border-l border-[#29323c] md:pl-8">
            <b className="text-[26px] font-black text-[#ffe500] leading-none shrink-0">03</b>
            <span className="text-[13px] font-medium text-[#d1d6db] leading-snug">
              Сквозная аналитика показывает, какие услуги реально приносят чистую прибыль
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
