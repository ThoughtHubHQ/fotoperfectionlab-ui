"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

// Mock Data
const sectionHeader = {
  badge: "OUR SERVICES",
  title: "Premium Image",
  titleHighlight: "Editing Services",
  description:
    "Replicating the exact visual composition of image_d8e2aa.png. Custom before/after hover-capable modules built to showcase absolute precision.",
};

const servicesData = [
  {
    id: 1,
    title: "Clipping Path Service",
    description:
      "Clipping path service allows removing the unwanted objects background from photos. You can also do color separation using clipping path. We provide a manual clipping path service using adobe photoshop. Pricing may vary depending on image complexity but is very competitive.",
    features: [
      "Hand-made clipping path vectors",
      "Pricing depends on image complexity",
      "Up to 50% discount on bulk order",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/founders/founder1.jpg",
    afterImage: "/founders/founder2.jpg",
    link: "/services/clipping-path",
  },
  {
    id: 2,
    title: "Background Removal",
    description:
      "Clipping path service allows removing the unwanted objects background from photos. You can also do color separation using clipping path. We provide a manual clipping path service using adobe photoshop. Pricing may vary depending on image complexity but is very competitive.",
    features: [
      "Hand-made clipping path vectors",
      "Pricing depends on image complexity",
      "Up to 50% discount on bulk order",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/founders/founder1.jpg",
    afterImage: "/founders/founder2.jpg",
    link: "/services/background-removal",
  },
  {
    id: 3,
    title: "Image Masking Service",
    description:
      "Clipping path service allows removing the unwanted objects background from photos. You can also do color separation using clipping path. We provide a manual clipping path service using adobe photoshop. Pricing may vary depending on image complexity but is very competitive.",
    features: [
      "Hand-made clipping path vectors",
      "Pricing depends on image complexity",
      "Up to 50% discount on bulk order",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/founders/founder1.jpg",
    afterImage: "/founders/founder2.jpg",
    link: "/services/image-masking",
  },
  {
    id: 4,
    title: "Shadow Creation",
    description:
      "Clipping path service allows removing the unwanted objects background from photos. You can also do color separation using clipping path. We provide a manual clipping path service using adobe photoshop. Pricing may vary depending on image complexity but is very competitive.",
    features: [
      "Hand-made clipping path vectors",
      "Pricing depends on image complexity",
      "Up to 50% discount on bulk order",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/founders/founder1.jpg",
    afterImage: "/founders/founder2.jpg",
    link: "/services/shadow-creation",
  },
  {
    id: 5,
    title: "Ghost Mannequin Effect",
    description:
      "This item will not show on the homepage because we slice the array to 4 items.",
    features: ["Feature 1", "Feature 2"],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/ghost-mannequin",
  },
];

// Hover-based Before/After Image Slider Component
const BeforeAfterImage = ({
  beforeImg,
  afterImg,
  alt,
}: {
  beforeImg: string;
  afterImg: string;
  alt: string;
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - left, width));
    setSliderPos((x / width) * 100);
  };

//   const handleMouseLeave = () => {
//     setSliderPos(50);
//   };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-4/3 rounded-[20px] overflow-hidden cursor-ew-resize select-none bg-[#DCE7FF]"
    >
      {/* After Image (Background layer) */}
      <Image
        src={afterImg}
        alt={`${alt} After`}
        fill
        className="object-cover pointer-events-none"
      />

      {/* Before Image (Top layer, clipped) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImg}
          alt={`${alt} Before`}
          fill
          className="object-cover"
        />
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-180"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function HomeServices() {
  const displayServices = servicesData.slice(0, 4);

  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-300 mx-auto px-4 md:px-8 xl:px-0 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6">
            {sectionHeader.badge}
          </div>
          <h2 className="text-[#111827] text-[32px] md:text-[40px] font-[800] tracking-tight mb-4">
            {sectionHeader.title}{" "}
            <span className="text-[#2563EB]">
              {sectionHeader.titleHighlight}
            </span>
          </h2>
          <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium max-w-[650px] leading-relaxed">
            {sectionHeader.description}
          </p>
        </div>

        {/* Services List (Alternating 1 Column Layout) */}
        <div className="w-full flex flex-col gap-12 md:gap-16 mb-16">
          {displayServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`w-full flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center p-6 md:p-10 lg:p-12 rounded-[28px] bg-[#EBF2FF]`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <BeforeAfterImage
                    beforeImg={service.beforeImage}
                    afterImg={service.afterImage}
                    alt={service.title}
                  />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <h3 className="text-[#111827] text-[24px] md:text-[28px] font-[800] tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3.5 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FiCheck
                          className="text-[#2563EB] w-[18px] h-[18px] shrink-0"
                          strokeWidth={3}
                        />
                        <span className="text-[#111827] text-[13px] md:text-[14px] font-bold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* <Link href={service.link}>
                    <button className="flex items-center justify-center gap-2 text-white font-semibold text-[13px] md:text-[14px] uppercase tracking-wide rounded-[16px] bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)] px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      READ MORE
                      <FiArrowRight
                        className="w-[18px] h-[18px]"
                        strokeWidth={2.5}
                      />
                    </button>
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <Link href="/services">
          <button className="flex items-center justify-center gap-2 text-[#2563EB] font-bold text-[14px] md:text-[15px] uppercase tracking-wide rounded-full border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white px-10 py-4 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
            VIEW ALL SERVICES
            <FiArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </Link>
      </div>
    </section>
  );
}
