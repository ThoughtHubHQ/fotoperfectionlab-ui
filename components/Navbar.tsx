'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 lg:px-20 2xl:px-0 py-4 md:py-6 flex items-center justify-between max-w-360 mx-auto relative z-50">
      {/* Logo */}
      <div className="shrink-0 cursor-pointer">
        <Image 
          src="/logo/logo.png" 
          alt="Logo" 
          width={180}
          height={48}
          className="h-10 md:h-12 w-auto object-contain" 
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 backdrop-blur-md border border-[#1D61F233] rounded-full px-8 py-2.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <a 
          href="#about" 
          className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <a 
          href="#service" 
          className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          Service
        </a>
        
        {/* Center Icon */}
        <div className="px-2">
          <Image 
            src="/logo/icon.png" 
            alt="Center Icon" 
            width={36}
            height={36}
            className="h-9 w-9 object-contain" 
          />
        </div>

        <a 
          href="#pricing" 
          className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          Pricing
        </a>
        <a 
          href="#portfolio" 
          className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          Portfolio
        </a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Contact Button - Desktop Only */}
        <button className="hidden lg:flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
          Contact
          <FiArrowRight className="h-[18px] w-[18px]" strokeWidth={3} />
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-white/50 rounded-full transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl rounded-2xl p-4 flex flex-col gap-2 lg:hidden">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-3 rounded-lg hover:bg-white/50"
          >
            About
          </a>
          <a 
            href="#service" 
            onClick={() => setIsOpen(false)}
            className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-3 rounded-lg hover:bg-white/50"
          >
            Service
          </a>
          <a 
            href="#pricing" 
            onClick={() => setIsOpen(false)}
            className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-3 rounded-lg hover:bg-white/50"
          >
            Pricing
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setIsOpen(false)}
            className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-3 rounded-lg hover:bg-white/50"
          >
            Portfolio
          </a>
          
          {/* Contact Button - Mobile Menu */}
          <div className="mt-2 pt-4 border-t border-slate-200/50">
            <button className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl text-[15px] font-medium transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
              Contact
              <FiArrowRight className="h-[18px] w-[18px]" strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}