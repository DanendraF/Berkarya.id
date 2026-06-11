# Berkarya.id

[![Aesthetics](https://img.shields.io/badge/Aesthetics-Premium-gold?style=for-the-badge)](https://github.com)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-React_%2B_Vite_%2B_Tailwind-maroon?style=for-the-badge)](https://github.com)
[![Framework](https://img.shields.io/badge/Framework-TanStack_Start-blue?style=for-the-badge)](https://github.com)

**Berkarya.id** adalah sebuah landing page interaktif premium yang dirancang khusus untuk platform inkubasi dan kolaborasi kreatif anak muda Indonesia. Dengan mengusung tagline *"Lu punya ide gila? Wujudin bareng kita."*, website ini memfasilitasi kreator muda di bidang desain, coding, pembuatan konten, hingga bisnis untuk belajar dan berkolaborasi secara gratis bersama para mentor praktisi.

---

## 🎨 Desain & Estetika
Landing page ini dirancang dengan gaya modern, mengutamakan estetika visual yang premium dan interaksi yang dinamis:
- **Color Palette:** Menggunakan kombinasi warna hangat yang elegan, yaitu Cream (`#FEF7E6`), Maroon (`#8B1E2B`), dan Emas/Gold (`#D4AF37`).
- **Glassmorphism & Neumorphism:** Tombol, kartu grid, dan navbar menggunakan efek transparansi glassmorphic (dengan backdrop blur) serta bayangan neumorphic yang halus untuk memberikan kesan mewah.
- **Micro-Animations:** Transisi halus, hover scaling, glow shadows, dan slide-up reveal animations saat pengguna melakukan scroll.

---

## ✨ Fitur Utama
1. **Hero Section dengan Background Video:** Video pengenalan looping yang dimuat secara lokal (`src/assets/vidlanding.mp4`) dipadukan dengan overlay gradien marun-gelap dan tombol aksi ganda bergaya capsule.
2. **Pilar Program (4 Pilar):** Pengenalan empat elemen inkubasi (Mentoring, Komunitas, Tools Gratis, Showcase) dalam grid interaktif dengan efek glow saat diarahkan kursor.
3. **Galeri Karya Alumni (Bento Grid):** Layout Bento Grid 3 kolom yang dinamis dan seimbang. Dilengkapi filter kategori produk (Branding, Product, Konten) dengan tinggi baris yang proporsional (`240px`) sehingga konten kartu tidak berhimpitan.
4. **Alur Kerja (3 Langkah):** Penjelasan langkah bergabung mulai dari memilih minat, menyelesaikan tantangan 7 hari, hingga masuk ke radar hiring partner.
5. **Interactive CTA Form:** Formulir pendaftaran sekali klik dengan selector minat interaktif dan animasi sukses setelah submit data.
6. **Responsive Navbar & Floating CTA:** Header navigasi desktop yang melayang dengan transisi saat di-scroll, hamburger menu dropdown untuk mobile, serta tombol floating CTA di layar kecil untuk memaksimalkan konversi.
7. **Trust Badges:** Logo mitra rekrutmen terkemuka (Gojek, Tokopedia, Traveloka, Shopee) di bagian footer.

---

## 🛠️ Teknologi yang Digunakan
- **Frontend Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Framework & Router SSR:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (untuk routing super cepat dan integrasi SSR)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS ([src/styles.css](src/styles.css))
- **Animations:** [Tailwind Animate CSS](https://github.com/jamiebuilds/tailwindcss-animate)
- **Build Tool:** [Vite v7](https://vitejs.dev/)

---

## 📂 Struktur Direktori Utama
```bash
Berkarya.id/
├── src/
│   ├── assets/              # Aset statis lokal (misal: vidlanding.mp4)
│   ├── components/
│   │   ├── landing/         # Komponen penyusun landing page
│   │   │   ├── About.tsx    # Program info & Galeri Bento Grid
│   │   │   ├── Hero.tsx     # Hero section
│   │   │   ├── Navbar.tsx   # Header navigasi melayang
│   │   │   ├── HowItWorks.tsx # Langkah pendaftaran
│   │   │   ├── CTA.tsx      # Formulir pendaftaran
│   │   │   └── Footer.tsx   # Informasi kaki halaman & partner
│   │   └── ui/              # Komponen UI reusable shadcn/radix
│   ├── routes/              # Sistem file-based routing TanStack
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Halaman utama (landing page)
│   ├── styles.css           # Custom CSS variables, glassmorphism, & neumorphism
│   ├── router.tsx           # Konfigurasi router TanStack
│   └── start.ts             # Entry point client
├── public/                  # Aset publik global
├── vite.config.ts           # Konfigurasi bundling Vite & TanStack Start
└── tsconfig.json            # Konfigurasi TypeScript compiler
```

---

## 🚀 Cara Menjalankan Project

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18+) dan package manager **npm** atau **bun** di komputer Anda.

### 2. Instalasi Dependensi
Klon repositori ini, lalu jalankan perintah berikut di terminal untuk memasang seluruh library yang dibutuhkan:
```bash
npm install
# atau jika menggunakan bun:
bun install
```

### 3. Menjalankan Server Development
Jalankan server lokal untuk melihat hasil langsung di browser dengan Hot Module Replacement (HMR):
```bash
npm run dev
# atau menggunakan bun:
bun dev
```
Buka [http://localhost:3000](http://localhost:3000) (atau port yang tertera pada terminal Anda) untuk melihat website.

### 4. Build untuk Production
Untuk membuat kompilasi build yang dioptimasi dan siap dideploy ke server production:
```bash
npm run build
```
Hasil build client akan tersimpan di dalam folder `dist/client` dan build server di dalam `dist/server`.
