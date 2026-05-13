import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { CartItem } from "@/components/customer/CartItem";
import { EmptyState } from "@/components/common/Loader";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/cart")({ head: () => ({ meta: [{ title: "Cart — Marqo" }] }), component: CartPage });

function CartPage() {
  const { cart } = useStore();
  const subtotal = cart.reduce((a, i) => a + i.product.price * i.qty, 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 8;
  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <PageHeader title="Your cart" subtitle={`${cart.length} item${cart.length === 1 ? "" : "s"}`} />
        {cart.length === 0 ? (
          <EmptyState icon={<ShoppingBag className="size-7 text-primary" />} title="Your cart is empty" hint="Discover products from our top vendors and add them to your cart." />
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            <div className="space-y-3">{cart.map((i) => <CartItem key={i.product.id} product={i.product} qty={i.qty} />)}</div>
            <aside className="rounded-2xl border border-border bg-card p-6 h-fit shadow-soft sticky top-24">
              <h3 className="font-display font-semibold text-lg">Order summary</h3>
              <div className="mt-4 space-y-2 text-sm">
                <Row l="Subtotal" v={`$${subtotal.toFixed(2)}`} />
                <Row l="Shipping" v={shipping ? `$${shipping}` : "Free"} />
                <Row l="Tax" v={`$${(subtotal * 0.07).toFixed(2)}`} />
                <div className="border-t border-border pt-3 mt-3"><Row l={<span className="font-semibold text-foreground">Total</span>} v={<span className="font-display font-bold text-lg">${(subtotal + shipping + subtotal * 0.07).toFixed(2)}</span>} /></div>
              </div>
              <Link to="/checkout"><Button className="w-full mt-6 bg-gradient-primary shadow-elegant" size="lg">Checkout</Button></Link>
              <Link to="/shop" className="block mt-3 text-center text-sm text-muted-foreground hover:text-foreground">Continue shopping</Link>
            </aside>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
function Row({ l, v }: { l: any; v: any }) { return <div className="flex justify-between text-muted-foreground"><span>{l}</span><span>{v}</span></div>; }
