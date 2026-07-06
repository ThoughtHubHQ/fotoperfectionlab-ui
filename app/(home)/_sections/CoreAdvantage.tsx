"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuClock, LuUsers, LuShieldCheck, LuMail } from "react-icons/lu";
import { containerVariants, itemVariants } from "@/lib/animation";

const coreAdvantages = [
  {
    id: 1,
    title: "24/7 SUPPORT",
    description:
      "Our team is dedicated to customer support 24/7. If you don't have enough time for your projects then we can help you with your tightest deadline. You will get instant quotes, Superfast support, and delivery with Top-Quality Editing.",
    icon: LuClock,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    id: 2,
    title: "DEDICATED TEAM",
    description:
      "We know how to provide premium quality. That's why we have a ready team for your every project to provide you top-quality service and they are will always active for your instant corrections. Every team member is highly skilled in image editing.",
    icon: LuUsers,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "DATA SECURITY",
    description:
      "All of our customer's files and information are secured. We strictly follow NDA signature to ensure our customers that all of the data protected by us. Specially we guaranteed to you that your files/images will be used only for your editing purpose.",
    icon: LuShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    title: "QUICK TURNAROUND",
    description:
      "Our standard delivery times are 24 hours but Fast turnaround is our top ability. We will offer you to 1-Hours, 3-Hours, 6-Hours, and 12-Hours services according to your special urgency. Don't worry about the quality. Superb quality always here.",
    icon: LuMail,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

export default function CoreAdvantages() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <span className="text-[#2563EB] text-[11px] font-bold tracking-[1.54px] uppercase mb-4">
            CORE ADVANTAGES
          </span>
          <h2 className="text-[#111827] text-3xl md:text-4xl lg:text-[40px] font-[800] leading-tight mb-4">
            <span className="text-[#1D61F2]">Why Global Brands</span> Trust Us
          </h2>
          <p className="text-[#6B7280] text-sm md:text-[15px] font-medium max-w-2xl">
            Replicating standard production lines with guaranteed file privacy
            and priority speeds.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 xl:gap-12"
        >
          {coreAdvantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <motion.div
                key={advantage.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 ${advantage.iconBg}`}
                >
                  <Icon
                    className={`w-6 h-6 md:w-7 md:h-7 ${advantage.iconColor}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-[#111827] text-[13px] md:text-[14px] font-[800] uppercase tracking-wide mb-4">
                  {advantage.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-[1.6] md:leading-[1.7]">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
