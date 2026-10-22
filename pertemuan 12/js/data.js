export const profil = {
  nama: "Nurrahmatia",
  peran: "Mahasiswa Informatika",
  keahlian: ["Memasak", "Bernyayi", "Menulis"],
  jumlahProyek: 5
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "semua" || !kategori) return daftar;
  return daftar.filter((proyek) => proyek.genre === kategori);
}