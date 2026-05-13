import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Users, Store, ShoppingBag } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { AnalyticsCard } from "@/components/admin/AnalyticsCard";
import { SalesChart } from "@/components/vendor/SalesChart";
import { UserTable } from "@/components/admin/UserTable";

export const Route = createFileRoute("/admin/")({ head: () => ({ meta: [{ title: "Admin — Marqo" }] }), component: AdminDash });

function AdminDash() {
  return (
    <>
      <PageHeader title="Platform overview" subtitle="High-level marketplace metrics" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AnalyticsCard label="GMV" value="$248K" delta="+18.2%" icon={DollarSign} index={0} />
        <AnalyticsCard label="Users" value="12.4K" delta="+342 this week" icon={Users} index={1} />
        <AnalyticsCard label="Vendors" value="1,284" delta="+12 pending" icon={Store} index={2} />
        <AnalyticsCard label="Orders" value="6,820" delta="+9.4%" icon={ShoppingBag} index={3} />
      </div>
      <div className="mb-8"><SalesChart /></div>
      <PageHeader title="Recent users" />
      <UserTable />
    </>
  );
}
