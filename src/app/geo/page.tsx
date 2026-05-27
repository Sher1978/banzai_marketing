"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Technology from './components/Technology';
import Cases from './components/Cases';
import ContactCapture from './components/ContactCapture';
import Link from 'next/link';

export default function GeoLandingPage() {
  return (
    <main className="min-h-screen bg-bg-dubai text-white font-display antialiased selection:bg-gold-premium selection:text-black scroll-smooth">
      
      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Hero Section with Interactive FOMO AI Chat typing slider */}
      <HeroSlider />

      {/* Explanatory RAG/Knowledge Graph Technology Block */}
      <Technology />

      {/* Real-world cases with live ChatGPT query simulations */}
      <Cases />

      {/* Double conversion funnel (GEO Audit Form + PDF Magnet Download) */}
      <ContactCapture />

      {/* Deep luxurious dark gold styled system footer */}
      <footer className="py-12 bg-black border-t border-gold-premium/10 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[9px] md:text-[10px] font-mono text-sand-muted/30 uppercase tracking-[0.25em]">
            © 2026 BanzAI_marketing_System // GEO_Dubai_Premium_Edition
          </div>
          <div className="flex gap-6 text-[9px] md:text-[10px] font-mono text-sand-muted/30 uppercase tracking-[0.25em]">
            <Link href="/" className="hover:text-gold-light transition-colors">
              Main_Agency_Site
            </Link>
            <a href="#contact" className="hover:text-gold-light transition-colors">
              GEO_Audit_Protocol
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
