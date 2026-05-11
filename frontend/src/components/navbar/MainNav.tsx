import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function MainNav() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img src={logo} alt="SaaS Market logo" className="h-10 w-10 rounded-2xl bg-slate-900 p-2" />
          <span className="text-xl font-semibold tracking-tight">SaaS Market</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/shop" className="text-slate-300 transition hover:text-white">
            Shop
          </Link>
          <Link to="/auth/login" className="text-slate-300 transition hover:text-white">
            Login
          </Link>
          <Link to="/auth/signup" className="btn-primary">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
