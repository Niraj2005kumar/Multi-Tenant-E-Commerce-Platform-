import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { OrdersTable } from "@/components/vendor/OrdersTable";

export const Route = createFileRoute("/orders")({ head: () => ({ meta: [{ title: "Orders — Marqo" }] }), component: Orders });
function Orders() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <PageHeader title="Order history" subtitle="Track your purchases" />
        <OrdersTable />
      </div>
    </PublicLayout>
  );
}
