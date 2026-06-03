import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/geo-lead
 * Принимает данные лида с любой формы GEO-лендинга
 * и пересылает их на Google Apps Script webhook
 * (который пишет в Google Sheets + шлёт Telegram + отправляет PDF-ссылку)
 *
 * Body: {
 *   type: 'audit' | 'magnet' | 'scanner'
 *   name?: string
 *   contact?: string
 *   email?: string
 *   industry?: string
 *   website?: string
 *   region?: string
 *   score?: string
 *   lang?: 'ru' | 'en' | 'vi'
 *   source?: string
 * }
 */

// ⚠️ Вставь сюда URL из Google Apps Script после деплоя
const GAS_WEBHOOK_URL = process.env.GEO_WEBHOOK_URL || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Добавляем мета-данные
    const payload = {
      ...body,
      source: body.source || 'geo-landing',
      userAgent: req.headers.get('user-agent') || '',
      ip: req.headers.get('x-forwarded-for') || '',
    };

    // Если webhook не настроен — просто возвращаем success (не ломаем UX)
    if (!GAS_WEBHOOK_URL) {
      console.warn('[geo-lead] GEO_WEBHOOK_URL not set. Lead not forwarded:', payload);
      return NextResponse.json({ success: true, note: 'webhook not configured' });
    }

    const gasRes = await fetch(GAS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!gasRes.ok) {
      const text = await gasRes.text();
      console.error('[geo-lead] GAS webhook error:', gasRes.status, text);
      // Возвращаем success клиенту — ошибка на стороне webhook не должна ломать UX
      return NextResponse.json({ success: true, warning: 'webhook_error' });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('[geo-lead] API error:', err);
    // Не ломаем UX даже при ошибке API
    return NextResponse.json({ success: true, warning: 'api_error' });
  }
}
