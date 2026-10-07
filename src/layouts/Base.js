import { SEO } from '../components/SEO.js';
import { Wordmark } from '../components/Wordmark.js';
import { ContattiFissi } from '../components/ContattiFissi.js';
import { PiedePagina } from '../components/PiedePagina.js';
import { esc } from '../lib/util.js';

// Struttura comune di tutte le pagine. Colori letti da content/settings.json (nessun colore nel CSS delle pagine).
export function Base({ settings, seo, h1, corpo, pagineLegali, anno }) {
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${esc(settings.sfondo)}">
<link rel="preload" href="/fonts/LibreBaskerville-Regular.ttf" as="font" type="font/ttf" crossorigin>
<style>:root{--sfondo:${esc(settings.sfondo)};--testo:${esc(settings.testo)}}</style>
<link rel="stylesheet" href="/css/global.css">
${SEO(seo)}
</head>
<body>
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
