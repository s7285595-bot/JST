"use client";
import { useState } from "react";
import { ArrowRight, Camera, CheckCircle2, HandCoins, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function SellPage() {
  const [form, setForm] = useState({ name:"", phone:"", brand:"Dell", model:"", processor:"", ram:"", storage:"", condition:"Good", faults:"", expected:"", notes:"" });
  const [done, setDone] = useState(false);
  function update(key: string, value: string) { setForm(prev => ({...prev, [key]:value})); }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Laptop selling enquiry for Jaya Sri Technologies\nName: ${form.name}\nPhone: ${form.phone}\nBrand: ${form.brand}\nModel: ${form.model}\nProcessor: ${form.processor || "Not specified"}\nRAM: ${form.ram || "Not specified"}\nStorage: ${form.storage || "Not specified"}\nCondition: ${form.condition}\nFaults: ${form.faults || "Not specified"}\nExpected price: ${form.expected ? "₹"+form.expected : "Open to offer"}\nAdditional details: ${form.notes || "None"}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setDone(true);
  }
  return <main><section className="bg-[#eef5f8] py-14 sm:py-20"><div className="container grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><span className="eyebrow"><HandCoins size={14}/> Sell your laptop</span><h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Turn your old laptop into value.</h1><p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Share a few details about your laptop. Our team can review the information and contact you to discuss an offer.</p><div className="mt-7 grid gap-4">{["Tell us about your device","Share its condition honestly","Discuss the offer with our team"].map((x,i)=><div key={x} className="flex items-center gap-3 text-sm font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand">{i+1}</span>{x}</div>)}</div><div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500"><ShieldCheck className="mb-2 text-brand" size={20}/> Please remove personal files and sign out of personal accounts before handing over a device. Back up your data first.</div></div>
    <form onSubmit={submit} className="card p-5 sm:p-8"><h2 className="text-2xl font-black">Laptop details</h2><p className="mt-2 text-sm text-slate-500">Required fields are marked with *.</p><div className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="field">Your name *<input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Full name"/></label>
      <label className="field">Phone / WhatsApp *<input required type="tel" value={form.phone} onChange={e=>update("phone",e.target.value)} placeholder="Your contact number"/></label>
      <label className="field">Brand *<select value={form.brand} onChange={e=>update("brand",e.target.value)}>{["Dell","HP","Lenovo","Apple","Acer","Asus","MSI","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
      <label className="field">Model *<input required value={form.model} onChange={e=>update("model",e.target.value)} placeholder="e.g. Latitude 5420"/></label>
      <label className="field">Processor<input value={form.processor} onChange={e=>update("processor",e.target.value)} placeholder="e.g. Core i5 11th Gen"/></label>
      <label className="field">RAM<input value={form.ram} onChange={e=>update("ram",e.target.value)} placeholder="e.g. 8GB"/></label>
      <label className="field">Storage<input value={form.storage} onChange={e=>update("storage",e.target.value)} placeholder="e.g. 256GB SSD"/></label>
      <label className="field">Condition *<select value={form.condition} onChange={e=>update("condition",e.target.value)}>{["Excellent","Good","Fair","Not working","Parts only"].map(x=><option key={x}>{x}</option>)}</select></label>
      <label className="field">Expected price (₹)<input type="number" min="0" value={form.expected} onChange={e=>update("expected",e.target.value)} placeholder="Optional"/></label>
      <label className="field">Known faults<input value={form.faults} onChange={e=>update("faults",e.target.value)} placeholder="Battery, screen, keyboard..."/></label>
      <label className="field sm:col-span-2">Additional details<textarea rows={3} value={form.notes} onChange={e=>update("notes",e.target.value)} placeholder="Age of laptop, accessories, anything else..."/></label>
    </div><p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500"><Camera size={16} className="mt-0.5 shrink-0"/> Have photos ready to attach in WhatsApp after the message opens. This starter form does not upload or store image files.</p><button className="btn btn-primary mt-6 w-full" type="submit">Send enquiry on WhatsApp <ArrowRight size={17}/></button>{done&&<p className="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-700"><CheckCircle2 size={17}/> WhatsApp should open with your enquiry. Send the message to submit it.</p>}<p className="mt-3 text-center text-[11px] leading-5 text-slate-400">By submitting, you agree that we may contact you about this enquiry.</p></form></div></section></main>;
}
