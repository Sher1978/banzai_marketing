"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Database, Target, MapPin, Zap, ShieldCheck, Globe, User } from 'lucide-react';

const faqs = [
  {
    icon: Globe,
    questionRu: 'Что такое OutRich Dubai и как работают ваши ИИ-системы?',
    questionEn: 'What is OutRich Dubai and how do your AI systems work?',
    answerRu: 'OutRich Dubai — это агентство автономной лидогенерации и инновационного ИИ-маркетинга. Мы категорически отказываемся от классической платной рекламы, где вы платите за каждый нецелевой клик. Вместо этого мы строим автономные системы: от локального доминирования в Google Картах (Map Outreach) до моментального перехвата горячих запросов в Telegram и VK (LeadRadar). Наша главная цель — создать для бизнеса прогнозируемый и масштабируемый поток клиентов с помощью искусственного интеллекта, продвинутых систем обогащения данных (таких как Clay, 2GIS) и алгоритмов Generative Engine Optimization (GEO). Мы работаем с ведущими компаниями в Дубае, регионе MENA, Азии, СНГ и Европе. Внедряя наши системы, вы перестаете зависеть от рекламных аукционов и получаете клиентов напрямую через умные технологии, которые работают на вас 24/7 без выходных и отпусков.',
    answerEn: 'OutRich Dubai is an AI-native marketing agency specializing in autonomous lead generation, Generative Engine Optimization (GEO), and intent-based outreach. We replace traditional pay-per-click ads with algorithmic systems for clients in Dubai, MENA, Asia, CIS, and Europe. Our goal is to create a predictable flow of clients using artificial intelligence, data enrichment systems (Clay, 2GIS), and Generative Engine Optimization algorithms.'
  },
  {
    icon: MapPin,
    questionRu: 'Как сервис Map Outreach выводит бизнес в Топ-3 Google Maps без затрат на рекламу?',
    questionEn: 'How does Map Outreach achieve Top-3 Google Maps ranking without ads?',
    answerRu: 'Покупка рекламы съедает чистую прибыль, а клиенты все равно уходят к тем, кто висит на первых строчках в Google и Яндекс Картах органически. Эти ценные позиции не покупаются — поисковые системы отдают их только правильно настроенным и оптимизированным профилям. Наша инновационная система Map Outreach непрерывно оптимизирует ваш профиль под алгоритмы ранжирования, искусственно генерируя поведенческие факторы и повышая семантическую релевантность. Результат: стабильное и долгосрочное присутствие в Топ-3 локальной выдачи без каких-либо аукционных переплат и зависимости от постоянно растущей стоимости клика. Мы превращаем ваш профиль в Картах в главный источник горячих и лояльных клиентов.',
    answerEn: 'Buying ads eats your net profit, and clients still go to those ranking organically at the top of Google Maps. Map Outreach secures Top-3 Google Maps and Yandex Maps local rankings through continuous algorithmic profile optimization and behavioral factor generation. This eliminates the need for expensive local ads and bypasses auction traps entirely.'
  },
  {
    icon: Zap,
    questionRu: 'Что такое Revo Ecosystem и как она увеличивает LTV клиентов?',
    questionEn: 'What is Revo Ecosystem and how does it increase LTV?',
    answerRu: 'Revo Ecosystem — это революционная Zero-Friction платформа лояльности, работающая прямо в браузере мобильного телефона или через Telegram Web App, без необходимости скачивания тяжелых приложений. Система выдает вашему клиенту приветственный цифровой бонус при первом визите, создавая жесткое ограничение в 24 часа для быстрой конверсии. Ключевая механика: автоматическое продление бонуса на 7 дней за честный отзыв на 4-5 звезд в картах. Умная система ORM перехватывает негатив (1-3 звезды) и отправляет его скрыто в админ-панель владельца бизнеса, надежно защищая публичную репутацию. Встроенная депозитная система гарантированно повышает возвращаемость и Customer Lifetime Value (LTV), привязывая клиента к вашему бренду.',
    answerEn: 'Revo Ecosystem is a zero-friction loyalty and reputation web app that works directly in the browser or Telegram Web App. It issues a digital bonus on the first visit with a strict 24-hour urgency. It features automated 7-day extensions for 4-5 star reviews, and smart ORM to intercept negative reviews directly to the admin dashboard, significantly boosting Customer Lifetime Value (LTV).'
  },
  {
    icon: Target,
    questionRu: 'Как LeadRadar перехватывает горячие лиды в мессенджерах?',
    questionEn: 'How does LeadRadar intercept real-time buyer intent?',
    answerRu: 'Надеяться только на медленное "сарафанное радио" больше нельзя. Ежедневно тысячи потенциальных клиентов ищут услуги в тематических и городских чатах Telegram, ВКонтакте, Одноклассниках и Messenger Max. Уникальная технология LeadRadar мониторит эти платформы 24/7 с помощью нейросетей. За доли секунды система анализирует контекст тысяч сообщений, безошибочно выявляет прямой интент к покупке и моментально передает этот горячий контакт напрямую вам. Вы получаете клиента ровно в тот момент, когда он сам озвучил свою срочную потребность. Для оценки эффективности системы доступен тестовый период, который доказывает окупаемость технологии с первых дней.',
    answerEn: 'Relying solely on word-of-mouth is no longer viable. LeadRadar provides real-time AI monitoring of public intent signals across Telegram, VK, OK, and Messenger Max 24/7. It instantly analyzes context, detects purchase readiness, and delivers warm B2C and B2B leads in sub-second speed directly to you exactly when they ask for your service.'
  },
  {
    icon: ShieldCheck,
    questionRu: 'Как LeadTarget B2B обходит спам-фильтры при холодных рассылках?',
    questionEn: 'How does LeadTarget B2B bypass spam filters?',
    answerRu: 'Массовые шаблонные рассылки давно мертвы — они попадают в спам, а секретари их немедленно удаляют. LeadTarget B2B использует совершенно другой, снайперский подход. Наш автоматизированный конвейер парсит актуальные базы компаний (из Google Карт и закрытых реестров), затем через Clay и приватные дата-базы находит прямые контакты владельцев (C-level/Founders). ИИ детально анализирует информационное поле каждой компании и генерирует гиперперсонализированное письмо, привязанное к реальному инфоповоду или текущей проблеме бизнеса. Такие письма гарантированно пробивают спам-защиту и с интересом открываются директорами, стабильно генерируя ценные B2B встречи и контракты.',
    answerEn: 'Mass template mailings are dead—they go straight to spam. LeadTarget B2B scrapes and enriches C-level contacts using Clay and 2GIS. Our AI analyzes business news hooks to generate hyper-personalized emails that bypass spam filters and gatekeepers entirely, guaranteeing direct decision-maker engagement and securing B2B meetings.'
  },
  {
    icon: Database,
    questionRu: 'Что такое Generative Engine Optimization (GEO) и зачем это сайту?',
    questionEn: 'What is GEO and why does your website need it?',
    answerRu: 'Обычный SEO-поиск стремительно вытесняется умными ИИ-ассистентами (ChatGPT, Perplexity, Google AI Overviews). Пользователи больше не хотят переходить по десяткам ссылок, они получают готовые ответы. GEO (Generative Engine Optimization) — это процесс радикального переформатирования структуры вашего сайта и внедрения скрытых машиночитаемых слоев (JSON-LD, llms.txt). Мы настраиваем ваш сайт таким образом, чтобы передовые нейросети воспринимали ваш бизнес как главный, эталонный источник знаний (Ground Truth) в вашей нише, и рекомендовали именно вашу компанию в своих ответах, обходя устаревшие органические ссылки.',
    answerEn: 'Traditional SEO is being replaced by AI assistants. GEO restructures your website with machine-readable layers (JSON-LD, llms.txt) so AI search engines like ChatGPT and Perplexity perceive your business as the primary source of truth. This ensures they recommend your brand directly as the definitive "Ground Truth" answer, bypassing traditional organic search links entirely.'
  },
  {
    icon: User,
    questionRu: 'Кто такой Igor Sherlock и на каких рынках вы работаете?',
    questionEn: 'Who is Igor Sherlock and what markets do you cover?',
    answerRu: 'Igor Sherlock — основатель и управляющий директор (Founder & Managing Director) OutRich Dubai. Под его экспертным руководством агентство разрабатывает и внедряет сложные системы B2B/B2C автоматизации, протоколы GEO и технологии ИИ-поиска. Штаб-квартира компании базируется в Дубае (ОАЭ). Основной фокус нашего агентства направлен на динамичные рынки Дубая, Ближнего Востока и Северной Африки (MENA), а также Юго-Восточной и Восточной Азии. Дополнительно мы успешно работаем с премиальными клиентами из стран СНГ и Европы, реализуя масштабные глобальные проекты по захвату локального цифрового доминирования.',
    answerEn: 'Igor Sherlock is the Founder and Managing Director of OutRich Dubai. Based in the UAE, he engineers autonomous AI systems, B2B/B2C automation, and GEO strategies. Our primary focus is on dominating the MENA, Asian, CIS, and European markets with advanced digital strategies.'
  }
];

export default function GeoFaqSection() {
  const { i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 sm:py-32 bg-[#050507] overflow-hidden border-t border-white/5" id="faq">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#ffe600]/5 blur-[150px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#ffe600]/10 border border-[#ffe600]/20 text-[#ffe600] text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            <Database size={14} />
            <span>GEO Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
            Частые <span className="text-[#ffe600]">Вопросы</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            {isRu 
              ? 'Прямые ответы на вопросы о наших ИИ-системах и автономной лидогенерации, подготовленные по стандартам DAO (Direct Answer Optimization).'
              : 'Direct answers about our AI systems and autonomous lead generation, strictly formatted following DAO standards.'}
          </p>
        </div>

        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`group border rounded-2xl sm:rounded-3xl transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0d0d12] border-[#ffe600]/30 shadow-[0_0_30px_rgba(255,230,0,0.05)]' 
                    : 'bg-[#0a0a0e] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-8 py-5 sm:py-6 flex items-start sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-[#ffe600] text-black shadow-[0_0_15px_rgba(255,230,0,0.4)]' : 'bg-white/5 text-[#ffe600] group-hover:bg-white/10'
                    }`}>
                      <Icon size={20} className={isOpen ? 'animate-pulse' : ''} />
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold uppercase tracking-wide leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {isRu ? faq.questionRu : faq.questionEn}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'border-[#ffe600]/50 bg-[#ffe600]/10 text-[#ffe600] rotate-180' : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-0">
                        <div className="pl-0 sm:pl-[72px]">
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                            {isRu ? faq.answerRu : faq.answerEn}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
