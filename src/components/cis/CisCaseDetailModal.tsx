"use client";

import React from 'react';
import Image from 'next/image';
import { X, ExternalLink, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { CisCaseItem } from './types';

interface CisCaseDetailModalProps {
  caseItem: CisCaseItem | null;
  onClose: () => void;
  onOpenAudit: (subject?: string) => void;
}

export default function CisCaseDetailModal({ caseItem, onClose, onOpenAudit }: CisCaseDetailModalProps) {
  if (!caseItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#10171f] border border-[#3b4754] rounded-[4px] p-6 sm:p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8896a4] hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ffe500] block mb-1">
            {caseItem.label}
          </span>
          <h2 className="text-[24px] sm:text-[28px] font-extrabold leading-tight text-white">
            {caseItem.title}
          </h2>
        </div>

        {/* Image if available */}
        {caseItem.image && (
          <div className="relative w-full h-[220px] sm:h-[260px] rounded-[3px] overflow-hidden mb-6 bg-[#0a0f14] border border-[#26313d]">
            <Image
              src={caseItem.image}
              alt={caseItem.title}
              fill
              className="object-cover object-top"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-[14px] text-[#c1c8d0] leading-relaxed mb-6 font-normal">
          {caseItem.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-[#0b1016] border border-[#27323e] p-3.5 rounded-[2px]">
            <span className="text-[10px] text-[#8e9aa5] uppercase tracking-wider block mb-1">
              {caseItem.metric1.label}
            </span>
            <strong className="text-[22px] font-extrabold text-white">
              {caseItem.metric1.value}
            </strong>
          </div>

          <div className="bg-[#0b1016] border border-[#27323e] p-3.5 rounded-[2px]">
            <span className="text-[10px] text-[#8e9aa5] uppercase tracking-wider block mb-1">
              {caseItem.metric2.label}
            </span>
            <strong className="text-[22px] font-extrabold text-[#ffe500]">
              {caseItem.metric2.value}
            </strong>
          </div>

          {caseItem.metricsDetail && caseItem.metricsDetail[0] && (
            <div className="bg-[#0b1016] border border-[#27323e] p-3.5 rounded-[2px] col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#8e9aa5] uppercase tracking-wider block mb-1">
                {caseItem.metricsDetail[0].label}
              </span>
              <strong className="text-[20px] font-extrabold text-[#8ee6b2]">
                {caseItem.metricsDetail[0].value}
              </strong>
            </div>
          )}
        </div>

        {/* Highlights List */}
        <div className="mb-6">
          <h4 className="text-[12px] font-bold text-white uppercase tracking-wider mb-3">
            Выполненные работы и решения:
          </h4>
          <ul className="space-y-2.5">
            {caseItem.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#d1d8df] leading-snug">
                <CheckCircle2 className="w-4 h-4 text-[#ffe500] shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Live URL if exists */}
        {caseItem.externalUrl && (
          <div className="mb-6">
            <a
              href={caseItem.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-bold text-[#ffe500] hover:underline"
            >
              <span>Посмотреть проект вживую</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-5 border-t border-[#29323c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-[#78848f] italic">
            {caseItem.note}
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenAudit(`Кейс: ${caseItem.title}`);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[12px] font-black uppercase tracking-wider px-6 py-3.5 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] transition-all cursor-pointer whitespace-nowrap shadow-[0_4px_15px_rgba(255,229,0,0.25)]"
          >
            <span>Хочу похожий результат</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
