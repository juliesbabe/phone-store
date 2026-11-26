import { storeConfig } from "@/lib/storeConfig";

export default function ContactSection() {
  const whatsappLink = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent("Hello! I need help with an order.")}`;

  return (
    // The id="contact" is what the header/footer links will jump to.
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question or want to place an order? Reach out to us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Box */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📍 Visit Our Store</h3>
              <p className="text-gray-600">123 Example Street, Lagos, Nigeria</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📞 Call Us</h3>
              <p className="text-gray-600">+234 800 000 0000</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">✉️ Email Us</h3>
              <p className="text-gray-600">support@phonestore.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">🕒 Opening Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* WhatsApp CTA Box */}
          <div className="bg-slate-900 p-8 rounded-xl text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Fastest Way to Reach Us</h3>
            <p className="text-gray-300 mb-8">
              Chat with us directly on WhatsApp for quick responses, product inquiries, and order updates.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-green-600 transition-colors shadow-lg w-full md:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}