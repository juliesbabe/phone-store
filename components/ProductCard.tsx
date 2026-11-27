import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  storage: string;
  condition: string;
  price: string;
  image: string;
  image_url?: string; // New field for real images
}

export default function ProductCard({ id, name, brand, storage, condition, price, image, image_url }: ProductCardProps) {
  const conditionColor = condition === "Brand New" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700";

  return (
    <Link href={`/products/${id}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="bg-gray-50 h-48 flex items-center justify-center overflow-hidden">
        {image_url ? (
          <img src={image_url} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <span className="text-6xl">{image}</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase">{brand}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${conditionColor}`}>{condition}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{storage}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900">{price}</span>
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Enquire</span>
        </div>
      </div>
    </Link>
  );
}