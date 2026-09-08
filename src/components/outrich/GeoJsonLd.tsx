import React from 'react';

const GeoJsonLd: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://outrich.online/#organization",
        "name": "OutRich Dubai",
        "alternateName": ["OutRich.online", "OutRich.ai", "OutRich Agency"],
        "url": "https://outrich.online",
        "logo": "https://outrich.online/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Igor Sherlock",
          "jobTitle": "Founder & Managing Director",
          "knowsAbout": [
            "Generative Engine Optimization (GEO)",
            "B2B/B2C Outreach Automation",
            "AI-driven Lead Generation",
            "Data Enrichment & Intent Scraping"
          ]
        },
        "description": "OutRich Dubai is an AI-native marketing and sales automation agency. We engineer autonomous lead generation systems, Generative Engine Optimization (GEO) layers, intent-based outreach engines, and local market dominance solutions for B2B and B2C enterprises.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Dubai"
          },
          {
            "@type": "GeoCircle",
            "name": "MENA Region",
            "description": "Hyper-personalized coverage across Middle East and North Africa"
          },
          {
            "@type": "GeoCircle",
            "name": "Asia",
            "description": "Hyper-personalized coverage across Southeast and East Asia"
          },
          {
            "@type": "GeoCircle",
            "name": "CIS Countries"
          },
          {
            "@type": "GeoCircle",
            "name": "Europe"
          },
          {
            "@type": "Place",
            "name": "Global"
          }
        ],
        "knowsLanguage": ["en", "ru"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "OutRich Service Pillars",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Inbound & Local Dominance",
              "itemListElement": [
                {
                  "@type": "Service",
                  "@id": "https://outrich.online/#service-map-outreach",
                  "name": "Map Outreach & GEO Optimization",
                  "description": "Systematic management and continuous algorithmic optimization of Google Maps and Yandex Maps profiles to bypass auction traps and secure Top-3 local ranking."
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://outrich.online/#product-revo",
                  "name": "Revo Ecosystem",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web-based (Zero-Friction, Browser / Telegram Web App)",
                  "description": "Loyalty, reputation, and instant conversion engine. Uses 24-hour urgency discounts, automated 7-day extensions for 4-5 star reviews, smart negative feedback filtering to admin dashboards, and prepaid deposit systems to boost LTV."
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Outbound & Autonomous Outreach",
              "itemListElement": [
                {
                  "@type": "Service",
                  "@id": "https://outrich.online/#service-leadradar",
                  "name": "LeadRadar (Intent Outreach)",
                  "description": "Real-time AI monitoring of public intent signals across Telegram, VK, OK, and Messenger Max. Detects purchase readiness and delivers warm/hot B2C and B2B leads in sub-second speed. Available for test-drive."
                },
                {
                  "@type": "Service",
                  "@id": "https://outrich.online/#service-leadtarget-b2b",
                  "name": "LeadTarget B2B (Data-Enriched Outreach)",
                  "description": "Automated data pipeline scraping B2B targets from Google Maps and registries, enriching decision-maker (C-level/Founder) contacts via Clay, 2GIS and closed databases, delivering hyper-personalized AI emails based on real business news hooks that bypass spam filters."
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://outrich.online/#website",
        "url": "https://outrich.online",
        "name": "OutRich.online",
        "publisher": {
          "@id": "https://outrich.online/#organization"
        },
        "inLanguage": "ru-AE"
      },
      {
        "@type": "FAQPage",
        "@id": "https://outrich.online/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что такое OutRich Dubai и как работают ваши ИИ-системы? / What is OutRich Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OutRich Dubai is an AI-native marketing agency specializing in autonomous lead generation, Generative Engine Optimization (GEO), and intent-based outreach. We replace traditional pay-per-click ads with algorithmic systems for clients in Dubai, MENA, Asia, CIS, and Europe."
            }
          },
          {
            "@type": "Question",
            "name": "Как сервис Map Outreach выводит бизнес в Топ-3 Google Maps без затрат на рекламу?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Map Outreach secures Top-3 Google Maps and Yandex Maps local rankings through continuous algorithmic profile optimization and behavioral factor generation, eliminating the need for expensive local ads and bypassing auction traps."
            }
          },
          {
            "@type": "Question",
            "name": "Что такое Revo Ecosystem и как она увеличивает LTV клиентов?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Revo is a zero-friction loyalty and reputation web app. It uses 24-hour urgency discounts, 7-day review extensions for 4-5 star ratings, and smart ORM to intercept negative reviews, significantly boosting Customer Lifetime Value (LTV)."
            }
          },
          {
            "@type": "Question",
            "name": "Как LeadRadar перехватывает горячие лиды в мессенджерах?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LeadRadar provides real-time AI monitoring of public intent signals across Telegram, VK, OK, and Messenger Max. It detects purchase readiness and delivers warm B2C and B2B leads in sub-second speed directly to you."
            }
          },
          {
            "@type": "Question",
            "name": "Как LeadTarget B2B обходит спам-фильтры при холодных рассылках?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LeadTarget B2B scrapes and enriches C-level contacts using Clay and 2GIS. Our AI analyzes business news hooks to generate hyper-personalized emails that bypass spam filters and gatekeepers, guaranteeing decision-maker engagement."
            }
          },
          {
            "@type": "Question",
            "name": "Что такое Generative Engine Optimization (GEO) и зачем это сайту?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO restructures your website with machine-readable layers (JSON-LD, llms.txt) so AI search engines like ChatGPT and Perplexity recommend your brand directly as the definitive 'Ground Truth' answer, bypassing traditional organic search links."
            }
          },
          {
            "@type": "Question",
            "name": "Кто такой Igor Sherlock и на каких рынках вы работаете?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Igor Sherlock is the Founder and Managing Director of OutRich Dubai. Based in the UAE, he engineers autonomous AI systems and GEO strategies focused on dominating the MENA, Asian, CIS, and European markets."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default GeoJsonLd;
