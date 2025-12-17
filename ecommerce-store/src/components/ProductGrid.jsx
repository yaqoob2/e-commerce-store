import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelectProduct, onAddToCart }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
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
