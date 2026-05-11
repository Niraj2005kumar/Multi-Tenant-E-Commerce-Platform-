import type { ReactNode } from 'react';

function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
