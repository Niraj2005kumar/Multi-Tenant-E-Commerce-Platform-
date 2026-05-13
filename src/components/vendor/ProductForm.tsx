import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addProduct } from "@/data/products";
import { useAuth } from "@/lib/auth";

export function ProductForm() {
  const nav = useNavigate();
  const { user } = useAuth();
  const [f, setF] = useState({
    name: "",
    category: "Electronics",
    stock: 20,
    price: 129,
    oldPrice: 0,
    description: "",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  });

  if (!user || user.role !== "vendor") return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({
      name: f.name,
      category: f.category,
      stock: Number(f.stock),
      price: Number(f.price),
      oldPrice: f.oldPrice ? Number(f.oldPrice) : undefined,
      description: f.description,
      image: f.image,
      vendor: user.shopName,
      vendorId: user.id,
    });
    toast.success("Product saved");
    nav({ to: "/vendor/products" });
  };

  return (
    <form onSubmit={submit} className="grid gap-4 max-w-2xl">
      <div><Label className="mb-1.5">Product name</Label><Input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="e.g. Studio Headphones Pro" /></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label className="mb-1.5">Category</Label><Input required value={f.category} onChange={(e) => setF({ ...f, category: e.target.value })} /></div>
        <div><Label className="mb-1.5">Stock</Label><Input type="number" value={f.stock} onChange={(e) => setF({ ...f, stock: +e.target.value })} /></div>
        <div><Label className="mb-1.5">Price</Label><Input type="number" value={f.price} onChange={(e) => setF({ ...f, price: +e.target.value })} /></div>
        <div><Label className="mb-1.5">Compare price</Label><Input type="number" value={f.oldPrice} onChange={(e) => setF({ ...f, oldPrice: +e.target.value })} /></div>
      </div>
      <div><Label className="mb-1.5">Image URL</Label><Input value={f.image} onChange={(e) => setF({ ...f, image: e.target.value })} /></div>
      <div><Label className="mb-1.5">Description</Label><Textarea rows={5} required value={f.description} onChange={(e) => setF({ ...f, description: e.target.value })} placeholder="Tell customers about this product..." /></div>
      <div className="flex gap-3">
        <Button type="submit" className="bg-gradient-primary shadow-elegant">Save product</Button>
        <Button type="button" variant="outline" onClick={() => nav({ to: "/vendor/products" })}>Cancel</Button>
      </div>
    </form>
  );
}