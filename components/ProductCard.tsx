import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  storage: string;
  condition: string;
  price: string;
  image: string;
}

export default function ProductCard({ id, name, brand, storage, condition, price, image }: ProductCardProps) {
  return (
    // The whole card is now a link to /products/{id}
    <Link
      href={`/products/${id}`}
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Product Image */}
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase">{brand}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${condition === "Brand New" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {condition}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{storage}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <span className="bg-green-500 text-white text-sm px-3 py-2 rounded-md">
            Enquire
          </span>
        </div>
      </div>
    </Link>
  );
}