import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

function ProductForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Analytics');

  return (
    <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
      <h2 className="mb-4 text-xl font-semibold text-white">Add new product</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Product title" />
        <Input value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Price" />
        <Input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
        <Input placeholder="Inventory count" type="number" />
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-300">Description</label>
        <textarea className="w-full rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-sm text-slate-100 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" rows={5} placeholder="Write a short product summary..."></textarea>
      </div>
      <div className="mt-6 flex justify-end">
        <Button>Create product</Button>
      </div>
    </div>
  );
}

export default ProductForm;
