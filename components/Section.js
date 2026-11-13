"use client";
import { motion } from "framer-motion";

// Kerangka setiap bagian: judul di kiri (desktop), isi di kanan.
export default function Section({ id, title, lead, children, wide = false, className = "" }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className={wide ? "" : "grid gap-12 lg:grid-cols-12 lg:gap-16"}>
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={wide ? "mb-12 max-w-3xl" : "lg:col-span-4"}
          >
            <div className={wide ? "" : "lg:sticky lg:top-28"}>
              <h2
                id={`${id}-title`}
                className="text-[2.4rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl"
              >
                {title}
              </h2>
              {lead && <p className="mt-5 max-w-md text-kabut-redup">{lead}</p>}
            </div>
          </motion.header>
          <div className={wide ? "" : "lg:col-span-8"}>{children}</div>
        </div>
      </div>
    </section>
  );
}
