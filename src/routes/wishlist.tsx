import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { WishlistItem } from "@/components/customer/WishlistItem";
import { EmptyState } from "@/components/common/Loader";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({ head: () => ({ meta: [{ title: "Wishlist — Marqo" }] }), component: Wishlist });

function Wishlist() {
  const { wishlist } = useStore();
  return (
    <PublicLayout>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <PageHeader title="Wishlist" subtitle={`${wishlist.length} saved`} />
        {wishlist.length === 0 ? (
          <EmptyState icon={<Heart className="size-7 text-primary" />} title="Your wishlist is empty" hint="Tap the heart on products you love to save them here." />
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">{wishlist.map((p) => <WishlistItem key={p.id} product={p} />)}</div>
        )}
      </div>
    </PublicLayout>
  );
}
