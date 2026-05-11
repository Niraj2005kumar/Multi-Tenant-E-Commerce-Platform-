import { useMemo, useState } from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import ProductCard from '../../components/cards/ProductCard';
import { products } from '../../data/mockData';
import Input from '../../components/common/Input';

function ShopPage() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(
    () => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="space-y-12">
      <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <SectionHeading
            title="Explore the marketplace"
            subtitle="Search, compare, and find the right digital products for your SaaS team."
          />
        </div>
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Search catalogue</p>
          <p className="mt-4 text-lg font-semibold text-white">Find the perfect toolkit</p>
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, themes, analytics" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && <p className="text-slate-400">No products match your search yet.</p>}
    </div>
  );
}

export default ShopPage;
