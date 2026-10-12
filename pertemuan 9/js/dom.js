const wadah = document.querySelector(".galeri.grid");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

function render(daftarProyek) {
  wadah.textContent = ""; 
  daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));

}

render(daftarProyek);

