import React from "react";
import { Language } from "../hooks/useLanguage";

interface LanguageToggleProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
  variant?: "light" | "deep";
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onSelect,
  variant = "light",
  className = "",
}) => {
  const isDeep = variant === "deep";

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center text-xs font-bold tracking-widest ${className}`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onSelect("en");
        }}
        aria-pressed={currentLang === "en"}
        className={`px-1.5 sm:px-2 py-1 transition-colors cursor-pointer rounded ${
          currentLang === "en"
            ? isDeep
              ? "text-[#FFB84D] font-extrabold underline underline-offset-4"
              : "text-[#D6246E] font-extrabold underline underline-offset-4"
            : isDeep
            ? "text-white/70 hover:text-white"
            : "text-[#6E4A5C] hover:text-[#2B1020]"
        }`}
      >
        EN
      </button>
      <span
        aria-hidden="true"
        className={`px-0.5 select-none ${isDeep ? "text-white/40" : "text-[#F1CBD9]"}`}
      >
        |
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onSelect("es");
        }}
        aria-pressed={currentLang === "es"}
        className={`px-1.5 sm:px-2 py-1 transition-colors cursor-pointer rounded ${
          currentLang === "es"
            ? isDeep
              ? "text-[#FFB84D] font-extrabold underline underline-offset-4"
              : "text-[#D6246E] font-extrabold underline underline-offset-4"
            : isDeep
            ? "text-white/70 hover:text-white"
            : "text-[#6E4A5C] hover:text-[#2B1020]"
        }`}
      >
        ES
      </button>
    </div>
  );
};
