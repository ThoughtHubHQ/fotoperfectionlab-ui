"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Mock Data
const faqData = [
  {
    id: 1,
    question: "What is your standard turnaround time?",
    answer: "Our standard turnaround time is 24 to 48 hours, depending on the complexity and volume of the project. For urgent requirements, we also offer expedited delivery options."
  },
  {
    id: 2,
    question: "Do you offer a free trial or sample edit?",
    answer: "Yes, we offer a free trial for up to 3 images. This allows you to evaluate our quality, communication, and turnaround time before committing to a larger project."
  },
  {
    id: 3,
    question: "What file formats do you accept and deliver?",
    answer: "We accept all major formats including RAW, JPEG, PNG, TIFF, and PSD. We deliver the final edited images in your preferred format and required specifications."
  },
  {
    id: 4,
    question: "Do you provide bulk discounts for large orders?",
    answer: "Absolutely. We offer customized pricing and significant discounts for bulk orders and ongoing monthly retainers. Please contact us with your estimated volume for a tailored quote."
  },
  {
    id: 5,
    question: "What is your revision policy if I am not satisfied?",
    answer: "We offer unlimited revisions until you are 100% satisfied with the final result. Your dedicated project manager will ensure all feedback is implemented precisely."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-transparent">
      <div className="max-w-260 mx-auto px-4 md:px-8 xl:px-0 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#2563EB]"></span>
            <h2 className="text-[#111827] text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight">
              Frequently Asked <span className="text-[#2563EB]">Questions</span>
            </h2>
          </div>
          <p className="text-[#6B7280] text-[14px] md:text-[15px] font-medium max-w-125">
            Find answers to common questions about our photo editing and retouching services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={faq.id}
                className={`w-full flex flex-col rounded-[20px] md:rounded-[24px] border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen 
                    ? "bg-[rgba(37,99,235,0.08)] border-[rgba(37,99,235,0.25)] shadow-[0_8px_24px_0_rgba(37,99,235,0.08)]" 
                    : "bg-[rgba(37,99,235,0.03)] border-[rgba(37,99,235,0.15)] hover:bg-[rgba(37,99,235,0.05)]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-5 md:p-7">
                  <h3 className={`text-[15px] md:text-[17px] font-bold tracking-tight pr-4 transition-colors duration-300 ${
                    isOpen ? "text-[#2563EB]" : "text-[#111827]"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#2563EB] text-white rotate-180" 
                      : "bg-[#EFF6FF] text-[#2563EB]"
                  }`}>
                    <FiChevronDown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </div>
                </div>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-5 md:mb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6B7280] text-[13px] md:text-[15px] leading-relaxed font-medium px-5 md:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}