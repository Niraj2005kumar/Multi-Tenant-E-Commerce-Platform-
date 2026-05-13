import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/vendor-register")({ head: () => ({ meta: [{ title: "Open your shop — Marqo" }] }), component: VendorRegister });

const empty = {
  ownerName: "",
  shopName: "",
  category: "Fashion",
  address: "",
  phone: "",
  email: "",
  password: "",
  confirm: "",
  description: "",
  image: "",
};

function VendorRegister() {
  const nav = useNavigate();
  const { registerVendor } = useAuth();
  const [f, setF] = useState(empty);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (f.password.length < 6) return toast.error("Password must be at least 6 characters");
    if (f.password !== f.confirm) return toast.error("Passwords don't match");
    const res = registerVendor({
      ownerName: f.ownerName, shopName: f.shopName, category: f.category, address: f.address,
      phone: f.phone, email: f.email, password: f.password, description: f.description,
      image: f.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    });
    if (!res.ok) return toast.error(res.error);
    toast.success("Shop registered — please sign in");
    nav({ to: "/vendor-login" });
  };

  return (
    <AuthLayout
      title="Open your shop"
      subtitle="Reach thousands of customers on Marqo"
      footer={<>Already a vendor? <Link to="/vendor-login" className="text-primary font-medium">Sign in</Link></>}
    >
      <form onSubmit={submit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div><Label className="mb-1.5">Owner name</Label><Input required value={f.ownerName} onChange={set("ownerName")} /></div>
          <div><Label className="mb-1.5">Shop name</Label><Input required value={f.shopName} onChange={set("shopName")} /></div>
          <div><Label className="mb-1.5">Category</Label><Input required value={f.category} onChange={set("category")} /></div>
          <div><Label className="mb-1.5">Phone</Label><Input required value={f.phone} onChange={set("phone")} /></div>
        </div>
        <div><Label className="mb-1.5">Shop address</Label><Input required value={f.address} onChange={set("address")} /></div>
        <div><Label className="mb-1.5">Email</Label><Input type="email" required value={f.email} onChange={set("email")} /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label className="mb-1.5">Password</Label><Input type="password" required value={f.password} onChange={set("password")} /></div>
          <div><Label className="mb-1.5">Confirm</Label><Input type="password" required value={f.confirm} onChange={set("confirm")} /></div>
        </div>
        <div><Label className="mb-1.5">Shop image URL</Label><Input value={f.image} onChange={set("image")} placeholder="https://…" /></div>
        <div><Label className="mb-1.5">Shop description</Label><Textarea rows={3} required value={f.description} onChange={set("description")} /></div>
        <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Create shop</Button>
      </form>
    </AuthLayout>
  );
}