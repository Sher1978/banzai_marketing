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
          a: "GEO (Generative Engine Optimization) ориентировано на оптимизацию контента под ответы ИИ-систем (ChatGPT, Perplexity, Gemini). Цель — сделать так, чтобы нейросеть извлекла информацию о вашем бренде в свой контекст и выдала ее в качестве готовой рекомендации. В отличие от SEO, где цель — переход пользователя по ссылке на сайт, GEO работает на получение 100% доли голоса в готовых ответах ИИ."
        },
        {
          q: "Как ИИ-системы собирают данные о компаниях?",
          a: "Нейросети используют три основных канала: 1. Поисковые краулеры (GPTBot, PerplexityBot, ClaudeBot), сканирующие веб-страницы в реальном времени. 2. Обучающие датасеты (Common Crawl). 3. Интеграцию внешних графов знаний (Wikidata, Crunchbase) и авторитетных независимых площадок (Reddit, специализированные форумы)."
        },
        {
          q: "Что такое RAG (Retrieval-Augmented Generation) и при чем тут мой сайт?",
          a: "RAG — это технология генерации ответа ИИ с использованием внешнего поиска. Перед тем как ответить пользователю, модель делает живой запрос в сеть, отбирает релевантные страницы вашего сайта, извлекает из них факты и строит ответ, ссылаясь на вас. GEO оптимизирует ваш сайт под RAG-запросы."
        },
        {
          q: "Какова цель GEO для B2B и премиум-бизнеса?",
          a: "Цель — получить статус «Ground Truth» (канонического первоисточника). Поиск будущего не показывает десятки ссылок; он дает один готовый вывод. Если ИИ рекомендует вашу компанию — вы забираете всех клиентов, если нет — вы исключены из процесса принятия решений."
        },
        {
          q: "Под какие именно поисковые ИИ-системы оптимизируется сайт?",
          a: "Оптимизация охватывает все ключевые ИИ-платформы: ChatGPT Search (OpenAI), Perplexity AI, Google Search AI Overviews (Gemini), Microsoft Copilot и Claude (Anthropic)."
        },
        {
          q: "Что такое «слепая зона ИИ» (AI Blind Spot)?",
          a: "Это состояние, когда нейросеть ничего не знает о вашей компании или считает ее нерелевантной из-за технических ошибок: блокировок в robots.txt, отсутствия разметки JSON-LD или отсутствия упоминаний в независимых источниках."
        },
        {
          q: "Стоит ли блокировать ИИ-краулеров вроде GPTBot?",
          a: "Блокировка ботов лишает ваш бренд присутствия в ответах ИИ. Вместо блокировки мы настраиваем приоритетный доступ для ИИ-краулеров, оптимизируя структуру страниц для снижения потребления токенов при сканировании."
        },
        {
          q: "Что такое показатель упоминаемости (AIO Cite Rate)?",
          a: "Это ключевой KPI в GEO, измеряющий долю ответов нейросетей по вашей тематике, в которых ИИ цитирует, упоминает или рекомендует ваш бренд с активной ссылкой на сайт."
        },
        {
          q: "Что такое семантический хаб и векторный поиск?",
          a: "Векторный поиск ИИ сопоставляет смысл вопроса со смыслом контента. Семантический хаб — это структура страниц, объединенных по смысловым темам, а не по отдельным ключевым словам, что позволяет LLM точно преобразовать ваш сайт в векторные эмбеддинги."
        },
        {
          q: "Какую роль в GEO играют внешние упоминания бренда (Brand Mentions)?",
          a: "ИИ не доверяет только вашему сайту — он проверяет информацию по независимым базам. Упоминания бренда на Reddit, Quora, VC.ru и профильных агрегаторах формируют социальный траст, на который опираются нейросети."
        },
        {
          q: "Как ИИ оценивает авторитет и надежность бренда?",
          a: "Через кросс-валидацию (сопоставление данных). Если данные на вашем сайте совпадают со сведениями в базах Wikidata, Crunchbase, Википедии и отзывами на картах, ИИ классифицирует вашу компанию как доверенную сущность (High-Trust Entity)."
        },
        {
          q: "Что такое оптимизация прямого ответа (DAO)?",
          a: "DAO (Direct Answer Optimization) — это формат создания контента в виде самодостаточных текстовых блоков, которые ИИ-модель может легко извлечь и вставить в свой ответ в качестве прямой цитаты без перефразирования."
        },
        {
          q: "Какова идеальная структура текста для извлечения нейросетью?",
          a: "Идеален блок объемом 80-120 слов, начинающийся с прямого ответа на вопрос, подкрепленный точными цифрами, списками или таблицами. Важно избегать размытых формулировок и избыточных метафор."
        },
        {
          q: "Зачем нужен файл llms.txt и как его настроить?",
          a: "Файл llms.txt размещается в корне сайта и служит кратким машиночитаемым путеводителем по вашим услугам и контенту. Это позволяет ИИ-краулерам мгновенно понять структуру проекта без сканирования терабайтов кода."
        },
        {
          q: "Помогает ли микроразметка JSON-LD современным ИИ-агентам?",
          a: "Да, разметка Schema.org (JSON-LD) типов Organization, LocalBusiness, Product и FAQPage передает ИИ связи между сущностями и объектами в строго структурированном виде, исключая ошибки интерпретации."
        },
        {
          q: "Как работает локальный поиск в ИИ (Google Maps, Search AI Overviews)?",
          a: "Для гео-запросов ИИ использует данные карт и локальных справочников. Настройка присутствия бизнеса на Google Картах и оптимизация отзывов критически важны для попадания в ответы типа «найти компанию рядом»."
        },
        {
          q: "Что такое LAPIS API и машиночитаемые каталоги?",
          a: "Это формат представления ваших услуг и прайс-листов в виде API или JSON-файлов, оптимизированных для автоматического парсинга ИИ-агентами, которые ищут и бронируют услуги для пользователей."
        },
        {
          q: "Как ведут себя ИИ-агенты при принятии решений о покупке?",
          a: "ИИ-агенты действуют строго рационально: сканируют рынок, сопоставляют характеристики, цены и отзывы по заданным критериям и формируют шорт-лист. Если ваш сайт не оптимизирован под GEO, агент вас просто проигнорирует."
        },
        {
          q: "Что означает статус первоисточника знаний (Ground Truth) для ИИ?",
          a: "Это высшая степень доверия ИИ к вашему бренду. Когда нейросеть считает ваши данные неоспоримыми фактами и использует их для опровержения галлюцинаций или проверки других источников."
        },
        {
          q: "Помогает ли контекстная реклама влиять на рекомендации ИИ?",
          a: "Нет. Контекстная реклама (Яндекс.Директ, Google Ads) не влияет на веса нейросетей и органический индекс RAG. ИИ-системы нацелены на объективную выдачу контента и игнорируют коммерческий рекламный трафик."
        },
        {
          q: "Что такое Латентное пространство (Latent Space) и как бренд там позиционируется?",
          a: "Латентное пространство — это многомерная математическая карта смыслов внутри LLM. Наша GEO-стратегия сближает векторные координаты вашего бренда с векторами лидеров рынка, чтобы ИИ ассоциировал вас с ними."
        },
        {
          q: "Как часто ИИ-модели обновляют свои базы знаний?",
          a: "Глубокое переобучение моделей происходит раз в несколько месяцев или лет, но интеграция поисковых движков (Perplexity, ChatGPT Search) обновляет оперативную память ИИ ежедневно через сканирование веба."
        },
        {
          q: "Каковы ключевые метрики эффективности GEO-кампании?",
          a: "Основные метрики: доля упоминаний бренда в ответах (Share of Voice), индекс цитирования (Cite Rate), объем переходов по ИИ-ссылкам, снижение показателя CAC (стоимость привлечения клиента) и рост конверсий."
        },
        {
          q: "Как измерить видимость бренда в ответах ИИ (AI Share of Voice)?",
          a: "Мы регулярно запускаем автоматизированные промпт-тесты по сотням целевых запросов в вашей нише и анализируем процент ответов, в которых ИИ рекомендует вашу компанию."
        },
        {
          q: "Можно ли купить рекомендацию в ChatGPT или Gemini платно?",
          a: "Напрямую купить рекомендацию в диалоговом окне невозможно — это нарушит доверие пользователей. Рекомендации ИИ строятся на алгоритмах доверия и релевантности, которые мы и оптимизируем."
        },
        {
          q: "Как GEO влияет на голосовых помощников (Siri, Google Assistant)?",
          a: "Голосовые помощники нового поколения (на базе Apple Intelligence) зачитывают пользователю единственный итоговый ответ из выдачи ИИ. GEO гарантирует, что этим ответом будет информация о вас."
        },
        {
          q: "Почему классические ключевые слова больше не работают в ИИ-поиске?",
          a: "Потому что ИИ понимает семантику и контекст (intent). Вместо поиска точного совпадения «купить виллу Дубай» ИИ ищет глубокие аналитические материалы, отвечающие на вопрос «какие риски при покупке виллы»."
        },
        {
          q: "Что такое длинные промпты (long-tail prompts) и как под них оптимизировать контент?",
          a: "Это естественные вопросы пользователей из 10-20 слов с описанием множества условий. Мы пишем контент, который детально раскрывает такие комплексные сценарии, чтобы ИИ мог сослаться на нас."
        },
        {
          q: "Как ИИ обрабатывает отзывы клиентов и репутацию на картах?",
          a: "ИИ использует алгоритмы анализа тональности текста (Sentiment Analysis). Он считывает не просто оценку в звездах, а конкретные проблемы и преимущества, описанные пользователями в отзывах на картах и форумах."
        },
        {
          q: "Влияет ли скорость загрузки сайта на индексацию ИИ-краулерами?",
          a: "Да, медленные сайты расходуют краулинговый бюджет ботов. Если сайт не успевает отдавать контент за миллисекунды, ИИ-боты могут прервать соединение и не проиндексировать важные разделы услуг."
        },
        {
          q: "Как работает мультиязычное GEO для международных брендов?",
          a: "Мы связываем локализованные страницы мета-тегами hreflang и создаем идентичные семантические структуры. Это помогает ИИ находить соответствия и рекомендовать вас на русском, английском и вьетнамском языках."
        },
        {
          q: "Какова роль таблиц и списков в выдаче LLM?",
          a: "Таблицы и упорядоченные списки имеют наивысший приоритет при извлечении фактов (AIO extraction). ИИ предпочитает забирать готовые структурированные данные для сравнения продуктов прямо в чате."
        },
        {
          q: "Почему ИИ галлюцинирует и как GEO помогает снизить этот риск для бренда?",
          a: "Галлюцинации возникают из-за неполных или противоречивых данных в сети. GEO структурирует информацию о вашем бизнесе так, чтобы у нейросети не оставалось двусмысленности при генерации ответа."
        },
        {
          q: "Законно ли GEO и не нарушает ли оно правила поисковиков?",
          a: "GEO полностью законно и приветствуется создателями поисковых систем (включая Google и OpenAI). Это белая оптимизация доступности информации, которая помогает машинам лучше понимать веб-контент."
        },
        {
          q: "Как GEO помогает сложным B2B-нишам?",
          a: "В B2B клиенты долго принимают решения и изучают тонны информации. Задавая вопросы ИИ о технологиях или надежности подрядчиков, они получают прямую рекомендацию вашего бренда, подтвержденную авторитетными источниками."
        },
        {
          q: "Как GEO помогает дорогим B2C-сегментам (недвижимость, премиум-клиники)?",
          a: "Платежеспособная аудитория ценит время и делегирует поиск ИИ-ассистентам. Нахождение вашего премиум-сервиса на первом месте в выдаче Perplexity или ChatGPT гарантирует привлечение VIP-клиентов."
        },
        {
          q: "Что произойдет при полной блокировке ИИ-ботов?",
          a: "Ваш сайт полностью исчезнет из результатов поиска ChatGPT Search, Perplexity и Gemini AI Overviews. Вы лишите свой бизнес доступа к самому быстрорастущему источнику лидов."
        },
        {
          q: "В чем разница между RAG и дообучением модели в контексте GEO?",
          a: "Дообучение (Fine-tuning) изменяет внутренние веса модели и происходит редко. RAG динамически извлекает свежие данные вашего сайта во время запроса. GEO оптимизирует именно RAG-компонент поиска."
        },
        {
          q: "Как отзывы в Google Maps влияют на локальные ИИ-ответы?",
          a: "Локальные ИИ-ответы напрямую связаны с геосервисами. Большое количество развернутых отзывов с ключевыми словами на Google Картах поднимает вашу компанию в ИИ-подборках местных заведений."
        },
        {
          q: "Сколько времени требуется для окупаемости инвестиций в GEO?",
          a: "Первые попадания в рекомендации ИИ фиксируются через 3-4 недели. Полная окупаемость инвестиций в GEO достигается на 3-6 месяц за счет притока бесплатных высококонверсионных органических лидов."
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
          a: "GEO (Generative Engine Optimization) optimizes content for direct AI-powered answers (ChatGPT, Perplexity, Gemini). The goal is to make the AI extract and recommend your brand directly in its response. Unlike classic SEO, which targets user clicks on website links, GEO aims to capture 100% Share of Voice in synthetic AI answers."
        },
        {
          q: "How do AI systems collect data about companies?",
          a: "AI systems utilize three primary channels: 1. Live search crawlers (GPTBot, PerplexityBot, ClaudeBot) scanning pages in real-time. 2. Large training datasets (Common Crawl). 3. Structured external databases (Wikidata, Crunchbase) and niche reviews (Reddit, specialized forums)."
        },
        {
          q: "What is RAG (Retrieval-Augmented Generation) and how does it relate to my website?",
          a: "RAG is a technology that allows an AI model to query the live web before responding, extract factual data from your site's pages, and compile a comprehensive summary citing your brand. GEO optimizes your content to be easily extracted by RAG."
        },
        {
          q: "What is the main goal of GEO for B2B and premium brands?",
          a: "To achieve the status of 'Ground Truth' (canonical primary source). The search of the future does not display list of links; it offers a single synthesized conclusion. If the AI recommends your brand, you capture the customer; if not, you are excluded from the choice."
        },
        {
          q: "Which AI search engines does GEO optimize for?",
          a: "The optimization covers all key AI-driven platforms: ChatGPT Search (OpenAI), Perplexity AI, Google Search AI Overviews (Gemini), Microsoft Copilot, and Claude (Anthropic)."
        },
        {
          q: "What is the 'AI Blind Spot'?",
          a: "It's a state where a neural network knows nothing about your company or flags it as irrelevant due to technical blocks: robots.txt restrictions, missing Schema markups, or lack of trusted external mentions."
        },
        {
          q: "Should I block AI crawlers like GPTBot?",
          a: "Blocking crawlers eliminates your brand from AI answers. Instead, we configure high-priority crawler pathways, optimizing site structure to reduce token usage and speed up data scraping."
        },
        {
          q: "What is the AIO Cite Rate metric?",
          a: "It is the primary KPI of GEO campaigns, measuring the percentage of generative responses in your industry that cite, mention, or recommend your brand with active source links."
        },
        {
          q: "What is a Semantic Hub and vector search?",
          a: "Vector search compares the meaning of a query with the meaning of your content. A Semantic Hub is a structure of web pages grouped around thematic concepts rather than raw keywords, helping LLMs map your site to vector embeddings."
        },
        {
          q: "What role do external Brand Mentions play in GEO?",
          a: "AI cross-references your site's data with independent sources. Active discussions, reviews, and brand mentions on platforms like Reddit, Quora, and G2 build the algorithmic trust needed for recommendations."
        },
        {
          q: "How does AI evaluate brand authority and trust?",
          a: "Through cross-validation. When your site's claims align with independent databases (Wikidata, Crunchbase, Wikipedia) and Google Maps reviews, the AI registers your company as a High-Trust Entity."
        },
        {
          q: "What is Direct Answer Optimization (DAO)?",
          a: "DAO is the process of styling and formatting website content into self-contained text blocks that neural networks can easily lift and paste as direct quotes in their answers."
        },
        {
          q: "What is the ideal text structure for AI extraction?",
          a: "An 80-120 word block starting with a direct, concise answer to a user's intent, supported by tables, numbers, or bullet points. Vague language and excessive metaphors should be avoided."
        },
        {
          q: "Why do we need an llms.txt file and how do we set it up?",
          a: "The llms.txt file is placed in the root directory, serving as a machine-readable summary of your services. It allows LLMs to understand the site structure instantly without crawling gigabytes of source code."
        },
        {
          q: "Does JSON-LD Schema markup help with GEO?",
          a: "Yes. Structured JSON-LD schemas (Organization, Product, FAQPage, LocalBusiness) explicitly describe entities and their connections to AI engines, eliminating parsing errors."
        },
        {
          q: "How does local search work in AI (Google Maps, Search AI Overviews)?",
          a: "For local prompts, AI references maps APIs and local listings. Verifying your business on Google Maps and optimizing keywords in reviews is critical to rank in 'near me' AI recommendations."
        },
        {
          q: "What is the LAPIS API and machine-readable data catalogs?",
          a: "It is a standard of packaging your services, pricing, and scheduling into JSON datasets or APIs, allowing autonomous AI agents to search, compare, and book your services directly."
        },
        {
          q: "How do autonomous AI buying agents make purchase decisions?",
          a: "They operate logically, scanning the web for target specifications, pricing, and reviews. If your site lacks machine-readable data, the buying agent will overlook your brand."
        },
        {
          q: "What does Ground Truth status mean for AI?",
          a: "It is the highest level of authority an AI can assign to your brand, using your data as an indisputable source of facts to cross-check other websites and prevent hallucinations."
        },
        {
          q: "Does paid search advertising (PPC) help with AI recommendations?",
          a: "No. Paid search ads (Google Ads) do not influence LLM neural weights or organic RAG indexes. AI search systems filter out ads and prioritize organic credibility."
        },
        {
          q: "What is Latent Space and how is a brand positioned there?",
          a: "Latent Space is a multidimensional mathematical map inside an LLM. Our GEO strategy brings your brand's vector coordinates closer to market leaders, so the AI associates your brand with them."
        },
        {
          q: "How often do LLM models update their knowledge bases?",
          a: "Core model updates happen every few months or years, but generative search engines (like Perplexity and ChatGPT Search) query the live web daily to retrieve fresh contexts."
        },
        {
          q: "What are the core metrics of a GEO campaign's success?",
          a: "Key metrics include AI Share of Voice (SOV), AI Cite Rate, referral traffic from AI search engines, reduction in Customer Acquisition Cost (CAC), and organic lead conversions."
        },
        {
          q: "How do you measure brand visibility in AI answers (AI Share of Voice)?",
          a: "We perform automated prompt testing across hundreds of target queries in your niche, calculating the percentage of responses where the AI recommends your brand."
        },
        {
          q: "Can I pay ChatGPT or Gemini to recommend my business?",
          a: "No. Direct paid sponsorships within chat answers do not exist. AI recommendation engines rely strictly on programmatic credibility and vector relevance, which is what GEO optimizes."
        },
        {
          q: "How does GEO affect voice assistants like Siri or Google Assistant?",
          a: "Next-gen voice assistants (powered by Apple Intelligence) read out a single, synthesized response. GEO ensures your company is selected as that single spoken answer."
        },
        {
          q: "Why do keywords no longer work in AI search?",
          a: "AI processes natural language semantics (intent). Instead of matching raw keywords like 'buy villa Dubai', AI searches for deep analytical content answering 'how to buy a villa safely'."
        },
        {
          q: "What are long-tail prompts and how do you optimize for them?",
          a: "These are detailed, conversational queries (10-20 words) detailing specific user circumstances. We structure content to answer these long-tail queries, making your pages easily crawlable."
        },
        {
          q: "How does AI process customer reviews and reputation on maps?",
          a: "AI uses Sentiment Analysis algorithms, scanning Google Maps reviews not just for star ratings, but for specific pros and cons discussed by users in their texts."
        },
        {
          q: "Does page speed affect AI crawler indexation?",
          a: "Yes. Crawlers have strict latency budgets. If your website is slow, crawlers might terminate the connection early, resulting in missing services or outdated pricing in AI summaries."
        },
        {
          q: "How does multilingual GEO work for international brands?",
          a: "We link localized pages with hreflang tags and build matching semantic schemas. This allows AI to reference your brand correctly across English, Russian, and Vietnamese."
        },
        {
          q: "What is the role of tables and lists in LLM outputs?",
          a: "Tables and bullet lists have high priority in AIO extraction. LLMs prefer pulling structured data to display side-by-side comparisons directly inside the chat interface."
        },
        {
          q: "Why does AI hallucinate and how does GEO minimize this risk?",
          a: "Hallucinations occur due to incomplete or contradictory data on the web. GEO organizes your brand info clearly, eliminating semantic ambiguities for the LLM generator."
        },
        {
          q: "Is GEO legal and does it comply with search engine policies?",
          a: "Yes. GEO is fully legal and encouraged by search engines (including Google and OpenAI). It is white-hat optimization focusing on clear data readability and accessibility for web crawlers."
        },
        {
          q: "How does GEO help complex B2B niches?",
          a: "B2B decisions are research-heavy. When buyers ask LLMs about specific technologies or vendor trust, being recommended directly by the AI positions your brand as the industry leader."
        },
        {
          q: "How does GEO help high-ticket B2C (real estate, premium clinics)?",
          a: "High-ticket buyers delegate initial research to AI. Having your service rank first in Perplexity or ChatGPT searches places your brand directly in front of premium buyers."
        },
        {
          q: "What happens if I block AI agents in robots.txt?",
          a: "Your site will be omitted by agents like GPTBot or PerplexityBot. Your brand will completely disappear from ChatGPT Search, Perplexity, and Gemini AI Overviews."
        },
        {
          q: "What is the difference between RAG and fine-tuning in GEO?",
          a: "Fine-tuning modifies model weights (costly, static). RAG retrieves live web data during a query. GEO optimizes your pages to be retrieved in real-time RAG operations."
        },
        {
          q: "How do Google Maps reviews affect local AI query outcomes?",
          a: "Local AI responses pull heavily from maps databases. A high rating and detailed, keyword-rich reviews on Google Maps boost your visibility in local AI queries."
        },
        {
          q: "How long does it take to see ROI on GEO investments?",
          a: "Initial AI citations appear in 3-4 weeks. Full ROI is achieved in 3-6 months, as organic, high-intent AI referrals begin replacing expensive traditional advertising."
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
          desc: "Phát triển trung tâm ngữ nghĩa. Tối ưu hóa nội dung chuyên sâu, xây dựng sự hiện diện trên các trang tổng hợp độc lập, quản lý lượt đề cập thương hiệu (Brand Mentions), và thiết lập/tối ưu hóa sự hiện diện của doanh nghiệp trên Google Maps cho tìm kiếm AI cục bộ.",
          result: "Tăng trưởng ổn định chỉ số AIO Cite Rate > 15%. Xuất hiện đều đặn trong kết quả tìm kiếm của AI và các truy vấn bản đồ địa phương."
        },
        {
          name: "Agentic Dominance (Cao cấp)",
          tag: "Cao cấp",
          desc: "Tích hợp vào Đồ thị Tri thức toàn cầu (Knowledge Graphs), Digital PR, cấu trúc dữ liệu LAPIS cho các AI Agent tự trị, cấu hình nâng cao trên Google Maps và tối ưu hóa sâu cho các công cụ AI thế hệ mới để thống trị hoàn toàn tìm kiếm AI địa phương.",
          result: "Thống trị hoàn toàn trong các câu lệnh (prompts) chuyên ngành. Thiết lập vị thế Ground Truth và vị trí dẫn đầu trên bản đồ."
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
          a: "GEO (Tối ưu hóa Công cụ Tạo sinh) tập trung tối ưu hóa nội dung cho câu trả lời trực tiếp của AI (ChatGPT, Perplexity, Gemini). Mục tiêu là giúp AI trích xuất và đề xuất thương hiệu của bạn trong câu trả lời. Khác với SEO truyền thống nhắm vào lượt click liên kết, GEO hướng tới chiếm 100% tỷ lệ hiển thị trong câu trả lời của AI."
        },
        {
          q: "Các hệ thống AI thu thập dữ liệu doanh nghiệp bằng cách nào?",
          a: "AI sử dụng ba kênh chính: 1. Các bot quét trực tiếp (GPTBot, PerplexityBot, ClaudeBot) quét trang web thời gian thực. 2. Tập dữ liệu huấn luyện lớn (Common Crawl). 3. Các cơ sở dữ liệu có cấu trúc (Wikidata, Crunchbase) và trang đánh giá uy tín (Reddit, diễn đàn chuyên ngành)."
        },
        {
          q: "RAG (Retrieval-Augmented Generation) là gì và liên quan gì đến trang web của tôi?",
          a: "RAG là công nghệ cho phép mô hình AI tìm kiếm web trực tiếp trước khi trả lời, trích xuất dữ liệu thực tế từ trang web của bạn và tổng hợp câu trả lời kèm nguồn trích dẫn. GEO giúp tối ưu hóa trang web của bạn để RAG dễ dàng trích xuất."
        },
        {
          q: "Mục tiêu chính của GEO đối với doanh nghiệp B2B và cao cấp là gì?",
          a: "Thiết lập vị thế 'Ground Truth' (Nguồn tin cậy tuyệt đối). Tìm kiếm tương lai không hiển thị danh sách link; nó đưa ra một kết luận tổng hợp duy nhất. Nếu AI đề xuất bạn, bạn có khách hàng; nếu không, bạn bị loại khỏi cuộc chơi."
        },
        {
          q: "GEO tối ưu hóa cho các công cụ tìm kiếm AI nào?",
          a: "Tối ưu hóa bao gồm tất cả các nền tảng AI lớn: ChatGPT Search (OpenAI), Perplexity AI, Google Search AI Overviews (Gemini), Microsoft Copilot và Claude (Anthropic)."
        },
        {
          q: "Vùng mù AI (AI Blind Spot) là gì?",
          a: "Đó là trạng thái mô hình AI không biết đến thương hiệu của bạn hoặc đánh giá nó không liên quan do lỗi kỹ thuật: chặn trong robots.txt, thiếu Schema JSON-LD hoặc thiếu các đề xuất uy tín từ bên ngoài."
        },
        {
          q: "Có nên chặn các bot AI như GPTBot không?",
          a: "Chặn bot quét sẽ loại bỏ doanh nghiệp của bạn khỏi câu trả lời của AI. Thay vào đó, chúng tôi cấu hình quyền truy cập ưu tiên cho bot quét, tối ưu hóa cấu trúc để giảm tiêu thụ tài nguyên quét."
        },
        {
          q: "Chỉ số AIO Cite Rate là gì?",
          a: "Là KPI cốt lõi trong GEO, đo lường tỷ lệ phần trăm câu trả lời của AI trong ngành của bạn trích dẫn hoặc đề xuất thương hiệu của bạn kèm liên kết hoạt động dẫn tới trang web."
        },
        {
          q: "Trung tâm ngữ nghĩa và tìm kiếm vector là gì?",
          a: "Tìm kiếm vector so khớp ý định câu hỏi với ý nghĩa nội dung. Trung tâm ngữ nghĩa là cấu trúc trang web được nhóm theo chủ đề thay vị từ khóa đơn lẻ, giúp LLM dễ dàng chuyển đổi trang web thành vector ngữ nghĩa."
        },
        {
          q: "Các đề xuất thương hiệu bên ngoài (Brand Mentions) đóng vai trò gì?",
          a: "AI không chỉ tin tưởng trang web của bạn — nó đối chiếu dữ liệu với bên thứ ba. Các cuộc thảo luận và đánh giá trên Reddit, Quora, và các trang tổng hợp giúp xây dựng độ tin cậy thuật toán để AI đề xuất bạn."
        },
        {
          q: "AI đánh giá độ tin cậy của thương hiệu bằng cách nào?",
          a: "Thông qua đối chiếu chéo dữ liệu. Khi thông tin trên trang web của bạn khớp với Wikidata, Crunchbase, Wikipedia và đánh giá trên bản đồ, AI sẽ xếp doanh nghiệp vào nhóm Thực thể đáng tin cậy (High-Trust Entity)."
        },
        {
          q: "Tối ưu hóa câu trả lời trực tiếp (DAO) là gì?",
          a: "DAO (Direct Answer Optimization) là định dạng nội dung trang web thành các khối văn bản độc lập để mô hình AI dễ dàng trích xuất và hiển thị trực tiếp làm câu trả lời mà không cần diễn đạt lại."
        },
        {
          q: "Cấu trúc văn bản lý tưởng để AI trích xuất là gì?",
          a: "Khối văn bản từ 80-120 từ bắt đầu bằng câu trả lời trực tiếp cho ý định người dùng, hỗ trợ bởi bảng dữ liệu, con số hoặc danh sách. Nên tránh các ẩn dụ mơ hồ và từ ngữ sáo rỗng."
        },
        {
          q: "Tại sao cần file llms.txt và cấu hình như thế nào?",
          a: "File llms.txt nằm ở thư mục gốc của trang web, cung cấp bản tóm tắt cấu trúc dịch vụ cho bot AI đọc nhanh chóng mà không lãng phí dung lượng cửa sổ ngữ cảnh (context window)."
        },
        {
          q: "Cấu trúc Schema JSON-LD có giúp ích cho GEO không?",
          a: "Có. Schema JSON-LD (Organization, Product, FAQPage, LocalBusiness) định nghĩa rõ ràng mối quan hệ giữa các thực thể và đối tượng cho AI, giúp loại bỏ các lỗi phân tích cú pháp."
        },
        {
          q: "AI xử lý tìm kiếm địa phương như thế nào (Google Maps, Search AI Overviews)?",
          a: "Với các truy vấn địa phương, AI sử dụng dữ liệu bản đồ và danh bạ địa phương. Xác minh doanh nghiệp trên Google Maps và tối ưu hóa từ khóa trong đánh giá là yếu tố then chốt để xuất hiện ở câu trả lời cục bộ."
        },
        {
          q: "LAPIS API và danh mục dữ liệu máy đọc được là gì?",
          a: "Là định dạng đóng gói dịch vụ, giá cả và lịch trình dưới dạng API hoặc JSON giúp các AI Agent tự trị có thể tìm kiếm, so sánh và đặt dịch vụ trực tiếp không cần con người."
        },
        {
          q: "AI Agent tự trị hành xử thế nào khi đưa ra quyết định mua hàng?",
          a: "Chúng hoạt động logic: quét thị trường, so sánh thông số, giá cả và đánh giá theo tiêu chí đã đặt. Nếu trang web của bạn thiếu dữ liệu máy đọc được, AI Agent sẽ bỏ qua bạn."
        },
        {
          q: "Trạng thái nguồn thông tin chuẩn mực (Ground Truth) có nghĩa là gì?",
          a: "Là mức độ tin cậy cao nhất của AI dành cho thương hiệu của bạn, sử dụng dữ liệu của bạn làm sự thật hiển nhiên để đối chiếu các nguồn khác và ngăn chặn ảo giác của AI."
        },
        {
          q: "Quảng cáo trả tiền (PPC) có giúp xuất hiện trong đề xuất AI không?",
          a: "Không. Quảng cáo (Google Ads) không ảnh hưởng đến trọng số mô hình hoặc chỉ mục RAG. AI lọc bỏ quảng cáo thương mại và ưu tiên nội dung hữu cơ có độ tin cậy cao."
        },
        {
          q: "Không gian ẩn (Latent Space) là gì và thương hiệu được định vị thế nào ở đó?",
          a: "Không gian ẩn là bản đồ toán học đa chiều bên trong LLM. Chiến lược GEO đưa tọa độ vector của thương hiệu bạn đến gần các đối thủ dẫn đầu để AI tự động liên kết bạn với họ."
        },
        {
          q: "Các mô hình AI cập nhật cơ sở tri thức bao lâu một lần?",
          a: "Các bản cập nhật mô hình gốc diễn ra sau vài tháng hoặc vài năm, nhưng các công cụ tìm kiếm AI (Perplexity, ChatGPT Search) quét mạng thời gian thực hàng ngày để cập nhật thông tin mới nhất."
        },
        {
          q: "Các chỉ số đo lường hiệu quả GEO cốt lõi là gì?",
          a: "Các chỉ số chính bao gồm AI Share of Voice (SOV), AI Cite Rate, lưu lượng giới thiệu từ AI, giảm chi phí thu hút khách hàng (CAC) và tỷ lệ chuyển đổi khách hàng tiềm năng hữu cơ."
        },
        {
          q: "Làm thế nào để đo lường độ hiển thị thương hiệu trong AI (AI Share of Voice)?",
          a: "Chúng tôi chạy thử nghiệm tự động hàng trăm câu lệnh mục tiêu trong ngách của bạn và tính toán tỷ lệ phần trăm câu trả lời của AI có đề xuất thương hiệu bạn."
        },
        {
          q: "Có thể trả tiền để ChatGPT hoặc Gemini đề xuất doanh nghiệp của tôi không?",
          a: "Không. Không có quảng cáo trả phí trực tiếp trong câu trả lời chat. Các công cụ đề xuất AI dựa trên thuật toán độ tin cậy và mức độ liên quan ngữ nghĩa mà GEO tối ưu hóa."
        },
        {
          q: "GEO ảnh hưởng thế nào đến các trợ lý giọng nói (Siri, Google Assistant)?",
          a: "Các trợ lý giọng nói thế hệ mới (hỗ trợ bởi Apple Intelligence) đọc ra một câu trả lời tổng hợp duy nhất. GEO đảm bảo doanh nghiệp của bạn được chọn làm câu trả lời duy nhất đó."
        },
        {
          q: "Tại sao từ khóa truyền thống не hoạt động trong AI search?",
          a: "Vì AI hiểu ngữ nghĩa và ý định người dùng (intent). Thay vì tìm từ khóa chính xác như 'mua biệt thự Dubai', AI tìm kiếm các nội dung phân tích sâu trả lời cho câu hỏi 'mua biệt thự an toàn thế nào'."
        },
        {
          q: "Long-tail prompt là gì và làm thế nào để tối ưu hóa nội dung?",
          a: "Là câu lệnh chi tiết từ 10-20 từ mô tả tình huống cụ thể của người dùng. Chúng tôi xây dựng nội dung giải quyết chi tiết các câu lệnh này giúp AI dễ quét và trích dẫn."
        },
        {
          q: "AI xử lý đánh giá của khách hàng và danh tiếng trên bản đồ thế nào?",
          a: "AI sử dụng thuật toán Sentiment Analysis (Phân tích cảm xúc), quét đánh giá Google Maps không chỉ dựa trên xếp hạng sao mà còn dựa trên ưu nhược điểm cụ thể được người dùng viết."
        },
        {
          q: "Tốc độ tải trang có ảnh hưởng đến việc quét dữ liệu của bot AI không?",
          a: "Có. Bot quét có giới hạn thời gian phản hồi. Nếu trang web của bạn tải chậm, bot có thể ngắt kết nối sớm, dẫn đến việc thiếu dịch vụ hoặc bảng giá cũ trong tóm tắt AI."
        },
        {
          q: "GEO đa ngôn ngữ hoạt động thế nào đối với thương hiệu quốc tế?",
          a: "Chúng tôi liên kết các trang ngôn ngữ bằng thẻ hreflang và xây dựng cấu trúc ngữ nghĩa đồng nhất. Điều này giúp AI tham chiếu và đề xuất bạn chính xác bằng tiếng Anh, tiếng Nga và tiếng Việt."
        },
        {
          q: "Vai trò của bảng biểu và danh sách trong đầu ra của LLM là gì?",
          a: "Bảng biểu và danh sách được ưu tiên cao trong trích xuất AIO. LLM thích kéo dữ liệu có cấu trúc để hiển thị so sánh trực quan cho người dùng ngay trong khung chat."
        },
        {
          q: "Tại sao AI bị ảo giác và GEO giúp giảm thiểu rủi ro này thế nào?",
          a: "Ảo giác xảy ra do dữ liệu trên mạng thiếu hoặc mâu thuẫn. GEO tổ chức thông tin thương hiệu rõ ràng, loại bỏ các mơ hồ ngữ nghĩa đối với bộ tạo sinh của LLM."
        },
        {
          q: "GEO có hợp pháp và tuân thủ các điều khoản công cụ tìm kiếm không?",
          a: "Có. GEO hoàn toàn hợp pháp và được khuyến khích bởi các công cụ tìm kiếm (bao gồm Google và OpenAI). Đây là tối ưu hóa giúp máy hiểu nội dung web tốt hơn."
        },
        {
          q: "GEO giúp ích thế nào cho doanh nghiệp B2B ngách?",
          a: "Trong B2B, quyết định mua hàng cần nghiên cứu kỹ. Khi khách hàng hỏi LLM về công nghệ hoặc uy tín nhà thầu, việc được AI đề xuất trực tiếp sẽ đưa thương hiệu bạn dẫn đầu ngành."
        },
        {
          q: "GEO giúp ích thế nào cho B2C giá trị cao (bất động sản, phòng khám cao cấp)?",
          a: "Khách hàng cao cấp dùng AI để lọc lựa chọn nhằm tiết kiệm thời gian. Việc đứng đầu đề xuất trên Perplexity hay ChatGPT đưa bạn tiếp cận trực tiếp khách hàng VIP ở giai đoạn quyết định."
        },
        {
          q: "Điều gì xảy ra nếu chặn các bot AI trong robots.txt?",
          a: "Trang web của bạn sẽ bị bot như GPTBot hoặc PerplexityBot bỏ qua. Thương hiệu của bạn sẽ hoàn toàn biến mất khỏi ChatGPT Search, Perplexity và Gemini AI Overviews."
        },
        {
          q: "Sự khác biệt giữa RAG và tinh chỉnh (fine-tuning) trong GEO là gì?",
          a: "Tinh chỉnh sửa đổi trọng số mô hình (tĩnh, đắt đỏ). RAG truy xuất dữ liệu web động trong lúc truy vấn. GEO tối ưu hóa chính các trang web của bạn để được truy xuất trong RAG thời gian thực."
        },
        {
          q: "Đánh giá Google Maps ảnh hưởng thế nào đến câu trả lời AI cục bộ?",
          a: "Câu trả lời AI địa phương lấy thông tin chủ yếu từ cơ sở dữ liệu bản đồ. Xếp hạng cao và đánh giá chi tiết chứa từ khóa trên Google Maps giúp tăng vị thế đề xuất địa phương của bạn."
        },
        {
          q: "Mất bao lâu để thấy hiệu quả đầu tư (ROI) từ GEO?",
          a: "Đề xuất AI đầu tiên xuất hiện sau 3-4 tuần. ROI đầy đủ đạt được từ tháng 3-6 khi lượng khách giới thiệu hữu cơ miễn phí từ AI bắt đầu bù đắp chi phí quảng cáo đắt đỏ."
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
