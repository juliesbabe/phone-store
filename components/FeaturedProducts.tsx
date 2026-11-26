import ProductCard from "./ProductCard";

// This is our "Mock Data" — fake products to test our design.
// Later, this will come from your Supabase database.
const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    brand: "Apple",
    storage: "128GB",
    condition: "Brand New",
    price: "₦450,000",
    image: "📱",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    storage: "256GB",
    condition: "UK Used",
    price: "₦320,000",
    image: "📱",
  },
  {
    id: 3,
    name: "MacBook Air M1",
    brand: "Apple",
    storage: "256GB SSD",
    condition: "Fairly Used",
    price: "₦550,000",
    image: "💻",
  },
  {
    id: 4,
    name: "AirPods Pro",
    brand: "Apple",
    storage: "Wireless Case",
    condition: "Brand New",
    price: "₦120,000",
    image: "🎧",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Check out our latest arrivals and best deals
        </p>

        {/* The Grid of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* We loop through the 'products' list and create a card for each one */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              storage={product.storage}
              condition={product.condition}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}