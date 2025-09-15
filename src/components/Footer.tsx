import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-saifal-021771309/",
  },
];

const quickLinks = [
 { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Offers", href: "#FurniturePriceCards" },
      { name: "Service Areas", href: "#areas" },
      { name: "Reviews", href: "#reviews" },
      { name: "Contact Us", href: "#contact" },
];

const services = [
  "Furniture Moving",
  "Packing Services",
  "Heavy Item Moving",
  "Office Relocation",
  "Interstate Moving",
  "Commercial Moving",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 text-white rounded-t-2xl scroll-smooth">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
              Dubai Villa Movers
            </h1>
            <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
              Your trusted partner for quick, stress-free, and affordable moving
              services in the United Arab Emirates. Professional furniture
              movers with over 15 years of experience.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-colors"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="block text-white/80 hover:text-yellow-300 hover:translate-x-1 transition-all"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              {services.map((service) => (
                <li
                  key={service}
                  className="hover:text-yellow-300 hover:translate-x-1 transition-all cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                <a
                  href="tel:+923421712536"
                  className="text-white/80 hover:text-yellow-300 transition-colors"
                >
                  +92 342 1712536
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                <a
                  href="mailto:saifalkhursheed@gmail.com"
                  className="text-white/80 hover:text-yellow-300 transition-colors"
                >
                  saifalkhursheed@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                <span className="text-white/80">United Arab Emirates</span>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 sm:mt-12 pt-5 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/80 text-xs sm:text-sm md:text-base text-center md:text-left">
              © 2025 Dubai Villa Movers. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-white/80">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
