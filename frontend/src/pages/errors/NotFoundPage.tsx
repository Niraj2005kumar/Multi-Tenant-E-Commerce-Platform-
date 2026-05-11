import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-slate-900/90 p-8 text-center shadow-2xl shadow-slate-950/30 m-4"
      {...({} as any)}
    >
      <p className="text-6xl font-bold text-sky-400">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 text-slate-400 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Go home
        </Link>
        <Link to="/shop" className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300">
          Browse products
        </Link>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
