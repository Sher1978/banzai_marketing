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

    return (
        <section className="relative py-32 px-6 bg-dubai-night border-y border-primary/20 overflow-hidden">
            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Founder Visual Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="relative aspect-square w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0 order-2 lg:order-1 group"
                >
                    {/* Ring Glow Background */}
                    <motion.div
                        className="absolute inset-[-10%] rounded-full blur-3xl transition-colors duration-1000 bg-primary/20"
                    />

                    {/* Circular Mask for Image */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 z-10 bg-black">
                        <motion.div
                            className="w-full h-full relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-20%" }}
                        >
                            <Image
                                src="/assets/sher-profile.webp"
                                alt="Founder"
                                fill
                                priority={true}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* HUD Rotating Rings */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            borderColor: "rgba(6, 182, 212, 0.4)",
                            boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)"
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
                            borderColor: "rgba(168, 85, 247, 0.3)"
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            borderColor: { duration: 1 }
                        }}
                        className="absolute -inset-8 md:-inset-12 border border-dotted rounded-full pointer-events-none z-10"
                    />

                    {/* Bottom HUD Text (Status effect) */}
                    <div className="absolute -bottom-8 md:-bottom-12 left-1/2 w-max max-w-full -translate-x-1/2 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] px-4 py-1 border-l-2 text-primary border-primary bg-primary/10"
                        >
                            {t('founder.unlocked_status')}
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
                                    <div className="w-12 h-[1px] transition-all duration-1000 bg-primary group-hover:w-16" />
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
