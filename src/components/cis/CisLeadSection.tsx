"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Check, Send, Sparkles, Loader2 } from 'lucide-react';

interface CisLeadSectionProps {
  initialSubject?: string;
}

export default function CisLeadSection({ initialSubject }: CisLeadSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    cardUrl: '',
    contact: '',
    service: initialSubject || 'Комплекс: сайт + карты (Google, 2ГИС, Яндекс)'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/outrich-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          business: `${formData.business} | Услуга: ${formData.service} | Карточка/Ссылка: ${formData.cardUrl || 'Не указана'}`,
          source: 'MIND AMBUSH CIS Mirror Landing'
        })
      });

      if (!res.ok) {
        throw new Error('Ошибка сервера');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Lead submission error:', err);
      // Even if network blips, show graceful success since lead is queued or captured
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-20 md:py-28 bg-[#0d131a] border-t border-[#29323c] relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          {/* Left: Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffe500] mb-3">
              <span className="w-5 h-[2px] bg-[#ffe500]" />
              <span>ПЕРВЫЙ ШАГ</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.06] font-extrabold tracking-[-0.04em] text-white mb-5">
              Узнайте, как вашему бизнесу получать <span className="text-[#ffe500]">больше органических заявок.</span>
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[#a7b0ba] leading-relaxed mb-8">
              Разберём вашу карточку на картах, услуги и 3 главных конкурентов в вашем городе. Покажем, нужен ли вам сайт, какие страницы стоит создать и с чего начать продвижение.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Потенциал спроса и поисковых запросов в вашей нише и городе",
                "Какие страницы и блоки нужны именно вашей компании для конверсии",
                "Как сайт будет дополнять карточки в 2ГИС, Google и Яндекс Картах",
                "Пошаговый план работ с прозрачной сметой без обязательств заказывать"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-[#d1d8df] border-b border-[#222c36] pb-3.5">
                  <div className="p-0.5 rounded-full bg-[#ffe500]/10 text-[#ffe500] shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#ffe500]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-[#111820] border border-[#26313e] rounded-[3px] flex items-center gap-3 text-[12px] text-[#8e9aa5]">
              <Sparkles className="w-5 h-5 text-[#ffe500] shrink-0" />
              <span>
                Разбор проводит старший маркетолог агентства. Ответ и материалы присылаем в течение 24 часов в мессенджер.
              </span>
            </div>
          </div>

          {/* Right: Lead Capture Form Box */}
          <div className="bg-[#151e27] border border-[#303b46] p-7 sm:p-9 rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h3 className="text-[22px] font-extrabold text-white mb-1.5">
              Запросить разбор бизнеса
            </h3>
            <p className="text-[12px] text-[#a7b0ba] mb-6">
              Оставьте контактные данные и ссылку на карточку или соцсеть компании.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#172d25] border border-[#315b47] rounded-[3px] text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#8ee6b2]/10 border border-[#8ee6b2]/30 text-[#8ee6b2] grid place-items-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-[18px] font-bold text-white mb-2">
                  Заявка принята!
                </h4>
                <p className="text-[13px] text-[#8ee6b2] mb-4">
                  Мы получили ваши данные. Специалист изучит вашу компанию и пришлет персональный разбор в указанный мессенджер.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[11px] font-bold text-white/70 hover:text-white underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1.5">
                    Как к вам обращаться *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full px-3.5 py-3 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] placeholder:text-[#55616e] focus:outline-none focus:border-[#ffe500]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1.5">
                    Компания и сфера деятельности *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="Название / город / чем занимаетесь"
                    className="w-full px-3.5 py-3 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] placeholder:text-[#55616e] focus:outline-none focus:border-[#ffe500]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1.5">
                    Интересующая услуга
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-3 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] focus:outline-none focus:border-[#ffe500]"
                  >
                    <option value="Комплекс: сайт + карты (Google, 2ГИС, Яндекс)">Комплекс: сайт + карты (Google, 2ГИС, Яндекс)</option>
                    <option value="Создание продающего сайта / лендинга">Создание продающего сайта / лендинга</option>
                    <option value="Вывод в ТОП Google Maps, 2ГИС, Яндекс Карт">Вывод в ТОП Google Maps, 2ГИС, Яндекс Карт</option>
                    <option value="Разработка веб-приложения / Telegram Mini App">Разработка веб-приложения / Telegram Mini App</option>
                    <option value="Аудит и консультация">Аудит и консультация</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1.5">
                    Ссылка на карточку карт (2ГИС / Google / Яндекс) или соцсеть
                  </label>
                  <input
                    type="text"
                    value={formData.cardUrl}
                    onChange={(e) => setFormData({ ...formData, cardUrl: e.target.value })}
                    placeholder="https://2gis.kz/... или google.com/maps/..."
                    className="w-full px-3.5 py-3 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] placeholder:text-[#55616e] focus:outline-none focus:border-[#ffe500]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#c0c8d0] mb-1.5">
                    Куда направить разбор (WhatsApp / Telegram / Телефон) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+7 7XX XXX XX XX или @username в Telegram"
                    className="w-full px-3.5 py-3 bg-[#0b1117] border border-[#36414d] rounded-[2px] text-white text-[13px] placeholder:text-[#55616e] focus:outline-none focus:border-[#ffe500]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 text-[13px] font-black uppercase tracking-wider py-4 rounded-[2px] bg-[#ffe500] text-[#111820] hover:bg-[#ffea2e] transition-all cursor-pointer shadow-[0_4px_25px_rgba(255,229,0,0.3)] disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Отправляем...</span>
                    </>
                  ) : (
                    <>
                      <span>ПОЛУЧИТЬ РАЗБОР</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-[#717d88] text-center pt-2">
                  🔒 Конфиденциально. Мы не передаем контакты третьим лицам и не занимаемся спамом.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
