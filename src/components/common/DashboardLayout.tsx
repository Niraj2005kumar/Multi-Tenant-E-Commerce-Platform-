import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar, type NavItem } from "./Sidebar";
import { RequireAuth } from "./RequireAuth";

export function DashboardLayout({ items, title, children, role = "vendor" }: { items: NavItem[]; title: string; children: ReactNode; role?: "vendor" | "customer" }) {
  return (
    <RequireAuth role={role}>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar items={items} title={title} />
          <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 max-w-7xl w-full mx-auto">{children}</main>
        </div>
      </div>
    </RequireAuth>
  );
}
