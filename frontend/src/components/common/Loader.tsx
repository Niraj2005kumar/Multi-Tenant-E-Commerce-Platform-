function Loader() {
  return (
    <div className="flex min-h-[220px] items-center justify-center rounded-[32px] border border-white/10 bg-slate-900/90 p-8 text-slate-400 shadow-lg shadow-slate-950/30">
      <div className="flex items-center gap-3 text-sm font-medium">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
        Loading premium commerce experience...
      </div>
    </div>
  );
}

export default Loader;
