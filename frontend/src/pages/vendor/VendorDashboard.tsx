import { motion } from 'framer-motion';
import SalesChart from '../../components/vendor/SalesChart';
import InventoryCard from '../../components/vendor/InventoryCard';
import OrdersTable from '../../components/vendor/OrdersTable';
import { orders } from '../../data/mockData';

const dashboardCards = [
  { title: 'Total sales', value: '$12.5K', detail: '+18% this month' },
  { title: 'Active products', value: '48', detail: '2 need update' },
  { title: 'Pending orders', value: '12', detail: '3 ready to ship' },
  { title: 'Conversion', value: '3.8%', detail: '+0.5% vs average' },
];

function VendorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Vendor dashboard</h1>
        <p className="mt-2 text-slate-400">Monitor your store performance and sales</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((card) => (
          <motion.div key={card.title} whileHover={{ y: -4 }} className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{card.title}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-2 text-sm text-slate-400">{card.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <SalesChart />
        <div className="space-y-6">
          {dashboardCards.slice(0, 2).map((card) => (
            <InventoryCard key={card.title} title={card.title} value={card.value} detail={card.detail} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold text-white">Recent orders</h2>
        <OrdersTable orders={orders.slice(0, 3)} />
      </div>
    </div>
  );
}

export default VendorDashboard;
