import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { RequireAuth } from "./RequireAuth";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <RequireAuth role="customer">
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </RequireAuth>
  );
}
