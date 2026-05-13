import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { CreditCard, Smartphone, QrCode } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/payment")({ head: () => ({ meta: [{ title: "Payment — Marqo" }] }), component: Payment });

function Payment() {
  const nav = useNavigate();
  const [method, setMethod] = useState<"card" | "qr" | "wallet">("card");
  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <PageHeader title="Payment" subtitle="Choose how you'd like to pay" />
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {[
            { k: "card", I: CreditCard, l: "Card" },
            { k: "qr", I: QrCode, l: "QR Pay" },
            { k: "wallet", I: Smartphone, l: "Wallet" },
          ].map((o) => (
            <button key={o.k} onClick={() => setMethod(o.k as any)} className={`rounded-2xl border p-5 text-left transition-all ${method === o.k ? "border-primary bg-primary/5 shadow-elegant" : "border-border hover:border-primary/40"}`}>
              <o.I className="size-5 mb-2 text-primary" /><p className="font-medium">{o.l}</p>
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          {method === "card" && (
            <div className="grid gap-4">
              <div><Label className="mb-1.5">Card number</Label><Input placeholder="4242 4242 4242 4242" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><Label className="mb-1.5">Expiry</Label><Input placeholder="MM/YY" /></div>
                <div><Label className="mb-1.5">CVC</Label><Input placeholder="123" /></div>
              </div>
              <div><Label className="mb-1.5">Name on card</Label><Input placeholder="Ava Chen" /></div>
            </div>
          )}
          {method === "qr" && (
            <div className="flex flex-col items-center text-center py-6">
              <div className="size-56 rounded-2xl bg-foreground p-4 grid place-items-center">
                <div className="size-full rounded-lg bg-background grid place-items-center">
                  <QrCode className="size-32 text-foreground" />
                </div>
              </div>
              <p className="mt-5 font-medium">Scan with your banking app</p>
              <p className="text-sm text-muted-foreground mt-1">Code expires in 04:59</p>
            </div>
          )}
          {method === "wallet" && (
            <div className="grid sm:grid-cols-3 gap-3">
              {["Apple Pay", "Google Pay", "PayPal"].map((w) => (
                <button key={w} className="rounded-xl border border-border p-5 text-left hover:border-primary"><p className="font-medium">{w}</p><p className="text-xs text-muted-foreground mt-1">Connected</p></button>
              ))}
            </div>
          )}
        </div>
        <Button onClick={() => nav({ to: "/order-success" })} className="w-full mt-6 bg-gradient-primary shadow-elegant" size="lg">Pay now</Button>
      </div>
    </PublicLayout>
  );
}
