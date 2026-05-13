import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/common/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({ head: () => ({ meta: [{ title: "Reset password — Marqo" }] }), component: Forgot });
function Forgot() {
  return (
    <AuthLayout title="Forgot password?" subtitle="We'll send you a reset link" footer={<><Link to="/login" className="text-primary">Back to sign in</Link></>}>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Reset link sent"); }} className="space-y-4">
        <div><Label className="mb-1.5">Email</Label><Input type="email" placeholder="you@shop.dev" /></div>
        <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Send reset link</Button>
      </form>
    </AuthLayout>
  );
}
