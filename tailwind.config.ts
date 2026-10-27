import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#10243A", brand: "#176B87", mint: "#DFF5EE" }, boxShadow: { soft: "0 18px 50px rgba(16,36,58,.09)" } } },
  plugins: []
};
export default config;
