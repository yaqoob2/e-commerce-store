export default function ProductDetails({ productId, onClose, onAddToCart }) {
  if (!productId) return null;

  return (
    <div style={{ marginTop: 16, padding: 12, border: "1px solid #aaa" }}>
      <p><b>Product Details</b> (ID: {productId})</p>
      <button onClick={onClose} style={{ marginRight: 8 }}>Close</button>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}
