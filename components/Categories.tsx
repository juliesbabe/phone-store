// This is the Categories section. It shows the main product types.
export default function Categories() {
  // This is a list of categories. Each one has a name and an icon (emoji for now).
  const categories = [
    { name: "iPhones", icon: "📱" },
    { name: "Samsung", icon: "📱" },
    { name: "Android Phones", icon: "📱" },
    { name: "Tablets", icon: "📟" },
    { name: "Laptops", icon: "💻" },
    { name: "Smartwatches", icon: "⌚" },
    { name: "Accessories", icon: "🎧" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Shop by Category
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse our wide selection of premium devices and accessories
        </p>

        {/* Grid of category cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg hover:border-green-500 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}