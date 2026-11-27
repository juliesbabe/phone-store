"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabaseClient";

const categories = ["All", "iPhones", "Android Phones", "Laptops", "Tablets", "Accessories"];
const conditions = ["All", "Brand New", "UK Used", "Fairly Used"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCondition, setActiveCondition] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // FIXED: tell TypeScript this list holds product objects (any[])
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product: any) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesCondition = activeCondition === "All" || product.condition === activeCondition;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesCondition && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600 mb-8">
            Browse our full catalog of devices and accessories
          </p>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category ? "bg-green-500 text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {conditions.map((condition) => (
              <button
                key={condition}
                onClick={() => setActiveCondition(condition)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCondition === condition ? "bg-slate-800 text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {condition}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                storage={product.storage}
                condition={product.condition}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No products found.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}