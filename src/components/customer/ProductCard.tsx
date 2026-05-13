import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/mock";
import { useStore } from "@/lib/store";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWish, wishlist } = useStore();
  const wished = wishlist.some((w) => w.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
    >
      <Link to="/shop/$id" params={{ id: product.id }} className="block relative aspect-square overflow-hidden bg-secondary">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-primary text-primary-foreground shadow-elegant">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); toggleWish(product); toast.success(wished ? "Removed from wishlist" : "Added to wishlist"); }}
          className="absolute top-3 right-3 size-9 rounded-full bg-background/90 backdrop-blur grid place-items-center hover:bg-background transition-colors"
        >
          <Heart className={`size-4 ${wished ? "fill-destructive text-destructive" : "text-foreground"}`} />
        </button>
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground">{product.vendor}</p>
        <Link to="/shop/$id" params={{ id: product.id }} className="block mt-1 font-medium line-clamp-1 hover:text-primary transition-colors">
          {product.name}
        </Link>
        <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
          <Star className="size-3 fill-warning text-warning" />
          <span>{product.rating}</span>
          <span>· {product.reviews}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-semibold">${product.price}</span>
            {product.oldPrice && <span className="ml-2 text-xs text-muted-foreground line-through">${product.oldPrice}</span>}
          </div>
          <button
            onClick={() => { addToCart(product); toast.success("Added to cart"); }}
            className="size-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center hover:opacity-90 transition-opacity shadow-elegant"
          >
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
