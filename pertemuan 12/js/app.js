import { ambilProyek } from './api.js';
import { aturMemuat, tampilkanGalat } from './dom.js';
import { isiProyek, pulihkan, muat as muatState } from './state.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pulihkan(muatState());
  pasangPendengar();

  aturMemuat(true); 
  try {
    const daftar = await ambilProyek(); 
    isiProyek(daftar); 
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message); 
  } finally {
    aturMemuat(false);
  }
}

mulai();  
