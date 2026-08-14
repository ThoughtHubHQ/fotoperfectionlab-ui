"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

// Mock Data
const teamData = [
  {
    id: 1,
    name: "Marcus Reid",
    role: "Founder & Lead Retoucher",
    description:
      "10+ years mastering high-end product and fashion retouching for global e-commerce brands.",
    image: "/teams/member1.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:marcus@example.com",
    },
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Senior Photo Editor",
    description:
      "Specialist in color science and skin retouching with a background in commercial photography.",
    image: "/teams/member2.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sophia@example.com",
    },
  },
  {
    id: 3,
    name: "Daniel Torres",
    role: "Background & Clipping Expert",
    description:
      "Pixel-perfect path work on tens of thousands of catalogue images for Shopify and Amazon sellers.",
    image: "/teams/member3.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:daniel@example.com",
    },
  },
  {
    id: 4,
    name: "Aisha Nwosu",
    role: "Jewelry & Luxury Retoucher",
    description:
      "Transforms fine jewelry and luxury product shots into magazine-ready hero images.",
    image: "/teams/member4.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:aisha@example.com",
    },
  },
  {
    id: 5,
    name: "James Whitfield",
    role: "Ghost Mannequin Specialist",
    description:
      "Delivers flawless invisible mannequin composites that elevate fashion catalogue presentation.",
    image: "/teams/member5.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:james@example.com",
    },
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "Client Success Manager",
    description:
      "Ensures every project is delivered on time with clear communication and zero compromise on quality.",
    image: "/teams/member6.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:priya@example.com",
    },
  },
];

export default function MeetTheTeam() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Using refs instead of state for drag mechanics prevents expensive re-renders on every pixel moved
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    isHovered: false,
  });

  // Continuous infinite auto-scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    const inner = innerRef.current;
    if (!slider || !inner) return;

    let animationId: number;

    const play = () => {
      if (!dragRef.current.isHovered && !dragRef.current.isDragging) {
        slider.scrollLeft += 1;
        const halfWidth = inner.offsetWidth;

        // Seamless wrap around when hitting the halfway point
        if (slider.scrollLeft >= halfWidth) {
          slider.scrollLeft -= halfWidth;
        } else if (slider.scrollLeft <= 0) {
          slider.scrollLeft += halfWidth;
        }
      }
      animationId = requestAnimationFrame(play);
    };
    play();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // --- Mouse Drag Handlers for Desktop ---
  const onMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.pageX - slider.offsetLeft;
    dragRef.current.scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    const inner = innerRef.current;
    if (!dragRef.current.isDragging || !slider || !inner) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5; // Drag speed multiplier

    let newScroll = dragRef.current.scrollLeft - walk;
    const halfWidth = inner.offsetWidth;

    // Allow infinite scrolling in both directions while dragging
    if (newScroll >= halfWidth) {
      newScroll -= halfWidth;
      dragRef.current.scrollLeft -= halfWidth;
    } else if (newScroll <= 0) {
      newScroll += halfWidth;
      dragRef.current.scrollLeft += halfWidth;
    }

    slider.scrollLeft = newScroll;
  };

  const onMouseUpOrLeave = () => {
    dragRef.current.isDragging = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  // --- Pause/Play Triggers ---
  const onMouseEnter = () => {
    dragRef.current.isHovered = true;
  };
  const onMouseLeave = () => {
    dragRef.current.isHovered = false;
    onMouseUpOrLeave();
  };
  const onTouchStart = () => {
    dragRef.current.isHovered = true;
  };
  const onTouchEnd = () => {
    dragRef.current.isHovered = false;
  };

  return (
    <section className="w-full py-12 lg:py-24 bg-transparent">
      {/* Hide native scrollbars but keep functionality */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col">
        {/* Header */}
        <div className="w-full flex flex-col mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#2563EB]"></span>
            <h2 className="text-[#111827] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-extrabold tracking-tight">
              Meet <span className="text-[#2563EB]">the Team</span>
            </h2>
          </div>
          <p className="text-[#6B7280] text-[13px] md:text-[15px] font-medium">
            The skilled people behind every pixel perfect edit.
          </p>
        </div>

        {/* Draggable/Swipable Container */}
        <div
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="w-full flex overflow-x-auto scrollbar-hide cursor-grab select-none rounded-[20px] md:rounded-[28px] pb-4 pt-2 px-2"
        >
          {/* Set 1 */}
          <div
            ref={innerRef}
            className="flex gap-4 md:gap-6 lg:gap-8 shrink-0 pr-4 md:pr-6 lg:pr-8"
          >
            {teamData.map((member, index) => (
              <div
                key={`${member.id}-${index}-1`}
                className="shrink-0 w-[260px] sm:w-[280px] md:w-[320px] flex flex-col text-left rounded-[20px] md:rounded-[28px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_0_10px_0_rgba(37,99,235,0.15),0_4px_20px_0_rgba(37,99,235,0.06),0_1px_4px_0_rgba(0,0,0,0.03)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full aspect-[4/5] sm:aspect-[4/3] relative bg-[#E1EBFF]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    draggable={false}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col flex-grow p-4 md:p-6">
                  <h3 className="text-[#111827] text-[15px] md:text-[18px] font-bold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-[#2563EB] text-[11px] md:text-[13px] font-semibold mb-3 md:mb-4 tracking-wide leading-tight">
                    {member.role}
                  </h4>

                  <p className="text-[#6B7280] text-[12px] md:text-[13px] leading-[1.5] md:leading-[1.6] font-medium mb-5 md:mb-6 flex-grow line-clamp-3">
                    {member.description}
                  </p>

                  <div className="flex items-center gap-2 md:gap-3 mt-auto">
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiLinkedin
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiTwitter
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.socials.email}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiMail
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Set 2 (Duplicated exactly for perfect wrapping) */}
          <div className="flex gap-4 md:gap-6 lg:gap-8 shrink-0 pr-4 md:pr-6 lg:pr-8">
            {teamData.map((member, index) => (
              <div
                key={`${member.id}-${index}-2`}
                className="shrink-0 w-[260px] sm:w-[280px] md:w-[320px] flex flex-col text-left rounded-[20px] md:rounded-[28px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_0_10px_0_rgba(37,99,235,0.15),0_4px_20px_0_rgba(37,99,235,0.06),0_1px_4px_0_rgba(0,0,0,0.03)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full aspect-[4/5] sm:aspect-[4/3] relative bg-[#E1EBFF]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    draggable={false}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col flex-grow p-4 md:p-6">
                  <h3 className="text-[#111827] text-[15px] md:text-[18px] font-bold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-[#2563EB] text-[11px] md:text-[13px] font-semibold mb-3 md:mb-4 tracking-wide leading-tight">
                    {member.role}
                  </h4>

                  <p className="text-[#6B7280] text-[12px] md:text-[13px] leading-[1.5] md:leading-[1.6] font-medium mb-5 md:mb-6 flex-grow line-clamp-3">
                    {member.description}
                  </p>

                  <div className="flex items-center gap-2 md:gap-3 mt-auto">
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiLinkedin
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiTwitter
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                    <Link
                      href={member.socials.email}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <div className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-[8px] md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                        <FiMail
                          className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
