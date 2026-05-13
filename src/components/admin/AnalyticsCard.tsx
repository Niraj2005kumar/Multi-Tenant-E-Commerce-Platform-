import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function AnalyticsCard({ label, value, delta, icon: Icon, index = 0 }: { label: string; value: string; delta?: string; icon: LucideIcon; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight">{value}</p>
          {delta && <p className="mt-1 text-xs text-success font-medium">{delta}</p>}
        </div>
        <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant">
          <Icon className="size-5" />
        </div>
      </div>
    </motion.div>
  );
}
