import React from "react";
import { motion } from "motion/react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  OPEN_24_HOURS,
  SPEAKS_SPANISH,
  RATING_VALUE,
  REVIEW_COUNT,
} from "../config/business";
import { heroImage } from "../config/images";
import { SiteContent } from "../config/content";
import { Language } from "../hooks/useLanguage";

interface HeroProps {
  t: SiteContent;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  // H1 text according to OPEN_24_HOURS
  const h1Text = OPEN_24_HOURS ? t.hero.h1Open24 : t.hero.h1Standard;

  // Single sentence according to OPEN_24_HOURS and SPEAKS_SPANISH
  let sentenceText = OPEN_24_HOURS ? t.hero.sentenceOpen24 : t.hero.sentenceStandard;
  if (SPEAKS_SPANISH) {
    sentenceText = `${sentenceText} ${t.hero.speaksSpanishText}`;
  }

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("quote");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FFF1F5] min-h-screen min-h-[100vh] flex items-center py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Copy, Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6"
          >
            {/* Meta Kicker & 24h Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-[#6E4A5C]">
                {t.hero.label}
              </span>
              {OPEN_24_HOURS && (
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FFE1EB] border border-[#F1CBD9] text-[#2B1020] text-xs font-bold tracking-wide">
                  {t.hero.open24Badge}
                </span>
              )}
            </div>

            {/* Display H1 - Only H1 on page */}
            <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.01em] text-[#2B1020] [text-wrap:balance]">
              {h1Text}
            </h1>

            {/* Value Proposition Sentence (max 22 words) */}
            <p className="font-sans text-[clamp(1rem,1.15vw,1.1875rem)] leading-[1.65] text-[#6E4A5C] max-w-xl">
              {sentenceText}
            </p>

            {/* CTAs: Guaranteed visible without scrolling on 360x640 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-1 sm:pt-2">
              {/* Primary Call Button */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="min-h-[56px] sm:min-h-[60px] px-8 py-4 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-[1.0625rem] flex items-center justify-center gap-2.5 transition-colors cursor-pointer text-center"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                <span>{t.hero.callButton}</span>
              </a>

              {/* Secondary Quote Button */}
              <a
                href="#quote"
                onClick={handleQuoteClick}
                className="min-h-[56px] sm:min-h-[60px] px-8 py-4 rounded-full border-2 border-[#2B1020] text-[#2B1020] hover:bg-[#FFE1EB] font-sans font-bold text-[1.0625rem] flex items-center justify-center transition-colors cursor-pointer text-center"
              >
                {t.hero.quoteButton}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sunset Circle Motif with Overlapping Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 sm:pt-6 lg:pt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[600px]">
              {/* Solid --sun disc tucked behind upper-right edge (solid flat fill) */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -right-5 sm:-top-9 sm:-right-9 w-[45%] h-[45%] rounded-full bg-[#FFB84D] z-0"
              />

              {/* Hero Image as a large perfect circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-2 border-[#F1CBD9]"
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Round rating badge overlapping lower-left edge (--surface, --shadow-pop, circle) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 z-20 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full bg-white shadow-pop border border-[#F1CBD9] flex flex-col items-center justify-center p-3 text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl text-[#2B1020] font-normal leading-none flex items-center justify-center gap-1">
                  <span>{RATING_VALUE}</span>
                  <span className="text-[#FFB84D]" aria-hidden="true">★</span>
                </div>
                <div className="mt-1 font-sans text-[0.7rem] sm:text-xs leading-tight text-[#6E4A5C]">
                  {t.hero.reviewsCountText(REVIEW_COUNT)}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
