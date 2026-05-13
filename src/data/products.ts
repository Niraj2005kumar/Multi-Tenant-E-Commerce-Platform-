import { products as baseProducts, type Product } from "./mock";
import { vendors, vendorIdForName } from "./vendors";

export type ShopProduct = Product & { vendorId: string };

const STORAGE_KEY = "marqo_vendor_products";

const seeded: ShopProduct[] = baseProducts.map((p) => ({
  ...p,
  vendorId: vendorIdForName(p.vendor),
}));

function readUserProducts(): ShopProduct[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function getAllProducts(): ShopProduct[] {
  return [...readUserProducts(), ...seeded];
}

export function getProductsByVendor(vendorId: string): ShopProduct[] {
  return getAllProducts().filter((p) => p.vendorId === vendorId);
}

export function getProduct(id: string): ShopProduct | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function addProduct(input: Omit<ShopProduct, "id" | "rating" | "reviews">) {
  const all = readUserProducts();
  const next: ShopProduct = {
    id: `up_${Date.now()}`,
    rating: 5,
    reviews: 0,
    ...input,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([next, ...all]));
  return next;
}

export { vendors };