import ProductForm from '../../components/vendor/ProductForm';

function AddProductPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Add new product</h1>
        <p className="mt-2 text-slate-400">Create and publish a new product listing</p>
      </div>
      <ProductForm />
    </div>
  );
}

export default AddProductPage;
