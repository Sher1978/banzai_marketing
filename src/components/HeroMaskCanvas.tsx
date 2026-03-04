"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValue, useSpring } from 'framer-motion';

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
    const { scrollY } = useScroll();
    const targetFrame = useMotionValue(START_FRAME);

    // Physics config for inertia and slowdown on direction change
    const smoothFrame = useSpring(targetFrame, {
        stiffness: 40,
        damping: 25,
        mass: 3
    });

    const lastScrollY = useRef(0);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            const delta = latest - lastScrollY.current;

            // If scrolling down (positive delta), play forward. 
            // If up (negative delta), play backward.
            if (delta > 5) {
                targetFrame.set(END_FRAME);
                lastScrollY.current = latest;
            } else if (delta < -5) {
                targetFrame.set(START_FRAME);
                lastScrollY.current = latest;
            }
        });

        return () => unsubscribe();
    }, [scrollY, targetFrame]);

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
