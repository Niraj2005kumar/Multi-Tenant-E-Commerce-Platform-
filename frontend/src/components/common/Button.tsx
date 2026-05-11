import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition';
  const styles =
    variant === 'secondary'
      ? 'bg-slate-800 text-slate-100 hover:bg-slate-700'
      : variant === 'ghost'
      ? 'border border-white/10 bg-transparent text-slate-100 hover:bg-white/5'
      : 'bg-sky-500 text-slate-950 hover:bg-sky-400';

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

export default Button;
