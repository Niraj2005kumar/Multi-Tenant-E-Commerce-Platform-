import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "@/data/mock";

type Role = "guest" | "customer" | "vendor" | "admin";
type CartItem = { product: Product; qty: number };

type Ctx = {
  cart: CartItem[];
  wishlist: Product[];
  role: Role;
  theme: "light" | "dark";
  toggleTheme: () => void;
  setRole: (r: Role) => void;
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWish: (p: Product) => void;
  clearCart: () => void;
};

const StoreCtx = createContext<Ctx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWish] = useState<Product[]>([]);
  const [role, setRole] = useState<Role>("customer");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const addToCart = (p: Product, qty = 1) =>
    setCart((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...c, { product: p, qty }];
    });
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) =>
    setCart((c) => c.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const toggleWish = (p: Product) =>
    setWish((w) => (w.find((x) => x.id === p.id) ? w.filter((x) => x.id !== p.id) : [...w, p]));
  const clearCart = () => setCart([]);

  return (
    <StoreCtx.Provider
      value={{ cart, wishlist, role, theme, toggleTheme, setRole, addToCart, removeFromCart, updateQty, toggleWish, clearCart }}
    >
      {children}
    </StoreCtx.Provider>
  );
}

export const useStore = () => {
  const c = useContext(StoreCtx);
  if (!c) throw new Error("StoreProvider missing");
  return c;
};
