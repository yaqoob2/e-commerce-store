export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div style={{ flex: 1 }}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        style={{ width: "100%", padding: 10 }}
      />
      <button onClick={onClear} style={{ marginTop: 6 }}>
        Clear
      </button>
    </div>
  );
}
