// Single source of truth for all products. Both the homepage (featured only)
// and the /products catalog page (everything) read from this array.
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: string;
  condition: string;
  storage: string;
  ram?: string;
  image: string;
  available: boolean;
  featured: boolean;
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
  {
    id: 5,
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    category: "Android Phones",
    description:
      "Brand new Samsung Galaxy A54 with a vibrant 6.4\" display and long-lasting battery. Great value mid-range phone.",
    price: "₦250,000",
    condition: "Brand New",
    storage: "128GB",
    ram: "6GB",
    image: "📱",
    available: true,
    featured: false,
  },
  {
    id: 6,
    name: "iPad 9th Gen",
    brand: "Apple",
    category: "Tablets",
    description:
      "UK-used iPad 9th generation in great condition. Perfect for notes, streaming, and light work.",
    price: "₦280,000",
    condition: "UK Used",
    storage: "64GB",
    ram: "3GB",
    image: "📟",
    available: true,
    featured: false,
  },
];