import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

const vendorNav = [
  { path: '/vendor', label: 'Dashboard' },
  { path: '/vendor/products', label: 'Products' },
  { path: '/vendor/add-product', label: 'Add Product' },
  { path: '/vendor/orders', label: 'Orders' },
  { path: '/vendor/analytics', label: 'Analytics' },
];

function VendorLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="lg:flex lg:min-h-screen">
        <Sidebar title="Vendor" navItems={vendorNav} />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default VendorLayout;
