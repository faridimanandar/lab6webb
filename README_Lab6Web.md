# Praktikum 6: JavaScript DOM dan Event Handling

## Identitas Praktikum

- **Mata Kuliah:** Pemrograman Web
- **Pertemuan:** 7
- **Topik:** JavaScript DOM dan Event Handling
- **Nama:** Farid Iman Nandar
- **NIM:** 312510102
- **Program Studi:** Teknik Informatika

---

## A. Tujuan Praktikum

Praktikum ini bertujuan untuk:

1. Memahami Document Object Model (DOM) sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan `getElementById()`, `querySelector()`, dan `querySelectorAll()` untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen menggunakan JavaScript.
4. Menangani interaksi pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman web interaktif dengan beberapa fungsi yang berjalan dengan benar.

## B. Deskripsi Praktikum

Praktikum ini membahas penggunaan JavaScript untuk membuat halaman web yang interaktif. Materi yang dipelajari meliputi manipulasi DOM, event click, perubahan gaya CSS, penghitung karakter, validasi form pendaftaran, dan pembuatan aplikasi daftar tugas sederhana.

Seluruh latihan dikerjakan menggunakan HTML sebagai struktur halaman, CSS sebagai pengatur tampilan, dan JavaScript sebagai pengatur interaksi.

## C. Alat dan Bahan

1. Laptop atau komputer.
2. Visual Studio Code sebagai editor kode.
3. Google Chrome atau Microsoft Edge sebagai browser.
4. HTML, CSS, dan JavaScript.
5. Git dan akun GitHub untuk menyimpan repository praktikum.

## D. Struktur Folder

Struktur folder proyek yang digunakan adalah sebagai berikut:

```text
Lab6Web/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
    ├── latihan1-dom.png
    ├── latihan2-click.png
    ├── latihan3-css.png
    ├── latihan4-karakter.png
    ├── latihan5-validasi-gagal.png
    ├── latihan5-validasi-berhasil.png
    └── latihan6-todolist.png
```

**Keterangan:**

- `index.html`: berisi struktur halaman web dan elemen yang digunakan dalam latihan.
- `style.css`: berisi aturan CSS untuk mengatur tampilan halaman dan perubahan gaya elemen.
- `script.js`: berisi kode JavaScript untuk manipulasi DOM, event handling, validasi form, dan daftar tugas.
- `README.md`: berisi dokumentasi praktikum, langkah pengerjaan, dan hasil pengujian.
- `screenshots/`: tempat menyimpan screenshot hasil setiap latihan.

## E. Langkah Kerja Praktikum

### 1. Persiapan Proyek

1. Membuat folder baru bernama `Lab6Web`.
2. Membuka folder tersebut menggunakan Visual Studio Code.
3. Membuat file `index.html`, `style.css`, dan `script.js`.
4. Menghubungkan file CSS dan JavaScript pada dokumen HTML.
5. Menyimpan seluruh file dan menyiapkan browser untuk menjalankan program.

File JavaScript dihubungkan menggunakan atribut `defer` agar dijalankan setelah dokumen HTML selesai diproses.

Contoh kode penghubung pada `index.html`:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

### 2. Latihan 1 — Mengubah Teks dengan DOM

**Tujuan:** mengubah teks elemen HTML menggunakan JavaScript.

Langkah pengerjaan:

1. Membuat elemen judul dengan `id="judul"` dan paragraf dengan `id="pesan"` pada file HTML.
2. Membuka file `script.js`.
3. Memilih elemen menggunakan `document.getElementById()`.
4. Mengubah isi elemen menggunakan properti `textContent`.
5. Menyimpan file dan membuka halaman HTML di browser.
6. Memastikan judul dan paragraf berubah sesuai kode JavaScript.

Contoh kode:

```javascript
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
```

**Hasil yang diharapkan:** judul berubah menjadi "Belajar JavaScript DOM" dan paragraf menampilkan pesan bahwa konten berhasil diubah.

### 3. Latihan 2 — Event Click

**Tujuan:** menjalankan fungsi ketika tombol diklik dan menampilkan waktu tindakan.

Langkah pengerjaan:

1. Membuat tombol dengan `id="tombolAksi"` dan paragraf dengan `id="pesan"`.
2. Memilih tombol dan paragraf menggunakan JavaScript.
3. Menambahkan event listener menggunakan `addEventListener()`.
4. Menggunakan `new Date().toLocaleTimeString()` untuk mengambil waktu saat ini.
5. Menyimpan kode dan menjalankan halaman di browser.
6. Mengklik tombol beberapa kali untuk memastikan waktu diperbarui.

Contoh kode:

```javascript
const tombol = document.getElementById("tombolAksi");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

**Hasil yang diharapkan:** paragraf menampilkan waktu setiap kali tombol diklik.

### 4. Latihan 3 — Mengubah Kelas dan Gaya CSS

**Tujuan:** mengubah tampilan paragraf melalui manipulasi kelas CSS.

Langkah pengerjaan:

1. Membuat paragraf dengan `id="teksGaya"`.
2. Membuat tombol dengan `id="tombolGaya"`.
3. Menambahkan kelas `.highlight` dan `.teks-besar` ke file `style.css`.
4. Memilih elemen paragraf dan tombol melalui JavaScript.
5. Menggunakan `classList.toggle()` untuk menambah atau menghapus kelas.
6. Menyimpan file dan menguji tombol pada browser.

Contoh CSS:

```css
.highlight {
    color: #173f75;
    background-color: #e6f1ff;
    border-left: 4px solid #3478c8;
    padding: 12px;
}

.teks-besar {
    font-size: 1.4rem;
}
```

Contoh JavaScript:

```javascript
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
```

**Hasil yang diharapkan:** paragraf berubah warna, memiliki latar belakang, garis tepi, dan ukuran tulisan yang lebih besar. Klik berikutnya mengembalikan tampilannya.

### 5. Latihan 4 — Event Input dan Penghitung Karakter

**Tujuan:** menghitung jumlah karakter yang dimasukkan pengguna secara langsung.

Langkah pengerjaan:

1. Membuat kolom input teks dengan `id="namaInput"`.
2. Menambahkan batas maksimal 40 karakter.
3. Membuat elemen `span` dengan `id="jumlahKarakter"`.
4. Memilih elemen input dan penghitung menggunakan JavaScript.
5. Menambahkan event `input`.
6. Menggunakan `namaInput.value.length` untuk menghitung karakter.
7. Menguji dengan mengetik, menghapus, dan menempelkan teks.

Contoh kode:

```javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
```

**Hasil yang diharapkan:** jumlah karakter berubah secara otomatis mengikuti isi kolom input.

### 6. Latihan 5 — Validasi Form Pendaftaran

**Tujuan:** memeriksa nama lengkap, format email, dan usia sebelum form dinyatakan valid.

Langkah pengerjaan:

1. Membuat form dengan kolom nama lengkap, email, dan usia.
2. Menambahkan tombol `Daftar`.
3. Membuat paragraf untuk menampilkan pesan validasi.
4. Menambahkan event `submit` pada form.
5. Menggunakan `event.preventDefault()` agar halaman tidak dimuat ulang ketika form diperiksa.
6. Memeriksa nama agar tidak kosong.
7. Memeriksa format email menggunakan ekspresi reguler.
8. Memastikan usia berupa bilangan bulat antara 17 sampai 100.
9. Menampilkan pesan kesalahan apabila input tidak sesuai.
10. Menampilkan pesan keberhasilan apabila seluruh input valid.

**Hasil yang diharapkan:** program menampilkan pesan yang sesuai dengan kondisi input. Form direset ketika seluruh data valid.

Pengujian dilakukan dengan kondisi berikut:

| No. | Kondisi | Hasil yang diharapkan |
|---|---|---|
| 1 | Semua kolom kosong | Nama wajib diisi. |
| 2 | Nama kosong | Nama wajib diisi. |
| 3 | Format email salah | Masukkan email yang valid. |
| 4 | Usia kurang dari 17 | Usia harus berupa bilangan bulat 17–100. |
| 5 | Semua data valid | Validasi berhasil. Form siap diproses. |

### 7. Latihan 6 — Daftar Tugas Sederhana (To-do List)

**Tujuan:** membuat daftar tugas yang dapat ditambahkan dan ditandai selesai.

Langkah pengerjaan:

1. Membuat kolom input untuk memasukkan tugas.
2. Membuat tombol `Tambah`.
3. Membuat elemen daftar menggunakan `<ul>`.
4. Memilih elemen HTML yang diperlukan menggunakan JavaScript.
5. Menambahkan event click pada tombol `Tambah`.
6. Memeriksa apakah input tugas kosong.
7. Membuat elemen `<li>`, `<span>`, dan tombol status menggunakan `document.createElement()`.
8. Menambahkan tugas ke daftar menggunakan `appendChild()`.
9. Menambahkan event click pada tombol status untuk mengubah status tugas.
10. Menggunakan `classList.toggle()` untuk memberikan atau menghapus kelas `selesai`.
11. Menambahkan CSS untuk memberikan garis coret pada tugas yang selesai.
12. Menguji penambahan tugas dan perubahan statusnya.

Contoh CSS:

```css
.selesai span {
    text-decoration: line-through;
    color: #687386;
}

li {
    margin-bottom: 8px;
}
```

**Hasil yang diharapkan:** tugas baru muncul pada daftar. Tugas dapat ditandai selesai dan statusnya dapat dibatalkan kembali.

## F. Pengujian Program

Pengujian dilakukan untuk memastikan setiap fungsi berjalan sesuai tujuan praktikum.

| No. | Pengujian | Kriteria keberhasilan |
|---|---|---|
| 1 | Mengubah teks judul dan paragraf | Teks berubah sesuai kode. |
| 2 | Mengklik tombol aksi | Waktu ditampilkan. |
| 3 | Mengubah gaya paragraf | Kelas CSS berubah. |
| 4 | Mengetik pada kolom penghitung | Jumlah karakter diperbarui. |
| 5 | Memasukkan data form tidak valid | Pesan kesalahan muncul. |
| 6 | Memasukkan data form valid | Pesan sukses muncul. |
| 7 | Menambahkan tugas baru | Tugas muncul dalam daftar. |
| 8 | Menandai tugas selesai | Teks tugas memiliki garis coret. |

Jika ditemukan kesalahan, periksa kembali penulisan kode, kecocokan `id` pada HTML dengan JavaScript, dan pesan kesalahan pada Console browser.

## G. Dokumentasi Screenshot

Ambil screenshot hasil dari browser dan simpan di folder `screenshots/` dengan susunan berikut:

```text
screenshots/
├── latihan1-dom.png
├── latihan2-click.png
├── latihan3-css.png
├── latihan4-karakter.png
├── latihan5-validasi-gagal.png
├── latihan5-validasi-berhasil.png
└── latihan6-todolist.png
```

Tambahkan gambar ke README dengan format Markdown berikut:

```markdown
### Latihan 1 — Mengubah Teks dengan DOM
![Hasil Latihan 1](screenshots/latihan1-dom.png)

### Latihan 2 — Event Click
![Hasil Latihan 2](screenshots/latihan2-click.png)

### Latihan 3 — Mengubah Gaya CSS
![Hasil Latihan 3](screenshots/latihan3-css.png)

### Latihan 4 — Penghitung Karakter
![Hasil Latihan 4](screenshots/latihan4-karakter.png)

### Latihan 5 — Validasi Form Tidak Valid
![Validasi Form Tidak Valid](screenshots/latihan5-validasi-gagal.png)

### Latihan 5 — Validasi Form Berhasil
![Validasi Form Berhasil](screenshots/latihan5-validasi-berhasil.png)

### Latihan 6 — To-do List
![Hasil Latihan 6](screenshots/latihan6-todolist.png)
```

Nama gambar harus sesuai dengan nama file screenshot yang benar-benar disimpan. Screenshot belum disertakan otomatis dan perlu diambil setelah program dijalankan.

## H. Cara Menjalankan Program

1. Buka folder `Lab6Web` di Visual Studio Code.
2. Pastikan file `index.html`, `style.css`, dan `script.js` tersedia.
3. Pastikan file HTML telah menghubungkan CSS dan JavaScript dengan benar.
4. Buka `index.html` menggunakan browser atau ekstensi Live Server.
5. Uji tombol, kolom input, form, dan daftar tugas.
6. Tekan `F12` untuk membuka Developer Tools.
7. Pilih tab **Console** untuk memeriksa kesalahan JavaScript.
8. Ambil screenshot hasil setiap latihan.

Program dapat dijalankan secara lokal di browser tanpa server khusus.

## I. Pengumpulan Praktikum melalui GitHub

Buat repository GitHub bernama `Lab6Web`. Jalankan perintah berikut melalui terminal Visual Studio Code:

```bash
git init
git add .
git commit -m "Praktikum 6 JavaScript DOM dan Event Handling"
git branch -M main
git remote add origin URL_REPOSITORY_GITHUB
git push -u origin main
```

Keterangan:

- `git init`: membuat repository Git lokal.
- `git add .`: menambahkan file proyek ke staging area.
- `git commit`: menyimpan perubahan ke riwayat Git.
- `git branch -M main`: menetapkan nama branch menjadi `main`.
- `git remote add origin`: menghubungkan repository lokal ke GitHub.
- `git push -u origin main`: mengunggah file proyek ke GitHub.

Ganti `URL_REPOSITORY_GITHUB` dengan URL repository milik sendiri. Jika remote `origin` sudah tersedia, tidak perlu menambahkannya kembali.

Setelah semua file, README, dan screenshot diunggah, salin URL repository untuk dikumpulkan melalui e-learning atau e-campus sesuai arahan dosen.

## J. Kesimpulan

Praktikum JavaScript DOM dan Event Handling memberikan pemahaman mengenai cara JavaScript berinteraksi dengan elemen HTML. Melalui enam latihan, mahasiswa mempelajari manipulasi teks, penggunaan event click, perubahan kelas CSS, penghitung karakter, validasi form pendaftaran, serta pembuatan daftar tugas interaktif.

Penggunaan `getElementById()`, `textContent`, `addEventListener()`, `classList.toggle()`, dan `document.createElement()` membantu membuat halaman web yang lebih dinamis dan interaktif.

Melalui pengujian dan dokumentasi setiap latihan, mahasiswa dapat memahami hubungan antara HTML, CSS, dan JavaScript serta menerapkan konsep tersebut pada pengembangan halaman web.

## K. Referensi

1. Modul Praktikum Pemrograman Web, Pertemuan 7: JavaScript DOM dan Event Handling.
2. MDN Web Docs — Introduction to the DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
3. MDN Web Docs — Event reference: https://developer.mozilla.org/en-US/docs/Web/Events
4. MDN Web Docs — Client-side form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
