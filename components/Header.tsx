// We import our store settings from the single config file.
import { storeConfig } from "@/lib/storeConfig";

export default function Header() {
  // We build the WhatsApp link from the config values.
  // encodeURIComponent turns spaces into %20 so the URL stays valid.
  const whatsappLink = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(storeConfig.whatsappMessage)}`;

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Store name now comes from the config file */}
        <h1 className="text-2xl font-bold text-gray-900">
          {storeConfig.storeName}
        </h1>

        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition-colors">Products</a>
          <a href="#" className="hover:text-black transition-colors">Categories</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>

        {/* A real link now, not a dummy button */}
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