import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// This page now uses live data, so don't pre-build it.
export const instant = false;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}