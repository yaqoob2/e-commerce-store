import { useEffect } from "react";
import CartItem from "./CartItem";
import formatCurrency from "../utils/formatCurrency";

export default function CartDrawer({
  open,
  onClose,
  items,
  itemCount,
  subtotal,
  onInc,
  onDec,
  onRemove,
  onClear,
}) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="h-full w-full max-w-md bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <div>
            <p className="text-lg font-bold text-gray-900">Your Cart</p>
            <p className="text-sm text-gray-500">{itemCount} items</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
            type="button"
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div className="flex h-[calc(100%-160px)] flex-col gap-3 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onInc={() => onInc(item.id)}
                onDec={() => onDec(item.id)}
                onRemove={() => onRemove(item.id)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="text-lg font-bold text-gray-900">
              {formatCurrency(subtotal)}
            </p>
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={onClear}
              disabled={items.length === 0}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold hover:bg-gray-50 disabled:opacity-50"
              type="button"
            >
              Clear
            </button>

            <button
              disabled={items.length === 0}
              className="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

