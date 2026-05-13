import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { UserTable } from "@/components/admin/UserTable";
export const Route = createFileRoute("/admin/users")({ head: () => ({ meta: [{ title: "Users — Admin" }] }), component: () => (<><PageHeader title="Users" subtitle="Manage all platform accounts" /><UserTable /></>) });
