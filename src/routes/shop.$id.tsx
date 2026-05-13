import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Truck, RefreshCw, Shield } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { ProductCard } from "@/components/customer/ProductCard";
import { getProduct, getAllProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/shop/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Marqo` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  component: ProductDetailsPage,
  notFoundComponent: () => (
    <PublicLayout><div className="py-32 text-center"><h2 className="text-2xl font-display font-bold">Product not found</h2><Link to="/shop" className="text-primary text-sm">Back to shop</Link></div></PublicLayout>
  ),
});

function ProductDetailsPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWish, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const wished = wishlist.some((w) => w.id === product.id);
  const related = getAllProducts().filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="text-foreground">{product.name}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl overflow-hidden bg-secondary aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="text-sm text-muted-foreground">{product.vendor}</p>
            <h1 className="mt-1 text-4xl font-display font-bold tracking-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <div className="flex"><Star className="size-4 fill-warning text-warning" /></div>
              <span>{product.rating}</span>
              <span className="text-muted-foreground">· {product.reviews} reviews</span>
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-display font-bold">${product.price}</span>
              {product.oldPrice && <span className="text-muted-foreground line-through">${product.oldPrice}</span>}
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex items-center bg-secondary rounded-xl p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-9 rounded-lg hover:bg-background">−</button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="size-9 rounded-lg hover:bg-background">+</button>
              </div>
              <Button size="lg" className="bg-gradient-primary shadow-elegant gap-2 flex-1" onClick={() => { addToCart(product, qty); toast.success("Added to cart"); }}>
                <ShoppingCart className="size-4" /> Add to cart
              </Button>
              <Button size="lg" variant="outline" onClick={() => toggleWish(product)}><Heart className={`size-4 ${wished ? "fill-destructive text-destructive" : ""}`} /></Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[[Truck, "Free shipping"], [RefreshCw, "30-day returns"], [Shield, "2-yr warranty"]].map(([I, t]: any) => (
                <div key={t} className="rounded-xl border border-border p-3 text-center">
                  <I className="size-4 mx-auto mb-1 text-primary" />
                  <p className="text-xs text-muted-foreground">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-display font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">{related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>
        </div>
      </div>
    </PublicLayout>
  );
}
