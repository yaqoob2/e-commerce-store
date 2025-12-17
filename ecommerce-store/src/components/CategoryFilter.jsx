export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="w-full sm:w-56">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
      >
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
