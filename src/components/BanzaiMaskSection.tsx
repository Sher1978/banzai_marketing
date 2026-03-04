"use client";

import React, { useRef, useState, useEffect } from 'react';
import { HeroMaskCanvas } from './HeroMaskCanvas';

const BanzaiMaskSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isLocked, setIsLocked] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                    setIsLocked(true);

                    // Lock scroll
                    document.body.style.overflow = 'hidden';

                    // Unlock after 4 seconds
                    setTimeout(() => {
                        document.body.style.overflow = '';
                        setIsLocked(false);
                        setScrollActive(true);
                    }, 4000);
                }
            },
            { threshold: 0.9 } // Trigger when 90% in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            document.body.style.overflow = '';
        };
    }, [hasTriggered]);

    return (
        <section
            ref={sectionRef}
            className={`relative w-full h-[200vh] bg-[#050505] ${isLocked ? 'pointer-events-none' : ''}`}
        >
            <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                </div>



                {/* Canvas Container in full screen width */}
                <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-center pointer-events-none z-20">
                    <HeroMaskCanvas targetRef={sectionRef as React.RefObject<HTMLDivElement>} isScrollActive={scrollActive} />
                </div>


            </div>
        </section>
    );
};

export default BanzaiMaskSection;
