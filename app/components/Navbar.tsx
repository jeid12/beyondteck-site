"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white min-h-[80px] relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center z-50">
        <Image 
          src="/images/logoo.png" 
          alt="BeyondTech Logo" 
          width={120} 
          height={120}
          className="h-12 md:h-16 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Nav links */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-8 xl:space-x-12">
          {["Home", "About", "Team", "Service", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="font-serif text-lg xl:text-xl relative transition-colors duration-200 
                hover:text-[#F6A019] hover:underline underline-offset-4 decoration-2">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA Button */}
      <Link href="#contact" className="hidden lg:block bg-[#F6A019] hover:bg-orange-500 text-white font-serif text-base xl:text-lg px-6 xl:px-8 py-2 rounded transition-colors duration-150 ml-4">
        Work with us
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="lg:hidden z-50 text-3xl text-gray-800 hover:text-[#F6A019] transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <ul className="flex flex-col space-y-6">
            {["Home", "About", "Team", "Service", "Contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  onClick={closeMenu}
                  className="font-serif text-2xl text-gray-800 hover:text-[#F6A019] transition-colors duration-200 block py-2">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="#contact" 
            onClick={closeMenu}
            className="mt-8 bg-[#F6A019] hover:bg-orange-500 text-white font-serif text-lg px-6 py-3 rounded transition-colors duration-150 text-center">
            Work with us
          </Link>
        </div>
      </nav>
    </header>
  );
}
