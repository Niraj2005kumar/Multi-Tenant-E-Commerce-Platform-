export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  status: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface StatCard {
  title: string;
  value: string;
  delta: string;
}

export interface Order {
  id: string;
  customer: string;
  total: string;
  status: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  activity: string;
}

export interface VendorProduct {
  name: string;
  price: string;
  status: string;
}

export interface Recommendation {
  title: string;
  description: string;
}

export interface SalesSeries {
  label: string;
  value: number;
}

export const categories: Category[] = [
  { id: 'design', title: 'Design tools', description: 'UI kits, icons, templates, and product assets.' },
  { id: 'growth', title: 'Growth tools', description: 'Analytics, funnels, conversion boosters.' },
  { id: 'payments', title: 'Payments', description: 'Billing, subscriptions, and checkout flows.' },
];

export const products: Product[] = [
  {
    id: 'pro-boost',
    name: 'Pro Boost Suite',
    description: 'Premium marketplace growth tools with embedded analytics.',
    price: 79,
    category: 'growth',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    status: 'Trending',
  },
  {
    id: 'brand-kit',
    name: 'Brand Kit Pro',
    description: 'A beautiful design system for modern SaaS brands.',
    price: 49,
    category: 'design',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    status: 'Popular',
  },
  {
    id: 'payment-hub',
    name: 'Payment Hub',
    description: 'Fast checkout with recurring subscriptions and invoices.',
    price: 99,
    category: 'payments',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    status: 'New',
  },
];

export const stats: StatCard[] = [
  { title: 'Monthly revenue', value: '$42.3K', delta: '+18%' },
  { title: 'Active vendors', value: '128', delta: '+10%' },
  { title: 'Orders this week', value: '1,254', delta: '+14%' },
];

export const orders: Order[] = [
  { id: 'ORD-1251', customer: 'Eva Chen', total: '$420', status: 'Completed' },
  { id: 'ORD-1247', customer: 'Mark Lee', total: '$210', status: 'Processing' },
  { id: 'ORD-1239', customer: 'Lina Tran', total: '$89', status: 'Pending' },
];

export const users: User[] = [
  { id: 'U-001', name: 'Luna Park', role: 'Admin', activity: '9 hours ago' },
  { id: 'U-002', name: 'Camila Reed', role: 'Vendor', activity: '2 days ago' },
  { id: 'U-003', name: 'Noah Kent', role: 'Customer', activity: '5 hours ago' },
];

export const vendorProducts: VendorProduct[] = [
  { name: 'Marketplace Template', price: '$118', status: 'Live' },
  { name: 'Checkout Widget', price: '$69', status: 'Draft' },
  { name: 'Analytics Board', price: '$149', status: 'Live' },
];

export const recommendations: Recommendation[] = [
  { title: 'Launch newsletter', description: 'Build a smart onboarding sequence for new customers.' },
  { title: 'Improve conversions', description: 'A/B test pricing and upgrade flows for sellers.' },
];

export const salesSeries: SalesSeries[] = [
  { label: 'Week 1', value: 180 },
  { label: 'Week 2', value: 232 },
  { label: 'Week 3', value: 198 },
  { label: 'Week 4', value: 275 },
];
