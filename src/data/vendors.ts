import { products as baseProducts } from "./mock";

export type Vendor = {
  id: string;
  ownerName: string;
  shopName: string;
  category: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  description: string;
  image: string;
  status: "active" | "pending" | "suspended";
  rating: number;
};

const seed: Omit<Vendor, "id" | "status" | "password">[] = [
  {
    ownerName: "Sara North",
    shopName: "NorthGoods Co.",
    category: "Fashion",
    address: "12 Pine St, Portland",
    phone: "+1 555 0101",
    email: "north@shop.dev",
    description: "Heritage outerwear and rugged everyday essentials, made to last.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    rating: 4.9,
  },
  {
    ownerName: "Luma Tan",
    shopName: "LumaTech",
    category: "Electronics",
    address: "501 Market Ave, Austin",
    phone: "+1 555 0102",
    email: "luma@shop.dev",
    description: "Premium audio, wearables and smart-home gadgets curated for everyday joy.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    rating: 4.8,
  },
  {
    ownerName: "Jonas Atelier",
    shopName: "Atelier 21",
    category: "Home",
    address: "8 Rue Lafayette, Paris",
    phone: "+33 1 4444 5555",
    email: "atelier@shop.dev",
    description: "Hand-thrown ceramics, linen textiles, and quiet objects for the modern home.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
    rating: 4.9,
  },
  {
    ownerName: "Maya Pine",
    shopName: "PinePeak",
    category: "Sports",
    address: "44 Trail Way, Boulder",
    phone: "+1 555 0103",
    email: "pine@shop.dev",
    description: "Outdoor gear engineered for high alpine adventures and city commutes.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800",
    rating: 4.7,
  },
  {
    ownerName: "Theo Mono",
    shopName: "Studio Mono",
    category: "Accessories",
    address: "200 Broome St, NYC",
    phone: "+1 555 0104",
    email: "mono@shop.dev",
    description: "Minimal accessories with a monochrome soul. Designed in NYC.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
    rating: 4.8,
  },
];

export const vendors: Vendor[] = seed.map((v, i) => ({
  id: `v${i + 1}`,
  ...v,
  password: "vendor123",
  status: "active",
}));

export function vendorIdForName(name: string) {
  return vendors.find((v) => v.shopName === name)?.id ?? vendors[0].id;
}

// Quick stat helper used by home page
export function productCountFor(vendorId: string) {
  const name = vendors.find((v) => v.id === vendorId)?.shopName;
  return baseProducts.filter((p) => p.vendor === name).length;
}