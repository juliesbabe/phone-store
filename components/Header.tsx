import { storeConfig } from "@/lib/storeConfig";
import Link from "next/link";

export default function Header() {
  const whatsappLink = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(storeConfig.whatsappMessage)}`;

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Clicking the logo/name goes to the home page */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          {storeConfig.storeName}
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          {/* "Products" now links to the real catalog page */}
          <Link href="/products" className="hover:text-black transition-colors">Products</Link>
          <a href="#" className="hover:text-black transition-colors">Categories</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>

        {/* External link (WhatsApp) stays a normal <a> */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </header>
  );
}