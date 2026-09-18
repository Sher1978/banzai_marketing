"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/lib/food/CartContext";
import { VenueBranding } from "@/lib/food/foodData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash, faBolt, faMotorcycle, faCheckCircle, faSpinner, faPhone, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {
  branding: VenueBranding;
  venueId: string;
  onClose: () => void;
  primaryColor?: string;
}

export const CartDrawer: React.FC<Props> = ({ branding, venueId, onClose, primaryColor = "#00FF66" }) => {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    revoDiscountPercent,
    revoDiscountAmount,
    deliveryFee,
    finalTotal
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccessId, setOrderSuccessId] = useState<string | null>(null);

  // Lock background body scrolling while cart drawer is active
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !address.trim()) {
      alert("Пожалуйста, укажите ваш телефон и адрес доставки.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/food/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          venueId,
          customerName: name.trim(),
          customerPhone: phone.trim(),
          deliveryAddress: address.trim(),
          comment: comment.trim(),
          items,
          subtotal,
          revoDiscountPercent,
          revoDiscountAmount,
          deliveryFee,
          finalTotal
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setOrderSuccessId(data.orderId);
        clearCart();
      } else {
        alert(data.error || "Ошибка при отправке заказа.");
      }
    } catch (err: any) {
      alert("Ошибка при соединении с сервером.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccessId) {
    return (
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div className="bg-[#1C1E22] border border-[#00FF66]/50 p-8 rounded-3xl max-w-md w-full text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-[#00FF66]/20 border-2 border-[#00FF66] text-[#00FF66] text-4xl flex items-center justify-center mx-auto animate-bounce">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">Заказ успешно оформлен!</h3>
            <span className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 px-3 py-1 rounded-full uppercase inline-block mt-2 font-bold border border-[#00FF66]/30">
              Код заказа: #{orderSuccessId.slice(-6).toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Мы передали ваш заказ в заведение <strong className="text-white">{branding.title}</strong>. Менеджер свяжется с вами по номеру <strong className="text-[#00FF66]">{phone}</strong> для подтверждения доставки!
          </p>
          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-full text-black font-black text-xs uppercase tracking-wider shadow-lg cursor-pointer"
            style={{ backgroundColor: primaryColor }}
          >
            Вернуться в меню
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClose}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-end justify-center p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="bg-[#1C1E22] border border-white/20 rounded-t-3xl sm:rounded-3xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 bg-[#121212] border-b border-white/10 flex justify-between items-center shrink-0 z-20">
          <div className="flex items-center gap-2">
            <h3 className="font-black text-white text-lg">Ваш заказ</h3>
            <span className="text-xs font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
              {items.length} поз.
            </span>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white p-2 cursor-pointer">
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>

        {/* Scrollable Content area */}
        <div
          className="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        >
          {items.length === 0 ? (
            <div className="text-center py-12 text-white/50 font-mono text-sm">
              Ваша корзина пока пуста. Добавьте блюда из меню!
            </div>
          ) : (
            <>
              {/* Order Items List */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-white/60 uppercase block">Содержимое корзины</span>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-black/50 p-3 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-xl object-cover bg-black" />
                      <div>
                        <h4 className="font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                        {item.selectedOptions.length > 0 && (
                          <span className="text-[11px] text-white/50 block">
                            {item.selectedOptions.map((o) => o.optionName).join(", ")}
                          </span>
                        )}
                        <span className="text-xs font-mono text-[#00FF66] font-bold">{item.totalPrice} ₽</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[10px]"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded-full text-black font-bold flex items-center justify-center text-[10px]"
                          style={{ backgroundColor: primaryColor }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-white/40 hover:text-[#FF385C] text-xs p-1"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ⚡ Revo Discount Price Box */}
              <div className="bg-[#1A1C20] p-4 rounded-2xl border border-[#00FF66]/40 space-y-2 relative overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/70">Сумма без скидки:</span>
                  <span className="text-sm font-mono text-white/50 line-through">{subtotal} ₽</span>
                </div>

                {revoDiscountAmount > 0 && (
                  <div className="flex justify-between items-center text-[#00FF66]">
                    <span className="text-xs font-bold font-mono flex items-center gap-1">
                      <FontAwesomeIcon icon={faBolt} /> Скидка REVO ({revoDiscountPercent}%):
                    </span>
                    <span className="text-sm font-mono font-bold">-{revoDiscountAmount} ₽</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/70">Доставка курьером:</span>
                  <span className="text-xs font-mono text-white">{deliveryFee} ₽</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-end">
                  <span className="text-sm font-black text-white uppercase">Итого к оплате:</span>
                  <div className="text-right">
                    <span className="text-xs font-mono text-white/40 line-through block">{subtotal + deliveryFee} ₽</span>
                    <span className="text-2xl font-black font-mono text-[#00FF66]">{finalTotal} ₽</span>
                  </div>
                </div>
              </div>

              {/* Customer Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-4 pt-2">
                <span className="text-xs font-mono font-bold text-white/60 uppercase block">Данные для доставки</span>

                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Ваше Имя</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faUser} className="absolute left-3.5 top-3.5 text-white/40 text-xs" />
                    <input
                      type="text"
                      required
                      placeholder="Александр"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Номер телефона (для звонка курьера) *</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faPhone} className="absolute left-3.5 top-3.5 text-white/40 text-xs" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Адрес доставки (Улица, дом, квартира) *</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3.5 top-3.5 text-white/40 text-xs" />
                    <input
                      type="text"
                      required
                      placeholder="ул. Пушкина, д. 10, кв. 42"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Комментарий к заказу (необязательно)</label>
                  <textarea
                    rows={2}
                    placeholder="Попросите домофон не звонить, острый соус отдельно..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00FF66]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-black font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-4"
                  style={{ backgroundColor: primaryColor }}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin /> Оформление...
                    </>
                  ) : (
                    <>
                      <span>Оформить заказ за</span>
                      <span className="font-mono text-base">{finalTotal} ₽</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
