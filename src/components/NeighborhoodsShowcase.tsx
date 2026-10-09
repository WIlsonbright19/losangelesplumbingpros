import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PHONE_TEL } from "../config/business";
import { neighborhoodsImage } from "../config/images";
import { SiteContent } from "../config/content";

interface NeighborhoodsShowcaseProps {
  t: SiteContent;
}

export const NeighborhoodsShowcase: React.FC<NeighborhoodsShowcaseProps> = ({ t }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFF1F5] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[#F1CBD9]"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Context, Property Type Chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start gap-6"
          >
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
              {t.neighborhoodsShowcase.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.neighborhoodsShowcase.h2}
            </h2>

            <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C]">
              {t.neighborhoodsShowcase.description}
            </p>

            {/* Architectural Chips */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {t.neighborhoodsShowcase.chips.map((chip, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-white border border-[#F1CBD9] text-[#2B1020] font-sans font-bold text-sm select-none"
                >
                  {chip}
                </div>
              ))}
            </div>

            {/* Direct Call Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-sans text-sm sm:text-base text-[#6E4A5C]">
                {t.neighborhoodsShowcase.callPrompt}
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
                <span>{t.neighborhoodsShowcase.callButton}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Image Holder with Parallax Transition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
              {/* Solid --sun disc behind lower-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 sm:-bottom-9 sm:-right-9 w-[42%] h-[42%] rounded-full bg-[#FFB84D] z-0"
              />

              <motion.div
                style={{ y: parallaxY }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-white"
              >
                <img
                  src={neighborhoodsImage.src}
                  alt={neighborhoodsImage.alt}
                  width={neighborhoodsImage.width}
                  height={neighborhoodsImage.height}
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
