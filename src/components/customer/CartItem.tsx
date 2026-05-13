import { Minus, Plus, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import type { Product } from "@/data/mock";

export function CartItem({ product, qty }: { product: Product; qty: number }) {
  const { updateQty, removeFromCart } = useStore();
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-border bg-card">
      <img src={product.image} alt={product.name} className="size-20 rounded-xl object-cover" />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{product.vendor}</p>
        <h4 className="font-medium truncate">{product.name}</h4>
        <p className="text-sm font-semibold mt-1">${product.price}</p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive">
          <Trash2 className="size-4" />
        </button>
        <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
          <button onClick={() => updateQty(product.id, qty - 1)} className="size-7 grid place-items-center rounded-full hover:bg-background"><Minus className="size-3" /></button>
          <span className="w-6 text-center text-sm">{qty}</span>
          <button onClick={() => updateQty(product.id, qty + 1)} className="size-7 grid place-items-center rounded-full hover:bg-background"><Plus className="size-3" /></button>
        </div>
      </div>
    </div>
  );
}
