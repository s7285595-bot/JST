"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { starterProducts, type Laptop } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function ProductList({ showAll = true }: { showAll?: boolean }) {
  const [products, setProducts] = useState<Laptop[]>(starterProducts);
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All brands");
  useEffect(() => {
    try { const saved = localStorage.getItem("jst-products"); if (saved) setProducts(JSON.parse(saved)); } catch {}
  }, []);
  const brands = ["All brands", ...Array.from(new Set(products.map(p => p.brand)))];
  const visible = useMemo(() => products.filter(p => p.status === "Available" && (brand === "All brands" || p.brand === brand) && `${p.brand} ${p.model} ${p.processor} ${p.ram} ${p.storage}`.toLowerCase().includes(query.toLowerCase())).slice(0, showAll ? undefined : 3), [products, brand, query, showAll]);
  return <div>
    {showAll && <div className="mb-7 grid gap-3 sm:grid-cols-[1fr_220px]">
      <label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search brand, model or specs..." className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-brand"/></label>
      <label className="relative block"><SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17}/><select value={brand} onChange={e => setBrand(e.target.value)} className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-semibold outline-none focus:border-brand">{brands.map(b => <option key={b}>{b}</option>)}</select></label>
    </div>}
    {visible.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map(p => <ProductCard key={p.id} product={p}/>)}</div> : <div className="card p-10 text-center"><h3 className="text-lg font-black">No matching laptops found</h3><p className="mt-2 text-sm text-slate-500">Try another search or contact us to check upcoming stock.</p></div>}
  </div>;
}
