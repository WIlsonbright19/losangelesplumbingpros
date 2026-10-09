import { useState, useEffect } from "react";
import { content, SiteContent } from "../config/content";

export type Language = "en" | "es";

const STORAGE_KEY = "la_plumbing_lang";

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") {
        return saved;
      }
    } catch {
      // Ignore localStorage read errors
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language &&
      navigator.language.toLowerCase().startsWith("es")
    ) {
      return "es";
    }
    return "en";
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore localStorage write errors
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t: SiteContent = content[lang];

  return { lang, setLang, t };
}
