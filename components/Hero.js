"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown, FaDownload } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { achievements } from "@/data/achievements";
import { organizations } from "@/data/organizations";
import Waves from "./Waves";
import Icon from "./Icon";
import CountUp from "./CountUp";

const EASE = [0.22, 1, 0.36, 1];

// Animasi mengetik untuk daftar peran
function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    if (!words?.length) return;
    const word = words[index % words.length];
    let delay = deleting ? 38 : 75;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const { lang, t } = useLanguage();
  const roles = tx(profile.roles, lang);
  const typed = useTypewriter(roles);
  const nameWords = profile.name.split(" ");
  const status = tx(profile.status, lang);

  const stats = [
    { n: achievements.length, label: t.hero.stats.achievements },
    { n: achievements.filter((a) => a.level === "Internasional").length, label: t.hero.stats.international },
    { n: organizations.length, label: t.hero.stats.organizations },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:min-h-[100svh]">
      {/* cahaya bulan di atas danau */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(233,185,73,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 top-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(38,73,92,0.6),transparent_70%)]"
      />

      <div className="wrap grid items-center gap-14 pb-40 lg:grid-cols-12 lg:gap-10 lg:pb-48">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-lg text-kabut-redup"
          >
            {t.hero.greeting}
          </motion.p>

          <h1 className="mt-3 text-[clamp(2.9rem,8.4vw,6.6rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
            {nameWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="inline-block pr-[0.22em]"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.09, duration: 0.9, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 flex min-h-[2.5rem] items-center font-display text-2xl font-semibold tracking-tight text-gorga sm:text-3xl"
            aria-label={roles.join(", ")}
          >
            <span aria-hidden="true">{typed}</span>
            <span aria-hidden="true" className="ml-1 inline-block h-[1.1em] w-[3px] animate-blink rounded bg-gorga" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
            className="mt-5 max-w-[34rem] text-lg leading-relaxed text-kabut-redup"
          >
            {tx(profile.tagline, lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#achievements" className="btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#contact" className="btn-ghost">
              {t.hero.ctaSecondary}
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} className="btn-ghost" download>
                <FaDownload aria-hidden="true" /> {t.hero.cv}
              </a>
            )}
            <div className="ml-1 flex items-center gap-1">
              {profile.socials
                .filter((s) => s.icon !== "email")
                .map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full text-xl text-kabut-redup transition hover:bg-danau-2 hover:text-kabut"
                  >
                    <Icon name={s.icon} label={s.name} />
                  </a>
                ))}
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-garis border-y border-garis"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-kabut sm:text-4xl">
                  <CountUp to={s.n} />
                </dd>
                <dd className="mt-1 text-[0.8rem] leading-snug text-kabut-redup" aria-hidden="true">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Foto dengan bingkai atap Rumah Bolon */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:col-span-5 lg:max-w-none">
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="roof" clipPathUnits="objectBoundingBox">
                <path d="M0,0 Q0.5,0.22 1,0 L1,1 L0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 1.1, ease: EASE }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-danau-2"
              style={{ clipPath: "url(#roof)" }}
            >
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[50%_35%] brightness-[1.12] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-danau via-transparent to-transparent" />
            </div>

            {/* garis atap Rumah Bolon berwarna emas yang tergambar saat halaman dibuka */}
            <svg
              viewBox="0 0 100 125"
              className="pointer-events-none absolute inset-0 h-full w-full -translate-y-4 overflow-visible"
              aria-hidden="true"
            >
              <motion.path
                d="M-7,-9 Q-6,-3 -3,-2.4 Q50,25 103,-2.4 Q106,-3 107,-9"
                fill="none"
                stroke="#E9B949"
                strokeWidth="0.55"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 1.4, ease: "easeInOut" }}
              />
            </svg>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
                className="absolute inset-x-0 -bottom-5 mx-auto flex w-fit max-w-[calc(100%-1rem)] items-center gap-2.5 rounded-full border border-garis bg-danau-2/90 px-4 py-2.5 text-sm font-medium shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5FD39A] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5FD39A]" />
                </span>
                {status}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Waves className="absolute inset-x-0 bottom-0 h-40" />

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-kabut-samar transition hover:text-kabut lg:flex"
      >
        {t.hero.scroll}
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <FaArrowDown aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
