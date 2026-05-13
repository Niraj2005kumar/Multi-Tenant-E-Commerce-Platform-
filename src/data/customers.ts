export type Customer = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: "customer";
  status: "active";
};

export const dummyCustomers: Customer[] = [
  {
    id: "c1",
    fullName: "Ava Chen",
    email: "ava@shop.dev",
    phone: "+1 555 0200",
    password: "customer123",
    role: "customer",
    status: "active",
  },
  {
    id: "c2",
    fullName: "Liam Park",
    email: "liam@shop.dev",
    phone: "+1 555 0201",
    password: "customer123",
    role: "customer",
    status: "active",
  },
];