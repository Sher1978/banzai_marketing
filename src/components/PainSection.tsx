"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";

/**
 * PainSection with aggressive typography and two-level reading.
 */
const PainSection: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.4, 0.7], [1, 2.2]);
    const opacityValue = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);

    const bullets = t('pain.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string; highlight?: boolean }>;

    return (
        <section
            ref={sectionRef}
            className="relative bg-black flex flex-col items-center overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-32 px-6"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-16 relative z-10">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter text-center leading-none"
                >
                    {t('pain.title')}
                </motion.h2>

                <div className="relative flex items-center justify-center my-12">
                    <motion.div
                        style={{ scale, opacity: opacityValue }}
                        className="absolute w-64 h-64 bg-red-600/30 rounded-full blur-[140px] pointer-events-none"
                    />

                    <motion.div
                        style={{ scale }}
                        className="text-[140px] md:text-[280px] font-black text-white leading-none tracking-tighter animate-pulse-red select-none"
                    >
                        $100
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-1 gap-10 w-full">
                    {bullets.map((bullet, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-8 border-l-2 ${bullet.highlight ? 'border-red-600 bg-red-950/10' : 'border-white/10 bg-white/5'} backdrop-blur-md`}
                        >
                            <p className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-2 ${bullet.highlight ? 'text-red-500 glitch' : 'text-white'}`}>
                                {bullet.bold}
                            </p>
                            <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium uppercase tracking-wide">
                                {bullet.subtext}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600/30 to-transparent opacity-50" />
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600/30 to-transparent opacity-50" />
        </section>
    );
};

export default PainSection;
