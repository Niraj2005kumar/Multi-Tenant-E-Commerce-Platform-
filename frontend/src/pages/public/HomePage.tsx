import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/customer/ProductCard';
import { products, summaryCards } from '../../data/mockData';

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 p-10 shadow-2xl shadow-slate-950/50">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300">Premium multi-vendor SaaS commerce</span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Build and manage stunning eCommerce marketplaces with a modern SaaS dashboard.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Launch scalable storefronts, vendor dashboards, and customer journeys with a clean, responsive UI designed for premium marketplaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                Explore products
              </Link>
              <Link to="/auth/register" className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300">
                Get started
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {summaryCards.map((card) => (
              <motion.div key={card.title} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{card.title}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
                <p className="mt-2 text-sm text-slate-400">{card.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Featured products</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Powerful tools for every stage of your marketplace.</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-sky-300 transition hover:text-sky-100">
            Browse all products →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
