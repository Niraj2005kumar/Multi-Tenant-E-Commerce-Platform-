import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/vendor-login")({ head: () => ({ meta: [{ title: "Vendor sign in — MultiShop" }] }), component: VendorLogin });

function VendorLogin() {
  const nav = useNavigate();
  const { loginVendor } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = loginVendor(email, password);
    if (!res.ok) return toast.error(res.error);
    toast.success("Welcome back");
    nav({ to: "/vendor" });
  };

  return (
    <AuthLayout
      title="Vendor sign in"
      subtitle="Manage your shop, products and orders"
      footer={<>New seller? <Link to="/vendor-register" className="text-primary font-medium">Register your shop</Link> · <Link to="/login" className="text-primary font-medium">Customer login</Link></>}
    >
      <form onSubmit={submit} className="space-y-4">
        <div><Label className="mb-1.5">Email</Label><Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="north@shop.dev" /></div>
        <div><Label className="mb-1.5">Password</Label><Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="vendor123" /></div>
        <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Sign in to dashboard</Button>
        <p className="text-xs text-muted-foreground text-center">Demo: north@shop.dev / vendor123</p>
      </form>
    </AuthLayout>
  );
}