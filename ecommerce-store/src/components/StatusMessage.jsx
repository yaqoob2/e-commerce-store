import { useEffect } from "react";

export default function StatusMessage({ message, onClear, duration = 1200 }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClear, duration);
    return () => clearTimeout(t);
  }, [message, onClear, duration]);

  if (!message) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2">
      <div className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-xl">
        {message}
      </div>
    </div>
  );
}
