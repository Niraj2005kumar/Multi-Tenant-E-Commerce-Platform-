import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, SlidersHorizontal, Star, Store } from "lucide-react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductCard } from "@/components/customer/ProductCard";
import { SearchBar } from "@/components/common/SearchBar";
import { Button } from "@/components/ui/button";
import { vendors } from "@/data/vendors";
import { getAllProducts, getProductsByVendor } from "@/data/products";
import { categories } from "@/data/mock";

type Search = { vendor?: string };

export const Route = createFileRoute("/shop/")({
  validateSearch: (s: Record<string, unknown>): Search => ({ vendor: typeof s.vendor === "string" ? s.vendor : undefined }),
  head: () => ({ meta: [{ title: "Shop — Marqo" }] }),
  component: ShopPage,
});

function ShopPage() {
  const { vendor: vendorId } = Route.useSearch();
  const vendor = vendorId ? vendors.find((v) => v.id === vendorId) : undefined;

  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => (vendorId ? getProductsByVendor(vendorId) : getAllProducts()), [vendorId]);
  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat ? p.category === cat : true) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, q, cat, sort]);

  if (!vendorId) {
    return (
      <PublicLayout>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <PageHeader title="All shops" subtitle={`Browse ${vendors.length} curated vendors`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vendors.map((v) => (
              <Link key={v.id} to="/shop" search={{ vendor: v.id } as never} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="aspect-[16/9] overflow-hidden bg-secondary"><img src={v.image} alt={v.shopName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground"><Store className="size-4" /></span>
                      <div><p className="font-display font-semibold leading-tight">{v.shopName}</p><p className="text-xs text-muted-foreground">{v.category}</p></div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs"><Star className="size-3.5 fill-warning text-warning" /> {v.rating}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{v.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"><ArrowLeft className="size-4" /> All shops</Link>
        {vendor && (
          <div className="rounded-3xl overflow-hidden mb-8 border border-border bg-card shadow-soft">
            <div className="aspect-[5/1] overflow-hidden bg-secondary"><img src={vendor.image} alt={vendor.shopName} className="w-full h-full object-cover" /></div>
            <div className="p-6 flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[200px]">
                <h1 className="text-2xl font-display font-bold">{vendor.shopName}</h1>
                <p className="text-sm text-muted-foreground mt-1">{vendor.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{vendor.category} · {vendor.address}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium"><Star className="size-4 fill-warning text-warning" /> {vendor.rating}</span>
            </div>
          </div>
        )}
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-6">
            <SearchBar value={q} onChange={setQ} />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2"><SlidersHorizontal className="size-3.5" /> Categories</p>
              <div className="flex flex-col gap-1">
                <button onClick={() => setCat(null)} className={`text-left px-3 py-2 rounded-lg text-sm ${!cat ? "bg-secondary font-medium" : "hover:bg-secondary/50"}`}>All</button>
                {categories.map((c) => (
                  <button key={c} onClick={() => setCat(c)} className={`text-left px-3 py-2 rounded-lg text-sm ${cat === c ? "bg-secondary font-medium" : "hover:bg-secondary/50"}`}>{c}</button>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
              <p className="text-sm text-muted-foreground">{filtered.length} products</p>
              <div className="flex gap-2 flex-wrap">
                {["featured", "low", "high", "rating"].map((s) => (
                  <Button key={s} variant={sort === s ? "default" : "outline"} size="sm" onClick={() => setSort(s)} className={sort === s ? "bg-gradient-primary" : ""}>
                    {s === "low" ? "Price ↑" : s === "high" ? "Price ↓" : s === "rating" ? "Top rated" : "Featured"}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}