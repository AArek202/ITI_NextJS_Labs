import { createContext, useContext, useState, ReactNode } from "react";

interface ToastItem {
  id: number;
  message: string;
}

interface ToastContextValue {
  addToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = (id: number) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  const addToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => removeToast(id), 4000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast UI lives here — renders above everything, on every page */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-slate-900 text-white pl-4 pr-10 py-3 rounded-lg shadow-lg text-sm relative"
          >
            <span dangerouslySetInnerHTML={{ __html: `🔔 ${toast.message}` }} />
            <button
              onClick={() => removeToast(toast.id)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs transition"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
