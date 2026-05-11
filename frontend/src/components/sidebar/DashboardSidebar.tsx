import { Link } from 'react-router-dom';

interface SidebarItem {
  label: string;
  href: string;
}

const navMap: Record<string, SidebarItem[]> = {
  admin: [
    { label: 'Overview', href: '/admin' },
    { label: 'Users', href: '/admin' },
    { label: 'Orders', href: '/admin' },
    { label: 'Reports', href: '/admin' },
  ],
  vendor: [
    { label: 'Dashboard', href: '/vendor' },
    { label: 'Products', href: '/vendor' },
    { label: 'Orders', href: '/vendor' },
    { label: 'Analytics', href: '/vendor' },
  ],
  customer: [
    { label: 'Home', href: '/customer' },
    { label: 'Wishlist', href: '/customer' },
    { label: 'Orders', href: '/customer' },
    { label: 'Profile', href: '/customer' },
  ],
};

interface Props {
  role: 'admin' | 'vendor' | 'customer';
}

function DashboardSidebar({ role }: Props) {
  const items = navMap[role];

  return (
    <aside className="glass-card h-full border-slate-800/80 p-6 shadow-2xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-400">Dashboard</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">{role}</h2>
      </div>
      <nav className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block rounded-3xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900/80 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default DashboardSidebar;
