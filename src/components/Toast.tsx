import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { ToastNotification } from '../types';

interface ToastProps {
  toasts: ToastNotification[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 bg-brand-green text-white px-4 py-3 rounded-xl shadow-soft-lg border border-brand-green-light animate-fade-in"
          role="status"
          aria-live="polite"
        >
          {toast.type === 'info' ? (
            <Info className="w-5 h-5 text-brand-gold-bright shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-brand-gold-bright shrink-0" />
          )}
          <p className="text-sm font-medium flex-1">{toast.message}</p>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-white/60 hover:text-white text-xs font-bold px-1"
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
