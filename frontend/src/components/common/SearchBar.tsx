import { motion } from 'framer-motion';

function SearchBar({ value, onChange }: { value: string; onChange: (query: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-inner shadow-slate-950/20"
      {...({} as any)}
    >
      <label className="sr-only" htmlFor="search">
        Search products
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products, brands, categories..."
        className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
      />
    </motion.div>
  );
}

export default SearchBar;
