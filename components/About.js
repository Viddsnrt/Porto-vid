"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  const { lang, t } = useLanguage();
  const paragraphs = tx(profile.about, lang);

  return (
    <Section id="about" title={t.about.title} lead={t.about.lead}>
      <div className="grid gap-12 md:grid-cols-[1fr_15rem] md:gap-14">
        <div className="max-w-prose space-y-5 text-[1.075rem] leading-[1.75] text-kabut/90">
          {paragraphs.map((p, i) => (
            <motion.p
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={i === 0 ? "font-display text-[1.4rem] font-medium leading-[1.45] tracking-[-0.01em] text-kabut" : ""}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <dl className="space-y-5 border-l border-garis pl-6 text-sm">
          {profile.facts.map((f) => (
            <div key={tx(f.label, "id")}>
              <dt className="text-kabut-samar">{tx(f.label, lang)}</dt>
              <dd className="mt-0.5 font-medium text-kabut">{tx(f.value, lang)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
