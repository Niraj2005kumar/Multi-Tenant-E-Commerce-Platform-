import { Navigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useAuth } from "@/lib/auth";

export function RequireAuth({ role, children }: { role: "customer" | "vendor"; children: ReactNode }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  if (!user) return <Navigate to={role === "vendor" ? "/vendor-login" : "/login"} />;
  if (user.role !== role) {
    return <Navigate to={role === "vendor" ? "/vendor-login" : "/login"} />;
  }
  return <>{children}</>;
}