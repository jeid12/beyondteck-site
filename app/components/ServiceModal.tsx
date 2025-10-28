import React, { useEffect } from "react";

type ServiceKey = "backend" | "frontend" | "mobile" | "uiux" | "training" | "testing";

interface ServiceModalProps {
  serviceKey: ServiceKey | null;
  onClose: () => void;
}

const serviceDetails: Record<ServiceKey, {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  techTitle?: string;
  techs?: string[];
  price?: string;
  duration?: string;
  contactText?: string;
}> = {
  backend: {
    title: "Backend Development",
    badge: "Robust Server Solutions",
    desc: "Our backend team builds scalable server-side solutions, secure APIs, and efficient database designs to ensure high performance and reliability for your business applications.",
    features: [
      "RESTful APIs",
      "Database Design",
      "Cloud Integration",
      "Security Implementation"
    ],
    techTitle: "Technologies",
    techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    price: "$ 120-160",
    duration: "2-4 weeks",
    contactText: "Contact us"
  },
  frontend: {
    title: "Frontend Development",
    badge: "Modern Web Interfaces",
    desc: "Our frontend specialists craft exceptional user experiences using modern frameworks and libraries. We focus on performance, accessibility, and responsive design to ensure your web application works flawlessly across all devices.",
    features: [
      "Responsive Web Design",
      "Progressive Web Apps",
      "Component Libraries",
      "Performance Optimization"
    ],
    techTitle: "Technologies",
    techs: ["React JS", "Next JS", "Tailwind CSS", "Typescript"],
    price: "$ 150-180",
    duration: "2 - 3 weeks",
    contactText: "Contact us"
  },
  mobile: {
    title: "Mobile Development",
    badge: "iOS & Android Apps",
    desc: "We create robust and engaging mobile apps for iOS and Android, using both native and cross-platform technologies to deliver solutions that provide excellent user experiences and functionality.",
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Push Notifications",
      "App Store Deployment"
    ],
    techTitle: "Technologies",
    techs: ["Flutter", "React Native", "Swift", "Kotlin"],
    price: "$ 140-200",
    duration: "3-5 weeks",
    contactText: "Contact us"
  },
  uiux: {
    title: "UI/UX Design",
    badge: "User-Centered Design",
    desc: "Our design team combines creativity with user research to create compelling digital experiences. We focus on journey mapping, wireframing, prototyping, and visual design for exceptional usability.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing"
    ],
    techTitle: "Technologies",
    techs: ["Figma", "Adobe XD", "Sketch"],
    price: "$ 100-140",
    duration: "1-2 weeks",
    contactText: "Contact us"
  },
  training: {
    title: "Training & Consulting",
    badge: "Expert Guidance & Education",
    desc: "Accelerate your team’s growth with our training programs and strategic consulting. We offer hands-on workshops, mentoring, and strategic planning to drive digital transformation.",
    features: [
      "Technology Training",
      "Strategic Consulting",
      "Process Optimization",
      "Team Mentoring"
    ],
    techTitle: "Technologies",
    techs: ["Workshops", "Mentoring", "Strategic Planning"],
    price: "$ 110-150",
    duration: "1-2 weeks",
    contactText: "Contact us"
  },
  testing: {
    title: "Testing Services",
    badge: "Quality Assurance & Testing",
    desc: "Our QA specialists implement comprehensive testing strategies using automated and manual frameworks to ensure your applications are robust, secure, and high-performing.",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing"
    ],
    techTitle: "Technologies",
    techs: ["Jest", "Cypress", "Selenium", "Appium"],
    price: "$ 100-130",
    duration: "1-2 weeks",
    contactText: "Contact us"
  }
};

export default function ServiceModal({ serviceKey, onClose }: ServiceModalProps) {
  const details = serviceKey ? serviceDetails[serviceKey] : null;

  // Close on outside click or Escape key
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!details) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-10 flex items-center justify-center"
      onClick={onClose}
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl p-8 w-[95vw] max-w-lg mx-auto border"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-700 transition"
        >
          ×
        </button>
        <h3 className="text-2xl font-semibold text-green-700 mb-1">{details.title}</h3>
        <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded mb-3">
          {details.badge}
        </div>
        <div className="mb-4 text-gray-800">{details.desc}</div>
        <div className="mb-2">
          <span className="text-green-700 font-bold">Key Features</span>
          <ul className="list-disc list-inside text-gray-900 text-sm mt-1">
            {details.features.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        {details.techTitle && details.techs && (
          <div className="mb-3">
            <span className="text-orange-500 font-semibold">{details.techTitle}</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {details.techs.map(tech => (
                <span
                  key={tech}
                  className="bg-gray-100 border border-green-600 text-green-700 px-2 py-0.5 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-8 mb-2 mt-4 text-sm">
          <div>
            <span className="block text-gray-500">Price</span>
            <span className="font-bold text-black">{details.price}</span>
          </div>
          <div>
            <span className="block text-gray-500">Duration</span>
            <span className="font-bold text-black">{details.duration}</span>
          </div>
        </div>
        <button
          className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
        >
          {details.contactText}
        </button>
      </div>
    </div>
  );
}