// ============================================================================
//  data/achievements.js  —  DAFTAR PRESTASI
// ============================================================================
//
//  CARA MENAMBAH PRESTASI BARU (2 langkah):
//
//  1. Simpan file bukti (foto .png/.jpg/.jpeg ATAU sertifikat .pdf)
//     ke folder:  public/prestasi/        contoh: public/prestasi/bukti-21.png
//
//  2. Salin blok di bawah ini, tempel di dalam daftar `achievements`, lalu isi:
//
//     {
//       title: "Juara 1 Lomba Contoh Nasional 2026",
//       level: "Nasional",              // lihat pilihan tingkat di `levels` di bawah
//       year: "2026",
//       proof: "/prestasi/bukti-21.png", // path file bukti (tanpa kata "public")
//       highlight: true,                // opsional: true = tampil dengan bingkai emas "Sorotan"
//       cover: "",                      // opsional: gambar sampul khusus untuk file PDF
//       story: "Ceritakan pengalamanmu di lomba ini...",
//     },
//
//  Selesai! Jumlah prestasi, filter, dan angka statistik di halaman depan
//  akan ter-update otomatis.
//
//  Catatan:
//  - Urutan tampil = urutan di file ini. Taruh yang paling membanggakan di atas.
//  - File PDF otomatis dikenali dan ditampilkan dengan pembaca PDF.
//    Agar kartu PDF punya gambar sampul, isi `cover` dengan gambar (opsional).
//  - `story` boleh dua bahasa:  story: { id: "...", en: "..." }
// ============================================================================

// Tingkat prestasi + warna lencananya. Urutan di sini = urutan tombol filter.
// Mau menambah tingkat baru (misal "Provinsi")? Tambahkan satu baris di sini.
export const levels = {
  Internasional: { en: "International", color: "#E9B949" },
  Nasional: { en: "National", color: "#EF6A4C" },
  Wilayah: { en: "Regional", color: "#6CC9B4" },
  Institusi: { en: "Institutional", color: "#9DB2F5" },
  Kampus: { en: "Campus", color: "#CFA6EC" },
};

export const achievements = [
  {
    title: "Silver Medal Festival Esai Mahasiswa Indonesia (FEMI) 2026",
    level: "Nasional",
    year: "2026",
    proof: "/prestasi/bukti-8.png",
    highlight: true,
    // TODO: tambahkan cerita perjuangan dan topik esai di sini
    story: "Meraih Medali Perak (Silver Medal) dalam ajang Festival Esai Mahasiswa Indonesia (FEMI) 2026.",
  },
  {
    title: "Juara GCP (Google Cloud Platform) Season 11 Tahun 2024",
    level: "Nasional",
    year: "2024",
    proof: "/prestasi/bukti-5.png",
    highlight: true,
    story: "Meraih predikat juara pada event GCP Season 11 tingkat nasional dengan menyelesaikan berbagai modul arsitektur cloud dan data engineering secara cepat dan tepat.",
  },
  {
    title: "Aspa Terbaik / Mahasiswa Terbaik Tahun 2026",
    level: "Institusi",
    year: "2026",
    proof: "/prestasi/bukti-14.jpg",
    highlight: true,
    story: "Diberikan penghargaan sebagai Mahasiswa/Aspa Terbaik tingkat institusi pada tahun 2026 atas dedikasi akademik, kedisiplinan, dan keaktifan di lingkungan kampus.",
  },
  {
    title: "Juara Harapan 1 FMIPA EXPO UNIMED",
    level: "Nasional",
    year: "2025",
    proof: "/prestasi/bukti-15.png",
    highlight: true,
    story: "Berhasil meraih gelar Juara Harapan 1 pada kompetisi yang diselenggarakan dalam rangkaian acara FMIPA EXPO Universitas Negeri Medan.",
  },
  {
    title: "Participant Google Cloud Arcade Global 2025",
    level: "Internasional",
    year: "2025",
    proof: "/prestasi/bukti-1.png",
    story: "Dalam program Google Cloud Arcade Global 2025, saya mempelajari secara mendalam infrastruktur cloud, machine learning, dan arsitektur data melalui hands-on lab di Google Cloud Platform.",
  },
  {
    title: "Facilitator & Affiliate Google Cloud Arcade 2026",
    level: "Internasional",
    year: "2026",
    proof: "/prestasi/bukti-2.pdf",
    cover: "/prestasi/bukti-2-cover.jpg",
    story: "Dipercaya sebagai fasilitator, saya memandu dan membantu peserta lain menyelesaikan quest di platform Google Cloud Skills Boost, sekaligus mengasah kemampuan teknis dan komunikasi.",
  },
  {
    title: "Arcade Trooper Milestone Google Cloud Arcade 2025",
    level: "Internasional",
    year: "2025",
    proof: "/prestasi/bukti-3.png",
    story: "Berhasil mencapai milestone Trooper dengan menyelesaikan berbagai tantangan teknis dan lab praktikum komputasi awan tingkat lanjut dari Google.",
  },
  {
    title: "Participant BRICS Industrial Innovation Contest 2026",
    level: "Internasional",
    year: "2026",
    proof: "/prestasi/bukti-4.jpeg",
    // TODO: tambahkan cerita detail proyek di sini
    story: "Berpartisipasi dalam kompetisi inovasi industri tingkat internasional yang diselenggarakan oleh negara-negara BRICS.",
  },
  {
    title: "Finalis Lomba Essay Tingkat Nasional Neira 3 (National Empowerment, Innovation, Research and Art)",
    level: "Nasional",
    year: "2025",
    proof: "/prestasi/bukti-6.png",
    // TODO: ceritakan judul atau topik esai yang dibawakan
    story: "Berhasil lolos sebagai finalis tingkat nasional dalam ajang penulisan esai ilmiah di kompetisi Neira 3.",
  },
  {
    title: "Finalis Lomba Business Plan Tingkat Nasional Neira 3",
    level: "Nasional",
    year: "2025",
    proof: "/prestasi/bukti-7.png",
    // TODO: ceritakan ide bisnis yang dirancang bersama tim
    story: "Menjadi finalis nasional dalam perancangan rencana bisnis inovatif.",
  },
  {
    title: "Finalis Lomba Toba Essay Competition Batch IV",
    level: "Nasional",
    year: "2025",
    proof: "/prestasi/bukti-9.png",
    // TODO: tuliskan pengalaman menarik saat mengikuti lomba ini
    story: "Terpilih menjadi salah satu finalis dalam Toba Essay Competition Batch IV tingkat nasional.",
  },
  {
    title: "Participant Samsung Solve for Tomorrow 2026 (Preliminary Round)",
    level: "Nasional",
    year: "2026",
    proof: "/prestasi/bukti-12.pdf",
    cover: "/prestasi/bukti-12-cover.jpg",
    // TODO: ceritakan solusi yang ditawarkan tim
    story: "Mengikuti ajang inovasi sains dan teknologi dari Samsung untuk memecahkan masalah sosial di masyarakat sekitar.",
  },
  {
    title: "Participant IMILKOM IT Competition 2026 bidang Web Development",
    level: "Nasional",
    year: "2026",
    proof: "/prestasi/bukti-18.png",
    story: "Mengasah kemampuan coding dan desain antarmuka dengan berpartisipasi dalam kompetisi pengembangan web tingkat nasional yang diadakan oleh IMILKOM.",
  },
  {
    title: "Participant FTI Festival 2026 bidang Web Development",
    level: "Nasional",
    year: "2026",
    proof: "/prestasi/bukti-20.pdf",
    cover: "/prestasi/bukti-20-cover.jpg",
    story: "Mengembangkan proyek website yang responsif dan modern untuk dilombakan pada ajang FTI Festival 2026.",
  },
  {
    title: "Participant GEMASTIK XVIII (Pengembangan Perangkat Lunak)",
    level: "Wilayah",
    year: "2025",
    proof: "/prestasi/bukti-13.png",
    story: "Mewakili kampus dalam Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi (GEMASTIK) ke-18 pada divisi Pengembangan Perangkat Lunak.",
  },
  {
    title: "Participant Program Kreativitas Mahasiswa (PKM) 2025 dan 2026",
    level: "Wilayah",
    year: "2025 - 2026",
    proof: "/prestasi/bukti-11.png",
    // TODO: jelaskan bidang PKM (misal PKM-KC, PKM-RE) dan ide yang diajukan
    story: "Berpartisipasi aktif dalam pengajuan proposal Program Kreativitas Mahasiswa (PKM).",
  },
  {
    title: "Penerima Beasiswa Prestasi Institut Teknologi Del Semester Genap 2024/2025",
    level: "Institusi",
    year: "2024/2025",
    proof: "/prestasi/bukti-16.png",
    story: "Menerima Beasiswa Prestasi dari Institut Teknologi Del berkat capaian Indeks Prestasi (IP) akademik yang sangat memuaskan pada semester genap.",
  },
  {
    title: "Penerima Beasiswa Prestasi Institut Teknologi Del Semester Genap 2025/2026",
    level: "Institusi",
    year: "2025/2026",
    proof: "/prestasi/bukti-17.png",
    story: "Kembali mempertahankan konsistensi nilai akademik dan dianugerahi Beasiswa Prestasi oleh Institut Teknologi Del untuk tahun ajaran 2025/2026.",
  },
  {
    title: "Penerima Hibah Penelitian bersama Dosen Fakultas Vokasi",
    level: "Institusi",
    year: "2025/2026",
    proof: "/prestasi/bukti-19.jpeg",
    story: "Dipercaya terlibat langsung membantu penelitian akademis bersama dosen Fakultas Vokasi IT Del yang berhasil mendapatkan pendanaan hibah.",
  },
  {
    title: "Participant Huawei ICT Competition 2025 (Cloud Track)",
    level: "Kampus",
    year: "2025",
    proof: "/prestasi/bukti-10.png",
    story: "Mengikuti kompetisi teknologi informasi dan komunikasi dari Huawei pada jalur Cloud Track, menguji pemahaman tentang layanan Huawei Cloud.",
  },
];
