import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import StatCard from '../../components/common/StatCard';
import OrderCard from '../../components/cards/OrderCard';
import RecommendationCard from '../../components/cards/RecommendationCard';
import { fetchVendorProducts, fetchOrders, fetchStats, fetchRecommendations, fetchSalesSeries } from '../../services/mockService';

function VendorDashboard() {
  const stats = fetchStats();
  const orders = fetchOrders();
  const products = fetchVendorProducts();
  const recommendations = fetchRecommendations();
  const salesSeries = fetchSalesSeries();

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} delta={item.delta} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Sales overview</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Revenue by week</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesSeries}>
                <CartesianGrid stroke="#111827" strokeDasharray="3 3" />
                <XAxis dataKey="label" tick={{ fill: '#94a3b8' }} />
                <YAxis tick={{ fill: '#94a3b8' }} />
                <Tooltip wrapperStyle={{ backgroundColor: '#0f172a', borderRadius: 16, border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#818cf8" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Live product set</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Manage inventory</h2>
          <div className="mt-6 space-y-4">
            {products.map((product) => (
              <div key={product.name} className="rounded-3xl bg-slate-900/80 px-5 py-4 text-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-sm text-slate-400">{product.status}</p>
                  </div>
                  <p className="text-sm text-slate-400">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recent seller orders</p>
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <OrderCard key={order.id} id={order.id} customer={order.customer} total={order.total} status={order.status} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((item) => (
            <RecommendationCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
