import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag, Heart, LogOut } from "lucide-react";

export const Route = createFileRoute("/profile")({ head: () => ({ meta: [{ title: "Profile — Marqo" }] }), component: Profile });

function Profile() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <PageHeader title="Your profile" subtitle="Manage your account information" />
        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-1">
            <div className="rounded-2xl border border-border p-5 bg-card shadow-soft text-center mb-3">
              <div className="size-16 rounded-full mx-auto bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-xl">AC</div>
              <p className="mt-3 font-semibold">Ava Chen</p>
              <p className="text-xs text-muted-foreground">ava@shop.dev</p>
            </div>
            {[
              { to: "/orders", I: ShoppingBag, l: "Orders" },
              { to: "/wishlist", I: Heart, l: "Wishlist" },
              { to: "/address", I: MapPin, l: "Addresses" },
            ].map((i) => (
              <Link key={i.to} to={i.to} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary text-sm"><i.I className="size-4" /> {i.l}</Link>
            ))}
            <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-destructive/10 text-destructive text-sm"><LogOut className="size-4" /> Sign out</Link>
          </aside>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display font-semibold mb-5">Account details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label className="mb-1.5">First name</Label><Input defaultValue="Ava" /></div>
              <div><Label className="mb-1.5">Last name</Label><Input defaultValue="Chen" /></div>
              <div className="sm:col-span-2"><Label className="mb-1.5">Email</Label><Input defaultValue="ava@shop.dev" /></div>
              <div><Label className="mb-1.5">Phone</Label><Input defaultValue="+1 555 0100" /></div>
              <div><Label className="mb-1.5">Birthday</Label><Input type="date" defaultValue="1995-06-15" /></div>
            </div>
            <div className="mt-6 flex gap-3"><Button className="bg-gradient-primary shadow-elegant">Save changes</Button><Button variant="outline">Cancel</Button></div>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
