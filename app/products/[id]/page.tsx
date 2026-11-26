import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products } from "@/lib/products";
import { storeConfig } from "@/lib/storeConfig";

export const instant = false;

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Find the product whose id matches the number in the URL.
  // Number(id) turns the text "1" into the number 1 so we can compare.
  const product = products.find((p) => p.id === Number(id));

  // EMPTY STATE: if nothing matches, show a friendly page instead of crashing.
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
          <p className="text-gray-600">Sorry, we couldn't find a product with that number.</p>
          <Link href="/" className="text-green-600 hover:underline">← Back to home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Build a WhatsApp message that mentions THIS exact product.
  const enquiryMessage = `Hello! I'm interested in the ${product.name} (${product.storage}, ${product.condition}) listed at ${product.price}. Is it available?`;
  const whatsappLink = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

  // Badge color: green for new, yellow for used.
  const conditionColor = product.condition === "Brand New"
    ? "bg-green-100 text-green-700"
    : "bg-yellow-100 text-yellow-700";

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-1 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-8">
            ← Back to products
          </Link>

          {/* Two columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Image panel */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center h-80 md:h-full min-h-[320px]">
              <span className="text-[120px]">{product.image}</span>
            </div>

            {/* Details panel */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-500 uppercase">{product.brand}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${conditionColor}`}>{product.condition}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              <p className="text-3xl font-bold text-gray-900">{product.price}</p>

              {/* Availability indicator */}
              <div className="flex items-center gap-2 text-sm font-medium">
                {product.available ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="text-green-700">In stock — ready for delivery</span>
                  </>
                ) : (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="text-red-700">Currently sold out</span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Specs table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 bg-gray-100 text-xs font-semibold uppercase text-gray-500">
                  <div className="px-4 py-2">Specification</div>
                  <div className="px-4 py-2">Detail</div>
                </div>
                <div className="grid grid-cols-2 text-sm">
                  <div className="px-4 py-3 border-t border-gray-200 text-gray-600">Storage</div>
                  <div className="px-4 py-3 border-t border-gray-200 font-medium text-gray-900">{product.storage}</div>
                  {product.ram && (
                    <>
                      <div className="px-4 py-3 border-t border-gray-200 text-gray-600">RAM</div>
                      <div className="px-4 py-3 border-t border-gray-200 font-medium text-gray-900">{product.ram}</div>
                    </>
                  )}
                  <div className="px-4 py-3 border-t border-gray-200 text-gray-600">Condition</div>
                  <div className="px-4 py-3 border-t border-gray-200 font-medium text-gray-900">{product.condition}</div>
                </div>
              </div>

              {/* Product-specific WhatsApp enquiry button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-green-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-green-600 transition-colors shadow-lg text-center"
              >
                Enquire on WhatsApp
              </a>

              <p className="text-xs text-gray-500 text-center">
                Free delivery • Payment on delivery • Quality guaranteed
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}