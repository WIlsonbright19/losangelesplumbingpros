import React from "react";
import { motion } from "motion/react";
import {
  OPEN_24_HOURS,
  RATING_VALUE,
  REVIEW_COUNT,
  LICENSE_LINE,
  SPEAKS_SPANISH,
} from "../config/business";
import { SiteContent } from "../config/content";

interface TrustBandProps {
  t: SiteContent;
}

export const TrustBand: React.FC<TrustBandProps> = ({ t }) => {
  // Collect trust items strictly from config rules
  const items: string[] = [];

  if (OPEN_24_HOURS) {
    items.push(t.trust.open24);
  }

  items.push(t.trust.ratingStars(RATING_VALUE, REVIEW_COUNT));
  items.push(t.trust.location);

  if (LICENSE_LINE && LICENSE_LINE.trim() !== "") {
    items.push(LICENSE_LINE.trim());
  }

  if (SPEAKS_SPANISH) {
    items.push(t.trust.speaksSpanish);
  }

  return (
    <section className="bg-[#FFF1F5] pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[24px] border border-[#F1CBD9] overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr divide-x divide-y md:divide-y-0 divide-[#F1CBD9]">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex items-center justify-center text-center font-sans font-semibold text-xs sm:text-sm text-[#2B1020]"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
