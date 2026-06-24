import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiAward,
  FiLayers,
  FiUsers,
  FiShield,
} from "react-icons/fi";

// Mock data for the stats grid
const statsData = [
  {
    id: 1,
    value: "10+",
    label: "Years Experience",
    icon: FiAward,
  },
  {
    id: 2,
    value: "50K+",
    label: "Images Edited Daily",
    icon: FiLayers,
  },
  {
    id: 3,
    value: "500+",
    label: "Clients Worldwide",
    icon: FiUsers,
  },
  {
    id: 4,
    value: "99.9%",
    label: "Client Satisfaction",
    icon: FiShield,
  },
];

export default function AboutCard() {
  return (
    <section className="w-full py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content & CTA */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
          <h2 className="text-[#111827] text-4xl md:text-5xl lg:text-[56px] font-[900] tracking-tight leading-[1.1] mb-6">
            About Foto <span className="text-[#2563EB]">Perfection Lab</span>
          </h2>

          <h3 className="text-[#111827] text-lg md:text-[22px] font-bold mb-6">
            <span className="text-[#2563EB]">Precision.</span> Consistency.{" "}
            <span className="text-[#2563EB]">Perfection.</span>
          </h3>

          <p className="text-[#4B5563] text-base md:text-[17px] leading-[1.7] mb-6">
            At Foto Perfection Lab, we specialize in professional photo editing
            and retouching services designed for e-commerce brands,
            photographers, studios, and online retailers. Our goal is simple: to
            transform ordinary images into high-quality visuals that enhance
            brand value and drive customer engagement.
          </p>

          <p className="text-[#4B5563] text-base md:text-[17px] leading-[1.7] mb-10">
            With 10+ years of experience in image post-production, we understand
            that every detail matters. From product photography and fashion
            retouching to background removal and color correction, we ensure
            each image meets the highest standards of quality and consistency.
          </p>

          {/* CTA & Trusted By Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link href="/contact" className="shrink-0">
              <button className="flex items-center justify-center gap-[10px] text-white font-semibold text-[15px] transition-transform hover:scale-105 active:scale-95 cursor-pointer rounded-full px-[28px] py-[14px] bg-[linear-gradient(103deg,#2962FF_0%,#2F5FFF_50%,#5480FF_100%)] shadow-[0_8px_24px_0_rgba(41,98,255,0.35),0_2px_8px_0_rgba(41,98,255,0.20)]">
                Get My Quotation
                <FiArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </Link>

            {/* Trusted By Global Clients */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="w-10 h-10 rounded-full border-2 border-[#E8EEFB] bg-slate-200 overflow-hidden relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${num + 10}`}
                      alt={`Client ${num}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[#6B7280] text-[13px] font-medium leading-tight">
                  Trusted by
                </span>
                <span className="text-[#2563EB] text-[14px] font-bold leading-tight">
                  Global Clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          {/* Outer Glass Card */}
          <div className="w-full max-w-135 p-6 sm:p-8 md:p-10 rounded-[36px] border border-[rgba(37,99,235,0.50)] bg-[rgba(37,99,235,0.10)] shadow-[0_24px_80px_0_rgba(41,98,255,0.10),0_8px_32px_0_rgba(0,0,0,0.06),0_0_0_2px_rgba(255,255,255,0.50)_inset]">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-5">
              {statsData.map((stat) => {
                const Icon = stat.icon;

                return (
                  /* Inner Small Card */
                  <div
                    key={stat.id}
                    className="flex flex-col items-start justify-center p-6 md:p-7 hover:-translate-y-1 transition-transform duration-300 rounded-3xl border border-[rgba(37,99,235,0.25)] bg-[rgba(37,99,235,0.15)] shadow-[0_4px_24px_0_rgba(47,95,255,0.07),0_1px_4px_0_rgba(0,0,0,0.04)]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[rgba(37,99,235,0.15)] flex items-center justify-center mb-4 border border-[rgba(37,99,235,0.2)] text-[#2563EB]">
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                    </div>

                    <h4 className="text-[#2563EB] text-[28px] md:text-[32px] font-extrabold leading-none tracking-tight mb-2">
                      {stat.value}
                    </h4>

                    <p className="text-[#6B7280] text-[13px] md:text-[14px] font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
