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
    offer: string;
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
    cta2: string;
    cta3: string;
    scanCta: string;
  };
  seo: {
    title: string;
    subtitle: string;
    bullets: Array<{
      title: string;
      text: string;
    }>;
    fomo: string;
  };
  tech: {
    title: string;
    subtitle: string;
    bullets: Array<{
      title: string;
      boldText: string;
      text: string;
    }>;
  };
  pricing: {
    title: string;
    packages: Array<{
      name: string;
      desc: string;
      result: string;
      tag: string;
    }>;
    headers: {
      name: string;
      desc: string;
      result: string;
    };
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
  faq: {
    title: string;
    list: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    magnetTitle: string;
    magnetDesc: string;
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
      input: string;
      cta: string;
      success: string;
    };
  };
  midCta: {
    label: string;
    text: string;
    btn: string;
  };
}

export const translations: Record<'ru' | 'en' | 'vi', TranslationSchema> = {
  ru: {
    nav: {
      logo: "BanzAI marketing",
      tech: "GEO-Архитектура",
      cases: "Кейсы",
      contact: "Аудит ИИ",
      back: "На главный"
    },
    hero: {
      h1: "ВАШ САЙТ — БОЛЬШЕ НЕ ВИТРИНА. ТЕПЕРЬ ЭТО БАЗА ДАННЫХ ДЛЯ НЕЙРОСЕТЕЙ.",
      offer: "58.5% пользователей больше не кликают по ссылкам в поиске — они получают готовые решения напрямую от ИИ.",
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
      body: "Мы превращаем ваш бизнес в канонический источник данных (Ground Truth), который ChatGPT, Perplexity и Gemini рекомендуют самым платежеспособным клиентам.",
      cta: "ПРОЙТИ БЕСПЛАТНЫЙ АУДИТ ИИ-ВИДИМОСТИ",
      cta2: "Начать получать клиентов через ChatGPT",
      cta3: "Заставить ИИ-агентов рекомендовать мой бизнес",
      scanCta: "Запустить бесплатный ИИ-сканер",
    },
    seo: {
      title: "ПОЧЕМУ КЛАССИЧЕСКОЕ SEO БОЛЬШЕ НЕ ПРИНОСИТ ПРОДАЖ В ПРЕМИУМ-СЕГМЕНТЕ",
      subtitle: "Традиционная воронка привлечения клиентов сломана. Пока вы покупаете ссылки и пишете SEO-тексты для поисковиков, ваши клиенты уже задают вопросы нейросетям.",
      bullets: [
        {
          title: "Падение классического трафика",
          text: "Обычный органический поиск теряет до 25% объема запросов в коммерческих нишах."
        },
        {
          title: "Утечка премиум-лидов",
          text: "40% ваших самых высокодоходных клиентов прямо сейчас уходят к конкурентам, потому что ИИ порекомендовал их бренд, а ваш — не нашел."
        },
        {
          title: "Смена паттерна",
          text: "Клиенты больше не ищут «агентство недвижимости». Они просят ИИ: «Сравни топ-3 агентства в Дубае для инвестиций и выбери лучшее»."
        }
      ],
      fomo: "Бороться за клики бессмысленно в эпоху Zero-click. Если вашей компании нет в прямых ответах ИИ — вас просто не существует на новом рынке."
    },
    tech: {
      title: "АРХИТЕКТУРА ИИ-МОНОПОЛИИ: ОТ ПОИСКА К ГОТОВЫМ ОТВЕТАМ",
      subtitle: "Мы не делаем SEO. Мы внедряем Generative Engine Optimization (GEO) — систему адаптации вашего бизнеса под архитектуру больших языковых моделей.",
      bullets: [
        {
          title: "AI-Readiness (Машиночитаемость)",
          boldText: "Снимаем технические блокировки.",
          text: "Структурируем данные вашего сайта так, чтобы GPTBot и ClaudeBot могли беспрепятственно сканировать и понимать ваши услуги."
        },
        {
          title: "Оптимизация прямого ответа (DAO)",
          boldText: "Переписываем ваш контент в самодостаточные информационные блоки.",
          text: "Мы используем научно доказанный формат длины абзацев, который LLM-модели забирают целиком в качестве цитат."
        },
        {
          title: "Графы Знаний (Knowledge Graphs)",
          boldText: "Создаем цифровой паспорт бренда.",
          text: "Интегрируем вашу компанию в глобальные базы данных (Wikidata, Crunchbase), на которые опираются нейросети при проверке фактов."
        },
        {
          title: "Earned Media (Управление репутацией)",
          boldText: "ИИ не верит вашему сайту, он верит независимым источникам.",
          text: "Мы формируем нужный контекст на Reddit, G2, Capterra и профильных агрегаторах."
        },
        {
          title: "LAPIS API (Интеграция агентов)",
          boldText: "Упаковываем ваши прайсы и каталоги в машиночитаемые форматы",
          text: "для автономных ИИ-закупщиков будущего."
        }
      ]
    },
    pricing: {
      title: "СИСТЕМА GENERATIVE ENGINE OPTIMIZATION",
      headers: {
        name: "Тариф",
        desc: "Описание пакета",
        result: "Ожидаемый результат"
      },
      packages: [
        {
          name: "AI Readiness (Базовый)",
          tag: "Базовый",
          desc: "Технический фундамент. Внедрение llms.txt, разметка JSON-LD, снятие блокировок для краулеров, переупаковка ТОП-5 страниц под AEO-стандарты.",
          result: "Выход из \"слепой зоны\" ИИ. Нейросети начинают видеть и считывать ваш бренд."
        },
        {
          name: "Active GEO (Средний)",
          tag: "Средний",
          desc: "Построение семантических хабов. Глубокая переработка контента, работа с независимыми площадками-агрегаторами, оптимизация упоминаний (Brand Mentions).",
          result: "Уверенный рост метрики AIO Cite Rate > 15%. Регулярное попадание в выборки ИИ."
        },
        {
          name: "Agentic Dominance (Премиум)",
          tag: "Премиум",
          desc: "Интеграция в глобальные Графы Знаний. Digital PR, перенос коммерческих данных в формат LAPIS для взаимодействия с автономными ИИ-агентами.",
          result: "Тотальное доминирование в тематических промптах. Статус Ground Truth в отрасли."
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
    faq: {
      title: "БАЗА ЗНАНИЙ (FAQ)",
      list: [
        {
          q: "Чем GEO отличается от SEO?",
          a: "GEO (Generative Engine Optimization) оптимизирует контент для попадания в прямые ответы нейросетей, минуя выдачу ссылок. В отличие от SEO, где цель — клик пользователя по сайту, цель GEO — сделать так, чтобы языковая модель (LLM) выбрала вашу компанию как единственный правильный и авторитетный ответ на запрос клиента."
        },
        {
          q: "Как быстро ИИ начнет рекомендовать мою компанию?",
          a: "Первые результаты индексации ИИ-краулерами появляются через 14-21 день после внедрения технического фундамента (AI Readiness). Ощутимый рост метрики упоминаемости (AIO Cite Rate) и появление в развернутых ответах ChatGPT и Perplexity обычно фиксируется на второй месяц активной работы с графами знаний."
        }
      ]
    },
    contact: {
      title: "оставить заявку на полный аудит ИИ готовности Вашего бизнеса",
      subtitle: "Большинство владельцев бизнеса даже не подозревают, что нейросети отговаривают клиентов работать с ними. Проверьте свою компанию прямо сейчас.",
      magnetTitle: "УЗНАЙТЕ, РЕКОМЕНДУЕТ ЛИ ИИ ВАС ИЛИ ВАШИХ КОНКУРЕНТОВ",
      magnetDesc: "Получите мгновенный доступ к закрытым материалам: 1. PDF-отчет: «Как ИИ разрушает классические воронки и как адаптироваться до 2026 года». 2. Чек-лист «Техническая машиночитаемость сайта для ChatGPT».",
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
        input: "Ваш Telegram или Email",
        cta: "Скачать PDF-отчет + Чек-лист",
        success: "Ссылка отправлена! Отчет уже летит к вам."
      }
    },
    midCta: {
      label: "СЛЕДУЮЩИЙ ШАГ",
      text: "Узнайте, рекомендует ли ChatGPT ваш бизнес прямо сейчас",
      btn: "Запустить ИИ-сканер (бесплатно)"
    }
  },
  en: {
    nav: {
      logo: "BanzAI marketing",
      tech: "GEO Architecture",
      cases: "Cases",
      contact: "AI Audit",
      back: "To Main"
    },
    hero: {
      h1: "YOUR WEBSITE IS NO LONGER A SHOWCASE. NOW IT IS A DATABASE FOR AI.",
      offer: "58.5% of users no longer click links in search — they get solutions directly from AI.",
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
          quote: "Expats ask ChatGPT where to safely treat teeth. AI provides a single answer. And it is not your clinic."
        }
      },
      body: "We turn your business into a canonical source of data (Ground Truth) that ChatGPT, Perplexity, and Gemini recommend to high-intent, premium clients.",
      cta: "RUN FREE AI VISIBILITY AUDIT",
      cta2: "Start getting clients through ChatGPT",
      cta3: "Make AI agents recommend my business",
      scanCta: "Run free AI visibility scanner",
    },
    seo: {
      title: "WHY CLASSIC SEO NO LONGER DRIVES SALES IN THE PREMIUM SEGMENT",
      subtitle: "Traditional customer acquisition funnels are broken. While you buy backlinks and write SEO copy for search engines, your target clients are already asking neural networks.",
      bullets: [
        {
          title: "Organic Traffic Collapse",
          text: "Traditional search is losing up to 25% of commercial volume in high-ticket niches."
        },
        {
          title: "Premium Lead Leakage",
          text: "40% of your highest-value clients are going to competitors because AI recommended them, not you."
        },
        {
          title: "Search Pattern Shift",
          text: "Customers no longer search for 'real estate agency'. They ask AI: 'Compare top 3 agencies in Dubai for investment and pick the best one'."
        }
      ],
      fomo: "Fighting for clicks is pointless in the Zero-click era. If your business is not in AI's direct answers — you simply do not exist in the new market."
    },
    tech: {
      title: "ARCHITECTURE OF AI MONOPOLY: FROM SEARCH TO INSTANT ANSWERS",
      subtitle: "We do not do SEO. We implement Generative Engine Optimization (GEO) — a system to adapt your business to the architecture of Large Language Models.",
      bullets: [
        {
          title: "AI-Readiness",
          boldText: "Removing technical roadblocks.",
          text: "We structure your site data so GPTBot and ClaudeBot can crawl and understand your services without obstacles."
        },
        {
          title: "Direct Answer Optimization (DAO)",
          boldText: "Structuring content into self-contained information blocks.",
          text: "We use scientifically proven text formats that LLMs extract entirely as direct citations."
        },
        {
          title: "Knowledge Graphs",
          boldText: "Creating a digital brand passport.",
          text: "We integrate your business with Wikidata and Crunchbase to establish factual trust for AI search engines."
        },
        {
          title: "Earned Media (Reputation)",
          boldText: "AI trusts independent sources, not your landing page.",
          text: "We seed your brand authority across Reddit, G2, Capterra, and top niche aggregators."
        },
        {
          title: "LAPIS API (Agent Integration)",
          boldText: "Packaging catalogs and pricing into machine-readable datasets",
          text: "for future autonomous AI procurement agents."
        }
      ]
    },
    pricing: {
      title: "GENERATIVE ENGINE OPTIMIZATION SYSTEM",
      headers: {
        name: "Package",
        desc: "Description",
        result: "Expected Result"
      },
      packages: [
        {
          name: "AI Readiness (Basic)",
          tag: "Basic",
          desc: "Technical foundation. llms.txt integration, JSON-LD schemas, bot crawler unblocking, and top 5 pages DAO conversion.",
          result: "Exiting the AI blind spot. Models begin indexing and reading your brand."
        },
        {
          name: "Active GEO (Standard)",
          tag: "Standard",
          desc: "Semantic hubs development. Deep content optimization, aggregator seeding, and brand mentions management.",
          result: "Steady growth of AIO Cite Rate > 15%. Consistent citation in AI search results."
        },
        {
          name: "Agentic Dominance (Premium)",
          tag: "Premium",
          desc: "Global Knowledge Graphs integration, Digital PR, and LAPIS data structuring for autonomous AI agents interaction.",
          result: "Total dominance in niche prompts. Established Ground Truth authority status."
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
    faq: {
      title: "KNOWLEDGE BASE (FAQ)",
      list: [
        {
          q: "How does GEO differ from SEO?",
          a: "GEO (Generative Engine Optimization) optimizes content for direct AI answers rather than links. SEO targets clicks; GEO makes the language model (LLM) choose your brand as the single authoritative answer."
        },
        {
          q: "How fast will AI start recommending my business?",
          a: "Initial crawlers pick up the technical changes in 14-21 days. Growth in AIO Cite Rate and ChatGPT recommendations is typically registered during the second month."
        }
      ]
    },
    contact: {
      title: "Leave a request for a complete AI readiness audit of your business",
      subtitle: "Most business owners do not realize that AI actually discourages clients from working with them. Check your brand status right now.",
      magnetTitle: "FIND OUT IF AI RECOMMENDS YOU OR YOUR COMPETITORS",
      magnetDesc: "Get instant access to closed materials: 1. PDF report: 'How AI is destroying classic sales funnels'. 2. Checklist: 'Technical AI crawlability for ChatGPT'.",
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
        input: "Your Telegram or Email Address",
        cta: "Download PDF Report + Checklist",
        success: "Link transmitted! Your PDF report is on its way."
      }
    },
    midCta: {
      label: "NEXT STEP",
      text: "Find out if ChatGPT recommends your business right now",
      btn: "Run AI Scanner (Free)"
    }
  },
  vi: {
    nav: {
      logo: "BanzAI marketing",
      tech: "Công nghệ GEO",
      cases: "Case Study",
      contact: "Kiểm tra AI",
      back: "Về trang chủ"
    },
    hero: {
      h1: "TRANG WEB CỦA BẠN KHÔNG CÒN LÀ TỦ TRƯNG BÀY. BÂY GIỜ NÓ LÀ CƠ SỞ DỮ LIỆU CHO MẠNG NƠ-RON.",
      offer: "58.5% người dùng không còn click vào các đường link tìm kiếm — họ nhận giải pháp trực tiếp từ AI.",
      slider: {
        realestate: {
          tag: "Bất động sản & Phát triển",
          quote: "Nhà đầu tư không còn Google tìm căn hộ nữa. Họ nhờ AI so sánh ROI. Nếu mạng nơ-ron không trích dẫn phân tích của bạn — bạn không tồn tại."
        },
        premium: {
          tag: "Dịch vụ Cao cấp & Concierge",
          quote: "Khách VIP tìm kiếm giải pháp qua Perplexity. Trong khi bạn đốt ngân sách vào Google Ads, AI đang giới thiệu đối thủ của bạn."
        },
        medical: {
          tag: "Du lịch Y tế & Phòng khám",
          quote: "Người nước ngoài hỏi ChatGPT nên đi chữa răng ở đâu. AI đưa ra một câu trả lời duy nhất không có lựa chọn thay thế. Và đó không phải phòng khám của bạn."
        }
      },
      body: "Chúng tôi biến doanh nghiệp của bạn thành nguồn dữ liệu chuẩn mực (Ground Truth) được ChatGPT, Perplexity và Gemini đề xuất cho những khách hàng cao cấp nhất.",
      cta: "NHẬN KIỂM TRA ĐỘ HIỂN THỊ AI MIỄN PHÍ",
      cta2: "Bắt đầu nhận khách hàng qua ChatGPT",
      cta3: "Buộc các AI agent giới thiệu doanh nghiệp của tôi",
      scanCta: "Chạy trình quét AI miễn phí",
    },
    seo: {
      title: "TẠI SAO SEO TRUYỀN THỐNG KHÔNG CÒN MANG LẠI DOANH THU TRONG PHÂN KHÚC CAO CẤP",
      subtitle: "Phễu thu hút khách hàng truyền thống đã bị phá vỡ. Trong khi bạn mua backlinks và viết nội dung SEO cho các công cụ tìm kiếm, khách hàng của bạn đã đang đặt câu hỏi cho mạng nơ-ron.",
      bullets: [
        {
          title: "Sụt giảm lượng truy cập truyền thống",
          text: "Tìm kiếm tự nhiên truyền thống đang mất tới 25% lượng truy cập trong các phân khúc thương mại."
        },
        {
          title: "Rò rỉ khách hàng tiềm năng cao cấp",
          text: "40% khách hàng có giá trị cao nhất của bạn đang chuyển sang đối thủ cạnh tranh vì AI đề xuất thương hiệu của họ, còn của bạn thì không tìm thấy."
        },
        {
          title: "Thay đổi hành vi tìm kiếm",
          text: "Khách hàng không còn tìm kiếm 'công ty bất động sản'. Họ hỏi AI: 'So sánh top 3 công ty bất động sản tại Dubai để đầu tư và chọn công ty tốt nhất'."
        }
      ],
      fomo: "Chiến đấu vì lượt click không còn ý nghĩa trong kỷ nguyên Zero-click. Nếu công ty của bạn không xuất hiện trong câu trả lời trực tiếp của AI — bạn đơn giản là không tồn tại trên thị trường mới."
    },
    tech: {
      title: "KIẾN TRÚC ĐỘC CHIẾM AI: TỪ TÌM KIẾM ĐẾN CÂU TRẢ LỜI TỨC THỜI",
      subtitle: "Chúng tôi không làm SEO. Chúng tôi triển khai Tối ưu hóa Công cụ Tạo sinh (GEO) — hệ thống thích nghi doanh nghiệp của bạn với kiến trúc của các mô hình ngôn ngữ lớn.",
      bullets: [
        {
          title: "AI-Readiness (Sự sẵn sàng cho AI)",
          boldText: "Gỡ bỏ các rào cản kỹ thuật.",
          text: "Cấu trúc dữ liệu trang web của bạn để GPTBot và ClaudeBot có thể thu thập dữ liệu và hiểu dịch vụ của bạn một cách dễ dàng."
        },
        {
          title: "Tối ưu hóa câu trả lời trực tiếp (DAO)",
          boldText: "Định dạng nội dung thành các khối thông tin độc lập.",
          text: "Chúng tôi sử dụng định dạng độ dài đoạn văn đã được chứng minh khoa học để các mô hình LLM trích dẫn nguyên văn làm câu trả lời."
        },
        {
          title: "Đồ thị tri thức (Knowledge Graphs)",
          boldText: "Tạo hộ chiếu số cho thương hiệu.",
          text: "Tích hợp công ty của bạn vào các cơ sở dữ liệu toàn cầu (Wikidata, Crunchbase) mà AI dựa vào để xác minh thông tin."
        },
        {
          title: "Earned Media (Truyền thông lan tỏa)",
          boldText: "AI tin tưởng nguồn độc lập, không phải trang landing page của bạn.",
          text: "Chúng tôi xây dựng ngữ cảnh thương hiệu trên Reddit, G2, Capterra và các diễn đàn chuyên ngành."
        },
        {
          title: "LAPIS API (Tích hợp AI Agent)",
          boldText: "Đóng gói danh mục và bảng giá thành định dạng máy đọc được",
          text: "dành cho các AI Agent mua sắm tự trị trong tương lai."
        }
      ]
    },
    pricing: {
      title: "HỆ THỐNG TỐI ƯU HÓA CÔNG CỤ TẠO SINH (GEO)",
      headers: {
        name: "Gói dịch vụ",
        desc: "Mô tả gói",
        result: "Kết quả mong đợi"
      },
      packages: [
        {
          name: "AI Readiness (Cơ bản)",
          tag: "Cơ bản",
          desc: "Nền tảng kỹ thuật. Tích hợp llms.txt, cấu trúc dữ liệu JSON-LD, mở khóa cho bot crawler, và tối ưu hóa 5 trang hàng đầu theo tiêu chuẩn DAO.",
          result: "Thoát khỏi vùng mù AI. Các mô hình ngôn ngữ lớn bắt đầu quét và đọc hiểu thương hiệu của bạn."
        },
        {
          name: "Active GEO (Tiêu chuẩn)",
          tag: "Tiêu chuẩn",
          desc: "Phát triển trung tâm ngữ nghĩa. Tối ưu hóa nội dung chuyên sâu, xây dựng sự hiện diện trên các trang tổng hợp độc lập, quản lý lượt đề cập thương hiệu (Brand Mentions).",
          result: "Tăng trưởng ổn định chỉ số AIO Cite Rate > 15%. Xuất hiện đều đặn trong kết quả tìm kiếm của AI."
        },
        {
          name: "Agentic Dominance (Cao cấp)",
          tag: "Cao cấp",
          desc: "Tích hợp vào Đồ thị Tri thức toàn cầu (Knowledge Graphs), Digital PR, và cấu trúc dữ liệu LAPIS để tương tác với các AI Agent tự trị trong tương lai.",
          result: "Thống trị hoàn toàn trong các câu lệnh (prompts) chuyên ngành. Thiết lập vị thế Ground Truth trong ngành."
        }
      ]
    },
    cases: {
      title: "Case Study GEO của BanzAI marketing",
      subtitle: "Chúng tôi chứng minh sức mạnh của GEO qua khách hàng tiềm năng thực tế và sự hiện diện tìm kiếm vượt trội, không chỉ là giả thuyết lý thuyết.",
      case1: {
        title: "Công ty Bất động sản Dubai — Giao dịch Distress",
        solution: "Ra mắt hub phân tích web độc lập được lập bản đồ với dữ liệu thị trường distress Dubai sâu rộng. Cấu trúc tất cả thông tin thành tập dữ liệu có thể đọc bằng máy cho LLM.",
        result: "Các công cụ tìm kiếm tạo sinh coi trang web là nguồn có thẩm quyền tuyệt đối. Công ty nhận được khách hàng tiềm năng là nhà đầu tư chất lượng cao hàng ngày, không tốn xu nào cho quảng cáo trả phí.",
        stats: "0$ Quảng cáo // Khách hàng tiềm năng Premium hàng ngày"
      },
      case2: {
        title: "Dịch vụ Concierge Cao cấp Quốc tế",
        solution: "Thiết kế lại cấu trúc trang web, tối ưu hóa dành riêng cho các long-tail prompt phức tạp và mô tả case study, kết nối đầy đủ với bot Telegram tự động.",
        result: "Khi khách VIP hỏi AI về lối sống phức tạp, công cụ nơ-ron trích xuất case study của chúng tôi từ Latent Space, dẫn khách hàng tiềm năng trực tiếp đến bot concierge.",
        stats: "0$ Ngân sách quảng cáo // Chiếm lĩnh VIP trực tiếp"
      },
      case3: {
        title: "Phòng khám Nha khoa Việt Nam (Nha Trang)",
        solution: "Chuyển đổi hồ sơ kỹ thuật số của phòng khám thành hub du lịch y tế có thẩm quyền, với trợ lý AI đa ngôn ngữ RAG (EN, RU, FR, VI).",
        result: "ChatGPT liệt kê phòng khám của chúng tôi là cơ sở nha khoa cao cấp với điểm tin cậy cao nhất. Chiếm lĩnh thành công lưu lượng khách du lịch tìm kiếm du lịch y tế, dẫn đến doanh số giao dịch kỷ lục.",
        stats: "+45% Doanh số // 100% Tin tưởng AI"
      }
    },
    faq: {
      title: "CƠ SỞ TRI THỨC (FAQ)",
      list: [
        {
          q: "GEO khác với SEO như thế nào?",
          a: "GEO (Generative Engine Optimization) tối ưu hóa nội dung để xuất hiện trực tiếp trong câu trả lời của AI thay vì danh sách đường link. SEO hướng tới lượt click chuột; GEO làm cho mô hình ngôn ngữ lớn (LLM) chọn thương hiệu của bạn làm câu trả lời uy tín duy nhất."
        },
        {
          q: "Bao lâu thì AI bắt đầu đề xuất doanh nghiệp của tôi?",
          a: "Các robot quét dữ liệu sẽ ghi nhận thay đổi kỹ thuật sau 14-21 ngày (AI Readiness). Sự tăng trưởng trong tỷ lệ trích dẫn AIO Cite Rate và xuất hiện trong câu trả lời của ChatGPT/Perplexity thường được ghi nhận rõ rệt từ tháng thứ hai."
        }
      ]
    },
    contact: {
      title: "Ngừng để mất những khách hàng giá trị nhất.",
      subtitle: "Đăng ký Kiểm tra GEO Express miễn phí. Theo thời gian thực, chúng tôi sẽ phân tích cách ChatGPT, Gemini và Perplexity nhận thức về doanh nghiệp của bạn và xây dựng bản đồ khách hàng tiềm năng bị bỏ lỡ.",
      magnetTitle: "TÌM HIỂU XEM AI CÓ ĐỀ XUẤT BẠN HOẶC ĐỐI THỦ CỦA BẠN KHÔNG",
      magnetDesc: "Nhận quyền truy cập ngay lập tức vào tài liệu nội bộ: 1. Báo cáo PDF: \"Cách AI phá hủy phễu bán hàng truyền thống và cách thích nghi trước năm 2026\". 2. Checklist: \"Sẵn sàng kỹ thuật trang web cho ChatGPT\".",
      form: {
        name: "Tên của bạn",
        contact: "Liên hệ (Telegram / Điện thoại)",
        industry: "Lĩnh vực kinh doanh",
        industryOptions: {
          placeholder: "Chọn lĩnh vực của bạn",
          realestate: "Bất động sản & Phát triển",
          premium: "Dịch vụ cao cấp & Concierge",
          medical: "Y tế & Du lịch Y tế",
          other: "Ngành khác"
        },
        website: "Liên kết trang web của bạn",
        cta: "Nhận Kiểm tra GEO & Kế hoạch Chiến lược",
        footnote: "*Chúng tôi chỉ nhận 5 công ty mỗi tháng do độ phức tạp cao của kiểm tra dữ liệu GEO.*",
        success: "Dữ liệu đã được gửi! Chuyên gia của chúng tôi sẽ liên hệ với bạn sớm.",
        error: "Lỗi kết nối. Vui lòng thử lại.",
        loading: "Đang gửi..."
      },
      magnet: {
        input: "Telegram hoặc Email của bạn",
        cta: "Tải xuống Báo cáo PDF (9.4 MB)",
        success: "Liên kết đã được gửi! Báo cáo PDF của bạn đang trên đường."
      }
    },
    midCta: {
      label: "BƯỚC TIẾP THEO",
      text: "Tìm hiểu xem ChatGPT có đề xuất doanh nghiệp của bạn ngay bây giờ không",
      btn: "Chạy trình quét AI (Miễn phí)"
    }
  }
};
