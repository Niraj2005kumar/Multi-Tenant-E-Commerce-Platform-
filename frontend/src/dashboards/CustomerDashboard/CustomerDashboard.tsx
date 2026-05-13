import { useMemo } from 'react';
import ProductCard from '../../components/cards/ProductCard';
import OrderCard from '../../components/cards/OrderCard';
import RecommendationCard from '../../components/cards/RecommendationCard';
import { fetchOrders, fetchRecommendations, fetchProducts } from '../../services/mockService';

function CustomerDashboard() {
  const orders = fetchOrders();
  const recommendations = fetchRecommendations();
  const featuredProducts = useMemo(() => fetchProducts().slice(0, 3), []);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile summary</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Hello, marketplace owner</h2>
          <p className="mt-3 text-slate-400">Stay on top of your orders, wishlist, and product recommendations in one modern dashboard.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-200">
              <p className="text-sm text-slate-400">Orders this month</p>
              <p className="mt-3 text-3xl font-semibold text-white">26</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-200">
              <p className="text-sm text-slate-400">Saved items</p>
              <p className="mt-3 text-3xl font-semibold text-white">18</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Latest orders</p>
          <div className="mt-6 space-y-4">
            {orders.map((order) => (
              <OrderCard key={order.id} id={order.id} customer={order.customer} total={order.total} status={order.status} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recommended for you</p>
          <div className="mt-6 space-y-4">
            {recommendations.map((item) => (
              <RecommendationCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Explore products</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
