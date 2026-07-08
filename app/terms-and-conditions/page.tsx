import React from "react";
import { Metadata } from "next";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Terms & Conditions - ${brandAssets.name}`,
  description:
    `Read the terms and conditions for using ${brandAssets.name}'s professional photo editing services. Understand your rights, responsibilities, and our service policies.`,
};

// Mock Data
const headerData = {
  tag: "LEGAL AGREEMENT",
  titleStart: "Terms &",
  titleHighlight: "Conditions",
  description:
    "Last updated: June 25, 2026. Please read these terms carefully before using our photo editing services.",
};

const termsData = [
  {
    id: 1,
    title: "1. Introduction",
    content:
      `Welcome to ${brandAssets.name}. By accessing our website and using our professional photo editing, retouching, and manipulation services, you agree to comply with and be bound by the following terms and conditions of use.`,
  },
  {
    id: 2,
    title: "2. Service Provision & Delivery",
    content:
      "We strive to deliver all edited images within the agreed-upon timeframe (standard delivery is typically 24 hours). Fast turnaround options (1-12 hours) are subject to availability and specific project complexity. Delivery times commence once we have received all necessary files and specific instructions from the client.",
  },
  {
    id: 3,
    title: "3. Revisions and Quality Guarantee",
    content:
      "We offer unlimited revisions to ensure you are 100% satisfied with the final result, provided that the revision requests do not deviate from the original instructions submitted with the order.",
    list: [
      "Revision requests must be made within 14 days of receiving the completed files.",
      "Requests for entirely new edits or instructions not initially provided will be treated as a new order and billed accordingly.",
    ],
  },
  {
    id: 4,
    title: "4. Intellectual Property & Copyright",
    content:
      `You, the client, retain full copyright and ownership of all original images submitted to us. ${brandAssets.name} claims no ownership over your intellectual property. By submitting images, you grant us a temporary, non-exclusive license solely for the purpose of performing the requested editing services. We will never use your images for our portfolio or marketing without your explicit written consent.`,
  },
  {
    id: 5,
    title: "5. Payment Terms",
    content:
      `Pricing is based on image complexity, volume, and requested turnaround time. Quotes provided are valid for 30 days. For new clients, payment may be required upfront or upon approval of watermarked sample edits. Established clients may be eligible for monthly invoicing.`,
  },
  {
    id: 6,
    title: "6. Limitation of Liability",
    content:
      `While we take every precaution to ensure data security, ${brandAssets.name} shall not be held liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of data, lost profits, or business interruption.`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="w-full flex flex-col bg-transparent pb-20">
      {/* Header Section */}
      <section className="w-full pt-20 pb-12 lg:pt-32 lg:pb-16 px-4 md:px-8">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6">
            {headerData.tag}
          </div>
          <h1 className="text-[#111827] text-[36px] md:text-[48px] font-[800] tracking-tight leading-[1.1] mb-6">
            {headerData.titleStart}{" "}
            <span className="text-[#2563EB]">{headerData.titleHighlight}</span>
          </h1>
          <p className="text-[#6B7280] text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[650px]">
            {headerData.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full px-4 md:px-8">
        <div className="max-w-[800px] mx-auto bg-white rounded-[32px] border border-[rgba(37,99,235,0.15)] shadow-[0_8px_30px_0_rgba(37,99,235,0.04)] p-8 md:p-12 lg:p-16">
          <div className="prose prose-lg max-w-none text-[#4B5563]">
            {termsData.map((section, index) => (
              <div key={section.id} className={index !== 0 ? "mt-10" : ""}>
                <h2 className="text-[#111827] text-[22px] md:text-[26px] font-bold mb-4 mt-0">
                  {section.title}
                </h2>
                <p
                  className={`text-[15px] leading-[1.8] ${section.list ? "mb-4" : "mb-0"}`}
                >
                  {section.content}
                </p>
                {section.list && (
                  <ul className="list-disc pl-5 text-[15px] leading-[1.8] space-y-2 mb-0">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
