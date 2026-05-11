import { AnimatePresence } from 'framer-motion';
import AppRoutes from './AppRoutes';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </div>
    </ToastProvider>
  );
}

export default App;
