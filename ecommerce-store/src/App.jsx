import { useState } from "react";

import useProducts from "./hooks/useProduct";
import useCart from "./hooks/useCart";

import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import StatusMessage from "./components/StatusMessage";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  // Products (Phase 3)
  const {
    productsToShow,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    loading,
    error,
  } = useProducts();

  // Cart (Phase 6)
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    itemCount,
    subtotal,
  } = useCart();

  // Toast helpers (Phase 7)
  const showToast = (msg) => setToast(msg);

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast("Added to cart ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans sm:p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
           New Looks Fashion
          </h2>

          <button
            onClick={() => setIsCartOpen(true)}
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            type="button"
          >
            Open Cart ({itemCount})
          </button>
        </header>

        {/* Filters */}
        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1">
              <SearchBar
                value={searchText}
                onChange={setSearchText}
                onClear={() => setSearchText("")}
              />
            </div>

            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </section>

        {/* Products */}
        <section className="mt-4">
          {loading && (
            <div className="rounded-xl bg-white p-4 text-gray-600 shadow-sm">
              Loading products...
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-white p-4 text-red-600 shadow-sm">
              {error}
            </div>
          )}

          {!loading && !error && (
            <ProductGrid
              products={productsToShow}
              onSelectProduct={(id) => setSelectedProductId(id)}
              onAddToCart={handleAddToCart}
            />
          )}
        </section>

        {/* Details modal */}
        <ProductDetails
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Cart drawer */}
        <CartDrawer
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          itemCount={itemCount}
          subtotal={subtotal}
          onInc={increaseQty}
          onDec={decreaseQty}
          onRemove={removeFromCart}
          onClear={clearCart}
        />

        {/* Toast */}
        <StatusMessage message={toast} onClear={() => setToast("")} />
      </div>
    </div>
  );
}
