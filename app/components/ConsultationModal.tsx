"use client";
import { useEffect, useRef, useState } from "react";
import { FaTimes, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
            preferredDate: "",
            preferredTime: "",
          });
        }, 3000);
      } else {
        setError("Failed to book consultation. Please try again.");
      }
    } catch {
      setError("Failed to book consultation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-5xl text-green-600" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Consultation Booked!
          </h3>
          <p className="text-lg text-gray-700 font-serif mb-6">
            Thank you! We've received your request. Our team will contact you within 24 hours to confirm your free 30-minute consultation.
          </p>
          <p className="text-sm text-gray-600 font-serif">
            Check your email for confirmation details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F6A019] to-[#e67c00] rounded-t-2xl p-6 md:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <FaCalendarCheck className="text-4xl" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Book Your Free Consultation
            </h2>
          </div>
          <p className="text-lg font-serif opacity-90">
            30-minute strategy call • No obligation • Expert guidance
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                placeholder="+250 XXX XXX XXX"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-serif font-semibold mb-2 text-gray-900">
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
            >
              <option value="">Select a service</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Training & Consulting">Training & Consulting</option>
              <option value="Testing Services">Testing Services</option>
              <option value="Full Stack Solution">Full Stack Solution</option>
              <option value="Not Sure - Need Guidance">Not Sure - Need Guidance</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Preferred Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
              />
            </div>
            <div>
              <label className="block font-serif font-semibold mb-2 text-gray-900">
                Preferred Time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
              >
                <option value="">Select time</option>
                <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-serif font-semibold mb-2 text-gray-900">
              Tell us about your project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-serif focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
              placeholder="Brief description of your needs, goals, or challenges..."
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-serif text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F6A019] hover:bg-orange-600 text-white font-serif text-lg font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Booking..." : "Book Free Consultation"}
          </button>

          <p className="text-center text-sm text-gray-600 font-serif mt-4">
            🔒 Your information is secure and will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
}
