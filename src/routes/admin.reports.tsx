import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { SalesChart } from "@/components/vendor/SalesChart";
import { AnalyticsCard } from "@/components/admin/AnalyticsCard";
import { Download, Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts";
import { categoryData } from "@/data/mock";

export const Route = createFileRoute("/admin/reports")({ head: () => ({ meta: [{ title: "Reports — Admin" }] }), component: Reports });
const palette = ["var(--color-chart-1)","var(--color-chart-2)","var(--color-chart-3)","var(--color-chart-4)","var(--color-chart-5)"];

function Reports() {
  return (
    <>
      <PageHeader title="Reports" subtitle="Generate and export marketplace insights" action={<Button className="bg-gradient-primary shadow-elegant"><Download className="size-4 mr-2" /> Export CSV</Button>} />
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <AnalyticsCard label="System uptime" value="99.98%" icon={Activity} index={0} />
        <AnalyticsCard label="Open tickets" value="14" icon={AlertCircle} index={1} />
        <AnalyticsCard label="Resolved" value="92%" icon={CheckCircle2} index={2} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <SalesChart />
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Category share</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3}>
                  {categoryData.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
