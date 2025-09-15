import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Dubai Villa Movers - Professional Furniture Movers in UAE | Trusted Moving Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Professional furniture movers in UAE. Quick, stress-free, and affordable moving services. Expert packing, transportation, and delivery across Dubai, Abu Dhabi, Sharjah. Get free quote!"
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      
    </div>
  );
};

export default Index;