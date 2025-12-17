import formatCurrency from "../utils/formatCurrency";

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-2"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="line-clamp-2 text-sm font-semibold text-gray-900">
          {item.title}
        </p>

        <p className="text-sm font-bold text-gray-900">
          {formatCurrency(item.price)}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onDec}
              className="h-8 w-8 rounded-lg border border-gray-200 font-bold hover:bg-gray-50"
              type="button"
            >
              -
            </button>
            <span className="w-6 text-center text-sm font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={onInc}
              className="h-8 w-8 rounded-lg border border-gray-200 font-bold hover:bg-gray-50"
              type="button"
            >
              +
            </button>
          </div>

          <button
            onClick={onRemove}
            className="text-xs font-semibold text-red-600 hover:underline"
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
