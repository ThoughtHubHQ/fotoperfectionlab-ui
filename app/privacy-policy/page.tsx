import React from "react";
import { Metadata } from "next";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Privacy Policy - ${brandAssets.name}`,
  description:
    `Read the privacy policy of ${brandAssets.name}. Learn how we collect, use, and strictly protect your personal data and image files.`,
};

// Mock Data
const headerData = {
  tag: "DATA PROTECTION",
  titleStart: "Privacy",
  titleHighlight: "Policy",
  description:
    "Last updated: June 25, 2026. We are strictly committed to protecting your personal information and image files.",
};

const privacyData = [
  {
    id: 1,
    title: "1. Information We Collect",
    content:
      "We collect information that you voluntarily provide to us when you register on our platform, express an interest in obtaining information about us or our products and services, or otherwise contact us.",
    list: [
      {
        label: "Personal Information:",
        text: "Name, email address, phone number, and billing information.",
      },
      {
        label: "Project Files:",
        text: "Images, instructions, and reference materials uploaded for editing purposes.",
      },
      {
        label: "Usage Data:",
        text: "Information on how the website and services are accessed and used.",
      },
    ],
  },
  {
    id: 2,
    title: "2. How We Use Your Information",
    content:
      "We use personal information collected via our website for a variety of business purposes, primarily to provide, operate, and maintain our services. We use your submitted images strictly for fulfilling the requested editing services. Your files are never used for machine learning training, portfolio showcases, or third-party distribution without explicit consent.",
  },
  {
    id: 3,
    title: "3. Data Security & NDA Enforcement",
    content:
      "Data security is a core advantage of our service. All of our customer's files and information are secured. We strictly follow Non-Disclosure Agreement (NDA) signatures to ensure our customers that all data is protected. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information and files we process.",
  },
  {
    id: 4,
    title: "4. Data Retention and Deletion",
    content:
      "We retain your personal information and project files only for as long as is necessary for the purposes set out in this Privacy Policy. Upon project completion and final approval, client images are securely stored for a period of 30 days to facilitate any late revisions, after which they are permanently deleted from our active servers unless otherwise requested by the client.",
  },
  {
    id: 5,
    title: "5. Information Sharing",
    content:
      "We do not share, sell, rent, or trade your information or images with any third parties for their promotional purposes. We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.",
  },
  {
    id: 6,
    title: "6. Contact Us",
    content:
      "If you have questions or comments about this notice, you may email us on support@fotoperfectionlab.com or by post to our registered company address.",
  },
];

export default function PrivacyPolicy() {
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
            {privacyData.map((section, index) => (
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
                      <li key={idx}>
                        <strong>{item.label}</strong> {item.text}
                      </li>
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
