import React, { useState } from "react";

export default function FurniturePriceCards({ phone = "+923421712536" }) {
  const allPlans = [
    {
      id: "small-single",
      tag: "Small Single Item",
      description: "Fridge, Washing Machine, Mattress etc",
      price: "AED 150",
      vehicle: "Van",
      labors: "2 Labors",
      services: ["Loading", "Unloading"],
      note:
        "The prices are valid within the state. For interstate moves, an additional 25% charge will apply.",
      badge: "Special",
    },
    {
      id: "big-single",
      tag: "Big Single Item",
      description: "Sofa set, Furniture set etc",
      price: "AED 250",
      vehicle: "Van",
      labors: "4 Labors",
      services: ["Loading", "Unloading"],
      note:
        "The prices are valid within the state. For interstate moves, an additional 25% charge will apply.",
      badge: "Popular",
    },
    {
      id: "all-furniture",
      tag: "All Furniture",
      description: "Any Type of Furniture",
      price: "AED 800",
      vehicle: "3 Ton Truck",
      labors: "6 Labors",
      services: ["Loading", "Unloading"],
      note:
        "The prices are valid within the state. For interstate moves, an additional 25% charge will apply.",
      badge: "Advance",
    },
    {
      id: "office-move",
      tag: "Office Relocation",
      description: "Office furniture, chairs, tables, cabinets etc",
      price: "AED 1200",
      vehicle: "5 Ton Truck",
      labors: "8 Labors",
      services: ["Loading", "Unloading", "Arrangement"],
      note:
        "For large office moves, inspection may be required before final booking.",
      badge: "Business",
    },
    {
      id: "villa-move-10",
      tag: "Villa Complete Move",
      description: "Full house + garden furniture",
      price: "AED 2500",
      vehicle: "10 Ton Truck",
      labors: "10 Labors",
      services: ["Packing", "Loading", "Unloading", "Arrangement"],
      note: "Inspection required before confirmation.",
      badge: "Premium",
    },
    {
      id: "villa-move-12",
      tag: "Villa Complete Move",
      description: "Full house + garden furniture",
      price: "AED 3500",
      vehicle: "12 Ton Truck",
      labors: "12 Labors",
      services: ["Packing", "Loading", "Unloading", "Arrangement"],
      note: "Inspection required before confirmation.",
      badge: "Premium",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const plans = showAll ? allPlans : allPlans.slice(0, 3);

  // ✅ Message formatting for WhatsApp
  function generateMessage(plan) {
    const lines = [
      `*Booking Request*`,
      `*Plan:* ${plan.tag}`,
      `*Details:* ${plan.description}`,
      `*Price:* ${plan.price}`,
      `*Vehicle:* ${plan.vehicle}`,
      `*Labors:* ${plan.labors}`,
      `*Services:* ${plan.services.join(", ")}`,
      `*Note:* ${plan.note}`,
      "",
      "Please contact me to confirm and arrange the booking.",
    ];
    return lines.join("\n");
  }

  // ✅ Fixed WhatsApp function
  function openWhatsApp(plan) {
    const text = generateMessage(plan);
    const encoded = encodeURIComponent(text);
    const waNumber = phone.replace(/[^0-9]/g, ""); // Remove + or spaces
    const waLink = `https://wa.me/${waNumber}?text=${encoded}`;
    window.open(waLink, "_blank");
  }

  // 🔥 Reusable button style
  const buttonStyle = `inline-block px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 
    bg-gradient-to-br from-emerald-400/70 to-teal-600/70 hover:from-teal-700/80 hover:to-emerald-500 text-white text-sm sm:text-base md:text-lg`;

  return (
    <section
      id="FurniturePriceCards"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16"
    >
      {/* Section Container */}
      <div
        className={`bg-red-to-br from-emerald-400/70 to-teal-600/70 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl`}
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center text-white">
          Our Moving Offers
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="group bg-white/90 dark:bg-gray-800/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-base transition-all">
                    {plan.tag}
                  </p>
                  <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl font-bold group-hover:text-[#0ea5e9] transition-all">
                    {plan.description}
                  </h3>
                </div>
                {plan.badge && (
                  <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-md">
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mt-4 flex items-center gap-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white">
                  {plan.price}
                </div>
              </div>

              {/* Details */}
              <ul className="mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200">
                <li>
                  <strong>Vehicle:</strong> {plan.vehicle}
                </li>
                <li>
                  <strong>Labors:</strong> {plan.labors}
                </li>
                <li>
                  <strong>Services:</strong> {plan.services.join(", ")}
                </li>
              </ul>

              <p className="mt-4 text-xs sm:text-sm text-gray-500">{plan.note}</p>

              {/* Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => openWhatsApp(plan)}
                  className={buttonStyle}
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 text-center">
          {!showAll ? (
            <button onClick={() => setShowAll(true)} className={buttonStyle}>
              View All Offers
            </button>
          ) : (
            <button onClick={() => setShowAll(false)} className={buttonStyle}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
