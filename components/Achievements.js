"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaFilePdf, FaImage, FaStar } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { isPdf, tx } from "@/lib/i18n";
import { achievements, levels } from "@/data/achievements";
import Section from "./Section";
import ProofModal from "./ProofModal";
import { levelInfo } from "@/lib/levels";

// jumlah kartu yang tampil sebelum tombol "Tampilkan semua" (desktop / ponsel)
const INITIAL_DESKTOP = 9;
const INITIAL_MOBILE = 4;

function Thumb({ item, priority }) {
  const pdf = isPdf(item.proof);
  const src = item.cover || (pdf ? "" : item.proof);
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="pattern-gorga absolute inset-0 grid place-items-center bg-danau-3">
        {pdf ? (
          <FaFilePdf aria-hidden="true" className="text-5xl text-gorga/80" />
        ) : (
          <FaImage aria-hidden="true" className="text-5xl text-kabut-samar" />
        )}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
      className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.05]"
      onError={() => setFailed(true)}
    />
  );
}

function Card({ item, onOpen, lang, t }) {
  const lv = levelInfo(item.level, lang);
  const pdf = isPdf(item.proof);
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={onOpen}
        className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-danau-2/70 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)] ${
          item.highlight ? "border-emas/60 hover:border-emas" : "border-garis hover:border-kabut-samar"
        }`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-danau-3">
          <Thumb item={item} />
          <div className="absolute inset-0 bg-gradient-to-t from-danau-2 via-danau-2/10 to-transparent" />
          {item.highlight && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emas px-2.5 py-1 text-xs font-bold text-danau-deep">
              <FaStar aria-hidden="true" /> {t.achievements.highlight}
            </span>
          )}
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-danau-deep/70 text-sm text-kabut backdrop-blur">
            {pdf ? <FaFilePdf aria-label="PDF" /> : <FaImage aria-label="Gambar" />}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-3 text-[0.8rem]">
            <span className="inline-flex items-center gap-1.5 font-semibold" style={{ color: lv.color }}>
              <span className="h-2 w-2 rounded-full" style={{ background: lv.color }} />
              {lv.label}
            </span>
            <span className="text-kabut-samar">{item.year}</span>
          </div>
          <h3 className="mt-2.5 line-clamp-3 font-sans text-[1.02rem] font-semibold leading-snug text-kabut">
            {tx(item.title, lang)}
          </h3>
          <span className="mt-auto pt-5 text-sm font-semibold text-kabut-redup transition-colors group-hover:text-gorga">
            {t.achievements.viewProof}
          </span>
        </div>
      </button>
    </motion.li>
  );
}

export default function Achievements() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [initial, setInitial] = useState(INITIAL_DESKTOP);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setInitial(mq.matches ? INITIAL_MOBILE : INITIAL_DESKTOP);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const filters = useMemo(() => {
    const present = Object.keys(levels).filter((l) => achievements.some((a) => a.level === l));
    // tingkat yang ditulis di data tetapi belum ada di `levels`
    const extra = [...new Set(achievements.map((a) => a.level))].filter((l) => !levels[l]);
    const list = [
      { key: "all", label: t.achievements.all, count: achievements.length },
      { key: "highlight", label: t.achievements.highlight, count: achievements.filter((a) => a.highlight).length },
      ...[...present, ...extra].map((l) => ({
        key: l,
        label: levelInfo(l, lang).label,
        color: levelInfo(l, lang).color,
        count: achievements.filter((a) => a.level === l).length,
      })),
    ];
    return list.filter((f) => f.count > 0);
  }, [lang, t]);

  const filtered = useMemo(() => {
    if (filter === "all") return achievements;
    if (filter === "highlight") return achievements.filter((a) => a.highlight);
    return achievements.filter((a) => a.level === filter);
  }, [filter]);

  const visible = expanded ? filtered : filtered.slice(0, initial);

  return (
    <Section id="achievements" title={t.achievements.title} lead={t.achievements.lead(achievements.length)} wide>
      <div className="-mx-5 mb-10 overflow-x-auto px-5 no-scrollbar sm:mx-0 sm:px-0">
        <div role="tablist" aria-label={t.achievements.level} className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {filters.map((f) => {
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setFilter(f.key);
                  setExpanded(false);
                }}
                className={`relative isolate flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  on ? "border-transparent text-danau-deep" : "border-garis text-kabut-redup hover:text-kabut"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="ach-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-kabut"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {f.color && <span className="h-2 w-2 rounded-full" style={{ background: f.color }} />}
                {f.key === "highlight" && <FaStar aria-hidden="true" className={on ? "text-danau-deep" : "text-emas"} />}
                {f.label}
                <span className={`tabular-nums ${on ? "text-danau-deep/60" : "text-kabut-samar"}`}>{f.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => {
            const idx = filtered.indexOf(item);
            return (
              <Card
                key={item.title + item.proof}
                item={item}
                lang={lang}
                t={t}
                onOpen={() => setOpenIndex(idx)}
              />
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {filtered.length > initial && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => {
              if (expanded) document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
              setExpanded((v) => !v);
            }}
            className="btn-ghost"
          >
            {expanded ? t.achievements.showLess : t.achievements.showAll(filtered.length)}
          </button>
        </div>
      )}

      <ProofModal
        items={filtered}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </Section>
  );
}
