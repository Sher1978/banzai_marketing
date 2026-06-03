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
  midCta: {
    label: string;
    text: string;
    btn: string;
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

export const translations: Record<'ru' | 'en' | 'vi', TranslationSchema> = {
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
      offer: "Адаптируйте бизнес под ИИ-реалии — получайте самых платёжеспособных клиентов БЕСПЛАТНО из ChatGPT и Perplexity",
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
      cta: "Проверить, видит ли ИИ мой бизнес",
      cta2: "Начать получать клиентов через ChatGPT",
      cta3: "Заставить ИИ-агентов рекомендовать мой бизнес",
      scanCta: "Запустить бесплатный ИИ-сканер",
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
      tech: "Technology",
      cases: "Cases",
      contact: "Get Audit",
      back: "To Main Site"
    },
    hero: {
      h1: "40% of your most solvent customers are giving money to competitors right now.",
      offer: "Adapt your business to the AI era — get your most solvent clients for FREE from ChatGPT and Perplexity",
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
      cta: "Verify if AI sees my business",
      cta2: "Start getting clients through ChatGPT",
      cta3: "Make AI agents recommend my business",
      scanCta: "Run free AI visibility scanner",
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
      tech: "Công nghệ",
      cases: "Case Study",
      contact: "Nhận kiểm tra",
      back: "Về trang chính"
    },
    hero: {
      h1: "40% khách hàng tiềm năng nhất của bạn đang trao tiền cho đối thủ ngay lúc này.",
      offer: "Thích nghi doanh nghiệp với kỷ nguyên AI — nhận khách hàng tiềm năng MIỄN PHÍ từ ChatGPT và Perplexity",
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
      body: "AI không còn tìm kiếm đường link. Nó tìm kiếm các giải pháp chuyên môn sẵn có — và đưa ra một câu trả lời duy nhất, không có danh sách trang web. Nếu doanh nghiệp của bạn không được tích hợp vào logic tìm kiếm tạo sinh, bạn không tồn tại với 40% khách hàng có giá trị nhất. Doanh nghiệp của bạn phải sẵn sàng cho thực tế mới này ngay bây giờ.",
      cta: "Kiểm tra xem AI có nhìn thấy doanh nghiệp của tôi không",
      cta2: "Bắt đầu nhận khách hàng qua ChatGPT",
      cta3: "Buộc các AI agent giới thiệu doanh nghiệp của tôi",
      scanCta: "Chạy trình quét AI miễn phí",
    },
    tech: {
      title: "Công nghệ GEO hoạt động như thế nào?",
      subtitle: "SEO truyền thống đã chết với phân khúc cao cấp. AI không tìm kiếm slogan quảng cáo mà tìm dữ liệu có cấu trúc. Chúng tôi tích hợp thương hiệu của bạn vào Latent Space của các mô hình tạo sinh.",
      steps: [
        {
          num: "01",
          title: "Thu thập dữ liệu (Knowledge Graph)",
          text: "Chúng tôi thu thập và tổng hợp tất cả tài sản thương hiệu, hồ sơ case study và số liệu của bạn, chuyển đổi thành Knowledge Graph ngữ nghĩa có tổ chức mà các hệ thống AI có thể truy xuất tức thời.",
          tech: "Knowledge Graph Engine"
        },
        {
          num: "02",
          title: "Đánh dấu Schema ngữ nghĩa",
          text: "Chúng tôi triển khai microdata schema nâng cao được tối ưu hóa riêng cho các thuật toán RAG (Retrieval-Augmented Generation), cho phép các mô hình LLM quét và trích dẫn dữ liệu của bạn.",
          tech: "RAG Schema Integration"
        },
        {
          num: "03",
          title: "Độc chiếm tìm kiếm (Ground Truth)",
          text: "Thương hiệu của bạn được định vị là Ground Truth tối thượng cho các công cụ AI. LLM trích xuất và trích dẫn tài nguyên của bạn như nguồn có thẩm quyền số 1, dẫn hướng người mua có ý định cao thẳng đến bạn.",
          tech: "LLM Search Authority"
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
    contact: {
      title: "Ngừng để mất những khách hàng giá trị nhất.",
      subtitle: "Đăng ký Kiểm tra GEO Express miễn phí. Theo thời gian thực, chúng tôi sẽ phân tích cách ChatGPT, Gemini và Perplexity nhận thức về doanh nghiệp của bạn và xây dựng bản đồ khách hàng tiềm năng bị bỏ lỡ.",
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
        title: "Chưa sẵn sàng cho kiểm tra trực tiếp?",
        desc: "Tải xuống báo cáo PDF độc quyền: 'Cách AI đang phá hủy phễu bán hàng cổ điển' và khám phá cách điều chỉnh việc thu hút khách hàng trước khi đối thủ của bạn làm điều đó.",
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
