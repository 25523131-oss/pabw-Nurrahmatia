<script setup>
import { ref } from 'vue'

const judul = ref('')
const penulis = ref('')
const tahunTerbit = ref('')

function kirim() {
  if (!judul.value.trim() || !penulis.value.trim()) return
  judul.value = ''
  penulis.value = ''
  tahunTerbit.value = ''
}
</script>

<template>
  <section id="bagian-3">
    <h2>Cari Buku</h2>
    <form @submit.prevent="kirim">
      <div class="form-kolom">
        <label for="Judul">Judul</label>
        <input v-model="judul" type="text" id="Judul" name="kolom-judul" required>
        <span class="pesan-galat">Judul wajib diisi.</span>
      </div>
      <div class="form-kolom">
        <label for="Penulis">Penulis</label>
        <input v-model="penulis" type="text" id="Penulis" name="kolom-penulis" required>
        <span class="pesan-galat">Penulis wajib diisi.</span>
      </div>
      <div class="form-kolom">
        <label for="Tahun-Terbit">Tahun Terbit</label>
        <input v-model="tahunTerbit" type="number" id="Tahun-Terbit" name="kolom-tahun-terbit" required>
        <span class="pesan-galat">Tahun terbit wajib diisi dengan angka.</span>
      </div>
      <button type="submit">Cari</button>
    </form>
  </section>
</template>
