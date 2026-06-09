import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="w-full px-4 lg:px-20 2xl:px-0 py-4 md:py-6 flex items-center justify-between max-w-360 mx-auto">
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

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8  backdrop-blur-md border border-[#1D61F233] rounded-full px-8 py-2.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
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

      {/* Contact Button */}
      <div className="flex-shrink-0">
        <button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
          Contact
          <FiArrowRight className="h-[18px] w-[18px]" strokeWidth={3} />
        </button>
      </div>
    </nav>
  );
}