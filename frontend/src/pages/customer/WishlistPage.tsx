import { useState } from 'react';
import WishlistItem from '../../components/customer/WishlistItem';
import { products } from '../../data/mockData';
import Button from '../../components/common/Button';

function WishlistPage() {
  const [wishlist] = useState(products.slice(1, 3));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Wishlist</h1>
        <p className="mt-2 text-slate-400">{wishlist.length} saved items</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-white/10 bg-slate-900/80 p-16 text-center text-slate-400">
          <p className="text-lg font-semibold text-white">Your wishlist is empty</p>
          <Button className="mt-4">Browse products</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlist.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
