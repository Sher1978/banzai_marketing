"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";
import Image from 'next/image';

interface VideoItem {
    src: string;
    titleRu: string;
    titleEn: string;
    descRu: string;
    descEn: string;
}

const videos: VideoItem[] = [
    {
        src: "/assets/founder_video_1.mp4",
        titleRu: "ИИ-Сценарии & Диктор",
        titleEn: "AI Scripting & Voiceover",
        descRu: "Генерация голоса и текста по цифровому следу автора (Digital DNA).",
        descEn: "Personalized voice and text generation matching the author's tone."
    },
    {
        src: "/assets/founder_video_2.mp4",
        titleRu: "Динамический Монтаж",
        titleEn: "Dynamic Editing",
        descRu: "Автоматическое удержание внимания через умные визуальные триггеры.",
        descEn: "Automated attention retention utilizing smart visual triggers."
    },
    {
        src: "/assets/founder_video_3.mp4",
        titleRu: "Нейросетевая Вирусность",
        titleEn: "Neural Virality",
        descRu: "Масштабирование видеоконтента без единой живой съемки за год.",
        descEn: "Scaling organic video reach with zero physical production needed."
    }
];

interface VideoCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
    src: string;
    title: string;
    desc: string;
    isRu: boolean;
    isActive?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, desc, isRu, isActive = true, className, ...motionProps }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);

    // Pause video if card becomes inactive
    useEffect(() => {
        if (!isActive && isPlaying && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }, [isActive, isPlaying]);

    const togglePlay = () => {
        if (!isActive) return;
        if (!videoRef.current) return;
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.muted = isMuted;
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(err => {
                console.error("Error playing video:", err);
            });
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        const nextMuted = !isMuted;
        videoRef.current.muted = nextMuted;
        setIsMuted(nextMuted);
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const duration = videoRef.current.duration || 1;
        const current = videoRef.current.currentTime;
        setProgress((current / duration) * 100);
    };

    return (
        <motion.div 
            onClick={togglePlay}
            className={`relative aspect-[9/16] w-[280px] md:w-full flex-shrink-0 snap-center bg-black/60 border border-white/10 sharp-border overflow-hidden cursor-pointer group shadow-2xl transition-all duration-500 hover:border-primary/50 ${className || ''}`}
            {...motionProps}
        >
            {/* Glowing tech corner lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 pointer-events-none z-20 group-hover:border-primary/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 pointer-events-none z-20 group-hover:border-primary/50 transition-colors" />

            <video
                ref={videoRef}
                src={src}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
            />

            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10 opacity-70 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

            {/* Play/Pause Button in Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: isPlaying ? 0 : 1,
                        scale: isPlaying ? 0.8 : 1
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:text-primary pointer-events-auto"
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 translate-x-0.5">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    )}
                </motion.div>
            </div>

            {/* Mute/Unmute Toggle in Top Right */}
            {isActive && (
                <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    )}
                </button>
            )}

            {/* Bottom Text and Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-15 flex flex-col justify-end pointer-events-none">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">
                    {isRu ? "Шоукейс Контента" : "Content Showcase"}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-tight mb-1">
                    {title}
                </h3>
                <p className="text-white/60 text-xs line-clamp-2">
                    {desc}
                </p>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-100 ease-out" 
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

/**
 * FounderSection with HUD-style storytelling and Identity Unlock interaction.
 */
const FounderSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const bullets = t('founder.bullets', { returnObjects: true }) as Array<{ bold: string; subtext: string }>;

    // States for mobile stacked video carousel
    const [videoOrder, setVideoOrder] = useState([0, 1, 2]);
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);

    const handleSwipeLeft = () => {
        if (isSwiping) return;
        setIsSwiping(true);
        setSwipeDirection('left');
        setTimeout(() => {
            setVideoOrder(prev => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
            setIsSwiping(false);
            setSwipeDirection(null);
        }, 300);
    };

    const handleSwipeRight = () => {
        if (isSwiping) return;
        setIsSwiping(true);
        setSwipeDirection('right');
        setTimeout(() => {
            setVideoOrder(prev => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
            setIsSwiping(false);
            setSwipeDirection(null);
        }, 300);
    };

    return (
        <section className="relative py-32 px-6 bg-dubai-night border-y border-primary/20 overflow-hidden">
            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Founder Visual Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="relative aspect-square w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:mx-0 order-2 lg:order-1 group"
                >
                    {/* Ring Glow Background */}
                    <motion.div
                        className="absolute inset-[-10%] rounded-full blur-3xl transition-colors duration-1000 bg-primary/20"
                    />

                    {/* Circular Mask for Image */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 z-10 bg-black">
                        <motion.div
                            className="w-full h-full relative"
                            initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.2) grayscale(100%)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "brightness(1) grayscale(0%)" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-20%" }}
                        >
                            <Image
                                src="/assets/sher-profile.webp"
                                alt="Founder"
                                fill
                                priority={true}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* HUD Rotating Rings */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            borderColor: "rgba(6, 182, 212, 0.4)",
                            boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)"
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            borderColor: { duration: 1 },
                            boxShadow: { duration: 1 }
                        }}
                        className="absolute -inset-4 md:-inset-6 border-2 border-dashed rounded-full pointer-events-none z-30 opacity-70"
                    />

                    <motion.div
                        animate={{
                            rotate: -360,
                            borderColor: "rgba(168, 85, 247, 0.3)"
                        }}
                        transition={{
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            borderColor: { duration: 1 }
                        }}
                        className="absolute -inset-8 md:-inset-12 border border-dotted rounded-full pointer-events-none z-10"
                    />

                    {/* Bottom HUD Text (Status effect) */}
                    <div className="absolute -bottom-8 md:-bottom-12 left-1/2 w-max max-w-full -translate-x-1/2 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] px-4 py-1 border-l-2 text-primary border-primary bg-primary/10"
                        >
                            {t('founder.unlocked_status')}
                        </motion.div>
                    </div>

                    {/* Decorative Corner Markers (Abstract) */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none z-40" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none z-40" />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-10 order-1 lg:order-2 z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                    >
                        {t('founder.title')}
                    </motion.h2>

                    <div className="space-y-10">
                        {bullets.map((bullet, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-[1px] transition-all duration-1000 bg-primary group-hover:w-16" />
                                    <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tight">
                                        {bullet.bold}
                                    </p>
                                </div>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider pl-16">
                                    {bullet.subtext}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Proof HUD Marker */}
                    <div className="mt-8 pt-8 border-t border-white/5 flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-primary font-mono uppercase">Verified_Experience</span>
                            <span className="text-xl font-bold text-white">10+ YRS</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-secondary font-mono uppercase">Market_Presence</span>
                            <span className="text-xl font-bold text-white">UAE / GLOBAL</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* AI Videos Subsection */}
            <div className="max-w-[1280px] mx-auto mt-24 pt-16 border-t border-white/10 relative z-10">
                <div className="space-y-4 mb-12">
                    <span className="text-xs font-mono tracking-[0.4em] text-primary uppercase block">
                        {isRu ? "ПРОТОТИП // ИИ-ГЕНЕРАЦИЯ" : "PROTOTYPE // AI-GENERATED CONTENT"}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        {isRu ? "ИИ-Контент в Действии" : "AI Content in Action"}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
                        {isRu 
                            ? "Примеры реальных Reels-роликов, сгенерированных нашей нейросетевой системой. За весь год не было проведено ни одной съемки."
                            : "Examples of actual Reels generated by our neural content pipeline. Zero physical camera shoots were conducted."}
                    </p>
                </div>

                {/* Videos Container - Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {videos.map((vid, idx) => (
                        <VideoCard
                            key={idx}
                            src={vid.src}
                            title={isRu ? vid.titleRu : vid.titleEn}
                            desc={isRu ? vid.descRu : vid.descEn}
                            isRu={isRu}
                            isActive={true}
                        />
                    ))}
                </div>

                {/* Videos Container - Mobile Stacked Deck */}
                <div className="flex flex-col items-center md:hidden mt-8">
                    <div className="relative w-[280px] h-[530px] mx-auto select-none">
                        {videoOrder.map((videoIdx, pos) => {
                            const vid = videos[videoIdx];
                            const isTop = pos === 0;

                            let xVal: string | number = 0;
                            let rotVal = 0;
                            let scaleVal = 1 - pos * 0.06;
                            let yVal = pos * 16;
                            let opacVal = 1 - pos * 0.25;

                            if (isSwiping && isTop) {
                                if (swipeDirection === 'left') {
                                    xVal = "-150%";
                                    rotVal = -20;
                                    opacVal = 0;
                                } else if (swipeDirection === 'right') {
                                    xVal = "150%";
                                    rotVal = 20;
                                    opacVal = 0;
                                }
                            }

                            return (
                                <VideoCard
                                    key={videoIdx}
                                    src={vid.src}
                                    title={isRu ? vid.titleRu : vid.titleEn}
                                    desc={isRu ? vid.descRu : vid.descEn}
                                    isRu={isRu}
                                    isActive={isTop}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        zIndex: videos.length - pos,
                                        transformOrigin: "bottom center",
                                        pointerEvents: isTop ? 'auto' : 'none'
                                    }}
                                    animate={{
                                        x: xVal,
                                        y: yVal,
                                        scale: scaleVal,
                                        opacity: opacVal,
                                        rotate: rotVal
                                    }}
                                    transition={isSwiping && isTop ? { duration: 0.3, ease: "easeOut" } : { type: "spring", stiffness: 300, damping: 25 }}
                                    drag={isTop ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={(event, info) => {
                                        if (info.offset.x < -80) {
                                            handleSwipeLeft();
                                        } else if (info.offset.x > 80) {
                                            handleSwipeRight();
                                        }
                                    }}
                                />
                            );
                        })}
                    </div>
                    {/* Swipe indicator helper text */}
                    <p className="text-white/40 text-[11px] font-mono mt-6 uppercase tracking-wider animate-pulse">
                        {isRu ? "← свайпните для перехода →" : "← swipe to switch →"}
                    </p>
                </div>
            </div>

            {/* Custom inline style for scrollbar hiding */}
            <style dangerouslySetInnerHTML={{ __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}} />
        </section>
    );
};

export default FounderSection;
