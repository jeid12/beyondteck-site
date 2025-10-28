"use client";
import React, { useState } from "react";
import Image from "next/image";

// You can use react-icons for the social icons
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Successfully subscribed! Check your email.");
        setEmail("");
      } else {
        setError(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#331B03] w-full pt-16 pb-0">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#7A4707] rounded-xl flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 mb-8">
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 md:mb-0">
            Subscribe Newsletters
          </h2>
          <div className="w-full max-w-xl md:w-auto">
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="flex-1 px-6 py-4 rounded-l-md text-xl font-serif outline-none sm:rounded-r-none rounded-r-md"
                style={{ border: "none" }}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#F6A019] hover:bg-[#E69A2B] text-white text-xl font-serif px-8 py-4 rounded-r-md border-2 border-white sm:border-l-0 border-l-2 transition-all mt-2 sm:mt-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
            {message && (
              <p className="text-green-300 text-sm mt-2 font-serif">{message}</p>
            )}
            {error && (
              <p className="text-red-300 text-sm mt-2 font-serif">{error}</p>
            )}
          </div>
        </div>
        {/* Links and social icons */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white py-6">
          <div className="flex space-x-16 mb-6 md:mb-0">
            <a href="/#about" className="text-2xl font-serif hover:underline">About Us</a>
            <a href="/#service" className="text-2xl font-serif hover:underline">Service</a>
            <a href="/portfolio" className="text-2xl font-serif hover:underline">Portfolio</a>
            <a href="/#contact" className="text-2xl font-serif hover:underline">Contact</a>
          </div>
          <div className="flex space-x-8 text-3xl">
            <a href="#" aria-label="Instagram" className="hover:text-[#F6A019]"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#F6A019]"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F6A019]"><FaLinkedin /></a>
            <a href="#" aria-label="TikTok" className="hover:text-[#F6A019]"><FaTiktok /></a>
          </div>
        </div>
      </div>
      {/* White curved separator */}
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q720 180 1440 100 V120 H0 V100 Z"
            fill="#fff"
          />
        </svg>
      </div>
      {/* Bottom logo and copyright */}
      <div className="bg-white pt-8 pb-4 flex flex-col items-center">
        <div className="mb-4">
          <Image 
            src="/images/logoo.png" 
            alt="BeyondTech Logo" 
            width={90} 
            height={90}
            className="h-18 w-auto object-contain"
          />
        </div>
        <p className="text-lg text-gray-700 font-serif">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by BeyondTech
        </p>
      </div>
    </footer>
  );

}