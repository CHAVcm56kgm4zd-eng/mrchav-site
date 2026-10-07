import { Foto } from './Foto.js';

// Griglia unica a colonne, senza spazi. Le foto non sono cliccabili.
export function GrigliaFoto(foto, settings, tag = 'div') {
  return `<${tag} class="griglia">${foto.map((f, i) => Foto(f, i, settings)).join('')}</${tag}>`;
}
