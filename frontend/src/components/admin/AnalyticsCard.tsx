import Badge from '../common/Badge';

function AnalyticsCard({ title, value, hint }: { title: string; value: string; hint: string }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-400">{hint}</p>
        </div>
        <Badge label="Top" variant="success" />
      </div>
      <p className="mt-6 text-4xl font-semibold text-sky-400">{value}</p>
    </div>
  );
}

export default AnalyticsCard;
