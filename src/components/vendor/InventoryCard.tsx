import type { Product } from "@/data/mock";

export function InventoryCard({ product }: { product: Product }) {
  const low = product.stock < 15;
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
      <img src={product.image} className="size-12 rounded-lg object-cover" alt="" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{product.name}</p>
        <p className="text-xs text-muted-foreground">{product.category}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full font-medium ${low ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"}`}>
        {product.stock} in stock
      </span>
    </div>
  );
}
