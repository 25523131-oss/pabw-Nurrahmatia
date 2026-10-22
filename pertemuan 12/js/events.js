// js/events.js
import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector(".filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;            
      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
    });
  }


  // 2. Pendengar klik tombol favorit pada kartu (Lembar C)[cite: 3]
  const wadahDaftar = document.querySelector("#daftar") || document.querySelector(".galeri.grid");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  // 3. Pendengar tombol atur ulang (Lembar D)[cite: 3]
  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}
