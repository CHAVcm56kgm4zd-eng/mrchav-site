// Funzioni di servizio condivise dai componenti.

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Sostituisce {luogo} con il valore in content/settings.json (un solo punto da cambiare).
export const fill = (s = '', settings) => String(s).replaceAll('{luogo}', settings.luogo);

// Immagine su Cloudinary a una data larghezza (formato e qualità automatici).
export const cloudinary = (settings, id, w) =>
  `https://res.cloudinary.com/${settings.cloudinaryCloud}/image/upload/f_auto,q_auto,w_${w}/${id}`;
