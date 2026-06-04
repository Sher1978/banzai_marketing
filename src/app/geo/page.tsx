"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import SearchRevolution from './components/SearchRevolution';
import Technology from './components/Technology';
import ScannerWidget from './components/ScannerWidget';
import Cases from './components/Cases';
import PricingTable from './components/PricingTable';
import ContactCapture from './components/ContactCapture';
import { translations } from './translations';
import '@/lib/i18n';
import Link from 'next/link';

export default function GeoLandingPage() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  // Schema.org Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BanzAI marketing",
    "url": "https://banzai-marketing.com",
    "logo": "https://banzai-marketing.com/assets/sher-profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/banzai-marketing",
      "https://www.crunchbase.com/organization/banzai-marketing"
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generative Engine Optimization (GEO)",
    "description": lang === 'ru'
      ? "Оптимизация видимости бренда в поисковых системах ИИ (ChatGPT, Perplexity, Gemini, Google AIO)."
      : lang === 'vi'
      ? "Tối ưu hóa khả năng hiển thị thương hiệu trong công cụ tìm kiếm AI (ChatGPT, Perplexity, Gemini, Google AIO)."
      : "Optimizing brand visibility in AI search engines (ChatGPT, Perplexity, Gemini, Google AIO).",
    "provider": {
      "@type": "Organization",
      "name": "BanzAI marketing"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.list.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden relative bg-bg-dubai text-white font-display antialiased selection:bg-gold-premium selection:text-black scroll-smooth">
      
      {/* Structured Data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Hero Section with Interactive FOMO AI Chat typing slider */}
      <HeroSlider openScanner={() => setIsScannerOpen(true)} />

      {/* Chronological Search Revolution Accordion / Collapse Timeline */}
      <SearchRevolution />

      {/* Explanatory RAG/Knowledge Graph Technology Architecture Block */}
      <Technology />

      {/* Interactive Multi-agent live GEO Scanner lead capture popup modal */}
      <AnimatePresence>
        {isScannerOpen && (
          <ScannerWidget isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
        )}
      </AnimatePresence>

      {/* Real-world cases with live ChatGPT query simulations */}
      <Cases />

      {/* Pricing section with glassmorphic cards */}
      <PricingTable />

      {/* Double conversion funnel (GEO Audit Form + PDF Magnet Download) + FAQ Accordion */}
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
