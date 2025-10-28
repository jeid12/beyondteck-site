"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What services does Beyond Tech offer?",
    answer: "We offer comprehensive technology solutions including Backend Development, Frontend Development, Mobile App Development (iOS & Android), UI/UX Design, Training & Consulting, and Testing Services. Our team specializes in creating scalable, high-performance solutions tailored to your business needs.",
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer: "Our pricing varies based on project complexity and requirements. Backend Development ranges from $120-160, Frontend Development $150-180, Mobile Development $140-200, UI/UX Design $100-140, Training & Consulting $110-150, and Testing Services $100-130. Contact us for a detailed quote tailored to your specific project.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Project timelines depend on scope and complexity. UI/UX Design and Testing typically take 1-2 weeks, Frontend Development 2-3 weeks, Backend Development 2-4 weeks, and Mobile Development 3-5 weeks. We provide detailed timelines during our consultation phase and keep you updated throughout the process.",
  },
  {
    id: 4,
    question: "Do you work with startups or only established companies?",
    answer: "We work with businesses of all sizes! From ambitious startups to established enterprises across Rwanda and internationally. We understand the unique challenges startups face and offer flexible solutions and payment plans to support your growth journey.",
  },
  {
    id: 5,
    question: "What technologies do you use?",
    answer: "We use cutting-edge, industry-standard technologies including React JS, Next.js, Node.js, TypeScript, Flutter, React Native, MongoDB, PostgreSQL, and more. Our tech stack is chosen based on your project requirements to ensure optimal performance, scalability, and maintainability.",
  },
  {
    id: 6,
    question: "Do you offer support after project completion?",
    answer: "Absolutely! We provide ongoing support and maintenance services after project delivery. This includes bug fixes, updates, performance optimization, and technical support. We believe in building long-term partnerships with our clients.",
  },
  {
    id: 7,
    question: "Can you help with existing projects or only new ones?",
    answer: "We work on both! Whether you need to build something from scratch, improve an existing application, fix bugs, add new features, or completely redesign your digital presence, our team has the expertise to help. We also offer code audits and refactoring services.",
  },
  {
    id: 8,
    question: "Do you accept MTN Mobile Money or Airtel Money?",
    answer: "Yes! As a Rwanda-based company, we understand local payment preferences. We accept MTN Mobile Money, Airtel Money, bank transfers, and international payment methods. We make it easy for local businesses to work with us.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F69B19] text-center mb-2">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 border-b-2 border-[#F69B19] relative flex items-center justify-center">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full border-2 border-[#F69B19] bg-white" />
          </div>
        </div>
        <p className="text-center text-lg text-gray-600 mb-12 font-serif max-w-2xl mx-auto">
          Got questions? We've got answers. Find everything you need to know about working with Beyond Tech.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openId === faq.id}
              >
                <span className="font-serif text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-[#F6A019] text-2xl">
                  {openId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg font-serif text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#F6A019] hover:bg-orange-600 text-white font-serif text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
