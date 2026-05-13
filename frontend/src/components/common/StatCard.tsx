interface StatCardProps {
  title: string;
  value: string;
  delta: string;
}

function StatCard({ title, value, delta }: StatCardProps) {
  return (
    <div className="glass-card card-glow p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{title}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{delta} vs last month</p>
    </div>
  );
}

export default StatCard;
