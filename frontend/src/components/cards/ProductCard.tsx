import { motion } from 'framer-motion';
import type { Product } from '../../data/mockData';
import Button from '../common/Button';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass-card card-glow overflow-hidden rounded-[32px] border border-slate-800/70 bg-slate-950/95"
    >
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.status}</p>
          <p className="text-sm font-semibold text-slate-200">${product.price}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
          <p className="mt-3 text-sm text-slate-400">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button variant="primary">View</Button>
          <Button variant="secondary">Add</Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
