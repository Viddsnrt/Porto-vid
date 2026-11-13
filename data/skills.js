// ============================================================================
//  data/skills.js  —  KEAHLIAN, FRAMEWORK & TOOLS
// ============================================================================
//  Keahlian dikelompokkan. Tambah keahlian: salin satu baris di `items`.
//  Hapus yang belum kamu kuasai: hapus barisnya saja.
//
//  name : nama yang tampil
//  icon : nama ikon (daftar lengkap ada di components/Icon.js). Contoh:
//         flutter, dart, go, python, javascript, typescript, react, nextjs, nodejs,
//         tailwind, html, css, laravel, php, java, kotlin, postgresql, mysql, sqlite,
//         mongodb, redis, firebase, supabase, docker, kubernetes, git, github, linux,
//         gcp, aws, huawei, fastapi, flask, tensorflow, pytorch, opencv, pandas, numpy,
//         scikitlearn, matplotlib, jupyter, colab, figma, postman, vscode, framer,
//         bootstrap, androidstudio, ai, rag, iot, api, sql, server, database, cloud
//         Kalau ikon tidak ada, website menampilkan huruf awal namanya.
//  note : satu kalimat bagaimana kamu memakainya (boleh dua bahasa)
// ============================================================================

export const skillGroups = [
  {
    group: { id: "Bahasa pemrograman", en: "Programming languages" },
    items: [
      { name: "Dart", icon: "dart", note: { id: "Bahasa utama saya untuk membangun aplikasi Flutter.", en: "My main language for building Flutter apps." } },
      { name: "Go (Golang)", icon: "go", note: { id: "Backend dan microservices berkinerja tinggi, konkurensi, serta RESTful API yang aman.", en: "High-performance backends and microservices, concurrency, and secure RESTful APIs." } },
      { name: "Python", icon: "python", note: { id: "Pengolahan data, model AI, otomasi, dan eksperimen machine learning.", en: "Data processing, AI models, automation, and machine learning experiments." } },
      { name: "JavaScript", icon: "javascript", note: { id: "Logika antarmuka web interaktif, dari halaman statis sampai aplikasi React.", en: "Interactive web front-end logic, from static pages to React apps." } },
      { name: "Java", icon: "java", note: { id: "Dasar pemrograman berorientasi objek: class, inheritance, dan design pattern.", en: "Object-oriented programming foundations: classes, inheritance, and design patterns." } },
      { name: "PHP", icon: "php", note: { id: "Aplikasi web sisi server pada mata kuliah pengembangan situs web.", en: "Server-side web applications in web development courses." } },
      { name: "SQL", icon: "sql", note: { id: "Menulis query, join, dan agregasi untuk mengolah data relasional.", en: "Writing queries, joins, and aggregations over relational data." } },
      { name: "HTML", icon: "html", note: { id: "Struktur halaman web yang semantik dan mudah diakses.", en: "Semantic, accessible web page structure." } },
      { name: "CSS", icon: "css", note: { id: "Tata letak responsif, animasi, dan gaya visual halaman web.", en: "Responsive layouts, animation, and visual styling for the web." } },
    ],
  },
  {
    group: { id: "Framework mobile & web", en: "Mobile & web frameworks" },
    items: [
      { name: "Flutter", icon: "flutter", note: { id: "Aplikasi mobile lintas platform dengan UI responsif, manajemen state, dan integrasi API.", en: "Cross-platform mobile apps with responsive UI, state management, and API integration." } },
      { name: "Next.js", icon: "nextjs", note: { id: "Aplikasi web modern yang cepat dan ramah SEO dengan App Router, termasuk portofolio ini.", en: "Fast, SEO-friendly modern web apps with the App Router, including this portfolio." } },
      { name: "React", icon: "react", note: { id: "Membangun antarmuka berbasis komponen yang dapat dipakai ulang.", en: "Building reusable, component-based interfaces." } },
      { name: "Tailwind CSS", icon: "tailwind", note: { id: "Antarmuka kustom yang responsif di semua ukuran layar.", en: "Custom interfaces that stay responsive on every screen size." } },
      { name: "Framer Motion", icon: "framer", note: { id: "Animasi antarmuka yang halus, seperti yang dipakai di Arta Batak.", en: "Smooth interface animation, as used in Arta Batak." } },
      { name: "Laravel", icon: "laravel", note: { id: "Framework PHP untuk aplikasi web dengan pola MVC.", en: "PHP framework for MVC web applications." } },
    ],
  },
  {
    group: { id: "Backend & basis data", en: "Backend & databases" },
    items: [
      { name: "REST API", icon: "api", note: { id: "Merancang endpoint, autentikasi, dan kontrak data antara aplikasi dan server.", en: "Designing endpoints, authentication, and data contracts between apps and servers." } },
      { name: "PostgreSQL", icon: "postgresql", note: { id: "Skema relasional kompleks, optimasi query, dan integritas data.", en: "Complex relational schemas, query optimization, and data integrity." } },
      { name: "MySQL", icon: "mysql", note: { id: "Basis data relasional untuk aplikasi web dan sistem informasi.", en: "Relational databases for web apps and information systems." } },
      { name: "SQLite", icon: "sqlite", note: { id: "Penyimpanan lokal di aplikasi mobile, seperti pada DompetKu.", en: "On-device storage for mobile apps, as in DompetKu." } },
      { name: "Firebase", icon: "firebase", note: { id: "Autentikasi, Firestore real-time, dan notifikasi untuk aplikasi Flutter.", en: "Authentication, real-time Firestore, and notifications for Flutter apps." } },
      { name: "IoT", icon: "iot", note: { id: "Menghubungkan sensor dengan aplikasi untuk pemantauan, seperti pada TobaBersih.", en: "Connecting sensors to apps for monitoring, as in TobaBersih." } },
    ],
  },
  {
    group: { id: "Data & AI", en: "Data & AI" },
    items: [
      { name: "Computer Vision (YOLO)", icon: "ai", note: { id: "Melatih dan menerapkan model deteksi objek real-time untuk masalah berbasis citra.", en: "Training and deploying real-time object detection models for image-based problems." } },
      { name: "RAG (Retrieval-Augmented Generation)", icon: "rag", note: { id: "Menggabungkan pencarian dokumen dengan model bahasa agar jawaban AI berdasar data sendiri.", en: "Combining document retrieval with language models so AI answers are grounded in your own data." } },
      { name: "Pandas", icon: "pandas", note: { id: "Membersihkan, menggabungkan, dan menganalisis data tabular.", en: "Cleaning, joining, and analyzing tabular data." } },
      { name: "NumPy", icon: "numpy", note: { id: "Komputasi numerik dan operasi array yang cepat.", en: "Fast numerical computing and array operations." } },
      { name: "Matplotlib", icon: "matplotlib", note: { id: "Visualisasi data untuk eksplorasi dan laporan analisis.", en: "Data visualization for exploration and analysis reports." } },
      { name: "Scikit-learn", icon: "scikitlearn", note: { id: "Membangun dan mengevaluasi model machine learning klasik.", en: "Building and evaluating classic machine learning models." } },
      { name: "Jupyter Notebook", icon: "jupyter", note: { id: "Eksperimen data dan model secara interaktif, langkah demi langkah.", en: "Interactive, step-by-step data and model experiments." } },
      { name: "Google Colab", icon: "colab", note: { id: "Melatih model dengan GPU di cloud tanpa instalasi.", en: "Training models on cloud GPUs with no setup." } },
    ],
  },
  {
    group: { id: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: [
      { name: "Google Cloud Platform", icon: "gcp", note: { id: "Infrastruktur cloud, deployment, Cloud Storage, BigQuery, dan layanan ML; juara GCP Season 11 dan fasilitator Google Cloud Arcade.", en: "Cloud infrastructure, deployment, Cloud Storage, BigQuery, and ML services; GCP Season 11 winner and Google Cloud Arcade facilitator." } },
      { name: "Huawei Cloud", icon: "huawei", note: { id: "Layanan cloud Huawei yang saya pelajari lewat Huawei ICT Competition (Cloud Track).", en: "Huawei cloud services I learned through the Huawei ICT Competition (Cloud Track)." } },
      { name: "Docker", icon: "docker", note: { id: "Membungkus aplikasi ke dalam container agar deployment konsisten.", en: "Packaging apps into containers for consistent deployments." } },
      { name: "Linux", icon: "linux", note: { id: "Bekerja di terminal, mengelola server, dan memahami sistem operasi.", en: "Working in the terminal, managing servers, and understanding operating systems." } },
    ],
  },
  {
    group: { id: "Alat kerja", en: "Tooling" },
    items: [
      { name: "Git", icon: "git", note: { id: "Version control dengan branching dan merge yang rapi.", en: "Version control with clean branching and merging." } },
      { name: "GitHub", icon: "github", note: { id: "Kolaborasi tim lewat pull request, code review, dan CI/CD dasar.", en: "Team collaboration through pull requests, code review, and basic CI/CD." } },
      { name: "VS Code", icon: "vscode", note: { id: "Editor utama untuk hampir semua proyek saya.", en: "My main editor for almost every project." } },
      { name: "Android Studio", icon: "androidstudio", note: { id: "Emulator dan alat debugging untuk aplikasi Flutter di Android.", en: "Emulator and debugging tools for Flutter apps on Android." } },
      { name: "Figma", icon: "figma", note: { id: "Merancang wireframe dan prototipe antarmuka sebelum coding.", en: "Designing wireframes and interface prototypes before coding." } },
      { name: "Postman", icon: "postman", note: { id: "Menguji dan mendokumentasikan endpoint API.", en: "Testing and documenting API endpoints." } },
    ],
  },
];
