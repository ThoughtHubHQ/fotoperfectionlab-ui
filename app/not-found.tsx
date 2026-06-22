"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiAlertOctagon, FiHome, FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 bg-[#F5F8FF]">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#1D61F2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-2 md:px-4 rounded-full border border-[rgba(41,98,255,0.12)] bg-[rgba(37,99,235,0.10)] shadow-[0_2px_12px_0_rgba(41,98,255,0.08)] text-[#2563EB] text-[11px] font-bold leading-[16.5px] tracking-[1.54px] uppercase mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(37,99,235,0.15)]">
              <FiAlertOctagon className="w-3 h-3" strokeWidth={3} />
            </span>
            ERROR 404
          </div>

          {/* Huge 404 Number */}
          <h1 className="text-[#111827] font-[900] text-[120px] leading-[1] md:text-[180px] tracking-tighter mb-4 select-none">
            4<span className="text-[#1D61F2]">0</span>4
          </h1>

          {/* Heading */}
          <h2 className="text-[#111827] font-[800] text-[28px] md:text-[40px] leading-[1.2] mb-6">
            Oops! Page Not Found.
          </h2>

          {/* Description */}
          <p className="text-[#6B7280] text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed font-medium">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Button */}
          <Link href="/">
            <button className="group text-white px-8 py-4 font-semibold flex items-center gap-3 text-lg transition-transform hover:scale-105 rounded-[24px] bg-[#1D61F2] shadow-[0_25px_50px_-12px_#93C5FD] cursor-pointer">
              <FiHome className="w-5 h-5" />
              Back to Home
              <span className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-center">
                <FiArrowRight className="w-4 h-4" strokeWidth={3} />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}