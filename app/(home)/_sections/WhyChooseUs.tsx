"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiScissors,
  FiBox,
  FiDroplet,
  FiSun,
  FiUser,
  FiEdit3,
  FiHexagon,
  FiStar,
  FiZap,
  FiBarChart2,
  FiDollarSign,
  FiRefreshCw,
  FiGift,
  FiHeadphones,
  FiCrosshair,
} from "react-icons/fi";
import { containerVariants, itemVariants } from "@/lib/animation";

const whatWeDoData = [
  { id: 1, label: "E-commerce Product\nPhoto Editing", icon: FiShoppingBag },
  { id: 2, label: "Background Removal &\nClipping Path", icon: FiScissors },
  { id: 3, label: "High-End Product\nRetouching", icon: FiBox },
  { id: 4, label: "Color Correction & Color\nMatching", icon: FiDroplet },
  { id: 5, label: "Shadow & Reflection\nCreation", icon: FiSun },
  { id: 6, label: "Ghost Mannequin Editing", icon: FiUser },
  { id: 7, label: "Object Removal & Image\nCleanup", icon: FiEdit3 },
  { id: 8, label: "Jewellery Retouching", icon: FiHexagon },
  { id: 9, label: "Fashion & Beauty\nRetouching", icon: FiStar },
];

const whyChooseUsData = [
  { id: 1, label: "Professional Quality\nStandards", icon: FiStar },
  { id: 2, label: "Fast Turnaround\nTime", icon: FiZap },
  {
    id: 3,
    label: "Consistent Results\nAcross Large Image\nVolumes",
    icon: FiBarChart2,
  },
  { id: 4, label: "Affordable and\nScalable Solutions", icon: FiDollarSign },
  {
    id: 5,
    label: "Unlimited revisions\nuntil you're 100%\nsatisfied",
    icon: FiRefreshCw,
  },
  { id: 6, label: "Free sample\nedit available", icon: FiGift },
  { id: 7, label: "Friendly &\nDedicated Client\nSupport", icon: FiHeadphones },
  {
    id: 8,
    label: "Pixel-perfect\nediting with\nattention to detail",
    icon: FiCrosshair,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col gap-20">
        {/* --- WHAT WE DO SECTION --- */}
        <div className="w-full flex flex-col">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
            <h2 className="text-[#111827] text-[28px] md:text-[32px] font-extrabold tracking-tight">
              What <span className="text-[#2563EB]">We Do</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full rounded-3xl md:rounded-4xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.03)] overflow-hidden shadow-[0_4px_40px_0_rgba(41,98,255,0.03)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {whatWeDoData.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`md:flex items-center gap-6 p-6 lg:p-8 bg-transparent hover:bg-[rgba(37,99,235,0.06)] transition-colors duration-300
                      border-[rgba(175,189,220,0.15)] border`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-[14px] bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center text-[#2563EB] shadow-sm">
                      <Icon className="w-5 h-5" strokeWidth={2.5} />
                    </div>

                    <span className="text-[#111827] text-[12px] md:text-[15px] font-semibold leading-snug whitespace-pre-line">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* --- WHY CHOOSE US SECTION --- */}
        <div className="w-full flex flex-col">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
            <h2 className="text-[#111827] text-[28px] md:text-[32px] font-extrabold tracking-tight">
              Why <span className="text-[#2563EB]">Choose Us</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 xl:px-20"
          >
            {whyChooseUsData.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group lg:flex items-center gap-5 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 rounded-3xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_4px_20px_0_rgba(47,95,255,0.06),0_1px_4px_0_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_0_rgba(47,95,255,0.10)]"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl border border-[rgba(41,98,255,0.14)] bg-[rgba(41,98,255,0.08)] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>

                  <p className="text-[#4B5563] text-[13px] font-medium leading-snug whitespace-pre-line mt-3 lg:mt-0">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}