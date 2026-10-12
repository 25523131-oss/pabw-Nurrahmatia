const wadah = document.querySelector(".galeri.grid");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

function render(daftar) {
  // 1. KUNCI PENCEGAH PENUMPUKAN: Kosongkan wadah terlebih dahulu
  wadah.textContent = ""; 
  daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));

}

render(daftarProyek);

