import { orders } from "@/data/mock";

const colors: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Shipped: "bg-info/10 text-info",
  Processing: "bg-warning/10 text-warning",
  Pending: "bg-muted text-muted-foreground",
};

export function OrdersTable() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            {["Order", "Customer", "Date", "Items", "Total", "Status"].map((h) => (
              <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t border-border hover:bg-secondary/40 transition-colors">
              <td className="px-5 py-3 font-medium">{o.id}</td>
              <td className="px-5 py-3">{o.customer}</td>
              <td className="px-5 py-3 text-muted-foreground">{o.date}</td>
              <td className="px-5 py-3">{o.items}</td>
              <td className="px-5 py-3 font-medium">${o.total}</td>
              <td className="px-5 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[o.status]}`}>{o.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
