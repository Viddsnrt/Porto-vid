"use client";
import { FaArrowUp } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-garis">
      <div className="ulos-band opacity-60" aria-hidden="true" />
      <div className="wrap flex flex-col gap-6 py-10 text-sm text-kabut-samar sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-bold text-kabut">{profile.name}</p>
          <p className="mt-1">
            {t.footer.built} &copy; {new Date().getFullYear()}
          </p>
        </div>
        <a href="#top" className="inline-flex items-center gap-2 font-medium text-kabut-redup transition hover:text-kabut">
          {t.footer.top} <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
