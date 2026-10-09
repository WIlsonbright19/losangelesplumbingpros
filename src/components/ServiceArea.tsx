import React from "react";
import { motion } from "motion/react";
import { AREAS, PHONE_DISPLAY, PHONE_TEL } from "../config/business";
import { areaImage } from "../config/images";
import { SiteContent } from "../config/content";

interface ServiceAreaProps {
  t: SiteContent;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ t }) => {
  return (
    <section id="areas" className="bg-[#FFE1EB] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Area Chips, Call Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start gap-6 sm:gap-8"
          >
            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.serviceArea.h2}
            </h2>

            {/* Areas as large pill chips (--surface fill, 1px --line border) */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {AREAS.map((area) => (
                <div
                  key={area}
                  className="px-6 py-3.5 rounded-full bg-white border border-[#F1CBD9] text-[#2B1020] font-sans font-bold text-base sm:text-lg flex items-center gap-2 select-none"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6246E]" aria-hidden="true" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            {/* "Don't see your area? Call us." line */}
            <div className="pt-2">
              <p className="font-sans text-base sm:text-lg text-[#6E4A5C]">
                <span>{t.serviceArea.callUsPrompt} </span>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-[#D6246E] hover:text-[#B81C5B] font-bold underline underline-offset-4 cursor-pointer"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Column: areaImage as circle with small --sun disc behind lower-right edge */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
              {/* Small --sun disc tucked behind lower-right edge */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 w-[40%] h-[40%] rounded-full bg-[#FFB84D] z-0"
              />

              {/* areaImage as a large circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9]"
              >
                <img
                  src={areaImage.src}
                  alt={areaImage.alt}
                  width={areaImage.width}
                  height={areaImage.height}
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
