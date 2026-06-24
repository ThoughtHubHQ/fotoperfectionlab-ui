"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiZap } from "react-icons/fi";

// Mock Data
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
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/clipping-path",
  },
  {
    id: 2,
    title: "Multi Clipping Path",
    description:
      "Multi clipping path isolates multiple parts of an image for independent color correction and retouching. Essential for complex garments and products requiring distinct section adjustments.",
    features: [
      "Precise multi-path selections",
      "Individual color correction ready",
      "Complex shape isolation",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/multi-clipping-path",
  },
  {
    id: 3,
    title: "Background Removal",
    description:
      "Instantly upgrade your product presentation by replacing distracting backgrounds with pure white or transparent backdrops, perfectly optimized for Amazon, Shopify, and eBay.",
    features: [
      "Pure white or transparent BG",
      "Amazon & Shopify compliant",
      "Smooth edge refinement",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/background-removal",
  },
  {
    id: 4,
    title: "Image Masking Service",
    description:
      "Advanced image masking for complex subjects like hair, fur, or translucent objects where standard clipping paths fall short. Ensures natural, soft edges on any background.",
    features: [
      "Alpha channel masking",
      "Hair and fur detailing",
      "Translucent object masking",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/image-masking",
  },
  {
    id: 5,
    title: "Shadow Creation",
    description:
      "Add depth and realism to flat product images with custom drop shadows, natural shadows, or reflections. Creates a 3D effect that increases perceived product value.",
    features: [
      "Drop, natural, & reflection shadows",
      "Realistic 3D depth addition",
      "Consistent lighting angles",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/shadow-creation",
  },
  {
    id: 6,
    title: "Ghost Mannequin Effect",
    description:
      "Remove mannequins and combine front and inner neck shots to create a 3D hollow 'ghost' effect for apparel. The industry standard for fashion e-commerce.",
    features: [
      "Neck joint and inner shadow",
      "Sleeve and hem adjustments",
      "Wrinkle removal included",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/ghost-mannequin",
  },
  {
    id: 7,
    title: "Photo Retouching",
    description:
      "High-end retouching to clean up dust, scratches, glares, and imperfections. Enhances the overall aesthetic while maintaining natural textures and materials.",
    features: [
      "Dust and scratch removal",
      "Texture preservation",
      "Highlight and glare adjustment",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/photo-retouching",
  },
  {
    id: 8,
    title: "Jewelry Retouching",
    description:
      "Specialized retouching for fine jewelry. We enhance gem sparkle, correct metal colors, remove macro-lens dust, and add distinct shines to make pieces look luxurious.",
    features: [
      "Diamond and gem enhancement",
      "Metal color correction",
      "Focus stacking adjustments",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/jewelry-retouching",
  },
  {
    id: 9,
    title: "Color Correction",
    description:
      "Ensure exact color representation across your entire product catalog. We adjust white balance, exposure, and hue to match your physical products perfectly.",
    features: [
      "Accurate color matching",
      "White balance adjustments",
      "Exposure correction",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/color-correction",
  },
  {
    id: 10,
    title: "E-commerce Image Editing",
    description:
      "A complete package tailored for online retailers. Includes background removal, resizing, margin alignment, and basic retouching for platform compliance.",
    features: [
      "Platform-specific resizing",
      "Consistent margin alignment",
      "Batch processing workflow",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/ecommerce-editing",
  },
  {
    id: 11,
    title: "Real Estate Photo Editing",
    description:
      "Transform property photos with HDR blending, sky replacements, window masking, and perspective corrections to attract more buyers and renters.",
    features: [
      "HDR blending and sky replacement",
      "Perspective and lens correction",
      "Lawn enhancement",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/real-estate-editing",
  },
  {
    id: 12,
    title: "Automotive Photo Editing",
    description:
      "Professional car photo editing for dealerships. We replace cluttered backgrounds with clean showroom environments and enhance paint reflections.",
    features: [
      "Showroom background replacement",
      "Window reflection cleaning",
      "Paint and trim enhancement",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/automotive-editing",
  },
  {
    id: 13,
    title: "Raster to Vector",
    description:
      "Convert pixelated logos and graphics into infinitely scalable vector formats (AI, EPS, SVG). Perfect for printing, embroidery, and large-scale signage.",
    features: [
      "100% manual vector tracing",
      "Scalable without quality loss",
      "Print-ready file formats",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/raster-to-vector",
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

  const handleMouseLeave = () => {
    setSliderPos(50);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden cursor-ew-resize select-none bg-[#DCE7FF] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
    >
      <Image
        src={afterImg}
        alt={`${alt} After`}
        fill
        className="object-cover pointer-events-none"
      />

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

      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none transition-transform duration-75 ease-out"
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

export default function Services() {
  return (
    <div className="w-full flex flex-col bg-transparent">
      {/* Header Section */}
      <section className="w-full pt-20 pb-12 lg:pt-40 lg:pb-16 px-4 md:px-8">
        <div className="max-w-200 mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6">
            OUR COMPLETE SERVICES
          </div>
          <h1 className="text-[#111827] text-[36px] md:text-[48px] lg:text-[56px] font-[800] tracking-tight leading-[1.1] mb-6">
            Comprehensive Image <br className="hidden md:block" />
            <span className="text-[#2563EB]">Editing Solutions</span>
          </h1>
          <p className="text-[#6B7280] text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[650px]">
            Explore our full suite of professional photo editing and retouching
            services. Drag the slider on any image below to experience our
            precision before and after.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 xl:px-0 flex flex-col gap-12 md:gap-16">
          {servicesData.map((service, index) => {
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
                  <h2 className="text-[#111827] text-[24px] md:text-[32px] font-[800] tracking-tight mb-4">
                    {service.title}
                  </h2>
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
{/* 
                  <Link href={service.link}>
                    <button className="flex items-center justify-center gap-2 text-white font-semibold text-[13px] md:text-[14px] uppercase tracking-wide rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)] px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
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
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto rounded-[32px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.05)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-[#111827] text-[28px] md:text-[36px] font-[800] tracking-tight mb-4">
              Ready to transform your images?
            </h2>
            <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">
              Get started today with a free sample edit. Send us up to 3 images
              and experience our pixel-perfect quality before committing to a
              larger project.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <button className="flex items-center justify-center gap-2 text-white font-bold text-[15px] uppercase tracking-wide rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_12px_30px_-8px_rgba(37,99,235,0.5)] px-10 py-5 cursor-pointer transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]">
              <FiZap className="w-5 h-5 fill-current" />
              GET A FREE QUOTE
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
