"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";

/**
 * ProcessSection showing the 3-step deployment.
 */
const ProcessSection: React.FC = () => {
    const { t } = useTranslation();
    const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; subtext: string }>;

    return (
        <section className="relative py-32 px-6 bg-black overflow-hidden">
            <div className="max-w-[1280px] mx-auto relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-2xl leading-[0.9]"
                    >
                        {t('process.title')}
                    </motion.h2>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent hidden md:block mb-4" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative p-10 border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-primary/50 transition-all duration-500"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-primary/20 group-hover:text-primary/40 transition-colors text-6xl font-black">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-12 h-12 rounded-none border border-primary/30 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    STEP_0{idx + 1}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed font-medium uppercase tracking-widest border-l border-white/10 pl-4">
                                        {step.subtext}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative scanline effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 opacity-0 group-hover:animate-scanline" />
                        </motion.div>
                    ))}
                </div>

                {/* Status Bar HUD */}
                <div className="mt-20 flex flex-wrap items-center justify-between gap-10 p-6 border border-white/5 bg-white/[0.01]">
                    <div className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                        <span className="text-[10px] text-white/40 font-mono uppercase tracking-[0.3em]">Network_Status_Optimal</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="text-[10px] text-white/40 font-mono uppercase tracking-[0.3em]">Estimated_ROI_Increase</span>
                        <span className="text-xl font-bold text-secondary text-glow">+130%</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="text-[10px] text-white/40 font-mono uppercase tracking-[0.3em]">Lead_Cost_Reduction</span>
                        <span className="text-xl font-bold text-primary text-glow">-40%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
