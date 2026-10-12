const wadah = document.querySelector(".galeri");
const kosong = document.querySelector("#pesan-kosong");
const form = document.querySelector(".form-kolom");

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

function validasiKolom(input) {
    const kolomWadah = input.closest(".form-kolom");
    const pesanGalat = kolomWadah.querySelector(".pesan-galat");
    const nilaiAsli = input.value;
    const nilaiBersih = input.value.trim();

    if (nilaiAsli === "") {
        input.classList.add("galat");
        if (pesanGalat) {
            pesanGalat.textContent = "Wajib diisi"; // Pesan default
            pesanGalat.style.display = "block";
        }
        return false;
    } else if (nilaiBersih === "") {
        input.classList.add("galat");
        if (pesanGalat) {
            pesanGalat.textContent = "isi tidak boleh spasi"; // Pesan khusus spasi
            pesanGalat.style.display = "block";
        }
        return false;
    } else {
        input.classList.remove("galat");
        if (pesanGalat) pesanGalat.style.display = "none";
        return true;
    }
}

// Pastikan variabel input dan form sudah didefinisikan dengan benar sesuai HTML Anda
const inputJudul = document.querySelector("#Judul");
const inputPenulis = document.querySelector("#Penulis");
const inputTahunTerbit = document.querySelector("#Tahun-Terbit");
const formCariBuku = document.querySelector("form");

[inputJudul, inputPenulis, inputTahunTerbit].forEach((input) => {
    if (input) {
        input.addEventListener("input", () => validasiKolom(input));
    }
});

if (formCariBuku) {
    formCariBuku.addEventListener("submit", (event) => {
        event.preventDefault(); // Menghentikan reload halaman bawaan browser!

        const judulValid = validasiKolom(inputJudul);
        const penulisValid = validasiKolom(inputPenulis);
        const tahunTerbitValid = validasiKolom(inputTahunTerbit);

        if (!judulValid || !penulisValid || !tahunTerbitValid) {
            if (!judulValid) inputJudul.focus();
            else if (!penulisValid) inputPenulis.focus();
            else if (!tahunTerbitValid) inputTahunTerbit.focus();
            return;
        }

        // Jalankan pencarian atau aksi setelah valid semua di sini...

        formCariBuku.reset();
    });
}