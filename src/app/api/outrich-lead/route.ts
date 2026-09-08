import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/outrich-lead
 * Captures lead details from OutRich.Dubai agency forms and forwards to Telegram Bot / Webhook.
 *
 * Payload:
 * {
 *   name?: string;
 *   contact?: string;
 *   phone?: string;
 *   email?: string;
 *   business?: string;
 *   query?: string;
 *   source?: string;
 * }
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = body.name || 'Не указано';
    const contact = body.contact || body.phone || body.email || 'Не указано';
    const business = body.business || body.query || body.message || 'Не указано';
    const source = body.source || 'OutRich.Dubai agency';

    const botToken = process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.CHAT_ID || '260669598';
    const gasWebhookUrl = process.env.GEO_WEBHOOK_URL;

    console.log('[OutRich Lead Captured]:', { name, contact, business, source });

    const telegramMessage = `🚀 <b>НОВЫЙ ЛИД // OutRich.Dubai agency</b>\n\n` +
      `👤 <b>Имя:</b> ${name}\n` +
      `📱 <b>Контакт (WhatsApp/TG/Phone):</b> ${contact}\n` +
      `🏢 <b>Бизнес / Профиль:</b> ${business}\n` +
      `📍 <b>Источник:</b> ${source}\n` +
      `⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Dubai' })} (Dubai)`;

    // 1. Send via direct Telegram Bot API if credentials exist
    if (botToken && chatId) {
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        });
      } catch (tgErr) {
        console.error('[OutRich Lead] Telegram API Dispatch Error:', tgErr);
      }
    }

    // 2. Forward to Google Apps Script Webhook if configured
    if (gasWebhookUrl) {
      try {
        await fetch(gasWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            contact,
            business,
            source,
            type: 'outrich-lead',
          }),
        });
      } catch (gasErr) {
        console.error('[OutRich Lead] GAS Webhook Error:', gasErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (err) {
    console.error('[OutRich Lead API Error]:', err);
    return NextResponse.json({ success: true, warning: 'Failed to dispatch webhook' });
  }
}
