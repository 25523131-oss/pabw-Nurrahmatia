<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

// Otomatis terhitung ulang tiap kali state.kategoriAktif atau state.daftarProyek berubah
const daftarTampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <div id="daftar" class="galeri grid">
    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="daftarTampil.length === 0" id="pesan-kosong">Belum ada data.</p>
    
    <template v-else>
      <figure v-for="proyek in daftarTampil" :key="proyek.id" class="kartu">
        <img 
          :src="`${proyek.judul}.webp`" 
          :alt="`Buku ${proyek.judul}`"
          width="400" 
          height="600" 
          loading="lazy"
        />
        <figcaption class="kartu__isi">
          <h2>{{ proyek.judul }}</h2>
          <p>{{ proyek.sinopsis }} {{ proyek.penulis }} - {{ proyek.genre }} ({{ proyek.tahun }})</p>
          <button 
            class="favorit" 
            @click="tambahFavorit(proyek.id)"
          >
            {{ (state.favorit.includes(proyek.id) || state.favorit.includes(Number(proyek.id))) ? '★ Favorit' : '☆ Masukan ke favorit' }}
          </button>
        </figcaption>
      </figure>
    </template>
  </div>
</template>