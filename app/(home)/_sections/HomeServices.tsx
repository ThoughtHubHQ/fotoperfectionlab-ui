"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { servicesData } from "@/lib/servicesData";
import { BsArrowRight } from "react-icons/bs";

// Mock Data
const sectionHeader = {
  badge: "OUR SERVICES",
  title: "Premium Image",
  titleHighlight: "Editing Services",
  description:
    "We offer a wide range of professional image editing services to enhance your photos and bring your creative vision to life.",
};

const BeforeAfterImage = ({
  beforeImg,
  afterImg,
  alt,
}: {
  beforeImg: string;
  afterImg: string;
  alt: string;
}) => {
  // State moved inside the image component
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Consolidated movement logic for both mouse and touch
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setSliderPos((x / width) * 100);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleReset = () => {
    setSliderPos(50);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleReset}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      className="relative w-full aspect-4/3 rounded-[20px] overflow-hidden select-none bg-[#DCE7FF] touch-pan-y"
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
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white pointer-events-none transition-transform duration-75 ease-out"
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

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`w-full flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-center p-6 md:p-10 lg:p-12 rounded-[28px] bg-[#EBF2FF] relative`}
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
          {service.features.map((feature: string, idx: number) => (
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
        <Link
          href="/contact"
          className="bg-[#2563EB] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#1d4ed8] flex items-center gap-2 text-[14px] md:text-[15px] hover:shadow-2xl hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 w-full md:w-auto md:self-end justify-center text-center"
        >
          Get a Free Trial <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default function HomeServices() {
  const displayServices = servicesData.filter((service) => service.showHome);

  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-10 2xl:px-0 flex flex-col items-center">
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
          <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium max-w-130 leading-relaxed">
            {sectionHeader.description}
          </p>
        </div>

        {/* Services List (Alternating 1 Column Layout) */}
        <div className="w-full flex flex-col gap-12 md:gap-16 mb-16">
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
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
