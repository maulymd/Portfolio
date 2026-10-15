# Maulana Yusuf Ahmadi — QA Engineer Portfolio

Portofolio profesional **Software Quality Assurance (QA) Engineer** milik **Maulana Yusuf Ahmadi**, dibangun menggunakan **Astro**, **TypeScript**, dan **Vanilla CSS** dengan arsitektur modern berkecepatan tinggi, ramah SEO, dan berestetika engineering tingkat lanjut (_Quality & Bug-Free Theme: Emerald Green & Cyan_).

---

## 🌟 Fitur Utama

- **Halaman Detail Studi Kasus Dinamis (`/projects/[id]`)**:
  - Dibangun menggunakan Astro `getStaticPaths()` untuk menghasilkan halaman statis instan (_0ms client-side JavaScript overhead_).
  - Dilengkapi breadcrumb, ringkasan peran & timeline, sticky sidebar tech stack, galeri screenshot bukti pengujian dengan Lightbox modal zoom, serta navigasi proyek melingkar (_Prev/Next Project_).
- **Dukungan Multi-Bahasa Penuh (ID / EN)**:
  - Tombol pengalih bahasa di Navbar dan modal popup pilihan bahasa.
  - Berfungsi di seluruh halaman beranda maupun halaman detail proyek, tersimpan otomatis di `localStorage`.
- **Mode Gelap & Terang (Dark / Light Mode)**:
  - Palet warna dirancang khusus dengan tema QA: _Deep Slate_, _Emerald Green_ (simbol _Test Passed_), dan _Electric Cyan_.
- **Filter Interaktif Kategori Proyek**:
  - Tombol filter kategori (_Automation (E2E)_, _API Testing_, _Mobile QA_, _Web QA_, _Manual & UAT_) dengan animasi _fade-in_.
- **Live QA Interactive Test Runner Widget**:
  - Simulasi eksekusi terminal CLI Playwright & Cypress langsung di halaman beranda.
- **Image Lightbox & Zoom Viewer**:
  - Preview sertifikat dan tangkapan layar pengujian yang mendukung _Zoom-in_, _Zoom-out_, _Panning (drag)_, dan _Reset_.
- **Modal Unduh CV**:
  - Pilihan unduh resume versi Bahasa Indonesia maupun Bahasa Inggris.

---

## 🚀 Rute & Halaman

| Rute             | Tipe    | Deskripsi                                                                                  |
| :--------------- | :------ | :----------------------------------------------------------------------------------------- |
| `/`              | Statis  | Beranda utama: Hero, Tentang, Pengalaman, Pendidikan, Proyek, Keahlian 3 Pilar, dan Kontak |
| `/projects/[id]` | Dinamis | Halaman studi kasus pengujian mendalam (contoh: `/projects/apmnu-api-testing`)             |

---

## 💼 Proyek Pengujian Unggulan

| Proyek                                                  | Peran             | Kategori     | Tools Utama                                   |
| :------------------------------------------------------ | :---------------- | :----------- | :-------------------------------------------- |
| **APMNU Web & API Automation Testing**                  | QA Freelance      | `api`        | Playwright, TypeScript, Postman, Jira         |
| **POS & CRM Web and Mobile Testing** _(Red Ant Colony)_ | Quality Assurance | `manual`     | Test Case Design, UAT, Sanity, Figma, Postman |
| **Morclinic & Morhuman QA Testing** _(Morbis)_          | QA Intern         | `automation` | Cypress E2E, Manual E2E, Postman              |
| **SUMU Mobile Automation Testing** _(Wesclic)_          | QA Intern         | `mobile`     | Katalon Studio, Android QA, Regression        |

---

## 🏢 Riwayat Pengalaman Kerja

| Perusahaan                                | Posisi            | Periode             |
| :---------------------------------------- | :---------------- | :------------------ |
| **Red Ant Colony**                        | Quality Assurance | Nov 2025 - Sekarang |
| **Asosiasi Profesor Muslimat NU (APMNU)** | QA Freelance      | Mei 2026 - Agu 2026 |
| **Morbis (PT Medika Digital Nusantara)**  | QA Intern         | Mei 2025 - Jul 2025 |
| **Wesclic Technology**                    | QA Intern         | Agu 2025 - Nov 2025 |

---

## 🎓 Pendidikan & Sertifikasi

- **S1 Informatika — UIN Sunan Kalijaga Yogyakarta** (IPK 3.72 / 4.00)
- **Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka** — _Mobile Development Graduate_

---

## 🛠️ Tech Stack & Alat Pengujian

- **Framework & Runtime**: [Astro](https://astro.build/) v7, TypeScript, Node.js (>=22.12.0)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Glassmorphism, Micro-animations)
- **QA Automation Tools**: Playwright, Cypress, Katalon Studio
- **API & Manual Testing**: Postman, Chrome DevTools, UAT, Sanity, Regression, Smoke
- **Collaboration & Tracking**: Jira, Plane, Linear, Redmine, Asana, Git/GitHub, Figma (PRD Inspection)

---

## 📦 Memulai & Menjalankan Proyek

Pastikan Node.js (versi >= 22.12.0) sudah terpasang di perangkat Anda:

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server lokal (http://localhost:4321)
npm run dev

# 3. Validasi dan build file produksi statis ke folder dist/
npm run build

# 4. Preview hasil build produksi
npm run preview
```

---

## 📁 Struktur Direktori

```text
Portfolio/
├── public/                     # Aset publik statis (gambar, icons, favicon)
│   ├── assets/                 # Foto profil dan resume
│   └── images/projects/        # Tangkapan layar dan banner studi kasus
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar.astro, Footer.astro
│   │   ├── modals/             # ImageModal.astro, CvModal.astro, LangPopup.astro
│   │   ├── sections/           # Hero, About, Experience, Education, Projects, Skills, Contact
│   │   └── ui/                 # Card.astro, SectionTitle.astro, SkillTag.astro, TestRunnerTerminal.astro
│   ├── data/
│   │   ├── projects.ts         # Data & interface TypeScript untuk semua studi kasus proyek
│   │   ├── translations.json   # Kamus terjemahan bilingual ID & EN
│   │   ├── experience.json     # Data pengalaman kerja
│   │   ├── education.json      # Data riwayat pendidikan
│   │   ├── personal.json       # Informasi kontak & tautan sosial
│   │   └── skills.json         # Data keahlian 3 pilar QA
│   ├── layouts/
│   │   └── BaseLayout.astro    # Master HTML layout, SEO meta tags, fonts
│   ├── pages/
│   │   ├── index.astro         # Halaman utama (beranda)
│   │   └── projects/
│   │       └── [id].astro      # Halaman dinamis detail studi kasus proyek
│   └── styles/
│       ├── global.css          # CSS Variables (Theme tokens & dark mode)
│       ├── components.css      # Desain tombol, kartu, dan grid
│       └── animations.css      # Animasi UI & keyframes
├── how-to.md                   # Panduan step-by-step penambahan proyek baru
└── astro.config.mjs            # Konfigurasi Astro
```

---

## 📝 Panduan Menambah Proyek Baru

Untuk menambah proyek baru, Anda hanya perlu menambahkan data ke [`src/data/projects.ts`](file:///c:/Users/LENOVO/Documents/Maul/Porto/Portfolio/src/data/projects.ts). Panduan lengkap langkah demi langkah dapat dibaca di:  
👉 **[`how-to.md`](file:///c:/Users/LENOVO/Documents/Maul/Porto/Portfolio/how-to.md)**

---

## 📄 Kontak & Profil

- **Email**: [maulanayusufahmd@gmail.com](mailto:maulanayusufahmd@gmail.com)
- **LinkedIn**: [linkedin.com/in/maulanayusufahmd](https://www.linkedin.com/in/maulanayusufahmd/)
- **GitHub**: [github.com/maulymd](https://github.com/maulymd)
