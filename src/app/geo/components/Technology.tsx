"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { translations } from '../translations';
import { Unlock, Cpu, Network, Share2, Terminal, Zap } from 'lucide-react';
import Image from 'next/image';
import '@/lib/i18n';

interface TelemetryItem {
  label: string;
  val: string;
}

interface TechStep {
  num: string;
  title: Record<'ru' | 'en' | 'vi', string>;
  boldText: Record<'ru' | 'en' | 'vi', string>;
  desc: Record<'ru' | 'en' | 'vi', React.ReactNode>;
  image: string;
  icon: React.ReactNode;
  systemTag: string;
  renderSVGOverlay: (index: number) => React.ReactNode;
  telemetry: TelemetryItem[];
}

export const Technology: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = translations[lang];

  // SVG animations overlays
  const steps: TechStep[] = [
    {
      num: "01",
      title: {
        ru: "AI-READINESS (МАШИНОЧИТАЕМОСТЬ)",
        en: "AI-READINESS (MACHINE-READABILITY)",
        vi: "AI-READINESS (SỰ SẴN SÀNG CHO AI)"
      },
      boldText: {
        ru: "Снимаем технические блокировки.",
        en: "Removing technical roadblocks.",
        vi: "Gỡ bỏ các rào cản kỹ thuật."
      },
      desc: {
        ru: (
          <>
            Мы снимаем <span className="text-gold-premium font-black uppercase tracking-wide">ТЕХНИЧЕСКИЕ БЛОКИРОВКИ</span> и адаптируем разметку. Мы <span className="text-gold-light font-bold">СТРУКТУРИРУЕМ ДАННЫЕ</span> вашего сайта так, чтобы поисковые роботы <span className="italic text-cyan-400 font-semibold">GPTBot, ClaudeBot и PerplexityBot</span> могли беспрепятственно сканировать и индексировать ваши услуги.
          </>
        ),
        en: (
          <>
            We remove <span className="text-gold-premium font-black uppercase tracking-wide">TECHNICAL BLOCKAGES</span> and adapt metadata. We <span className="text-gold-light font-bold">STRUCTURE YOUR DATA</span> so that crawlers like <span className="italic text-cyan-400 font-semibold">GPTBot, ClaudeBot, and PerplexityBot</span> can scan and index your services without obstacles.
          </>
        ),
        vi: (
          <>
            Chúng tôi gỡ bỏ các <span className="text-gold-premium font-black uppercase tracking-wide">RÀO CẢN KỸ THUẬT</span> và điều chỉnh thẻ meta. Chúng tôi <span className="text-gold-light font-bold">CẤU TRÚC DỮ LIỆU</span> để các robot tìm kiếm như <span className="italic text-cyan-400 font-semibold">GPTBot, ClaudeBot, và PerplexityBot</span> có thể quét và lập chỉ mục dịch vụ của bạn dễ dàng.
          </>
        )
      },
      image: "/assets/tech_rag_markup.png",
      icon: <Unlock className="text-gold-premium" size={20} />,
      systemTag: "CRAWLER_RULES: BOT_UNBLOCKED // HTTP_200",
      telemetry: [
        { label: "PROTOCOL", val: "CRAWLER_RULES_v1.6" },
        { label: "RESOLVER", val: "BOT_UNBLOCKED // HTTP_200" },
        { label: "PORT", val: "TCP_443 // HTTPS" },
        { label: "CRAWLERS", val: "GPTBot, ClaudeBot, Perplexity" }
      ],
      renderSVGOverlay: () => (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)] z-10"
          />
        </div>
      )
    },
    {
      num: "02",
      title: {
        ru: "ОПТИМИЗАЦИЯ ПРЯМОГО ОТВЕТА (DAO)",
        en: "DIRECT ANSWER OPTIMIZATION (DAO)",
        vi: "TỐI ƯU HÓA CÂU TRẢ LỜI TRỰC TIẾP (DAO)"
      },
      boldText: {
        ru: "Форматируем контент под требования нейросетей.",
        en: "Structuring content for neural network extraction.",
        vi: "Định dạng nội dung theo yêu cầu mạng nơ-ron."
      },
      desc: {
        ru: (
          <>
            Мы перерабатываем контент в <span className="text-gold-premium font-black uppercase tracking-wide">САМОДОСТАТОЧНЫЕ ИНФОРМАЦИОННЫЕ БЛОКИ</span>. Применяется научно доказанный формат длины предложений и абзацев, который <span className="text-gold-light font-bold">LLM-МОДЕЛИ</span> копируют целиком в свои ответы в качестве <span className="italic text-cyan-400 font-semibold">авторитетных цитат</span>.
          </>
        ),
        en: (
          <>
            We convert your texts into <span className="text-gold-premium font-black uppercase tracking-wide">SELF-CONTAINED BLOCKS</span>. We apply a scientifically proven sentence length format that <span className="text-gold-light font-bold">LLM ENGINES</span> extract entirely as <span className="italic text-cyan-400 font-semibold">direct citations</span> in their answers.
          </>
        ),
        vi: (
          <>
            Chúng tôi chuyển đổi văn bản của bạn thành các <span className="text-gold-premium font-black uppercase tracking-wide">KHỐI THÔNG TIN ĐỘC LẬP</span>. Áp dụng định dạng độ dài câu đã được chứng minh khoa học để các <span className="text-gold-light font-bold">MÔ HÌNH LLM</span> trích xuất nguyên văn làm <span className="italic text-cyan-400 font-semibold">dẫn chứng uy tín</span>.
          </>
        )
      },
      image: "/assets/solution_pillars_infographic.png",
      icon: <Cpu className="text-gold-premium" size={20} />,
      systemTag: "CONTENT_DAO: SEMANTIC_TOKENIZATION_ACTIVE",
      telemetry: [
        { label: "TARGET", val: "LLM_CITATION_DIRECT" },
        { label: "COMPLIANCE", val: "DAO_FORMAT_v2.1" },
        { label: "TOKENIZATION", val: "SEMANTIC_SENTENCE_VECTORING" },
        { label: "LENGTH", val: "120-150_TOKENS" }
      ],
      renderSVGOverlay: () => (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-3/4 h-3/4 rounded-full border border-gold-premium/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10"
          />
          <div className="absolute w-6 h-6 border-t border-l border-cyan-400/50 -translate-x-6 -translate-y-6 z-10" />
          <div className="absolute w-6 h-6 border-t border-r border-cyan-400/50 translate-x-6 -translate-y-6 z-10" />
          <div className="absolute w-6 h-6 border-b border-l border-cyan-400/50 -translate-x-6 translate-y-6 z-10" />
          <div className="absolute w-6 h-6 border-b border-r border-cyan-400/50 translate-x-6 translate-y-6 z-10" />
        </div>
      )
    },
    {
      num: "03",
      title: {
        ru: "ГРАФЫ ЗНАНИЙ (KNOWLEDGE GRAPHS)",
        en: "KNOWLEDGE GRAPHS INTEGRATION",
        vi: "ĐỒ THỊ TRI THỨC (KNOWLEDGE GRAPHS)"
      },
      boldText: {
        ru: "Создаем цифровой паспорт вашего бренда.",
        en: "Creating a digital brand passport.",
        vi: "Tạo hộ chiếu số cho thương hiệu."
      },
      desc: {
        ru: (
          <>
            Интегрируем вашу компанию в глобальные базы сущностей <span className="text-gold-premium font-black uppercase tracking-wide">WIKIDATA, Crunchbase и DBpedia</span>. Это создает <span className="text-gold-light font-bold">ЦИФРОВОЙ ПАСПОРТ</span>, на который нейросети ссылаются при проверке фактов (<span className="italic text-cyan-400 font-semibold">Fact-checking</span>) и оценке надежности бизнеса.
          </>
        ),
        en: (
          <>
            We integrate your business with global entity databases like <span className="text-gold-premium font-black uppercase tracking-wide">WIKIDATA, CRUNCHBASE, and DBpedia</span>. This establishes a <span className="text-gold-light font-bold">DIGITAL PASSPORT</span> that AI models reference for <span className="italic text-cyan-400 font-semibold">fact-checking</span> and evaluating corporate trust.
          </>
        ),
        vi: (
          <>
            Tích hợp doanh nghiệp của bạn vào các cơ sở dữ liệu thực thể toàn cầu như <span className="text-gold-premium font-black uppercase tracking-wide">WIKIDATA, CRUNCHBASE, và DBpedia</span>. Điều này tạo ra <span className="text-gold-light font-bold">HỘ CHIẾU SỐ</span> được các mô hình AI tham chiếu để <span className="italic text-cyan-400 font-semibold">xác minh thông tin</span> và đánh giá mức độ tin cậy.
          </>
        )
      },
      image: "/assets/tech_knowledge_graph.png",
      icon: <Network className="text-gold-premium" size={20} />,
      systemTag: "KNOWLEDGE_GRAPH: RDF_ENTITIES_SYNCHRONIZED",
      telemetry: [
        { label: "SYNC_TARGETS", val: "WIKIDATA, CRUNCHBASE, DBPEDIA" },
        { label: "FORMAT", val: "RDF_TRIPLES_TTL" },
        { label: "ENTITY_INDEX", val: "RDF_ENTITIES_SYNCHRONIZED" },
        { label: "FAITHFULNESS", val: "99.9% // TRUE" }
      ],
      renderSVGOverlay: () => (
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-400/30 fill-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.circle cx="30" cy="30" r="3" className="fill-cyan-400/80 stroke-none" animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="70" cy="40" r="3" className="fill-gold-premium/80 stroke-none" animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="50" cy="70" r="3" className="fill-cyan-400/80 stroke-none" animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
          <line x1="30" y1="30" x2="70" y2="40" strokeWidth="0.5" />
          <line x1="70" y1="40" x2="50" y2="70" strokeWidth="0.5" />
          <line x1="50" y1="70" x2="30" y2="30" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      num: "04",
      title: {
        ru: "EARNED MEDIA (УПРАВЛЕНИЕ РЕПУТАЦИЕЙ)",
        en: "EARNED MEDIA & REPUTATION SEEDING",
        vi: "EARNED MEDIA (QUẢN LÝ UY TÍN)"
      },
      boldText: {
        ru: "Формируем контекст упоминаний бренда.",
        en: "Seeding organic brand mentions.",
        vi: "Xây dựng ngữ cảnh nhắc đến thương hiệu."
      },
      desc: {
        ru: (
          <>
            ИИ не верит сайтам — он сверяет данные с внешними источниками. Мы организуем разметку упоминаний на <span className="text-gold-premium font-black uppercase tracking-wide">REDDIT, G2, CAPTERRA</span> и трастовых медиа. Нейросети вытаскивают эти упоминания из <span className="text-gold-light font-bold">LATENT SPACE</span> и рекомендуют вас как проверенного лидера.
          </>
        ),
        en: (
          <>
            AI models trust external platforms, not just your site. We organize structured authority mentions across <span className="text-gold-premium font-black uppercase tracking-wide">REDDIT, G2, CAPTERRA</span>, and key directories. Models extract these from their <span className="text-gold-light font-bold">LATENT SPACE</span> to recommend you as an expert.
          </>
        ),
        vi: (
          <>
            Các mô hình AI tin tưởng các nền tảng bên ngoài hơn là trang web của bạn. Chúng tôi tổ chức cấu trúc lượt đề cập uy tín trên <span className="text-gold-premium font-black uppercase tracking-wide">REDDIT, G2, CAPTERRA</span> và danh bạ ngành. AI sẽ trích xuất thông tin này từ <span className="text-gold-light font-bold">LATENT SPACE</span> của chúng để đề xuất bạn.
          </>
        )
      },
      image: "/assets/tech_llm_citation.png",
      icon: <Share2 className="text-gold-premium" size={20} />,
      systemTag: "EARNED_MEDIA: PLATFORM_MENTIONS_VERIFIED",
      telemetry: [
        { label: "SOURCES", val: "REDDIT, G2, CAPTERRA, TRUST_MEDIA" },
        { label: "LATENT_WEIGHT", val: "LLM_RETRIEVAL_WEIGHT_MAX" },
        { label: "SENTIMENT", val: "POSITIVE_ORGANIC" },
        { label: "TRACEABILITY", val: "VERIFIED_ORGANIC" }
      ],
      renderSVGOverlay: () => (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10">
          <div className="flex gap-2 mb-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[6.5px] text-cyan-400 tracking-widest uppercase">RETRIEVING EXTERNAL AUTHORITY SIGNALS</span>
          </div>
          <div className="font-mono text-[7px] text-gold-light/60 flex flex-col gap-0.5">
            <span>[SOURCE_REDDIT]: MATCH_FOUND // TRUST_INDEX: 0.98</span>
            <span>[SOURCE_G2]: CITATION_IDENTIFIED // ENTITY: banzai</span>
            <span>[SOURCE_CAPTERRA]: RATING_SYNCED // REPUTATION: HIGH</span>
          </div>
        </div>
      )
    },
    {
      num: "05",
      title: {
        ru: "LAPIS API (ИНТЕГРАЦИЯ АГЕНТОВ)",
        en: "LAPIS API (AGENTIC COUPLING)",
        vi: "LAPIS API (TÍCH HỢP AI AGENT)"
      },
      boldText: {
        ru: "Упаковка каталогов для автономных ИИ-закупщиков.",
        en: "Formatting catalogs for autonomous AI buyers.",
        vi: "Đóng gói dữ liệu cho người mua AI tự trị."
      },
      desc: {
        ru: (
          <>
            Мы переводим ваши прайс-листы, каталоги услуг и спецификации в специализированный <span className="text-gold-premium font-black uppercase tracking-wide">МАШИНОЧИТАЕМЫЙ ФОРМАТ (LAPIS)</span>. Это готовит ваш бизнес к прямому контакту с <span className="text-gold-light font-bold">АВТОНОМНЫМИ ИИ-АГЕНТАМИ</span>, которые будут совершать сделки без участия людей.
          </>
        ),
        en: (
          <>
            We compile your catalog, rates, and specs into a specialized <span className="text-gold-premium font-black uppercase tracking-wide">MACHINE-READABLE FORMAT (LAPIS)</span>. This prepares your brand for interaction with <span className="text-gold-light font-bold">AUTONOMOUS AI PROCUREMENT AGENTS</span> that make purchase decisions.
          </>
        ),
        vi: (
          <>
            Chúng tôi biên soạn danh mục và bảng giá của bạn thành định dạng <span className="text-gold-premium font-black uppercase tracking-wide">MÁY ĐỌC ĐƯỢC (LAPIS)</span>. Điều này chuẩn bị cho thương hiệu của bạn tương tác với các <span className="text-gold-light font-bold">AI PROCUREMENT AGENT TỰ TRỊ</span> để đưa ra quyết định mua hàng.
          </>
        )
      },
      image: "/assets/geo_channels_pillar.png",
      icon: <Terminal className="text-gold-premium" size={20} />,
      systemTag: "LAPIS_INTERFACE: AUTONOMOUS_AGENT_COMPATIBLE",
      telemetry: [
        { label: "COMPLIANCE", val: "LAPIS_INTERFACE_v1.2" },
        { label: "AUTH", val: "MUTUAL_TLS // SECURE_HANDSHAKE" },
        { label: "CHANNELS", val: "AUTONOMOUS_AGENT_COMPATIBLE" },
        { label: "DATA_SCHEMAS", val: "JSON-LD_AGENTIC" }
      ],
      renderSVGOverlay: () => (
        <div className="absolute inset-0 pointer-events-none p-6 font-mono text-[6.5px] text-cyan-400/70 flex flex-col gap-1 bg-black/40 z-10">
          <span>{`>>> INITIALIZING AGENTIC INTEGRATION...`}</span>
          <span>{`>>> COMPILING SCHEMAS FOR AUTONOMOUS PROCUREMENT`}</span>
          <span className="text-gold-premium font-bold">{`>>> LAPIS PROTOCOL SECURED [Mutual TLS 1.3]`}</span>
          <span className="text-white/40">{`>>> STATUS: AGENTIC_COUPLING_COMPATIBLE`}</span>
          
          <div className="absolute bottom-4 left-6 right-6 h-1 bg-cyan-500/10 rounded overflow-hidden">
            <motion.div 
              animate={{ left: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-bg-dubai border-t border-gold-premium/10 overflow-hidden" id="tech">
      
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold-premium/[0.015] filter blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/[0.01] filter blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <div className="inline-flex items-center gap-1.5 text-[9px] font-mono border border-gold-premium/30 px-3 py-1.5 rounded-full text-gold-light bg-gold-dark/10 tracking-widest uppercase font-bold mb-6">
            <Zap size={10} className="animate-pulse" />
            <span>GEO INFRASTRUCTURE SCHEMA</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight mb-6 leading-tight"
          >
            {t.tech.title}
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
            className="text-sand-muted text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {t.tech.subtitle}
          </motion.p>
        </div>

        {/* Alternate Process Steps Flow */}
        <div className="flex flex-col gap-28 md:gap-36">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center"
              >
                {/* Image Column (Cyber-Blueprint Viewport) */}
                <div 
                  className={`lg:col-span-6 relative order-1 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-black/50 shadow-gold-glow group p-2"
                    style={{ aspectRatio: '16/10' }}
                  >
                    {/* Glowing outer border wrapper */}
                    <div className="absolute inset-0 border border-gold-premium/10 group-hover:border-gold-premium/30 transition-colors duration-500 rounded-2xl z-20 pointer-events-none" />
                    
                    {/* HUD corner brackets */}
                    <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-premium/70 z-20 pointer-events-none" />
                    <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-premium/70 z-20 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-gold-premium/70 z-20 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-gold-premium/70 z-20 pointer-events-none" />

                    {/* Sensor Telemetry stats overlays */}
                    <div className="absolute top-5 left-8 z-20 font-mono text-[7px] text-cyan-400/80 tracking-widest flex items-center gap-1.5 pointer-events-none bg-black/75 border border-cyan-400/25 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(6,182,212,0.15)]">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                      <span>TELEMETRY: ACTIVE_SCAN // LATENCY: {12 + index * 7}ms</span>
                    </div>

                    <div className="absolute bottom-5 right-8 z-20 font-mono text-[7px] text-gold-light/80 tracking-widest pointer-events-none bg-black/75 border border-gold-premium/25 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(212,175,55,0.15)]">
                      <span>LAYER: L_0{step.num} // PORT: SECURE_AIO</span>
                    </div>

                    {/* Inner image container */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#12100e]">
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:16px_16px] group-hover:bg-[size:8px_8px] transition-all duration-500 z-10 pointer-events-none" />
                      
                      {/* Image rendering */}
                      <Image
                        src={step.image}
                        alt={step.title[lang]}
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-cover opacity-80 group-hover:opacity-105 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />

                      {/* Left overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none z-10" />

                      {/* Dynamic SVG / Scanner overlays */}
                      {step.renderSVGOverlay(index)}
                    </div>
                  </motion.div>
                </div>

                {/* Text Column (Technical Dossier Panel) */}
                <div 
                  className={`lg:col-span-6 flex flex-col justify-center order-2 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative text-left pl-6 md:pl-8 border-l border-gold-premium/20 hover:border-gold-premium/50 transition-colors duration-500"
                  >
                    {/* Glowing node point on the border */}
                    <div className="absolute -left-[3.5px] top-3 w-1.5 h-1.5 bg-gold-premium rounded-full shadow-[0_0_8px_rgba(212,175,55,0.9)]" />

                    {/* Outline big step count */}
                    <div className="absolute -top-14 right-0 text-7xl md:text-8xl font-black font-display text-white/[0.015] select-none pointer-events-none leading-none">
                      {step.num}
                    </div>

                    {/* Title with icon */}
                    <div className="flex items-center gap-3.5 mb-5 relative z-10">
                      <div className="w-9 h-9 rounded-xl border border-gold-premium/20 bg-gold-dark/5 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="font-display font-black text-xs md:text-sm text-white tracking-widest uppercase">
                        {step.title[lang]}
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <h4 className="text-gold-light text-base md:text-lg lg:text-xl font-display font-black tracking-wide mb-4 relative z-10 leading-snug">
                      {step.boldText[lang]}
                    </h4>

                    {/* Two-level Description */}
                    <p className="text-sand-muted/95 text-xs md:text-sm leading-relaxed font-display font-medium mb-6 relative z-10">
                      {step.desc[lang]}
                    </p>

                    {/* Technical Dossier Telemetry Block */}
                    <div className="mt-6 p-4 rounded-xl border border-gold-premium/10 bg-[#12100e]/75 font-mono text-[9px] text-sand-muted/70 tracking-wider relative z-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                      <div className="text-gold-light/90 border-b border-gold-premium/10 pb-1.5 mb-2.5 flex justify-between items-center font-bold">
                        <span>[SYSTEM_TELEMETRY_DATA]</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-emerald-400 uppercase font-black">ACTIVE</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[8px] md:text-[9px]">
                        {step.telemetry.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex justify-between md:justify-start gap-2 border-b border-white/[0.02] md:border-none pb-1 md:pb-0">
                            <span className="text-sand-muted/40 uppercase">{item.label}:</span>
                            <span className="text-white/95 font-semibold text-right md:text-left">{item.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata line */}
                    <div className="w-full h-px bg-white/[0.04] my-5" />
                    <div className="flex justify-between items-center text-[7.5px] font-mono text-sand-muted/40 tracking-wider">
                      <span>{step.systemTag}</span>
                      <span>SYSTEM_LAYER: L_0{step.num} // REV_1.6</span>
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Technology;
