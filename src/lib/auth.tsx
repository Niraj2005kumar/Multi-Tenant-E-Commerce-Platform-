import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dummyCustomers, type Customer } from "@/data/customers";
import { vendors as dummyVendors, type Vendor } from "@/data/vendors";

type SessionUser =
  | ({ role: "customer" } & Omit<Customer, "password">)
  | ({ role: "vendor" } & Omit<Vendor, "password">);

const SESSION_KEY = "marqo_session";
const CUSTOMERS_KEY = "marqo_customers";
const VENDORS_KEY = "marqo_vendors";

function readJSON<T>(k: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(localStorage.getItem(k) || "null") ?? fallback; } catch { return fallback; }
}
function writeJSON(k: string, v: unknown) {
  if (typeof window !== "undefined") localStorage.setItem(k, JSON.stringify(v));
}

function allCustomers(): Customer[] {
  return [...readJSON<Customer[]>(CUSTOMERS_KEY, []), ...dummyCustomers];
}
function allVendors(): Vendor[] {
  return [...readJSON<Vendor[]>(VENDORS_KEY, []), ...dummyVendors];
}

type Ctx = {
  user: SessionUser | null;
  ready: boolean;
  loginCustomer: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  loginVendor: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  registerCustomer: (data: Omit<Customer, "id" | "role" | "status">) => { ok: true } | { ok: false; error: string };
  registerVendor: (data: Omit<Vendor, "id" | "status" | "rating">) => { ok: true; vendor: Vendor } | { ok: false; error: string };
  logout: () => void;
};

const AuthCtx = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUser(readJSON<SessionUser | null>(SESSION_KEY, null));
    setReady(true);
  }, []);

  const persist = (u: SessionUser | null) => {
    setUser(u);
    if (u) writeJSON(SESSION_KEY, u);
    else if (typeof window !== "undefined") localStorage.removeItem(SESSION_KEY);
  };

  const loginCustomer: Ctx["loginCustomer"] = (email, password) => {
    const c = allCustomers().find((x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password);
    if (!c) return { ok: false, error: "Invalid email or password" };
    const { password: _p, role: _r, ...rest } = c;
    persist({ role: "customer", ...rest });
    return { ok: true };
  };

  const loginVendor: Ctx["loginVendor"] = (email, password) => {
    const v = allVendors().find((x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password);
    if (!v) return { ok: false, error: "Invalid email or password" };
    const { password: _p, ...rest } = v;
    persist({ role: "vendor", ...rest });
    return { ok: true };
  };

  const registerCustomer: Ctx["registerCustomer"] = (data) => {
    const list = readJSON<Customer[]>(CUSTOMERS_KEY, []);
    if (allCustomers().some((c) => c.email.toLowerCase() === data.email.toLowerCase()))
      return { ok: false, error: "Email already registered" };
    const next: Customer = { id: `c_${Date.now()}`, role: "customer", status: "active", ...data };
    writeJSON(CUSTOMERS_KEY, [next, ...list]);
    return { ok: true };
  };

  const registerVendor: Ctx["registerVendor"] = (data) => {
    const list = readJSON<Vendor[]>(VENDORS_KEY, []);
    if (allVendors().some((v) => v.email.toLowerCase() === data.email.toLowerCase()))
      return { ok: false, error: "Email already registered" };
    const next: Vendor = { id: `v_${Date.now()}`, status: "active", rating: 5, ...data };
    writeJSON(VENDORS_KEY, [next, ...list]);
    return { ok: true, vendor: next };
  };

  const logout = () => persist(null);

  return (
    <AuthCtx.Provider value={{ user, ready, loginCustomer, loginVendor, registerCustomer, registerVendor, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const c = useContext(AuthCtx);
  if (!c) throw new Error("AuthProvider missing");
  return c;
}