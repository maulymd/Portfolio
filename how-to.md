Berikut adalah panduan lengkap **step-by-step** yang sangat mudah untuk menambahkan proyek baru ke portofolio Anda di masa mendatang.

Karena kita sudah merancang arsitektur menggunakan **Dynamic Routing Astro**, Anda **tidak perlu membuat file halaman baru** (`.astro`). Anda **hanya perlu menambahkan data di 1 file saja**!

---

### 📋 Ringkasan Alur:

```
1. Siapkan Gambar (Opsional) ➜ 2. Isi Data di projects.ts ➜ 3. Selesai & Otomatis Aktif!
```

---

### Langkah 1: Siapkan Gambar Proyek (Opsional)

Jika Anda memiliki gambar banner atau screenshot hasil testing:

1. Masukkan file gambar ke dalam folder:  
   `public/images/projects/` (misalnya `public/images/projects/my-new-project.png`).
2. Jika ada beberapa screenshot pengujian/bug report, Anda bisa membuat sub-folder seperti:  
   `public/images/projects/my-new-project/test-case-1.png`.

> _Catatan: Jika belum ada gambarnya, tidak masalah! Sistem sudah dilengkapi proteksi otomatis (fallback), sehingga tampilan kartu dan halaman detail tetap rapi tanpa ada icon gambar rusak._

---

### Langkah 2: Buka File Data Proyek

Buka file: [`src/data/projects.ts`](file:///c:/Users/LENOVO/Documents/Maul/Porto/Portfolio/src/data/projects.ts)

---

### Langkah 3: Tambahkan Objek Proyek Baru ke dalam Array `projects`

Scroll ke bagian bawah array `export const projects: Project[] = [ ... ]`, lalu tambahkan objek proyek baru seperti contoh template berikut:

```typescript
  {
    // 1. ID unik: akan menjadi rute URL (contoh: /projects/bangkit-capstone)
    id: 'bangkit-capstone',

    // 2. Judul proyek
    title: 'HealthPal - Mobile Health App QA (Bangkit Capstone)',

    // 3. Peran Anda di proyek tersebut
    role: 'Lead QA & Mobile Tester',

    // 4. Periode waktu pengerjaan
    date: 'Januari 2026 - Februari 2026',

    // 5. Kategori (Pilih salah satu: 'automation' | 'manual' | 'mobile' | 'api')
    // Ini menentukan tombol filter mana yang akan menampilkan proyek ini
    category: 'mobile',

    // 6. Apakah proyek ini ingin diberi badge "Featured"? (true / false)
    featured: true,

    // 7. Deskripsi singkat (Tampil pada kartu di halaman Beranda)
    description:
      'Pengujian fungsional dan otomasi pada aplikasi kesehatan mobile Android, mencakup validasi sensor kesehatan dan integrasi REST API backend.',

    // 8. Ringkasan mendalam (Tampil di bagian atas halaman detail studi kasus)
    longDescription: [
      'Pada proyek Capstone Bangkit Academy ini, saya bertugas merancang skenario pengujian menyeluruh untuk aplikasi mobile Android.',
      'Fokus utama adalah menjamin keakuratan tracking data kesehatan pengguna, alur autentikasi Firebase, dan kestabilan aplikasi saat kondisi jaringan lemah.',
    ],

    // 9. Path gambar utama / thumbnail di folder public
    image: '/images/projects/healthpal-thumb.png',

    // 10. Tech Stack & Tools yang digunakan (akan menjadi label pills)
    techStack: [
      { name: 'Katalon Studio' },
      { name: 'Android Testing' },
      { name: 'Postman' },
      { name: 'Firebase Test Lab' },
      { name: 'Git' },
    ],

    // 11. Bagian studi kasus mendalam (Sections)
    sections: [
      {
        heading: 'Latar Belakang & Kebutuhan Pengujian',
        content: [
          'Aplikasi ini memproses data vital pengguna secara real-time, sehingga edge-cases seperti kehilangan sinyal dan validasi input data menjadi sangat krusial.',
          'Pengujian dilakukan pada berbagai versi OS Android dan resolusi layar perangkat yang berbeda.',
        ],
      },
      {
        heading: 'Skenario & Otomasi Pengujian',
        content: [
          'Menulis test matrix komprehensif mencakup positive flow dan negative flow.',
          'Mengotomasi pengujian alur pendaftaran dan konsultasi menggunakan Katalon Studio.',
        ],
        // Opsional: Lampirkan screenshot jika ada
        images: [
          // '/images/projects/healthpal/test-report.png',
        ],
      },
      {
        heading: 'Hasil & Dokumentasi Defect',
        content: [
          'Berhasil menemukan 12 isu layout dan 3 potensi memory leak sebelum rilis final.',
          'Seluruh bug diverifikasi tuntas sebelum penilaian akhir capstone.',
        ],
      },
    ],

    // Opsional (Hanya isi jika proyek memiliki desain UI/UX):
    // colorPalette: ['#059669', '#10B981', '#F8FAFC'],
    // mockups: ['/images/projects/mockup1.png', '/images/projects/mockup2.png'],

    // 12. Opsional: Terjemahan Bahasa Inggris (Bilingual EN Support)
    en: {
      title: 'HealthPal - Mobile Health App QA (Bangkit Capstone)',
      role: 'Lead QA & Mobile Tester',
      date: 'January 2026 - February 2026',
      description:
        'Functional and automated testing for an Android mobile health application, validating sensor data integrity and backend REST API integration.',
      longDescription: [
        'For this Bangkit Academy Capstone project, I led the end-to-end QA and mobile testing strategy.',
        'The primary objective was ensuring real-time health data accuracy, robust Firebase authentication, and app stability under weak network conditions.',
      ],
      sections: [
        {
          heading: 'Background & Testing Needs',
          content: [
            'Handling vital patient data in real time made handling edge cases and data validation paramount.',
          ],
        },
      ],
    },
  },
```

---

### Langkah 4: Simpan & Periksa Otomatisasinya

Setelah file [`src/data/projects.ts`](file:///c:/Users/LENOVO/Documents/Maul/Porto/Portfolio/src/data/projects.ts) disimpan, Astro secara **otomatis**:

1. **Membuat Halaman Detail Baru**: Rute `/projects/<id-anda>` langsung aktif.
2. **Menambah Kartu di Beranda**: Kartu proyek baru langsung muncul di bagian _"Proyek & Pengujian Unggulan"_.
3. **Mengupdate Counter**: Label tombol _"Semua Proyek (5)"_ otomatis menghitung jumlah proyek terbaru.
4. **Sinkronisasi Filter**: Proyek baru langsung bisa difilter sesuai `category` yang Anda tentukan (`automation`, `manual`, `mobile`, atau `api`).
5. **Navigasi Rantai (_Prev/Next_)**: Navigasi bawah di setiap halaman detail langsung memasukkan proyek baru ini ke dalam urutan link.

---

### Langkah 5: Pengujian Lokal & Build

Sebelum mengunggah (_deploy_) portofolio ke hosting:

```bash
# Untuk melihat preview lokal:
npm run dev

# Untuk memvalidasi build produksi tidak ada error:
npm run build
```
