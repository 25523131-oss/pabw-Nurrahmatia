<template>
  <div class="filter">
    <button data-kategori="semua" class="aktif">Semua</button>
    <button data-kategori="Fiksi Histori">Fiksi Histori</button>
    <button data-kategori="Petualangan">Petualangan</button>
    <button data-kategori="Romance">Romance</button>
  </div>

  <button id="atur-ulang">Atur ulang</button>
  <p id="pesan-kosong" hidden>Tidak ada buku yang ditemukan dalam kategori ini.</p>
  <p id="pesan-galat" hidden>Pesan gagal dimuat.</p>
</template>