import { esc, cloudinary } from '../lib/util.js';

// Una foto nel suo formato originale. width/height evitano salti di layout.
// Sorgente: file locale (src) oppure Cloudinary (cloudinaryId).
export function Foto(f, indice, settings) {
  const eager = indice < 4;
  const attr = `width="${f.width}" height="${f.height}" alt="${esc(f.alt || '')}" decoding="async" ${
    eager ? `loading="eager"${indice === 0 ? ' fetchpriority="high"' : ''}` : 'loading="lazy"'
  }`;
  const sizes = '(min-width:1400px) 25vw, (min-width:900px) 33vw, 50vw';
  if (f.cloudinaryId) {
    const srcset = [400, 800, 1200].map((w) => `${cloudinary(settings, f.cloudinaryId, w)} ${w}w`).join(', ');
    return `<figure class="foto"><img src="${cloudinary(settings, f.cloudinaryId, 800)}" srcset="${srcset}" sizes="${sizes}" ${attr}></figure>`;
  }
  return `<figure class="foto"><img src="${esc(f.src)}" ${attr}></figure>`;
}
