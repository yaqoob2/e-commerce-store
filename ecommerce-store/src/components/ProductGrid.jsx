import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelectProduct, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onSelect={() => onSelectProduct(p.id)}
          onAdd={() => onAddToCart(p)}
        />
      ))}
    </div>
  );
}
