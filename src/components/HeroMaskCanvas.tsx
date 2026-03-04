"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const START_FRAME = 7;
const END_FRAME = 39;
const SCROLL_END_FRAME = 27;
const FRAME_COUNT = END_FRAME - START_FRAME + 1; // 33 frames

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

    // 2. Scroll Direction Logic
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Map scroll 0 -> 1 to frame 7 -> 40
    const rawFrame = useTransform(scrollYProgress, [0, 1], [START_FRAME, END_FRAME]);

    // Physics config for inertia and slowdown on direction change
    const smoothFrame = useSpring(rawFrame, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [currentFrame, setCurrentFrame] = useState(START_FRAME);

    useEffect(() => {
        const unsubscribe = smoothFrame.on("change", (latest) => {
            setCurrentFrame(Math.round(latest));
        });
        return () => unsubscribe();
    }, [smoothFrame]);

    // 3. Render Loop with "Object-Fit: Contain" Logic
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        let animationFrameId: number;

        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const f = smoothFrame.get();
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
    }, [isLoaded, images, smoothFrame]);

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
        <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden">
            {/* Top HUD Block (Static & Animated) */}
            <div className="absolute top-10 md:top-20 w-full text-center z-20 flex flex-col gap-1 items-center">
                <span className="font-mono text-xs text-secondary/60 tracking-[0.3em] uppercase mb-4 opacity-50">INITIALIZING NEURAL CORE</span>
                {currentFrame >= 31 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col gap-1"
                    >
                        <span className="text-[10px] md:text-sm hud-text font-bold">NEURAL LINK: ACTIVE | STATUS: OPTIMAL</span>
                    </motion.div>
                )}
            </div>

            <canvas
                ref={canvasRef}
                className="w-full h-full transition-opacity duration-700"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    filter: 'drop-shadow(0 0 50px rgba(6, 182, 212, 0.15))'
                }}
            />

            {/* Bottom HUD Block (Static & Animated) */}
            <div className="absolute bottom-10 md:bottom-20 w-full text-center z-20 flex flex-col gap-1 items-center">
                {currentFrame >= 31 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col gap-1 mb-4"
                    >
                        <span className="text-[10px] md:text-sm hud-text font-bold">+300% REACH_ACCELERATION | +130% SALES_GROWTH</span>
                    </motion.div>
                )}
                <div className="flex justify-center gap-4 text-glow font-mono text-[10px] text-primary/80">
                    <span>SYSTEM</span>
                    <span>ONLINE</span>
                </div>
            </div>

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
