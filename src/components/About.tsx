"use client";

import { Button } from "@/components/ui/button";
import { Users, Truck, Award, MessageCircle, Clock, Phone } from "lucide-react";
import Image from "next/image";

const About = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 via-white to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          <div>
            {/* Gradient Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-snug">
              We&apos;re Your Moving Partner in UAE
            </h2>

            <div className="text-base sm:text-lg md:text-2xl leading-relaxed text-black">
              <p className="mb-4 sm:mb-6">
                We provide all-in-one furniture moving services tailored to your
                needs. Whether short-distance or long-distance moves, heavy or
                small furniture — we&apos;ve got you covered.
              </p>
              <p className="mb-4 sm:mb-6">
                Our team handles your moving requirements with care,
                professionalism, and efficiency.
              </p>
            </div>

            {/* Services Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-lg p-2 sm:p-3">
                  <Truck
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 text-base sm:text-lg">
                    Short Distance Moving
                  </h3>
                  <p className="text-xs sm:text-sm text-black">
                    Local moves within the city
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2 sm:p-3">
                  <Award
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1 text-base sm:text-lg">
                    Long-Distance Moving
                  </h3>
                  <p className="text-xs sm:text-sm text-black">
                    Interstate and intercity transport
                  </p>
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-black text-sm sm:text-base md:text-lg font-semibold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Professional packing &amp; moving expertise
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                350+ staff &amp; 20+ vehicles (vans &amp; trucks)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Affordable prices with discount offers
              </li>
            </ul>

            {/* CTA Button */}
            <Button
              onClick={scrollToServices}
              aria-label="Read more about our services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Read More
            </Button>
          </div>

          {/* Optimized Image */}
          <div className="relative">
            <Image
              src="/about-image.jpg"
              alt="Professional moving team in Dubai"
              width={600}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            About Our Company
          </h2>
          <div className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-black leading-relaxed font-semibold">
            <p className="mb-4 sm:mb-6">
              Dubai Villa Movers has been a leading moving company in UAE since
              2010. We&apos;ve delivered professional packing and moving services
              across the Emirates.
            </p>
            <p>
              With trained staff and a fleet of vehicles, we offer affordable &amp;
              reliable relocation for homes and businesses.
            </p>
          </div>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {[
            {
              icon: (
                <MessageCircle
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  aria-hidden="true"
                />
              ),
              title: "Free Consultations",
              desc: "Get free moving advice and tailored solutions.",
            },
            {
              icon: (
                <Users
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  aria-hidden="true"
                />
              ),
              title: "Professional Team",
              desc: "Our experts ensure a stress-free experience.",
            },
            {
              icon: (
                <Clock
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  aria-hidden="true"
                />
              ),
              title: "24/7 Support",
              desc: "Available around the clock to help our clients.",
            },
            {
              icon: (
                <Phone
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  aria-hidden="true"
                />
              ),
              title: "Call Us Anytime",
              desc: "Expert advice and free quotes — ready to assist!",
              phone: "+923421712536",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative cursor-pointer bg-gradient-to-br from-emerald-400/70 to-teal-600/70 hover:from-blue-700/80 hover:to-blue-600/60 p-6 sm:p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 border border-white/20 flex flex-col items-center text-center"
            >
              <div className="bg-white/20 rounded-full p-4 sm:p-6 w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 text-black group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-md text-black group-hover:text-gray-100 mb-2 sm:mb-4 max-w-xs">
                {feature.desc}
              </p>
              {feature.phone && (
                <a
                  href={`tel:${feature.phone}`}
                  aria-label={`Call us at ${feature.phone}`}
                  className="text-base sm:text-lg md:text-xl font-bold text-black group-hover:text-white"
                >
                  {feature.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
