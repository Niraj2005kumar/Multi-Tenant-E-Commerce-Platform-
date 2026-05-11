import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const location = useLocation();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
      {...({} as any)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          SaaS Market
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-slate-950/20">
              {user.name} • {user.role}
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
