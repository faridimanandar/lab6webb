
const form = document.getElementById("formWorkshop");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const pesan = document.getElementById("pesan");

const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

// Fungsi 1: Menghitung karakter nama
nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;
    perbaruiRingkasan();
});

// Fungsi 2: Memperbarui ringkasan secara langsung
function perbaruiRingkasan() {
    ringkasanNama.textContent = nama.value.trim() || "-";
    ringkasanEmail.textContent = email.value.trim() || "-";
    ringkasanSesi.textContent = sesi.value || "-";
}

email.addEventListener("input", perbaruiRingkasan);

sesi.addEventListener("change", function () {
    perbaruiRingkasan();
});

// Fungsi 3: Menampilkan pesan validasi
function tampilkanPesan(teks, jenis) {
    pesan.textContent = teks;
    pesan.className = "pesan " + jenis;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaValue.length < 3) {
        tampilkanPesan(
            "Nama wajib diisi dan minimal terdiri dari 3 karakter.",
            "gagal"
        );
        nama.focus();
        return;
    }

    if (!polaEmail.test(emailValue)) {
        tampilkanPesan(
            "Masukkan alamat email yang valid.",
            "gagal"
        );
        email.focus();
        return;
    }

    if (sesiValue === "") {
        tampilkanPesan(
            "Silakan pilih sesi workshop terlebih dahulu.",
            "gagal"
        );
        sesi.focus();
        return;
    }

    tampilkanPesan(
        "Pendaftaran berhasil divalidasi! Berikut ringkasan data Anda.",
        "berhasil"
    );

    perbaruiRingkasan();
});

// Fungsi 4: Reset form dan ringkasan
form.addEventListener("reset", function () {
    jumlahKarakter.textContent = "0";
    pesan.textContent = "";
    pesan.className = "pesan";

    ringkasanNama.textContent = "-";
    ringkasanEmail.textContent = "-";
    ringkasanSesi.textContent = "-";
});
