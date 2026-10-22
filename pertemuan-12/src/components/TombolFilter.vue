<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div class="filter">
    <button 
      :class="{ aktif: state.kategoriAktif === 'semua' }" 
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button 
      :class="{ aktif: state.kategoriAktif === 'Fiksi Histori' }" 
      @click="pilihKategori('Fiksi Histori')"
    >
      Fiksi Histori
    </button>
    <button 
      :class="{ aktif: state.kategoriAktif === 'Fiksi Aksi' }" 
      @click="pilihKategori('Fiksi Aksi')"
    >
      Fiksi Aksi
    </button>
    <button 
      :class="{ aktif: state.kategoriAktif === 'Petualangan' }" 
      @click="pilihKategori('Petualangan')"
    >
      Petualangan
    </button>

    <button id="atur-ulang" @click="aturUlang">
      Atur Ulang
    </button>
  </div>
</template>