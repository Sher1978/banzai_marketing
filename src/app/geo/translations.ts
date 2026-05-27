export interface TranslationSchema {
  nav: {
    logo: string;
    tech: string;
    cases: string;
    contact: string;
    back: string;
  };
  hero: {
    h1: string;
    slider: {
      realestate: {
        tag: string;
        quote: string;
      };
      premium: {
        tag: string;
        quote: string;
      };
      medical: {
        tag: string;
        quote: string;
      };
    };
    body: string;
    cta: string;
  };
  tech: {
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      text: string;
      tech: string;
    }>;
  };
  cases: {
    title: string;
    subtitle: string;
    case1: {
      title: string;
      solution: string;
      result: string;
      stats: string;
    };
    case2: {
      title: string;
      solution: string;
      result: string;
      stats: string;
    };
    case3: {
      title: string;
      solution: string;
      result: string;
      stats: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      contact: string;
      industry: string;
      industryOptions: {
        placeholder: string;
        realestate: string;
        premium: string;
        medical: string;
        other: string;
      };
      website: string;
      cta: string;
      footnote: string;
      success: string;
      error: string;
      loading: string;
    };
    magnet: {
      title: string;
      desc: string;
      input: string;
      cta: string;
      success: string;
    };
  };
}

export const translations: Record<'ru' | 'en', TranslationSchema> = {
  ru: {
    nav: {
      logo: "BanzAI marketing",
      tech: "Технология",
      cases: "Кейсы",
      contact: "Получить аудит",
      back: "На главный сайт"
    },
    hero: {
      h1: "40% ваших самых платежеспособных клиентов прямо сейчас отдают деньги конкурентам.",
      slider: {
        realestate: {
          tag: "Недвижимость & Девелопмент",
          quote: "Инвесторы больше не гуглят новостройки. Они просят ИИ сравнить ROI. Если нейросеть не ссылается на вашу аналитику — вас не существует."
        },
        premium: {
          tag: "Премиум-услуги & Консьерж",
          quote: "VIP-клиенты ищут решения через Perplexity. Пока вы сжигаете бюджет на Яндекс/Google, ИИ рекомендует ваших конкурентов."
        },
        medical: {
          tag: "Медицинский туризм & Клиники",
          quote: "Экспаты спрашивают ChatGPT, где безопасно лечить зубы. ИИ выдает один безальтернативный ответ. И это не ваша клиника."
        }
      },
      body: "ИИ больше не ищет ссылки. Он ищет готовые экспертные решения — и выдаёт единственный ответ без списка сайтов. Если ваш бизнес не встроен в логику генеративного поиска, вас не существует для 40% самых платёжеспособных клиентов. Ваш бизнес должен быть готов к этому поиску уже сейчас.",
      cta: "Проверить, видит ли ИИ мой бизнес"
    },
    tech: {
      title: "Как работает технология GEO?",
      subtitle: "Классическое SEO мертво для премиум-сегмента. ИИ ищет не рекламные слоганы, а структурированные данные. Мы интегрируем ваш бренд в Latent Space генеративных моделей.",
      steps: [
        {
          num: "01",
          title: "Сбор данных (Knowledge Graph)",
          text: "Мы собираем и агрегируем все ваши активы, исследования и показатели. Вся информация превращается в семантическую базу знаний бренда, понятную искусственному интеллекту.",
          tech: "Knowledge Graph Engine"
        },
        {
          num: "02",
          title: "Семантическая разметка",
          text: "Внедряем специализированную микроразметку и структуру данных под RAG-алгоритмы (Retrieval-Augmented Generation). Языковым моделям (LLM) становится легко считывать и цитировать ваши данные.",
          tech: "RAG Schema Integration"
        },
        {
          num: "03",
          title: "Монополия в выдаче (Ground Truth)",
          text: "Ваш бренд позиционируется как базовая истина (Ground Truth) для генеративных моделей. ИИ цитирует ваш ресурс как авторитетный первоисточник №1, направляя горячих клиентов в ваши каналы.",
          tech: "LLM Search Authority"
        }
      ]
    },
    cases: {
      title: "Кейсы внедрения «BanzAI marketing»",
      subtitle: "Мы доказываем эффективность GEO не гипотезами, а реальным захватом ИИ-выдачи и притоком платежеспособных лидов.",
      case1: {
        title: "Агентство недвижимости (Дубай) — Дистресс-сделки",
        solution: "Создали изолированный экспертный веб-хаб с глубокой аналитикой дистресс-рынка Дубая. Обернули весь пласт аналитики в структурированный машиночитаемый слой для LLM.",
        result: "Поисковые нейросети считают наш хаб главным аналитическим первоисточником. Агентство ежедневно получает высококонверсионных инвесторов без рекламных затрат.",
        stats: "0$ Рекламы // Ежедневные заявки"
      },
      case2: {
        title: "Международный премиум консьерж-сервис",
        solution: "Разработали новую архитектуру сайта, разметили ее под сверхдлинные поисковые запросы (long-tail prompts) и описания сложных прецедентов, связав с Telegram-ботом.",
        result: "При сложных, нетипичных запросах VIP-клиентов ИИ вытаскивает наши кейсы из Latent Space и переводит пользователей прямо в бот консьержа.",
        stats: "0$ Бюджета // Прямой захват VIP"
      },
      case3: {
        title: "Стоматологическая клиника (Вьетнам, Нячанг)",
        solution: "Превратили сайт клиники во всеобъемлющий аналитический центр медицинского туризма с мультиязычным ИИ-ассистентом на базе RAG (RU, EN, FR, VI).",
        result: "ChatGPT выдает нашу клинику как безальтернативного лидера отрасли с высочайшим трастом. Бесплатный захват всего туристического трафика на протезирование с крупными чеками.",
        stats: "+45% Продаж // 100% Траста ИИ"
      }
    },
    contact: {
      title: "Перестаньте терять самых дорогих клиентов.",
      subtitle: "Запишитесь на бесплатный экспресс-аудит. В реальном времени мы проверим, как ChatGPT, Gemini и Perplexity видят ваш бизнес, и предоставим вам карту упущенных лидов.",
      form: {
        name: "Ваше имя",
        contact: "Контакт (Telegram / Телефон)",
        industry: "Сфера бизнеса",
        industryOptions: {
          placeholder: "Выберите сферу бизнеса",
          realestate: "Недвижимость / Застройщик",
          premium: "Премиум-услуги / Консьерж-сервис",
          medical: "Медицина / Медицинский туризм",
          other: "Другое"
        },
        website: "Ссылка на ваш сайт",
        cta: "Получить аудит и стратегию GEO",
        footnote: "*Берем на аудит только 5 компаний в месяц из-за сложности аналитики.*",
        success: "Данные переданы! Эксперт свяжется с вами.",
        error: "Ошибка соединения. Пожалуйста, попробуйте еще раз.",
        loading: "Отправка..."
      },
      magnet: {
        title: "Не готовы к экспресс-аудиту?",
        desc: "Скачайте эксклюзивный PDF-отчет «Как ИИ разрушает классические воронки продаж» и узнайте, как адаптировать воронки до того, как это сделают конкуренты.",
        input: "Ваш Telegram или Email",
        cta: "Скачать PDF-отчет (9.4 MB)",
        success: "Ссылка отправлена! Отчет уже летит к вам."
      }
    }
  },
  en: {
    nav: {
      logo: "BanzAI marketing",
      tech: "Technology",
      cases: "Cases",
      contact: "Get Audit",
      back: "To Main Site"
    },
    hero: {
      h1: "40% of your most solvent customers are giving money to competitors right now.",
      slider: {
        realestate: {
          tag: "Real Estate & Development",
          quote: "Investors no longer Google new developments. They ask AI to compare ROI. If the neural network doesn't cite your analytics—you don't exist."
        },
        premium: {
          tag: "Premium Services & Concierge",
          quote: "VIP clients search for solutions via Perplexity. While you burn budgets on Google Ads, AI recommends your direct competitors."
        },
        medical: {
          tag: "Medical Tourism & Clinics",
          quote: "Expats ask ChatGPT where to safely treat teeth. AI provides a single безальтернативный answer. And it is not your clinic."
        }
      },
      body: "AI no longer searches for links. It searches for ready-made expert solutions — and delivers a single answer, no list of websites. If your business is not embedded in the logic of generative search, you simply do not exist for 40% of the most high-value clients. Your business must be ready for this new reality right now.",
      cta: "Verify if AI sees my business"
    },
    tech: {
      title: "How does GEO Technology work?",
      subtitle: "Classic SEO is dead for the premium segment. AI does not look for advertising slogans, but structured data. We integrate your brand into the Latent Space of generative models.",
      steps: [
        {
          num: "01",
          title: "Data Collection (Knowledge Graph)",
          text: "We collect and aggregate all your brand assets, case files, and metrics, converting them into an organized semantic Knowledge Graph that AI systems can instantly retrieve.",
          tech: "Knowledge Graph Engine"
        },
        {
          num: "02",
          title: "Semantic Schema Markup",
          text: "We implement advanced microdata schema optimized specifically for RAG-algorithms (Retrieval-Augmented Generation), allowing Large Language Models (LLMs) to scan and cite your data.",
          tech: "RAG Schema Integration"
        },
        {
          num: "03",
          title: "Monopolized Search (Ground Truth)",
          text: "Your brand is positioned as the ultimate Ground Truth for AI engines. The LLM extracts and cites your resources as the #1 authority, routing high-intent buyers straight to you.",
          tech: "LLM Search Authority"
        }
      ]
    },
    cases: {
      title: "BanzAI marketing GEO Cases",
      subtitle: "We prove the power of GEO through actual leads and dominant search presence, not mere theoretical assumptions.",
      case1: {
        title: "Dubai Real Estate Agency — Distress Deals",
        solution: "Launched an isolated analytical web hub mapped with deep Dubai distress-market data. Structured all information into machine-readable datasets for LLMs.",
        result: "Generative search engines treat the site as the absolute authority. The agency receives highly qualified investor leads daily, spending zero cents on paid advertising.",
        stats: "0$ Ads // Daily Premium Leads"
      },
      case2: {
        title: "International Luxury Concierge Service",
        solution: "Redesigned their site structure, optimizing specifically for complex long-tail prompts and case descriptions, fully connected with an automated Telegram bot.",
        result: "When VIPs query generative AI for complex lifestyles, the neural engine extracts our case studies from its Latent Space, driving leads directly to the concierge bot.",
        stats: "0$ Ad Budget // Direct VIP Capture"
      },
      case3: {
        title: "Vietnam Dental Clinic (Nha Trang)",
        solution: "Transformed the clinic's digital profile into an authoritative medical tourism hub, featuring an AI multilingual RAG assistant (EN, RU, FR, VI).",
        result: "ChatGPT lists our clinic as the premium dental authority with highest trust score. Successfully captured tourist traffic searching for medical tourism, leading to record check sales.",
        stats: "+45% Sales // 100% AI Search Trust"
      }
    },
    contact: {
      title: "Stop losing your most high-value clients.",
      subtitle: "Sign up for a free GEO Express Audit. In real-time, we will analyze how ChatGPT, Gemini, and Perplexity perceive your business and build your uпущенных leads map.",
      form: {
        name: "Your Name",
        contact: "Contact (Telegram / Phone)",
        industry: "Business Sector",
        industryOptions: {
          placeholder: "Select your sector",
          realestate: "Real Estate & Development",
          premium: "Premium Services & Concierge",
          medical: "Medicine & Medical Tourism",
          other: "Other Industry"
        },
        website: "Your Website Link",
        cta: "Get GEO Audit & Strategy Plan",
        footnote: "*We only accept 5 companies per month due to the high complexity of GEO data auditing.*",
        success: "Data transmitted! Our expert will contact you shortly.",
        error: "Connection error. Please try again.",
        loading: "Sending..."
      },
      magnet: {
        title: "Not ready for a live audit?",
        desc: "Download our exclusive PDF report: 'How AI is destroying classic sales funnels' and discover how to adapt your customer acquisition before your competitors do.",
        input: "Your Telegram or Email Address",
        cta: "Download PDF Report (9.4 MB)",
        success: "Link transmitted! Your PDF report is on its way."
      }
    }
  }
};
