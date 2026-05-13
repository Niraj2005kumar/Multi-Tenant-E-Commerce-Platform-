import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingCart, Heart, Search, Menu, X, Moon, Sun, Sparkles, LogOut } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Navbar() {
  const { cart, wishlist, theme, toggleTheme } = useStore();
  const { user, logout } = useAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const links = user?.role === "vendor"
    ? [
        { to: "/vendor", label: "Dashboard" },
        { to: "/vendor/products", label: "Products" },
        { to: "/vendor/orders", label: "Orders" },
      ]
    : user?.role === "customer"
    ? [
        { to: "/", label: "Home" },
        { to: "/shop", label: "Shops" },
        { to: "/orders", label: "Orders" },
        { to: "/profile", label: "Profile" },
      ]
    : [];

  const doLogout = () => { logout(); toast.success("Signed out"); };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="text-gradient">MultiShop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-4">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  active
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          {user?.role === "customer" && (
            <Link to="/shop" className="hidden sm:flex">
              <Button variant="ghost" size="icon">
                <Search className="size-4" />
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
          {user?.role === "customer" && (
            <>
              <Link to="/wishlist" className="relative">
                <Button variant="ghost" size="icon">
                  <Heart className="size-4" />
                </Button>
                {wishlist.length > 0 && <Badge n={wishlist.length} />}
              </Link>
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="size-4" />
                </Button>
                {cart.length > 0 && <Badge n={cart.reduce((a, i) => a + i.qty, 0)} />}
              </Link>
            </>
          )}
          {user ? (
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex gap-2"
              onClick={doLogout}
            >
              <LogOut className="size-4" /> Logout
            </Button>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="ghost" size="sm">
                  Register
                </Button>
              </Link>
              <Link to="/vendor-login">
                <Button variant="outline" size="sm">
                  Vendor login
                </Button>
              </Link>
              <Link to="/vendor-register">
                <Button size="sm" className="bg-gradient-primary shadow-elegant">
                  Register shop
                </Button>
              </Link>
            </div>
          )}
          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                >
                  {l.label}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    doLogout();
                    setOpen(false);
                  }}
                  className="text-left px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                  >
                    Register
                  </Link>
                  <Link
                    to="/vendor-login"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                  >
                    Vendor login
                  </Link>
                  <Link
                    to="/vendor-register"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                  >
                    Register shop
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Badge({ n }: { n: number }) {
  return (
    <span className="absolute -top-1 -right-1 size-5 rounded-full bg-gradient-primary text-primary-foreground text-[10px] font-semibold grid place-items-center shadow-elegant">
      {n}
    </span>
  );
}
