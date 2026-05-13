import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — MultiShop" }] }),
  component: Login,
});
function Login() {
  const nav = useNavigate();
  const { loginCustomer } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = loginCustomer(email, password);
    if (!res.ok) return toast.error(res.error);
    toast.success("Signed in");
    nav({ to: "/" });
  };
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue shopping"
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-medium">
            Create one
          </Link>{" "}
          ·{" "}
          <Link to="/vendor-login" className="text-primary font-medium">
            Vendor login
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-4">
        <div>
          <Label className="mb-1.5">Email</Label>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ava@shop.dev"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1.5">
            <Label>Password</Label>
            <Link to="/forgot-password" className="text-xs text-primary">
              Forgot?
            </Link>
          </div>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="customer123"
          />
        </div>
        <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Sign in</Button>
        <p className="text-xs text-muted-foreground text-center">
          Demo: ava@shop.dev / customer123
        </p>
      </form>
    </AuthLayout>
  );
}
