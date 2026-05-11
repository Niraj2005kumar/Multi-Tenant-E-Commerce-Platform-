import Button from '../common/Button';
import type { Product } from '../../types';

function CartItem({ product, quantity, onRemove, onChangeQuantity }: { product: Product; quantity: number; onRemove: () => void; onChangeQuantity: (value: number) => void; }) {
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
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
            <button type="button" onClick={() => onChangeQuantity(Math.max(quantity - 1, 1))} className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-white/10">-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => onChangeQuantity(quantity + 1)} className="rounded-full bg-white/5 px-3 py-1 transition hover:bg-white/10">+</button>
          </div>
          <Button variant="ghost" className="ml-auto sm:ml-0" onClick={onRemove}>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
