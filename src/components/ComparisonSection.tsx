"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";

/**
 * Refined ComparisonSection with adaptive text overlays, desaturated legacy panel,
 * scroll-driven slider for mobile, and parallax HUD animations.
 */
const ComparisonSection: React.FC = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll-driven animation logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to slider position (start at 50, move to 0 as we scroll)
    const scrollSliderPos = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);

    // Manual interaction state
    const [isInteracting, setIsInteracting] = useState(false);
    const [manualPos, setManualPos] = useState(50);
    const mouseX = useMotionValue(50);
    const sliderPos = useSpring(mouseX, { damping: 30, stiffness: 200 });

    // Sync manual and scroll positions
    useEffect(() => {
        const unsubscribe = scrollSliderPos.on("change", (v) => {
            if (!isInteracting) {
                mouseX.set(v);
            }
        });
        return () => unsubscribe();
    }, [scrollSliderPos, isInteracting, mouseX]);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        setIsInteracting(true);

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
        const relativeX = ((x - rect.left) / rect.width) * 100;

        const clampedX = Math.max(0, Math.min(100, relativeX));
        mouseX.set(clampedX);
        setManualPos(clampedX);
    };

    const handleEnd = () => {
        // Option: reset isInteracting after some delay or keep as is
    };

    const oldSchoolBullets = t('comparison.old_school.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;
    const banzaiBullets = t('comparison.banzai.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    // Parallax transformations for text layers based on current slider position
    const oldSchoolParallaxX = useTransform(sliderPos, [0, 100], [-30, 0]);
    const banzaiParallaxX = useTransform(sliderPos, [0, 100], [0, 30]);

    /**
     * Helper to highlight specific strings in BanzAI section with neon blue
     */
    const highlightText = (text: string) => {
        const highlights = ["Neural superiority", "Нейронное превосходство", "+300% reach", "+300% охвата", "+130% sales", "+130% продаж"];
        let result: React.ReactNode = text;

        highlights.forEach(h => {
            if (typeof result === 'string' && result.includes(h)) {
                const parts = result.split(h);
                result = (
                    <>
                        {parts[0]}
                        <span className="text-secondary text-glow-cyan font-black">{h}</span>
                        {parts[1]}
                    </>
                );
            }
        });
        return result;
    };

    /**
     * Adaptive overlay component for text blocks
     */
    const AdaptiveOverlay: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
        <div className={`relative inline-block ${className}`}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm -m-1 md:-m-2 z-0 rounded-sm" />
            <div className="relative z-10">{children}</div>
        </div>
    );

    return (
        <section ref={sectionRef} className="relative py-32 px-6 bg-black overflow-hidden select-none">
            <div className="max-w-[1280px] mx-auto relative z-10">

                <div className="text-center mb-16 px-4">
                    <AdaptiveOverlay>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none p-2"
                        >
                            {t('comparison.title')}
                        </motion.h2>
                    </AdaptiveOverlay>
                </div>

                {/* Interactive Slider Container */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMove}
                    onMouseLeave={() => setIsInteracting(false)}
                    onTouchMove={handleMove}
                    onTouchEnd={() => setIsInteracting(false)}
                    className="relative aspect-video md:aspect-[21/9] w-full bg-zinc-900 border border-white/5 overflow-hidden cursor-ew-resize group shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                >
                    {/* BASE LAYER: Old School (Original brightness) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/assets/old_school_katana.jpg")' }}
                    >
                        {/* Old TV Noise Overlay */}
                        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-32 animate-scanline-fast pointer-events-none" />

                        {/* HUD Content Overlay for Left Side */}
                        <motion.div
                            style={{ x: oldSchoolParallaxX }}
                            className="absolute inset-0 flex items-center justify-start p-6 md:p-12"
                        >
                            <div className="max-w-[280px] md:max-w-md space-y-8 relative z-10 text-left">
                                <AdaptiveOverlay>
                                    <h3 className="text-xl md:text-4xl font-black text-white/40 uppercase tracking-[0.2em] italic px-3 py-1 border-l-2 border-white/20">
                                        {t('comparison.old_school.title')}
                                    </h3>
                                </AdaptiveOverlay>

                                <div className="space-y-6 md:space-y-10">
                                    {oldSchoolBullets.map((bullet, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <AdaptiveOverlay className="block">
                                                <p className="text-sm md:text-xl font-bold text-white/80 uppercase tracking-tight line-through decoration-white/40 px-2 py-0.5">
                                                    {bullet.bold}
                                                </p>
                                            </AdaptiveOverlay>
                                            <AdaptiveOverlay className="block">
                                                <p className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-medium leading-relaxed px-2 py-0.5 max-w-full">
                                                    {bullet.subtext}
                                                </p>
                                            </AdaptiveOverlay>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* TOP LAYER: BanzAI (Revealed by clip-path for perfect background alignment) */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center z-20"
                        style={{
                            backgroundImage: 'url("/assets/banzai_katana.jpg")',
                            clipPath: useTransform(sliderPos, (v) => `inset(0 0 0 ${v}%)`)
                        }}
                    >
                        {/* HUD Content Overlay for Right Side */}
                        <motion.div
                            style={{ x: banzaiParallaxX }}
                            className="absolute inset-0 flex items-center justify-end p-6 md:p-12 bg-primary/5"
                        >
                            <div className="max-w-[280px] md:max-w-md space-y-8 relative z-10 text-right">
                                <AdaptiveOverlay>
                                    <h3 className="text-xl md:text-4xl font-black text-secondary tracking-[0.2em] px-3 py-1 border-r-2 border-secondary/40 text-glow-cyan uppercase">
                                        {t('comparison.banzai.title')}
                                    </h3>
                                </AdaptiveOverlay>

                                <div className="space-y-6 md:space-y-10">
                                    {banzaiBullets.map((bullet, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <AdaptiveOverlay className="block">
                                                <p className="text-sm md:text-2xl font-black text-white uppercase tracking-tight text-glow px-2 py-0.5">
                                                    {highlightText(bullet.bold)}
                                                </p>
                                            </AdaptiveOverlay>
                                            <AdaptiveOverlay className="block ml-auto">
                                                <p className="text-[10px] md:text-sm text-white/70 uppercase tracking-widest font-semibold leading-relaxed px-2 py-0.5">
                                                    {highlightText(bullet.subtext)}
                                                </p>
                                            </AdaptiveOverlay>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* HUD SLIDER BEAM (Laser Link) */}
                    <motion.div
                        style={{ left: useTransform(sliderPos, (v) => `${v}%`) }}
                        className="absolute top-0 bottom-0 w-[2px] bg-secondary shadow-[0_0_30px_#06b6d4] z-30 pointer-events-none"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-secondary/50 bg-black/90 rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md">
                            <div className="rotate-[-45deg] flex flex-col items-center gap-1">
                                <span className="text-[6px] font-mono text-secondary uppercase tracking-[0.2em] mb-1">SCAN_MODE</span>
                                <div className="flex gap-1.5">
                                    <div className="w-[1px] h-3 bg-secondary/80" />
                                    <div className="w-[1px] h-3 bg-secondary/80" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interaction Guide */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-[8px] md:text-[10px] font-mono text-white/20 uppercase tracking-[0.8em] pointer-events-none">
                        Analyze_Transformation
                    </div>
                </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default ComparisonSection;
