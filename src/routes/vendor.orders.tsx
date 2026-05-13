import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { OrdersTable } from "@/components/vendor/OrdersTable";
export const Route = createFileRoute("/vendor/orders")({ head: () => ({ meta: [{ title: "Vendor orders — Marqo" }] }), component: () => (<><PageHeader title="Orders" subtitle="Fulfill incoming orders" /><OrdersTable /></>) });
