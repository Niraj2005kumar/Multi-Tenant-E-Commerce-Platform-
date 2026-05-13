export function Loader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="size-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-secondary ${className}`} />;
}

export function EmptyState({ title, hint, icon }: { title: string; hint?: string; icon?: React.ReactNode }) {
  return (
    <div className="text-center py-20 px-6">
      {icon && <div className="mx-auto size-16 rounded-2xl bg-gradient-soft grid place-items-center mb-4">{icon}</div>}
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      {hint && <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">{hint}</p>}
    </div>
  );
}
