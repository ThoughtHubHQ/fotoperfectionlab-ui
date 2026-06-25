import React from "react";
import Image from "next/image";

// Mock Data
const portfolioData = [
  // Group 1: 3000x2000 (3:2 Aspect Ratio)
  {
    id: "bg-removal",
    prefix: "Background",
    highlight: "Removal",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/bg-1.jpg",
      "/portfolio/bg-2.jpg",
      "/portfolio/bg-3.jpg",
      "/portfolio/bg-4.jpg",
    ],
  },
  {
    id: "shadow-creation",
    prefix: "Shadow",
    highlight: "Creation",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/shadow-1.jpg",
      "/portfolio/shadow-2.jpg",
      "/portfolio/shadow-3.jpg",
      "/portfolio/shadow-4.jpg",
    ],
  },
  {
    id: "image-masking",
    prefix: "Image",
    highlight: "Masking",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/masking-1.jpg",
      "/portfolio/masking-2.jpg",
      "/portfolio/masking-3.jpg",
      "/portfolio/masking-4.jpg",
    ],
  },
  {
    id: "photo-retouching",
    prefix: "Photo",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/retouch-1.jpg",
      "/portfolio/retouch-2.jpg",
      "/portfolio/retouch-3.jpg",
      "/portfolio/retouch-4.jpg",
      "/portfolio/retouch-5.jpg",
      "/portfolio/retouch-6.jpg",
      "/portfolio/retouch-7.jpg",
      "/portfolio/retouch-8.jpg",
    ],
  },
  {
    id: "jewellery-retouching",
    prefix: "Jewellery",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/jewel-1.jpg",
      "/portfolio/jewel-2.jpg",
      "/portfolio/jewel-3.jpg",
      "/portfolio/jewel-4.jpg",
      "/portfolio/jewel-5.jpg",
      "/portfolio/jewel-6.jpg",
      "/portfolio/jewel-7.jpg",
      "/portfolio/jewel-8.jpg",
    ],
  },
  {
    id: "ghost-mannequin",
    prefix: "Ghost",
    highlight: "Mannequin",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/ghost-1.jpg",
      "/portfolio/ghost-2.jpg",
      "/portfolio/ghost-3.jpg",
      "/portfolio/ghost-4.jpg",
    ],
  },
  {
    id: "apparel-editing",
    prefix: "Apparel",
    highlight: "Editing",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/apparel-1.jpg",
      "/portfolio/apparel-2.jpg",
      "/portfolio/apparel-3.jpg",
      "/portfolio/apparel-4.jpg",
    ],
  },
  {
    id: "ecommerce-editing",
    prefix: "E-commerce Photo",
    highlight: "Editing",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/ecom-1.jpg",
      "/portfolio/ecom-2.jpg",
      "/portfolio/ecom-3.jpg",
      "/portfolio/ecom-4.jpg",
      "/portfolio/ecom-5.jpg",
      "/portfolio/ecom-6.jpg",
      "/portfolio/ecom-7.jpg",
      "/portfolio/ecom-8.jpg",
    ],
  },
  {
    id: "real-estate",
    prefix: "Real Estate Photo",
    highlight: "Editing",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/estate-1.jpg",
      "/portfolio/estate-2.jpg",
      "/portfolio/estate-3.jpg",
      "/portfolio/estate-4.jpg",
    ],
  },
  {
    id: "food-retouching",
    prefix: "Food",
    highlight: "Retouching",
    aspect: "aspect-[3/2]",
    images: [
      "/portfolio/food-1.jpg",
      "/portfolio/food-2.jpg",
      "/portfolio/food-3.jpg",
      "/portfolio/food-4.jpg",
    ],
  },

  // Group 2: 3000x2500 (6:5 Aspect Ratio)
  {
    id: "headshot-portrait",
    prefix: "Headshot & Portrait",
    highlight: "Retouching",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/portrait-1.jpg",
      "/portfolio/portrait-2.jpg",
      "/portfolio/portrait-3.jpg",
      "/portfolio/portrait-4.jpg",
    ],
  },
  {
    id: "baby-photo",
    prefix: "Baby Photo",
    highlight: "Retouching",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/baby-1.jpg",
      "/portfolio/baby-2.jpg",
      "/portfolio/baby-3.jpg",
      "/portfolio/baby-4.jpg",
    ],
  },
  {
    id: "beauty-retouching",
    prefix: "Beauty",
    highlight: "Retouching",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/beauty-1.jpg",
      "/portfolio/beauty-2.jpg",
      "/portfolio/beauty-3.jpg",
      "/portfolio/beauty-4.jpg",
    ],
  },
  {
    id: "model-retouching",
    prefix: "Model",
    highlight: "Retouching",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/model-1.jpg",
      "/portfolio/model-2.jpg",
      "/portfolio/model-3.jpg",
      "/portfolio/model-4.jpg",
    ],
  },
  {
    id: "photo-restoration",
    prefix: "Photo",
    highlight: "Restoration",
    aspect: "aspect-[6/5]",
    images: [
      "/portfolio/restore-1.jpg",
      "/portfolio/restore-2.jpg",
      "/portfolio/restore-3.jpg",
      "/portfolio/restore-4.jpg",
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
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
        </div>

        {/* Portfolio Categories */}
        <div className="flex flex-col gap-12 md:gap-16">
          {portfolioData.map((category) => (
            <div key={category.id} className="w-full flex flex-col">
              <h3 className="text-[#111827] text-[18px] md:text-[22px] font-bold tracking-tight mb-6 px-1">
                {category.prefix}{" "}
                <span className="text-[#2563EB]">{category.highlight}</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {category.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`relative w-full ${category.aspect} rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#E1EBFF] shadow-sm group`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${category.prefix} ${category.highlight} Sample ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
