export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  vendor: string;
  stock: number;
  description: string;
  badge?: string;
};

const imgs = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
];

const names = [
  "Air Max Runner", "Vintage Leather Bag", "Studio Headphones Pro", "Smart Fit Watch",
  "Polarized Sunglasses", "Mechanical Keyboard", "Cozy Knit Sweater", "Ceramic Coffee Set",
  "Wireless Earbuds", "Minimalist Desk Lamp", "Urban Sneakers", "Travel Backpack",
];
const cats = ["Fashion", "Electronics", "Home", "Accessories", "Beauty", "Sports"];
const vendors = ["NorthGoods Co.", "LumaTech", "Atelier 21", "PinePeak", "Studio Mono"];
const badges = ["New", "Hot", "-20%", undefined, undefined];

export const products: Product[] = Array.from({ length: 24 }).map((_, i) => ({
  id: `p${i + 1}`,
  name: names[i % names.length] + (i > 11 ? " v2" : ""),
  price: Math.round(29 + Math.random() * 270),
  oldPrice: Math.random() > 0.5 ? Math.round(80 + Math.random() * 300) : undefined,
  rating: +(3.8 + Math.random() * 1.2).toFixed(1),
  reviews: Math.floor(20 + Math.random() * 800),
  image: imgs[i % imgs.length],
  category: cats[i % cats.length],
  vendor: vendors[i % vendors.length],
  stock: Math.floor(Math.random() * 60),
  description:
    "Crafted with premium materials and a refined silhouette, this piece blends everyday utility with timeless design language.",
  badge: badges[i % badges.length],
}));

export const categories = cats;
export const vendorsList = vendors;

export const orders = Array.from({ length: 8 }).map((_, i) => ({
  id: `#ORD-${10240 + i}`,
  date: `2025-05-${String(2 + i).padStart(2, "0")}`,
  items: 1 + (i % 4),
  total: 49 + i * 37,
  status: ["Delivered", "Shipped", "Processing", "Pending"][i % 4],
  customer: ["Ava Chen", "Liam Park", "Noah Reed", "Mia Cohen", "Eli Rao"][i % 5],
}));

export const users = Array.from({ length: 10 }).map((_, i) => ({
  id: `u${i + 1}`,
  name: ["Ava Chen", "Liam Park", "Noah Reed", "Mia Cohen", "Eli Rao", "Zara K.", "Theo Vos", "Iris L.", "Jude P.", "Mae T."][i],
  email: `user${i + 1}@shop.dev`,
  role: i % 4 === 0 ? "Vendor" : i === 1 ? "Admin" : "Customer",
  joined: `2024-1${i % 3}-0${(i % 9) + 1}`,
  status: i % 5 === 0 ? "Suspended" : "Active",
}));

export const salesData = [
  { name: "Mon", sales: 1200, orders: 24 },
  { name: "Tue", sales: 1900, orders: 31 },
  { name: "Wed", sales: 1500, orders: 27 },
  { name: "Thu", sales: 2400, orders: 42 },
  { name: "Fri", sales: 2100, orders: 38 },
  { name: "Sat", sales: 3200, orders: 56 },
  { name: "Sun", sales: 2800, orders: 47 },
];

export const categoryData = [
  { name: "Fashion", value: 4200 },
  { name: "Electronics", value: 6100 },
  { name: "Home", value: 2800 },
  { name: "Beauty", value: 1900 },
  { name: "Sports", value: 2400 },
];
