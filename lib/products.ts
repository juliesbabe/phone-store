// This file is the single source of truth for your product listings.
// Both the homepage and (later) the product detail pages read from here.
// When we connect Supabase, we will replace this array with a database query.

// This "interface" is a form template: every product must have these fields.
export interface Product {
  id: number;            // A unique number for each product (used for links)
  name: string;          // e.g. "iPhone 13 Pro"
  brand: string;         // e.g. "Apple"
  category: string;      // e.g. "iPhones"
  description: string;   // Longer text shown on the product detail page
  price: string;         // The display price, e.g. "₦450,000"
  condition: string;     // "Brand New", "UK Used", or "Fairly Used"
  storage: string;       // e.g. "128GB"
  ram?: string;          // The "?" means optional — not every device lists RAM
  image: string;         // For now an emoji; later a real photo URL
  available: boolean;    // true = in stock, false = sold out
  featured: boolean;     // true = show on the homepage
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    brand: "Apple",
    category: "iPhones",
    description:
      "The iPhone 13 Pro features a stunning Super Retina XDR display, a Pro camera system, and the A15 Bionic chip. Brand new, factory sealed.",
    price: "₦450,000",
    condition: "Brand New",
    storage: "128GB",
    ram: "6GB",
    image: "📱",
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    category: "Android Phones",
    description:
      "UK-used Samsung Galaxy S22 in excellent condition. Fully tested, no faults, comes with charger.",
    price: "₦320,000",
    condition: "UK Used",
    storage: "256GB",
    ram: "8GB",
    image: "📱",
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: "MacBook Air M1",
    brand: "Apple",
    category: "Laptops",
    description:
      "Fairly used MacBook Air with the M1 chip. Battery health 90%. Light scratches on the body, screen perfect.",
    price: "₦550,000",
    condition: "Fairly Used",
    storage: "256GB SSD",
    ram: "8GB",
    image: "💻",
    available: true,
    featured: true,
  },
  {
    id: 4,
    name: "AirPods Pro",
    brand: "Apple",
    category: "Accessories",
    description:
      "Brand new AirPods Pro with wireless charging case. Genuine Apple product.",
    price: "₦120,000",
    condition: "Brand New",
    storage: "Wireless Case",
    image: "🎧",
    available: true,
    featured: true,
  },
];