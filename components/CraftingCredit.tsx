"use client";

import { roxboroughCFHeavy } from "@/lib/font";
import Image from "next/image";
import { useState } from "react";

export default function CraftingCredit() {
  const [logoSrc, setLogoSrc] = useState(
    "https://cdn.thoughthubhq.com/th-logo.png",
  );

  return (
    <div className="inline-block">
      <a
        href="https://thoughthubhq.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit"
      >
        <div className="group relative flex items-center gap-3 sm:gap-4 cursor-pointer hover:scale-105 transition-transform duration-500 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:bg-gray-600">
          <div className="shrink-0 pr-3 sm:pr-4 border-r-2 border-[#8e9eb2] transition-colors duration-300 group-hover:border-[#2563EB]/40">
            <Image
              src={logoSrc}
              alt="ThoughtHub HQ Logo"
              width={36}
              height={36}
              priority
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              onError={() => setLogoSrc("/logo/th-logo.png")}
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#9CA3AF] group-hover:text-[#6B7280] font-extrabold leading-none mb-0.5 sm:mb-1 transition-colors duration-300">
              Crafted by
            </span>
            <span className="flex flex-col text-base sm:text-lg font-bold text-[#111827] group-hover:text-gray-800 transition-colors duration-300">
              <span className={roxboroughCFHeavy.className}>ThoughtHub</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
