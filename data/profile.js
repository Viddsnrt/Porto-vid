// ============================================================================
//  data/profile.js  —  IDENTITAS, BIO, KONTAK & MEDIA SOSIAL
// ============================================================================
//  Semua teks di website yang berhubungan dengan "siapa kamu" ada di sini.
//
//  Teks dua bahasa ditulis seperti ini:   { id: "Bahasa Indonesia", en: "English" }
//  Kalau malas menulis versi Inggris, cukup tulis teks biasa:  "Teks saja"
//  (teks yang sama akan dipakai di kedua bahasa).
// ============================================================================

export const profile = {
  // Nama lengkap (muncul besar di bagian paling atas)
  name: "David Gian Filbert Sinurat",

  // Inisial untuk logo di kiri atas
  initials: "DGFS",

  // Foto profil -> taruh file di folder public/profil/
  photo: "/profil/foto.jpg",

  // Peran yang berganti-ganti dengan animasi ketik di bagian atas
  roles: {
    id: ["Software Engineer", "Mobile Developer", "Backend Developer", "Penggiat AI & Cloud"],
    en: ["Software Engineer", "Mobile Developer", "Backend Developer", "AI & Cloud Enthusiast"],
  },

  // Kalimat pengantar singkat di bawah nama
  tagline: {
    id: "Mahasiswa Software Engineering di Institut Teknologi Del yang memadukan aplikasi mobile, backend yang tangguh, dan kecerdasan buatan untuk memecahkan masalah nyata.",
    en: "Software Engineering student at Institut Teknologi Del who combines mobile apps, robust backends, and artificial intelligence to solve real-world problems.",
  },

  // Status yang tampil di lencana hijau kecil. Kosongkan ("") untuk menyembunyikan.
  status: {
    id: "Terbuka untuk magang & kolaborasi",
    en: "Open to internships & collaboration",
  },

  location: { id: "Toba, Sumatera Utara", en: "Toba, North Sumatra" },
  campus: "Institut Teknologi Del",

  // Email utama (tombol "Salin email" & "Kirim email")
  email: "sinuratdavid949@gmail.com",

  // Alamat website setelah online (misal "https://davidsinurat.vercel.app").
  // Dipakai untuk pratinjau tautan saat dibagikan di WhatsApp/LinkedIn.
  siteUrl: "",

  // Link CV. Taruh file di public/ lalu tulis misalnya "/cv-david.pdf".
  // Kosongkan ("") untuk menyembunyikan tombol CV.
  cvUrl: "",

  // Paragraf "Tentang Saya" — tambah/kurangi paragraf sesukamu
  about: {
    id: [
      "Halo! Saya David Gian Filbert Sinurat, mahasiswa Software Engineering di Institut Teknologi Del. Fokus utama saya adalah merekayasa perangkat lunak yang tidak hanya berfungsi, tetapi juga skalabel dan efisien.",
      "Eksplorasi teknis saya berpusat pada ekosistem Flutter & Dart untuk aplikasi mobile, dipadukan dengan arsitektur backend menggunakan Golang dan basis data relasional seperti PostgreSQL.",
      "Saya tertarik mendalam pada penerapan Artificial Intelligence, khususnya Retrieval-Augmented Generation (RAG) dan Computer Vision (YOLO), untuk menghadirkan solusi cerdas ke dalam aplikasi modern.",
    ],
    en: [
      "Hi! I'm David Gian Filbert Sinurat, a Software Engineering student at Institut Teknologi Del. My main focus is engineering software that is not only functional but also scalable and efficient.",
      "My technical exploration centers on the Flutter & Dart ecosystem for mobile apps, combined with backend architectures built in Golang and relational databases such as PostgreSQL.",
      "I'm deeply interested in applied Artificial Intelligence, especially Retrieval-Augmented Generation (RAG) and Computer Vision (YOLO), to bring smart solutions into modern applications.",
    ],
  },

  // Fakta singkat di samping "Tentang Saya"
  facts: [
    { label: { id: "Kampus", en: "Campus" }, value: "Institut Teknologi Del" },
    { label: { id: "Program studi", en: "Study program" }, value: "Software Engineering" },
    { label: { id: "Saat ini", en: "Currently" }, value: { id: "Semester 5", en: "5th semester" } },
    { label: { id: "Fokus", en: "Focus" }, value: "Mobile, Backend, AI" },
    { label: { id: "Domisili", en: "Based in" }, value: { id: "Toba, Sumatera Utara", en: "Toba, North Sumatra" } },
  ],

  // Media sosial.
  // icon yang tersedia: github, linkedin, instagram, email, whatsapp, youtube,
  //                     tiktok, x, facebook, medium, website, kaggle, dribbble
  socials: [
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/david-gf-sinurat-a03a61338/" },
    { name: "GitHub", icon: "github", url: "https://github.com/Viddsnrt" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/davidsinurat_/" },
    { name: "Email", icon: "email", url: "mailto:sinuratdavid949@gmail.com" },
  ],
};
