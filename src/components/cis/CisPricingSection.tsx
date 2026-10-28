"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Check, Zap } from 'lucide-react';
import { CIS_PRICING } from './data';

interface CisPricingSectionProps {
  onOpenAudit: (planTitle?: string) => void;
}

export default function CisPricingSection({ onOpenAudit }: CisPricingSectionProps) {
  const [currency, setCurrency] = useState<'kzt' | 'rub' | 'usd'>('kzt');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0b1117] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
              <span className="w-5 h-[2px] bg-[#ffe500]" />
              <span>ТАРИФЫ И ФОРМАТЫ СОТРУДНИЧЕСТВА</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
              Прозрачные решения <br />
              <span className="text-[#ffe500]">под задачи вашего бизнеса.</span>
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
              Без скрытых платежей и ежемесячной переплаты за клики. Вы инвестируете в создание цифрового актива компании.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 p-1 bg-[#151e27] border border-[#2e3945] rounded-[3px] self-start md:self-end">
            <button
              onClick={() => setCurrency('kzt')}
              className={`text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-[2px] transition-all cursor-pointer ${
                currency === 'kzt' ? 'bg-[#ffe500] text-[#111820]' : 'text-[#8e9aa5] hover:text-white'
              }`}
            >
              ₸ Тенге
            </button>
            <button
              onClick={() => setCurrency('rub')}
              className={`text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-[2px] transition-all cursor-pointer ${
                currency === 'rub' ? 'bg-[#ffe500] text-[#111820]' : 'text-[#8e9aa5] hover:text-white'
              }`}
            >
              ₽ Рубли
            </button>
            <button
              onClick={() => setCurrency('usd')}
              className={`text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-[2px] transition-all cursor-pointer ${
                currency === 'usd' ? 'bg-[#ffe500] text-[#111820]' : 'text-[#8e9aa5] hover:text-white'
              }`}
            >
              $ USD
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CIS_PRICING.map((plan) => {
            const displayPrice = currency === 'kzt' 
              ? plan.priceKzt 
              : currency === 'rub' 
              ? plan.priceRub 
              : plan.priceUsd;

            return (
              <div
                key={plan.id}
                className={`relative bg-[#10171f] border rounded-[3px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.recommended
                    ? 'border-[#ffe500] shadow-[0_0_40px_rgba(255,229,0,0.12)]'
                    : 'border-[#29323c] hover:border-[#ffe500]/40'
                }`}
              >
                {plan.tag && (
                  <div className={`absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px] ${
                    plan.recommended ? 'bg-[#ffe500] text-[#111820]' : 'bg-[#1e2a36] text-[#8ee6b2]'
                  }`}>
                    {plan.tag}
                  </div>
                )}

                <div>
                  <h3 className="text-[20px] font-extrabold text-white mb-2 leading-tight">
                    {plan.title}
                  </h3>
                  <p className="text-[12px] text-[#8e9aa5] min-h-[36px] mb-6">
                    {plan.subtitle}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#29323c]">
                    <div className="text-[32px] sm:text-[36px] font-black text-white leading-none">
                      {displayPrice}
                    </div>
                    <span className="text-[11px] text-[#8e9aa5] uppercase tracking-wider block mt-1.5">
                      {plan.period}
                    </span>
                  </div>

                  <div className="mb-8">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-3.5">
                      Что входит в пакет:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-[#c1c8d0] leading-snug">
                          <Check className="w-4 h-4 text-[#ffe500] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-[#78848f] mb-4 bg-[#0a0f14] p-3 rounded-[2px] border border-[#212a34]">
                    <strong className="text-white block mb-0.5">Кому подходит:</strong>
                    {plan.bestFor}
                  </div>

                  <button
                    onClick={() => onOpenAudit(`Тариф: ${plan.title}`)}
                    className={`w-full inline-flex items-center justify-center gap-2 text-[12px] font-extrabold uppercase tracking-wider py-4 rounded-[2px] transition-all cursor-pointer ${
                      plan.recommended
                        ? 'bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] shadow-[0_4px_20px_rgba(255,229,0,0.25)]'
                        : 'bg-[#151e27] text-white hover:bg-[#ffe500] hover:text-[#111820] border border-[#3b4754]'
                    }`}
                  >
                    <span>Выбрать этот тариф</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
