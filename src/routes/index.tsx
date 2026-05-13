import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Store } from "lucide-react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { Button } from "@/components/ui/button";
import { vendors, productCountFor } from "@/data/vendors";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "MultiShop — Discover independent shops" }] }),
  component: HomePage,
});

function HomePage() {
  const active = vendors.filter((v) => v.status === "active");
  return (
    <PublicLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border text-xs font-medium">
            <Sparkles className="size-3.5 text-primary" /> {active.length} active shops · curated marketplace
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-4xl sm:text-5xl font-display font-bold tracking-tight">
            Discover <span className="text-gradient">independent shops</span>
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Browse vendors first, then explore each shop's full product range.</p>
          <div className="mt-7 flex justify-center gap-3">
            <Link to="/shop"><Button size="lg" className="bg-gradient-primary shadow-elegant gap-2">Explore all shops <ArrowRight className="size-4" /></Button></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-display font-bold">Featured shops</h2>
            <p className="text-muted-foreground text-sm mt-1">Hand-picked vendors creating remarkable goods</p>
          </div>
          <Link to="/shop" className="text-sm text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.map((v, i) => (
            <motion.div key={v.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link
                to="/shop"
                search={{ vendor: v.id } as never}
                className="group block rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img src={v.image} alt={v.shopName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground"><Store className="size-4" /></span>
                      <div>
                        <p className="font-display font-semibold leading-tight">{v.shopName}</p>
                        <p className="text-xs text-muted-foreground">{v.category}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium"><Star className="size-3.5 fill-warning text-warning" /> {v.rating}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{v.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{productCountFor(v.id)} products · {v.address}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}