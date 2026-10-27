"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Laptop, MessageCircle, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [{ href: "/", label: "Home" }, { href: "/laptops", label: "Buy laptops" }, { href: "/sell", label: "Sell your laptop" }, { href: "/repairs", label: "Repairs" }, { href: "/contact", label: "Contact" }];
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div className="container flex h-[76px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white"><Laptop size={23}/></span>
        <span><span className="block text-[15px] font-black tracking-tight">Jaya Sri <span className="text-brand">Technologies</span></span><span className="block text-[10px] font-bold uppercase tracking-[.17em] text-slate-500">Smart tech. Better value.</span></span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex">{links.map(l => <Link key={l.href} href={l.href} className="text-[13px] font-bold text-slate-600 transition hover:text-brand">{l.label}</Link>)}</nav>
      <div className="hidden items-center gap-2 lg:flex">
        <a className="btn btn-whatsapp !py-[11px]" href={whatsappUrl("Hello Jaya Sri Technologies, I have a laptop enquiry.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a>
      </div>
      <button className="rounded-xl border border-slate-200 p-2 lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="container grid gap-1 pb-4 lg:hidden">{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold hover:bg-slate-50">{l.label}</Link>)}<a className="btn btn-whatsapp mt-2" href={whatsappUrl("Hello Jaya Sri Technologies, I have a laptop enquiry.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a></nav>}
  </header>;
}

export function SiteFooter() {
  const address = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Add your business address before launch";
  const map = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.google.com/";
  return <footer className="mt-10 bg-ink text-white">
    <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><div className="mb-3 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Laptop/></span><strong className="text-lg">Jaya Sri Technologies</strong></div><p className="max-w-sm text-sm leading-6 text-slate-300">Your trusted destination for quality pre-owned laptops, dependable repairs and honest advice.</p></div>
      <div><h3 className="mb-4 text-sm font-extrabold">Explore</h3><div className="grid gap-3 text-sm text-slate-300"><Link href="/laptops">Available laptops</Link><Link href="/sell">Sell your laptop</Link><Link href="/repairs">Service & repairs</Link><Link href="/admin">Admin dashboard</Link></div></div>
      <div><h3 className="mb-4 text-sm font-extrabold">Get in touch</h3><div className="flex gap-2 text-sm leading-6 text-slate-300"><MapPin size={18} className="mt-1 shrink-0"/><span>{address}</span></div><a className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white" href={map} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={15}/></a><p className="mt-4 flex items-center gap-2 text-sm text-slate-300"><Phone size={16}/> Add your business phone number</p></div>
    </div>
    <div className="border-t border-white/10"><div className="container flex flex-col justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row"><span>© {new Date().getFullYear()} Jaya Sri Technologies. All rights reserved.</span><span>Quality checked. Value delivered.</span></div></div>
  </footer>;
}
