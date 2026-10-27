import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, ChevronRight, Cpu, HandCoins, Laptop, MessageCircle, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { ProductList } from "@/components/product-list";
import { ProductTrustNote } from "@/components/product-card";
import { whatsappUrl } from "@/lib/whatsapp";

const services = [
  { icon: HandCoins, title: "We buy your laptop", desc: "Get your old laptop assessed and receive a competitive offer. Share the details and our team will contact you.", href: "/sell", label: "Get an offer" },
  { icon: Laptop, title: "Quality pre-owned laptops", desc: "Explore used and refurbished laptops for work, study and everyday use at practical prices.", href: "/laptops", label: "Browse laptops" },
  { icon: Wrench, title: "Laptop service & repairs", desc: "From upgrades and diagnostics to motherboard and chip-level repair enquiries, we are here to help.", href: "/repairs", label: "Explore services" }
];

export default function HomePage() {
  return <main>
    <section className="relative overflow-hidden bg-[#eef5f8]">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-[#d4eee8] blur-2xl"/>
      <div className="container relative grid min-h-[590px] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="max-w-xl">
          <span className="eyebrow"><Sparkles size={14}/> Smart tech. Better value.</span>
          <h1 className="mt-6 text-[43px] font-black leading-[1.04] tracking-[-.055em] sm:text-6xl">Great laptops.<br/><span className="text-brand">Smarter prices.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">Buy quality used and refurbished laptops, sell your old device for a fair offer, or get expert help when your laptop needs care.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/laptops" className="btn btn-primary">Explore laptops <ArrowRight size={17}/></Link><Link href="/sell" className="btn btn-light">Sell your laptop <ArrowUpRight size={17}/></Link></div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><BadgeCheck size={16} className="text-brand"/> Carefully checked devices</span><span className="flex items-center gap-2"><MessageCircle size={16} className="text-emerald-600"/> Direct WhatsApp support</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-3 top-12 z-10 rounded-2xl border border-white bg-white p-4 shadow-soft sm:-left-7"><div className="flex items-center gap-2 text-xs font-extrabold"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-mint text-emerald-700"><ShieldCheck size={18}/></span> Quality-minded service</div><p className="mt-2 text-[11px] text-slate-500">Ask about testing & warranty</p></div>
          <div className="overflow-hidden rounded-[30px] border-[8px] border-white bg-white shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=90" alt="Laptop on a clean desk" className="h-[340px] w-full object-cover sm:h-[420px]"/>
            <div className="flex items-center justify-between gap-4 p-5"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-brand">Your tech, your way</p><p className="mt-1 text-lg font-black">Buy · Sell · Repair</p></div><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white"><Laptop size={23}/></span></div>
          </div>
          <div className="absolute -bottom-5 right-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-soft"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-slate-300">One place for</p><p className="mt-1 text-sm font-extrabold">All your laptop needs</p></div>
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-white"><div className="container grid grid-cols-2 gap-5 py-6 md:grid-cols-4">{[{icon:CheckCircle2,title:"Quality-focused",sub:"Pre-owned devices"},{icon:HandCoins,title:"Fair offers",sub:"Sell with confidence"},{icon:Wrench,title:"Repair support",sub:"From checks to repairs"},{icon:MessageCircle,title:"Easy enquiries",sub:"Chat on WhatsApp"}].map(x=><div key={x.title} className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand"><x.icon size={19}/></span><span><b className="block text-xs sm:text-sm">{x.title}</b><span className="mt-1 block text-[11px] text-slate-500">{x.sub}</span></span></div>)}</div></section>

    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Find your next laptop</span><h2>Featured laptops</h2><p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">Browse sample listings and enquire directly. Contact us to confirm current stock, condition and warranty.</p></div><Link href="/laptops" className="btn btn-light">View all laptops <ChevronRight size={17}/></Link></div><ProductList showAll={false}/><ProductTrustNote/></div></section>

    <section className="section bg-white"><div className="container"><div className="section-heading"><div><span className="eyebrow">How we can help</span><h2>More than just laptops</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Whether you are upgrading, buying your first laptop or fixing a problem, start with a simple enquiry.</p></div><div className="grid gap-5 md:grid-cols-3">{services.map((s,i)=><article key={s.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-soft"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4f7] text-brand"><s.icon size={23}/></span><p className="mt-5 text-xs font-extrabold uppercase tracking-[.13em] text-brand">0{i+1} / Service</p><h3 className="mt-2 text-xl font-black tracking-tight">{s.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">{s.desc}</p><Link href={s.href} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand">{s.label}<ArrowRight size={16}/></Link></article>)}</div></div></section>

    <section className="section"><div className="container"><div className="grid items-center gap-8 overflow-hidden rounded-[28px] bg-ink p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14"><div><span className="eyebrow !border-white/15 !bg-white/10 !text-emerald-200">Thinking of selling?</span><h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">Your old laptop could be worth more than you think.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">Tell us the brand, specs and condition. We will review the details and get in touch about an offer.</p></div><Link href="/sell" className="btn !bg-white !text-ink">Get a selling offer <ArrowRight size={17}/></Link></div></div></section>

    <section className="pb-20"><div className="container"><div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-7 sm:flex-row sm:items-center sm:p-9"><div><div className="flex items-center gap-2 text-brand"><Zap size={18}/><span className="text-xs font-extrabold uppercase tracking-[.14em]">Need help right now?</span></div><h2 className="mt-2 text-2xl font-black tracking-tight">Let’s talk about your laptop.</h2><p className="mt-2 text-sm text-slate-500">Ask about stock, selling your device or booking a repair.</p></div><a href={whatsappUrl("Hello Jaya Sri Technologies, I would like to enquire about your services.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp"><MessageCircle size={18}/> Chat on WhatsApp</a></div></div></section>
  </main>;
}
