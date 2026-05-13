interface Props {
  id: string;
  customer: string;
  total: string;
  status: string;
}

function OrderCard({ id, customer, total, status }: Props) {
  return (
    <div className="glass-card rounded-[32px] border border-slate-800/70 p-6 shadow-2xl shadow-slate-950/25">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Order</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{id}</h3>
          <p className="mt-1 text-sm text-slate-400">{customer}</p>
        </div>

        <div className="rounded-3xl bg-slate-900/90 px-4 py-2 text-sm text-slate-200">
          {status}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between text-slate-300">
        <span>{total}</span>
        <span className="text-sm text-slate-400">View details</span>
      </div>
    </div>
  );
}

export default OrderCard;
