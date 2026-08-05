"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioData = [
  // Group 1: 3000x2000 (3:2 Aspect Ratio)
  {
    id: "bg-removal",
    prefix: "Background",
    highlight: "Removal",
    aspect: "aspect-[3/2.5]",
    images: [
      "/portfolio/bg-removal/BG-Removal-1.jpg",
      "/portfolio/bg-removal/BG-Removal-2.jpg",
      "/portfolio/bg-removal/BG-Removal-3.jpg",
      "/portfolio/bg-removal/BG-Removal-4.jpg",
    ],
  },
  {
    id: "shadow-creation",
    prefix: "Shadow",
    highlight: "Creation",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/shadow/High-end retouching service for ecommerce brands, catalogs, and advertising (1).jpg",
      "/portfolio/shadow/High-end retouching service for ecommerce brands, catalogs, and advertising (2).jpg",
      "/portfolio/shadow/High-end retouching service for ecommerce brands, catalogs, and advertising (3).jpg",
      "/portfolio/shadow/High-end retouching service for ecommerce brands, catalogs, and advertising (4).jpg",
    ],
  },
  {
    id: "image-masking",
    prefix: "Image",
    highlight: "Masking",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/masking/professional-image-masking-fotoperfectionlab (1).jpg",
      "/portfolio/masking/professional-image-masking-fotoperfectionlab (2).jpg",
      "/portfolio/masking/professional-image-masking-fotoperfectionlab (3).jpg",
      "/portfolio/masking/professional-image-masking-fotoperfectionlab (4).jpg",
    ],
  },
  {
    id: "photo-retouching",
    prefix: "Photo",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (1).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (01).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (7).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (10).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (11).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (12).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (13).jpg",
      "/portfolio/photo-retouching/professional-image-editing-retouching-service-fotoperfectionlab (14).jpg",
    ],
  },
  {
    id: "jewellery-retouching",
    prefix: "Jewellery",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/jewellery-retouching/E-commerce Jewelry Photo Editing (1).jpg",
      "/portfolio/jewellery-retouching/E-commerce Jewelry Photo Editing (2).jpg",
      "/portfolio/jewellery-retouching/E-commerce Jewelry Photo Editing (3).jpg",
      "/portfolio/jewellery-retouching/E-commerce Jewelry Photo Editing (4).jpg",
    ],
  },
  {
    id: "ghost-mannequin",
    prefix: "Ghost",
    highlight: "Mannequin",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/ghost/Professional-Ghost-Mannequin-Editing-(1).jpg",
      "/portfolio/ghost/Professional-Ghost-Mannequin-Editing-(2).jpg",
      "/portfolio/ghost/Professional-Ghost-Mannequin-Editing-(4).jpg",
      "/portfolio/ghost/Professional-Ghost-Mannequin-Editing-(5).jpg",
    ],
  },
  {
    id: "ecommerce-editing",
    prefix: "E-commerce Photo",
    highlight: "Editing",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (2).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (3).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (4).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (5).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (6).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (7).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (8).jpg",
      "/portfolio/ecommerce-photo-editing/professional-image-editing-retouching-service-fotoperfectionlab (9).jpg",
    ],
  },
  {
    id: "real-estate",
    prefix: "Real Estate Photo",
    highlight: "Editing",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(1).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(2).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(3).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(4).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(5).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(6).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(7).jpg",
      "/portfolio/realstate-photo-editing/Real-Estate-Photo-Editing-Service-(8).jpg",
    ],
  },
  {
    id: "food-retouching",
    prefix: "Food",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/food-retouching/Food Product Retouching Service (1).jpg",
      "/portfolio/food-retouching/Food Product Retouching Service (2).jpg",
      "/portfolio/food-retouching/Food Product Retouching Service (3).jpg",
      "/portfolio/food-retouching/Food Product Retouching Service (4).jpg",
    ],
  },

  // Group 2: 3000x2500 (6:5 Aspect Ratio)
  {
    id: "headshot-portrait",
    prefix: "Headshot & Portrait",
    highlight: "Retouching",
    aspect: "aspect-[7/9]",
    images: [
      "/portfolio/headshot-retouching/Corporate Headshot Editing Portrait Retouching (1).jpg",
      "/portfolio/headshot-retouching/Corporate Headshot Editing Portrait Retouching (2).jpg",
      "/portfolio/headshot-retouching/Corporate Headshot Editing Portrait Retouching (3).jpg",
      "/portfolio/headshot-retouching/Corporate Headshot Editing Portrait Retouching (4).jpg",
    ],
  },
  {
    id: "baby-photo",
    prefix: "Baby Photo",
    highlight: "Retouching",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/baby-retouching/Baby Photo Retouching Service, Newborn Photo Editing (1).jpg",
      "/portfolio/baby-retouching/Baby Photo Retouching Service, Newborn Photo Editing (2).jpg",
      "/portfolio/baby-retouching/Baby Photo Retouching Service, Newborn Photo Editing (3).jpg",
      "/portfolio/baby-retouching/Baby Photo Retouching Service, Newborn Photo Editing (4).jpg",
    ],
  },
  {
    id: "model-retouching",
    prefix: "Model",
    highlight: "Retouching",
    aspect: "aspect-[7/9]",
    images: [
      "/portfolio/model-retouching/Professional Model Photo Editing & Retouching (1).jpg",
      "/portfolio/model-retouching/Professional Model Photo Editing & Retouching (2).jpg",
      "/portfolio/model-retouching/Professional Model Photo Editing & Retouching (3).jpg",
      "/portfolio/model-retouching/Professional Model Photo Editing & Retouching (4).jpg",
    ],
  },
];

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
            A showcase of our work across every editing discipline before &
            after, detail shots, and full compositions.
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
