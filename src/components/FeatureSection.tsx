"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";
import { Cpu, Zap } from 'lucide-react';

/**
 * FeatureSection highlighting the Neural Conveyor.
 */
const FeatureSection: React.FC = () => {
    const { t } = useTranslation();
    const bullets = t('feature.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    return (
        <section className="relative py-32 px-6 bg-dubai-night/50 border-y border-secondary/10 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Visual Content (Neural Network Visualization) */}
                <div className="relative order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative aspect-video bg-black/40 border border-white/5 backdrop-blur-md p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 cyber-grid opacity-20" />

                        {/* Simulated Data Streams */}
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-secondary' : 'bg-primary'} animate-pulse`} />
                                    <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${Math.random() * 60 + 40}%` }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                                            className={`h-full ${i % 2 === 0 ? 'bg-secondary' : 'bg-primary'} opacity-40`}
                                        />
                                    </div>
                                    <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase">Stream_0{i}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <div className="relative">
                                <Cpu size={80} className="text-secondary opacity-20" />
                                <Zap size={40} className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                            </div>
                        </div>

                        {/* HUD Overlay Labels */}
                        <div className="absolute top-2 right-2 text-[8px] font-mono text-secondary/60">NEURAL_SYNC_ACTIVE</div>
                        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-primary/60">HYPER_GEN_0.98.x</div>
                    </motion.div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-10 order-1 lg:order-2">
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                    >
                        {t('feature.title')}
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
                                    <div className="w-2 h-2 bg-secondary shadow-[0_0_10px_#06b6d4] rounded-full" />
                                    <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                                        {bullet.bold}
                                    </p>
                                </div>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider pl-6">
                                    {bullet.subtext}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureSection;
