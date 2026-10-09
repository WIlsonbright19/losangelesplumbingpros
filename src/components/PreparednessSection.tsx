import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PHONE_TEL } from "../config/business";
import { serviceVanImage } from "../config/images";
import { SiteContent } from "../config/content";

interface PreparednessSectionProps {
  t: SiteContent;
}

export const PreparednessSection: React.FC<PreparednessSectionProps> = ({ t }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FFF1F5] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[#F1CBD9]"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Tips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
              {t.preparedness.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.preparedness.h2}
            </h2>

            <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C]">
              {t.preparedness.description}
            </p>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
              {t.preparedness.tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] border border-[#F1CBD9] p-5 sm:p-6 flex flex-col gap-3"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FFE1EB] text-[#D6246E] font-serif text-sm font-bold flex items-center justify-center">
                    {tip.step}
                  </span>
                  <h4 className="font-serif text-lg text-[#2B1020] leading-snug">
                    {tip.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#6E4A5C] leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct call action */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-sans text-sm sm:text-base text-[#6E4A5C]">
                {t.preparedness.callPrompt}
              </span>
              <a
                href={`tel:${PHONE_TEL}`}
                className="min-h-[50px] px-7 py-3 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                <span>{t.preparedness.callButton}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Image Holder with Parallax Transition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[560px]">
              {/* Solid --sun disc tucked behind lower-left edge */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 sm:-bottom-8 sm:-left-8 w-[42%] h-[42%] rounded-full bg-[#FFB84D] z-0"
              />

              <motion.div
                style={{ y: bgY }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-white"
              >
                <img
                  src={serviceVanImage.src}
                  alt={serviceVanImage.alt}
                  width={serviceVanImage.width}
                  height={serviceVanImage.height}
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
