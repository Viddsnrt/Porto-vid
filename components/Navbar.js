"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";

const SECTIONS = ["about", "experience", "skills", "projects", "achievements", "organizations", "contact"];

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menandai menu sesuai bagian yang sedang dilihat
  useEffect(() => {
    const els = ["top", ...SECTIONS].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-emas focus:px-4 focus:py-2 focus:text-danau-deep"
      >
        {t.nav.skip}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-garis/70 bg-danau/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-gradient-to-r from-gorga to-emas"
        />
        <nav className="wrap flex h-16 items-center justify-between sm:h-[72px]" aria-label="Utama">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={profile.name}>
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-gorga font-display text-[0.8rem] font-extrabold tracking-tight text-danau-deep transition-transform duration-500 group-hover:rotate-[-8deg]">
              {profile.initials.slice(0, 2)}
            </span>
            <span className="hidden font-display text-lg font-bold tracking-tight sm:block">{profile.initials}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {SECTIONS.slice(0, 6).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative isolate rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === id ? "text-kabut" : "text-kabut-redup hover:text-kabut"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-danau-3"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex h-10 items-center gap-1 rounded-full border border-garis px-3 text-sm font-semibold text-kabut-redup transition hover:border-kabut-redup hover:text-kabut"
              aria-label={t.nav.switchLang}
              title={t.nav.switchLang}
            >
              <span className={lang === "id" ? "text-kabut" : ""}>ID</span>
              <span className="text-garis">/</span>
              <span className={lang === "en" ? "text-kabut" : ""}>EN</span>
            </button>
            <a href="#contact" className="btn-primary hidden !py-2 !px-5 text-sm md:inline-flex">
              {t.nav.contact}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-garis text-kabut lg:hidden"
              aria-label={t.nav.menu}
              aria-expanded={open}
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-danau-deep/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.menu}
          >
            <div className="wrap flex h-16 items-center justify-end">
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-garis"
                aria-label={t.nav.close}
                autoFocus
              >
                <FaXmark />
              </button>
            </div>
            <ul className="wrap mt-6 space-y-1">
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-2 font-display text-4xl font-bold tracking-tight ${
                      active === id ? "text-gorga" : "text-kabut"
                    }`}
                  >
                    {t.nav[id]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
