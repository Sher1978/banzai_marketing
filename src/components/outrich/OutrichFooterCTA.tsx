"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Zap, Mail, Phone, MapPin, Send } from 'lucide-react';

export const OutrichFooterCTA: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        try {
            await fetch('/api/outrich-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    contact,
                    business: message || 'Не указано',
                    source: 'OutRich Footer CTA'
                })
            });
        } catch (err) {
            console.error('Lead dispatch error:', err);
        }
    };

    return (
        <footer className="relative bg-[#050507] border-t-2 border-[#ffe600]/40 overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

            {/* Main CTA Container */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10 space-y-16">
                <div className="bg-[#0a0a0d] border-2 border-[#ffe600] rounded-3xl p-6 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(255,230,0,0.25)] relative overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
                    {/* Glowing background accent */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ffe600]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Left Column: Offer & Bio Callout */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 neon-yellow-badge text-[10px] animate-pulse">
                            <Zap size={14} className="fill-black" />
                            <span>{isRu ? '🔥 СРОЧНО: ОСТАЛОСЬ 3 МЕСТА НА ЭТУ НЕДЕЛЮ' : '🔥 URGENT: ONLY 3 SLOTS LEFT THIS WEEK'}</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                            {isRu ? (
                                <>
                                    Перестаньте платить за каждый клик. <br />
                                    <span className="text-[#ffe600] text-glow-yellow">Настройте перехват людей.</span>
                                </>
                            ) : (
                                <>
                                    Stop paying per click. <br />
                                    <span className="text-[#ffe600] text-glow-yellow">Setup your client interception system.</span>
                                </>
                            )}
                        </h2>

                        <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                            {isRu
                                ? 'Запишитесь на бесплатный разбор вашего бизнеса лично с Игорем Шерлоком. Мы найдем переплаты за рекламу и покажем готовый план привлечения клиентов.'
                                : 'Book a free business analysis directly with Igor Sherlock. We will locate ad budget leaks and present a clear client acquisition strategy.'}
                        </p>

                        <div className="bg-[#ffe600]/10 border-l-4 border-[#ffe600] p-3 rounded-r-xl text-xs md:text-sm text-[#ffe600] font-mono font-bold">
                            {isRu
                                ? '⚡ Действуйте прямо сейчас: Разборы проводятся лично основателем в порядке очереди.'
                                : '⚡ Act immediately: Audits are conducted personally by founder on first-come basis.'}
                        </div>

                        <div className="space-y-3 pt-2 text-xs font-mono text-white/70">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-[#ffe600]" />
                                <span>{isRu ? 'Личный разбор с основателем Игорем Шерлоком' : 'Personal session with founder Igor Sherlock'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-[#ffe600]" />
                                <span>{isRu ? 'Без рекламной воды — только факты и математика бизнеса' : 'No ad fluff — strictly business facts and numbers'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="lg:col-span-6 bg-[#121218] border border-white/10 p-6 sm:p-8 rounded-2xl">
                        {formSubmitted ? (
                            <div className="text-center py-10 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-[#ffe600] text-black font-black flex items-center justify-center mx-auto text-2xl shadow-[0_0_30px_rgba(255,230,0,0.5)]">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase">
                                    {isRu ? 'ЗАЯВКА ПРИНЯТА!' : 'APPLICATION RECEIVED!'}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {isRu
                                        ? 'Игорь Шерлок свяжется с вами в Telegram или по указанному контакту в течение 15 минут.'
                                        : 'Igor Sherlock will contact you via Telegram or provided channel within 15 minutes.'}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-white/60 uppercase">
                                        {isRu ? 'Ваше имя' : 'Your Name'}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={isRu ? 'Игорь Шерлок' : 'John Doe'}
                                        className="w-full bg-[#181820] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffe600] outline-none"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-white/60 uppercase">
                                        {isRu ? 'Telegram или WhatsApp / Телефон' : 'Telegram handle / Phone'}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder="@username или +971..."
                                        className="w-full bg-[#181820] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffe600] outline-none"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-white/60 uppercase">
                                        {isRu ? 'Ссылка на ваш сайт или направление (необязательно)' : 'Website link or domain (optional)'}
                                    </label>
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder={isRu ? 'mysite.com (необязательно)' : 'mysite.com (optional)'}
                                        className="w-full bg-[#181820] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ffe600] outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#ffe600] hover:bg-[#ffff00] text-black font-bold text-sm py-4 rounded-xl uppercase tracking-wider shadow-[0_0_25px_rgba(255,230,0,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer mt-2"
                                >
                                    <span>{isRu ? 'Оставить заявку на разбор' : 'Book Free Analysis'}</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Footer Sub-Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">OutRich.Dubai agency</span>
                        <span>© 2026. All rights reserved.</span>
                        <span className="text-[#ffe600] font-bold ml-2">(Formerly Banzai Marketing)</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[#ffe600]" />
                            Dubai Marina / Business Bay, Dubai, UAE
                        </span>
                        <a
                            href="https://sherlock-cars-dubai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ffe600] transition-colors"
                        >
                            Sherlock Cars Dubai
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default OutrichFooterCTA;
