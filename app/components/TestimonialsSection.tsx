"use client";
import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jean Claude Nkurunziza",
    company: "Rwanda Digital Solutions",
    position: "CEO",
    image: "/images/logoo.png", // Placeholder - replace with actual client photos
    rating: 5,
    text: "Beyond Tech transformed our entire digital infrastructure. Their team delivered a scalable web platform that increased our operational efficiency by 300%. Professional, responsive, and truly committed to our success.",
  },
  {
    id: 2,
    name: "Marie Uwase",
    company: "AgriTech Rwanda",
    position: "Founder & Director",
    image: "/images/logoo.png", // Placeholder
    rating: 5,
    text: "Working with Beyond Tech was a game-changer for our startup. They built our mobile app from scratch and provided excellent training to our team. The app has reached over 5,000 farmers in just 6 months!",
  },
  {
    id: 3,
    name: "Patrick Mugisha",
    company: "Kigali Innovation Hub",
    position: "Technology Director",
    image: "/images/logoo.png", // Placeholder
    rating: 5,
    text: "Beyond Tech's UI/UX design expertise is exceptional. They redesigned our entire platform with a user-centered approach. User engagement increased by 150%, and we've received overwhelmingly positive feedback.",
  },
  {
    id: 4,
    name: "Sarah Ingabire",
    company: "FinTech East Africa",
    position: "Product Manager",
    image: "/images/logoo.png", // Placeholder
    rating: 5,
    text: "The backend development team at Beyond Tech is world-class. They built a secure, high-performance API system that handles thousands of transactions daily. Their security implementation gives us complete peace of mind.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-[#f6fafc] to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F69B19] text-center mb-2">
          What Our Clients Say
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 border-b-2 border-[#F69B19] relative flex items-center justify-center">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full border-2 border-[#F69B19] bg-white" />
          </div>
        </div>
        <p className="text-center text-lg text-gray-600 mb-12 font-serif max-w-2xl mx-auto">
          Don't just take our word for it. Hear from businesses we've helped transform across Rwanda and beyond.
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-[#F69B19] opacity-20">
            <FaQuoteLeft className="text-6xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#F6A019] text-2xl mx-1" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl font-serif text-gray-800 text-center mb-8 leading-relaxed italic">
              "{current.text}"
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#F6A019]">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900">{current.name}</h4>
              <p className="text-base font-serif text-[#F6A019] font-semibold">{current.position}</p>
              <p className="text-sm font-serif text-gray-600">{current.company}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#F6A019] hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#F6A019] w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#F6A019] hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-sm font-serif text-gray-500">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white border-2 border-[#27b755] rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <Image src={t.image} alt={t.name} width={40} height={40} className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-serif font-bold text-gray-900">Join 50+ satisfied clients</p>
              <p className="text-xs font-serif text-gray-600">94% client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
