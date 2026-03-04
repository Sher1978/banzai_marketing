"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";
import Image from 'next/image';

/**
 * FounderSection with HUD-style storytelling and Identity Unlock interaction.
 */
const FounderSection: React.FC = () => {
    const { t } = useTranslation();
    const bullets = t('founder.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    // State to track if the identity has been revealed
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <section className="relative py-32 px-6 bg-dubai-night border-y border-primary/20 overflow-hidden">
            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Founder Visual Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    onViewportEnter={() => {
                        // Delay unlock slightly to let the user scroll it into fuller view
                        setTimeout(() => setIsUnlocked(true), 600);
                    }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="relative aspect-square max-w-sm md:max-w-md mx-auto lg:mx-0 order-2 lg:order-1 cursor-pointer group"
                    onClick={() => setIsUnlocked(true)}
                >
                    {/* Ring Glow Background */}
                    <motion.div
                        className={`absolute inset-[-10%] rounded-full blur-3xl transition-colors duration-1000 ${isUnlocked ? 'bg-[#FFD700]/10' : 'bg-primary/20'}`}
                    />

                    {/* Circular Mask for Image */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 z-10 bg-black">
                        <motion.div
                            className="w-full h-full relative"
                            animate={isUnlocked ? "unlocked" : "locked"}
                            variants={{
                                locked: {
                                    filter: "grayscale(100%) contrast(150%) brightness(0.5)",
                                    scale: 1
                                },
                                unlocked: {
                                    filter: [
                                        "grayscale(100%) contrast(150%) brightness(0.5)",
                                        "grayscale(0%) contrast(250%) brightness(1.5) hue-rotate(90deg)",
                                        "grayscale(100%) contrast(250%) brightness(1.5) hue-rotate(-90deg)",
                                        "grayscale(0%) contrast(100%) brightness(1) hue-rotate(0deg)"
                                    ],
                                    scale: [1, 1.15, 0.9, 1.05, 1],
                                    x: [0, 15, -15, 5, 0],
                                    y: [0, -10, 10, -5, 0],
                                    transition: { duration: 0.45, ease: "anticipate" }
                                }
                            }}
                        >
                            <Image
                                src="/assets/sher-profile.jpg"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Glassmorphism Locked Override (Glitch Out) */}
                        <motion.div
                            animate={isUnlocked ? "unlocked" : "locked"}
                            variants={{
                                locked: { opacity: 1, x: 0, scale: 1 },
                                unlocked: {
                                    opacity: [1, 0.8, 1, 0, 0.8, 0],
                                    x: [0, -25, 25, -10, 15, 0],
                                    scale: [1, 1.1, 0.8, 1.2, 1],
                                    filter: [
                                        "hue-rotate(0deg)",
                                        "hue-rotate(90deg) blur(4px)",
                                        "hue-rotate(-90deg) blur(0px)",
                                        "hue-rotate(0deg)"
                                    ],
                                    transition: { duration: 0.5, ease: "linear" }
                                }
                            }}
                            className="absolute inset-0 bg-white/10 backdrop-blur-xl flex items-center justify-center z-20 pointer-events-none"
                        >
                            <h3 className="text-xl md:text-3xl font-black text-white text-glow shadow-cyan text-center px-4">
                                {t('founder.locked_hud')}
                            </h3>
                        </motion.div>
                    </div>

                    {/* HUD Rotating Rings */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            borderColor: isUnlocked ? "rgba(255, 215, 0, 0.4)" : "rgba(6, 182, 212, 0.4)",
                            boxShadow: isUnlocked ? "0 0 20px rgba(255, 215, 0, 0.2)" : "0 0 20px rgba(6, 182, 212, 0.2)"
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            borderColor: { duration: 1 },
                            boxShadow: { duration: 1 }
                        }}
                        className="absolute -inset-4 md:-inset-6 border-2 border-dashed rounded-full pointer-events-none z-30 opacity-70"
                    />

                    <motion.div
                        animate={{
                            rotate: -360,
                            borderColor: isUnlocked ? "rgba(255, 215, 0, 0.2)" : "rgba(168, 85, 247, 0.3)"
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            borderColor: { duration: 1 }
                        }}
                        className="absolute -inset-8 md:-inset-12 border border-dotted rounded-full pointer-events-none z-10"
                    />

                    {/* Bottom HUD Text (Glitch/Status effect) */}
                    <div className="absolute -bottom-8 md:-bottom-12 left-1/2 w-max max-w-full -translate-x-1/2 flex flex-col items-center">
                        <motion.div
                            key={isUnlocked ? 'unlocked' : 'locked'}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] px-4 py-1 border-l-2 ${isUnlocked ? 'text-[#FFD700] border-[#FFD700] bg-[#FFD700]/10 text-glow-gold' : 'text-primary border-primary bg-primary/10'}`}
                        >
                            {isUnlocked ? t('founder.unlocked_status') : t('founder.locked_status')}
                        </motion.div>
                    </div>

                    {/* Decorative Corner Markers (Abstract) */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none z-40" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none z-40" />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-10 order-1 lg:order-2 z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                    >
                        {t('founder.title')}
                    </motion.h2>

                    <div className="space-y-10">
                        {bullets.map((bullet, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`w-12 h-[1px] transition-all duration-1000 ${isUnlocked ? 'bg-[#FFD700] w-16' : 'bg-primary group-hover:w-16'}`} />
                                    <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                                        {bullet.bold}
                                    </p>
                                </div>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider pl-16">
                                    {bullet.subtext}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Proof HUD Marker */}
                    <div className="mt-8 pt-8 border-t border-white/5 flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-primary font-mono uppercase">Verified_Experience</span>
                            <span className="text-xl font-bold text-white">10+ YRS</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-secondary font-mono uppercase">Market_Presence</span>
                            <span className="text-xl font-bold text-white">UAE / GLOBAL</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderSection;
