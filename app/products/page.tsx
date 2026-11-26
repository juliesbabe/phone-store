"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "iPhones", "Android Phones", "Laptops", "Tablets", "Accessories"];

export default function ProductsPage() {
  // State for the category buttons
  const [activeCategory, setActiveCategory] = useState("All");
  // State for the search bar (starts empty)
  const [searchTerm, setSearchTerm] = useState("");

  // The Filter Logic:
  const filteredProducts = products.filter((product) => {
    // Rule 1: Does it match the category?
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    
    // Rule 2: Does it match the search text?
    // We use .toLowerCase() on both so "samsung" matches "Samsung"
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // The product must pass BOTH rules to be shown
    return matchesCategory && matchesSearch;
  });

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

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search for a product (e.g. iPhone, Samsung)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No products found. Try a different search or category.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}