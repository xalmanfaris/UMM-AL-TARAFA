import React, { createContext, useContext, useState, useEffect } from 'react';
import { businessInfo } from '../data/translations';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('uat_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'prod-cadbury-dairy-milk',
          nameEn: 'Cadbury Dairy Milk',
          nameAr: 'شوكولاتة كادبوري ديري ميلك',
          priceAED: 8.25,
          weight: '85 g',
          image: 'https://images.openai.com/static-rsc-4/ofbwTPwh8qQE2pkeSgadYQgsMbtqcixAC4We3YzSgPyQc9u47qGZgB1kd9m5buwovJq_8_nViVhkEwSCtPG5GQGUs23DhubAqzzShAxLv_nkggY3X17vTIshQOvtgdR43oMoRWEXtkCwL5lo9arS9vYmpJSFH7Gp77RgikZOCi0?purpose=inline',
          quantity: 1,
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('uat_cart', JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          nameEn: product.nameEn,
          nameAr: product.nameAr,
          priceAED: product.priceAED || 10,
          weight: product.weight || 'Pack',
          image: product.image,
          quantity: qty,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const rawTotal = items.reduce((acc, item) => acc + (item.priceAED * item.quantity), 0);
  const totalPriceAED = Number(rawTotal.toFixed(2));

  const sendWhatsAppOrder = (lang = 'en') => {
    if (items.length === 0) return;
    const isAr = lang === 'ar';
    const header = isAr
      ? `مرحباً متجر أم الطرافة (سوق الرولة)، أود طلب المنتجات التالية:\n\n`
      : `Hello UMM AL TARAFA (Souq Al Rolla), I would like to order the following items:\n\n`;

    const itemsText = items
      .map((item, idx) => {
        const name = isAr ? item.nameAr || item.nameEn : item.nameEn;
        const lineTotal = (item.priceAED * item.quantity).toFixed(2);
        return `${idx + 1}. *${name}* (${item.weight}) x ${item.quantity} = AED ${lineTotal}`;
      })
      .join('\n');

    const totalText = isAr
      ? `\n\n*الإجمالي المقدر: AED ${totalPriceAED.toFixed(2)}*\nيرجى تأكيد التجهيز وتكلفة التوصيل في الشارقة/الإمارات. شكراً!`
      : `\n\n*Estimated Total: AED ${totalPriceAED.toFixed(2)}*\nPlease confirm availability & delivery/pickup details in Sharjah/UAE. Thank you!`;

    const fullMessage = encodeURIComponent(header + itemsText + totalText);
    const url = `https://wa.me/971558172666?text=${fullMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        totalPriceAED,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
