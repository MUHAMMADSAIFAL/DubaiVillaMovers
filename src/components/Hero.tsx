"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  // ✅ Memoized scroll handler
  const scrollToContact = useCallback(() => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center"
      role="banner"
      aria-label="Dubai Villa Movers Hero Section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-background.jpg"
          alt="Dubai movers background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl text-center md:text-left">
          {/* Welcome Text */}
          <p className="mb-4 sm:mb-6 text-accent text-base sm:text-lg md:text-xl font-semibold animate-slide-in">
            Welcome to Dubai Villa Movers
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight text-blue-600 drop-shadow-lg animate-slide-in delay-100">
            Dubai Villa Movers in{" "}
            <span className="text-accent">United Arab Emirates</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 font-medium animate-slide-in delay-200">
            Your Trusted Partner for Quick, Stress-Free, and Affordable Moving
            Services!
          </p>

          {/* CTA Button */}
          <div className="mb-8 sm:mb-12 animate-slide-in delay-300">
            <Button
              onClick={scrollToContact}
              aria-label="Book your moving service now"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 
                         text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 
                         rounded-xl shadow-lg transform transition-all duration-300 
                         hover:scale-110 hover:shadow-xl group"
            >
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto md:mx-0">
            {[
              {
                href: "/plan-pack",
                icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />,
                title: "We Make it Faster",
                subtitle: "Plan and Pack",
              },
              {
                href: "/safe-secure",
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />,
                title: "Safe & Secure Move",
                subtitle: "Load",
              },
              {
                href: "/on-time-delivery",
                icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />,
                title: "On-Time Delivery",
                subtitle: "Delivery",
              },
            ].map(({ href, icon, title, subtitle }) => (
              <Link key={title} href={href} aria-label={title}>
                <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="bg-accent/20 rounded-full p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-1 sm:mb-2">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-foreground/80">
                    {subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
