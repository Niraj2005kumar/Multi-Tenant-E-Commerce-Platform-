import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function PublicLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
