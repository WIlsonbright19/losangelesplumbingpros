import React from "react";
import { Language } from "../hooks/useLanguage";
import { LanguageToggle } from "./LanguageToggle";
import { NAME, PHONE_TEL } from "../config/business";
import { SiteContent } from "../config/content";

interface HeaderProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  t: SiteContent;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
  hamburgerRef: React.RefObject<HTMLButtonElement | null>;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onSelectLang,
  t,
  isDrawerOpen,
  onToggleDrawer,
  hamburgerRef,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF1F5]/95 backdrop-blur-md border-b border-[#F1CBD9]">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Wordmark (responsive truncation safety so it never pushes the menu off-screen) */}
        <a
          href="#"
          className="font-serif text-base xs:text-lg sm:text-xl lg:text-2xl text-[#2B1020] tracking-tight truncate max-w-[140px] xs:max-w-[170px] sm:max-w-none shrink-0 hover:text-[#D6246E] transition-colors"
          title={NAME}
        >
          {NAME}
        </a>

        {/* Right: Perfectly arranged action cluster guaranteed to fit on 320px, 360px, and all mobile screens */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Toggle */}
          <LanguageToggle
            currentLang={lang}
            onSelect={onSelectLang}
            className="shrink-0"
          />

          {/* Call us action: Icon-only on small mobile, full pill with text on tablet/desktop */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="w-10 h-10 sm:w-auto sm:min-h-[48px] sm:px-5 sm:py-2.5 rounded-full bg-[#D6246E] hover:bg-[#B81C5B] text-white font-sans font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-none shrink-0 whitespace-nowrap"
            aria-label={t.nav.callButton}
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
            </svg>
            <span className="hidden sm:inline">{t.nav.callButton}</span>
          </a>

          {/* Universal Hamburger Menu button (guaranteed visible and accessible on mobile and desktop) */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={onToggleDrawer}
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
            aria-label={isDrawerOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="w-10 h-10 sm:w-auto sm:min-h-[48px] sm:px-4 rounded-full border border-[#F1CBD9] bg-white hover:bg-[#FFE1EB] text-[#2B1020] transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer select-none shadow-sm"
          >
            <span className="hidden md:inline font-sans font-bold text-xs uppercase tracking-wider text-[#2B1020]">
              {lang === "es" ? "Menú" : "Menu"}
            </span>
            <div className="w-5 h-4 flex flex-col justify-between items-center py-0.5" aria-hidden="true">
              <span
                className={`w-5 h-0.5 bg-[#2B1020] transition-all duration-300 ease-out origin-center ${
                  isDrawerOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#2B1020] transition-opacity duration-300 ${
                  isDrawerOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#2B1020] transition-all duration-300 ease-out origin-center ${
                  isDrawerOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
