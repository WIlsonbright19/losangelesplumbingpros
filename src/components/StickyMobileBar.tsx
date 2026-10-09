import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PHONE_TEL } from "../config/business";
import { SiteContent } from "../config/content";

interface StickyMobileBarProps {
  t: SiteContent;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Visible when bottom of hero is above top of viewport (scrolled out of view)
        setIsVisible(rect.bottom < 0);
      } else {
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("quote");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-30 md:hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#FFF1F5]/85 backdrop-blur-sm border-t border-[#F1CBD9]"
        >
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto shadow-pop rounded-full">
            {/* Call Pill: --primary, white label */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="h-12 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-base flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
              </svg>
              <span>{t.stickyBar.call}</span>
            </a>

            {/* Quote Pill: --surface, --ink label, 1px --line border */}
            <a
              href="#quote"
              onClick={handleQuoteClick}
              className="h-12 rounded-full bg-white text-[#2B1020] border border-[#F1CBD9] hover:bg-[#FFE1EB] font-sans font-bold text-base flex items-center justify-center transition-colors cursor-pointer text-center"
            >
              {t.stickyBar.quote}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
