"use client";

import { useState } from "react";
import { PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-24 sm:top-28 md:top-32 right-3 sm:right-4 z-[200]">
      {/* Floating Button */}
      <Button
        aria-label="Call us"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 
                   bg-gradient-to-br from-emerald-500 to-teal-600 
                   hover:from-blue-600 hover:to-purple-600
                   text-white 
                   px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 
                   rounded-xl sm:rounded-2xl shadow-lg 
                   transform transition-transform duration-300 hover:scale-105 
                   border border-white/20"
      >
        <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
        <span className="text-sm sm:text-base md:text-lg font-semibold">Phone</span>
      </Button>

      {/* Tooltip / Dialog */}
      {isOpen && (
        <div
          className="absolute right-0 mt-3 sm:mt-4 w-56 sm:w-64 md:w-72 
                     bg-gradient-to-br from-emerald-500 to-teal-600 
                     text-white 
                     p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg 
                     transform transition-transform duration-300 scale-100 
                     border border-white/20"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-2">
              <PhoneCall
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                aria-hidden="true"
              />
              <span className="font-semibold text-sm sm:text-base md:text-lg">
                Phone
              </span>
            </div>
            <button
              aria-label="Close phone dialog"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 hover:bg-red-700 rounded-full p-1"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>

          {/* Number */}
          <p className="text-base sm:text-lg md:text-xl font-bold">
            +92 342 1712536
          </p>

          {/* Call button */}
          <a
            href="tel:+923421712536"
            className="block mt-3 sm:mt-4 w-full text-center bg-white text-black font-semibold 
                       text-sm sm:text-base md:text-lg 
                       py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Call Now
          </a>
        </div>
      )}
    </div>
  );
};

export default CallFloat;
