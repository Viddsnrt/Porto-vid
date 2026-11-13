"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaCopy, FaEnvelope } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/profile";
import Icon from "./Icon";
import Waves from "./Waves";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <section id="contact" className="section overflow-hidden" aria-labelledby="contact-title">
      <div className="wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-garis bg-gradient-to-br from-danau-3 via-danau-2 to-danau-deep px-6 py-16 sm:px-14 sm:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(239,106,76,0.25),transparent_65%)]" />
          <Waves className="absolute inset-x-0 bottom-0 h-28 opacity-70" />

          <div className="relative max-w-3xl">
            <h2 id="contact-title" className="text-[2.2rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[3.4rem]">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-kabut-redup">{t.contact.body}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <FaEnvelope aria-hidden="true" /> {t.contact.send}
              </a>
              <button onClick={copy} className="btn-ghost relative min-w-[11rem]" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "y" : "n"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex items-center gap-2"
                  >
                    {copied ? <FaCheck aria-hidden="true" className="text-[#5FD39A]" /> : <FaCopy aria-hidden="true" />}
                    {copied ? t.contact.copied : t.contact.copy}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
            <p className="mt-4 select-all text-sm text-kabut-samar">{profile.email}</p>

            <ul className="mt-12 flex flex-wrap gap-3 pb-10">
              {profile.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-full border border-garis bg-danau-deep/40 px-4 py-2.5 text-sm font-medium text-kabut-redup transition hover:-translate-y-0.5 hover:border-kabut-samar hover:text-kabut"
                  >
                    <Icon name={s.icon} label={s.name} className="text-base" />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
