"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';

const START_FRAME = 7;
const END_FRAME = 39;
const SCROLL_END_FRAME = 27;
const FRAME_COUNT = END_FRAME - START_FRAME + 1; // 33 frames

const FLOATING_TEXTS = [
    { id: 1, text: "Parsing environment...", top: "15%", left: "15%", start: 8, color: "text-primary/70" },
    { id: 2, text: "Requesting data streams [OK]", top: "30%", left: "75%", start: 10, color: "text-secondary/70" },
    { id: 3, text: "INITIALIZING AI CORE...", top: "60%", left: "10%", start: 12, color: "text-white/50" },
    { id: 4, text: "Scanning biometrics [99%]", top: "75%", left: "80%", start: 14, color: "text-primary/70" },
    { id: 5, text: "Calibrating neural link", top: "25%", left: "10%", start: 16, color: "text-secondary/60" },
    { id: 6, text: "Bypass firewall: SUCCESS", top: "85%", left: "25%", start: 18, color: "text-primary/50" },
    { id: 7, text: "Injecting payloads...", top: "45%", left: "80%", start: 20, color: "text-white/60" },
    { id: 8, text: "Synapse aligned [100%]", top: "10%", left: "60%", start: 22, color: "text-secondary/80" },
    { id: 9, text: "Overriding manual control", top: "65%", left: "20%", start: 24, color: "text-primary/60" },
    { id: 10, text: "Compiling protocol [BANZAI]", top: "40%", left: "15%", start: 26, color: "text-white/70" },
    { id: 11, text: "Sensory input: MAXIMUM", top: "80%", left: "65%", start: 28, color: "text-secondary/70" },
    { id: 12, text: "System ready.", top: "55%", left: "70%", start: 30, color: "text-primary/80" },
];

interface HeroMaskCanvasProps {
    targetRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroMaskCanvas: React.FC<HeroMaskCanvasProps> = ({ targetRef }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Preload specific frame range (1-39)
    useEffect(() => {
        let isMounted = true;
        const preloadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            const isMobile = window.innerWidth < 768;
            const basePath = isMobile ? '/assets/mask/mobile/' : '/assets/mask/desktop/';

            for (let i = START_FRAME; i <= END_FRAME; i++) {
                const img = new Image();
                if (i === START_FRAME) {
                    img.fetchPriority = "high";
                }
                img.src = `${basePath}frame_${i}.webp`;
                img.onload = () => {
                    count++;
                    if (count === FRAME_COUNT && isMounted) {
                        setIsLoaded(true);
                    }
                };
                img.onerror = () => {
                    console.error(`Failed to load frame ${i}`);
                    count++;
                    if (count === FRAME_COUNT && isMounted) {
                        setIsLoaded(true);
                    }
                };
                loadedImages.push(img);
            }
            if (isMounted) setImages(loadedImages);
        };

        preloadImages();
        return () => { isMounted = false; };
    }, []);

    // 2. Intersection Observer Trigger Logic
    const containerRef = useRef<HTMLDivElement>(null);
    const targetFrame = useMotionValue(START_FRAME);
    const [currentFrame, setCurrentFrame] = useState(START_FRAME);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasTriggered) {
                setHasTriggered(true);
                animate(targetFrame, END_FRAME, {
                    duration: 6.0, // 4x slower than 1.5s
                    ease: "easeOut"
                });
            }
        }, { threshold: 0.8 }); // Trigger when 80% visible

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasTriggered, targetFrame]);

    useEffect(() => {
        const unsubscribe = targetFrame.on("change", (latest) => {
            setCurrentFrame(Math.round(latest));
        });
        return () => unsubscribe();
    }, [targetFrame]);

    // 3. Render Loop with "Object-Fit: Contain" Logic
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        let animationFrameId: number;

        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const f = targetFrame.get();
            const localIndex = Math.max(0, Math.min(Math.round(f) - START_FRAME, FRAME_COUNT - 1));
            const currentImage = images[localIndex];

            if (currentImage && currentImage.complete && currentImage.width > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const imgW = currentImage.width;
                const imgH = currentImage.height;
                const canvasW = canvas.width;
                const canvasH = canvas.height;

                // Logic for "Contain" - ensure full mask is visible
                const scale = Math.min(canvasW / imgW, canvasH / imgH);
                const x = (canvasW - imgW * scale) / 2;
                const y = (canvasH - imgH * scale) / 2;

                ctx.drawImage(currentImage, x, y, imgW * scale, imgH * scale);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoaded, images, targetFrame]);

    // 4. Handle Canvas Resize (HDPI)
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full max-h-[80vh] md:max-h-screen object-contain transition-opacity duration-700 z-10"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.2))'
                }}
            />

            {/* Dynamic HUD Layer */}
            {isLoaded && hasTriggered && (
                <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between py-10 px-4 md:p-20">

                    {/* 12 Floating Text Elements */}
                    <AnimatePresence>
                        {FLOATING_TEXTS.map((item) => (
                            currentFrame >= item.start && currentFrame < 33 && (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                    transition={{ duration: 0.8 }}
                                    className={`absolute font-mono text-[8px] md:text-xs z-0 ${item.color}`}
                                    style={{ top: item.top, left: item.left }}
                                >
                                    {item.text}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>

                    {/* Top HUD */}
                    <div className="flex flex-col items-center text-center gap-2">
                        {currentFrame < 25 ? (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="font-mono text-[10px] md:text-sm text-secondary/70 tracking-[0.2em]"
                            >
                                <div className="animate-pulse">BOOTING NEURAL PROTOCOLS...</div>
                                <div className="text-primary/50 mt-1">{`[ 0x${(currentFrame * 1337).toString(16).toUpperCase()} ] SYNCING CORE...`}</div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col gap-1"
                            >
                                <span className="text-xs md:text-lg hud-text font-bold tracking-widest whitespace-nowrap">NEURAL LINK: ACTIVE | STATUS: OPTIMAL</span>
                                <span className="text-[10px] md:text-xs text-secondary/60 font-mono tracking-[0.3em] uppercase">SYSTEM.READY</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Middle Left / Right HUD Data (Desktop Only) */}
                    <div className="hidden md:flex justify-between w-full font-mono text-xs text-primary/40">
                        <div className="flex flex-col gap-1">
                            <span>V-SYNC: {currentFrame * 2.5}%</span>
                            <span>MEM_ALLOC: 0x2A4F</span>
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                            <span>LATENCY: {Math.max(1, 40 - currentFrame)}ms</span>
                            <span>CPU_LOAD: MINIMAL</span>
                        </div>
                    </div>

                    {/* Bottom HUD */}
                    <div className="flex flex-col items-center text-center gap-2">
                        {currentFrame < 30 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="font-mono text-xs md:text-sm text-primary/80 uppercase tracking-widest"
                            >
                                CALCULATING...
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col gap-1 w-full"
                            >
                                <div className="w-full flex justify-center items-center px-4">
                                    <span className="text-[10px] md:text-[15px] hud-text font-bold whitespace-nowrap leading-tight">+300% REACH_ACCELERATION<br className="md:hidden" /> <span className="hidden md:inline">|</span> +130% SALES_GROWTH</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}

            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-primary/20 border-t-secondary rounded-full animate-spin"></div>
                </div>
            )}

            {/* Terminal Overlay Flare */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
    );
};

export default HeroMaskCanvas;
