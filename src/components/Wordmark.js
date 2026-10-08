import { esc } from '../lib/util.js';

// Intestazione fissa in alto a sinistra: il nome (in maiuscolo da CSS) e, accanto, i link alle altre pagine.
export function Wordmark(settings) {
  return `<header class="intestazione">
  <a class="wordmark" href="/" aria-label="${esc(settings.nome)}, home">${esc(settings.nome)}</a>
  <nav class="navigazione" aria-label="Pagine">
    <a href="/zine/">Zine</a>
    <a href="/chi-sono/">Chi sono</a>
  </nav>
</header>`;
}
