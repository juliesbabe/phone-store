"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

// Helper: auto-format price with commas and ₦
// e.g. "450000" → "₦450,000"
const formatPrice = (value: string) => {
  const digits = value.replace(/\D/g, ""); // strip everything except digits
  const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return withCommas ? `₦${withCommas}` : "";
};

export default function Dashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "iPhones",
    description: "",
    price: "",
    condition: "Brand New",
    storage: "",
    ram: "",
    image: "📱",
    image_url: "",
    available: true,
    featured: false,
  });

  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });
    if (error) setErrorMsg(error.message);
    else if (data) setProducts(data);
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) alert("Delete failed: " + error.message);
    else fetchProducts();
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      brand: product.brand,
      category: product.category,
      description: product.description || "",
      price: product.price || "",
      condition: product.condition,
      storage: product.storage,
      ram: product.ram || "",
      image: product.image || "📱",
      image_url: product.image_url || "",
      available: product.available,
      featured: product.featured,
    });
    setEditingId(product.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle image file upload to Supabase Storage
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Create a unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

      // Upload to the "product-images" bucket
      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data } = supabase.storage.from("product-images").getPublicUrl(fileName);
      const publicUrl = data.publicUrl;

      // Save the URL in the form
      setFormData({ ...formData, image_url: publicUrl });
      alert("✅ Image uploaded!");
    } catch (err: any) {
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handlePriceChange = (value: string) => {
    // Auto-format as user types
    setFormData({ ...formData, price: formatPrice(value) });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let error;
    if (editingId) {
      const res = await supabase.from("products").update(formData).eq("id", editingId);
      error = res.error;
    } else {
      const res = await supabase.from("products").insert([formData]);
      error = res.error;
    }

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert(editingId ? "✅ Product updated!" : "✅ Product added!");
      resetForm();
      fetchProducts();
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      name: "", brand: "", category: "iPhones", description: "", price: "",
      condition: "Brand New", storage: "", ram: "", image: "📱", image_url: "",
      available: true, featured: false,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 mb-6"
        >
          + Add New Product
        </button>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? "Edit Product" : "Add New Product"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Product Name" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="p-3 border rounded" required />
                <input type="text" placeholder="Brand" value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="p-3 border rounded" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="p-3 border rounded">
                  <option value="iPhones">iPhones</option>
                  <option value="Android Phones">Android Phones</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {/* PRICE: auto-formats with ₦ and commas */}
                <input type="text" placeholder="Price (just type digits, e.g. 450000)"
                  value={formData.price}
                  onChange={(e) => handlePriceChange(e.target.value)}
                  className="p-3 border rounded" required />
              </div>

              <textarea placeholder="Description" value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 border rounded" rows={2} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="p-3 border rounded">
                  <option value="Brand New">Brand New</option>
                  <option value="UK Used">UK Used</option>
                  <option value="Fairly Used">Fairly Used</option>
                </select>
                <input type="text" placeholder="Storage (e.g. 128GB)" value={formData.storage}
                  onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
                  className="p-3 border rounded" required />
                <input type="text" placeholder="RAM (e.g. 6GB)" value={formData.ram}
                  onChange={(e) => setFormData({ ...formData, ram: e.target.value })}
                  className="p-3 border rounded" />
              </div>

              {/* IMAGE UPLOAD */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {uploading && <p className="text-sm text-blue-600 mt-2">Uploading...</p>}
                {formData.image_url && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Preview:</p>
                    <img src={formData.image_url} alt="Preview" className="h-24 rounded border" />
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Or enter an emoji fallback:
                  <input type="text" value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="ml-2 p-1 border rounded w-20" />
                </p>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.available}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                    className="w-5 h-5" />
                  Available
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5" />
                  Featured on Homepage
                </label>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700">
                  {editingId ? "Update Product" : "Add Product"}
                </button>
                <button type="button" onClick={resetForm}
                  className="px-6 bg-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PRODUCT LIST with image thumbnails */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Current Products ({products.length})</h2>

          {errorMsg && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong>Error:</strong> {errorMsg}
            </div>
          )}

          {products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-4 border-b pb-4">
                  {/* Image thumbnail */}
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl">{product.image || "📱"}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.brand} - {product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(product)}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-200">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(product.id)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}