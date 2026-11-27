import ProductCard from "./ProductCard";
import { supabase } from "@/lib/supabaseClient";

export default async function FeaturedProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true);

  if (error) {
    console.error("Supabase error:", error);
    return (
      <div className="text-center p-10">
        <p className="text-red-600 font-semibold mb-2">Error loading products.</p>
        <p className="text-sm text-gray-600 break-all">
          Reason: {error.message || "unknown"} &nbsp;|&nbsp; Code: {error.code || "none"}
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Check out our latest arrivals and best deals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              storage={product.storage}
              condition={product.condition}
              price={product.price}
              image={product.image}
              image_url={product.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}