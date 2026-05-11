import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/customer/ProductCard';
import SearchBar from '../../components/common/SearchBar';
import { products } from '../../data/mockData';

function VendorProductsPage() {
  const [query, setQuery] = useState('');
  const vendorProducts = products.filter(
    (p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Products</h1>
          <p className="mt-2 text-slate-400">{vendorProducts.length} items</p>
        </div>
        <Link to="/vendor/add-product" className="inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Add product
        </Link>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vendorProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default VendorProductsPage;
