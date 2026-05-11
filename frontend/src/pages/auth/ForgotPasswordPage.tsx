import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

function ForgotPasswordPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Password reset</p>
        <h1 className="text-3xl font-semibold text-white">Recover your account</h1>
        <p className="mx-auto max-w-xl text-slate-400">Enter your email and we'll send you a link to reset your password.</p>
      </div>
      <form className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
        <Input type="email" placeholder="Email address" required />
        <Button type="submit">Send reset link</Button>
      </form>
      <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-center">
        <Link to="/auth/login" className="text-sm text-slate-400 hover:text-sky-300">Back to login</Link>
        <span className="hidden text-slate-600 sm:block">·</span>
        <Link to="/auth/register" className="text-sm text-slate-400 hover:text-sky-300">Create account</Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
