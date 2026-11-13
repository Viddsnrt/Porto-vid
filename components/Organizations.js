"use client";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { organizations } from "@/data/organizations";
import Section from "./Section";

export default function Organizations() {
  const { lang, t } = useLanguage();
  return (
    <Section id="organizations" title={t.organizations.title} lead={t.organizations.lead} className="bg-danau-deep/40">
      <ul className="border-t border-garis">
        {organizations.map((org, i) => (
          <motion.li
            key={org.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.05 }}
            className="group relative border-b border-garis"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-danau-3 to-transparent transition-all duration-500 ease-out group-hover:w-full"
            />
            <div className="relative grid gap-1.5 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 sm:px-3">
              <div>
                <h3 className="font-sans text-lg font-semibold leading-snug text-kabut">{org.name}</h3>
                <p className={`mt-1 flex items-center gap-2 font-medium ${org.lead ? "text-emas" : "text-kabut-redup"}`}>
                  {org.lead && <FaCrown aria-label={t.organizations.lead_badge} className="text-sm" />}
                  {tx(org.role, lang)}
                </p>
              </div>
              <p className="text-sm tabular-nums text-kabut-samar sm:text-right">{tx(org.period, lang)}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
