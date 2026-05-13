import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Marqo" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-display font-bold tracking-tight">Get in touch</h1>
          <p className="mt-4 text-muted-foreground">We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          <div className="mt-8 space-y-4">
            {[[Mail, "hello@marqo.shop"], [Phone, "+1 (555) 010-2024"], [MapPin, "221B Baker Street, London"]].map(([I, t]: any) => (
              <div key={t} className="flex items-center gap-3"><div className="size-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground"><I className="size-4" /></div><span>{t}</span></div>
            ))}
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent!"); }} className="rounded-3xl border border-border bg-card p-8 shadow-soft space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label className="mb-1.5">Name</Label><Input placeholder="Ava Chen" /></div>
            <div><Label className="mb-1.5">Email</Label><Input type="email" placeholder="ava@shop.dev" /></div>
          </div>
          <div><Label className="mb-1.5">Subject</Label><Input placeholder="How can we help?" /></div>
          <div><Label className="mb-1.5">Message</Label><Textarea rows={5} placeholder="Tell us more..." /></div>
          <Button type="submit" className="w-full bg-gradient-primary shadow-elegant">Send message</Button>
        </form>
      </section>
    </PublicLayout>
  );
}
