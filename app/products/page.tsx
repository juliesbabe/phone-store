"use client"; // This line MUST be first. It tells Next.js this page needs interactivity.

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

// The list of categories we want buttons for.
const categories = ["All", "iPhones", "Android Phones", "Laptops", "Tablets", "Accessories"];

export default function ProductsPage() {
  // "activeCategory" remembers the current selection. It starts as "All".
  // "setActiveCategory" is the tool we use to change it.
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter the products:
  // If "All" is selected, show everything.
  // Otherwise, only keep products where the category matches the button clicked.
  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((product) => product.category === activeCategory);

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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-white" // Active button style
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100" // Inactive button style
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid (now uses filteredProducts instead of all products) */}
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

          {/* Empty State: if a category has no products */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No products found in this category.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}