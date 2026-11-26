// This is the "Why Choose Us" section. It builds trust with customers.
export default function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      description: "We deliver to your doorstep at no extra cost within Lagos.",
    },
    {
      icon: "💰",
      title: "Payment on Delivery",
      description: "Pay only when you receive and inspect your product.",
    },
    {
      icon: "✅",
      title: "Quality Guaranteed",
      description: "All products are thoroughly tested before delivery.",
    },
    {
      icon: "🔄",
      title: "7-Day Return Policy",
      description: "Not satisfied? Return within 7 days for a full refund.",
    },
    {
      icon: "📞",
      title: "24/7 Customer Support",
      description: "Reach us anytime via WhatsApp for quick assistance.",
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "Your payment and personal information are always safe.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We are committed to providing the best shopping experience
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-4xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}