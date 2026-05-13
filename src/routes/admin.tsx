import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, Users, Store, FileBarChart } from "lucide-react";
import { DashboardLayout } from "@/components/common/DashboardLayout";

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/vendors", label: "Vendors", icon: Store },
  { to: "/admin/reports", label: "Reports", icon: FileBarChart },
];

export const Route = createFileRoute("/admin")({
  component: () => <DashboardLayout items={items} title="Admin console"><Outlet /></DashboardLayout>,
});
