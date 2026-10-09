import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language } from "../hooks/useLanguage";
import { LanguageToggle } from "./LanguageToggle";
import {
  NAME,
  PHONE_TEL,
  ADDRESS_LINE,
  SHOW_ADDRESS,
  OPEN_24_HOURS,
  HOURS_LINE,
} from "../config/business";
import { SiteContent } from "../config/content";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  t: SiteContent;
  hamburgerRef: React.RefObject<HTMLButtonElement | null>;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectLang,
  t,
  hamburgerRef,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key handler & focus return
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        hamburgerRef.current?.focus();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, hamburgerRef]);

  // Close on hash/anchor change
  useEffect(() => {
    const handleHashChange = () => {
      if (isOpen) {
        onClose();
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [isOpen, onClose]);

  const navLinks = [
    { num: "01", href: "#services", label: t.nav.services },
    { num: "02", href: "#how-it-works", label: t.nav.howItWorks },
    { num: "03", href: "#reviews", label: t.nav.reviews },
    { num: "04", href: "#areas", label: t.nav.areas },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    hamburgerRef.current?.focus();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop: --deep at 50% opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => {
              onClose();
              hamburgerRef.current?.focus();
            }}
            className="fixed inset-0 bg-[#3A0F26] backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {/* Drawer panel (all screen sizes including desktop) */}
          <motion.div
            ref={drawerRef}
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.services}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[min(90vw,460px)] bg-white rounded-l-[32px] shadow-pop flex flex-col justify-between p-6 sm:p-8 md:p-10 overflow-y-auto text-[#2B1020]"
          >
            {/* Top row: Brand & Close button */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#F1CBD9]">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#2B1020]">
                {NAME}
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => {
                  onClose();
                  hamburgerRef.current?.focus();
                }}
                className="w-12 h-12 flex items-center justify-center rounded-full text-[#2B1020] hover:bg-[#FFE1EB] transition-colors cursor-pointer"
                aria-label={t.nav.closeMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links staggered in */}
            <nav className="my-auto py-6 sm:py-8 flex flex-col gap-5 sm:gap-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.06 * index + 0.15,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="flex items-center gap-4 py-2 text-[#2B1020] hover:text-[#D6246E] transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#FFE1EB] text-[#2B1020] font-sans text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-[#D6246E] group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    <span className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] leading-tight">
                      {item.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions & Details */}
            <div className="pt-5 border-t border-[#F1CBD9] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E4A5C]">
                  Language / Idioma
                </span>
                <LanguageToggle
                  currentLang={lang}
                  onSelect={onSelectLang}
                  className="bg-[#FFE1EB] px-3.5 py-1.5 rounded-full"
                />
              </div>

              {/* Call button */}
              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full min-h-[56px] px-6 py-3.5 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-[1.0625rem] flex items-center justify-center gap-2 transition-colors text-center shadow-none cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                <span>{t.drawer.callButton}</span>
              </a>

              {/* Book or contact us button */}
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#quote");
                }}
                className="w-full min-h-[56px] px-6 py-3.5 rounded-full border-2 border-[#2B1020] text-[#2B1020] hover:bg-[#FFE1EB] font-sans font-bold text-[1.0625rem] flex items-center justify-center transition-colors text-center cursor-pointer"
              >
                {t.drawer.quoteButton}
              </a>

              {/* Business details */}
              <div className="text-center text-xs text-[#6E4A5C] space-y-1 pt-2">
                {OPEN_24_HOURS && <p className="font-semibold">{HOURS_LINE}</p>}
                {SHOW_ADDRESS && <p>{ADDRESS_LINE}</p>}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
