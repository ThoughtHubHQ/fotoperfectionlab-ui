"use client";

import React, { useState } from "react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    priceUsd: "0.49",
    priceEur: "0.45",
    orderLink: "/contact",
  },
  {
    id: "standard",
    name: "Standard",
    priceUsd: "1.00",
    priceEur: "0.95",
    orderLink: "/contact",
  },
  {
    id: "premium",
    name: "Premium",
    priceUsd: "2.50",
    priceEur: "2.35",
    orderLink: "/contact",
  },
];

const pricingFeatures = [
  {
    name: "Clipping Path",
    pricesUsd: { basic: "$0.49", standard: "$1.00", premium: "$2.50" },
    pricesEur: { basic: "€0.45", standard: "€0.95", premium: "€2.35" },
  },
  {
    name: "Background Removal",
    pricesUsd: { basic: "$0.49", standard: "$0.75", premium: "$1.49" },
    pricesEur: { basic: "€0.45", standard: "€0.70", premium: "€1.40" },
  },
  {
    name: "Shadow Creation",
    pricesUsd: { basic: "$0.75", standard: "$0.95", premium: "$1.49" },
    pricesEur: { basic: "€0.70", standard: "€0.90", premium: "€1.40" },
  },
  {
    name: "Image Masking",
    pricesUsd: { basic: "$0.60", standard: "$1.05", premium: "$1.50" },
    pricesEur: { basic: "€0.55", standard: "€1.00", premium: "€1.40" },
  },
  {
    name: "Photo Retouching",
    pricesUsd: { basic: "$1.00", standard: "$1.50", premium: "$2.00" },
    pricesEur: { basic: "€0.95", standard: "€1.40", premium: "€1.90" },
  },
  {
    name: "Jewellery Retouching",
    pricesUsd: { basic: "$1.50", standard: "$2.50", premium: "$4.00" },
    pricesEur: { basic: "€1.40", standard: "€2.35", premium: "€3.75" },
  },
  {
    name: "Ghost Mannequin",
    pricesUsd: { basic: "$0.80", standard: "$1.29", premium: "$2.00" },
    pricesEur: { basic: "€0.75", standard: "€1.20", premium: "€1.90" },
  },
  {
    name: "Apparel Editing",
    pricesUsd: { basic: "$0.70", standard: "$1.10", premium: "$1.80" },
    pricesEur: { basic: "€0.65", standard: "€1.05", premium: "€1.70" },
  },
  {
    name: "E-commerce Photo Editing",
    pricesUsd: { basic: "$0.55", standard: "$0.75", premium: "$1.10" },
    pricesEur: { basic: "€0.50", standard: "€0.70", premium: "€1.05" },
  },
  {
    name: "Color Correction",
    pricesUsd: { basic: "$0.90", standard: "$1.30", premium: "$1.90" },
    pricesEur: { basic: "€0.85", standard: "€1.20", premium: "€1.80" },
  },
  {
    name: "Real Estate Photo Editing",
    pricesUsd: { basic: "$1.20", standard: "$2.00", premium: "$3.50" },
    pricesEur: { basic: "€1.10", standard: "€1.90", premium: "€3.30" },
  },
  {
    name: "Food Retouching",
    pricesUsd: { basic: "$1.00", standard: "$1.80", premium: "$3.00" },
    pricesEur: { basic: "€0.95", standard: "€1.70", premium: "€2.85" },
  },
  {
    name: "Headshot & Portrait Retouching",
    pricesUsd: { basic: "$1.50", standard: "$2.50", premium: "$4.50" },
    pricesEur: { basic: "€1.40", standard: "€2.35", premium: "€4.25" },
  },
  {
    name: "Baby Photo Retouching",
    pricesUsd: { basic: "$1.00", standard: "$2.00", premium: "$3.50" },
    pricesEur: { basic: "€0.95", standard: "€1.90", premium: "€3.30" },
  },
  {
    name: "Beauty Retouching",
    pricesUsd: { basic: "$2.00", standard: "$3.50", premium: "$6.00" },
    pricesEur: { basic: "€1.90", standard: "€3.30", premium: "€5.70" },
  },
  {
    name: "Model Retouching",
    pricesUsd: { basic: "$2.50", standard: "$4.00", premium: "$7.00" },
    pricesEur: { basic: "€2.35", standard: "€3.80", premium: "€6.65" },
  },
  {
    name: "AI Photo Editing",
    pricesUsd: { basic: "$0.50", standard: "$1.00", premium: "$2.00" },
    pricesEur: { basic: "€0.45", standard: "€0.95", premium: "€1.90" },
  },
  {
    name: "Photo Restoration",
    pricesUsd: { basic: "$3.00", standard: "$6.00", premium: "$10.00" },
    pricesEur: { basic: "€2.85", standard: "€5.70", premium: "€9.50" },
  },
  {
    name: "Photo Manipulation",
    pricesUsd: { basic: "$4.00", standard: "$8.00", premium: "$15.00" },
    pricesEur: { basic: "€3.80", standard: "€7.60", premium: "€14.25" },
  },
  {
    name: "Photo Colorization",
    pricesUsd: { basic: "$2.00", standard: "$4.00", premium: "$7.00" },
    pricesEur: { basic: "€1.90", standard: "€3.80", premium: "€6.65" },
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState("USD");

  return (
    <section className="w-full pt-25 lg:pt-40 bg-transparent">
      <div className="max-w-300 mx-auto px-4 md:px-8 xl:px-0 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6">
            OUR PRICING
          </div>
          <h2 className="text-[#111827] text-[32px] md:text-[40px] font-[800] tracking-tight mb-4">
            Simple Transparent <span className="text-[#2563EB]">Pricing</span>
          </h2>
          <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium max-w-[600px] leading-relaxed">
            Replicating the official service rate comparison framework. Clear,
            scalable tiers designed for large production schedules.
          </p>
        </div>

        {/* Currency Toggle and Pricing Table Container */}
        <div className="w-full max-w-300 mx-auto flex flex-col">
          <div className="w-full flex justify-center lg:justify-end mb-4 pr-2">
            <div className="inline-flex bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.15)] rounded-full p-1 shadow-sm">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-5 py-2 text-[12px] font-bold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  currency === "USD"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-[#6B7280] hover:text-[#2563EB]"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("EUR")}
                className={`px-5 py-2 text-[12px] font-bold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  currency === "EUR"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-[#6B7280] hover:text-[#2563EB]"
                }`}
              >
                EUR (€)
              </button>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="w-full overflow-x-auto pb-6">
            <div className="min-w-[800px] flex flex-col rounded-[40px] border border-[rgba(29,97,242,0.40)] bg-[rgba(29,97,242,0.05)] shadow-[0_30px_60px_-15px_rgba(30,86,227,0.10)] backdrop-blur-[12px] overflow-hidden">
              {/* Plan Names */}
              <div className="grid grid-cols-4 bg-[rgba(255,255,255,0.4)] border-b border-[rgba(29,97,242,0.15)]">
                <div className="p-6 border-r border-[rgba(29,97,242,0.15)]"></div>
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="p-6 flex items-center justify-center border-r border-[rgba(29,97,242,0.15)] last:border-r-0"
                  >
                    <h3 className="text-[#2563EB] text-[30px] font-extrabold tracking-tight">
                      {plan.name}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Prices */}
              <div className="grid grid-cols-4 bg-[#2563EB]">
                <div className="p-6 border-r border-white/20"></div>
                {pricingPlans.map((plan) => (
                  <div
                    key={`${plan.id}-price`}
                    className="py-8 px-6 flex flex-col items-center justify-center text-center border-r border-white/20 last:border-r-0"
                  >
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">
                      START FROM
                    </span>
                    <div className="text-white text-[32px] md:text-[40px] font-extrabold leading-none mb-1">
                      {currency === "USD" ? "$" : "€"}
                      {currency === "USD" ? plan.priceUsd : plan.priceEur}
                    </div>
                    <span className="text-white/80 text-[11px] font-semibold">
                      per image
                    </span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-col bg-white/60">
                {pricingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 border-b border-[rgba(29,97,242,0.15)] hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="py-4 px-6 md:px-8 flex items-center border-r border-[rgba(29,97,242,0.15)]">
                      <span className="text-[#111827] text-[13px] md:text-[14px] font-bold">
                        {feature.name}
                      </span>
                    </div>
                    <div className="py-4 px-6 flex items-center justify-center border-r border-[rgba(29,97,242,0.15)]">
                      <span className="text-[#4B5563] text-[13px] md:text-[14px] font-medium">
                        {currency === "USD"
                          ? feature.pricesUsd.basic
                          : feature.pricesEur.basic}
                      </span>
                    </div>
                    <div className="py-4 px-6 flex items-center justify-center border-r border-[rgba(29,97,242,0.15)]">
                      <span className="text-[#4B5563] text-[13px] md:text-[14px] font-medium">
                        {currency === "USD"
                          ? feature.pricesUsd.standard
                          : feature.pricesEur.standard}
                      </span>
                    </div>
                    <div className="py-4 px-6 flex items-center justify-center">
                      <span className="text-[#4B5563] text-[13px] md:text-[14px] font-medium">
                        {currency === "USD"
                          ? feature.pricesUsd.premium
                          : feature.pricesEur.premium}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-4 bg-[rgba(255,255,255,0.4)]">
                <div className="p-6 md:p-8 border-r border-[rgba(29,97,242,0.15)]"></div>
                {pricingPlans.map((plan) => (
                  <div
                    key={`${plan.id}-btn`}
                    className="p-6 md:p-8 flex items-center justify-center border-r border-[rgba(29,97,242,0.15)] last:border-r-0"
                  >
                    <Link href={plan.orderLink}>
                      <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_24px_-6px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                        ORDER NOW
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}