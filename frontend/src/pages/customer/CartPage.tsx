import { useState } from 'react';
import CartItem from '../../components/customer/CartItem';
import { products } from '../../data/mockData';
import Button from '../../components/common/Button';
import { useToast } from '../../contexts/ToastContext';

function CartPage() {
  const { showToast } = useToast();
  const [cartItems, setCartItems] = useState(products.slice(0, 2).map((item, index) => ({ product: item, quantity: index + 1 })));

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleRemove = (id: string) => {
    setCartItems((current) => current.filter((item) => item.product.id !== id));
    showToast('Removed from cart', 'info');
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((current) => current.map((item) => (item.product.id === id ? { ...item, quantity } : item)));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Shopping cart</h1>
        <p className="mt-2 text-slate-400">{cartItems.length} items in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-white/10 bg-slate-900/80 p-16 text-center text-slate-400">
          <p className="text-lg font-semibold text-white">Your cart is empty</p>
          <Button className="mt-4">Start shopping</Button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
                onRemove={() => handleRemove(item.product.id)}
                onChangeQuantity={(quantity) => handleQuantityChange(item.product.id, quantity)}
              />
            ))}
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Order summary</h2>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span>$12.00</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span>${(total + 12).toFixed(2)}</span>
              </div>
            </div>
            <Button className="mt-6 w-full">Continue to checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
