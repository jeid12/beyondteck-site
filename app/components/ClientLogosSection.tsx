"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const clients = [
  { name: "AgriTech Rwanda", logo: "/images/logoo.png" },
  { name: "Rwanda Digital Solutions", logo: "/images/logoo.png" },
  { name: "FinTech East Africa", logo: "/images/logoo.png" },
  { name: "Kigali Innovation Hub", logo: "/images/logoo.png" },
  { name: "Rwanda Tourism Board", logo: "/images/logoo.png" },
  { name: "EduTrack Learning", logo: "/images/logoo.png" },
  { name: "SmartPay Rwanda", logo: "/images/logoo.png" },
  { name: "TechHub Kigali", logo: "/images/logoo.png" },
];

export default function ClientLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-2">
          Trusted by Leading Organizations
        </h2>
        <p className="text-center text-lg text-gray-600 font-serif mb-8">
          Proud to work with innovative companies across Rwanda and beyond
        </p>

        {/* Scrolling Logos */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-4xl font-serif font-bold text-[#F6A019]">50+</p>
            <p className="text-sm font-serif text-gray-600">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-serif font-bold text-[#F6A019]">94%</p>
            <p className="text-sm font-serif text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-serif font-bold text-[#F6A019]">4+</p>
            <p className="text-sm font-serif text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-serif font-bold text-[#F6A019]">100%</p>
            <p className="text-sm font-serif text-gray-600">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
