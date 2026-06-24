"use client";

import React, { useState } from "react";
import { FiClock, FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const contactInfoData = [
  {
    id: "email",
    title: "Email",
    detail: "hello@fotoperfectionlab.com",
    icon: FiMail,
  },
  {
    id: "phone",
    title: "Phone",
    detail: "+1 (555) 123-4567",
    icon: FiPhone,
  },
  {
    id: "address",
    title: "Address",
    detail: "123 Creative Lane, Suite 400\nSan Francisco, CA 94102",
    icon: FiMapPin,
  },
];

const businessHoursData = [
  { id: 1, day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
  { id: 2, day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { id: 3, day: "Sunday", time: "Closed" },
];

export default function ContactSection() {
  // Form state ready for Nodemailer integration
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Nodemailer API call here
    console.log("Form Data to send:", formData);
    // alert("Message sent successfully!");
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-transparent">
      <div className="max-w-300 mx-auto px-4 md:px-8 xl:px-0 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:py-2 md:px-4 rounded-full border border-[rgba(41,98,255,0.12)] bg-[rgba(37,99,235,0.05)] text-[#2563EB] text-[11px] font-bold tracking-wide mb-6">
            <FiClock className="w-3.5 h-3.5" />
            Response within 24 hours
          </div>

          <h2 className="text-[#111827] text-[36px] md:text-[44px] font-[800] tracking-tight mb-4">
            Get in <span className="text-[#2563EB]">Touch</span>
          </h2>
          <p className="text-[#6B7280] text-[15px] font-medium max-w-[460px] leading-relaxed">
            Ready to elevate your images? Send us a message and our team will
            get back to you promptly.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 justify-center">
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <div className="w-full lg:w-[380px] flex flex-col gap-4">
            {/* Dynamic Contact Cards */}
            {contactInfoData.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="flex items-center gap-4 p-5 rounded-[16px] border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] shadow-[0_6px_10px_0_rgba(37,99,235,0.10)]"
                >
                  <div className="shrink-0 w-12 h-12 rounded-[12px] bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#6B7280] text-[11px] font-bold uppercase tracking-wider mb-0.5">
                      {card.title}
                    </span>
                    <span className="text-[#111827] text-[14px] font-semibold whitespace-pre-line leading-snug">
                      {card.detail}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Business Hours Card */}
            <div className="flex flex-col p-6 rounded-[16px] border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] shadow-[0_6px_10px_0_rgba(37,99,235,0.10)] mt-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <h3 className="text-[#111827] text-[12px] font-bold uppercase tracking-wider">
                  Business Hours
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {businessHoursData.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="flex justify-between items-center text-[13px]"
                  >
                    <span className="text-[#6B7280] font-medium">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-semibold ${schedule.time === "Closed" ? "text-[#9CA3AF] font-medium" : "text-[#111827]"}`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="w-full lg:flex-1 p-6 sm:p-8 md:p-10 rounded-[32px] border border-[rgba(37,99,235,0.15)] bg-[rgba(37,99,235,0.05)] shadow-[0_6px_10px_0_rgba(37,99,235,0.10)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-[#9CA3AF] text-[11px] font-bold uppercase tracking-wider pl-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Fardin Evan"
                  required
                  className="w-full px-4 py-3.5 text-[14.5px] text-[#111827] placeholder:text-[#9CA3AF] rounded-[12px] border border-[#E2E8F0] bg-[rgba(248,250,252,0.50)] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#9CA3AF] text-[11px] font-bold uppercase tracking-wider pl-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3.5 text-[14.5px] text-[#111827] placeholder:text-[#9CA3AF] rounded-[12px] border border-[#E2E8F0] bg-[rgba(248,250,252,0.50)] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[#9CA3AF] text-[11px] font-bold uppercase tracking-wider pl-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3.5 text-[14.5px] text-[#111827] placeholder:text-[#9CA3AF] rounded-[12px] border border-[#E2E8F0] bg-[rgba(248,250,252,0.50)] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 mb-2">
                <label
                  htmlFor="message"
                  className="text-[#9CA3AF] text-[11px] font-bold uppercase tracking-wider pl-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 text-[14.5px] text-[#111827] placeholder:text-[#9CA3AF] rounded-[12px] border border-[#E2E8F0] bg-[rgba(248,250,252,0.50)] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 text-white font-semibold text-[15px] rounded-[16px] bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_20px_40px_-10px_rgba(30,86,227,0.22)] px-8 py-3.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  <FiSend className="w-4 h-4 mb-0.5" strokeWidth={2.5} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
