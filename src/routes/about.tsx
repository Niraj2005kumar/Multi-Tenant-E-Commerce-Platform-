import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Marqo" }, { name: "description", content: "Marqo connects independent vendors with customers worldwide." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-6xl font-display font-bold tracking-tight">
          A marketplace for <span className="text-gradient">independent makers</span>
        </motion.h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">Marqo was built with a simple idea: give independent vendors world-class tools and connect them to customers who care about craft.</p>
      </section>
      <section className="mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-6">
        {[["1.2K+", "Vendors"], ["50K+", "Customers"], ["190", "Countries"]].map(([v, l]) => (
          <div key={l} className="rounded-2xl bg-gradient-soft p-8 text-center">
            <p className="text-4xl font-display font-bold text-gradient">{v}</p><p className="text-sm text-muted-foreground mt-1">{l}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-4xl px-6 py-20 prose prose-neutral dark:prose-invert">
        <h2 className="text-3xl font-display font-bold">Our mission</h2>
        <p className="text-muted-foreground mt-3 leading-relaxed">We believe great products come from people who deeply care. We exist to amplify those voices — through technology that's simple, beautiful, and reliable.</p>
      </section>
    </PublicLayout>
  );
}
