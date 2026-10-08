import { SEO } from '../components/SEO.js';
import { Wordmark } from '../components/Wordmark.js';
import { ContattiFissi } from '../components/ContattiFissi.js';
import { PiedePagina } from '../components/PiedePagina.js';
import { esc } from '../lib/util.js';

// Caratteri: si sceglie in content/settings.json ("font": "sans" oppure "baskerville").
const FONT = {
  gantari: '"Gantari", "Avenir Next", "Helvetica Neue", Arial, sans-serif',
  sans: '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif',
  baskerville: '"Libre Baskerville", Georgia, "Times New Roman", serif',
};

// Struttura comune di tutte le pagine. Colori letti da content/settings.json (nessun colore nel CSS delle pagine).
export function Base({ settings, seo, h1, corpo, pagineLegali, anno, tipo = 'testo' }) {
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${esc(settings.sfondo)}">
${settings.font === 'gantari' ? '<link rel="preload" href="/fonts/Gantari-VF.ttf" as="font" type="font/ttf" crossorigin>\n' : ''}${settings.font === 'baskerville' ? '<link rel="preload" href="/fonts/LibreBaskerville-Regular.ttf" as="font" type="font/ttf" crossorigin>\n' : ''}<style>:root{--sfondo:${esc(settings.sfondo)};--testo:${esc(settings.testo)};--font:${FONT[settings.font] || FONT.sans}}</style>
<link rel="stylesheet" href="/css/global.css">
${SEO(seo)}
</head>
<body class="tipo-${tipo}">
<a class="salta" href="#contenuto">Vai al contenuto</a>
${Wordmark(settings)}
${ContattiFissi(settings)}
<div class="testata" aria-hidden="true"></div>
<main id="contenuto">
<h1 class="${h1.visibile ? 'titolo-pagina' : 'solo-lettori'}">${esc(h1.testo)}</h1>
${corpo}
</main>
${PiedePagina(pagineLegali, anno)}
</body>
</html>`;
}
