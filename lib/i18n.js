// Mengambil teks sesuai bahasa aktif.
// Menerima teks biasa ("Halo") atau objek dua bahasa ({ id: "Halo", en: "Hello" }).
export function tx(value, lang) {
  if (value == null) return "";
  if (typeof value === "string" || Array.isArray(value)) return value;
  return value[lang] ?? value.id ?? value.en ?? "";
}

export const isPdf = (path = "") => path.toLowerCase().split("?")[0].endsWith(".pdf");
