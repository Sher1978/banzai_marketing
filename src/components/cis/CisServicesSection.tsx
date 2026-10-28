"use client";

import React from 'react';
import { ArrowUpRight, Check, Laptop, Smartphone, MapPin, Layers } from 'lucide-react';
import { CIS_SERVICES } from './data';

interface CisServicesSectionProps {
  onOpenAudit: (serviceName?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'web-development': <Laptop className="w-6 h-6 text-[#ffe500]" />,
  'maps-pack': <MapPin className="w-6 h-6 text-[#ffe500]" />,
  'web-apps': <Smartphone className="w-6 h-6 text-[#ffe500]" />,
  'complex-growth': <Layers className="w-6 h-6 text-[#ffe500]" />
};

export default function CisServicesSection({ onOpenAudit }: CisServicesSectionProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0b1117] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Section Head */}
        <div className="max-w-[760px] mb-14">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
            <span className="w-5 h-[2px] bg-[#ffe500]" />
            <span>УСЛУГИ АГЕНТСТВА ДЛЯ РЫНКА СНГ</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-extrabold tracking-[-0.04em] text-white mb-4">
            Всё, чтобы ваш бизнес <br />
            <span className="text-[#ffe500]">выбирали первым.</span>
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed">
            От упаковки гео-профилей на картах до разработки сложных веб-приложений и продающих сайтов с конверсией в реальные продажи.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CIS_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`relative bg-[#10171f] border p-8 rounded-[3px] flex flex-col justify-between transition-all duration-300 group hover:border-[#ffe500]/50 ${
                srv.popular ? 'border-[#ffe500]/30 shadow-[0_0_30px_rgba(255,229,0,0.06)]' : 'border-[#29323c]'
              }`}
            >
              {srv.popular && (
                <div className="absolute top-4 right-4 bg-[#ffe500] text-[#111820] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[2px]">
                  Популярно
                </div>
              )}

              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-[#151e27] border border-[#2e3945] rounded-[3px] group-hover:scale-105 transition-transform">
                    {SERVICE_ICONS[srv.id] || <Laptop className="w-6 h-6 text-[#ffe500]" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase text-[#ffe500]">
                      {srv.badge}
                    </span>
                    <h3 className="text-[21px] font-bold text-white group-hover:text-[#ffe500] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[13px] text-[#a7b0ba] leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="mb-6">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-3">
                    Что входит в результат:
                  </span>
                  <ul className="space-y-2">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[12px] text-[#c1c8d0] leading-snug">
                        <Check className="w-4 h-4 text-[#ffe500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#29323c]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#8e9aa5]">
                  <div><strong className="text-white">Срок запуска:</strong> {srv.timeline}</div>
                </div>

                <button
                  onClick={() => onOpenAudit(srv.title)}
                  className="inline-flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-[2px] bg-[#151e27] text-white border border-[#3b4754] hover:bg-[#ffe500] hover:text-[#111820] hover:border-[#ffe500] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Заказать разбор</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
