// ============================================================================
//  data/projects.js  —  PROYEK
// ============================================================================
//  Tambah proyek: salin satu blok { ... } lalu isi.
//
//  image   : screenshot proyek di folder public/projects/ (misal "/projects/tobabersih.jpg").
//            Kalau file belum ada / dikosongkan, website membuat sampul bermotif otomatis.
//  liveUrl : link demo. Kosongkan ("") untuk menyembunyikan tombol demo.
//  repoUrl : link GitHub. Kosongkan ("") untuk menyembunyikan tombol kode.
// ============================================================================

export const projects = [
  {
    title: "TobaBersih (TOBA-CLEAN)",
    description: {
      id: "Sistem pemantauan dan pengelolaan sampah yang komprehensif, dirancang dari pengumpulan kebutuhan di lapangan hingga implementasi teknis.",
      en: "A comprehensive waste monitoring and management system, designed from field requirements gathering through technical implementation.",
    },
    image: "/projects/tobabersih.jpg",
    tags: ["Flutter", "Golang", "PostgreSQL", "IoT"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Arta Batak",
    description: {
      id: "Platform pelestarian budaya digital interaktif untuk pameran inovasi, memadukan unsur tradisional Batak dengan teknologi modern.",
      en: "An interactive digital cultural preservation platform for an innovation exhibition, blending traditional Batak elements with modern technology.",
    },
    image: "/projects/artabatak.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "DompetKu",
    description: {
      id: "Aplikasi mobile untuk manajemen keuangan pribadi: pencatatan pemasukan dan pengeluaran dengan visualisasi data yang mudah dipahami.",
      en: "A personal finance mobile app: income and expense tracking with easy-to-read data visualization.",
    },
    image: "/projects/dompetku.jpg",
    tags: ["Flutter", "Dart", "SQLite"],
    liveUrl: "",
    repoUrl: "",
  },
];
