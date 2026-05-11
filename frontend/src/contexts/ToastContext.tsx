import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastMessage['type']) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: ToastMessage['type'] = 'info') => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((current) => [...current, { id, type, message }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3200);
  };

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              className={`max-w-sm rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl ${
                toast.type === 'success'
                  ? 'ring-1 ring-emerald-400/20'
                  : toast.type === 'error'
                  ? 'ring-1 ring-rose-400/20'
                  : 'ring-1 ring-sky-400/20'
              }`}
              {...({} as any)}
            >
              <p className="text-sm font-medium text-slate-100">{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
