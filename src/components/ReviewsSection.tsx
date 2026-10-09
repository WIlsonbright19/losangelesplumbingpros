import React from "react";
import { motion } from "motion/react";
import {
  RATING_VALUE,
  REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
} from "../config/business";
import { SiteContent } from "../config/content";

interface ReviewsSectionProps {
  t: SiteContent;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t }) => {
  return (
    <section id="reviews" className="bg-[#FFF1F5] min-h-screen min-h-[100vh] flex items-center py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-[#2B1020]">
            {t.reviews.h2}
          </h2>
        </div>

        {/* Two Columns Grid: Left Summary, Right 3 Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Big Rating Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-white rounded-[24px] border border-[#F1CBD9] p-8 sm:p-10 flex flex-col items-center sm:items-start text-center sm:text-left gap-4"
          >
            <div className="font-serif text-[clamp(3.5rem,6vw,5rem)] leading-none text-[#2B1020]">
              {RATING_VALUE}
            </div>

            {/* Row of five text stars */}
            <div
              className="flex items-center gap-1 text-[#FFB84D] text-2xl"
              aria-label="5 out of 5 stars"
            >
              {"★★★★★"}
            </div>

            <p className="font-sans text-sm sm:text-base text-[#6E4A5C]">
              {t.reviews.ratingSubtext(REVIEW_COUNT)}
            </p>

            <div className="pt-2">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D6246E] hover:text-[#B81C5B] font-sans font-bold text-sm underline underline-offset-4 cursor-pointer"
              >
                <span>{t.reviews.readMoreGoogle}</span>
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Three Review Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reviews.items.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-[24px] border border-[#F1CBD9] p-6 sm:p-7 flex flex-col justify-between gap-5"
              >
                {/* 5 text stars row */}
                <div
                  className="text-[#FFB84D] text-lg tracking-wider"
                  aria-label="5 stars"
                >
                  {"★★★★★"}
                </div>

                {/* Review Text placeholder */}
                <p className="font-sans text-[clamp(0.9375rem,1vw,1rem)] leading-[1.65] text-[#2B1020] my-auto">
                  "{review.text}"
                </p>

                {/* Author attribution placeholder */}
                <div className="pt-2 border-t border-[#F1CBD9]">
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#6E4A5C]">
                    {review.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
