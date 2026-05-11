import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../../data/mockData';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  if (!product) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-12 text-center text-slate-300">
        <p className="text-xl font-semibold text-white">Product not found</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <motion.div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_0.6fr]">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/30">
          <img src={product.image} alt={product.name} className="h-96 w-full object-cover rounded-[32px]" />
        </div>
        <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <Badge label={product.category} variant="muted" />
          <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
          <p className="text-slate-400">{product.description}</p>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Price</p>
              <p className="mt-2 text-3xl font-semibold text-sky-400">${product.price.toFixed(0)}</p>
            </div>
            <div className="text-right text-sm text-slate-400">
              <p>{product.rating} ★</p>
              <p>{product.reviews} reviews</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button>Add to cart</Button>
            <Button variant="secondary">Save to wishlist</Button>
          </div>
        </div>
      </div>
      <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
        <h2 className="text-2xl font-semibold text-white">Product details</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
            <p className="text-sm text-slate-500">Vendor</p>
            <p className="mt-2 text-lg font-semibold text-white">{product.vendor}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
            <p className="text-sm text-slate-500">Inventory</p>
            <p className="mt-2 text-lg font-semibold text-white">{product.inventory}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
            <p className="text-sm text-slate-500">Status</p>
            <p className="mt-2 text-lg font-semibold text-white">{product.status}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetailsPage;
