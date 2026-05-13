import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { VendorTable } from "@/components/admin/VendorTable";
export const Route = createFileRoute("/admin/vendors")({ head: () => ({ meta: [{ title: "Vendors — Admin" }] }), component: () => (<><PageHeader title="Vendors" subtitle="Approve and manage vendor accounts" /><VendorTable /></>) });
