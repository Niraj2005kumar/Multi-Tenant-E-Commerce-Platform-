import { users } from "@/data/mock";
import { MoreHorizontal } from "lucide-react";

export function UserTable() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>{["User", "Email", "Role", "Joined", "Status", ""].map((h) => <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t border-border hover:bg-secondary/40">
              <td className="px-5 py-3 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center text-xs font-semibold">{u.name.split(" ").map(s => s[0]).join("")}</div>
                <span className="font-medium">{u.name}</span>
              </td>
              <td className="px-5 py-3 text-muted-foreground">{u.email}</td>
              <td className="px-5 py-3"><span className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">{u.role}</span></td>
              <td className="px-5 py-3 text-muted-foreground">{u.joined}</td>
              <td className="px-5 py-3"><span className={`px-2 py-1 text-xs rounded-full ${u.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{u.status}</span></td>
              <td className="px-5 py-3 text-muted-foreground"><MoreHorizontal className="size-4" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
