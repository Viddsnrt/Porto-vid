# Portofolio — David Gian Filbert Sinurat

Website portofolio satu halaman (Next.js + Tailwind CSS + Framer Motion), dua bahasa (ID/EN).

## Menjalankan

```bash
npm install      # wajib dijalankan sekali (ada paket font baru)
npm run dev      # buka http://localhost:3000
npm run build    # cek sebelum deploy
```

## Mengubah isi website — cukup edit folder `data/`

Kamu **tidak perlu menyentuh folder `components/`** untuk mengubah isi.

| Ingin mengubah…                          | Edit file                     | File gambar/bukti di |
| ---------------------------------------- | ----------------------------- | -------------------- |
| Nama, foto, bio, email, CV, media sosial | `data/profile.js`             | `public/profil/`     |
| Perjalanan (SMA & tiap semester)         | `data/experience.js`          | –                    |
| Keahlian, framework & tools              | `data/skills.js`              | –                    |
| Prestasi                                 | `data/achievements.js`        | `public/prestasi/`   |
| Organisasi & kepanitiaan                 | `data/organizations.js`       | –                    |
| Proyek                                   | `data/projects.js`            | `public/projects/`   |
| Teks tombol & judul bagian               | `locales/dictionary.js`       | –                    |
| Warna tema                               | `tailwind.config.js` (colors) | –                    |
| Urutan bagian halaman                    | `app/page.js`                 | –                    |

### Contoh: menambah prestasi baru

1. Simpan bukti ke `public/prestasi/`, misalnya `bukti-21.png` (boleh `.jpg`, `.jpeg`, atau `.pdf`).
2. Buka `data/achievements.js`, salin blok ini ke dalam daftar `achievements`:

```js
{
  title: "Juara 1 Lomba Contoh Nasional 2026",
  level: "Nasional",               // Internasional / Nasional / Wilayah / Institusi / Kampus
  year: "2026",
  proof: "/prestasi/bukti-21.png",
  highlight: true,                 // opsional — bingkai emas "Sorotan"
  story: "Ceritakan pengalamanmu di lomba ini...",
},
```

Simpan. Jumlah prestasi, tombol filter, dan angka di bagian atas ikut berubah otomatis.

### Naik ke semester 6

Di `data/experience.js`:
1. Hapus `current: true` dari blok Semester 5.
2. Salin blok Semester 5, ubah jadi Semester 6 (judul, cerita, daftar mata kuliah), beri `current: true`.
3. Ubah `currentSemester = 6`. Bilah kemajuan studi ikut bergeser.

### Menambah keahlian

Di `data/skills.js`, salin satu baris ke kelompok yang cocok:

```js
{ name: "TensorFlow", icon: "tensorflow", note: "Melatih model deep learning." },
```

**Tips**
- Teks boleh dua bahasa: `story: { id: "…", en: "…" }`. Kalau hanya satu bahasa, tulis teks biasa.
- Untuk PDF prestasi, tambah `cover: "/prestasi/bukti-21-cover.jpg"` agar kartunya punya gambar sampul.
- Cari tanda `// TODO` di folder `data/` untuk bagian yang masih perlu kamu lengkapi.
- Screenshot proyek: simpan di `public/projects/` dengan nama yang sama seperti di `data/projects.js`.
  Selama gambar belum ada, website memakai sampul bermotif otomatis.
