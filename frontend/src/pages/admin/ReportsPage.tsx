import { motion } from 'framer-motion';
import AnalyticsCard from '../../components/admin/AnalyticsCard';

const reportData = [
  { title: 'Total revenue', value: '$142.8K', hint: 'Last 30 days' },
  { title: 'Transactions', value: '8,420', hint: '+22% growth' },
  { title: 'Failed orders', value: '124', hint: '1.47% rate' },
  { title: 'Refund rate', value: '2.3%', hint: 'Industry avg: 2.1%' },
  { title: 'GMV', value: '$521.4K', hint: '+18% YoY' },
  { title: 'Avg order value', value: '$62.00', hint: '+5% vs last month' },
];

function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Reports</h1>
        <p className="mt-2 text-slate-400">Platform analytics and business metrics</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reportData.map((report) => (
          <motion.div key={report.title} whileHover={{ y: -4 }}>
            <AnalyticsCard title={report.title} value={report.value} hint={report.hint} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <h2 className="text-xl font-semibold text-white">Revenue by category</h2>
          <div className="mt-6 space-y-4">
            {['Analytics', 'UI Kit', 'Operations', 'Marketing'].map((cat) => (
              <div key={cat} className="flex items-center justify-between">
                <span className="text-slate-400">{cat}</span>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-32 rounded-full bg-white/5"></div>
                  <span className="text-sm font-semibold text-white">$35.2K</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <h2 className="text-xl font-semibold text-white">Top performing products</h2>
          <div className="mt-6 space-y-4">
            {['Luxe Dashboard', 'Pearl Kit', 'Streamline', 'ShopPulse'].map((prod, index) => (
              <div key={prod} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                <span className="text-sm text-slate-300">{prod}</span>
                <span className="text-sm font-semibold text-sky-400">#{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
