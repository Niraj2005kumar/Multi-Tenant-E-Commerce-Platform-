import { Trash2, ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import type { Product } from "@/data/mock";
import { useStore } from "@/lib/store";

export function WishlistItem({ product }: { product: Product }) {
  const { toggleWish, addToCart } = useStore();
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-border bg-card">
      <Link to="/shop/$id" params={{ id: product.id }}>
        <img src={product.image} alt={product.name} className="size-20 rounded-xl object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{product.vendor}</p>
        <h4 className="font-medium truncate">{product.name}</h4>
        <p className="text-sm font-semibold mt-1">${product.price}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => { addToCart(product); toast.success("Added to cart"); }} className="size-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center"><ShoppingCart className="size-4" /></button>
        <button onClick={() => toggleWish(product)} className="size-9 rounded-full bg-secondary grid place-items-center text-muted-foreground hover:text-destructive"><Trash2 className="size-4" /></button>
      </div>
    </div>
  );
}
