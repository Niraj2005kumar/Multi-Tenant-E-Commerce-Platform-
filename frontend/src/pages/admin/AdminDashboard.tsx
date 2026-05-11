import { motion } from 'framer-motion';
import UserTable from '../../components/admin/UserTable';
import VendorTable from '../../components/admin/VendorTable';
import AnalyticsCard from '../../components/admin/AnalyticsCard';
import { users, vendors, summaryCards } from '../../data/mockData';

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Admin dashboard</h1>
        <p className="mt-2 text-slate-400">System overview and platform management</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <motion.div key={card.title} whileHover={{ y: -4 }} className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20" {...({} as any)}>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{card.title}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-sm text-slate-400">{card.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <AnalyticsCard title="Platform uptime" value="99.9%" hint="Last 30 days" />
        <AnalyticsCard title="Avg response time" value="124ms" hint="API servers" />
        <AnalyticsCard title="Active sessions" value="2.4K" hint="Real-time users" />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">Recent users</h2>
          <UserTable users={users} />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">Active vendors</h2>
          <VendorTable vendors={vendors} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
