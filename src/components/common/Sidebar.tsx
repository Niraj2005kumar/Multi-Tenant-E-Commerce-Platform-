import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon };

export function Sidebar({ items, title }: { items: NavItem[]; title: string }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar p-4 gap-1 min-h-screen sticky top-16 self-start">
      <p className="text-xs uppercase tracking-wider text-muted-foreground px-3 mb-2">{title}</p>
      {items.map((it) => {
        const active = path === it.to;
        return (
          <Link
            key={it.to}
            to={it.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              active
                ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <it.icon className="size-4" />
            {it.label}
          </Link>
        );
      })}
    </aside>
  );
}
