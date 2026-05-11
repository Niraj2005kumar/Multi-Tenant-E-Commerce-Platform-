import { motion } from 'framer-motion';
import SalesChart from '../../components/vendor/SalesChart';
import InventoryCard from '../../components/vendor/InventoryCard';
import { analyticsStats } from '../../data/mockData';

function VendorAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Analytics</h1>
        <p className="mt-2 text-slate-400">Track your store performance metrics</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {analyticsStats.map((stat) => (
          <motion.div key={stat.label} whileHover={{ y: -4 }} className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <SalesChart />

      <div className="grid gap-6 sm:grid-cols-3">
        <InventoryCard title="Top product" value="Pearl Kit" detail="486 sales this month" />
        <InventoryCard title="Avg order value" value="$89.50" detail="↑ 12% vs last month" />
        <InventoryCard title="Customer satisfaction" value="4.8/5" detail="142 reviews" />
      </div>
    </div>
  );
}

export default VendorAnalyticsPage;
