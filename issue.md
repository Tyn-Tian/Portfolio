# Optimasi Performa Modul Career (FCP & LCP)

**Deskripsi Masalah:**
Pada modul **Career**, terdapat laporan penurunan performa pada metrik Speed Insights, secara spesifik pada:
1. **First Contentful Paint (FCP)** - Waktu yang dibutuhkan browser untuk menampilkan elemen pertama.
2. **Largest Contentful Paint (LCP)** - Waktu yang dibutuhkan browser untuk merender elemen terbesar (dalam hal ini konten teks deskripsi pekerjaan).

Tujuan dari *issue* ini adalah untuk mengimplementasikan best practice Next.js untuk meningkatkan kecepatan muat halaman dan memperbaiki skor performa tersebut.

---

## Rencana Implementasi (High-Level Plan)

Silakan ikuti tahapan-tahapan berikut secara berurutan untuk menyelesaikan masalah FCP dan LCP pada modul Career:

### Tahap 1: Optimasi Pemuatan Font (Fokus LCP)
Font yang telat dimuat (Flash of Invisible Text) adalah penyebab utama buruknya LCP pada halaman berbasis teks.
- **Tugas:** Gunakan fitur bawaan Next.js untuk font.
- **Aksi:** 
  - Periksa file konfigurasi layout global (biasanya `src/app/layout.tsx` atau sejenisnya).
  - Pastikan impor font menggunakan modul `next/font/google`.
  - Wajib mengaktifkan opsi `display: 'swap'` pada konfigurasi font tersebut agar teks langsung dirender dengan *fallback font* sebelum font utama selesai diunduh.

### Tahap 2: Audit Server-Side Generation (SSG) & Komponen Klien
Agar First Contentful Paint (FCP) cepat, halaman sebaiknya dirender statis dari server dan tidak tertunda oleh proses JavaScript di sisi klien.
- **Tugas:** Pastikan komponen berjalan di sisi server (Server Component).
- **Aksi:**
  - Lakukan audit pada komponen `Career` (`src/components/career/index.tsx`) dan `CareerItem` (`src/components/career/item.tsx`).
  - Telusuri *parent component* yang membungkus komponen Career ini.
  - Pastikan **tidak ada** direktif `"use client"` yang tidak perlu pada hierarki komponen yang membungkus modul Career ini. Hanya gunakan `"use client"` jika komponen benar-benar membutuhkan interaktivitas langsung (seperti *state* atau *event listener*).

### Tahap 3: Implementasi Suspense dan Skeleton Loading
Untuk memberikan persepsi performa yang sangat cepat (instan) kepada pengguna saat FCP.
- **Tugas:** Berikan umpan balik visual ketika data karir sedang dimuat.
- **Aksi:**
  - Buat sebuah komponen *Skeleton Loading* sederhana yang bentuk visualnya menyerupai struktur modul Career (kotak-kotak kosong dengan animasi *pulse*).
  - Bungkus pemanggilan komponen `<Career />` dengan batas `<Suspense>`.
  - Gunakan komponen skeleton yang baru dibuat sebagai *fallback* pada Suspense tersebut (`<Suspense fallback={<CareerSkeleton />}>`).

### Tahap 4: Optimasi Paket Ikon (Lucide-React)
Mengurangi ukuran bundel JavaScript awal untuk mempercepat waktu *parsing* dan hidrasi (FCP).
- **Tugas:** Aktifkan optimasi *import* untuk *library* ikon.
- **Aksi:**
  - Buka file konfigurasi `next.config.js` di *root* proyek.
  - Pastikan fitur `optimizePackageImports` sudah terkonfigurasi.
  - Tambahkan `"lucide-react"` ke dalam *array* `optimizePackageImports` jika belum ada.

---

**Kriteria Penerimaan (Acceptance Criteria):**
- [ ] Opsi `display: 'swap'` telah aktif pada pengaturan `next/font`.
- [ ] Tidak ada penggunaan `"use client"` yang *redundant* atau tidak beralasan pada komponen Career dan pembungkusnya.
- [ ] Halaman menampilkan Skeleton Loading saat komponen Career tertunda pemuatannya.
- [ ] Konfigurasi `optimizePackageImports` untuk `lucide-react` telah tersimpan di `next.config.js`.
- [ ] Skor FCP dan LCP pada simulasi Lighthouse / Speed Insights menunjukkan peningkatan yang positif.
