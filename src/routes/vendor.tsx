import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, Package, PlusCircle, ShoppingBag, BarChart3 } from "lucide-react";
import { DashboardLayout } from "@/components/common/DashboardLayout";

const items = [
  { to: "/vendor", label: "Dashboard", icon: LayoutDashboard },
  { to: "/vendor/products", label: "Products", icon: Package },
  { to: "/vendor/products/new", label: "Add product", icon: PlusCircle },
  { to: "/vendor/orders", label: "Orders", icon: ShoppingBag },
  { to: "/vendor/analytics", label: "Analytics", icon: BarChart3 },
];

export const Route = createFileRoute("/vendor")({
  component: () => (
    <DashboardLayout items={items} title="Vendor portal">
      <Outlet />
    </DashboardLayout>
  ),
});
