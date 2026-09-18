import { NextResponse } from "next/server";
import { createOrder, Order } from "@/lib/food/foodData";

export async function POST(req: Request) {
  try {
    const body: Order = await req.json();

    if (!body.customerPhone || !body.deliveryAddress || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "Не заполнены обязательные поля заказа (телефон, адрес или товары)" },
        { status: 400 }
      );
    }

    // Save order to Firestore
    const orderId = await createOrder({
      ...body,
      status: "new"
    });

    // Format Notification for Telegram / Email
    const itemsListStr = body.items
      .map(item => {
        const optionsStr = item.selectedOptions.length > 0 
          ? ` (${item.selectedOptions.map(o => o.optionName).join(", ")})` 
          : "";
        return `• ${item.name}${optionsStr} x${item.quantity} = ${item.totalPrice} ₽`;
      })
      .join("\n");

    const messageText = `
🚀 *НОВЫЙ ЗАКАЗ ЕДЫ #${orderId.slice(-6).toUpperCase()}*
───────────────
👤 *Клиент:* ${body.customerName || "Не указано"}
📞 *Телефон:* \`${body.customerPhone}\`
📍 *Адрес доставки:* ${body.deliveryAddress}
💬 *Комментарий:* ${body.comment || "—"}

🛒 *Состав заказа:*
${itemsListStr}

───────────────
💰 *Сумма без скидки:* ${body.subtotal} ₽
⚡ *Скидка REVO (${body.revoDiscountPercent}%):* -${body.revoDiscountAmount} ₽
🚚 *Доставка:* ${body.deliveryFee} ₽
🔥 *ИТОГО К ОПЛАТЕ:* *${body.finalTotal} ₽*
    `.trim();

    // Try sending to Telegram Bot if bot token & chat id are available
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "Markdown"
          })
        });
      } catch (tgErr) {
        console.warn("Failed to dispatch Telegram order message:", tgErr);
      }
    }

    return NextResponse.json({
      success: true,
      orderId,
      message: "Заказ успешно оформлен!"
    });
  } catch (error: any) {
    console.error("Order processing error:", error);
    return NextResponse.json(
      { error: " Ошибка при оформлении заказа: " + error.message },
      { status: 500 }
    );
  }
}
