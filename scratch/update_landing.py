import os

path = r'c:\Sher_AI_Studio\projects\banzai-marketing\src\components\RevoAlternativeLanding.jsx'

with open(path, 'r', encoding='utf-8') as f:
    code = f.read()

# Add const t = getT(lang); right after const lang = ...
old_lang_line = "const lang = i18n.language?.substring(0, 2) || 'ru';"
new_lang_line = "const lang = i18n.language?.substring(0, 2) || 'ru';\n  const t = getT(lang);"

code = code.replace(old_lang_line, new_lang_line, 1)

# Replace nicheCards definition with translated version
old_niche_cards = '''  // Niche Cards data for Hero Slider (1 featured slide per view)
  const nicheCards = [
    {
      id: 'restaurants',
      icon: faUtensils,
      title: '🍽 Рестораны & Кафе',
      stat: '92% людей',
      statLabel: 'ищут еду через локальные гео-запросы',
      text: 'Пользователи вбивают «сырники рядом» или «стейкхаус». Это самый высокий транзакционный интент в общепите. Если вас нет в ТОП-3 Local Pack — вы теряете до 80% всех горячих чеков района.',
      badge: 'Высокий чек',
      metricPercent: 92,
      metricLabel: 'Поисковый интент гостей',
      color: '#00FF66'
    },
    {
      id: 'barbershops',
      icon: faCut,
      title: '✂️ Барбершопы & Салоны',
      stat: 'До 40 клиентов',
      statLabel: 'в неделю отдаются соседям из-за отсутствия в выдаче',
      text: 'Клиент ищет услугу «на сегодня в радиусе 2 км». Если карточка не в ТОП-3 Google — кресла остаются пустыми в середине недели. Сгорающая скидка ⚡ Revo мгновенно закрывает "тихие часы".',
      badge: 'Локальный пик',
      metricPercent: 85,
      metricLabel: 'Загрузка "тихих часов"',
      color: '#4285F4'
    },
    {
      id: 'clinics',
      icon: faStethoscope,
      title: '🩺 Клиники & Стоматологии',
      stat: 'Рейтинг 4.9+',
      statLabel: 'формирует 95% первичных онлайн-записей',
      text: 'Первичный прием формируется из Поиска. Люди ищут решение конкретной боли и выбирают профили с топовыми позициями и свежими положительными отзывами.',
      badge: 'Макс. LTV',
      metricPercent: 95,
      metricLabel: 'Доверие пациентов к ТОП-3',
      color: '#FBBC05'
    },
    {
      id: 'masters',
      icon: faSpa,
      title: '💆‍♂️ Выездные мастера & СПА',
      stat: '0$ За веб-сайт',
      statLabel: '100% автономный сайт на базе профиля Google',
      text: 'Google Business Profile — это ваш автономный сайт, который индексируется алгоритмами без необходимости тратить тысячи долларов на программистов.',
      badge: '100% Автономность',
      metricPercent: 100,
      metricLabel: 'Органический охват локации',
      color: '#10B981'
    }
  ];'''

new_niche_cards = '''  // Niche Cards data for Hero Slider (1 featured slide per view)
  const isEn = lang === 'en';
  const isUk = lang === 'uk';
  const nicheCards = [
    {
      id: 'restaurants',
      icon: faUtensils,
      title: isEn ? '🍽 Restaurants & Cafes' : isUk ? "🍽 Ресторани та Кав'ярні" : '🍽 Рестораны & Кафе',
      stat: isEn ? '92% of people' : isUk ? '92% людей' : '92% людей',
      statLabel: isEn ? 'search food via local geo-queries' : isUk ? 'шукають їжу через локальні гео-запити' : 'ищут еду через локальные гео-запросы',
      text: isEn ? 'Users search "syrniki nearby" or "steakhouse". Highest transactional intent in F&B. If not in TOP-3 Local Pack — you lose up to 80% of district orders.' : isUk ? "Користувачі шукають «сирники поруч» або «стейкхаус». Це найвищий транзакційний інтенцій у громадському харчуванні. Якщо вас немає у ТОП-3 Local Pack — ви втрачаєте до 80% всіх гарячих чеків району." : 'Пользователи вбивают «сырники рядом» или «стейкхаус». Это самый высокий транзакционный интент в общепите. Если вас нет в ТОП-3 Local Pack — вы теряете до 80% всех горячих чеков района.',
      badge: isEn ? 'High Check' : isUk ? 'Високий чек' : 'Высокий чек',
      metricPercent: 92,
      metricLabel: isEn ? 'Guest search intent' : isUk ? 'Пошуковий інтенцій гостей' : 'Поисковый интент гостей',
      color: '#00FF66'
    },
    {
      id: 'barbershops',
      icon: faCut,
      title: isEn ? '✂️ Barbershops & Salons' : isUk ? '✂️ Барбершопи та Салони' : '✂️ Барбершопы & Салоны',
      stat: isEn ? 'Up to 40 clients' : isUk ? 'До 40 клієнтів' : 'До 40 клиентов',
      statLabel: isEn ? 'per week lost to neighbors due to lack of visibility' : isUk ? 'на тиждень віддаються сусідам через відсутність у видачі' : 'в неделю отдаются соседям из-за отсутствия в выдаче',
      text: isEn ? 'Clients look for services "today within 2km". If not in Google TOP-3, seats stay empty. Revo expiring discount closes quiet hours instantly.' : isUk ? "Клієнт шукає послугу «на сьогодні в радіусі 2 км». Якщо картка не в ТОП-3 Google — крісла залишаються порожніми. Згораюча знижка ⚡ Revo миттєво закриває 'тихі години'." : 'Клиент ищет услугу «на сегодня в радиусе 2 км». Если карточка не в ТОП-3 Google — кресла остаются пустыми в середине недели. Сгорающая скидка ⚡ Revo мгновенно закрывает "тихие часы".',
      badge: isEn ? 'Local Peak' : isUk ? 'Локальний пік' : 'Локальный пик',
      metricPercent: 85,
      metricLabel: isEn ? 'Quiet hours load' : isUk ? 'Завантаження "тихих годин"' : 'Загрузка "тихих часов"',
      color: '#4285F4'
    },
    {
      id: 'clinics',
      icon: faStethoscope,
      title: isEn ? '🩺 Clinics & Dentistry' : isUk ? '🩺 Клініки та Стоматології' : '🩺 Клиники & Стоматологии',
      stat: isEn ? '4.9+ Rating' : isUk ? 'Рейтинг 4.9+' : 'Рейтинг 4.9+',
      statLabel: isEn ? 'drives 95% of primary online bookings' : isUk ? 'формує 95% первинних онлайн-записів' : 'формирует 95% первичных онлайн-записей',
      text: isEn ? 'Patients search solutions for specific pain points and choose TOP-3 profiles with top positions and fresh reviews.' : isUk ? "Первинний прийом формується з Пошуку. Люди шукають рішення конкретного болю і обирають профілі з топовими позиціями та свіжими позитивними відгуками." : 'Первичный прием формируется из Поиска. Люди ищут решение конкретной боли и выбирают профили с топовыми позициями и свежими положительными отзывами.',
      badge: isEn ? 'Max LTV' : isUk ? 'Макс. LTV' : 'Макс. LTV',
      metricPercent: 95,
      metricLabel: isEn ? 'Patient trust in TOP-3' : isUk ? 'Довіра пацієнтів до ТОП-3' : 'Доверие пациентов к ТОП-3',
      color: '#FBBC05'
    },
    {
      id: 'masters',
      icon: faSpa,
      title: isEn ? '💆‍♂️ Mobile Pros & Spa' : isUk ? '💆‍♂️ Виїзні майстри та СПА' : '💆‍♂️ Выездные мастера & СПА',
      stat: isEn ? '$0 For Website' : isUk ? '0$ За веб-сайт' : '0$ За веб-сайт',
      statLabel: isEn ? '100% autonomous site built from Google profile' : isUk ? '100% автономний сайт на базі профілю Google' : '100% автономный сайт на базе профиля Google',
      text: isEn ? 'Google Business Profile is your autonomous website indexed by algorithms without spending thousands on coders.' : isUk ? "Google Business Profile — це ваш автономний сайт, який індексується алгоритмами без потреби витрачати тисячі доларів на програмістів." : 'Google Business Profile — это ваш автономный сайт, который индексируется алгоритмами без необходимости тратить тысячи долларов на программистов.',
      badge: isEn ? '100% Autonomy' : isUk ? '100% Автономність' : '100% Автономность',
      metricPercent: 100,
      metricLabel: isEn ? 'Organic location reach' : isUk ? 'Органічне охоплення локації' : 'Органический охват локации',
      color: '#10B981'
    }
  ];'''

code = code.replace(old_niche_cards, new_niche_cards, 1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated nicheCards successfully!")
