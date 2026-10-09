import React from "react";
import {
  NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS_LINE,
  LOCATION_NOTE,
  SHOW_ADDRESS,
  OPEN_24_HOURS,
  HOURS_LINE,
  LICENSE_LINE,
} from "../config/business";
import { SiteContent } from "../config/content";
import { Language } from "../hooks/useLanguage";
import { LanguageToggle } from "./LanguageToggle";

interface FooterProps {
  t: SiteContent;
  lang: Language;
  onSelectLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, lang, onSelectLang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A0F26] text-white border-t border-[#F1CBD9]/20 pt-16 pb-24 sm:pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F1CBD9]/20">
          {/* Wordmark and Phone */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
              {NAME}
            </h3>
            <div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-serif text-2xl sm:text-3xl text-[#FFB84D] hover:underline underline-offset-4 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-2 text-sm sm:text-base text-white/80 max-w-md">
            {OPEN_24_HOURS && (
              <p className="font-bold text-white">{HOURS_LINE}</p>
            )}
            {SHOW_ADDRESS && (
              <>
                <p>{ADDRESS_LINE}</p>
                {LOCATION_NOTE && <p className="text-white/60 text-xs">{LOCATION_NOTE}</p>}
              </>
            )}
            {LICENSE_LINE && LICENSE_LINE.trim() !== "" && (
              <p className="text-white/70 text-xs">{LICENSE_LINE.trim()}</p>
            )}
          </div>

          {/* Language Toggle */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-xs uppercase tracking-wider font-bold text-white/60">
              Language / Idioma
            </span>
            <LanguageToggle
              currentLang={lang}
              onSelect={onSelectLang}
              variant="deep"
              className="bg-white/10 px-3 py-1.5 rounded-full"
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {NAME}. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
