import { esc } from '../lib/util.js';

// Nome grande, fisso in alto a sinistra. Porta alla home.
export function Wordmark(settings) {
  return `<a class="wordmark" href="/" aria-label="${esc(settings.nome)}, home">${esc(settings.nome)}</a>`;
}
