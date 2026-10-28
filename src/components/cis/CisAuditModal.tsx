"use client";

import React, { useState } from 'react';
import { X, ArrowUpRight, Check, Loader2, Sparkles } from 'lucide-react';

interface CisAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function CisAuditModal({ isOpen, onClose, preselectedService }: CisAuditModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [business, setBusiness] = useState('');
  const [service, setService] = useState(preselectedService || 'Разбор бизнеса и потенциала карт/сайта');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/outrich-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          business: `${business} | Направление: ${service}`,
          source: 'MIND AMBUSH Quick Modal'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] bg-[#111820] border border-[#3c4650] p-7 sm:p-8 rounded-[3px] shadow-[0_24px_70px_rgba(0,0,0,0.9)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8896a4] hover:text-white p-1"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-2">
          <span>БЕЗ ОБЯЗАТЕЛЬСТВ</span>
        </div>

        <h2 className="text-[26px] font-extrabold leading-tight mb-2 text-white">
          Найдём точки роста
        </h2>

        <p className="text-[13px] text-[#a7b0ba] mb-6 leading-relaxed">
          Заполните короткую форму. Мы проанализируем карточку компании, конкурентов и свяжемся с вами в течение 24 часов.
        </p>

        {submitted ? (
          <div className="p-6 bg-[#172d25] border border-[#315b47] rounded-[2px] text-center">
            <div className="w-10 h-10 rounded-full bg-[#8ee6b2]/10 border border-[#8ee6b2]/30 text-[#8ee6b2] grid place-items-center mx-auto mb-2">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-[17px] font-bold text-white mb-1">
              Заявка отправлена!
            </h4>
            <p className="text-[12px] text-[#8ee6b2] mb-4">
              Мы начали подготовку экспресс-аудита и скоро свяжемся с вами.
            </p>
            <button
              onClick={onClose}
              className="text-[11px] font-bold text-white uppercase px-4 py-2 bg-[#1b2823] border border-[#315b47] rounded"
            >
              Закрыть окно
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1">
                Как к вам обращаться *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="w-full px-3 py-2.5 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] focus:outline-none focus:border-[#ffe500]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1">
                Компания / город / чем занимаетесь *
              </label>
              <input
                type="text"
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Автосервис, Астана"
                className="w-full px-3 py-2.5 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] focus:outline-none focus:border-[#ffe500]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1">
                Куда прислать аудит (WhatsApp / Telegram) *
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+7 7XX XXX XX XX или @telegram"
                className="w-full px-3 py-2.5 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] focus:outline-none focus:border-[#ffe500]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 text-[12px] font-black uppercase tracking-wider py-3.5 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] transition-all cursor-pointer shadow-[0_4px_20px_rgba(255,229,0,0.25)] disabled:opacity-50 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Отправка...</span>
                </>
              ) : (
                <>
                  <span>ПОЛУЧИТЬ РАЗБОР</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
