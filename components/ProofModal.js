"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaFilePdf, FaImage,
  FaMagnifyingGlassMinus, FaMagnifyingGlassPlus, FaStar, FaXmark,
} from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { isPdf, tx } from "@/lib/i18n";
import { levelInfo } from "@/lib/levels";

function ProofView({ item, t }) {
  const [zoom, setZoom] = useState(false);
  const [failed, setFailed] = useState(false);
  const pdf = isPdf(item.proof);

  if (pdf) {
    return (
      <div className="flex h-full flex-col">
        {/* Desktop: pembaca PDF langsung */}
        <iframe
          src={`${item.proof}#toolbar=0&view=FitH`}
          title={tx(item.title, "id")}
          className="hidden h-full min-h-[60vh] w-full flex-1 rounded-xl bg-white md:block"
        />
        {/* Ponsel: sampul + tombol buka (PDF di dalam iframe sering tidak tampil di ponsel) */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-xl border border-garis bg-danau-3 p-6 text-center md:hidden">
          {item.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.cover} alt="" className="max-h-60 w-auto rounded-lg" />
          ) : (
            <FaFilePdf aria-hidden="true" className="text-6xl text-gorga" />
          )}
          <p className="text-sm text-kabut-redup">{t.pdfNote}</p>
          <a href={item.proof} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaFilePdf aria-hidden="true" /> {t.openPdf}
          </a>
        </div>
      </div>
    );
  }

  if (failed) {
    return (
      <div className="grid h-full min-h-[40vh] place-items-center rounded-xl border-2 border-dashed border-garis p-6 text-center">
        <div>
          <FaImage aria-hidden="true" className="mx-auto text-5xl text-kabut-samar" />
          <p className="mt-4 font-semibold">{t.missing}</p>
          <p className="mt-2 text-sm text-kabut-redup">{t.missingHint(item.proof)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <div className={`h-full rounded-xl bg-danau-deep ${zoom ? "overflow-auto" : "grid place-items-center overflow-hidden"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.proof}
          alt={tx(item.title, "id")}
          onError={() => setFailed(true)}
          onClick={() => setZoom((z) => !z)}
          className={
            zoom
              ? "max-w-none w-[200%] cursor-zoom-out md:w-[160%]"
              : "max-h-[44vh] w-auto max-w-full cursor-zoom-in object-contain md:max-h-[72vh]"
          }
        />
      </div>
      <button
        onClick={() => setZoom((z) => !z)}
        className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-danau-deep/80 text-kabut backdrop-blur hover:bg-danau-3"
        aria-label={zoom ? t.zoomOut : t.zoomIn}
      >
        {zoom ? <FaMagnifyingGlassMinus /> : <FaMagnifyingGlassPlus />}
      </button>
    </div>
  );
}

export default function ProofModal({ items, index, onChange, onClose }) {
  const { lang, t: all } = useLanguage();
  const t = all.achievements;
  const closeRef = useRef(null);
  const open = index !== null && index !== undefined && items[index];
  const item = open ? items[index] : null;

  const go = (d) => onChange((i) => (i + d + items.length) % items.length);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!open]);

  const lv = item ? levelInfo(item.level, lang) : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[80] flex items-end justify-center bg-danau-deep/85 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="proof-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[94svh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl border border-garis bg-danau-2 shadow-2xl sm:rounded-3xl lg:flex-row"
          >
            <div className="relative bg-danau-deep/60 p-3 sm:p-4 lg:w-[62%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.proof}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full lg:min-h-[72vh]"
                >
                  <ProofView item={item} t={t} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex items-center justify-between gap-3 border-b border-garis px-6 py-4">
                <span className="text-sm tabular-nums text-kabut-samar">
                  {index + 1} {t.of} {items.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-garis hover:bg-danau-3" aria-label={t.prev}>
                    <FaArrowLeft />
                  </button>
                  <button onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full border border-garis hover:bg-danau-3" aria-label={t.next}>
                    <FaArrowRight />
                  </button>
                  <button ref={closeRef} onClick={onClose} className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-kabut text-danau-deep hover:bg-white" aria-label={t.close}>
                    <FaXmark />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={item.proof + lang}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 overflow-y-auto px-6 py-6 sm:px-8"
                >
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-semibold" style={{ color: lv.color, borderColor: `${lv.color}55` }}>
                      <span className="h-2 w-2 rounded-full" style={{ background: lv.color }} />
                      {t.level} {lv.label}
                    </span>
                    <span className="rounded-full border border-garis px-3 py-1 text-kabut-redup">
                      {t.year} {item.year}
                    </span>
                    {item.highlight && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emas px-3 py-1 font-bold text-danau-deep">
                        <FaStar aria-hidden="true" /> {t.highlight}
                      </span>
                    )}
                  </div>

                  <h3 id="proof-title" className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-[1.75rem]">
                    {tx(item.title, lang)}
                  </h3>

                  {item.story && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-emas">{t.story}</p>
                      <p className="mt-2 leading-relaxed text-kabut/85">{tx(item.story, lang)}</p>
                    </div>
                  )}

                  <a
                    href={item.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gorga hover:text-[#ff8a6d]"
                  >
                    <FaArrowUpRightFromSquare aria-hidden="true" /> {t.openFile}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
