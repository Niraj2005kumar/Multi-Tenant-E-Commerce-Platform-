import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import ProductCard from '../../components/cards/ProductCard';
import { products, categories } from '../../data/mockData';

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex rounded-full bg-slate-900/80 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-400">
            Premium SaaS marketplace
          </p>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Launch and scale your marketplace with premium SaaS tools.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Discover curated products, vendor analytics, and buyer workflows designed for modern merchants and teams.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="primary">Explore marketplace</Button>
            <Button variant="secondary">View pricing</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/80 px-5 py-4 text-sm text-slate-300">
              <p className="text-2xl font-semibold text-white">2.4K+</p>
              <p className="mt-1">Trusted customers</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 px-5 py-4 text-sm text-slate-300">
              <p className="text-2xl font-semibold text-white">128</p>
              <p className="mt-1">Verified vendors</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 px-5 py-4 text-sm text-slate-300">
              <p className="text-2xl font-semibold text-white">4.9/5</p>
              <p className="mt-1">Platform satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[40px] border border-slate-800/70 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-slate-950/0 to-slate-950/80" />
          <div className="relative space-y-6">
            <div className="rounded-3xl bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-400">Trusted by teams</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Everything growth teams need</h2>
              <p className="mt-3 text-sm text-slate-400">
                Build standout experiences with modern SaaS components, analytics, and intelligent commerce flows.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Unified dashboard</p>
                <p className="mt-2 text-slate-400">Monitor revenue, orders, and customer activity from one place.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Fast onboarding</p>
                <p className="mt-2 text-slate-400">Get your store and vendor network live in minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Build a portfolio of marketplace tools"
          subtitle="Browse curated SaaS products for operations, marketing, checkout, and analytics."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="glass-card rounded-[32px] border border-slate-800/70 p-7 shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{category.title}</p>
              <p className="mt-4 text-lg font-semibold text-white">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-heading">Featured Products</h2>
            <p className="section-subtitle">Premium designs, commerce features, and vendor-ready tools.</p>
          </div>
          <Button variant="secondary">Browse all products</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
