function Pagination({ page, pages, onChange }: { page: number; pages: number; onChange: (page: number) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-2 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>
      <span>
        Page <strong className="text-white">{page}</strong> of {pages}
      </span>
      <button
        type="button"
        disabled={page >= pages}
        onClick={() => onChange(page + 1)}
        className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-2 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
