// POIN BAGIAN A
const profil = {
  nama: "Nurrahmatia",
  peran: "Mahasiswa Informatika",
  keahlian: ["Memasak", "Bernyayi", "Menulis"],
  jumlahProyek: 5
};

const kalimat = `Nama saya ${profil.nama}, dan saya memiliki  ${profil.keahlian.length} keahlian.`;
console.log(kalimat);

// POIN BAGIAN C
// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

//POIN BAGIAN D
const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);


