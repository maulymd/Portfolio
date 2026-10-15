export interface TechItem {
  name: string;
  icon?: string;
}

export interface ProjectSection {
  heading: string;
  content: string[];
  images?: string[];
}

export interface ProjectTranslation {
  title?: string;
  role?: string;
  date?: string;
  description?: string;
  longDescription?: string[];
  sections?: {
    heading: string;
    content: string[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  category: 'automation' | 'manual' | 'mobile' | 'api' | 'web';
  featured?: boolean;
  description: string;
  longDescription: string[];
  image: string;
  colorPalette?: string[];
  mockups?: string[];
  techStack: TechItem[];
  sections: ProjectSection[];
  en?: ProjectTranslation;
}

export const projects: Project[] = [
  {
    id: 'apmnu-api-automation',
    title: 'APMNU - Web & API Automation Testing Suite',
    role: 'QA Automation Engineer',
    date: 'Maret 2026 - Agustus 2026',
    category: 'api',
    featured: false,
    description:
      'Framework pengujian otomatisasi REST API tingkat enterprise menggunakan Playwright Test, TypeScript, dan Zod Contract Validation (100% coverage pada 89 endpoint) yang diintegrasikan dengan pengujian manual antarmuka web, validasi viewport mobile, serta pelacakan defect di Jira.',
    longDescription: [
      'Pada proyek Asosiasi Profesor Muslimat Nahdlatul Ulama (APMNU), saya berperan sebagai QA Engineer untuk menjamin kehandalan sistem backend dan kesempurnaan tampilan antarmuka web organisasi (https://api.apmnu.site).',
      'Pengujian backend diimplementasikan melalui arsitektur otomatisasi enterprise menggunakan Playwright APIRequestContext, validasi skema runtime Zod, in-memory token caching untuk mencegah rate limiting, serta integrasi CI/CD GitHub Actions dengan cakupan 100% pada 89 endpoint OpenAPI.',
      'Di sisi frontend, saya melakukan pengujian manual UI secara intensif pada beragam viewport mobile serta eksplorasi endpoint via Postman sebelum ditranslasikan ke test suite otomatis, dengan seluruh defect terdokumentasi terstruktur di Jira.',
    ],
    image: '/images/projects/apmnu-thumb.png',
    techStack: [
      { name: 'Playwright Test' },
      { name: 'TypeScript' },
      { name: 'Zod (Contract Testing)' },
      { name: 'REST API' },
      { name: 'GitHub Actions CI/CD' },
      { name: 'OpenAPI / Swagger' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Mobile Viewport QA' },
      { name: 'Chrome DevTools' },
    ],
    sections: [
      {
        heading: 'Latar Belakang & Ruang Lingkup Sistem',
        content: [
          'Portal APMNU menangani registrasi keanggotaan, verifikasi profil akademisi/profesor, dan agenda publikasi ilmiah. Sistem memiliki 89 endpoint REST API dengan batasan hak akses ketat (Public, Professor, Admin).',
          'Tantangan utama adalah mencegah regresi kontrak DTO antar-versi backend serta memastikan anggota organisasi dapat mengakses portal dengan nyaman dan responsif dari perangkat seluler.',
          'Strategi yang diterapkan menggabungkan otomatisasi pengujian API untuk regresi cepat dan deterministik dengan manual testing terstruktur pada sisi antarmuka web.',
        ],
      },
      {
        heading: 'Arsitektur API Automation & Inovasi Teknis (Playwright & Zod)',
        content: [
          'Role-Based Custom Fixtures: Menyediakan isolasi konteks testing (publicApi, adminApi, professorApi) yang secara otomatis menyuntikkan autentikasi Bearer token.',
          'In-Memory Token Caching: Mencegah banjir permintaan login (login flood) dan rate limiting saat eksekusi paralel antar-worker Playwright.',
          'Contract & Schema Testing: Memvalidasi kecocokan struktur dan tipe respons HTTP secara runtime menggunakan skema Zod untuk mencegah breaking changes pada API.',
          'Auto-Attach Debug Info: Saat terjadi kegagalan assertion, sistem secara otomatis melampirkan payload request/response, status code, dan header ke dalam Playwright HTML Report.',
        ],
      },
      {
        heading: 'Defect Tracking, Mobile Viewport QA & Exploratory Testing',
        content: [
          'Eksplorasi Endpoint & Postman: Melakukan verifikasi awal endpoint baru menggunakan Postman sebelum mengembangkannya ke dalam test suite otomatis Playwright.',
          'Pengujian Responsif Mobile: Menguji antarmuka web pada beragam ukuran layar mobile (360px hingga 428px) via Chrome DevTools Device Mode dan pengujian fisik di perangkat seluler.',
          'Defect Tracking Terstruktur: Mencatat setiap layout shift, validasi form yang tidak sesuai, atau isu fungsional ke dalam Jira lengkap dengan langkah reproduksi, tangkapan layar, dan tingkat keparahan.',
        ],
        images: ['/images/projects/apmnu-api-testing/1.png', '/images/projects/apmnu-api-testing/2.png'],
      },
      {
        heading: 'Hasil & Dampak Kualitas',
        content: [
          'Mencapai 100% test coverage terhadap seluruh 89 endpoint yang terdefinisi pada spesifikasi OpenAPI v3.',
          'Memangkas waktu uji regresi dari beberapa jam pengujian manual menjadi hitungan menit.',
          'Verifikasi kualitas otomatis (Quality Gate) diterapkan di pipeline GitHub Actions pada setiap push dan pull request ke branch utama.',
          'Memastikan stabilitas antarmuka pengguna pada portal web di berbagai resolusi layar tanpa ada tombol terpotong atau form yang bermasalah.',
        ],
      },
    ],
    en: {
      title: 'APMNU - Web & Enterprise API Automation Testing Suite',
      role: 'QA Automation Engineer',
      date: 'March 2026 - August 2026',
      description:
        'Enterprise-grade REST API test automation framework built with Playwright Test, TypeScript, and Zod Schema Validation (100% coverage across 89 endpoints), combined with manual web UI testing, responsive mobile QA, and Jira defect tracking.',
      longDescription: [
        'For the Asosiasi Profesor Muslimat Nahdlatul Ulama (APMNU) platform (https://api.apmnu.site), I served as QA Engineer ensuring backend reliability and flawless web interface user experience.',
        'Engineered an enterprise API test automation suite leveraging Playwright APIRequestContext, runtime Zod contract validation, in-memory token caching to avoid rate limits, and GitHub Actions CI/CD pipelines achieving 100% coverage on 89 OpenAPI endpoints.',
        'Additionally, conducted rigorous manual UI testing across mobile viewports, exploratory testing in Postman, and structured defect lifecycle management in Jira.',
      ],
      sections: [
        {
          heading: 'Background & System Scope',
          content: [
            'The APMNU portal handles member registrations, professor credential verifications, and academic publication events across 89 REST endpoints with strict role-based access control (Public, Professor, Admin).',
            'Key challenges included preventing API contract regressions between backend releases and guaranteeing responsive usability on mobile devices.',
            'Adopted a dual strategy combining automated API testing for rapid regression with systematic manual exploratory testing for UI/UX.',
          ],
        },
        {
          heading: 'API Automation Architecture & Technical Highlights',
          content: [
            'Role-Based Custom Fixtures: Pre-configured test contexts (publicApi, adminApi, professorApi) automatically managing authentication tokens.',
            'In-Memory Token Caching: Prevents authentication bottlenecks and rate-limiting during parallel multi-worker execution.',
            'Runtime Contract Testing: Strict JSON response validation against Zod schemas ensuring zero undocumented API contract drift.',
            'Auto-Attach Debug Info: Automatically appends complete failure payloads, headers, and schemas directly to Playwright HTML Reports for fast debugging.',
          ],
        },
        {
          heading: 'Defect Tracking, Mobile Viewport QA & Exploratory Testing',
          content: [
            'Endpoint Exploration with Postman: Performed initial endpoint verification and payload structure discovery in Postman before writing automated Playwright suites.',
            'Mobile Viewport QA: Evaluated web interfaces across viewports (360px to 428px) using Chrome DevTools Device Mode and physical Android devices.',
            'Structured Jira Defect Tracking: Logged layout shifts, clipping issues, and form validation errors in Jira with clear reproduction steps and severity tags.',
          ],
        },
        {
          heading: 'Results & Impact',
          content: [
            'Achieved 100% test coverage across all 89 OpenAPI endpoints.',
            'Reduced regression testing cycles from hours of manual checks down to minutes.',
            'Enforced an automated quality gate via GitHub Actions on every pull request.',
            'Guaranteed stable, responsive web user experience across mobile and desktop devices.',
          ],
        },
      ],
    },
  },
  {
    id: 'cypress-rejanglebong',
    title: 'APS Rejang Lebong - Cypress E2E Automation',
    role: 'QA Automation Engineer',
    date: '2025',
    category: 'automation',
    featured: false,
    description:
      'Pengembangan framework pengujian otomatisasi End-to-End (E2E) menggunakan Cypress untuk memvalidasi alur administrasi Data Pemilih Tetap (DPT) pada aplikasi APS Rejang Lebong.',
    longDescription: [
      'Proyek pengujian otomatisasi berbasis Cypress untuk memvalidasi integritas fungsional aplikasi Sistem Informasi Pemilihan (APS Rejang Lebong).',
      'Fokus pengujian berpusat pada modul Data Pemilih Tetap (DPT) yang menuntut keandalan tinggi dalam validasi nomor identitas kependudukan (NIK & Nomor KK 16 digit), pemilihan wilayah dinamis (Select2 Kelurahan), serta integritas penyimpanan data pemilih ke basis data.',
      'Rangkaian skrip pengujian dikembangkan secara modular ke dalam suite TS-VOTER (TS-VOTER-01 hingga TS-VOTER-05) yang mencakup positive test, negative flow, boundary value analysis, dan tangkapan layar otomatis saat kegagalan asersi.',
    ],
    image: '/images/projects/rejanglebong.png',
    techStack: [
      { name: 'Cypress E2E' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
      { name: 'End-to-End Testing' }
    ],
    sections: [
      {
        heading: 'Latar Belakang & Ruang Lingkup Sistem',
        content: [
          'Aplikasi APS Rejang Lebong (https://aps-rejanglebong.skwn.dev/dev/) digunakan untuk mengelola data pemilih tetap di tingkat kabupaten. Validasi input yang ketat mutlak diperlukan agar tidak terjadi duplikasi NIK atau anomali data pemilih.',
          'Ruang lingkup pengujian mencakup autentikasi akun petugas, akses menu Data Pemilih Tetap, pengisian formulir biodata lengkap, dan verifikasi status penyimpanan data.',
        ],
      },
      {
        heading: 'Arsitektur Test Suite Cypress (TS-VOTER)',
        content: [
          'Menyusun skrip pengujian modular menggunakan Cypress dengan pembagian suite TS-VOTER-01 hingga TS-VOTER-05 untuk memvalidasi skenario berbeda secara terisolasi.',
          'Memanfaatkan hook beforeEach() untuk alur login otomatis yang aman menggunakan environment variables (Cypress.env) tanpa mengekspos kredensial sensitif di kode sumber.',
          'Mengotomasi interaksi elemen UI kompleks seperti dropdown pencarian Select2, kalender datepicker tanggal lahir, serta validasi radio button jenis kelamin dan status perkawinan.',
        ],
      },
      {
        heading: 'Eksekusi Pengujian & Deteksi Defect',
        content: [
          'Mengeksekusi test runner Cypress pada browser Chrome/Electron dalam mode headless dan headed.',
          'Fitur automated failure screenshot berhasil menangkap titik kegagalan asersi (seperti pada TS-VOTER-05-007) sehingga mempercepat proses debugging dan verifikasi bug fix oleh developer.',
          'Kode sumber lengkap dan struktur test suite tersedia di repositori publik GitHub: github.com/maulymd/Automation-Rejanglebong.',
        ],
        images: ['/images/projects/rejanglebong/TS-VOTER-05-failed.png'],
      },
    ],
    en: {
      title: 'APS Rejang Lebong - Cypress E2E Automation',
      role: 'QA Automation Engineer',
      date: '2025',
      description:
        'Development of an End-to-End (E2E) test automation framework using Cypress to validate voter administration workflows (DPT) on the APS Rejang Lebong application.',
      longDescription: [
        'An automated testing initiative using Cypress to guarantee functional integrity on the APS Rejang Lebong voter management web system.',
        'The primary test scope focused on the Voter Registry (DPT) module, demanding strict validation for 16-digit national ID (NIK & Family Card) inputs, dynamic Select2 dropdowns, and database record assertions.',
        'Test scripts were structured into modular suites (TS-VOTER-01 through TS-VOTER-05) covering positive paths, boundary tests, and automatic failure screenshot capture.',
      ],
      sections: [
        {
          heading: 'Background & Testing Scope',
          content: [
            'The APS Rejang Lebong platform handles regional voter administration. Strict input validation is vital to eliminate duplicate voter registrations and data discrepancies.',
            'Testing scope encompassed operator authentication, DPT navigation, comprehensive demographic form submissions, and persistence verification.',
          ],
        },
        {
          heading: 'Cypress Test Suite Architecture (TS-VOTER)',
          content: [
            'Architected modular Cypress test suites (TS-VOTER-01 to TS-VOTER-05) to isolate and systematically validate different validation rules.',
            'Implemented beforeEach() hooks for secure automated authentication leveraging environment variables (Cypress.env).',
            'Automated complex UI elements including Select2 search dropdowns, datepicker modals, and radio button selectors.',
          ],
        },
        {
          heading: 'Execution & Failure Detection',
          content: [
            'Executed Cypress test suites across headless and headed browser runners.',
            'Leveraged automated failure screenshot capture (e.g. TS-VOTER-05-007) to expedite defect root-cause analysis and verification.',
            'Full test code and configurations are accessible on GitHub: github.com/maulymd/Automation-Rejanglebong.',
          ],
        },
      ],
    },
  },
];
