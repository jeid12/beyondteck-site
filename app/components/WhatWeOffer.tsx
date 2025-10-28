"use client";
import React, { useState } from "react";
import ServiceModal from "./ServiceModal";
import { FaAngleDoubleLeft, FaPenFancy, FaUserCog, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const cards = [
  {
    key: "backend",
    icon: <FaAngleDoubleLeft className="text-green-600 text-2xl" />,
    title: "Backend Development",
    subtitle: "Robust Server Solutions",
    desc: "Our backend engineers develop robust server-side solutions using industry-leading technologies. We specialize in creating scalable architectures, secure APIs, and efficient database designs that handle growing user demands.",
    features: [
      "RESTful APIs",
      "Database Design",
      "Cloud Integration",
      "Security Implementation"
    ],
    color: "green"
  },
  {
    key: "frontend",
    icon: <FaAngleDoubleLeft className="text-orange-500 text-2xl" />,
    title: "Frontend Development",
    subtitle: "Mobile & Web Applications",
    desc: "We create scalable, high-performance applications tailored to your business needs. From mobile apps to complex web platforms, our development team delivers solutions that grow with your business.",
    features: [
      "Responsive Web Design",
      "Progressive Web Apps",
      "Component Libraries"
    ],
    color: "orange"
  },
  {
    key: "mobile",
    icon: <FaAngleDoubleLeft className="text-green-600 text-2xl" />,
    title: "Mobile development",
    subtitle: "iOS & Android Apps",
    desc: "Our mobile development team creates high-performance applications for iOS and Android platforms. Using both native and cross-platform technologies, we deliver mobile solutions that provide excellent user experiences and robust functionality.",
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Push Notifications",
      "App Store Deployment"
    ],
    color: "green"
  },
  {
    key: "uiux",
    icon: <MdOutlineDesignServices className="text-orange-500 text-2xl" />,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    desc: "Our design team combines creativity with user research to create compelling digital experiences. We focus on user journey mapping, wireframing, prototyping, and visual design to ensure your product not only looks great but also delivers exceptional usability.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing"
    ],
    color: "orange"
  },
  {
    key: "training",
    icon: <FaUserCog className="text-green-600 text-2xl" />,
    title: "Training & Consulting",
    subtitle: "Expert Guidance & Education",
    desc: "Transform your individual and team's capabilities with our expert-led training programs and strategic consulting. We offer hands-on workshops, mentoring sessions, and strategic planning to accelerate your digital transformation.",
    features: [
      "Technology Training",
      "Strategic Consulting",
      "Process Optimization",
      "Team Mentoring"
    ],
    color: "green"
  },
  {
    key: "testing",
    icon: <FaClipboardCheck className="text-orange-500 text-2xl" />,
    title: "Testing Services",
    subtitle: "Quality Assurance & Testing",
    desc: "Our QA specialists implement comprehensive testing strategies to ensure your applications are robust, secure, and perform optimally. We use automated testing frameworks and manual testing procedures to catch issues before they reach production.",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing"
    ],
    color: "orange"
  },
] as const;

export default function WhatWeOffer() {
  const [modalKey, setModalKey] = useState<"backend" | "frontend" | "mobile" | "uiux" | "training" | "testing" | null>(null);


  return (
    <section className="py-12 bg-transparent" id="service">
      <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-[#F69B19] mb-0" style={{ letterSpacing: '1px' }}>
        What we offer
      </h2>
      <p className="text-center text-lg text-gray-400 mb-10 font-serif">
        Comprehensive technology solutions designed to drive your business forward.
      </p>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={card.key}
            className={`bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition min-h-[390px] cursor-pointer ${modalKey === card.key ? "ring-2 ring-orange-300 z-40" : ""} ${modalKey ? "opacity-60 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
            onClick={() => !modalKey && setModalKey(card.key)}
            style={{
              filter: modalKey && modalKey !== card.key ? "blur(1.5px)" : "none",
              background: modalKey && modalKey !== card.key ? "#fafafa" : "#fff"
            }}
          >
            <div>
              <div className={`flex items-center gap-2 mb-3`}>
                {card.icon}
                {card.icon}
              </div>
              <div className={`mb-2 font-semibold ${card.color === "green" ? "text-green-700" : "text-orange-500"}`}>{card.title}</div>
              <div className="mb-2 font-bold text-black text-sm">{card.subtitle}</div>
              <div className="text-black text-base mb-2">{card.desc}</div>
              <div className="mb-2">
                <span className={`font-semibold ${card.color === "green" ? "text-green-700" : "text-orange-500"}`}>Key Features</span>
                <ul className="list-disc list-inside text-black text-sm mt-1">
                  {card.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              className={`mt-4 w-full py-2 rounded text-white font-semibold text-base ${card.color === "green" ? "bg-green-600" : "bg-orange-500"} hover:opacity-90 transition`}
              onClick={e => { e.stopPropagation(); setModalKey(card.key); }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      {modalKey && (
        <ServiceModal serviceKey={modalKey} onClose={() => setModalKey(null)} />
      )}
    </section>
  );
}