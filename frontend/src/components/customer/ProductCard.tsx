import { motion } from 'framer-motion';
import type { Product } from '../../types';
import Button from '../common/Button';
import Badge from '../common/Badge';

function ProductCard({ product, onAdd }: { product: Product; onAdd?: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/20"
      {...({} as any)}
    >
      <div className="relative h-64 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4">
          <Badge label={product.status} variant={product.status === 'Active' ? 'success' : 'rose'} />
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{product.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{product.name}</h3>
          </div>
          <p className="text-lg font-semibold text-sky-400">${product.price.toFixed(0)}</p>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-slate-400">{product.description}</p>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1 text-sm text-slate-300">
            <p>{product.vendor}</p>
            <p>{product.rating} ⭐ · {product.reviews} reviews</p>
          </div>
          <Button variant="primary" onClick={onAdd}>Add to cart</Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
