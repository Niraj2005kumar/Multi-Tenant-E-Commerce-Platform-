import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'w-full rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10',
        className,
      )}
      {...props}
    />
  );
}

export default Input;
