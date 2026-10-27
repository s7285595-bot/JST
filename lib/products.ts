export type Laptop = {
  id: string;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  condition: "Refurbished" | "Used";
  price: number;
  image: string;
  status: "Available" | "Reserved" | "Sold";
  featured?: boolean;
};

export const starterProducts: Laptop[] = [
  { id: "JST-101", brand: "Dell", model: "Latitude 5420", processor: "Intel Core i5 11th Gen", ram: "8GB RAM", storage: "256GB SSD", condition: "Refurbished", price: 24999, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=85", status: "Available", featured: true },
  { id: "JST-102", brand: "HP", model: "EliteBook 840 G7", processor: "Intel Core i5 10th Gen", ram: "16GB RAM", storage: "512GB SSD", condition: "Refurbished", price: 27999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85", status: "Available", featured: true },
  { id: "JST-103", brand: "Lenovo", model: "ThinkPad T480", processor: "Intel Core i5 8th Gen", ram: "8GB RAM", storage: "256GB SSD", condition: "Used", price: 16999, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=85", status: "Available", featured: true },
  { id: "JST-104", brand: "Apple", model: "MacBook Air", processor: "Apple M1", ram: "8GB RAM", storage: "256GB SSD", condition: "Used", price: 42999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85", status: "Reserved" }
];

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}
