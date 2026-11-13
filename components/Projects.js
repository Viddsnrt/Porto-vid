"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/i18n";
import { projects } from "@/data/projects";
import Section from "./Section";
import Spotlight from "./Spotlight";

const COVER_TINTS = [
  "from-[#1B4A5E] to-[#0E2A3A]",
  "from-[#5A2A22] to-[#2A1612]",
  "from-[#4A3F1C] to-[#221C0C]",
  "from-[#2B2F5C] to-[#14162E]",
];

function Cover({ project, index, big, available }) {
  const [failed, setFailed] = useState(!project.image || !available);
  if (!failed) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={big ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        onError={() => setFailed(true)}
      />
    );
  }
  // Sampul otomatis jika belum ada gambar
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${COVER_TINTS[index % COVER_TINTS.length]}`}>
      <div className="pattern-gorga absolute inset-0" />
      <div className="ulos-band absolute inset-x-0 top-6 opacity-70" />
      <span
        aria-hidden="true"
        className="absolute -bottom-[0.18em] left-5 font-display text-[clamp(4rem,11vw,8.5rem)] font-extrabold leading-none tracking-[-0.06em] text-kabut/10 transition-transform duration-700 ease-out group-hover:-translate-y-2"
      >
        {project.title.split(" ")[0]}
      </span>
    </div>
  );
}

function ProjectCard({ project, index, big, t, lang, available }) {
  const hasLinks = project.liveUrl || project.repoUrl;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: big ? 0 : (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={big ? "md:col-span-2" : ""}
    >
      <Spotlight
        className={`group relative flex h-full overflow-hidden rounded-[1.75rem] border border-garis bg-danau-2/70 transition-colors duration-500 hover:border-kabut-samar ${
          big ? "flex-col lg:flex-row" : "flex-col"
        }`}
      >
        <div className={`relative overflow-hidden ${big ? "aspect-[16/10] lg:aspect-auto lg:min-h-[24rem] lg:w-[56%]" : "aspect-[16/10]"}`}>
          <Cover project={project} index={index} big={big} available={available} />
        </div>
        <div className={`flex flex-1 flex-col p-7 ${big ? "lg:p-10" : ""}`}>
          <h3 className={`font-bold tracking-tight ${big ? "text-3xl" : "text-2xl"}`}>{project.title}</h3>
          <p className="mt-3 leading-relaxed text-kabut-redup">{tx(project.description, lang)}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-danau-3 px-3 py-1 text-[0.8rem] font-medium text-kabut/85">
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-5 pt-8 text-sm font-semibold">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gorga hover:text-[#ff8a6d]">
                <FaArrowUpRightFromSquare aria-hidden="true" /> {t.projects.demo}
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-kabut-redup hover:text-kabut">
                <FaGithub aria-hidden="true" className="text-base" /> {t.projects.code}
              </a>
            )}
            {!hasLinks && <span className="text-kabut-samar">{t.projects.soon}</span>}
          </div>
        </div>
      </Spotlight>
    </motion.article>
  );
}

export default function Projects({ availableImages = [] }) {
  const { lang, t } = useLanguage();
  return (
    <Section id="projects" title={t.projects.title} lead={t.projects.lead} wide>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            big={i === 0}
            t={t}
            lang={lang}
            available={availableImages.includes(p.image)}
          />
        ))}
      </div>
    </Section>
  );
}
