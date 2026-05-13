import { vendorsList } from "@/data/mock";
import { Store } from "lucide-react";

export function VendorTable() {
  const rows = vendorsList.map((v, i) => ({
    name: v, products: 12 + i * 7, revenue: 4200 + i * 1300, rating: (4.2 + i * 0.1).toFixed(1), status: i === 2 ? "Pending" : "Approved",
  }));
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>{["Vendor", "Products", "Revenue", "Rating", "Status"].map((h) => <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border hover:bg-secondary/40">
              <td className="px-5 py-3 flex items-center gap-3">
                <div className="size-9 rounded-xl bg-accent grid place-items-center"><Store className="size-4 text-accent-foreground" /></div>
                <span className="font-medium">{r.name}</span>
              </td>
              <td className="px-5 py-3">{r.products}</td>
              <td className="px-5 py-3 font-medium">${r.revenue.toLocaleString()}</td>
              <td className="px-5 py-3">⭐ {r.rating}</td>
              <td className="px-5 py-3"><span className={`px-2 py-1 text-xs rounded-full ${r.status === "Approved" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
