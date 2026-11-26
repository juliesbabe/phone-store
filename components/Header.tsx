// This is your Header component. It will appear at the top of your website.
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Store Logo / Name */}
        <h1 className="text-2xl font-bold text-gray-900">
          PhoneStore
        </h1>

        {/* Navigation Links (Hidden on small mobile screens for now) */}
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition-colors">Products</a>
          <a href="#" className="hover:text-black transition-colors">Categories</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>

        {/* WhatsApp Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition-colors">
          WhatsApp Us
        </button>
      </div>
    </header>
  );
}