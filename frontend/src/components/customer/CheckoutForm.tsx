import Button from '../common/Button';
import Input from '../common/Input';

function CheckoutForm() {
  return (
    <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Checkout information</h2>
        <p className="text-sm text-slate-400">Fill in your shipping and payment details to complete the order.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input placeholder="Full name" />
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Shipping address" />
        <Input placeholder="City" />
        <Input placeholder="Postal code" />
        <Input placeholder="Country" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-400">Estimated delivery</p>
          <p className="text-lg font-semibold text-white">2-4 business days</p>
        </div>
        <Button>Continue to payment</Button>
      </div>
    </div>
  );
}

export default CheckoutForm;
