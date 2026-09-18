"use client";

import React from "react";
import { Order } from "@/lib/food/foodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCoins, faPercent, faUserCheck, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  orders: Order[];
}

export const OrdersStatsTab: React.FC<Props> = ({ orders }) => {
  const totalRevenue = orders.reduce((sum, o) => sum + o.finalTotal, 0);
  const totalDiscountGiven = orders.reduce((sum, o) => sum + o.revoDiscountAmount, 0);
  const avgCheck = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;

  return (
    <div className="space-y-8 text-white">
      {/* 📊 KPI Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1E2024] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-mono text-white/60 uppercase block flex items-center gap-2">
            <FontAwesomeIcon icon={faCoins} className="text-[#00FF66]" /> Общая Выручка
          </span>
          <span className="text-3xl font-black font-mono text-[#00FF66]">{totalRevenue.toLocaleString()} ₽</span>
        </div>

        <div className="bg-[#1E2024] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-mono text-white/60 uppercase block flex items-center gap-2">
            <FontAwesomeIcon icon={faShoppingBag} className="text-[#3B82F6]" /> Заказов Оформлено
          </span>
          <span className="text-3xl font-black font-mono text-white">{orders.length} шт</span>
        </div>

        <div className="bg-[#1E2024] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-mono text-white/60 uppercase block flex items-center gap-2">
            <FontAwesomeIcon icon={faUserCheck} className="text-[#F59E0B]" /> Средний Чек
          </span>
          <span className="text-3xl font-black font-mono text-white">{avgCheck} ₽</span>
        </div>

        <div className="bg-[#1E2024] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-xs font-mono text-white/60 uppercase block flex items-center gap-2">
            <FontAwesomeIcon icon={faPercent} className="text-[#FF385C]" /> Скидок Revo Выдано
          </span>
          <span className="text-3xl font-black font-mono text-[#FF385C]">{totalDiscountGiven.toLocaleString()} ₽</span>
        </div>
      </div>

      {/* 📝 Заказы */}
      <div className="bg-[#1E2024] p-6 rounded-2xl border border-white/10 space-y-4">
        <h3 className="text-xl font-bold text-[#00FF66] flex items-center gap-2">
          <FontAwesomeIcon icon={faShoppingBag} /> История Заказов ({orders.length})
        </h3>

        {orders.length === 0 ? (
          <div className="text-center py-12 text-white/40 font-mono text-sm border border-dashed border-white/10 rounded-2xl">
            Пока заказов нет. Как только клиент оформит заказ на мобильном лендинге, он моментально появится здесь!
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => (
              <div
                key={order.id || idx}
                className="bg-black/60 p-5 rounded-2xl border border-white/10 space-y-3"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 rounded border border-[#00FF66]/30 uppercase font-bold">
                      Заказ #{order.id ? order.id.slice(-6).toUpperCase() : idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white mt-2 flex items-center gap-2">
                      {order.customerName} <span className="text-xs font-normal text-white/60">({order.customerPhone})</span>
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black font-mono text-[#00FF66] block">
                      {order.finalTotal} ₽
                    </span>
                    {order.revoDiscountAmount > 0 && (
                      <span className="text-xs text-[#FF385C] font-mono block">
                        Скидка Revo ({order.revoDiscountPercent}%): -{order.revoDiscountAmount} ₽
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-white/80 space-y-1">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#00FF66]" />
                    <span>Адрес: {order.deliveryAddress}</span>
                  </div>
                  {order.comment && (
                    <div className="text-white/60 italic">Комментарий: "{order.comment}"</div>
                  )}
                </div>

                {/* Items */}
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-xs space-y-1">
                  <span className="font-bold text-white/70 block mb-1">Состав заказа:</span>
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-white/90">
                      <span>
                        • {item.name} x{item.quantity}
                        {item.selectedOptions.length > 0 && (
                          <span className="text-white/50"> ({item.selectedOptions.map(o => o.optionName).join(", ")})</span>
                        )}
                      </span>
                      <span className="font-mono">{item.totalPrice} ₽</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
