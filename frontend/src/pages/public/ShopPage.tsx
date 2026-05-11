import { useMemo, useState } from 'react';
import ProductCard from '../../components/customer/ProductCard';
import SearchBar from '../../components/common/SearchBar';
import { products } from '../../data/mockData';
import Loader from '../../components/common/Loader';

const categories = Array.from(new Set(products.map((product) => product.category)));

function ShopPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Popularity');
  const [loading] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        [product.name, product.category, product.vendor].some((field) => field.toLowerCase().includes(query.toLowerCase())),
      )
      .filter((product) => (category === 'All' ? true : product.category === category))
      .sort((a, b) => {
        if (sort === 'Price: Low to High') return a.price - b.price;
        if (sort === 'Price: High to Low') return b.price - a.price;
        return b.rating - a.rating;
      });
  }, [query, category, sort]);

  return (
    <div className="space-y-8">
      <section className="rounded-[40px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Shop</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Discover curated products for modern SaaS stores.</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <SearchBar value={query} onChange={setQuery} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400"
            >
              <option>All</option>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {loading ? (
        <Loader />
      ) : filteredProducts.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-white/10 bg-slate-900/80 p-16 text-center text-slate-400">
          <p className="text-lg font-semibold text-white">No products match this filter.</p>
          <p className="mt-2">Try another category or search term.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopPage;
