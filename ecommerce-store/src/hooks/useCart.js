import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ecommerce_cart_v1";

function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function useCart() {
  const [cartItems, setCartItems] = useState(() => safeLoad());

  // persist cart
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore storage errors
    }
  }, [cartItems]);

  function addToCart(product) {
    if (!product?.id) return;

    setCartItems((prev) => {
      const found = prev.find((i) => i.id === product.id);

      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function increaseQty(id) {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }

  function decreaseQty(id) {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const itemCount = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cartItems]
  );

  return {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    itemCount,
    subtotal,
  };
}
