"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

// Mock data array for navigation items
const navItems = [
  { id: 1, label: "About", href: "/about" },
  { id: 2, label: "Service", href: "/service" },
  { id: 3, label: "Pricing", href: "/pricing" },
  { id: 4, label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split nav items into two halves to place the icon in the middle
  const halfLength = Math.ceil(navItems.length / 2);
  const leftNavItems = navItems.slice(0, halfLength);
  const rightNavItems = navItems.slice(halfLength);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Inner container constraining the width */}
      <nav className="relative w-full max-w-360 mx-auto px-4 lg:px-20 2xl:px-0 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={200}
            height={50}
            className="h-10 md:h-15 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 backdrop-blur-md border border-[#b0c5f3] rounded-full px-8 py-2.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
          
          {/* Left half of nav links */}
          {leftNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Center Icon */}
          <Link href="/" className="px-2">
            <Image
              src="/logo/icon.png"
              alt="Center Icon"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          </Link>

          {/* Right half of nav links */}
          {rightNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Contact Button - Desktop Only */}
          <Link href="/contact" className="hidden lg:flex">
            <button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
              Contact
              <FiArrowRight className="h-4.5 w-4.5" strokeWidth={3} />
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-white/50 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-4 flex flex-col gap-2 lg:hidden">
            
            {/* Map over all nav items for mobile */}
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-3 rounded-lg hover:bg-white/50"
              >
                {item.label}
              </Link>
            ))}

            {/* Contact Button - Mobile Menu */}
            <div className="mt-2 pt-4 border-t border-slate-200/50">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl text-[15px] font-medium transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
                  Contact
                  <FiArrowRight className="h-4.5 w-4.5" strokeWidth={3} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}