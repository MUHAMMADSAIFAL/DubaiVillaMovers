"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in your moving services. Can you provide me with more information?`;
    const phoneNumber = "923421712536"; // ✅ no plus sign
    
    // Detect mobile vs desktop (only on client-side)
    const isMobile =
      typeof window !== "undefined" &&
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Don't render anything until mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-24 sm:top-34 md:top-32 lg:top-36 left-3 sm:left-4 z-40 group">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        aria-label="Chat on WhatsApp"
        className="rounded-full shadow-lg transform transition-transform duration-500
                   hover:scale-110 border border-white/20 flex items-center justify-center
                   text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                   bg-[url('/WhatsApp.jpg')] bg-cover bg-center"
      />

      {/* Tooltip */}
      <span
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 sm:mt-3
                   text-xs sm:text-sm md:text-base lg:text-lg font-medium
                   px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2
                   text-white rounded-2xl shadow-lg border border-black/20
                   bg-gradient-to-br from-emerald-400/80 to-teal-600/80
                   transition-opacity duration-500 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap"
      >
        WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppFloat;