// ============================================================================
//  data/experience.js  —  PERJALANAN (SMA -> KULIAH, per semester)
// ============================================================================
//
//  Setiap blok { ... } = satu titik di timeline.
//
//  group    : judul kelompok (misal "SMA", "Tingkat 1"). Titik-titik dengan
//             group yang sama akan dikumpulkan di bawah satu judul.
//  stage    : label kecil di atas judul (misal "Semester 3").
//  period   : waktu.
//  title    : fokus utama di tahap ini (judul besar).
//  place    : tempat belajar (opsional).
//  story    : cerita singkat tentang apa yang kamu pelajari / alami.
//  learned  : daftar mata pelajaran / mata kuliah (tampil sebagai label kecil).
//  current  : true  -> tahap yang sedang berjalan sekarang (diberi tanda khusus).
//
//  NAIK SEMESTER? Ubah `current: true` ke semester baru, salin blok semester
//  sebelumnya untuk semester berikutnya, lalu ubah `currentSemester` di bawah.
//
//  Teks boleh satu bahasa ("teks") atau dua bahasa ({ id: "...", en: "..." }).
// ============================================================================

// Pengantar di bawah judul bagian "Perjalanan"
export const journeyIntro = {
  id: "Dari kelas MIA di SMA Negeri 2 Balige sampai semester 5 Software Engineering di Institut Teknologi Del.",
  en: "From the science track at SMA Negeri 2 Balige to the fifth semester of Software Engineering at Institut Teknologi Del.",
};

// Untuk bilah kemajuan studi
export const currentSemester = 5;
export const totalSemesters = 8; // program D4 = 8 semester

export const journey = [
  {
    group: { id: "SMA", en: "High school" },
    stage: { id: "SMA", en: "High school" },
    period: "2021 - 2024", // TODO: pastikan tahun masuk & lulus SMA
    title: { id: "Fondasi logika dan sains", en: "A foundation in logic and science" },
    place: { id: "SMA Negeri 2 Balige, jurusan MIA (Matematika dan Ilmu Pengetahuan Alam)", en: "SMA Negeri 2 Balige, Mathematics & Natural Sciences (MIA) track" },
    story: {
      id: "Di jurusan MIA, matematika dan ilmu alam melatih saya berpikir runtut, menguji dugaan dengan data, dan tidak berhenti sebelum menemukan jawaban. Cara berpikir inilah yang kemudian membawa saya memilih Software Engineering.",
      en: "In the MIA track, mathematics and the natural sciences trained me to think step by step, test assumptions with data, and keep going until I find the answer. That way of thinking is what led me to choose Software Engineering.",
    },
    learned: [
      { id: "Matematika", en: "Mathematics" },
      { id: "Fisika", en: "Physics" },
      { id: "Kimia", en: "Chemistry" },
      { id: "Biologi", en: "Biology" },
    ],
  },

  // ---------------------------------------------------------------- TINGKAT 1
  {
    group: { id: "Tingkat 1", en: "Year 1" },
    stage: "Semester 1",
    period: { id: "TA 2024/2025, semester gasal", en: "AY 2024/2025, odd semester" },
    title: { id: "Fondasi pemrograman & cara kerja komputer", en: "Programming fundamentals & how computers work" },
    place: "Institut Teknologi Del",
    story: {
      id: "Langkah pertama di dunia perkuliahan. Saya menulis program pertama saya, belajar logika matematika diskrit, memahami cara komputer bekerja di tingkat perangkat keras, dan membuat halaman web pertama. Pengenalan Rekayasa Perangkat Lunak memperlihatkan bahwa membuat software bukan sekadar menulis kode, melainkan proses yang direkayasa.",
      en: "My first step into university. I wrote my first programs, learned discrete mathematics, understood how computers work at the hardware level, and built my first web pages. Introduction to Software Engineering showed me that building software is an engineered process, not just writing code.",
    },
    learned: [
      { id: "Dasar Pemrograman", en: "Programming Fundamentals" },
      { id: "Matematika Diskrit", en: "Discrete Mathematics" },
      { id: "Pengembangan Situs Web I", en: "Web Development I" },
      { id: "Pengenalan Rekayasa Perangkat Lunak", en: "Introduction to Software Engineering" },
      { id: "Arsitektur dan Organisasi Komputer", en: "Computer Architecture & Organization" },
      { id: "Penyelesaian Masalah di Dunia Digital", en: "Problem Solving in the Digital World" },
      { id: "Bahasa Inggris I", en: "English I" },
      { id: "Pembentukan Karakter Del", en: "Del Character Building" },
    ],
  },
  {
    group: { id: "Tingkat 1", en: "Year 1" },
    stage: "Semester 2",
    period: { id: "TA 2024/2025, semester genap", en: "AY 2024/2025, even semester" },
    title: { id: "Dari kebutuhan pengguna ke proyek tim pertama", en: "From user needs to my first team project" },
    place: "Institut Teknologi Del",
    story: {
      id: "Saya belajar bahwa perangkat lunak berawal dari kebutuhan pengguna: menggali dan menuliskan kebutuhan, merancang basis data, lalu membangunnya menjadi aplikasi web. Semua itu dipraktikkan dalam Proyek Akhir Tahun I, proyek tim pertama saya. Semester ini ditutup dengan Beasiswa Prestasi dari IT Del.",
      en: "I learned that software starts from user needs: eliciting and writing requirements, designing the database, then building it into a web application. All of it came together in Year 1 Final Project, my first team project. The semester ended with an Academic Merit Scholarship from IT Del.",
    },
    learned: [
      { id: "Analisis Kebutuhan Perangkat Lunak", en: "Software Requirements Analysis" },
      { id: "Pengenalan Basis Data", en: "Introduction to Databases" },
      { id: "Pengembangan Situs Web II", en: "Web Development II" },
      { id: "Sistem Operasi", en: "Operating Systems" },
      { id: "Proyek Akhir Tahun I", en: "Year 1 Final Project" },
      { id: "Bahasa Indonesia", en: "Indonesian Language" },
      { id: "Agama", en: "Religion" },
    ],
  },

  // ---------------------------------------------------------------- TINGKAT 2
  {
    group: { id: "Tingkat 2", en: "Year 2" },
    stage: "Semester 3",
    period: { id: "TA 2025/2026, semester gasal", en: "AY 2025/2026, odd semester" },
    title: { id: "Struktur data, OOP, dan perkenalan dengan AI", en: "Data structures, OOP, and a first look at AI" },
    place: "Institut Teknologi Del",
    story: {
      id: "Semester yang membentuk cara berpikir seorang engineer: algoritma dan struktur data, pemrograman berorientasi objek, sistem basis data, dan jaringan komputer. Saya juga belajar merancang antarmuka yang nyaman dipakai, dan untuk pertama kalinya mengenal kecerdasan buatan, yang kemudian menjadi salah satu minat utama saya. Sepanjang 2025 saya juga mulai aktif berkompetisi, dari GEMASTIK XVIII sampai Google Cloud Arcade.",
      en: "The semester that shaped how I think as an engineer: algorithms and data structures, object-oriented programming, database systems, and computer networks. I also learned to design interfaces that are pleasant to use, and met artificial intelligence for the first time, which became one of my main interests. Throughout 2025 I also started competing, from GEMASTIK XVIII to Google Cloud Arcade.",
    },
    learned: [
      { id: "Algoritma dan Struktur Data", en: "Algorithms & Data Structures" },
      { id: "Pemrograman Berorientasi Objek", en: "Object-Oriented Programming" },
      { id: "Sistem Basis Data", en: "Database Systems" },
      { id: "Perancangan Antarmuka Pengguna", en: "User Interface Design" },
      { id: "Pengenalan Kecerdasan Buatan", en: "Introduction to Artificial Intelligence" },
      { id: "Jaringan Komputer", en: "Computer Networks" },
      { id: "Logika Informatika", en: "Logic for Computer Science" },
      { id: "Bahasa Inggris II", en: "English II" },
    ],
  },
  {
    group: { id: "Tingkat 2", en: "Year 2" },
    stage: "Semester 4",
    period: { id: "TA 2025/2026, semester genap", en: "AY 2025/2026, even semester" },
    title: { id: "Aplikasi mobile, sistem terdistribusi & pengujian", en: "Mobile apps, distributed systems & testing" },
    place: "Institut Teknologi Del",
    story: {
      id: "Fokus bergeser ke membangun aplikasi yang siap dipakai banyak orang: aplikasi mobile, aplikasi terdistribusi, dan pengujian perangkat lunak agar kualitasnya terjaga. Probabilitas dan Statistik memberi dasar untuk dunia data, sementara Technopreneurship mengajak saya memikirkan sisi bisnis sebuah produk. Semuanya bermuara di Proyek Akhir Tahun II, dan semester ini kembali ditutup dengan Beasiswa Prestasi.",
      en: "The focus shifted to building apps that many people can rely on: mobile apps, distributed applications, and software testing to keep quality high. Probability and Statistics laid the groundwork for data, while Technopreneurship made me think about the business side of a product. It all came together in Year 2 Final Project, and the semester again ended with an Academic Merit Scholarship.",
    },
    learned: [
      { id: "Pengembangan Aplikasi Mobile", en: "Mobile Application Development" },
      { id: "Pengembangan Aplikasi Terdistribusi", en: "Distributed Application Development" },
      { id: "Pengujian Perangkat Lunak", en: "Software Testing" },
      { id: "Probabilitas dan Statistik", en: "Probability & Statistics" },
      { id: "Proyek Akhir Tahun II", en: "Year 2 Final Project" },
      { id: "Technopreneurship", en: "Technopreneurship" },
      { id: "Pancasila", en: "Pancasila" },
    ],
  },

  // ---------------------------------------------------------------- TINGKAT 3
  {
    group: { id: "Tingkat 3", en: "Year 3" },
    stage: "Semester 5",
    period: { id: "TA 2026/2027, semester gasal", en: "AY 2026/2027, odd semester" },
    title: { id: "Data, kualitas & keamanan perangkat lunak", en: "Data, software quality & security" },
    place: "Institut Teknologi Del",
    story: {
      id: "Saat ini saya mendalami dua arah sekaligus. Di sisi data, Data Analitik dan Data Science (mata kuliah pilihan) melatih saya mengolah, menganalisis, dan membangun model dari data. Di sisi rekayasa, Kualitas Perangkat Lunak, Keamanan Perangkat Lunak, dan Automata mengajarkan cara memastikan perangkat lunak benar, aman, dan dapat diandalkan.",
      en: "Right now I'm going deeper in two directions. On the data side, Data Analytics and Data Science (an elective) train me to process, analyze, and model data. On the engineering side, Software Quality, Software Security, and Automata teach me how to make sure software is correct, secure, and dependable.",
    },
    learned: [
      { id: "Data Analitik", en: "Data Analytics" },
      { id: "Data Science (pilihan)", en: "Data Science (elective)" },
      { id: "Kualitas Perangkat Lunak", en: "Software Quality" },
      { id: "Keamanan Perangkat Lunak", en: "Software Security" },
      { id: "Automata", en: "Automata Theory" },
    ],
    current: true,
  },
];
