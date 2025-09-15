"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";
import Footer from "@/components/Footer";

// Lazy-load heavy sections
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const FurniturePriceCards = dynamic(() => import("@/components/FurniturePriceCards"), { ssr: true });
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"), { ssr: true });
const Reviews = dynamic(() => import("@/components/review-rating"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function HomePage() {
  return (
    <div className={`${inter.className} min-h-screen`}>
      {/* SEO */}
      <SEO 
        title="Dubai Villa Movers - Trusted Moving Services in UAE"
        description="Reliable furniture movers in Dubai, Abu Dhabi, Sharjah. Affordable, professional, and stress-free moving services. Get free quote!"
        url="https://www.DubaiVillaMovers.com"
        image="/root-bg.jpg"
      />

      {/* Header & Floating Buttons */}
      <Header />
      <WhatsAppFloat />
      <CallFloat />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <FurniturePriceCards />
        <ServiceAreas />
        <Reviews />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
