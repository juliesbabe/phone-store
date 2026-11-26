// This is the Hero section — the first big thing visitors see.
// It's designed to grab attention and push them to take action.
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Phones & Accessories
          <br />
          <span className="text-green-400">At Unbeatable Prices</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Brand new, UK-used, and fairly-used smartphones, laptops, and accessories. 
          Quality guaranteed with fast delivery to your doorstep.
        </p>

        {/* Call-to-action button */}
        <button className="bg-green-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
          Shop Now on WhatsApp
        </button>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>Payment on Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>Quality Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}