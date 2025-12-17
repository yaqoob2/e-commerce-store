export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div>
      <select value={selected} onChange={(e) => onSelect(e.target.value)} style={{ padding: 10 }}>
        <option value="all">All</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
