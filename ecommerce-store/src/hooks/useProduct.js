import { useEffect, useMemo, useState } from "react";
import { getAllProducts, getCategories, getProductsByCategory } from "../api/productApi";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 1) Load categories once
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (e) {
        setError(e.message);
      }
    }
    loadCategories();
  }, []);

  // 2) Load products whenever category changes
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data =
          selectedCategory === "all"
            ? await getAllProducts()
            : await getProductsByCategory(selectedCategory);

        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [selectedCategory]);

  // 3) Search filtering (client-side)
  const productsToShow = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, searchText]);

  return {
    productsToShow,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchText,
    setSearchText,
    loading,
    error,
  };
}
