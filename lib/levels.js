import { levels } from "@/data/achievements";

// Label & warna tingkat prestasi sesuai bahasa aktif
export const levelInfo = (level, lang) => {
  const info = levels[level] || { en: level, color: "#9DB5C1" };
  return { label: lang === "en" ? info.en || level : level, color: info.color };
};
