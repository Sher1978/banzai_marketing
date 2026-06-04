/**
 * BanzAI marketing — GEO Lead Collector
 * ========================================
 * Google Apps Script webhook:
 *   1. Записывает каждый лид в Google Sheets
 *   2. Шлёт Telegram-уведомление тебе
 *   3. Отправляет ссылку на PDF-отчёт на email лида (если есть)
 *
 * УСТАНОВКА:
 *   1. Открой https://script.google.com → New Project
 *   2. Вставь этот код
 *   3. Заполни CONFIG ниже (BOT_TOKEN, CHAT_ID, SHEET_ID, SITE_URL)
 *   4. Deploy → New deployment → Web app → Execute as ME → Anyone
 *   5. Скопируй URL deployment — это и есть WEBHOOK_URL для сайта
 */

// ═══════════════════════════════════════════════════
// 🔧 CONFIG — ЗАПОЛНИ ПЕРЕД ДЕПЛОЕМ
// ═══════════════════════════════════════════════════
const CONFIG = {
  // Telegram Bot (создать через @BotFather → /newbot)
  BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',         // пример: 7123456789:AAH...
  CHAT_ID:   'YOUR_CHAT_ID_HERE',            // твой chat_id или id группы (со знаком минус если группа)

  // Google Sheet ID (из URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)
  SHEET_ID:  'YOUR_GOOGLE_SHEET_ID_HERE',

  // Название листа в таблице
  SHEET_NAME: 'GEO Leads',

  // URL сайта — для ссылки на PDF в письме
  SITE_URL: 'https://banzai-marketing.com',

  // Email отправителя (должен совпадать с Google-аккаунтом скрипта)
  FROM_NAME: 'BanzAI marketing GEO Team',
};
// ═══════════════════════════════════════════════════


/**
 * Главный обработчик POST-запросов с сайта
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Записать лид в Google Sheets
    saveToSheet(data);
    
    // 2. Отправить Telegram-уведомление
    sendTelegramNotification(data);
    
    // 3. Если есть email — отправить ссылку на PDF
    if (data.email && data.email.includes('@')) {
      sendPdfEmail(data.email, data.lang || 'en', data.report_url);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    Logger.log('Error: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Записывает лид в Google Sheets
 */
function saveToSheet(data) {
  const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  // Создать лист если не существует
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    // Заголовки
    sheet.getRange(1, 1, 1, 12).setValues([[
      '🕐 Дата/Время',
      '📋 Тип лида',
      '👤 Имя',
      '📱 Контакт (TG/Phone)',
      '📧 Email',
      '🏢 Ниша/Сфера',
      '🌐 Сайт',
      '📍 Регион',
      '📊 GEO Score',
      '🌍 Язык',
      '📄 Источник',
      '🔗 User Agent'
    ]]);
    // Форматирование шапки
    const headerRange = sheet.getRange(1, 1, 1, 12);
    headerRange.setBackground('#0e0c0a');
    headerRange.setFontColor('#c5a880');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 12, 180);
  }
  
  const now = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Dubai' });
  
  sheet.appendRow([
    now,
    data.type || 'unknown',          // audit / magnet / scanner
    data.name || '—',
    data.contact || '—',
    data.email || '—',
    data.industry || data.niche || '—',
    data.website || '—',
    data.region || '—',
    data.score || '—',
    data.lang || 'en',
    data.source || 'geo-landing',
    data.userAgent || '—',
  ]);
}

/**
 * Отправляет Telegram-уведомление о новом лиде
 */
function sendTelegramNotification(data) {
  const typeEmoji = {
    'audit':   '🎯',
    'magnet':  '📄',
    'scanner': '🔍',
  }[data.type] || '📩';
  
  const typeLabel = {
    'audit':   'АУДИТ-ЗАЯВКА',
    'magnet':  'PDF-ЛИД',
    'scanner': 'СКАНЕР-ЛИД',
  }[data.type] || 'ЛЕНТЗ';

  const msg = [
    `${typeEmoji} *НОВЫЙ ЛИД — ${typeLabel}*`,
    ``,
    `👤 *Имя:* ${data.name || '—'}`,
    `📱 *Контакт:* ${data.contact || '—'}`,
    `📧 *Email:* ${data.email || '—'}`,
    `🏢 *Ниша:* ${data.industry || data.niche || '—'}`,
    `🌐 *Сайт:* ${data.website || '—'}`,
    `📍 *Регион:* ${data.region || '—'}`,
    data.score ? `📊 *GEO Score:* ${data.score}` : null,
    `🌍 *Язык:* ${(data.lang || 'en').toUpperCase()}`,
    ``,
    `⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Dubai' })} (Дубай)`,
    `📋 [Открыть таблицу лидов](https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID})`,
  ].filter(Boolean).join('\n');

  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;
  
  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: CONFIG.CHAT_ID,
      text: msg,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    }),
  });
}

/**
 * Отправляет email со ссылкой на PDF-отчёт
 */
function sendPdfEmail(toEmail, lang, customReportUrl) {
  const subjects = {
    ru: 'Ваш GEO-отчёт от BanzAI marketing',
    en: 'Your GEO Report from BanzAI marketing',
    vi: 'Báo cáo GEO của bạn từ BanzAI marketing',
  };
  
  const reportUrl = customReportUrl || `${CONFIG.SITE_URL}/geo/report`;
  
  const bodies = {
    en: `
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0e0c0a; color: #f5f0e8; padding: 40px; border-radius: 16px;">
  <div style="font-family: monospace; font-size: 10px; color: #c5a880; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px;">
    BanzAI marketing // GEO Lab
  </div>
  <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #e8d5a3; margin-bottom: 16px; line-height: 1.2;">
    Your Exclusive GEO Report Is Ready
  </h1>
  <p style="color: #7a6f5e; font-size: 14px; line-height: 1.7; margin-bottom: 24px;">
    As promised — here is your copy of <strong style="color: #f5f0e8;">«How AI Is Destroying Classic Sales Funnels»</strong>. 
    This report covers what is dead in digital marketing, what works in the AI era, and the exact 5-step 
    action plan to make ChatGPT and Perplexity recommend your business.
  </p>
  <a href="${reportUrl}" style="display: inline-block; background: linear-gradient(135deg, #e8d5a3, #c5a880, #8a6d3b); color: #000; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; padding: 16px 36px; border-radius: 100px; text-decoration: none; margin-bottom: 32px;">
    Open GEO Report →
  </a>
  <div style="border-top: 1px solid rgba(197,168,128,0.15); padding-top: 24px; font-family: monospace; font-size: 10px; color: #7a6f5e; text-transform: uppercase; letter-spacing: 0.1em;">
    <p>To save as PDF: open the report → click "Save as PDF" → Print → Save as PDF</p>
    <p style="margin-top: 12px;">© 2026 BanzAI_marketing // <a href="${CONFIG.SITE_URL}/geo" style="color: #c5a880;">Run Free GEO Scanner</a></p>
  </div>
</div>`,
    ru: `
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0e0c0a; color: #f5f0e8; padding: 40px; border-radius: 16px;">
  <div style="font-family: monospace; font-size: 10px; color: #c5a880; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px;">
    BanzAI marketing // GEO Lab
  </div>
  <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #e8d5a3; margin-bottom: 16px; line-height: 1.2;">
    Ваш эксклюзивный GEO-отчёт готов
  </h1>
  <p style="color: #7a6f5e; font-size: 14px; line-height: 1.7; margin-bottom: 24px;">
    Как и обещали — ваша копия отчёта <strong style="color: #f5f0e8;">«Как ИИ разрушает классические воронки продаж»</strong>. 
    Отчёт охватывает что мертво в digital-маркетинге, что работает в эпоху ИИ и пошаговый план 
    как заставить ChatGPT и Perplexity рекомендовать ваш бизнес.
  </p>
  <a href="${reportUrl}" style="display: inline-block; background: linear-gradient(135deg, #e8d5a3, #c5a880, #8a6d3b); color: #000; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; padding: 16px 36px; border-radius: 100px; text-decoration: none; margin-bottom: 32px;">
    Открыть GEO-отчёт →
  </a>
  <div style="border-top: 1px solid rgba(197,168,128,0.15); padding-top: 24px; font-family: monospace; font-size: 10px; color: #7a6f5e; text-transform: uppercase; letter-spacing: 0.1em;">
    <p>Сохранить PDF: откройте отчёт → кнопка «Save as PDF» → Печать → Сохранить как PDF</p>
    <p style="margin-top: 12px;">© 2026 BanzAI_marketing // <a href="${CONFIG.SITE_URL}/geo" style="color: #c5a880;">Запустить GEO-сканер бесплатно</a></p>
  </div>
</div>`,
  };

  const subject = subjects[lang] || subjects['en'];
  const htmlBody = bodies[lang] || bodies['en'];

  GmailApp.sendEmail(toEmail, subject, '', {
    htmlBody: htmlBody,
    name: CONFIG.FROM_NAME,
  });
}

/**
 * Тест — запусти вручную в редакторе для проверки
 */
function testWebhook() {
  const mockData = {
    type: 'scanner',
    name: 'Test User',
    contact: '@testuser',
    email: 'test@example.com',
    industry: 'Real Estate',
    website: 'https://example.com',
    region: 'Dubai',
    score: '12% — CRITICAL',
    lang: 'en',
    source: 'geo-scanner-modal',
  };
  
  saveToSheet(mockData);
  sendTelegramNotification(mockData);
  Logger.log('Test completed. Check your Telegram and Google Sheet.');
}
