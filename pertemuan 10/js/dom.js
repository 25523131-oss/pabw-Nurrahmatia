
const wadah = document.querySelector(".galeri.grid");
const kosong = document.querySelector("#pesan-kosong");
const pesanGalatWadah = document.querySelector("#pesan-galat");

export function buatKartu(proyek) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  const img = document.createElement("img");
  img.src = `${proyek.judul}.webp`; 
  img.alt = `Buku ${proyek.judul}`;
  img.width = 400;
  img.height = 600;
  img.loading = "lazy";
  figure.appendChild(img);

  // Jika ingin menampilkan gambar atau isi kartu dari data JSON secara dinamis
  const figcaption = document.createElement("figcaption");

  figcaption.className = "kartu__isi";
  
  const h2 = document.createElement("h2");
  h2.textContent = proyek.judul;
  figcaption.appendChild(h2);

  // Menambahkan teks deskripsi/penulis jika ada
  const p = document.createElement("p");
  p.textContent = `${proyek.penulis} ${proyek.sinopsis} (${proyek.tahun}) - ${proyek.genre}`;
  figcaption.appendChild(p);

  figure.appendChild(figcaption);
  return figure;
}

export function render(daftarProyek) {
  if (!wadah) return;
  wadah.innerHTML = ""; 

  if (!daftarProyek || daftarProyek.length === 0) {
    if (kosong) kosong.hidden = false; 
    return;
  }
  if (kosong) kosong.hidden = true;
  daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

export function aturMemuat(aktif) {
  // Karena tidak ada elemen #muat di HTML, fungsi ini aman dijalankan tanpa error
  const muatEl = document.querySelector('#muat');
  if (muatEl) {
    muatEl.hidden = !aktif;
  }
}

export function tampilkanGalat(pesan) {
  if (pesanGalatWadah) {
    if (wadah) wadah.innerHTML = '';
    pesanGalatWadah.textContent = pesan;
    pesanGalatWadah.hidden = false;
  }
}

// Pasang filter menggunakan data yang dikirim lewat argumen
export function pasangFilter(daftarProyek) {
  const barisFilter = document.querySelector(".filter");
  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;            

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.genre === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll(".filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Validasi form untuk mencegah spasi kosong dan memunculkan galat
const inputJudul = document.querySelector("#Judul");
const inputPenulis = document.querySelector("#Penulis");
const inputTahunTerbit = document.querySelector("#Tahun-Terbit");
const formCariBuku = document.querySelector("form");

function validasiKolom(input) {
    if (!input) return true;
    const kolomWadah = input.closest(".form-kolom");
    const pesanGalat = kolomWadah ? kolomWadah.querySelector(".pesan-galat") : null;
    const nilaiAsli = input.value;
    const nilaiBersih = input.value.trim();

    if (nilaiAsli === "" || nilaiBersih === "") {
        input.classList.add("galat");
        if (pesanGalat) {
            pesanGalat.textContent = nilaiAsli === "" ? "Kolom ini wajib diisi." : "Isi tidak boleh hanya spasi.";
            pesanGalat.style.display = "block"; // Menampilkan pesan galat di bawah input
        }
        return false;
    } else {
        input.classList.remove("galat");
        if (pesanGalat) {
            pesanGalat.style.display = "none"; // Menyembunyikan pesan galat jika valid
        }
        return true;
    }
}

[inputJudul, inputPenulis, inputTahunTerbit].forEach((input) => {
    if (input) {
        input.addEventListener("input", () => validasiKolom(input));
    }
});

if (formCariBuku) {
    formCariBuku.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah reload halaman
        const judulValid = validasiKolom(inputJudul);
        const penulisValid = validasiKolom(inputPenulis);
        const tahunTerbitValid = validasiKolom(inputTahunTerbit);

        if (!judulValid || !penulisValid || !tahunTerbitValid) {
            if (!judulValid && inputJudul) inputJudul.focus();
            else if (!penulisValid && inputPenulis) inputPenulis.focus();
            else if (!tahunTerbitValid && inputTahunTerbit) inputTahunTerbit.focus();
            return; 
        }
        
        formCariBuku.reset();
    });
}