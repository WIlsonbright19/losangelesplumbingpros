import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { bathroomFixturesImage } from "../config/images";
import { SiteContent } from "../config/content";

interface FixturesShowcaseProps {
  t: SiteContent;
}

export const FixturesShowcase: React.FC<FixturesShowcaseProps> = ({ t }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.04, 0.98]);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("quote");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFE1EB] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32 overflow-hidden border-y border-[#F1CBD9]"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Image Holder with Circular Motif & Motion Scale */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
              {/* Solid --sun disc behind upper-right */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -right-5 sm:-top-9 sm:-right-9 w-[42%] h-[42%] rounded-full bg-[#FFB84D] z-0"
              />

              <motion.div
                style={{ scale: imageScale }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9] bg-white"
              >
                <img
                  src={bathroomFixturesImage.src}
                  alt={bathroomFixturesImage.alt}
                  width={bathroomFixturesImage.width}
                  height={bathroomFixturesImage.height}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Narrative, Highlights & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start gap-6"
          >
            <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
              {t.fixturesShowcase.label}
            </span>

            <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
              {t.fixturesShowcase.h2}
            </h2>

            <p className="font-sans text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[#6E4A5C]">
              {t.fixturesShowcase.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 w-full pt-2">
              {t.fixturesShowcase.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-[24px] bg-white border border-[#F1CBD9] flex flex-col gap-1"
                >
                  <h4 className="font-serif text-lg text-[#2B1020] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D6246E] shrink-0" aria-hidden="true" />
                    <span>{h.title}</span>
                  </h4>
                  <p className="font-sans text-sm text-[#6E4A5C] pl-4.5">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Button: "Book or contact us" */}
            <div className="pt-2">
              <a
                href="#quote"
                onClick={handleQuoteClick}
                className="min-h-[56px] px-8 py-4 rounded-full border-2 border-[#2B1020] text-[#2B1020] hover:bg-white font-sans font-bold text-[1.0625rem] inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                {t.fixturesShowcase.quoteButton}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
