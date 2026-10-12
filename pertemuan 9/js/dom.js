const wadah = document.querySelector(".galeri");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

function render(daftarProyek) {
  wadah.textContent = ""; 

  if (daftarProyek.length === 0) {
    kosong.hidden = false; 
    return;
  }

  kosong.hidden = true;
  daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));

}

render(daftarProyek);

const barisFilter = document.querySelector(".filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                 // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.genre === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);

});

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll(".filter button").forEach((tombol) => {
  tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}



