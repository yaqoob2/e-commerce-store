export default function CartDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <div style={{ marginTop: 16, padding: 12, border: "2px solid black" }}>
      <p><b>Cart Drawer</b></p>
      <button onClick={onClose}>Close Cart</button>
    </div>
  );
}
