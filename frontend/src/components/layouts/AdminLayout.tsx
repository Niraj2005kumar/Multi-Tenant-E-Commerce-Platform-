import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

const adminNav = [
  { path: '/admin', label: 'Dashboard' },
  { path: '/admin/users', label: 'Users' },
  { path: '/admin/vendors', label: 'Vendors' },
  { path: '/admin/reports', label: 'Reports' },
];

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="lg:flex lg:min-h-screen">
        <Sidebar title="Admin" navItems={adminNav} />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
