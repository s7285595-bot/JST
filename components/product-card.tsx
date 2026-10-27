"use client";
import { MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Laptop } from "@/lib/products";
import { formatINR } from "@/lib/products";
import { whatsappUrl } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Laptop }) {
  const message = `Hello Jaya Sri Technologies, I'm interested in ${product.brand} ${product.model} (${product.processor}, ${product.ram}, ${product.storage}) listed at ${formatINR(product.price)}. Is it available?`;
  return <article className="card group">
    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={`${product.brand} ${product.model}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"/>
      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold text-ink">{product.condition}</span>
      {product.status !== "Available" && <span className="absolute right-3 top-3 rounded-full bg-ink px-3 py-1.5 text-[11px] font-extrabold text-white">{product.status}</span>}
    </div>
    <div className="p-5">
      <div className="mb-2 flex items-center justify-between gap-2"><span className="text-xs font-extrabold uppercase tracking-[.12em] text-brand">{product.brand}</span><span className="text-[11px] text-slate-400">{product.id}</span></div>
      <h3 className="text-lg font-black tracking-tight">{product.model}</h3>
      <p className="mt-2 text-sm text-slate-500">{product.processor}</p>
      <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold">{product.ram}</span><span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold">{product.storage}</span></div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><div><p className="text-[11px] font-bold text-slate-400">OUR PRICE</p><p className="text-xl font-black tracking-tight">{formatINR(product.price)}</p></div>
      {product.status === "Available" ? <a className="btn btn-whatsapp !gap-2 !px-3 !py-3" href={whatsappUrl(message)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.model}`}><MessageCircle size={17}/><span className="hidden sm:inline">Enquire</span><ArrowUpRight size={15}/></a> : <span className="text-xs font-bold text-slate-400">Not available</span>}</div>
    </div>
  </article>;
}

export function ProductTrustNote() {
  return <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500"><CheckCircle2 size={16} className="text-emerald-600"/> Ask us about testing, warranty and condition before purchase.</div>;
}
