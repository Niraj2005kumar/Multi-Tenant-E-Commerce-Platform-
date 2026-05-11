import Button from '../../components/common/Button';

function AddressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Saved addresses</h1>
        <p className="mt-2 text-slate-400">Manage your shipping addresses</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h3 className="text-lg font-semibold text-white">Home</h3>
            <span className="text-xs font-semibold px-3 py-1 bg-sky-500/15 text-sky-300 rounded-full">Default</span>
          </div>
          <p className="text-sm text-slate-400">123 Main Street</p>
          <p className="text-sm text-slate-400">New York, NY 10001</p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/30">
          <h3 className="text-lg font-semibold text-white mb-4">Office</h3>
          <p className="text-sm text-slate-400">456 Business Ave</p>
          <p className="text-sm text-slate-400">San Francisco, CA 94102</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-dashed border-white/10 bg-slate-900/80 p-8 text-center">
        <p className="text-slate-400 mb-4">Add a new address</p>
        <Button>Add address</Button>
      </div>
    </div>
  );
}

export default AddressPage;
