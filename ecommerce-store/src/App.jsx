import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import CartDrawer from "./components/CartDrawer";

import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
  getProductById,
} from "./api/productApi";


import './App.css'

function App() {

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
  async function testApi() {
    try {
      console.log("==== PHASE 2 API TEST START ====");

      const products = await getAllProducts();
      console.log("✅ getAllProducts:", products.length, "items");
      console.log("Sample product:", products[0]);

      const categories = await getCategories();
      console.log("✅ getCategories:", categories);

      const firstCategory = categories[0];
      const catProducts = await getProductsByCategory(firstCategory);
      console.log(`✅ getProductsByCategory("${firstCategory}"):` , catProducts.length, "items");

      const firstId = products[0]?.id;
      const productById = await getProductById(firstId);
      console.log(`✅ getProductById(${firstId}):`, productById);

      console.log("==== PHASE 2 API TEST END ====");
    } catch (err) {
      console.error("❌ API TEST FAILED:", err.message);
    }
  }

  testApi();
}, []);


 return (
  <div className="min-h-screen bg-gray-50 p-4 font-sans sm:p-6">
    <header className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
        E-Commerce Browser
      </h2>

      <button
        onClick={() => setIsCartOpen(true)}
        className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 active:scale-[0.99]"
      >
        Open Cart
      </button>
    </header>

    <section className="mt-4 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <div className="flex-1">
        <SearchBar value={""} onChange={() => {}} onClear={() => {}} />
      </div>

      <CategoryFilter categories={[]} selected={"all"} onSelect={() => {}} />
    </section>

    <main className="mt-4">
      <ProductGrid
        products={[]}
        onSelectProduct={(id) => setSelectedProductId(id)}
        onAddToCart={() => {}}
      />
    </main>

    <div className="mt-4">
      <ProductDetails
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
        onAddToCart={() => {}}
      />
    </div>

    <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
  </div>
);
};

export default App;