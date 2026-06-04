"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowLeft, ShieldCheck, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import '@/lib/i18n';

const THANK_YOU_TEXT = {
  ru: {
    title: "ВЫДАЧА УСПЕШНО НАСТРОЕНА",
    subtitle: "Протокол аудита запущен // Шаг 02",
    description: "Ваши контактные данные зафиксированы в базе данных BanzAI marketing. Наш специалист уже начал формирование полного отчета по ИИ-видимости вашего бренда.",
    stepsTitle: "ЧТО ПРОИСХОДИТ ДАЛЬШЕ?",
    steps: [
      {
        icon: <ShieldCheck className="text-gold-premium" size={16} />,
        title: "Технический RAG-анализ",
        desc: "Анализируем Schema.org сущности, файлы robots.txt и машиночитаемый профиль llms.txt вашего сайта."
      },
      {
        icon: <Mail className="text-cyan-400" size={16} />,
        title: "Генерация отчета и промпт-карты",
        desc: "Составляем детальную семантическую карту упоминаний и отправляем PDF-отчет на ваш email / мессенджер."
      },
      {
        icon: <Calendar className="text-gold-light" size={16} />,
        title: "Связь со специалистом",
        desc: "Свяжемся с вами в течение 24 часов для презентации персональной GEO-стратегии внедрения."
      }
    ],
    backBtn: "Вернуться на главную GEO"
  },
  en: {
    title: "GEO PROTOCOL INITIALIZED",
    subtitle: "Audit Protocol Queue // Stage 02",
    description: "Your contact details have been registered in the BanzAI marketing database. Our system is compiling your comprehensive brand AI-search visibility report.",
    stepsTitle: "WHAT HAPPENS NEXT?",
    steps: [
      {
        icon: <ShieldCheck className="text-gold-premium" size={16} />,
        title: "Technical RAG Audit",
        desc: "Evaluating site Schema.org entities, robots.txt directives, and machine-readable llms.txt file structures."
      },
      {
        icon: <Mail className="text-cyan-400" size={16} />,
        title: "PDF Dispatch & Prompt Maps",
        desc: "Compiling a detailed semantic brand mention index and delivering a comprehensive report to your contact address."
      },
      {
        icon: <Calendar className="text-gold-light" size={16} />,
        title: "Consultation Call",
        desc: "A GEO expert will contact you within 24 hours to present your custom search engine integration path."
      }
    ],
    backBtn: "Return to GEO Hub"
  },
  vi: {
    title: "KHỞI TẠO TIẾN TRÌNH GEO THÀNH CÔNG",
    subtitle: "Hàng đợi kiểm tra GEO // Bước 02",
    description: "Thông tin liên hệ của bạn đã được ghi nhận trong cơ sở dữ liệu BanzAI marketing. Chuyên gia của chúng tôi đang bắt đầu tạo báo cáo chi tiết về mức độ hiển thị AI của thương hiệu.",
    stepsTitle: "ĐIỀU GÌ SẼ XẢY RA TIẾP THEO?",
    steps: [
      {
        icon: <ShieldCheck className="text-gold-premium" size={16} />,
        title: "Kiểm tra RAG Kỹ thuật",
        desc: "Phân tích cấu trúc thực thể Schema.org, tệp robots.txt và tệp cấu trúc máy đọc llms.txt trên trang web."
      },
      {
        icon: <Mail className="text-cyan-400" size={16} />,
        title: "Gửi báo cáo PDF & Bản đồ Prompt",
        desc: "Biên soạn bản đồ ngữ nghĩa chi tiết và gửi báo cáo PDF trực tiếp đến địa chỉ liên hệ của bạn."
      },
      {
        icon: <Calendar className="text-gold-light" size={16} />,
        title: "Liên hệ tư vấn",
        desc: "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để trình bày chiến lược GEO cá nhân hóa cho doanh nghiệp."
      }
    ],
    backBtn: "Quay lại trang GEO"
  }
};

export default function ThankYouPage() {
  const { i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : i18n.language === 'vi' ? 'vi' : 'en') as 'ru' | 'en' | 'vi';
  const t = THANK_YOU_TEXT[lang];

  useEffect(() => {
    document.title = lang === 'ru'
      ? "Заявка принята! // BanzAI marketing"
      : lang === 'vi'
      ? "Đăng ký thành công! // BanzAI marketing"
      : "Application Received! // BanzAI marketing";
  }, [lang]);

  return (
    <main className="min-h-screen w-full relative bg-bg-dubai text-white font-display antialiased flex items-center justify-center p-4 md:p-6 overflow-hidden">
      
      {/* Background Matrix-Style Visuals */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-premium/[0.015] filter blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />

      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-gold-premium/20 filter blur-[1px]"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-[15%] w-2 h-2 rounded-full bg-cyan-500/20 filter blur-[1px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="w-full max-w-2xl bg-surface-dubai border border-gold-premium/30 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(197,168,128,0.2)] relative z-10 text-center"
      >
        {/* Glow corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-premium/30 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-premium/30 rounded-br-3xl pointer-events-none" />

        {/* Animated Checkmark Core */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-20 h-20 rounded-full bg-black/40 border border-gold-premium/30 flex items-center justify-center shadow-gold-glow"
          >
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-gold-premium animate-ping opacity-25"
            />
            <CheckCircle2 size={38} className="text-gold-premium" />
          </motion.div>
        </div>

        <span className="font-mono text-[8px] md:text-[9px] text-gold-premium/60 uppercase tracking-[0.25em] block mb-2">
          {t.subtitle}
        </span>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
          {t.title}
        </h1>
        
        <p className="text-sand-muted text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-10">
          {t.description}
        </p>

        {/* Dynamic Next Steps Stack */}
        <div className="border-t border-gold-premium/15 pt-8 mb-10 text-left">
          <h3 className="font-mono text-[9px] text-sand-muted/50 uppercase tracking-widest mb-6 font-bold text-center">
            {t.stepsTitle}
          </h3>
          <div className="flex flex-col gap-5 max-w-lg mx-auto">
            {t.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-black/25 border border-gold-premium/5 p-4 rounded-xl hover:border-gold-premium/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gold-dark/10 border border-gold-premium/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-display font-black text-xs md:text-sm text-white uppercase tracking-wide mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sand-muted text-[11px] md:text-xs leading-relaxed font-display">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link Button */}
        <div className="flex justify-center">
          <Link
            href="/geo"
            className="inline-flex items-center gap-2 border border-gold-premium hover:border-gold-light text-white hover:bg-gold-premium/10 font-display font-black text-[10px] md:text-xs px-8 py-4.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft size={12} className="text-gold-premium" />
            <span>{t.backBtn}</span>
          </Link>
        </div>

      </motion.div>
    </main>
  );
}
