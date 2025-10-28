"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ConsultationModal from "./ConsultationModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
      className="relative min-h-[630px] w-full flex items-center"
      id=""
      style={{
        background: "radial-gradient(ellipse at 75% 40%, #222b47 40%, transparent 70%), #000",
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-0">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <h1 className="text-[#F6A019] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-10 leading-tight md:leading-none tracking-wide">
            BEYOND TECH
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-xl font-sans">
            Transforming businesses through cutting-edge technology solutions. We bridge the gap between innovation and practical implementation.
          </p>
          <div className="mb-8 md:mb-10 w-full max-w-xl">
            {/* <div className="flex items-center bg-transparent border border-white rounded-full px-4 md:px-5 py-3 w-full min-h-[48px]">
              <FiSearch className="text-lg text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search here"
                className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 text-sm md:text-base"
              />
            </div> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-[#F6A019] text-[#F6A019] bg-transparent hover:bg-[#F6A019] hover:text-black font-serif text-base md:text-lg px-6 md:px-8 py-3 rounded transition-all duration-150 text-center min-h-[48px] flex items-center justify-center">
              🎯 Free Consultation
            </button>
            <Link href="#contact" className="bg-[#F6A019] text-white font-serif text-base md:text-lg px-6 md:px-8 py-3 rounded hover:bg-orange-400 transition-all duration-150 text-center min-h-[48px] flex items-center justify-center">
              Contact us
            </Link>
          </div>
        </div>
        {/* Right section */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-12 md:mt-0">
          <div className="relative flex flex-col items-center gap-6 md:gap-10">
            <div className="rounded-full overflow-hidden shadow-lg bg-[#1a1c2b] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
              <Image
                src="/images/image1.png"
                alt="Technology illustration 1"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="rounded-full overflow-hidden shadow-lg bg-[#222b47] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex items-center justify-center md:ml-16">
              <Image
                src="/images/image2.png"
                alt="Technology illustration 2"
                width={168}
                height={168}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}