import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import useToggle from '../../hooks/useToggle';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { state: showPassword, toggle: togglePassword } = useToggle(false);

  return (
    <div className="mx-auto max-w-5xl rounded-[44px] bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-400">Member login</p>
          <h1 className="text-4xl font-semibold text-white">Welcome back to the marketplace</h1>
          <p className="max-w-xl text-slate-400">
            Sign in to access dashboards, orders, and premium vendor resources with a beautiful, modern workspace.
          </p>
          <div className="space-y-3">
            <button className="btn-secondary w-full text-left">Continue with Google</button>
            <button className="btn-secondary w-full text-left">Continue with GitHub</button>
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-8">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <Input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" type="email" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <div className="relative">
                <Input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition hover:text-white"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500" />
                Remember me
              </label>
              <Link to="/auth/signup" className="text-sky-400 hover:text-sky-300">
                Create account
              </Link>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
