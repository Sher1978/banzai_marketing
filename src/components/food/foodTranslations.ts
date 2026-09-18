export const getFoodT = (lang: string = 'en') => {
  const isRu = lang === 'ru';
  const isUk = lang === 'uk';
  // Default is English ('en')

  return {
    // Header
    cities: isRu
      ? 'Пхукет • Нячанг • Бали (Чангу) • Бангкок • Дананг'
      : isUk
      ? 'Пхукет • Нячанг • Балі (Чангу) • Бангкок • Дананг'
      : 'Phuket • Nha Trang • Bali (Canggu) • Bangkok • Da Nang',
    headerAuditBtn: isRu
      ? 'Забронировать аудит'
      : isUk
      ? 'Забронювати аудит'
      : 'Book Free Audit',

    // Hero Section
    heroBadge: isRu
      ? '⚡ АГЕНТСТВО РОСТА ВЫРУЧКИ В GRAB И FOODPANDA ПО ВСЕЙ АЗИИ'
      : isUk
      ? '⚡ АГЕНТСТВО ЗРОСТАННЯ ВИРУЧКИ В GRAB ТА FOODPANDA ПО ВСІЙ АЗІЇ'
      : '⚡ GRAB & FOODPANDA REVENUE GROWTH AGENCY IN ASIA',
    heroCountries: isRu
      ? '🇹🇭 Таиланд • 🇻🇳 Вьетнам • 🇮🇩 Бали • 🇲🇾 Малайзия'
      : isUk
      ? '🇹🇭 Таїланд • 🇻🇳 В’єтнам • 🇮🇩 Балі • 🇲🇾 Малайзія'
      : '🇹🇭 Thailand • 🇻🇳 Vietnam • 🇮🇩 Bali • 🇲🇾 Malaysia',
    heroTitlePrefix: isRu
      ? 'Доставка — это ваш основной бизнес, а не подработка. Мы увеличим вашу прибыль из Grab '
      : isUk
      ? 'Доставка — це ваш основний бізнес, а не підробіток. Ми збільшимо ваш прибуток з Grab '
      : 'Delivery is your primary sales engine, not a side hustle. We will triple your Grab profit ',
    heroTitleHighlight: isRu ? 'в 3 раза.' : isUk ? 'у 3 рази.' : 'by 3X in 30 days.',
    heroSub: isRu
      ? 'Ваши клиенты не пришли к вам сегодня не потому, что у вас невкусно. Они просто ждут, когда еда приедет к ним. Запускаем ваш рост на платформах Grab и Foodpanda по всей Азии. Настраиваем доставку под ключ и берем управление на себя за процент от роста чистой прибыли.'
      : isUk
      ? 'Ваші клієнти не прийшли до вас сьогодні не тому, що у вас несмачно. Вони просто чекають, коли їжа приїде до них. Запускаємо ваше зростання на платформах Grab та Foodpanda по всій Азії. Налаштовуємо доставку під ключ та беремо управління на себе за відсоток від приросту чистого прибутку.'
      : 'Your guests didn\'t visit your venue today not because your food isn\'t delicious — they simply want meals delivered directly to their doors. We launch your revenue growth on Grab & Foodpanda across Asia. Turnkey setup + monthly management for a percentage of net profit growth.',
    heroCta: isRu
      ? 'Забронировать аудит заведения'
      : isUk
      ? 'Забронювати аудит закладу'
      : 'Book Restaurant Audit',
    heroTrust: isRu
      ? 'Оплата только с прироста чистой прибыли'
      : isUk
      ? 'Оплата тільки з приросту чистого прибутку'
      : 'Pay only from net profit growth',

    // Hero Calculator & FOMO
    calcTitle: isRu
      ? 'Интерактивный Калькулятор'
      : isUk
      ? 'Інтерактивний Калькулятор'
      : 'Interactive Calculator',
    calcSub: isRu
      ? 'Сколько вы теряете прямо сейчас?'
      : isUk
      ? 'Скільки ви втрачаєте просто зараз?'
      : 'How much revenue are you losing right now?',
    calcLabel: isRu
      ? 'Укажите вашу текущую выручку в зале (в месяц):'
      : isUk
      ? 'Вкажіть вашу поточну виручку в залі (на місяць):'
      : 'Enter your current monthly dine-in revenue:',
    calcLossTag: isRu
      ? 'Упущенный потенциал доставки'
      : isUk
      ? 'Упущений потенціал доставки'
      : 'Missed Delivery Potential',
    calcLossTextPrefix: isRu
      ? 'Вы упускаете минимум '
      : isUk
      ? 'Ви упускаєте щонайменше '
      : 'You are missing at least ',
    calcLossTextSuffix: isRu
      ? ' из Grab'
      : isUk
      ? ' з Grab'
      : ' from Grab delivery',
    calcLossSub: isRu
      ? 'Если вы думаете, что доставка — это лишь приятный бонус к залу, вы забираете только 30% своего реального потенциала на азиатском рынке.'
      : isUk
      ? 'Якщо ви думаєте, що доставка — це лише приємний бонус до залу, ви забираєте лише 30% свого реального потенціалу на азійському ринку.'
      : 'If you treat delivery as just a side bonus to your dine-in hall, you are capturing only 30% of your actual potential in Asian markets.',

    // FOMO Cards
    fomoHeader: isRu ? 'ЗАЧЕМ ВАМ GRAB?' : isUk ? 'НАВІЩО ВАМ GRAB?' : 'WHY GRAB & FOODPANDA?',
    fomo1Badge: isRu ? 'Бесконечная вместимость' : isUk ? 'Нескінченна місткість' : 'Infinite Capacity',
    fomo1Title: isRu ? '⚡ Нет потолка по столам.' : isUk ? '⚡ Немає стелі по столах.' : '⚡ No table capacity limit.',
    fomo1Text: isRu
      ? 'Офлайн вы ограничены 15 столиками. В агрегаторах у вас бесконечный зал на 1000 мест. Ваш ресторан может зарабатывать в разы больше своей физической вместимости.'
      : isUk
      ? 'Офлайн ви обмежені 15 столиками. В агрегаторах у вас нескінченний зал на 1000 місць. Ваш ресторан може заробляти в рази більше своєї фізичної місткості.'
      : 'Offline you are capped at 15 tables. In food aggregators you possess an infinite 1,000-seat hall. Your restaurant can generate multiple times more revenue than its physical seating allows.',
    fomo2Badge: isRu ? 'Поведение туристов в Азии' : isUk ? 'Поведінка туристів в Азії' : 'Tourist Behavior in Asia',
    fomo2Title: isRu ? '⚡ Туристам плевать на ваши дорогие диваны.' : isUk ? '⚡ Туристам байдуже до ваших дорогих диванів.' : '⚡ Tourists don\'t care about your expensive sofas.',
    fomo2Text: isRu
      ? 'Вы вложили $50,000 в ремонт и атмосферу. Но 8 из 10 туристов в курортных городах сейчас открывают приложение, потому что хотят есть «здесь и сейчас». Им важны сочные фото, отзывы и горячая еда, а не ваши люстры.'
      : isUk
      ? 'Ви вклали $50,000 у ремонт та атмосферу. Але 8 з 10 туристів у курортних містах зараз відкривають додаток, бо хочуть їсти «тут і зараз». Їм важливі соковиті фото, відгуки та гаряча їжа, а не ваші люстри.'
      : 'You invested $50,000 into interior decor. But 8 out of 10 resort tourists open Grab because they want instant food delivered right now. They care about mouthwatering photos, ratings, and hot food — not your chandeliers.',
    fomo3Badge: isRu ? 'Рынок Азии 2026' : isUk ? 'Ринок Азії 2026' : 'Asia Market 2026',
    fomo3Title: isRu ? '⚡ Диджитал-экспансия Азии.' : isUk ? '⚡ Діджитал-експансія Азії.' : '⚡ Asian Digital Expansion.',
    fomo3Text: isRu
      ? 'Глобальный рынок доставки в Азии стабильно растет каждый год. Тот, кто не заберет ТОП выдачи агрегатора сегодня, завтра останется с пустым залом.'
      : isUk
      ? 'Глобальний ринок доставки в Азії стабільно зростає щороку. Той, хто не забере ТОП видачі агрегатора сьогодні, завтра залишиться з порожнім залом.'
      : 'The food delivery market in Asia grows steadily every year. Venues that fail to capture TOP aggregator rankings today will face empty dining halls tomorrow.',

    // Problem Section
    probBadge: isRu ? 'Главный миф владельцев ресторанов' : isUk ? 'Головний міф власників ресторанів' : 'Main Restaurant Owner Myth',
    probTitle: isRu
      ? 'Думаете, достаточно просто добавить меню в приложение и ждать курьеров?'
      : isUk
      ? 'Думаєте, достатньо просто додати меню в додаток і чекати на кур\'єрів?'
      : 'Think just uploading a menu to Grab and waiting for drivers is enough?',
    probSub: isRu
      ? 'На улице вы конкурируете с тремя заведениями по соседству. Внутри Grab вы одновременно конкурируете с сотней ресторанов в радиусе 5 км.'
      : isUk
      ? 'На вулиці ви конкуруєте з трьома закладами по сусідству. Всередині Grab ви одночасно конкуруєте із сотнею ресторанів у радіусі 5 км.'
      : 'On the street you compete with 3 neighbors. Inside Grab you compete simultaneously with 100+ restaurants within a 5 km radius.',
    probAlert: isRu
      ? 'Если вы просто загрузили прайс-лист — вы невидимы. Присутствие ради присутствия — это мертвый профиль и минус 30% комиссии платформе на пустом месте.'
      : isUk
      ? 'Якщо ви просто завантажили прайс-лист — ви невидимі. Присутність заради присутності — це мертвий профіль і мінус 30% комісії платформі на порожньому місці.'
      : 'If you simply uploaded a price list — you are invisible. Passive presence yields a dead profile and burns 30% platform fees for zero gain.',

    p1Tag: isRu ? 'Утечка чека' : isUk ? 'Витік чека' : 'Ticket Leak',
    p1Title: isRu ? 'Нет продуктовой матрицы' : isUk ? 'Немає продуктової матриці' : 'No Product Matrix',
    p1Desc: isRu
      ? 'Вы продаете те же блюда, что и в зале. Без специальных «Grab-комбо», апселов и правильных групп модификаторов средний чек не растет, а клиент уходит к более продуманным сетам.'
      : isUk
      ? 'Ви продаєте ті ж страви, що й у залі. Без спеціальних «Grab-комбо», апселів та правильних груп модифікаторів середній чек не зростає, а клієнт іде до більш продуманих сетів.'
      : 'You sell identical dine-in items. Without custom "Grab-combos", upsells, and structured modifiers, your average order value stays low while guests order from better bundled competitors.',
    p1WidgetHeader: isRu ? 'Схема Grab Food-Комбо' : isUk ? 'Схема Grab Food-Комбо' : 'Grab Food-Combo Architecture',
    p1WidgetBadge: isRu ? '+35% к чеку' : isUk ? '+35% до чека' : '+35% Order Value',
    p1Item1: isRu ? 'Сэндвич' : isUk ? 'Сендвіч' : 'Sandwich',
    p1Item2: isRu ? 'Десерт' : isUk ? 'Десерт' : 'Dessert',
    p1Item3: isRu ? 'Напиток' : isUk ? 'Напій' : 'Drink',
    p1Result: isRu ? 'Итоговый Grab-сет:' : isUk ? 'Підсумковий Grab-сет:' : 'Final Grab Combo:',

    p2Tag: isRu ? 'Невидимость в ТОПе' : isUk ? 'Невидимість у ТОПі' : 'TOP Invisibility',
    p2Title: isRu ? 'Слепые зоны алгоритмов' : isUk ? 'Сліпі зони алгоритмів' : 'Algorithm Blind Spots',
    p2Desc: isRu
      ? 'Отсутствие SEO-ключей в названиях, неправильно настроенные «промо-часы» (Happy Hours) и мертвые акции, сжигающие маржу без реального роста рейтинга.'
      : isUk
      ? 'Відсутність SEO-ключів у назвах, неправильно налаштовані «промо-години» (Happy Hours) та мертві акції, що спалюють маржу без реального зростання рейтингу.'
      : 'Lack of SEO keywords in dish titles, misconfigured Happy Hours, and margin-draining promos that fail to improve rankings.',
    p2WidgetHeader: isRu ? 'Баланс аккаунта в Grab' : isUk ? 'Баланс акаунта в Grab' : 'Grab Account Balance',
    p2WidgetBadge: isRu ? 'Слив маржи' : isUk ? 'Злив маржі' : 'Margin Drain',
    p2WidgetStat: isRu ? 'Потерянный потенциал выручки' : isUk ? 'Втрачений потенціал виручки' : 'Lost Revenue Potential',
    p2WidgetReason: isRu ? 'Причина: Невидимость в поисках' : isUk ? 'Причина: Невидимість у пошуку' : 'Cause: Search Invisibility',

    p3Tag: isRu ? 'Дефицит ресурса' : isUk ? 'Дефіцит ресурсу' : 'Resource Deficit',
    p3Title: isRu ? 'Это требует ежедневной работы' : isUk ? 'Це вимагає щоденної роботи' : 'Requires Daily Work',
    p3Desc: isRu
      ? 'В Grab нужно играть каждый день — тестировать офферы, управлять ставками рекламы, решать проблемы с курьерами. У вас, как у владельца, на это просто нет времени.'
      : isUk
      ? 'У Grab потрібно грати щодня — тестувати офери, керувати ставками реклами, вирішувати проблеми з кур\'єрами. У вас, як у власника, на це просто немає часу.'
      : 'Winning in Grab requires daily optimization — testing offers, tweaking ad bids, resolving driver delays. As a business owner, you don\'t have time for this micro-management.',
    p3WidgetHeader: isRu ? 'Затраты времени владельца' : isUk ? 'Витрати часу власника' : 'Owner Time Spent',
    p3WidgetBadge: isRu ? '-4.5 ч / день' : isUk ? '-4.5 год / день' : '-4.5 hrs / day',
    p3WidgetControl: isRu ? 'Ручной контроль' : isUk ? 'Ручний контроль' : 'Manual Control',
    p3WidgetSub: isRu ? 'Ставки, курьеры, отзывы' : isUk ? 'Ставки, кур\'єри, відгуки' : 'Bids, drivers, reviews',
    p3WidgetStatus: isRu ? 'Статус внимания:' : isUk ? 'Статус уваги:' : 'Attention status:',
    p3WidgetStatusVal: isRu ? '100% распыление' : isUk ? '100% розпорошення' : '100% distraction',

    // Solution Section
    solBadge: isRu ? 'Полное агентское сопровождение' : isUk ? 'Повне агентське супровід' : 'Full Agency Management',
    solTitle: isRu
      ? 'Эту ежедневную войну с алгоритмами ведем мы.'
      : isUk
      ? 'Цю щоденну війну з алгоритмами ведемо ми.'
      : 'We fight the daily battle with search algorithms for you.',
    solSub: isRu
      ? 'Мы полностью забираем на себя операционную работу с платформами доставки, обеспечивая постоянное обслуживание, управление, маркетинг, аналитику и развитие вашего аккаунта Grab на полном автопилоте.'
      : isUk
      ? 'Ми повністю беремо на себе операційну роботу з платформами доставки, забезпечуючи постійне обслуговування, управління, маркетинг, аналітику та розвиток вашого акаунта Grab на повному автопілоті.'
      : 'We assume 100% of operational management across delivery platforms, providing continuous updates, ad management, analytics, and menu optimization on full autopilot.',
    
    stage1Badge: isRu ? 'ЭТАП 1' : isUk ? 'ЕТАП 1' : 'STAGE 1',
    stage1Tag: isRu ? 'Разовый Setup' : isUk ? 'Разовий Setup' : 'One-time Setup',
    stage1Title: isRu ? 'Глубокая аналитика и Setup' : isUk ? 'Глибока аналітика та Setup' : 'Deep Analytics & Setup',
    stage1Price: isRu ? 'Фиксированная настройка' : isUk ? 'Фіксоване налаштування' : 'Fixed Setup Fee ($500)',
    stage1PriceSub: isRu ? '(под ключ)' : isUk ? '(під ключ)' : '(turnkey)',
    stage1Desc: isRu
      ? 'Мы полностью анализируем ваш профиль. Затем переупаковываем его в строгом соответствии с поисковыми алгоритмами Grab и Foodpanda для максимальной видимости в районе.'
      : isUk
      ? 'Ми повністю аналізуємо ваш профіль. Потім переупаковуємо його в суворій відповідності до пошукових алгоритмів Grab та Foodpanda для максимальної видимості в районі.'
      : 'We thoroughly analyze your venue profile, then optimize dish titles, tags, and combos to comply strictly with Grab & Foodpanda algorithms for maximum district visibility.',

    stage2Badge: isRu ? 'ЭТАП 2' : isUk ? 'ЕТАП 2' : 'STAGE 2',
    stage2Tag: isRu ? 'Ежедневный автопилот' : isUk ? 'Щоденний автопілот' : 'Daily Autopilot',
    stage2Title: isRu ? 'Полное сопровождение и ведение' : isUk ? 'Повне супровід та ведення' : 'Full Management & Growth',
    stage2Price: isRu ? 'Процент от чистой прибыли' : isUk ? 'Відсоток від чистого прибутку' : '10% of Net Profit Growth',
    stage2PriceSub: isRu ? '(с прироста)' : isUk ? '(з приросту)' : '(pay only for new growth)',
    stage2Desc: isRu
      ? 'Наша команда профи становится вашим внешним отделом доставки. В нашу ежедневную работу входит полный операционный автопилот вашего ресторана в Grab:'
      : isUk
      ? 'Наша команда профі стає вашим зовнішнім відділом доставки. До нашої щоденної роботи входить повний операційний автопілот вашого ресторану в Grab:'
      : 'Our team acts as your dedicated external delivery department. Our daily duties include complete operational management of your Grab restaurant:',

    solBannerTitle: isRu
      ? 'Наш интерес — только ваш финансовый рост.'
      : isUk
      ? 'Наш інтерес — тільки ваше фінансове зростання.'
      : 'Our compensation depends strictly on your financial growth.',
    solBannerSub: isRu
      ? 'Мы получаем процент исключительно с прироста вашей чистой маржи. Нет роста — мы работаем бесплатно.'
      : isUk
      ? 'Ми отримуємо відсоток виключно з приросту вашої чистої маржі. Немає зростання — ми працюємо безоплатно.'
      : 'We earn our management percentage solely from newly generated net margin growth. Zero growth = zero fee.',
    solBannerCta: isRu ? 'Начать работу с нами' : isUk ? 'Розпочати роботу з нами' : 'Get Started Now',

    // Client Journey (3-step plan)
    cjBadge: isRu ? 'Главная механика работы (StoryBrand 3-Step Plan)' : isUk ? 'Головна механіка роботи (StoryBrand 3-Step Plan)' : 'Main Process (StoryBrand 3-Step Plan)',
    cjTitlePrefix: isRu ? 'Начать получать X3 заказов из Grab — ' : isUk ? 'Отримувати X3 замовлень з Grab — ' : 'Tripling Grab orders is ',
    cjTitleHighlight: isRu ? 'проще, чем заварить кофе' : isUk ? 'простіше, ніж заварити каву' : 'easier than brewing coffee',
    cjSub: isRu
      ? 'Вам не нужно разбираться в алгоритмах, нанимать маркетологов или менять процессы на кухне. Мы берем всю техническую и операционную работу на себя.'
      : isUk
      ? 'Вам не потрібно розбиратися в алгоритмах, наймати маркетологів чи змінювати процеси на кухні. Ми беремо всю технічну та операційну роботу на себе.'
      : 'No need to study complex algorithms, hire staff, or change kitchen routines. We handle 100% of technical and operational tasks.',

    cjStep1Tag: isRu ? 'Шаг 1 • 30 секунд' : isUk ? 'Крок 1 • 30 секунд' : 'Step 1 • 30 Seconds',
    cjStep1Title: isRu ? '1️⃣ Заявка на бесплатный аудит' : isUk ? '1️⃣ Заявка на безоплатний аудит' : '1️⃣ Free Audit Request',
    cjStep1Desc: isRu
      ? 'Вы оставляете заявку за 30 секунд. Наш эксперт сканирует ваш профиль в Grab/Foodpanda, находит точки потери маржи и готовит персональную карту роста для вашего района.'
      : isUk
      ? 'Ви залишаєте заявку за 30 секунд. Наш експерт сканує ваш профіль у Grab/Foodpanda, знаходить точки втрати маржі та готує персональну карту зростання для вашого району.'
      : 'Submit your request in 30 seconds. Our specialist audits your Grab profile, identifies revenue leakage points, and creates a tailored growth map for your district.',
    cjStep1Result: isRu ? 'Результат: Готовая карта роста' : isUk ? 'Результат: Готова карта зростання' : 'Deliverable: Custom Growth Roadmap',

    cjStep2Tag: isRu ? 'Шаг 2 • За 3 дня' : isUk ? 'Крок 2 • За 3 дні' : 'Step 2 • Turnkey Setup in 3 Days',
    cjStep2Title: isRu ? '2️⃣ Переупаковка и запуск под ключ' : isUk ? '2️⃣ Переупаковка та запуск під ключ' : '2️⃣ Menu Overhaul & Turnkey Launch',
    cjStep2Desc: isRu
      ? 'За 3 дня мы полностью пересобираем ваше меню: оцифровываем фото, пишем SEO-тексты на 3 языках, настраиваем комбо-наборы и запускаем математически просчитанные промо-кампании.'
      : isUk
      ? 'За 3 дні ми повністю перезбираємо ваше меню: оцифровуємо фото, пишемо SEO-тексти 3 мовами, налаштовуємо комбо-набори та запускаємо математично прораховані промо-кампанії.'
      : 'In 3 days we restructure your entire menu: digitize food photos, translate 3-language SEO descriptions, assemble combos, and activate high-converting Grab promos.',
    cjStep2Result: isRu ? 'Результат: Полная готовность к ТОП-5' : isUk ? 'Результат: Повна готовність до ТОП-5' : 'Deliverable: TOP-5 Ranking Readiness',

    cjStep3Tag: isRu ? 'Шаг 3 • Результат' : isUk ? 'Крок 3 • Результат' : 'Step 3 • Results & Growth',
    cjStep3Title: isRu ? '3️⃣ Рост заказов и чистой прибыли' : isUk ? '3️⃣ Зростання замовлень та чистого прибутку' : '3️⃣ Sales & Net Profit Expansion',
    cjStep3Desc: isRu
      ? 'Вы получаете поток прямых заказов из агрегатора. В конце месяца мы сводим финансовую аналитику, и вы выплачиваете нам процент только с реально полученного прироста чистой прибыли.'
      : isUk
      ? 'Ви отримуєте потік прямих замовлень з агрегатора. Наприкінці місяця ми зводимо фінансову аналітику, і ви виплачуєте нам відсоток тільки з реально отриманого приросту чистого прибутку.'
      : 'You receive a steady stream of direct Grab orders. At month end we review transparent sales analytics, and you pay us 10% ONLY from actual net profit growth.',
    cjStep3Result: isRu ? 'Результат: Оплата за чистый прирост' : isUk ? 'Результат: Оплата за чистий приріст' : 'Deliverable: Pay-for-Growth Only',

    // How It Works
    hiwBadge: isRu ? 'Прозрачный механизм работы' : isUk ? 'Прозорий механізм роботи' : 'Transparent Process',
    hiwTitle: isRu ? 'Как именно работает наш бизнес и агентство?' : isUk ? 'Як саме працює наш бізнес та агентство?' : 'How does our agency process work?',
    hiwSub: isRu
      ? 'Мы не просто даем советы. Мы берем на себя весь пласт ежедневной рутины, управление рекламой и доставкой в Grab, работая как ваш полноценный удаленный партнер за % от роста.'
      : isUk
      ? 'Ми не просто даємо поради. Ми беремо на себе весь пласт щоденної рутини, управління рекламою та доставкою в Grab, працюючи як ваш повноцінний віддалений партнер за % від зростання.'
      : 'We don\'t just give advice. We take over 100% of daily operations, ad management, and Grab delivery optimization, operating as your dedicated remote partner.',

    // Final CTA Form
    ctaQuotaBadge: isRu ? '⚠️ Ограничение по локальной квоте' : isUk ? '⚠️ Обмеження по локальній квоті' : '⚠️ District Exclusivity Quota',
    ctaQuotaTitle: isRu ? 'Лимит на эксклюзивность районов в Азии' : isUk ? 'Ліміт на ексклюзивність районів в Азії' : 'Exclusivity Limit per District in Asia',
    ctaQuotaText: isRu
      ? 'Мы берем в работу максимум 2 ресторана одной кухни в одном районе на весь город (например, только 2 бургерных в районе Патонга или Чангу), чтобы не конкурировать с самими собой. Если квота вашего района закрыта — мы не сможем взять вас в работу.'
      : isUk
      ? 'Ми беремо в роботу максимум 2 ресторани однієї кухні в одному районі на все місто (наприклад, тільки 2 бургерні в районі Патонга чи Чангу), щоб не конкурувати з самими собою. Якщо квота вашого району закрита — ми не зможемо взяти вас у роботу.'
      : 'We onboard a MAXIMUM of 2 restaurants per cuisine per district across the entire city (e.g. only 2 burger joints in Patong or Canggu) to avoid internal competition. Once a district quota is filled, applications are closed.',

    formTitle: isRu
      ? 'Перестаньте кормить конкурентов. Заберите ТОП-5 выдачи прямо сейчас.'
      : isUk
      ? 'Перестаньте годувати конкурентів. Заберіть ТОП-5 видачі просто зараз.'
      : 'Stop feeding your competitors. Claim your TOP-5 Grab position now.',
    formSub: isRu
      ? 'Если данные заполнены правильно, то мы сразу пришлем детальный аудит слепых зон и потенциала роста Вашего бизнеса с оценкой роста доходности.'
      : isUk
      ? 'Якщо дані заповнені правильно, ми одразу надішлемо детальний аудит сліпих зон та потенціалу зростання Вашого бізнесу з оцінкою зростання дохідності.'
      : 'If your information is entered correctly, we will immediately send a detailed blind-spot audit and revenue growth projection for your venue.',

    l1Name: isRu ? '1. Ваше имя / Telegram *' : isUk ? '1. Ваше ім\'я / Telegram *' : '1. Your Name / Telegram *',
    ph1Name: isRu ? '@username или имя' : isUk ? '@username або ім\'я' : '@username or name',
    l2Url: isRu ? '2. Ссылка на заведение в Grab (если есть)' : isUk ? '2. Посилання на заклад у Grab (якщо є)' : '2. Link to your Grab profile (if available)',
    ph2Url: isRu ? 'https://food.grab.com/...' : isUk ? 'https://food.grab.com/...' : 'https://food.grab.com/...',
    l3Loc: isRu ? '3. Город / Район *' : isUk ? '3. Місто / Район *' : '3. City / District *',
    ph3Loc: isRu ? 'Например: Пхукет, Патонг или Нячанг' : isUk ? 'Наприклад: Пхукет, Патонг або Нячанг' : 'E.g. Phuket (Patong) or Bali (Canggu)',
    l4Cuisine: isRu ? '4. Кухня заведения' : isUk ? '4. Кухня закладу' : '4. Restaurant Cuisine',
    ph4Cuisine: isRu ? 'Азия, Европа, Фастфуд, Суши и т.д.' : isUk ? 'Азія, Європа, Фастфуд, Суші тощо' : 'Asian, European, Burgers, Sushi etc.',

    btnSubmit: isRu
      ? 'ЗАБРОНИРОВАТЬ АУДИТ ЗАВЕДЕНИЯ И УЗНАТЬ ПОТЕНЦИАЛ РОСТА'
      : isUk
      ? 'ЗАБРОНЮВАТИ АУДИТ ЗАКЛАДУ ТА ДІЗНАТИСЯ ПОТЕНЦІАЛ ЗРОСТАННЯ'
      : 'BOOK RESTAURANT AUDIT & GET GROWTH PROJECTION',
    btnSending: isRu ? 'ОТПРАВКА ЗАЯВКИ...' : isUk ? 'ВІДПРАВЛЕННЯ ЗАЯВКИ...' : 'SENDING REQUEST...',
    successTitle: isRu ? 'Заявка успешно отправлена!' : isUk ? 'Заявку успішно відправлено!' : 'Application Submitted Successfully!',
    successDesc: isRu
      ? 'Мы уже анализируем конкурентную среду вашего района в Grab. Наш специалист напишет вам в Telegram в течение 15 минут.'
      : isUk
      ? 'Ми вже аналізуємо конкурентне середовище вашого району в Grab. Наш фахівець напише вам у Telegram протягом 15 хвилин.'
      : 'We are already analyzing the Grab competitive landscape in your district. Our specialist will contact you on Telegram within 15 minutes.',
    privacy: isRu
      ? 'Гарантируем конфиденциальность данных вашего ресторана'
      : isUk
      ? 'Гарантуємо конфіденційність даних вашого ресторану'
      : '100% data confidentiality guaranteed for your restaurant',

    // Footer
    footerSub: isRu
      ? 'Агентство роста выручки ресторанов в сервисах Grab & Foodpanda по всей Юго-Восточной Азии.'
      : isUk
      ? 'Агентство зростання виручки ресторанів у сервісах Grab & Foodpanda по всій Південно-Східній Азії.'
      : 'Restaurant revenue growth agency for Grab & Foodpanda delivery platforms across Southeast Asia.',
    rights: isRu ? 'Все права защищены.' : isUk ? 'Усі права захищені.' : 'All rights reserved.'
  };
};
