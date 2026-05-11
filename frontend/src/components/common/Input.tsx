import type { InputHTMLAttributes } from 'react';

function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 ${className}`}
      {...props}
    />
  );
}

export default Input;
