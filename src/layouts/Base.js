import { SEO } from '../components/SEO.js';
import { Wordmark } from '../components/Wordmark.js';
import { ContattiFissi } from '../components/ContattiFissi.js';
import { PiedePagina } from '../components/PiedePagina.js';
import { esc } from '../lib/util.js';

// Caratteri in content/settings.json: "font" = testi e menu (manrope, inter, newsreader, gantari, sans, baskerville).
// Il nome MR.CHAV usa sempre Gantari grassetto (--font-titolo).
const FONT = {
  manrope: '"Manrope", "Helvetica Neue", Arial, sans-serif',
  inter: '"Inter", "Helvetica Neue", Arial, sans-serif',
  newsreader: '"Newsreader", Georgia, "Times New Roman", serif',
  gantari: '"Gantari", "Avenir Next", "Helvetica Neue", Arial, sans-serif',
  sans: '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif',
  baskerville: '"Libre Baskerville", Georgia, "Times New Roman", serif',
};

const PRELOAD = {
  manrope: '/fonts/Manrope-VF.ttf',
  inter: '/fonts/Inter-VF.ttf',
  newsreader: '/fonts/Newsreader-VF.ttf',
  baskerville: '/fonts/LibreBaskerville-Regular.ttf',
};

// Struttura comune di tutte le pagine. Colori letti da content/settings.json (nessun colore nel CSS delle pagine).
export function Base({ settings, seo, h1, corpo, pagineLegali, anno, tipo = 'testo' }) {
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${esc(settings.sfondo)}">
${PRELOAD[settings.font] ? `<link rel="preload" href="${PRELOAD[settings.font]}" as="font" type="font/ttf" crossorigin>\n` : ''}<link rel="preload" href="/fonts/Gantari-VF.ttf" as="font" type="font/ttf" crossorigin>
<style>:root{--sfondo:${esc(settings.sfondo)};--testo:${esc(settings.testo)};--font:${FONT[settings.font] || FONT.sans};--font-titolo:${FONT.gantari}}</style>
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
