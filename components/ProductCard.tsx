// This is a reusable Product Card component.
// It accepts "props" (properties) which are the details of a specific product.
interface ProductCardProps {
  name: string;
  brand: string;
  storage: string;
  condition: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, brand, storage, condition, price, image }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Brand and Condition badge */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase">{brand}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${condition === "Brand New" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {condition}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>

        {/* Storage */}
        <p className="text-sm text-gray-600 mb-4">{storage}</p>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <button className="bg-green-500 text-white text-sm px-3 py-2 rounded-md hover:bg-green-600 transition-colors">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}