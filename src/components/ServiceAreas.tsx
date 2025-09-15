"use client";
import { MapPin, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const areas = [
  { name: "Sharjah", available: true },
  { name: "Dubai", available: true },
  { name: "Abu Dhabi", available: true },
  { name: "Ajman", available: true },
  { name: "Ras Al Khaimah", available: true },
  { name: "Fujairah", available: true },
];

const ServiceAreas = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Animate cards on mount (requestAnimationFrame is smoother than setTimeout)
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisibleCards(areas.map((_, i) => i));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="areas"
      className="py-10 sm:py-14 md:py-16 bg-secondary/30 bg-cover bg-center bg-no-repeat rounded-2xl mx-4 sm:mx-6 md:mx-8"
      aria-labelledby="areas-title"
      style={{ backgroundImage: "url('/services.jpg')" }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Heading */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="areas-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-white leading-tight"
          >
            Our Service Areas
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            We are providing services in all states of United Arab Emirates
          </p>
        </header>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12"
          role="list"
        >
          {areas.map((area, index) => (
            <li
              key={area.name}
              role="listitem"
              className={`cursor-pointer 
                bg-gradient-to-br from-emerald-400/70 to-teal-600/70 
                hover:from-teal-700/80 hover:to-emerald-600/80
                p-4 sm:p-5 md:p-6 rounded-xl shadow-lg transform transition-all duration-700 
                hover:scale-105 group border border-border/40
                ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Icon */}
                <div
                  className="bg-primary/10 rounded-lg p-2 sm:p-3 group-hover:bg-primary/20 
                             transition-colors flex items-center justify-center"
                  aria-hidden="true"
                >
                  <MapPin
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors"
                    aria-label="Location pin"
                  />
                </div>

                {/* Title + Status */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-1 group-hover:text-white transition-all duration-300">
                    {area.name}
                  </h3>
                  {area.available && (
                    <p className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-gray-100 transition-colors">
                      <CheckCircle
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent group-hover:text-white"
                        aria-hidden="true"
                      />
                      <span>Service Available</span>
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceAreas;
