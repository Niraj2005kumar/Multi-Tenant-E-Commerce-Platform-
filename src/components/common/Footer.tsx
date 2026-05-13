import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="text-gradient">MultiShop</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">A premium multi-vendor marketplace built for modern commerce.</p>
        </div>
        {[
          { title: "Shop", items: [["All Products", "/shop"], ["Cart", "/cart"], ["Wishlist", "/wishlist"]] },
          { title: "Company", items: [["About", "/about"], ["Contact", "/contact"], ["Vendor Portal", "/vendor"]] },
          { title: "Account", items: [["Login", "/login"], ["Register", "/register"], ["Orders", "/orders"]] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold mb-3 text-sm">{c.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.items.map(([l, h]) => (
                <li key={h}><Link to={h} className="hover:text-foreground transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2026 MultiShop. All rights reserved.</p>
          <div className="flex gap-3">
            <Twitter className="size-4 hover:text-foreground cursor-pointer" />
            <Instagram className="size-4 hover:text-foreground cursor-pointer" />
            <Github className="size-4 hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
