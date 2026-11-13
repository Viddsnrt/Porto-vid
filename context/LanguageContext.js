"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict } from "@/locales/dictionary";

const LanguageContext = createContext({ lang: "id", t: dict.id, toggleLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id"); // bahasa default

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang");
      if (saved === "id" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    try {
      localStorage.setItem("portfolio-lang", next);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
