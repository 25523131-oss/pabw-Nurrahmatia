<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <section id="bagian-2">
    <h2>Tentang MyLibrary</h2>
    <p>{{ props.profil.peran || 'MyLibrary adalah salah satu web Browser yang berisikan koleksi buku...' }}</p>
    <p>Happy Reading All</p>
  </section>
</template>
