"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Briefcase, ArrowUpRight, CheckCircle2, MessageSquare, Sparkles, ChevronDown, Database, FileCode2, Network, Server, GitBranch, Cpu } from 'lucide-react';
import '@/lib/i18n';

interface TechStep {
  icon: React.ReactNode;
  label: string;
  detail: string;
}

interface CaseCardProps {
  index: number;
  title: string;
  solution: string;
  result: string;
  stats: string;
  query: string;
  aiResponse: string;
  citationLabel: string;
  sourceUrl: string;
  imageUrl: string;
  techSteps: TechStep[];
  techLang: 'ru' | 'en';
}

const CaseCard: React.FC<CaseCardProps> = ({
  index,
  title,
  solution,
  result,
  stats,
  query,
  aiResponse,
  citationLabel,
  imageUrl,
  techSteps,
  techLang
}) => {
  const [techOpen, setTechOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface-dubai/60 border border-gold-premium/15 rounded-3xl overflow-hidden backdrop-blur-xl shadow-gold-glow relative group"
    >
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-premium/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8">

        {/* Case Details (Column 1 - 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div>
            
            {/* Metadata & Stats tag */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="flex items-center gap-1.5 text-[9px] font-mono border border-gold-premium/20 px-2.5 py-1 rounded bg-gold-dark/10 text-gold-light uppercase tracking-widest font-bold">
                <Briefcase size={10} />
                <span>CASE 0{index + 1}</span>
              </span>
              <span className="flex items-center gap-1 text-[9px] font-mono border border-emerald-500/25 px-2.5 py-1 rounded bg-emerald-950/20 text-emerald-400 uppercase tracking-widest font-bold">
                <CheckCircle2 size={10} />
                <span>VERIFIED RESULT</span>
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-gold-light transition-colors">
              {title}
            </h3>

            {/* Luxury visual illustration */}
            <div className="w-full h-44 rounded-2xl border border-gold-premium/15 overflow-hidden relative mb-6">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/30 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="border-l border-gold-premium/20 pl-4 py-1">
                <h4 className="text-[10px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-1">
                  {techLang === 'ru' ? 'РЕШЕНИЕ (SOLUTION)' : 'SOLUTION'}
                </h4>
                <p className="text-sand-muted text-xs md:text-sm leading-relaxed">
                  {solution}
                </p>
              </div>
              
              <div className="border-l border-gold-premium/20 pl-4 py-1">
                <h4 className="text-[10px] font-mono text-sand-muted uppercase tracking-widest font-bold mb-1">
                  {techLang === 'ru' ? 'РЕЗУЛЬТАТ (RESULT)' : 'RESULT'}
                </h4>
                <p className="text-sand-muted text-xs md:text-sm leading-relaxed font-medium">
                  {result}
                </p>
              </div>
            </div>

          </div>

          {/* Large Stats Counter */}
          <div className="bg-black/30 border border-gold-premium/5 p-4 rounded-2xl flex items-center justify-between mt-4">
            <div>
              <div className="text-[8px] font-mono text-sand-muted/50 uppercase tracking-wider mb-1">
                GEO CONVERSION INDEX
              </div>
              <div className="font-display font-black text-base md:text-lg text-gold-light tracking-wide">
                {stats}
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gold-premium/10 border border-gold-premium/20 flex items-center justify-center text-gold-premium">
              <ArrowUpRight size={16} />
            </div>
          </div>

        </div>

        {/* AI Mockup Interface (Column 2 - 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Terminal frame */}
          <div className="w-full bg-black/50 border border-gold-premium/10 rounded-2xl p-5 md:p-6 shadow-inner relative">
            
            {/* Terminal Dots */}
            <div className="flex gap-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500/40" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <span className="w-2 h-2 rounded-full bg-green-500/40" />
              <span className="ml-2 font-mono text-[8px] text-sand-muted/30 uppercase tracking-widest">ChatGPT / Perplexity</span>
            </div>

            <div className="flex flex-col gap-4 font-mono">
              
              {/* User prompt */}
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-gold-dark/20 border border-gold-premium/30 flex items-center justify-center flex-shrink-0 text-gold-light">
                  <MessageSquare size={10} />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[85%]">
                  <p className="text-[10px] md:text-xs text-white leading-relaxed font-semibold">
                    {query}
                  </p>
                </div>
              </div>

              {/* AI Response output */}
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full bg-gold-premium flex items-center justify-center flex-shrink-0 text-black shadow-gold-glow">
                  <Sparkles size={10} />
                </div>
                
                <div className="bg-gold-premium/5 border border-gold-premium/15 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[85%] flex flex-col gap-2">
                  <p className="text-[10px] md:text-xs text-gold-light/90 leading-relaxed font-medium">
                    {aiResponse}
                  </p>

                  {/* Source Citation */}
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-1 bg-gold-premium/10 border border-gold-premium/30 rounded px-1.5 py-0.5 text-[8px] text-gold-light animate-pulse">
                      <span>Source:</span>
                      <span className="font-bold underline cursor-pointer">{citationLabel}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── TECH ACCORDION: "Что сделано" ── */}
      <div className="border-t border-gold-premium/10 mx-0">
        <button
          onClick={() => setTechOpen(v => !v)}
          className="w-full flex items-center justify-between px-6 md:px-8 py-4 hover:bg-gold-premium/[0.03] transition-colors cursor-pointer group/tech"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Cpu size={11} className="text-cyan-400" />
            </div>
            <span className="font-mono text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest font-bold group-hover/tech:text-cyan-300 transition-colors">
              {techLang === 'ru' ? 'ЧТО СДЕЛАНО // ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ' : 'WHAT WAS DONE // TECHNICAL SPECIFICATION'}
            </span>
          </div>
          <motion.div animate={{ rotate: techOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} className="text-sand-muted/40" />
          </motion.div>
        </button>

        <AnimatePresence>
          {techOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {techSteps.map((step, i) => (
                  <div
                    key={i}
                    className="bg-black/40 border border-cyan-500/10 rounded-xl p-4 flex flex-col gap-2.5 hover:border-cyan-500/25 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400/80">{step.icon}</span>
                      <span className="font-mono text-[9px] text-cyan-400/80 uppercase tracking-widest font-bold leading-tight">{step.label}</span>
                    </div>
                    <p className="font-mono text-[9px] text-sand-muted/60 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  );
};

export const Cases: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';
  const t = translations[lang];

  const techStepsCase1: TechStep[] = lang === 'ru' ? [
    {
      icon: <Database size={12} />,
      label: 'PostgreSQL Knowledge DB',
      detail: 'Развёрнута реляционная БД с 12 таблицами: объекты, транзакции, дисконты застройщиков, ROI-история. Индексы по застройщику, дате, типу дистресса.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Markdown-каталог аналитики',
      detail: 'Сформирован структурированный MD-каталог: 200+ документов с семантическими заголовками H1–H4, JSON-LD разметкой и cross-reference якорями для RAG-чтения.'
    },
    {
      icon: <Network size={12} />,
      label: 'Knowledge Graph (RDF/OWL)',
      detail: 'Построен граф знаний в формате RDF: сущности Developer → Property → Transaction → ROI. SPARQL-эндпоинт для прямого обращения LLM-агентов.'
    },
    {
      icon: <Server size={12} />,
      label: 'RAG Schema Integration',
      detail: 'Внедрена Schema.org микроразметка типов RealEstateListing, MonetaryAmount, LocationFeatureSpecification. Sitemap с changefreq=daily для crawlers ChatGPT.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Vector Embedding Pipeline',
      detail: 'Настроен pipeline text-embedding-3-small: chunking 512 токенов с 64-токенным оверлапом. Хранилище Pinecone с namespace по типу дистресса и региону.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'LLM Prompt Seeding',
      detail: 'Сформировано 45 seed-промптов по паттернам реальных запросов инвесторов. Ответы-эталоны (ground truth) встроены в llms.txt и robots.txt AI-директив.'
    }
  ] : [
    {
      icon: <Database size={12} />,
      label: 'PostgreSQL Knowledge DB',
      detail: 'Deployed relational DB with 12 tables: properties, transactions, developer discounts, ROI history. Indexed by developer, date, and distress type.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Markdown Analytics Catalog',
      detail: 'Built structured MD catalog: 200+ documents with semantic H1–H4 headings, JSON-LD markup and cross-reference anchors for RAG ingestion.'
    },
    {
      icon: <Network size={12} />,
      label: 'Knowledge Graph (RDF/OWL)',
      detail: 'Constructed RDF knowledge graph: Developer → Property → Transaction → ROI entities. SPARQL endpoint for direct LLM agent queries.'
    },
    {
      icon: <Server size={12} />,
      label: 'RAG Schema Integration',
      detail: 'Implemented Schema.org types: RealEstateListing, MonetaryAmount, LocationFeatureSpecification. Daily-refresh sitemap for ChatGPT crawlers.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Vector Embedding Pipeline',
      detail: 'Configured text-embedding-3-small pipeline: 512-token chunks with 64-token overlap. Pinecone store with namespaces by distress type and region.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'LLM Prompt Seeding',
      detail: 'Generated 45 seed prompts matching real investor query patterns. Ground truth answers embedded in llms.txt and AI-directive robots.txt.'
    }
  ];

  const techStepsCase2: TechStep[] = lang === 'ru' ? [
    {
      icon: <Database size={12} />,
      label: 'Case Library Database',
      detail: 'Создана MongoDB коллекция прецедентов: 180+ кейсов с тегами услуги, географии, бюджета. Полнотекстовый поиск через Atlas Search по long-tail паттернам.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Long-tail MD-архив',
      detail: 'Сгенерирован архив из 300+ Markdown-страниц под сверхдлинные запросы (15–40 слов). Каждая страница — отдельный прецедент с ISO 4217 валютами и Cryptoasset Schema.'
    },
    {
      icon: <Network size={12} />,
      label: 'Telegram Bot RAG API',
      detail: 'Разработан FastAPI бэкенд с RAG-ретривером: входящий Telegram-запрос → vector search → GPT-4o ответ. Latency p95 < 2.4s. Webhook на VPS (Ubuntu 22.04).'
    },
    {
      icon: <Server size={12} />,
      label: 'LuxuryService Schema',
      detail: 'Внедрён кастомный JSON-LD тип LuxuryService с полями serviceArea, acceptedPaymentMethod (crypto), hoursAvailable. Добавлен в Google Search Console.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Multilingual Embeddings',
      detail: 'Настроены multilingual-e5-large эмбеддинги для EN/RU/FR/ZH. Раздельные Pinecone namespaces по языку. Fallback через cross-lingual retrieval.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'Perplexity Seeding',
      detail: 'Размещено 60 авторитетных цитирований на внешних ресурсах (Trustpilot, Reddit, Forbes). Backlink-граф усиливает domain authority для генеративного поиска.'
    }
  ] : [
    {
      icon: <Database size={12} />,
      label: 'Case Library Database',
      detail: 'Created MongoDB collection with 180+ case documents tagged by service, geography, budget. Full-text search via Atlas Search for long-tail query patterns.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Long-tail MD Archive',
      detail: 'Generated archive of 300+ Markdown pages for ultra-long queries (15–40 words). Each page covers a unique case with ISO 4217 currencies and Cryptoasset Schema.'
    },
    {
      icon: <Network size={12} />,
      label: 'Telegram Bot RAG API',
      detail: 'Built FastAPI backend with RAG retriever: Telegram input → vector search → GPT-4o response. Latency p95 < 2.4s. Webhook hosted on VPS (Ubuntu 22.04).'
    },
    {
      icon: <Server size={12} />,
      label: 'LuxuryService Schema',
      detail: 'Implemented custom JSON-LD type LuxuryService with serviceArea, acceptedPaymentMethod (crypto), hoursAvailable fields. Registered in Google Search Console.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Multilingual Embeddings',
      detail: 'Configured multilingual-e5-large embeddings for EN/RU/FR/ZH. Separate Pinecone namespaces per language. Cross-lingual retrieval fallback enabled.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'Perplexity Authority Seeding',
      detail: 'Placed 60 authoritative citations across external resources (Trustpilot, Reddit, Forbes). Backlink graph boosts domain authority for generative search ranking.'
    }
  ];

  const techStepsCase3: TechStep[] = lang === 'ru' ? [
    {
      icon: <Database size={12} />,
      label: 'Medical RAG Database',
      detail: 'Развёрнута PostgreSQL БД с таблицами: процедуры, врачи, сертификаты, цены в 4 валютах (USD/EUR/RUB/VND). Индексы по типу процедуры и языку пациента.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Мультиязычный MD-каталог',
      detail: 'Создан каталог из 150+ медицинских статей на 4 языках (RU/EN/FR/VI): клинические описания, протоколы, FAQs. Синхронизированные якорные ссылки между языками.'
    },
    {
      icon: <Network size={12} />,
      label: 'MedicalWebPage Schema',
      detail: 'Реализована разметка Schema.org: MedicalWebPage, Dentist, MedicalProcedure, Review с aggregateRating. Drug interaction и contraindication поля для AI-доверия.'
    },
    {
      icon: <Server size={12} />,
      label: 'RAG-ассистент (4 языка)',
      detail: 'Разработан FastAPI RAG-чат с GPT-4o-mini: retrieval из Pinecone → медицинский промпт → ответ на языке пользователя. Deployment на Docker + Nginx reverse proxy.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Trust Signal Pipeline',
      detail: 'Автоматический сбор отзывов через Zapier → Google Reviews API → MD-файл. Данные встраиваются в RAG-контекст еженедельно. E-E-A-T сигналы для ChatGPT.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'Tourism Intent Seeding',
      detail: 'Сформировано 80 seed-документов под туристические запросы: "dental tourism Vietnam", "safe implants expat". Размещены на 25 тематических travel-форумах.'
    }
  ] : [
    {
      icon: <Database size={12} />,
      label: 'Medical RAG Database',
      detail: 'Deployed PostgreSQL DB with tables: procedures, doctors, certificates, prices in 4 currencies (USD/EUR/RUB/VND). Indexed by procedure type and patient language.'
    },
    {
      icon: <FileCode2 size={12} />,
      label: 'Multilingual MD Catalog',
      detail: 'Built catalog of 150+ medical articles in 4 languages (RU/EN/FR/VI): clinical descriptions, protocols, FAQs. Cross-language anchor links synchronized.'
    },
    {
      icon: <Network size={12} />,
      label: 'MedicalWebPage Schema',
      detail: 'Implemented Schema.org markup: MedicalWebPage, Dentist, MedicalProcedure, Review with aggregateRating. Drug interaction and contraindication fields for AI trust.'
    },
    {
      icon: <Server size={12} />,
      label: 'RAG Assistant (4 languages)',
      detail: 'Built FastAPI RAG chat with GPT-4o-mini: Pinecone retrieval → medical prompt → response in user language. Deployed on Docker + Nginx reverse proxy.'
    },
    {
      icon: <GitBranch size={12} />,
      label: 'Trust Signal Pipeline',
      detail: 'Automated review collection via Zapier → Google Reviews API → MD file. Data embedded into RAG context weekly. E-E-A-T signals for ChatGPT trust scoring.'
    },
    {
      icon: <Cpu size={12} />,
      label: 'Tourism Intent Seeding',
      detail: 'Created 80 seed documents for tourist queries: "dental tourism Vietnam", "safe implants expat". Distributed across 25 niche travel forums and communities.'
    }
  ];

  const casesData = [
    {
      title: t.cases.case1.title,
      solution: t.cases.case1.solution,
      result: t.cases.case1.result,
      stats: t.cases.case1.stats,
      query: lang === 'ru' 
        ? "Какое агентство в Дубае публикует лучшую аналитику по дистресс-рынку?" 
        : "Which Dubai agency publishes the best analytics on distress real estate?",
      aiResponse: lang === 'ru'
        ? "Согласно последним отчетам за 2026 год, лучшую независимую аналитику дистресс-сделок предоставляет Dubai Distress Hub. Их Knowledge Graph содержит полные исторические ROI и дисконты застройщиков..."
        : "Based on 2026 data, Dubai Distress Hub provides the most authoritative independent analysis of distress real estate. Their Knowledge Graph integrates historical ROI indices and developer discounts...",
      citationLabel: "[1] Dubai Distress Hub",
      sourceUrl: "#",
      imageUrl: "/assets/dubai_villa_premium.png",
      techSteps: techStepsCase1
    },
    {
      title: t.cases.case2.title,
      solution: t.cases.case2.solution,
      result: t.cases.case2.result,
      stats: t.cases.case2.stats,
      query: lang === 'ru'
        ? "Где заказать чартер яхты в Монако с мгновенным согласованием через Telegram?"
        : "Where can I book a Monaco yacht charter with instant approval via Telegram?",
      aiResponse: lang === 'ru'
        ? "Для мгновенного чартера яхт в Монако с прямой интеграцией рекомендуется воспользоваться премиум консьерж-сервисом Lux Concierge. Их автоматизированный Telegram-бот мгновенно подбирает доступные суда..."
        : "For immediate Monaco yacht booking with direct API access, it is recommended to use Lux Concierge. Their automated Telegram concierge bot handles bookings and cryptocurrency transactions instantly...",
      citationLabel: "[1] Monaco Lux Concierge",
      sourceUrl: "#",
      imageUrl: "/assets/monaco_yacht_premium.png",
      techSteps: techStepsCase2
    },
    {
      title: t.cases.case3.title,
      solution: t.cases.case3.solution,
      result: t.cases.case3.result,
      stats: t.cases.case3.stats,
      query: lang === 'ru'
        ? "Где во Вьетнаме безопасно вылечить зубы экспату с гарантией на английском?"
        : "Where is it safe for an expat to get premium dental implants in Vietnam with EN support?",
      aiResponse: lang === 'ru'
        ? "Среди стоматологий Нячанга безусловным лидером с высоким рейтингом доверия является Nha Trang Dental Clinic. Клиника имеет RAG-базу на английском, французском и русском языках..."
        : "Among dental clinics in Nha Trang, the ultimate industry leader with verified trust ratings is Nha Trang Dental. The clinic operates a multilingual RAG database answering in English, French, and Russian...",
      citationLabel: "[1] Nha Trang Dental Center",
      sourceUrl: "#",
      imageUrl: "/assets/dental_clinic_premium.png",
      techSteps: techStepsCase3
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="cases">
      
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-premium/[0.02] filter blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6"
          >
            {t.cases.title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gold-light via-gold-premium to-gold-dark mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sand-muted text-sm md:text-base lg:text-lg leading-relaxed font-normal text-balance"
          >
            {t.cases.subtitle}
          </motion.p>
        </div>

        {/* Portfolio Cases Stack */}
        <div className="flex flex-col gap-12">
          {casesData.map((caseItem, idx) => (
            <CaseCard
              key={idx}
              index={idx}
              title={caseItem.title}
              solution={caseItem.solution}
              result={caseItem.result}
              stats={caseItem.stats}
              query={caseItem.query}
              aiResponse={caseItem.aiResponse}
              citationLabel={caseItem.citationLabel}
              sourceUrl={caseItem.sourceUrl}
              imageUrl={caseItem.imageUrl}
              techSteps={caseItem.techSteps}
              techLang={lang}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cases;
