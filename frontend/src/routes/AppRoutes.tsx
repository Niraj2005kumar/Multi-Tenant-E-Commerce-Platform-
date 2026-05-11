import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import VendorLayout from '../layouts/VendorLayout';
import CustomerLayout from '../layouts/CustomerLayout';
import HomePage from '../pages/home/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import AdminPage from '../pages/admin/AdminPage';
import VendorPage from '../pages/vendor/VendorPage';
import CustomerPage from '../pages/customer/CustomerPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/signup" element={<SignupPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
      </Route>

      <Route path="/vendor" element={<VendorLayout />}>
        <Route index element={<VendorPage />} />
      </Route>

      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<CustomerPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
