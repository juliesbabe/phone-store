import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">PhoneStore</h3>
          <p className="text-sm mb-4">
            Your trusted source for premium smartphones, laptops, and accessories.
            Quality guaranteed with fast delivery.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Example Street, Lagos, Nigeria</li>
            <li>📞 +234 800 000 0000</li>
            <li>✉️ support@phonestore.com</li>
            <li>🕒 Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; 2026 PhoneStore. All rights reserved.</p>
      </div>
    </footer>
  );
}