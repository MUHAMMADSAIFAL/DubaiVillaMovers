"use client";
import { useEffect, useState } from "react";
import {
  Bed,
  Package,
  Users,
  Truck,
  MoveDiagonal,
  Sofa,
  Armchair,
  FileBox,
  Briefcase,
  Building,
  Home,
  Shield,
} from "lucide-react";

const services = [
  { image: "/bed.png", icon: Bed, title: "Disassemble and Reassemble Furniture", link: "#contact" },
  { image: "/packing.png", icon: Package, title: "Furniture Packing", link: "#contact" },
  { image: "/watch.png", icon: Users, title: "Labor for Moving Furniture", link: "#contact" },
  { image: "/furniture.png", icon: Truck, title: "Furniture Transportation Services", link: "#contact" },
  { image: "/havy-farn.png", icon: MoveDiagonal, title: "Heavy Furniture Moving", link: "#contact" },
  { image: "/sofa.png", icon: Sofa, title: "Sofa & Couch Moving Service", link: "#contact" },
  { image: "/chair.png", icon: Armchair, title: "Small or Single Item Moving", link: "#contact" },
  { image: "/dresser.png", icon: FileBox, title: "Interstate Furniture Moving", link: "#contact" },
  { image: "/coffee-table.png", icon: Briefcase, title: "Commercial Furniture Moving", link: "#contact" },
  { image: "/desktop.png", icon: Building, title: "Office Furniture Moving", link: "#contact" },
  { image: "/shelves.png", icon: Home, title: "House Furniture Shifting", link: "#contact" },
  { image: "/bed-1.png", icon: Shield, title: "Domestic Furniture Moving", link: "#contact" },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            obs.unobserve(entry.target); // ✅ unobserve once visible (better perf)
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".service-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-12" aria-labelledby="services-title">
      <div className="container mx-auto px-3">
        {/* Heading */}
        <header className="text-center mb-12">
          <h2
            id="services-title"
            className="text-4xl font-bold mb-4 text-white"
          >
            Our Services
          </h2>
        </header>

        {/* Services Grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          role="list"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                data-index={index}
                role="listitem"
                className={`service-card bg-gradient-to-br from-emerald-400/70 to-teal-600/70 
                  hover:from-teal-700/80 hover:to-red-600/60
                  p-6 rounded-xl shadow-lg transform transition-all duration-700
                  hover:scale-105 group cursor-pointer
                  ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                onClick={() => {
                  if (service.link) {
                    const element = document.querySelector(service.link);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {/* Image/Icon Wrapper */}
                <div
                  className="rounded-lg p-3 w-20 h-20 flex items-center justify-center mb-4 mx-auto bg-white/10"
                  aria-hidden="true"
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy" // ✅ lazy load for perf
                      decoding="async"
                    />
                  ) : (
                    <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-[#83BFED] text-center group-hover:text-white transition-colors">
                  {service.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
