//POIN B
const nama = "Tia";           // teks
const jumlahProyek = 3;       // angka, bukan "3"
let pilihanAktif = "semua";   // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   // undefined

window.nama = nama
window.jumlahProyek = jumlahProyek

// POIN BAGIAN A
const profil = {
  nama: "Nurrahmatia",
  peran: "Mahasiswa Informatika",
  keahlian: ["Memasak", "Bernyayi", "Menulis"],
  jumlahProyek: 5

};

//POIN BAGIAN D
const daftarProyek = [
  { judul: "Halaman Profil",
     tahun: 2026, 
     selesai: true },

  { judul: "Katalog Produk", 
    tahun: 2026, 
    selesai: false },
];

window.profil = profil

const kalimat = `Nama saya ${profil.nama}, dan saya memiliki  ${profil.keahlian.length} keahlian.`;

console.log(kalimat);

window.kalimat = kalimat

// POIN BAGIAN C
// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

function buku({ judul, tahunTerbit }) {
  return `${judul} — ${tahunTerbit}`;
}

window.buatPerkenalan = buatPerkenalan
window.buku = buku

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

window.formatKeahlian = formatKeahlian

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

window.selesai = selesai
window.katalog = katalog
