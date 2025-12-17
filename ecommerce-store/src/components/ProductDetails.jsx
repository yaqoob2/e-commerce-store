import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import formatCurrency from "../utils/formatCurrency";

export default function ProductDetails({ productId, onClose, onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch product details when productId changes
  useEffect(() => {
    if (!productId) {
      setProduct(null);
      setLoading(false);
      setError("");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(productId);
        if (!cancelled) setProduct(data);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [productId]);

  // Phase 7 polish: ESC closes modal
  useEffect(() => {
    if (!productId) return;

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [productId, onClose]);

  // If nothing selected, render nothing
  if (!productId) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-5">
          <h3 className="text-lg font-bold text-gray-900">Product Details</h3>

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
            type="button"
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5">
          {loading && (
            <div className="rounded-xl bg-gray-50 p-4 text-gray-600">
              Loading details...
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && product && (
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Image */}
              <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {product.category}
                </span>

                <h4 className="text-xl font-bold text-gray-900">
                  {product.title}
                </h4>

                <p className="text-sm leading-6 text-gray-700">
                  {product.description}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    {formatCurrency(product.price)}
                  </p>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Extra: rating if available */}
                {product.rating?.rate != null && (
                  <p className="text-sm text-gray-600">
                    Rating:{" "}
                    <span className="font-semibold text-gray-900">
                      {product.rating.rate}
                    </span>{" "}
                    ({product.rating.count} reviews)
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-4 text-xs text-gray-500 sm:p-5">
          Tip: Press <b>ESC</b> or click outside to close.
        </div>
      </div>
    </div>
  );
}
