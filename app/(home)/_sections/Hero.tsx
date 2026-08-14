"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuImage,
  LuSparkle,
  LuWand,
  LuPalette,
  LuSquare,
} from "react-icons/lu";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { RiDiamondRingLine } from "react-icons/ri";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "JEWELRY RETOUCH",
    subtitle: "Color, Light, Exposure",
    icon: RiDiamondRingLine,
    photo: "/hero/Jewellery-Retouching.jpg",
    slotText: "Premium Quality",
  },
  {
    id: 2,
    title: "OBJECT REMOVE",
    subtitle: "Clean Background & Unwanted Object",
    icon: LuWand,
    photo: "/hero/Product-Retouch.jpg",
    slotText: "Pixel-Perfect Editing",
  },
  {
    id: 3,
    title: "HIGH-END RETOUCH",
    subtitle: "Beauty, Fashion & Commercial",
    icon: LuSparkle,
    photo: "/hero/High-End-Retouch.jpg",
    slotText: "100% Satisfaction",
  },
  {
    id: 4,
    title: "COLOR CORRECTION",
    subtitle: "Natural & Vibrant Look",
    icon: LuPalette,
    photo: "/hero/Color-Correction.jpg",
    slotText: "Reliable Service",
  },
  {
    id: 5,
    title: "SKIN RETOUCH",
    subtitle: "Smooth & Blemish Remove",
    icon: LuImage,
    photo: "/hero/Skin-Retouch.jpg",
    slotText: "On-Time Delivery",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden
     py-16 lg:py-0 px-4 md:px-8 lg:px-16 2xl:px-0"
    >
      <div className="max-w-360 w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-10 lg:mt-30">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-2 md:px-4 rounded-full border border-[rgba(41,98,255,0.12)] bg-[rgba(37,99,235,0.10)] shadow-[0_2px_12px_0_rgba(41,98,255,0.08)] text-[#2563EB] text-[11px] font-bold leading-[16.5px] tracking-[1.54px] uppercase mb-8">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(37,99,235,0.15)]">
              <LuSquare className="w-2.5 h-2.5 rotate-45" strokeWidth={3} />
            </span>
            10+ YEARS OF EXPERIENCE
          </div>

          <h1 className="mb-6 text-[#111827] font-extrabold text-[36px] xl:leading-16 lg:text-[35px] xl:text-[45px]">
            Perfect Image <br />
            Powerfull Editing <br />
            With{" "}
            <span className="relative inline-block whitespace-nowrap text-[#1D61F2] min-w-60 sm:min-w-75 md:min-w-100">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-0 top-0"
                >
                  {heroSlides[activeIndex].slotText}
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0">{heroSlides[0].slotText}</span>

              <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full pointer-events-none">
                <Image
                  src="/hero/underline.svg"
                  alt="underline highlight"
                  width={500}
                  height={20}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </span>
          </h1>

          <p className="text-[#6B7280] text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            We don&apos;t just provide services; we craft digital experiences.
            From high-end photo retouching to innovative web solutions, your
            vision is our mission.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            <button className="group text-white px-8 py-4 font-semibold flex items-center gap-3 text-lg transition-transform hover:scale-105 rounded-3xl bg-[#1D61F2] shadow-[0_25px_50px_-12px_#93C5FD] cursor-pointer">
              <Link href="/contact" className="flex items-center gap-3">
                Get My Quotation
                <span className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </button>

            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 md:w-5 md:h-5" />
                ))}
                <span className="text-[#111827] font-bold ml-2 text-sm md:text-base">
                  4.9/5
                </span>
              </div>
              <span className="text-[#6B7280] text-xs md:text-sm font-medium">
                Trusted by 100+ Global Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-100 md:min-h-125 lg:min-h-150">
          <div className="relative w-75 h-75 sm:w-95 sm:h-95 md:w-110 md:h-110 lg:w-120 lg:h-120 xl:w-120 xl:h-125">
            <motion.div
              animate={{ rotate: -activeIndex * 72 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#a3bef8]"
            >
              {heroSlides.map((item, i) => {
                const nodeAngle = i * 72;
                const isActive = i === activeIndex;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    className="absolute inset-0 origin-center"
                    style={{ transform: `rotate(${nodeAngle}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ rotate: activeIndex * 72 - nodeAngle }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex flex-col items-center w-40"
                      >
                        <button
                          onClick={() => setActiveIndex(i)}
                          className={`w-12 h-12 md:w-15 md:h-15 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                            isActive
                              ? "bg-[#1D61F2] text-white shadow-[0_15px_35px_-5px_rgba(29,97,242,0.5)] scale-110"
                              : "bg-white text-[#1D61F2] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:scale-105"
                          }`}
                        >
                          <IconComponent className="w-5 h-5 md:w-7 md:h-7" />
                        </button>

                        <div className="mt-3 md:mt-4 text-center absolute top-full pt-1">
                          <h4 className="text-[#1D61F2] text-[8px] font-extrabold leading-[13.5px] tracking-[0.45px] uppercase text-center md:text-[10px] lg:text-[11px] md:leading-3.75 lg:leading-[16.5px]">
                            {item.title}
                          </h4>
                          <p className="text-[#6B7280] text-[8px] leading-3 text-center mx-auto hidden md:block md:text-[9px] lg:text-md md:leading-3.25 lg:leading-3.75 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Central Single Image Container - Fixed to Landscape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[70%] md:w-[68%] lg:w-[68%] xl:w-[68%] aspect-7/5.5 bg-[#E8EEFB]/80 backdrop-blur-md rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(29,97,242,0.2)] border border-[#C6D8FB] p-2 sm:p-3 overflow-hidden z-10 flex items-center justify-center">
              <div className="w-full h-full relative rounded-4xl bg-white overflow-hidden border border-[#E5E7EB]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={heroSlides[activeIndex].photo}
                      alt={`Showcase for ${heroSlides[activeIndex].title}`}
                      width={700}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
