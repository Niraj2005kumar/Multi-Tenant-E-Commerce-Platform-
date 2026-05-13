import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/common/PublicLayout";
import { PageHeader } from "@/components/common/PageHeader";
import { Plus, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/address")({ head: () => ({ meta: [{ title: "Addresses — Marqo" }] }), component: Address });

function Address() {
  const list = [
    { icon: Home, label: "Home", line: "221B Baker Street, London NW1 6XE", default: true },
    { icon: Briefcase, label: "Work", line: "1 St Albans Pl, London N1 0NX" },
  ];
  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <PageHeader title="Addresses" subtitle="Manage your shipping addresses" action={<Button className="bg-gradient-primary"><Plus className="size-4 mr-2" /> Add address</Button>} />
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((a) => (
            <div key={a.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3"><div className="size-10 rounded-xl bg-accent grid place-items-center"><a.icon className="size-4" /></div><p className="font-semibold">{a.label}</p>{a.default && <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">Default</span>}</div>
              <p className="mt-3 text-sm text-muted-foreground">{a.line}</p>
              <div className="mt-4 flex gap-2"><Button size="sm" variant="outline">Edit</Button><Button size="sm" variant="ghost" className="text-destructive">Delete</Button></div>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
