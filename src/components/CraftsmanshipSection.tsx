import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PHONE_DISPLAY, PHONE_TEL } from "../config/business";
import { craftPipesImage } from "../config/images";
import { SiteContent } from "../config/content";

interface CraftsmanshipSectionProps {
  t: SiteContent;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({ t }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax and subtle scale within the approved 1.00 - 1.08 max range
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.04, 1.0]);

  return (
    <section
      ref={containerRef}
      className="bg-[#FFE1EB] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden border-y border-[#F1CBD9]"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Image Holder with Circle Motif & Motion Parallax */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
              {/* Solid --sun disc behind image */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -left-5 sm:-top-9 sm:-left-9 w-[42%] h-[42%] rounded-full bg-[#FFB84D] z-0"
              />

              {/* Large Image Holder with Motion Scroll Parallax */}
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-white shadow-none"
              >
                <img
                  src={craftPipesImage.src}
                  alt={craftPipesImage.alt}
                  width={craftPipesImage.width}
                  height={craftPipesImage.height}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Narrative & Points */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start gap-6 order-1 lg:order-2"
          >
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
              {t.craftsmanship.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.craftsmanship.h2}
            </h2>

            <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C]">
              {t.craftsmanship.description}
            </p>

            {/* Feature Points */}
            <div className="space-y-4 w-full pt-2">
              {t.craftsmanship.points.map((pt, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-[24px] bg-white border border-[#F1CBD9] flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFE1EB] text-[#D6246E] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#2B1020]">
                      {pt.title}
                    </h4>
                    <p className="font-sans text-sm text-[#6E4A5C] mt-1">
                      {pt.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call Action */}
            <div className="pt-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="min-h-[56px] px-8 py-4 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-[1.0625rem] inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                <span>{t.craftsmanship.callButton}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
