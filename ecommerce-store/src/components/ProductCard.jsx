import formatCurrency from "../utils/formatCurrency";

export default function ProductCard({ product, onSelect, onAdd }) {
  const title = product?.title || "Untitled";
  const img = product?.image;
  const price = formatCurrency(product?.price);
  const category = product?.category || "";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <button
        onClick={onSelect}
        className="group relative flex h-52 items-center justify-center bg-white"
        type="button"
      >
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-contain p-4 transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="text-sm text-gray-500">No image</div>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {category && (
          <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {category}
          </span>
        )}

        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
          {title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-base font-bold text-gray-900">{price}</p>

          <div className="flex gap-2">
            <button
              onClick={onSelect}
              className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50"
              type="button"
            >
              View
            </button>

            {/* IMPORTANT: pass product to onAdd */}
            <button
              onClick={() => onAdd(product)}
              className="rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
