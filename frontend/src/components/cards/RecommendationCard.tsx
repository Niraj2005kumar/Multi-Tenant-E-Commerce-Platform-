interface Props {
  title: string;
  description: string;
}

function RecommendationCard({ title, description }: Props) {
  return (
    <div className="glass-card rounded-[32px] border border-slate-800/70 p-6 shadow-2xl shadow-slate-950/25">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recommended</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
}

export default RecommendationCard;
