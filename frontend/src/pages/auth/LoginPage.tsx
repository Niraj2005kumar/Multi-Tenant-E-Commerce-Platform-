import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { useToast } from '../../contexts/ToastContext';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const roles = ['customer', 'vendor', 'admin'] as const;

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<typeof roles[number]>('customer');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      login({
        id: `${role}-user`,
        name: role === 'customer' ? 'Aiden Clark' : role === 'vendor' ? 'Market Pro' : 'Admin Lead',
        email,
        role,
        avatar: '',
      }),
    );
    showToast('Welcome to the dashboard', 'success');
    navigate(role === 'admin' ? '/admin' : role === 'vendor' ? '/vendor' : '/customer/cart');
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Sign in</p>
        <h1 className="text-3xl font-semibold text-white">Welcome back to SaaS Market</h1>
        <p className="mx-auto max-w-xl text-slate-400">Choose a role and enter sign-in details to explore the premium frontend experience.</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email address" required />
          <Input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" required />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-3 text-sm text-slate-300">
            <span>Role</span>
            <select value={role} onChange={(event) => setRole(event.target.value as typeof roles[number])} className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400">
              {roles.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <a href="/auth/forgot" className="text-sm text-sky-300 hover:text-sky-100">Forgot password?</a>
        </div>
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
}

export default LoginPage;
