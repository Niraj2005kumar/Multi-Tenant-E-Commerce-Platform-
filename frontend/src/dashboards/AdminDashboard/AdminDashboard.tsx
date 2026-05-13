import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import StatCard from '../../components/common/StatCard';
import Table from '../../components/common/Table';
import { fetchOrders, fetchStats, fetchUsers, fetchSalesSeries } from '../../services/mockService';

function AdminDashboard() {
  const stats = fetchStats();
  const orders = fetchOrders();
  const users = fetchUsers();
  const salesSeries = fetchSalesSeries();

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} delta={item.delta} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Revenue trend</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Monthly performance</h2>
            </div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesSeries}>
                <CartesianGrid stroke="#111827" strokeDasharray="3 3" />
                <XAxis dataKey="label" tick={{ fill: '#94a3b8' }} />
                <YAxis tick={{ fill: '#94a3b8' }} />
                <Tooltip wrapperStyle={{ backgroundColor: '#0f172a', borderRadius: 16, border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#38bdf8" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">New platform members</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Latest users</h2>
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="rounded-3xl bg-slate-900/80 px-5 py-4 text-slate-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-sm text-slate-400">{user.role}</p>
                  </div>
                  <p className="text-sm text-slate-400">{user.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Latest orders</p>
        <Table
          headers={['Order', 'Customer', 'Total', 'Status']}
          rows={orders.map((item) => [item.id, item.customer, item.total, item.status])}
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
