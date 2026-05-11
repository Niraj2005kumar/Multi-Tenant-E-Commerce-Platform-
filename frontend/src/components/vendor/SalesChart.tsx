import { motion } from 'framer-motion';

const data = [82, 94, 76, 102, 119, 135, 128];
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function SalesChart() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Weekly sales</p>
          <h3 className="text-xl font-semibold text-white">Revenue performance</h3>
        </div>
        <span className="text-sm text-slate-400">Live</span>
      </div>
      <div className="flex items-end gap-3">
        {data.map((value, index) => (
          <motion.div
            key={labels[index]}
            initial={{ height: 0 }}
            animate={{ height: value + 20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex-1 rounded-3xl bg-sky-500/80"
            style={{ minHeight: 80 }}
            {...({} as any)}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xs text-slate-100">{value}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.22em] text-slate-500">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export default SalesChart;
