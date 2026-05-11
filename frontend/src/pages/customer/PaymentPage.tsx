import { Link } from 'react-router-dom';

function PaymentPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Payment</h1>
        <p className="mt-2 text-slate-400">Enter your payment details</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Card details</h2>
            <div className="mt-6 space-y-4">
              <input type="text" placeholder="Cardholder name" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <input type="text" placeholder="4532 •••• •••• 3456" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              <div className="grid gap-4 grid-cols-2">
                <input type="text" placeholder="MM/YY" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
                <input type="text" placeholder="CVV" className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-400" />
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-xl font-semibold text-white">Other payment methods</h2>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">Apple Pay</button>
              <button className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">Google Pay</button>
              <button className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5">PayPal</button>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 h-fit">
          <h2 className="text-xl font-semibold text-white">Order total</h2>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-slate-400">
              <span>Subtotal</span>
              <span>$217.00</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Shipping</span>
              <span>$12.00</span>
            </div>
            <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-semibold text-white">
              <span>Total</span>
              <span>$229.00</span>
            </div>
          </div>
          <Link to="/customer/success" className="mt-6 inline-flex w-full rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Place order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
