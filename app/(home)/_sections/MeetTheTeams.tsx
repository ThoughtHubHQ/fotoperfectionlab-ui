"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

// Mock Data
const teamData = [
  {
    id: 1,
    name: "Sohan Rana",
    role: "Marketing Executive",
    description:
      "Crafts compelling campaigns and content strategies that amplify our brand presence across digital channels.",
    image: "/teams/sohanrana.jpg",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:sohan@fotoperfectionlab.com",
    },
  },
  {
    id: 2,
    name: "Hadit Sagar",
    role: "Lead Photo Retoucher",
    description:
      "Expert in high-end retouching, ensuring every image meets the highest standards for e-commerce and editorial use.",
    image: "/teams/haditsagar.png",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:hadit@fotoperfectionlab.com",
    },
  },
  {
    id: 3,
    name: "Ariful Islam",
    role: "Senior Photo Retoucher",
    description:
      "Specializes in advanced retouching techniques, delivering flawless images that enhance product appeal and visual storytelling.",
    image: "/teams/arifulislam.jpg",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:ariful@fotoperfectionlab.com",
    },
  },
  {
    id: 4,
    name: "Ekramul Hasan",
    role: "Jewelry & Luxury Retoucher",
    description:
      "Transforms fine jewelry and luxury product shots into magazine-ready hero images.",
    image: "/teams/ekramulhasan.png",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:ekramul@fotoperfectionlab.com",
    },
  },
  {
    id: 5,
    name: "Kutub Uddin",
    role: "E-Commerce Image Editor",
    description:
      "Specializes in e-commerce image editing, ensuring product images are optimized for online retail platforms.",
    image: "/teams/kutubuddin.png",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:kutub@fotoperfectionlab.com",
    },
  },
  {
    id: 6,
    name: "Kawar Ali",
    role: "Photo Retoucher",
    description:
      "Expert in photo retouching, enhancing images to meet client specifications and industry standards.",
    image: "/teams/kawarali.jpg",
    socials: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "mailto:kawar@fotoperfectionlab.com",
    },
  },
];

export default function MeetTheTeam() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    isHovered: false,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;

    const play = () => {
      if (!dragRef.current.isHovered && !dragRef.current.isDragging) {
        slider.scrollLeft += 1;

        // Use the exact scrollable width divided by 2 to prevent the 1-pixel glitch
        const halfWidth = slider.scrollWidth / 2;

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
    if (!dragRef.current.isDragging || !slider) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5;

    let newScroll = dragRef.current.scrollLeft - walk;
    const halfWidth = slider.scrollWidth / 2;

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />

      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-16 2xl:px-0 flex flex-col">
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

        {/* Draggable & Swipable Container */}
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
          {/* Mapped array twice to handle the duplication cleanly without messy code block repeats */}
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex gap-4 md:gap-6 lg:gap-8 shrink-0 pr-4 md:pr-6 lg:pr-8"
            >
              {teamData.map((member, index) => (
                <div
                  key={`${member.id}-${setIndex}-${index}`}
                  className="shrink-0 w-65 sm:w-70 md:w-[320px] flex flex-col text-center rounded-[20px] md:rounded-[28px] border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.08)] shadow-[0_0_10px_0_rgba(37,99,235,0.15),0_4px_20px_0_rgba(37,99,235,0.06),0_1px_4px_0_rgba(0,0,0,0.03)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="w-full aspect-4/3.5 relative bg-[#E1EBFF]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      draggable={false}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col grow p-4 md:p-6">
                    <h3 className="text-[#111827] text-[15px] md:text-[19px] font-bold tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <h4 className="text-[#2563EB] text-[11px] md:text-[13px] font-semibold mb-3 md:mb-4 tracking-wide leading-tight">
                      {member.role}
                    </h4>

                    <p className="text-[#6B7280] text-[12px] md:text-[13px] leading-normal md:leading-[1.6] font-medium mb-5 md:mb-6 grow line-clamp-3">
                      {member.description}
                    </p>

                    <div className="flex justify-center items-center gap-2 md:gap-3 mt-auto">
                      <Link
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onDragStart={(e) => e.preventDefault()}
                      >
                        <div className="w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-lg md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                          <FiLinkedin
                            className="w-3 h-3 md:w-3.75 md:h-3.75"
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
                        <div className="w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-lg md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                          <FiTwitter
                            className="w-3 h-3 md:w-3.75 md:h-3.75"
                            strokeWidth={2.5}
                          />
                        </div>
                      </Link>
                      <Link
                        href={member.socials.email}
                        onDragStart={(e) => e.preventDefault()}
                      >
                        <div className="w-7.5 h-7.5 md:w-8.5 md:h-8.5 rounded-lg md:rounded-[10px] border border-[rgba(41,98,255,0.13)] bg-[rgba(41,98,255,0.07)] flex items-center justify-center text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors duration-300">
                          <FiMail
                            className="w-3 h-3 md:w-3.75 md:h-3.75"
                            strokeWidth={2.5}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
