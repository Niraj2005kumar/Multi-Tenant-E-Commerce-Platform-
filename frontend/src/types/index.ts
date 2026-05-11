export type Role = 'guest' | 'customer' | 'vendor' | 'admin';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  status: 'Active' | 'Draft' | 'Sold out';
  image: string;
  vendor: string;
  inventory: number;
  description: string;
}

export interface Order {
  id: string;
  customer: string;
  total: string;
  status: 'Processing' | 'Delivered' | 'Pending' | 'Cancelled';
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Vendor {
  id: string;
  name: string;
  company: string;
  status: 'Active' | 'Pending' | 'Suspended';
}
