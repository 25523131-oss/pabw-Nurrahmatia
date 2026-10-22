import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: '',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  const idx = state.favorit.indexOf(id)
  if (idx === -1) state.favorit.push(id)
  else state.favorit.splice(idx, 1)
}

export function simpan(stateObj) {
  const isi = { 
    versi: VERSI,                  
    kategoriAktif: stateObj.kategoriAktif,                  
    favorit: stateObj.favorit 
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try { 
    const isi = JSON.parse(localStorage.getItem(KUNCI)); 
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); 
      return null;
    }
    return isi; 
  } catch { 
    localStorage.removeItem(KUNCI); // Simpanan rusak dibuang
    return null; 
  }        
}
 
export function pulihkan(isi) {   
  if (!isi) return;               
  state.kategoriAktif = isi.kategoriAktif ?? "semua";
  state.favorit = isi.favorit ?? [];
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  simpan(state);
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}