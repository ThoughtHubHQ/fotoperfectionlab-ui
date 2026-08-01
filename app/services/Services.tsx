"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "@/lib/animation";
import { BsArrowRight } from "react-icons/bs";

const servicesData = [
  {
    id: 1,
    title: "Clipping Path",
    description:
      "Clipping path service allows removing the unwanted objects background from photos. You can also do color separation using clipping path. We provide a manual clipping path service using adobe photoshop. Pricing may vary depending on image complexity but is very competitive.",
    features: [
      "Hand-made clipping path vectors",
      "Pricing depends on image complexity",
      "Up to 50% discount on bulk order",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/cp1.jpg",
    afterImage: "/services/cp2.jpg",
    link: "/services/clipping-path",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Image Masking",
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
    id: 6,
    title: "Jewellery Retouching",
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
    link: "/services/jewellery-retouching",
  },
  {
    id: 7,
    title: "Ghost Mannequin",
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
    id: 8,
    title: "Apparel Editing",
    description:
      "Comprehensive editing for clothing items including wrinkle removal, shape symmetry correction, and color matching to present garments flawlessly.",
    features: [
      "Symmetry and shape correction",
      "Fabric smoothing and wrinkle removal",
      "Color matching to physical items",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/apparel-editing",
  },
  {
    id: 9,
    title: "E-commerce Photo Editing",
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
    link: "/services/ecommerce-photo-editing",
  },
  {
    id: 10,
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
    link: "/services/real-estate-photo-editing",
  },
  {
    id: 12,
    title: "Food Retouching",
    description:
      "Make culinary dishes look mouth-watering. We adjust lighting, enhance colors, remove stray crumbs, and emphasize textures for menus and marketing.",
    features: [
      "Color vibrancy enhancement",
      "Lighting and steam adjustments",
      "Distraction removal",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/food-retouching",
  },
  {
    id: 13,
    title: "Headshot & Portrait Retouching",
    description:
      "Professional retouching for corporate headshots and personal portraits. We balance skin tones, remove blemishes, and brighten eyes while keeping it natural.",
    features: [
      "Natural skin smoothing",
      "Teeth whitening & eye brightening",
      "Stray hair removal",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/headshot-portrait-retouching",
  },
  {
    id: 14,
    title: "Baby Photo Retouching",
    description:
      "Gentle retouching for newborn and baby photography. We smooth out flaky skin, correct redness, and create a soft, dreamy aesthetic for cherished memories.",
    features: [
      "Redness and blemish correction",
      "Soft skin smoothing",
      "Background cleanup",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/baby-photo-retouching",
  },
  {
    id: 15,
    title: "Beauty Retouching",
    description:
      "High-end beauty retouching for magazines and cosmetics. Utilizing frequency separation and dodge/burn to preserve skin texture while achieving flawless results.",
    features: [
      "Frequency separation technique",
      "Dodge and burn contouring",
      "Makeup enhancement",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/beauty-retouching",
  },
  {
    id: 16,
    title: "Model Retouching",
    description:
      "Comprehensive model retouching for fashion campaigns. Includes body contouring, clothing adjustments, skin perfecting, and atmospheric color grading.",
    features: [
      "Body and posture contouring",
      "Skin and clothing perfection",
      "Atmospheric color grading",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/model-retouching",
  },
  {
    id: 17,
    title: "AI Photo Editing",
    description:
      "Leverage advanced AI tools combined with human expertise for rapid upscaling, generation of realistic elements, and complex scene modifications.",
    features: [
      "AI-assisted upscaling",
      "Generative fill and expansion",
      "Prompt-based element addition",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/ai-photo-editing",
  },
  {
    id: 18,
    title: "Photo Restoration",
    description:
      "Breathe new life into old, torn, or faded photographs. We repair physical damage, restore lost contrast, and bring back details from historic images.",
    features: [
      "Tear and scratch repair",
      "Fading and contrast recovery",
      "Detail sharpening",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/photo-restoration",
  },
  {
    id: 19,
    title: "Photo Manipulation",
    description:
      "Creative photo manipulation to combine multiple images into a seamless, surreal, or hyper-realistic composition. Perfect for advertising and concept art.",
    features: [
      "Seamless image compositing",
      "Lighting and shadow matching",
      "Creative concept execution",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/photo-manipulation",
  },
  {
    id: 20,
    title: "Photo Colorization",
    description:
      "Accurately add historically appropriate and vibrant colors to black and white photography, revitalizing the past with stunning realism.",
    features: [
      "Accurate historical coloring",
      "Vibrant skin tone matching",
      "Texture-aware tinting",
      "Fast delivery within 24 hours",
      "24/7 customer support",
    ],
    beforeImage: "/services/shoe-before.jpg",
    afterImage: "/services/shoe-after.jpg",
    link: "/services/photo-colorization",
  },
];

const BeforeAfterImage = ({
  beforeImg,
  afterImg,
  alt,
  sliderPos,
  onPosChange,
}: {
  beforeImg: string;
  afterImg: string;
  alt: string;
  sliderPos: number;
  onPosChange?: (pos: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !onPosChange) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - left, width));
    onPosChange((x / width) * 100);
  };

  const handleTouchEnd = () => {
    if (onPosChange) onPosChange(50);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
      className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden select-none bg-[#DCE7FF] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] touch-pan-y"
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

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const isEven = index % 2 === 0;
  const [sliderPos, setSliderPos] = useState(50);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, width } = cardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - left, width));
    setSliderPos((x / width) * 100);
  };

  const handleReset = () => setSliderPos(50);

  return (
    <motion.div
      id={`service-${service.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`w-full flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-center p-6 md:p-10 lg:p-12 rounded-[28px] bg-[#EBF2FF] relative scroll-mt-24`}
    >
      <motion.div variants={imageVariants} className="w-full lg:w-1/2 shrink-0">
        <BeforeAfterImage
          beforeImg={service.beforeImage}
          afterImg={service.afterImage}
          alt={service.title}
          sliderPos={sliderPos}
          onPosChange={setSliderPos}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="w-full lg:w-1/2 flex flex-col items-start"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[#2563eb] text-[24px] md:text-[32px] font-[800] tracking-tight mb-4"
        >
          {service.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[#6B7280] text-[14px] md:text-[15px] font-medium leading-relaxed mb-8"
        >
          {service.description}
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="flex flex-col gap-3.5 mb-10"
        >
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <FiCheck
                className="text-[#2563EB] w-[18px] h-[18px] shrink-0"
                strokeWidth={3}
              />
              <span className="text-[#111827] text-[13px] md:text-[14px] font-bold">
                {feature}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        <Link
          href="/contact"
          className="bg-[#2563EB] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#1d4ed8] flex items-center gap-2 text-[14px] md:text-[15px] hover:shadow-2xl hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 w-full md:w-auto justify-center md:justify-start text-center"
        >
          Get a Free Trial <BsArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const scrollToService = (id: number) => {
    document.getElementById(`service-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full flex flex-col bg-transparent">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full pt-20 pb-12 lg:pt-40 lg:pb-16 px-4 md:px-8"
      >
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6"
          >
            OUR COMPLETE SERVICES
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-[#111827] text-[36px] md:text-[48px] lg:text-[56px] font-[800] tracking-tight leading-[1.1] mb-6"
          >
            Comprehensive Image <br className="hidden md:block" />
            <span className="text-[#2563EB]">Editing Solutions</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[650px]"
          >
            Explore our full suite of professional photo editing and retouching
            services. Drag the slider on any image below to experience our
            precision before and after.
          </motion.p>
        </div>
      </motion.section>

      {/* Navigation Tabs (Table Style) */}
      <section className="w-full mb-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 2xl:px-0">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full rounded-3xl md:rounded-4xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.03)] overflow-hidden shadow-[0_4px_40px_0_rgba(41,98,255,0.03)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {servicesData.map((service) => (
                <motion.button
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => scrollToService(service.id)}
                  className="group flex items-center justify-center text-center h-full p-4 lg:p-5 bg-transparent hover:bg-[rgba(37,99,235,0.06)] transition-colors duration-300 border-[rgba(175,189,220,0.15)] border cursor-pointer"
                >
                  <span className="text-[#111827] text-[12px] md:text-[14px] font-semibold leading-snug">
                    {service.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="w-full pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 2xl:px-0 flex flex-col gap-12 md:gap-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full py-16 px-4 md:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-300 mx-auto rounded-4xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.05)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
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
        </motion.div>
      </motion.section>
    </div>
  );
}
