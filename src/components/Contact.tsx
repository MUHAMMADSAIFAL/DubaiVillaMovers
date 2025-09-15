import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
    message: ""
  });

  const services = ["Packing", "Moving", "Storage", "Cleaning", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService =
      formData.service === "Other" ? formData.otherService : formData.service;

    const message = `📩 New Contact Request
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${selectedService}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/923421712536?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Message Sent!",
      description: "We'll get back to you very soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      otherService: "",
      message: "",
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi! My name is ${formData.name}. I'm interested in your services (${formData.service}). My phone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923421712536?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 relative bg-cover bg-center bg-no-repeat rounded-2xl"
      style={{ backgroundImage: "url('/sofa.jpg')" }}
    >
      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quick quote
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info Card */}
          <div
            className="service-card cursor-pointer 
              bg-red-to-br from-emerald-400/70 to-teal-600/70 
              hover:from-red-700/80 hover:to-red-600/60
              p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg 
              transform transition-all duration-700 hover:scale-105 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Get In Touch
            </h3>

            <div className="space-y-5 sm:space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-emerald-500/20 rounded-lg p-2 sm:p-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+923421712536"
                    className="text-gray-200 hover:text-emerald-400 transition-colors text-sm sm:text-base"
                  >
                    +92 342 1712536
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-emerald-500/20 rounded-lg p-2 sm:p-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:saifalkhursheed@gmail.com"
                    className="text-gray-200 hover:text-emerald-400 transition-colors text-sm sm:text-base"
                  >
                    saifalkhursheed@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-emerald-500/20 rounded-lg p-2 sm:p-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                    Service Area
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base">
                    United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-emerald-500/20 rounded-lg p-2 sm:p-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                    Available
                  </h4>
                  <p className="text-gray-200 text-sm sm:text-base">
                    24/7 Support
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-emerald-500/10 rounded-xl p-4 sm:p-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Quick WhatsApp Contact
                </h4>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Chat with us instantly for immediate assistance
              </p>
              <Button
                onClick={handleWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white w-full py-2 sm:py-3"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form Card */}
          <div
            className="service-card cursor-pointer 
              bg-red-to-br from-emerald-400/70 to-teal-600/70 
              hover:from-red-700/80 hover:to-red-600/60
              p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg 
              transform transition-all duration-700 hover:scale-105 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Full Name *"
                  className="bg-white/20 text-white placeholder-gray-300 text-sm sm:text-base"
                />
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  placeholder="Phone Number *"
                  className="bg-white/20 text-white placeholder-gray-300 text-sm sm:text-base"
                />
              </div>

              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Email Address"
                className="bg-white/20 text-white placeholder-gray-300 text-sm sm:text-base"
              />

              {/* Dropdown for Service */}
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, service: e.target.value }))
                }
                className="w-full p-2 sm:p-3 rounded-md bg-white/20 text-white text-sm sm:text-base"
                required
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {services.map((service, i) => (
                  <option key={i} value={service} className="bg-black text-white">
                    {service}
                  </option>
                ))}
              </select>

              {formData.service === "Other" && (
                <Input
                  type="text"
                  value={formData.otherService}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherService: e.target.value,
                    }))
                  }
                  placeholder="Enter your custom service"
                  className="bg-white/20 text-white placeholder-gray-300 text-sm sm:text-base"
                />
              )}

              <Textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell us about your moving requirements..."
                rows={4}
                className="bg-white/20 text-white placeholder-gray-300 text-sm sm:text-base"
              />

              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 sm:py-3 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl"></div>
    </section>
  );
};

export default Contact;
