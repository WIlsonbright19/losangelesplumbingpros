import React from "react";
import { motion } from "motion/react";
import { SiteContent } from "../config/content";

interface HowItWorksProps {
  t: SiteContent;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  return (
    <section id="how-it-works" className="bg-[#FFE1EB] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
            {t.howItWorks.h2}
          </h2>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {t.howItWorks.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start gap-4 sm:gap-5"
            >
              {/* 80px --primary circle with white DM Serif number */}
              <div className="w-20 h-20 rounded-full bg-[#D6246E] flex items-center justify-center shrink-0">
                <span className="font-serif text-3xl text-white">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.2] text-[#2B1020]">
                {step.title}
              </h3>

              {/* Step Description (max 15 words) */}
              <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
