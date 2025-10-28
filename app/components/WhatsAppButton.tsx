"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+250781274642";
  const message = "Hello Beyond Tech! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-bounce hover:animate-none group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-serif px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
      </span>
      
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </a>
  );
}
