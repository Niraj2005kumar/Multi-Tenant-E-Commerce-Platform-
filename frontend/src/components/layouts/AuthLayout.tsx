import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
