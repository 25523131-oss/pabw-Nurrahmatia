import { ambilProyek } from './api.js';

//POIN B
// const nama = "Tia";           // teks
// const jumlahProyek = 3;       // angka, bukan "3"let pilihanAktif = "semua";   // akan berubah saat disaring

// console.log(typeof nama);          // "string"
// console.log(typeof jumlahProyek);  // "number"
// console.log(typeof belumDibuat);   // undefined

// window.nama = nama
// window.jumlahProyek = jumlahProyek

// // // POIN BAGIAN A
// const profil = {
//   nama: "Nurrahmatia",
//   peran: "Mahasiswa Informatika",
//   keahlian: ["Memasak", "Bernyayi", "Menulis"],
//   jumlahProyek: 5

//  };

// // //POIN BAGIAN D
// const daftarProyek = [
//    { judul: "Laut Bercerita",
//      penulis: "Leila S. Chudori",
//      genre: "Fiksi Histori",
//      tahun: 2017 },

//    { judul: "Pulang",
//      penulis: "Tere Liye",
//      genre: "Fiksi Aksi",
//      tahun: 2015 },

//    {judul: "Pergi",
//     penulis: "Tere Liye",
//     genre: "Petualangan",
//     tahun: 2018}
//    ];

// window.profil = profil
// window.daftarProyek = daftarProyek;

// const kalimat = `Nama saya ${profil.nama}, dan saya memiliki  ${profil.keahlian.length} keahlian.`;

// console.log(kalimat);

// window.kalimat = kalimat

//  // POIN BAGIAN C
//  // 1. Menyusun kalimat perkenalan dari satu object
//  function buatPerkenalan({ nama, peran }) {
//   return `${nama} — ${peran}`;
// }

// function buku({ judul, tahunTerbit }) {
//   return `${judul} — ${tahunTerbit}`;
// }

// window.buatPerkenalan = buatPerkenalan
// window.buku = buku

// // // 2. Merapikan daftar keahlian menjadi satu baris teks
// const formatKeahlian = (daftar) => daftar.join(" · ");

// window.formatKeahlian = formatKeahlian

// console.log(buatPerkenalan(profil));
// console.log(formatKeahlian(profil.keahlian));

// console.table(profil.keahlian);
// console.table(daftarProyek);

// const selesai = daftarProyek.filter((proyek) => proyek.selesai);
// console.table(selesai);

// const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
// console.log(katalog);

//  window.selesai = selesai
//  window.katalog = katalo

const galeriGambar = document.querySelector('.galeri');
    if (galeriGambar) {
      galeriGambar.hidden = true; // atau galeriGambar.style.display = 'none';
    }

    const pembungkusTabel = document.querySelector('.table-wrap');
    if (pembungkusTabel) {
      pembungkusTabel.hidden = true;
    }

async function muatAplikasi() {
  try {
    const daftar = await ambilProyek();
    console.log(daftar);
    
  } catch (galat) {
    console.error('galat ditemukan', galat.message);
    
    const wadahPesan = document.querySelector('#pesan-kosong') || document.querySelector('p');
    if (wadahPesan) {
      wadahPesan.textContent = `galat ditangkap ditemukan ${galat.message}`;
      wadahPesan.hidden = false;
    }
  }
}

muatAplikasi();
