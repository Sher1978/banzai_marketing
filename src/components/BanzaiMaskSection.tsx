"use client";

import React, { useRef } from 'react';
import { HeroMaskCanvas } from './HeroMaskCanvas';

const BanzaiMaskSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[400vh] bg-[#050505]"
        >
            <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                {/* Subtitle / HUD Data */}
                <div className="absolute top-10 w-full text-center z-10 font-mono text-xs text-secondary/60 tracking-[0.3em] uppercase">
                    Initializing Neural Core
                </div>

                {/* Canvas Container in full screen width */}
                <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-center pointer-events-none z-20">
                    <HeroMaskCanvas targetRef={sectionRef as React.RefObject<HTMLDivElement>} />
                </div>

                <div className="absolute bottom-10 right-10 p-4 border-r border-b border-primary/20 text-right font-mono text-[10px] text-primary/80 flex flex-col gap-2 z-10">
                    <div className="flex justify-end gap-4 text-glow">
                        <span>SYSTEM</span>
                        <span>ONLINE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BanzaiMaskSection;
