"use client";
import { useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");
    const form = formRef.current;
    if (!form) return;
    const data = {
      name: form["name"].valueOf(),
      email: form["email"].value,
      service: form["service"].value,
      message: form["message"].value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 px-2 md:px-8 bg-white overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0 0, #bbb 1px, transparent 1px), radial-gradient(circle at 100% 0, #bbb 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundRepeat: "repeat",
        backgroundPosition: "left top, right top"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-[#F6A019] text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-xl font-serif text-center mb-8 text-black font-medium">
          Ready to transform your business with cutting-edge technology? Let's discuss your next project.
        </p>
        <div className="flex flex-col md:flex-row md:items-stretch gap-8">
          {/* Left side - Info */}
          <div className="flex-1 flex flex-col justify-between py-4 pl-2 pr-6">
            <div>
              <h3 className="text-[#F6A019] text-2xl font-serif font-bold mb-2">Let's Start a Conversation</h3>
              <p className="text-black font-serif font-medium mb-4">
                Whether you need software development, training, or testing services, we're here to help. Our team of experts is ready to discuss your project and provide tailored solutions.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[#F6A019] text-3xl"><FiMail /></span>
                <span className="font-serif text-lg text-black">beyondtech@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F6A019] text-3xl"><FiPhone /></span>
                <span className="font-serif text-lg text-black">+25078127464</span>
              </div>
            </div>
          </div>
          {/* Right side - Form */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white border rounded shadow-lg px-6 py-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block font-serif font-semibold mb-1">
                    Full name/Company <span className="text-[#F6A019]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your username"
                    className="w-full border border-gray-300 rounded px-4 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-serif font-semibold mb-1">
                    Email <span className="text-[#F6A019]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded px-4 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-serif font-semibold mb-1">
                  Service Interested In <span className="text-[#F6A019]">*</span>
                </label>
                <select
                  required
                  name="service"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Backend Development</option>
                  <option>Frontend Development</option>
                  <option>Mobile Development</option>
                  <option>UI/UX Design</option>
                  <option>Training & Consulting</option>
                  <option>Testing Services</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block font-serif font-semibold mb-1">
                  Message <span className="text-[#F6A019]">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-[#F6A019]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F7921D] hover:bg-[#e67c00] text-white font-serif font-bold text-xl py-3 rounded transition flex items-center justify-center gap-2"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
                <svg
                  className="inline-block ml-2"
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12H30M30 12L22 4M30 12L22 20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {sent && (
                <div className="text-green-600 text-center mt-4 font-serif">
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="text-red-600 text-center mt-4 font-serif">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}