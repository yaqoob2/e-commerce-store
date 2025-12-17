export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative w-full">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-gray-400"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          ⌕
        </span>
      </div>

      <button
        onClick={onClear}
        className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-gray-50"
      >
        Clear
      </button>
    </div>
  );
}
