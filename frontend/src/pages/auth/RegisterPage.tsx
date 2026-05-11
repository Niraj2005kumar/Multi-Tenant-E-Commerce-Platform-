import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { useToast } from '../../contexts/ToastContext';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      login({
        id: `customer-${Date.now()}`,
        name,
        email,
        role: 'customer',
        avatar: '',
      }),
    );
    showToast('Account created successfully!', 'success');
    navigate('/customer/cart');
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Create account</p>
        <h1 className="text-3xl font-semibold text-white">Join SaaS Market today</h1>
        <p className="mx-auto max-w-xl text-slate-400">Set up your customer account to start shopping premium products from our curated vendors.</p>
      </div>
      <form onSubmit={handleRegister} className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
        <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" required />
        <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email address" required />
        <Input type="password" placeholder="Create password" required />
        <Input type="password" placeholder="Confirm password" required />
        <label className="flex items-center gap-3 text-sm text-slate-300">
          <input type="checkbox" required className="rounded-full border border-white/10" />
          <span>I agree to the Terms of Service and Privacy Policy</span>
        </label>
        <Button type="submit">Create account</Button>
      </form>
      <p className="text-center text-sm text-slate-400">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-sky-300 hover:text-sky-100">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
