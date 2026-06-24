import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import CraftingCredit from "./CraftingCredit";

// Mock Data
const globalData = {
  logo: "/logo/logo.png",
  companyName: "Foto Perfection Lab",
  description:
    "Professional photo editing and retouching services for e-commerce brands, photographers, and studios worldwide.",
  copyright: "© 2026 Foto Perfection Lab. All rights reserved.",
};

const socialLinks = [
  { id: "linkedin", icon: FiLinkedin, url: "https://linkedin.com" },
  { id: "twitter", icon: FiTwitter, url: "https://twitter.com" },
  { id: "instagram", icon: FiInstagram, url: "https://instagram.com" },
  { id: "email", icon: FiMail, url: "mailto:hello@example.com" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Background Removal", url: "/services/background-removal" },
      { label: "Shadow Creation", url: "/services/shadow-creation" },
      { label: "Image Masking", url: "/services/image-masking" },
      { label: "Photo Retouching", url: "/services/photo-retouching" },
      { label: "Jewellery Retouching", url: "/services/jewellery-retouching" },
      { label: "Ghost Mannequin", url: "/services/ghost-mannequin" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Our Team", url: "/team" },
      { label: "Portfolio", url: "/portfolio" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", url: "/blog" },
      { label: "Pricing", url: "/pricing" },
      { label: "FAQ", url: "/faq" },
      { label: "Terms of Service", url: "/terms" },
      { label: "Privacy Policy", url: "/privacy" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 xl:px-16 2xl:px-0 pt-16 md:pt-24 bg-transparent">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-8 rounded-t-[36px] border-t border-[rgba(30,86,227,0.90)] bg-[rgba(30,86,227,0.10)] shadow-[0_6px_10px_0_rgba(37,99,235,0.25)]">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="mb-6">
              <Image
                src={globalData.logo}
                alt={globalData.companyName}
                width={200}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-[#6B7280] text-[14px] md:text-[15px] leading-relaxed font-medium mb-8 max-w-[320px]">
              {globalData.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300 rounded-[12px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)]">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-[#2563EB] text-[16px] font-bold mb-6 tracking-wide">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-[#6B7280] text-[14px] font-medium hover:text-[#2563EB] transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[#9CA3AF] text-[13px] md:text-[14px] font-medium text-center md:text-left">
            {globalData.copyright}
          </p>
          <div className="flex items-center gap-6 mt-5 md:mt-0">
            <CraftingCredit />
          </div>
        </div>
      </div>
    </footer>
  );
}
