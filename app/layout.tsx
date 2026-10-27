import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Jaya Sri Technologies | Buy, Sell & Repair Laptops",
  description: "Shop quality used and refurbished laptops, sell your old laptop, or enquire about laptop servicing and chip-level repairs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
