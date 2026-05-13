import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckoutForm } from "@/components/customer/CheckoutForm";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/checkout")({ head: () => ({ meta: [{ title: "Checkout — Marqo" }] }), component: Checkout });

function Checkout() {
  const { cart } = useStore();
  const nav = useNavigate();
  const subtotal = cart.reduce((a, i) => a + i.product.price * i.qty, 0);
  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <PageHeader title="Checkout" subtitle="Review your information" />
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-8">
            <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display font-semibold mb-5">Shipping details</h3>
              <CheckoutForm />
            </section>
            <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display font-semibold mb-3">Delivery method</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[["Standard", "5–7 days · Free"], ["Express", "1–2 days · $14.99"]].map(([t, d]) => (
                  <label key={t} className="flex items-start gap-3 rounded-xl border border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5 cursor-pointer">
                    <input type="radio" name="ship" defaultChecked={t === "Standard"} className="mt-1 accent-[var(--color-primary)]" />
                    <div><p className="font-medium">{t}</p><p className="text-xs text-muted-foreground">{d}</p></div>
                  </label>
                ))}
              </div>
            </section>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 h-fit shadow-soft">
            <h3 className="font-display font-semibold">Summary</h3>
            <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
              {cart.map((i) => (
                <div key={i.product.id} className="flex gap-3 text-sm">
                  <img src={i.product.image} className="size-12 rounded-lg object-cover" alt="" />
                  <div className="flex-1 min-w-0"><p className="truncate font-medium">{i.product.name}</p><p className="text-muted-foreground text-xs">Qty {i.qty}</p></div>
                  <span>${(i.product.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border flex justify-between font-display font-bold">
              <span>Total</span><span>${(subtotal * 1.07).toFixed(2)}</span>
            </div>
            <Link to="/payment"><Button className="w-full mt-5 bg-gradient-primary shadow-elegant" size="lg">Continue to payment</Button></Link>
          </aside>
        </div>
      </div>
    </PublicLayout>
  );
}
