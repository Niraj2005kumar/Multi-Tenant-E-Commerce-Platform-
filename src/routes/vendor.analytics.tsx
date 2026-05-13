import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { SalesChart } from "@/components/vendor/SalesChart";
import { AnalyticsCard } from "@/components/admin/AnalyticsCard";
import { TrendingUp, ShoppingCart, Eye, Repeat } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import { categoryData } from "@/data/mock";

export const Route = createFileRoute("/vendor/analytics")({ head: () => ({ meta: [{ title: "Analytics — Marqo" }] }), component: Analytics });

const palette = ["var(--color-chart-1)","var(--color-chart-2)","var(--color-chart-3)","var(--color-chart-4)","var(--color-chart-5)"];

function Analytics() {
  return (
    <>
      <PageHeader title="Analytics" subtitle="Performance insights" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <AnalyticsCard label="Conversion" value="3.42%" delta="+0.4%" icon={TrendingUp} index={0} />
        <AnalyticsCard label="Avg. order" value="$78.20" delta="+$4.10" icon={ShoppingCart} index={1} />
        <AnalyticsCard label="Page views" value="24.8K" delta="+12%" icon={Eye} index={2} />
        <AnalyticsCard label="Returning" value="38%" delta="+2.3%" icon={Repeat} index={3} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <SalesChart />
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Revenue by category</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>{categoryData.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}</Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
