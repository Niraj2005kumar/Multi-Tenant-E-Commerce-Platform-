import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
}

function Sidebar({ title, navItems }: { title: string; navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <aside className="relative border-r border-white/10 bg-slate-950/95 text-slate-100 lg:min-h-screen lg:w-72">
      <div className="flex items-center justify-between px-4 py-5 lg:hidden">
        <span className="text-lg font-semibold">{title}</span>
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className="hidden h-full flex-col px-4 py-8 lg:flex">
        <span className="mb-8 text-sm uppercase tracking-[0.24em] text-slate-500">{title} Panel</span>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block rounded-3xl px-4 py-3 transition ${
                location.pathname === item.path ? 'bg-sky-500/15 text-sky-300' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full z-40 rounded-b-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/30 lg:hidden"
            {...({} as any)}
          >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 transition ${
                    location.pathname === item.path ? 'bg-sky-500/15 text-sky-300' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}

export default Sidebar;
