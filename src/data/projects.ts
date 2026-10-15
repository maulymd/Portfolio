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
    id: 'apmnu-api-testing',
    title: 'APMNU Web & API Automation Testing',
    role: 'Quality Assurance Freelance',
    date: 'Mei 2026 - Agustus 2026',
    category: 'api',
    featured: false,
    description:
      'Otomatisasi pengujian REST API menggunakan Playwright untuk memvalidasi endpoint dan payload server, serta manual UI testing dengan fokus pada tampilan responsif mobile dan manajemen tiket Jira.',
    longDescription: [
      'Pada proyek Asosiasi Profesor Muslimat Nahdlatul Ulama (APMNU), saya dipercaya sebagai Quality Assurance Freelance untuk menjamin kehandalan sistem backend dan kesempurnaan tampilan antarmuka web.',
      'Saya merancang skrip automated API testing menggunakan framework Playwright untuk memvalidasi endpoint, response time, dan struktur skema data JSON secara konsisten.',
      'Selain itu, saya melakukan pengujian manual UI secara intensif pada viewport mobile untuk memastikan anggota organisasi dapat mengakses portal dengan nyaman dari perangkat seluler.',
    ],
    image: '/images/projects/apmnu.png',
    techStack: [
      { name: 'Playwright (API)' },
      { name: 'TypeScript' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Mobile Viewport Testing' },
      { name: 'Chrome DevTools' },
    ],
    sections: [
      {
        heading: 'Tantangan & Pendekatan Pengujian',
        content: [
          'Portal APMNU menangani registrasi keanggotaan, verifikasi profil akademisi, serta publikasi agenda ilmiah. Kebutuhan utama adalah memastikan endpoint backend dapat merespons data dengan akurat dan cepat tanpa kebocoran data sensitif.',
          'Pendekatan yang diambil menggabungkan otomatisasi pengujian API untuk regresi cepat dan manual testing pada sisi frontend web untuk pengalaman pengguna yang optimal.',
        ],
      },
      {
        heading: 'Implementasi API Automation dengan Playwright',
        content: [
          'Menyusun skrip automated API test menggunakan Playwright Test Runner untuk memverifikasi HTTP response code (200, 201, 400, 401, 403, 500).',
          'Mengimplementasikan JSON schema validation dan assertion pada payload data respons guna memastikan tipe data dan struktur respons backend sesuai kontrak spesifikasi.',
          'Menggunakan Postman untuk eksplorasi manual endpoint baru sebelum ditranslasikan ke dalam automation suite Playwright.',
        ],
        images: ['/images/projects/apmnu-api-testing/1.png', '/images/projects/apmnu-api-testing/2.png'],
      },
      {
        heading: 'Defect Tracking & Mobile Viewport QA',
        content: [
          'Menguji antarmuka web pada beragam ukuran layar mobile (360px hingga 428px) menggunakan Chrome DevTools Device Mode dan pengujian fisik di perangkat Android.',
          'Mencatat setiap isu layout shift, tombol terpotong, atau validasi form yang gagal ke dalam Jira dengan pelabelan komponen dan tingkat urgensi yang jelas.',
        ],
      },
    ],
    en: {
      title: 'APMNU Web & API Automation Testing',
      role: 'Quality Assurance Freelance',
      date: 'May 2026 - August 2026',
      description:
        'Automated REST API testing using Playwright to validate server endpoints and payload schemas, combined with manual UI testing focusing on responsive mobile viewports and Jira defect tracking.',
      longDescription: [
        'For the Asosiasi Profesor Muslimat Nahdlatul Ulama (APMNU) project, I served as a Quality Assurance Freelance to ensure backend system reliability and flawless web interface user experience.',
        'I built automated API test suites using Playwright to continuously validate endpoint status codes, response times, and JSON schema structures.',
        'Additionally, I performed thorough manual UI testing across mobile viewports to ensure seamless member access from handheld devices.',
      ],
      sections: [
        {
          heading: 'Challenges & Testing Strategy',
          content: [
            'The APMNU portal handles member registration, academic credential verification, and academic publication events. The primary requirement was to ensure backend endpoints responded accurately and rapidly without data leaks.',
            'The QA approach combined automated API testing for swift regression and manual frontend testing for optimal user experience.',
          ],
        },
        {
          heading: 'Playwright API Automation Framework',
          content: [
            'Constructed automated API test scripts with Playwright Test Runner verifying HTTP status codes (200, 201, 400, 401, 403, 500).',
            'Implemented JSON schema validation and payload assertions to guarantee response types adhered to backend API contracts.',
            'Leveraged Postman for initial endpoint exploration prior to writing automated Playwright suites.',
          ],
        },
        {
          heading: 'Defect Tracking & Mobile Viewport QA',
          content: [
            'Tested web interfaces on varied mobile viewports (360px to 428px) via Chrome DevTools and physical Android testing.',
            'Logged layout shifts, clipped buttons, and form validation issues into Jira with precise component tags and severity levels.',
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
    featured: true,
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
