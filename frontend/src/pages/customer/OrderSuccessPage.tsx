import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function OrderSuccessPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-[500px] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-slate-900/90 p-12 text-center shadow-2xl shadow-slate-950/30"
      {...({} as any)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center"
        {...({} as any)}
      >
        <span className="text-3xl">✓</span>
      </motion.div>
      <h1 className="text-3xl font-semibold text-white">Order placed successfully!</h1>
      <p className="mt-3 text-slate-400 max-w-md">
        Thank you for your purchase. Your order #ORD-2026-005 has been confirmed and will be processed shortly.
      </p>
      <div className="mt-8 space-y-3">
        <div className="text-sm text-slate-300">
          <p>Estimated delivery: <strong>2-4 business days</strong></p>
          <p>You'll receive tracking updates via email</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/customer/orders" className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300">
          View order
        </Link>
        <Link to="/shop" className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Continue shopping
        </Link>
      </div>
    </motion.div>
  );
}

export default OrderSuccessPage;
