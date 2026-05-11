import type { Product, Order, User, Vendor } from '../types';

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Luxe Seller Dashboard',
    category: 'Analytics',
    price: 129.0,
    rating: 4.9,
    reviews: 142,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80',
    vendor: 'Nexa Market',
    inventory: 18,
    description: 'A premium dashboard theme designed for modern vendors and customer analytics.',
  },
  {
    id: 'prod-2',
    name: 'Pearl Commerce Kit',
    category: 'UI Kit',
    price: 89.0,
    rating: 4.7,
    reviews: 84,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    vendor: 'Pulse Studio',
    inventory: 31,
    description: 'A clean SaaS commerce kit with modern product listing and checkout experiences.',
  },
  {
    id: 'prod-3',
    name: 'Streamline Inventory',
    category: 'Operations',
    price: 64.0,
    rating: 4.8,
    reviews: 62,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    vendor: 'Flow Labs',
    inventory: 12,
    description: 'A product management suite built for professional vendor collaboration and order flow.',
  },
  {
    id: 'prod-4',
    name: 'ShopPulse Experience',
    category: 'Marketing',
    price: 49.0,
    rating: 4.5,
    reviews: 104,
    status: 'Draft',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=900&q=80',
    vendor: 'Nexa Market',
    inventory: 0,
    description: 'Marketing and customer retention templates for SaaS eCommerce teams.',
  },
];

export const orders: Order[] = [
  { id: 'ord-101', customer: 'Alicia Keys', total: '$420.00', status: 'Delivered', date: '2026-05-01' },
  { id: 'ord-102', customer: 'Jordan Lee', total: '$128.00', status: 'Processing', date: '2026-05-03' },
  { id: 'ord-103', customer: 'Mia Santos', total: '$259.00', status: 'Pending', date: '2026-05-05' },
  { id: 'ord-104', customer: 'Evan Cole', total: '$76.00', status: 'Cancelled', date: '2026-05-06' },
];

export const users: User[] = [
  { id: 'user-1', name: 'Olivia James', email: 'olivia@saasmarket.com', role: 'customer' },
  { id: 'user-2', name: 'Marcus Reed', email: 'marcus@saasmarket.com', role: 'vendor' },
  { id: 'user-3', name: 'Sophia Hart', email: 'sophia@saasmarket.com', role: 'admin' },
];

export const vendors: Vendor[] = [
  { id: 'vendor-1', name: 'Nexa Market', company: 'Nexa Market Inc.', status: 'Active' },
  { id: 'vendor-2', name: 'Pulse Studio', company: 'Pulse Studio Ltd.', status: 'Pending' },
  { id: 'vendor-3', name: 'Flow Labs', company: 'Flow Labs LLC', status: 'Suspended' },
];

export const summaryCards = [
  { title: 'Gross Revenue', value: '$42.8K', detail: '+14% vs last month' },
  { title: 'Orders', value: '1.2K', detail: '+8% conversion' },
  { title: 'Active Vendors', value: '68', detail: 'Stable growth' },
  { title: 'Customer Retention', value: '88%', detail: 'Premium experience' },
];

export const analyticsStats = [
  { label: 'Sales', value: '$84.4K' },
  { label: 'Visits', value: '52.1K' },
  { label: 'Conversion', value: '3.2%' },
  { label: 'Refunds', value: '2.1%' },
];
