import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiLinkedin,
  FiMail,
  FiTarget,
  FiEye,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { brandAssets } from "@/lib/asset";

// Mock Data Arrays
const foundersData = [
  {
    id: 1,
    name: "Sayeed Anwar",
    role: "Co-Founder & CEO",
    description:
      "10+ years of experience in photo editing industry. Visionary leader and quality enthusiast.",
    image: "/founders/founder1.jpg",
    socials: {
      behance: "https://behance.net/mdsayeed459f62",
      linkedin: "https://linkedin.com",
      email: "mailto:sayeed@example.com",
    },
  },
  {
    id: 2,
    name: "Sazibur Rahman",
    role: "Co-Founder & Creative Director",
    description:
      "Expert in visual aesthetics and creative editing. Ensures every image looks its best.",
    image: "/founders/founder2.jpg",
    socials: {
      behance: "https://behance.net/mdsaziburrahman2",
      linkedin: "https://linkedin.com/in/md-sazibur-rahman-a70168257",
      email: "mailto:mdsazibur34@gmail.com",
    },
  },
];

const missionVisionData = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "Our mission is to help businesses present their products and brands with clean, professional, and visually compelling imagery that attracts customers and increases sales.",
    icon: FiTarget,
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To become a trusted global partner for photo editing and retouching services by delivering exceptional quality, reliability, and customer satisfaction.",
    icon: FiEye,
  },
];

export default function FoundersAndMission() {
  return (
    <section className="w-full py-16 lg:py-20 bg-transparent">
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col gap-12 lg:gap-16">
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
            <h2 className="text-[#111827] text-[28px] md:text-[32px] font-extrabold tracking-tight">
              Meet Our <span className="text-[#2563EB]">Founders</span>
            </h2>
          </div>
          <p className="text-[#6B7280] text-[15px] font-medium mb-8">
            The visionaries who built {brandAssets.name} from the ground up.
          </p>

          {/* Founders Cards */}
          {/* Added items-stretch to align card heights perfectly */}
          <div className="flex flex-col sm:flex-row gap-6 items-stretch">
            {foundersData.map((founder) => (
              <div
                key={founder.id}
                className="w-full sm:w-[320px] flex flex-col items-center text-center p-4 rounded-[28px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_8px_40px_0_rgba(41,95,255,0.10),0_2px_12px_0_rgba(0,0,0,0.05)] backdrop-blur-[10px] hover:scale-105 transition-transform duration-300 hover:border-[rgba(37,99,235,0.40)] hover:shadow-[0_8px_40px_0_rgba(41,95,255,0.20),0_2px_12px_0_rgba(0,0,0,0.10)]"
              >
                {/* Founder Image */}
                <div className="w-full aspect-4/5 rounded-[20px] overflow-hidden mb-5 relative bg-[#E1EBFF] shrink-0">
                  {/* Replaced fill with width/height */}
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={320}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[rgba(8,35,123,0.8)] via-[rgba(238,242,255,0.05)] to-transparent h-full w-full"></div>
                </div>

                {/* Info */}
                {/* Added flex-1 and flex-col to force this container to absorb extra space */}
                <div className="flex flex-col flex-1 w-full">
                  <h3 className="text-[#111827] text-[18px] font-bold tracking-tight mb-1 uppercase hover:scale-105 transition-transform duration-300">
                    {founder.name}
                  </h3>
                  <h4 className="text-[#2563EB] text-[13px] font-bold mb-4">
                    {founder.role}
                  </h4>
                  <p className="text-[#6B7280] text-[13px] leading-snug font-medium mb-6 px-2">
                    {founder.description}
                  </p>
                </div>

                {/* Social Links */}
                {/* Added mt-auto to push the social links evenly to the bottom of every card */}
                <div className="flex items-center justify-center gap-3 mb-2 mt-auto w-full">
                  <Link
                    href={founder.socials.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-xl border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                      <FaBehance className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </Link>
                  <Link
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-xl border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                      <FiLinkedin className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </Link>
                  <Link href={founder.socials.email}>
                    <div className="w-10 h-10 rounded-xl border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                      <FiMail className="w-4.5 h-4.5" strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  MISSION & VISION*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionVisionData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-start p-8 rounded-[28px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_4px_20px_0_rgba(41,98,255,0.06),0_1px_4px_0_rgba(0,0,0,0.03)] backdrop-blur-[10px] hover:scale-105 transition-transform duration-300 hover:border-[rgba(37,99,235,0.40)] hover:shadow-[0_4px_20px_0_rgba(41,98,255,0.12),0_1px_4px_0_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[linear-gradient(135deg,#3B82F6_0%,#1D4ED8_100%)] shadow-[0_8px_24px_0_rgba(41,98,255,0.30)] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[#2563EB] text-[20px] font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] text-[14px] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* LET'S WORK TOGETHER */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-10 rounded-4xl border border-[rgba(37,99,235,0.70)] bg-[rgba(37,99,235,0.08)] shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.50)] backdrop-blur-[10px] hover:scale-105 transition-transform duration-300 hover:border-[rgba(37,99,235,0.90)] hover:shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.70)]">
          <div className="flex gap-5 flex-1">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[linear-gradient(135deg,#3B82F6_0%,#1D4ED8_100%)] shadow-[0_8px_24px_0_rgba(41,98,255,0.30)] flex items-center justify-center text-white mt-1">
              <FiBriefcase className="w-6 h-6" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col">
              <h3 className="text-[#111827] text-[22px] md:text-[24px] font-extrabold tracking-tight mb-3">
                Let&apos;s Work Together
              </h3>
              <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium mb-4 max-w-3xl">
                Whether you need a few images retouched or thousands of product
                photos processed every month, {brandAssets.name} is ready to
                support your workflow with precision and efficiency.
              </p>
              <p className="text-[#111827] text-[14px] font-bold mb-1">
                Bring your images to perfection with{" "}
                <span className="text-[#2563EB]">{brandAssets.name}.</span>
              </p>
              <p className="text-[#9CA3AF] text-[13px] font-medium">
                Ready to elevate your images? Contact us today and get a free
                quote for your next project.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] transition-transform hover:scale-105 active:scale-95 cursor-pointer rounded-full px-8 py-4 bg-[linear-gradient(103deg,#2962FF_0%,#2F5FFF_50%,#5480FF_100%)] shadow-[0_8px_24px_0_rgba(41,98,255,0.35),0_2px_8px_0_rgba(41,98,255,0.20)] w-full md:w-auto">
                Get My Quotation
                <FiArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
