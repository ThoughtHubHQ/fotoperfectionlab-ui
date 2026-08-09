"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6">
            OUR PORTFOLIO
          </div>
          <h2 className="text-[#111827] text-[32px] md:text-[40px] font-[800] tracking-tight mb-4">
            Our Showcase <span className="text-[#2563EB]">Portfolio</span>
          </h2>
          <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium max-w-[500px] leading-relaxed">
            Explore our finest photo editing and retouching work, from precise
            product edits to high-end creative transformations.
          </p>
        </motion.div>

        {/* Portfolio Categories */}
        <div className="flex flex-col gap-12 md:gap-16">
          {portfolioData.map((category) => (
            <motion.div
              key={category.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full flex flex-col"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[#111827] text-[18px] md:text-[22px] font-bold tracking-tight mb-6 px-1"
              >
                {category.prefix}{" "}
                <span className="text-[#2563EB]">{category.highlight}</span>
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {category.images.map((imgSrc, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`relative w-full ${category.aspect} rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#E1EBFF] shadow-sm group`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${category.prefix} ${category.highlight} Sample ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
