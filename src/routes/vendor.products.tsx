import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { getProductsByVendor } from "@/data/products";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/vendor/products")({
  component: () => {
    const path = useRouterState({ select: (s) => s.location.pathname });
    if (path !== "/vendor/products") return <Outlet />;
    return <ProductsPage />;
  },
});

function ProductsPage() {
  const { user } = useAuth();
  const list = user?.role === "vendor" ? getProductsByVendor(user.id) : [];
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Manage your product catalog"
        action={<Link to="/vendor/products/new"><Button className="bg-gradient-primary shadow-elegant"><Plus className="size-4 mr-2" />Add product</Button></Link>}
      />
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        {list.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted-foreground">No products yet. Click "Add product" to create your first listing.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>{["Product", "Category", "Price", "Stock", "Status"].map((h) => <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="border-t border-border hover:bg-secondary/40">
                  <td className="px-5 py-3 flex items-center gap-3"><img src={p.image} alt="" className="size-10 rounded-lg object-cover" /><span className="font-medium truncate max-w-[200px]">{p.name}</span></td>
                  <td className="px-5 py-3">{p.category}</td>
                  <td className="px-5 py-3 font-medium">${p.price}</td>
                  <td className="px-5 py-3">{p.stock}</td>
                  <td className="px-5 py-3"><span className={`px-2 py-1 text-xs rounded-full ${p.stock > 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{p.stock > 0 ? "Active" : "Out"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}