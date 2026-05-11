function Badge({ label, variant = 'primary' }: { label: string; variant?: 'primary' | 'success' | 'rose' | 'muted' }) {
  const colors =
    variant === 'success'
      ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20'
      : variant === 'rose'
      ? 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/20'
      : variant === 'muted'
      ? 'bg-white/5 text-slate-300 ring-1 ring-white/10'
      : 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20';

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${colors}`}>{label}</span>;
}

export default Badge;
