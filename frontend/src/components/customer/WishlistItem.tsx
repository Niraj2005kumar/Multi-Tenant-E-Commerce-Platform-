import { Link } from 'react-router-dom';
import Button from '../common/Button';
import type { Product } from '../../types';

function WishlistItem({ product }: { product: Product }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-900/90 p-4 shadow-lg shadow-slate-950/20 sm:flex sm:items-center sm:gap-4">
      <img src={product.image} alt={product.name} className="mb-4 h-28 w-full rounded-3xl object-cover sm:mb-0 sm:w-28" />
      <div className="flex-1 space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm text-slate-400">{product.category} · {product.vendor}</p>
          </div>
          <p className="text-lg font-semibold text-sky-400">${product.price.toFixed(0)}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to={`/product/${product.id}`} className="text-sm text-sky-400 hover:text-sky-200">
            View details
          </Link>
          <Button variant="secondary">Move to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
