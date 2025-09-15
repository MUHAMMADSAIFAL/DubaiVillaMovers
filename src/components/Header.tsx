"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isLogoRounded, setIsLogoRounded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Optimized scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Offers", href: "#FurniturePriceCards" },
      { label: "Service Areas", href: "#areas" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#contact" },
    ],
    []
  );

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
      setIsLogoRounded(true);
      setIsMenuOpen(false);
    }
  }, []);

  const headerClass = cn(
    "sticky top-0 z-50 transition-all duration-300",
    isScrolled
      ? "bg-teal-500 shadow-lg text-black"
      : "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white"
  );

  // Prevent hydration mismatch - don't render until mounted
  if (!isMounted) {
    return (
      <>
        {/* Top Contact Bar */}
        <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white py-2 px-3 w-full flex items-center gap-6 sm:justify-center md:justify-evenly h-12 text-sm">
          <div className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">United Arab Emirates</span>
            <span className="inline sm:hidden">UAE</span>
          </div>

          <a
            href="tel:+923421712536"
            className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition"
          >
            <Phone className="w-4 h-4" />
            <span>+92 342 1712536</span>
          </a>

          <a
            href="mailto:saifalkhursheed@gmail.com"
            className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">saifalkhursheed@gmail.com</span>
            <span className="inline sm:hidden">Email</span>
          </a>
        </div>

        {/* Main Header - Static version during SSR */}
        <header className={headerClass}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo + Title */}
              <div className="flex items-center gap-3">
                <Image
                  src="/sofa.jpg"
                  alt="Dubai Villa Movers"
                  width={48}
                  height={48}
                  className="h-10 w-10 drop-shadow-md transition-all duration-500 rounded-sm"
                  priority
                />
                <span className="text-lg sm:text-xl font-bold text-white">
                  Dubai Villa Movers
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    className="px-4 py-2 rounded-xl font-medium transition-all duration-700 transform hover:scale-105 hover:bg-gradient-to-br hover:from-red-700/80 hover:to-red-600/60"
                    suppressHydrationWarning
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden block p-2 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white"
                aria-label="Toggle menu"
                suppressHydrationWarning
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white py-2 px-3 w-full flex items-center gap-6 sm:justify-center md:justify-evenly h-12 text-sm">
        <div className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition">
          <MapPin className="w-4 h-4" />
          <span className="hidden sm:inline">United Arab Emirates</span>
          <span className="inline sm:hidden">UAE</span>
        </div>

        <a
          href="tel:+923421712536"
          className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition"
        >
          <Phone className="w-4 h-4" />
          <span>+92 342 1712536</span>
        </a>

        <a
          href="mailto:saifalkhursheed@gmail.com"
          className="flex items-center gap-2 hover:bg-white/20 px-2 py-1 rounded-lg transition"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">saifalkhursheed@gmail.com</span>
          <span className="inline sm:hidden">Email</span>
        </a>
      </div>

      {/* Main Header */}
      <header className={headerClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <Image
                src="/WhatsApp.jpg"
                alt="Dubai Villa Movers"
                width={48}
                height={48}
                className={cn(
                  "h-10 w-10 drop-shadow-md transition-all duration-500",
                  isLogoRounded ? "rounded-md" : "rounded-sm"
                )}
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                Dubai Villa Movers
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  className={cn(
                    "px-4 py-2 rounded-xl font-medium transition-all duration-700 transform hover:scale-105",
                    activeSection === item.href
                      ? "bg-gradient-to-br from-emerald-400/70 to-teal-600/70 shadow-lg"
                      : "hover:bg-gradient-to-br hover:from-red-700/80 hover:to-red-600/60"
                  )}
                  suppressHydrationWarning
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden block p-2 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              suppressHydrationWarning
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden bg-gradient-to-br from-teal-500/95 to-blue-600/95 backdrop-blur-md shadow-lg rounded-b-lg px-6 py-4 space-y-3"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeSection === item.href ? "page" : undefined}
                className={cn(
                  "block w-full text-left px-4 py-2 rounded-xl font-medium text-white transition-all duration-700 transform hover:scale-105",
                  activeSection === item.href
                    ? "bg-gradient-to-br from-emerald-400/70 to-teal-600/70 shadow-lg"
                    : "hover:bg-gradient-to-br hover:from-red-700/80 hover:to-red-600/60"
                )}
                suppressHydrationWarning
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;