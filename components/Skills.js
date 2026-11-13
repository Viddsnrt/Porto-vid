"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { skillGroups } from "@/data/skills";
import Section from "./Section";
import Icon from "./Icon";

const allSkills = skillGroups.flatMap((g) => g.items);

export function SkillMarquee() {
  const row = [...allSkills, ...allSkills];
  return (
    <div aria-hidden="true" className="mask-fade-x overflow-hidden border-y border-garis/70 py-5">
      <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold text-kabut-samar">
            <Icon name={s.icon} label={s.name} className="text-2xl text-kabut-redup" />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState(allSkills[0]?.name);

  return (
    <Section id="skills" title={t.skills.title} lead={t.skills.lead(allSkills.length)}>
      <div className="space-y-10">
        {skillGroups.map((g, gi) => {
          const current = g.items.find((s) => s.name === selected);
          return (
            <motion.div
              key={tx(g.group, "id")}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(gi, 2) * 0.05 }}
            >
              <div className="mb-4 flex items-baseline gap-3">
                <h3 className="font-sans text-[0.95rem] font-semibold text-kabut">{tx(g.group, lang)}</h3>
                <span className="text-sm tabular-nums text-kabut-samar">{g.items.length}</span>
                <span aria-hidden="true" className="h-px flex-1 self-center bg-garis/70" />
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => {
                  const on = s.name === selected;
                  return (
                    <li key={s.name}>
                      <button
                        onClick={() => setSelected(s.name)}
                        aria-pressed={on}
                        aria-expanded={on}
                        className={`relative isolate flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[0.95rem] font-medium transition-colors duration-300 ${
                          on
                            ? "border-emas/70 text-kabut"
                            : "border-garis text-kabut-redup hover:border-kabut-samar hover:text-kabut"
                        }`}
                      >
                        {on && (
                          <motion.span
                            layoutId="skill-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-danau-3"
                            transition={{ type: "spring", stiffness: 400, damping: 34 }}
                          />
                        )}
                        <Icon name={s.icon} label={s.name} className={`text-lg ${on ? "text-emas" : ""}`} />
                        {s.name}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Penjelasan muncul tepat di bawah kelompok yang dipilih */}
              <AnimatePresence initial={false}>
                {current && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                    aria-live="polite"
                  >
                    <div className="mt-4 rounded-2xl border border-garis bg-danau-2/60 p-5 sm:p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={current.name + lang}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.22 }}
                          className="flex gap-5"
                        >
                          <Icon name={current.icon} label={current.name} className="mt-1 shrink-0 text-4xl text-emas" />
                          <div>
                            <p className="font-display text-xl font-bold tracking-tight">{current.name}</p>
                            <p className="mt-1.5 leading-relaxed text-kabut-redup">{tx(current.note, lang)}</p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
