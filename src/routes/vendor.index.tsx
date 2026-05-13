import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { AnalyticsCard } from "@/components/admin/AnalyticsCard";
import { SalesChart } from "@/components/vendor/SalesChart";
import { InventoryCard } from "@/components/vendor/InventoryCard";
import { getProductsByVendor } from "@/data/products";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/vendor/")({ head: () => ({ meta: [{ title: "Vendor dashboard — Marqo" }] }), component: VendorDashboard });

function VendorDashboard() {
  const { user } = useAuth();
  const myProducts = user?.role === "vendor" ? getProductsByVendor(user.id) : [];
  const shopName = user?.role === "vendor" ? user.shopName : "your shop";
  return (
    <>
      <PageHeader title={`Welcome back, ${shopName}`} subtitle="Here's what's happening with your store today." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AnalyticsCard label="Revenue" value="$12,840" delta="+12.4% vs last week" icon={DollarSign} index={0} />
        <AnalyticsCard label="Orders" value="248" delta="+8.1%" icon={ShoppingBag} index={1} />
        <AnalyticsCard label="Products" value={String(myProducts.length)} delta="live in catalog" icon={Package} index={2} />
        <AnalyticsCard label="Customers" value="1,420" delta="+5.6%" icon={Users} index={3} />
      </div>
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <SalesChart />
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Low stock</h3>
          <div className="space-y-2">
            {(myProducts.length ? myProducts : []).slice(0, 5).map((p) => <InventoryCard key={p.id} product={p} />)}
            {myProducts.length === 0 && <p className="text-sm text-muted-foreground">No products yet.</p>}
          </div>
        </div>
      </div>
    </>
  );
}
