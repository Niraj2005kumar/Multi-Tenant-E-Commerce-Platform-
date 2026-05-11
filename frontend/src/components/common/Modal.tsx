import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ open, title, children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          {...({} as any)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40"
            {...({} as any)}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <button onClick={onClose} className="rounded-full bg-slate-800/80 px-3 py-2 text-sm text-slate-200 hover:bg-slate-700">
                Close
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default Modal;
