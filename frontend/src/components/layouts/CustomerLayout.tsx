import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

const customerNav = [
  { path: '/customer/cart', label: 'Cart' },
  { path: '/customer/wishlist', label: 'Wishlist' },
  { path: '/customer/checkout', label: 'Checkout' },
  { path: '/customer/orders', label: 'Orders' },
  { path: '/customer/profile', label: 'Profile' },
];

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="lg:flex lg:min-h-screen">
        <Sidebar title="Customer" navItems={customerNav} />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CustomerLayout;
