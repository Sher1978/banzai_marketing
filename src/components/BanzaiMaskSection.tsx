"use client";

import React, { useRef } from 'react';
import { HeroMaskCanvas } from './HeroMaskCanvas';

const BanzaiMaskSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            {/* Canvas Container in full screen width */}
            <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-center pointer-events-none z-20">
                <HeroMaskCanvas targetRef={sectionRef as React.RefObject<HTMLDivElement>} />
            </div>
        </section>
    );
};

export default BanzaiMaskSection;
