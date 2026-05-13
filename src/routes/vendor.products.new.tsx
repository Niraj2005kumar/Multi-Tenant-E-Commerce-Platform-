import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductForm } from "@/components/vendor/ProductForm";

export const Route = createFileRoute("/vendor/products/new")({
  head: () => ({ meta: [{ title: "Add product — Marqo" }] }),
  component: () => (
    <>
      <PageHeader title="Add product" subtitle="Create a new listing for your shop" />
      <ProductForm />
    </>
  ),
});