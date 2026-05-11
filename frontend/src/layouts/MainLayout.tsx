import { Outlet } from 'react-router-dom';
import MainNav from '../components/navbar/MainNav';

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <MainNav />
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
