import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/register")({ head: () => ({ meta: [{ title: "Create account — Marqo" }] }), component: Register });
function Register() {
  const nav = useNavigate();
  const { registerCustomer } = useAuth();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "", confirm: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) return toast.error("Password must be at least 6 characters");
    if (form.password !== form.confirm) return toast.error("Passwords don't match");
    const res = registerCustomer({ fullName: form.fullName, email: form.email, phone: form.phone, password: form.password });
    if (!res.ok) return toast.error(res.error);
    toast.success("Account created — please sign in");
    nav({ to: "/login" });
  };
  return (
    <AuthLayout title="Create your account" subtitle="Join Marqo as a customer" footer={<>Already have an account? <Link to="/login" className="text-primary font-medium">Sign in</Link> · Want to sell? <Link to="/vendor-register" className="text-primary font-medium">Open a shop</Link></>}>
      <form onSubmit={submit} className="space-y-4">
        <div><Label className="mb-1.5">Full name</Label><Input required value={form.fullName} onChange={set("fullName")} placeholder="Ava Chen" /></div>
        <div><Label className="mb-1.5">Email</Label><Input type="email" required value={form.email} onChange={set("email")} placeholder="you@shop.dev" /></div>
        <div><Label className="mb-1.5">Phone</Label><Input required value={form.phone} onChange={set("phone")} placeholder="+1 555 0000" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label className="mb-1.5">Password</Label><Input type="password" required value={form.password} onChange={set("password")} placeholder="••••••••" /></div>
          <div><Label className="mb-1.5">Confirm</Label><Input type="password" required value={form.confirm} onChange={set("confirm")} placeholder="••••••••" /></div>
        </div>
        <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Create account</Button>
      </form>
    </AuthLayout>
  );
}
