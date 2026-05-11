import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

function Button({ variant = 'primary', className, children, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition duration-300';
  const styles = {
    primary: 'bg-sky-500 text-slate-950 hover:bg-sky-400',
    secondary: 'border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-900',
    ghost: 'text-slate-100 hover:text-white',
  };

  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
