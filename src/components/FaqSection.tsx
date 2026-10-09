import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { toolsWorkshopImage } from "../config/images";
import { SiteContent } from "../config/content";

interface FaqSectionProps {
  t: SiteContent;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const toolScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.04, 0.98]);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFE1EB] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[#F1CBD9]"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Accordions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
              {t.faq.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.faq.h2}
            </h2>

            {/* Accordion List */}
            <div className="w-full space-y-3.5 pt-2">
              {t.faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[24px] border border-[#F1CBD9] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#2B1020] hover:text-[#D6246E] transition-colors cursor-pointer select-none"
                    >
                      <span>{item.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full bg-[#FFE1EB] text-[#2B1020] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-[#D6246E] text-white" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 font-sans text-sm sm:text-base text-[#6E4A5C] leading-relaxed border-t border-[#F1CBD9]/60 pt-3">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Image Holder with Circular Diagnostic Gear */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px]">
              {/* Solid --sun disc behind upper-left */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -left-5 sm:-top-9 sm:-left-9 w-[42%] h-[42%] rounded-full bg-[#FFB84D] z-0"
              />

              <motion.div
                style={{ scale: toolScale }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-white"
              >
                <img
                  src={toolsWorkshopImage.src}
                  alt={toolsWorkshopImage.alt}
                  width={toolsWorkshopImage.width}
                  height={toolsWorkshopImage.height}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
