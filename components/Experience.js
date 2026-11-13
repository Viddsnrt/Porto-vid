"use client";
import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { journey, journeyIntro, currentSemester, totalSemesters } from "@/data/experience";
import Section from "./Section";

const EASE = [0.22, 1, 0.36, 1];

// Mengelompokkan titik timeline berdasarkan `group` (SMA, Tingkat 1, ...)
function groupJourney(items) {
  const groups = [];
  items.forEach((item, index) => {
    const key = tx(item.group, "id");
    let g = groups.find((x) => x.key === key);
    if (!g) {
      g = { key, label: item.group, items: [] };
      groups.push(g);
    }
    g.items.push({ ...item, index });
  });
  return groups;
}

// Nomor semester dari label stage, misal "Semester 3" -> 3
const semesterOf = (item) => {
  const m = String(tx(item.stage, "id")).match(/semester\s*(\d+)/i);
  return m ? Number(m[1]) : null;
};

function StudyProgress({ t }) {
  const pct = Math.round((currentSemester / totalSemesters) * 100);
  const anchors = Object.fromEntries(
    journey.map((item, i) => [semesterOf(item), `journey-${i}`]).filter(([n]) => n)
  );

  return (
    <div className="mb-16 rounded-2xl border border-garis bg-danau-2/60 p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-display text-lg font-bold tracking-tight">{t.experience.progress(currentSemester, totalSemesters)}</p>
        <p className="text-sm tabular-nums text-kabut-samar">{pct}%</p>
      </div>
      <ol className="mt-5 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${totalSemesters}, minmax(0, 1fr))` }}>
        {Array.from({ length: totalSemesters }, (_, i) => {
          const n = i + 1;
          const done = n < currentSemester;
          const now = n === currentSemester;
          const Tag = anchors[n] ? "a" : "span";
          return (
            <li key={n}>
              <Tag
                {...(anchors[n] ? { href: `#${anchors[n]}` } : {})}
                className="group block"
                aria-label={`Semester ${n}`}
                aria-current={now ? "step" : undefined}
              >
                <span className="relative block h-2 overflow-hidden rounded-full bg-garis/70">
                  {(done || now) && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: EASE }}
                      className={`absolute inset-0 origin-left rounded-full ${now ? "bg-gorga" : "bg-emas"}`}
                    />
                  )}
                </span>
                <span
                  className={`mt-2 block text-center text-xs tabular-nums transition-colors ${
                    now ? "font-bold text-gorga" : done ? "text-kabut-redup group-hover:text-kabut" : "text-kabut-samar/70"
                  }`}
                >
                  {n}
                </span>
              </Tag>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function JourneyItem({ item, lang, t }) {
  return (
    <motion.li
      id={`journey-${item.index}`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative scroll-mt-28 pl-10"
    >
      {/* titik timeline */}
      {item.current ? (
        <span aria-hidden="true" className="absolute left-[-7px] top-1.5 flex h-[15px] w-[15px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gorga opacity-50" />
          <span className="relative inline-flex h-[15px] w-[15px] rounded-full border-[3px] border-danau bg-gorga" />
        </span>
      ) : (
        <span aria-hidden="true" className="absolute left-[-5px] top-2 h-[11px] w-[11px] rounded-full border-2 border-emas bg-danau" />
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        {tx(item.stage, lang) !== tx(item.group, lang) && (
          <span className={`font-semibold ${item.current ? "text-gorga" : "text-emas"}`}>{tx(item.stage, lang)}</span>
        )}
        <span className="text-kabut-samar">{tx(item.period, lang)}</span>
        {item.current && (
          <span className="rounded-full bg-gorga/15 px-2.5 py-0.5 text-xs font-semibold text-gorga">{t.experience.now}</span>
        )}
      </div>

      <h4 className="mt-2 text-[1.6rem] font-bold leading-[1.15] tracking-tight">{tx(item.title, lang)}</h4>
      {item.place && <p className="mt-1.5 font-medium text-kabut-redup">{tx(item.place, lang)}</p>}
      {item.story && <p className="mt-4 max-w-prose leading-relaxed text-kabut/80">{tx(item.story, lang)}</p>}

      {item.learned?.length > 0 && (
        <div className="mt-5">
          <p className="text-[0.8rem] font-semibold text-kabut-samar">{t.experience.learned}</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {item.learned.map((c, i) => (
              <motion.li
                key={tx(c, "id")}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.035, duration: 0.35 }}
                className={`rounded-full border px-3 py-1 text-[0.82rem] ${
                  item.current ? "border-gorga/40 bg-gorga/10 text-kabut" : "border-garis bg-danau-2/50 text-kabut/80"
                }`}
              >
                {tx(c, lang)}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.li>
  );
}

export default function Experience() {
  const { lang, t } = useLanguage();
  const listRef = useRef(null);
  // Garis timeline "terisi" mengikuti gulir halaman
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const groups = groupJourney(journey);

  return (
    <Section id="experience" title={t.experience.title} lead={tx(journeyIntro, lang)} className="bg-danau-deep/40">
      <StudyProgress t={t} />

      <div ref={listRef} className="relative ml-2">
        <span aria-hidden="true" className="absolute left-0 top-3 bottom-2 w-px bg-garis" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute left-0 top-3 bottom-2 w-px origin-top bg-gradient-to-b from-emas via-emas to-gorga"
        />

        {groups.map((g, gi) => (
          <Fragment key={g.key}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center gap-4 ${gi === 0 ? "" : "mt-16"}`}
            >
              <span aria-hidden="true" className="relative z-10 -ml-[9px] h-[19px] w-[19px] rotate-45 rounded-[4px] border-2 border-emas bg-danau-deep" />
              <h3 className="font-display text-sm font-bold tracking-wide text-emas">{tx(g.label, lang)}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-garis to-transparent" />
            </motion.div>
            <ol className="mt-8 space-y-12">
              {g.items.map((item) => (
                <JourneyItem key={item.index} item={item} lang={lang} t={t} />
              ))}
            </ol>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
