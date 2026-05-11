import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import PublicLayout from './components/layouts/PublicLayout';
import AuthLayout from './components/layouts/AuthLayout';
import CustomerLayout from './components/layouts/CustomerLayout';
import VendorLayout from './components/layouts/VendorLayout';
import AdminLayout from './components/layouts/AdminLayout';
import HomePage from './pages/public/HomePage';
import ShopPage from './pages/public/ShopPage';
import ProductDetailsPage from './pages/public/ProductDetailsPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import CartPage from './pages/customer/CartPage';
import WishlistPage from './pages/customer/WishlistPage';
import CheckoutPage from './pages/customer/CheckoutPage';
import AddressPage from './pages/customer/AddressPage';
import PaymentPage from './pages/customer/PaymentPage';
import OrderSuccessPage from './pages/customer/OrderSuccessPage';
import CustomerOrdersPage from './pages/customer/OrdersPage';
import ProfilePage from './pages/customer/ProfilePage';
import VendorDashboard from './pages/vendor/VendorDashboard';
import VendorProductsPage from './pages/vendor/ProductsPage';
import AddProductPage from './pages/vendor/AddProductPage';
import VendorOrdersPage from './pages/vendor/OrdersPage';
import VendorAnalyticsPage from './pages/vendor/AnalyticsPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UsersPage from './pages/admin/UsersPage';
import VendorsPage from './pages/admin/VendorsPage';
import ReportsPage from './pages/admin/ReportsPage';
import NotFoundPage from './pages/errors/NotFoundPage';
import ForbiddenPage from './pages/errors/ForbiddenPage';

function RequireAuth({ children, role }: { children: React.ReactElement; role?: 'customer' | 'vendor' | 'admin' }) {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/403" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}> 
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}> 
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot" element={<ForgotPasswordPage />} />
      </Route>

      <Route
        path="customer"
        element={
          <RequireAuth role="customer">
            <CustomerLayout />
          </RequireAuth>
        }
      >
        <Route index element={<CartPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="address" element={<AddressPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="success" element={<OrderSuccessPage />} />
        <Route path="orders" element={<CustomerOrdersPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route
        path="vendor"
        element={
          <RequireAuth role="vendor">
            <VendorLayout />
          </RequireAuth>
        }
      >
        <Route index element={<VendorDashboard />} />
        <Route path="products" element={<VendorProductsPage />} />
        <Route path="add-product" element={<AddProductPage />} />
        <Route path="orders" element={<VendorOrdersPage />} />
        <Route path="analytics" element={<VendorAnalyticsPage />} />
      </Route>

      <Route
        path="admin"
        element={
          <RequireAuth role="admin">
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="vendors" element={<VendorsPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Route>

      <Route path="/403" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
