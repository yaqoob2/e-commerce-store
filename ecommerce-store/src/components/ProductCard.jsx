export default function ProductCard({ product, onSelect, onAdd }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <p><b>Product Card</b></p>
      <button onClick={onSelect} style={{ marginRight: 8 }}>
        View
      </button>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
