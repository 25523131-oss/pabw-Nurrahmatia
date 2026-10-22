<script setup> 
  import { ref, onMounted, watch} from 'vue'
  import { ambilProyek } from './api.js'
  import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
  import { profil } from './data.js'

  import KepalaProfil from './components/KepalaProfil.vue'
  import TombolFilter from './components/TombolFilter.vue'
  import DaftarProyek from './components/DaftarProyek.vue'
  import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())                   // pilihan terakhir dari localStorage
  try {
    isiProyek(await ambilProyek())   // data/proyek.json atau GitHub
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })

</script>

<template>
<div class="page">
    <header>
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>

      <div class="header-baris">
        <h1>MyLibrary</h1>
        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#bagian-1">Koleksi Buku</a></li>
            <li><a href="#bagian-2">Tentang MyLibrary</a></li>
            <li><a href="#bagian-3">Cari Buku</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="isi content">
        <div class="sisi">
          <KepalaProfil :profil="profil" />
          <FormKontak />
        </div>

        <div class="utama">
          <section id="bagian-1">
            <h2>Koleksi Buku</h2>

            <div class="table-wrap">
              <table>
                <caption>Tabel.KoleksiBukuSaya</caption>
                <thead>
                  <tr>
                    <th scope="col">Judul</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Jumlah Halaman</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Tahun Terbit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Laut Bercerita</th>
                    <td>Leila S. Chudori</td>
                    <td>379 halaman</td>
                    <td>Fiksi Histori</td>
                    <td>2017</td>
                  </tr>
                  <tr>
                    <th scope="row">Pulang</th>
                    <td>Tere Liye</td>
                    <td>400 halaman</td>
                    <td>Fiksi Aksi</td>
                    <td>2015</td>
                  </tr>
                  <tr>
                    <th scope="row">Pergi</th>
                    <td>Tere Liye</td>
                    <td>459 halaman</td>
                    <td>Petualangan</td>
                    <td>2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <TombolFilter />
          <DaftarProyek />
        </div>
      </main>

    <footer>
      <p>Nurrahmatia · 25523131 · 2026</p>
    </footer>
  </div>
</template>
