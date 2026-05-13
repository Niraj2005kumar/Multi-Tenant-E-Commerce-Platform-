import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/sidebar/DashboardSidebar';

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <DashboardSidebar role="customer" />
        <main className="space-y-8 p-6 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default CustomerLayout;
