"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import "@/lib/i18n";

interface WorkItem {
    url: string;
    image: string;
    title: string;
    badge: string;
    descRu: string;
    descEn: string;
}

const works: WorkItem[] = [
    {
        url: "https://shershadowcapital.online",
        image: "/assets/sher_shadow_capital.png",
        title: "Sher Shadow Capital",
        badge: "BUSINESS CONSULTING",
        descRu: "Премиальный консалтинг и Теневой Аудит (SFI) для топ-лидеров. Разблокировка когнитивных барьеров и вывод личной и бизнес-эффективности на максимум.",
        descEn: "Elite consulting and Shadow Friction Index (SFI) audit for top leaders. Unlocking cognitive barriers and maximizing personal and business efficiency."
    },
    {
        url: "https://www.friendlycode.fun/",
        image: "/assets/friendly_code.png",
        title: "REVOO B2C App",
        badge: "LOYALTY / WEB APP",
        descRu: "Клиентское веб-приложение лояльности REVOO для ресторанов и заведений. Интерактивная «стеклянная батарейка» с динамическим кэшбеком от 5% до 20%.",
        descEn: "Client-facing web application for the REVOO loyalty ecosystem. Features an interactive 'glass battery' showing dynamic cashback from 5% to 20%."
    },
    {
        url: "https://paybio.top/",
        image: "/assets/paybio.png",
        title: "PayBio",
        badge: "TELEGRAM SAAS",
        descRu: "Платформа для запуска автоматических Telegram-магазинов за 60 секунд. Продажа гайдов, курсов и слотов на консультации в один клик прямо внутри мессенджера.",
        descEn: "Telegram Mini App platform to launch automated digital stores in 60 seconds. Sell guides, courses, and booking slots directly inside Telegram in 1 click."
    },
    {
        url: "https://revoo.win/business",
        image: "/assets/revoo_business.png",
        title: "REVOO Business",
        badge: "REPUTATION / B2B SAAS",
        descRu: "B2B SaaS-платформа программы лояльности для ресторанов. Автоматическое удержание клиентов за счет когнитивной геймификации и буст оценок на Google Maps.",
        descEn: "B2B SaaS loyalty platform for restaurants and venues. Automates customer retention via behavioral gamification and boosts ratings on Google Maps."
    },
    {
        url: "https://www.virale.uno/",
        image: "/assets/virale.png",
        title: "Viral Engine",
        badge: "AI VIDEO ENGINE",
        descRu: "Инженерный ИИ-сервис для генерации вирусных Reels и Shorts за 10 минут. Автоматическое написание сценариев в стиле автора и интеллектуальный видеомонтаж.",
        descEn: "AI-powered production engine for viral Reels and Shorts in 10 minutes. Features personalized voice matching (Digital DNA) and automated video editing."
    },
    {
        url: "https://project-wbfhb.vercel.app/",
        image: "/assets/healthcare_net.png",
        title: "Healthcare Net",
        badge: "MEDICAL / B2B CATALOG",
        descRu: "Интерактивный B2B-каталог медицинского и эстетического оборудования премиум-класса для клиник в Дубае. Подбор систем и генерация коммерческих предложений.",
        descEn: "Interactive B2B catalog of premium medical and aesthetic equipment for clinics in Dubai. Platform matching and automated commercial proposals."
    },
    {
        url: "https://keep-r-www.vercel.app/",
        image: "/assets/keep_r.png",
        title: "KeepR",
        badge: "ASSET DIGITAL PASSPORT",
        descRu: "Экосистема цифровых паспортов для суперкаров и премиальных активов в Дубае. Криптографический аудит истории обслуживания и фиксация рыночной наценки.",
        descEn: "Digital passport ecosystem for supercars and premium assets in Dubai. Cryptographically secure service history audits and market premium logging."
    }
];

const WorksSection: React.FC = () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    return (
        <section className="relative py-32 px-6 bg-dubai-night border-y border-white/5 overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                    <div className="space-y-4">
                        <span className="text-xs font-mono tracking-[0.4em] text-primary uppercase block">
                            {isRu ? "ПОРТФОЛИО // НАШИ КЕЙСЫ" : "PORTFOLIO // CASES"}
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                        >
                            {isRu ? "Наши Работы" : "Our Works"}
                        </motion.h2>
                    </div>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/30 to-transparent hidden md:block mb-4" />
                </div>
            </div>

            {/* Infinite Horizontal Auto-Scrolling Marquee Slider */}
            <div className="w-full relative z-10 overflow-hidden py-4 select-none">
                {/* Left and Right Fade Overlays */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dubai-night via-dubai-night/85 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dubai-night via-dubai-night/85 to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee-custom flex gap-8 md:gap-12 w-max px-6">
                    {/* Double the array for seamless infinite looping */}
                    {[...works, ...works].map((work, idx) => (
                        <a
                            key={idx}
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col space-y-6 flex-shrink-0 w-[300px] md:w-[480px] block"
                        >
                            {/* Large Card Mockup */}
                            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black/40 sharp-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                                {/* Image Wrapper */}
                                <div className="w-full h-full relative overflow-hidden">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        priority={idx < 4}
                                    />
                                    {/* Glassmorphic Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>

                                {/* External Link Icon / Badge Overlay */}
                                <div className="absolute top-6 right-6 flex items-center space-x-3 z-20">
                                    <span className="text-[10px] font-mono tracking-wider bg-black/80 text-white/90 border border-white/10 px-3 py-1 uppercase backdrop-blur-md">
                                        {work.badge}
                                    </span>
                                    <div className="w-8 h-8 rounded-none border border-white/20 bg-black/80 flex items-center justify-center text-white transition-all duration-300 group-hover:border-primary group-hover:text-primary backdrop-blur-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Glow Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Card Details */}
                            <div className="space-y-3 px-2">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                                        {work.title}
                                    </h3>
                                    <span className="text-xs text-white/40 font-mono tracking-tighter">
                                        {work.url.replace("https://", "").replace("www.", "").split('/')[0]}
                                    </span>
                                </div>
                                <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {isRu ? work.descRu : work.descEn}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Custom inline style for marquee animations */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-custom {
                    animation: marquee 55s linear infinite;
                }
                .animate-marquee-custom:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default WorksSection;
