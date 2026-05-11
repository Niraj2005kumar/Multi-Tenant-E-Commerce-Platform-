import { Link } from 'react-router-dom';

function CheckoutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Checkout</h1>
        <p className="mt-2 text-slate-400">Review and finalize your order</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Shipping address</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Full name" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <input type="email" placeholder="Email" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <input type="text" placeholder="Address" className="col-span-2 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <input type="text" placeholder="City" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <input type="text" placeholder="Postal code" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Order summary</h2>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-slate-400">
                <span>2 items</span>
                <span>$217.00</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span>$229.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
          <h2 className="text-xl font-semibold text-white">Payment method</h2>
          <div className="mt-6 space-y-3">
            <label className="flex items-center gap-3 rounded-3xl border border-sky-400 bg-sky-500/10 p-3 text-slate-200">
              <input type="radio" name="payment" defaultChecked className="rounded-full" />
              <span>Credit card</span>
            </label>
            <label className="flex items-center gap-3 rounded-3xl border border-white/10 p-3 text-slate-200 cursor-pointer">
              <input type="radio" name="payment" className="rounded-full" />
              <span>Digital wallet</span>
            </label>
            <label className="flex items-center gap-3 rounded-3xl border border-white/10 p-3 text-slate-200 cursor-pointer">
              <input type="radio" name="payment" className="rounded-full" />
              <span>Bank transfer</span>
            </label>
          </div>
          <Link to="/customer/payment" className="mt-6 inline-flex w-full rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Continue to payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
