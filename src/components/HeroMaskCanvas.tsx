"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValue, useSpring, animate } from 'framer-motion';

const START_FRAME = 7;
const END_FRAME = 39;
const SCROLL_END_FRAME = 27;
const FRAME_COUNT = END_FRAME - START_FRAME + 1; // 39 frames

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

            for (let i = START_FRAME; i <= END_FRAME; i++) {
                const img = new Image();
                img.src = `/assets/cybermask_sequence/frame_${i}.png`;
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

    // 2. Scroll Logic - Using targetRef for pinpoint accuracy
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const targetFrame = useMotionValue(START_FRAME);
    const smoothFrame = useSpring(targetFrame, {
        stiffness: 100,
        damping: 30,
        mass: 1.2
    });
    const isAutoPlaying = useRef(false);
    const animationControls = useRef<any>(null);

    // Watch scroll progress to determine whether to map exactly to frame or trigger autoplay
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (p) => {
            const SCROLL_THRESHOLD = 0.3; // autoplay starts at 30% scroll depth of sticky area

            if (p < SCROLL_THRESHOLD) {
                // Manual scroll control area
                if (isAutoPlaying.current) {
                    isAutoPlaying.current = false;
                    if (animationControls.current) {
                        animationControls.current.stop();
                    }
                }
                const mappedFrame = START_FRAME + (p / SCROLL_THRESHOLD) * (SCROLL_END_FRAME - START_FRAME);
                targetFrame.set(mappedFrame);
            } else {
                // Autoplay area
                if (!isAutoPlaying.current) {
                    isAutoPlaying.current = true;
                    animationControls.current = animate(targetFrame, END_FRAME, {
                        duration: 0.8, // Play the rest of the frames (20->39) over 0.8 seconds
                        ease: "easeOut"
                    });
                }
            }
        });

        return () => {
            unsubscribe();
            if (animationControls.current) {
                animationControls.current.stop();
            }
        };
    }, [scrollYProgress, targetFrame]);

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
            const localIndex = Math.max(0, Math.min(Math.floor(f) - START_FRAME, FRAME_COUNT - 1));
            const currentImage = images[localIndex];

            if (currentImage && currentImage.complete) {
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
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full transition-opacity duration-700"
                style={{
                    opacity: isLoaded ? 1 : 0,
                    filter: 'drop-shadow(0 0 50px rgba(6, 182, 212, 0.15))'
                }}
            />

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
