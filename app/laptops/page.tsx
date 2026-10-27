import { ProductList } from "@/components/product-list";
import { ProductTrustNote } from "@/components/product-card";
import { Laptop, ShieldCheck } from "lucide-react";

export default function LaptopsPage() {
  return <main><section className="bg-[#eef5f8] py-14 sm:py-20"><div className="container"><span className="eyebrow"><Laptop size={14}/> Shop our catalogue</span><h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Find a laptop that fits.</h1><p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Compare available pre-owned and refurbished laptops by brand, model and specifications. Message us to confirm availability before visiting.</p><div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand"/> Ask about condition checks</span><span>•</span><span>Transparent listed pricing</span></div></div></section><section className="section !pt-10"><div className="container"><ProductList/><ProductTrustNote/></div></section></main>;
}
