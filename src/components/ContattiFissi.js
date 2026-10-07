import { esc } from '../lib/util.js';

// Contatti e link Zine sempre visibili, fissi in basso a sinistra.
export function ContattiFissi(settings) {
  return `<nav class="contatti-fissi" aria-label="Contatti e zine">
  <a href="/zine/">Zine</a>
  <a href="https://www.instagram.com/${esc(settings.instagram)}/" rel="me noopener">@${esc(settings.instagram)}</a>
  <a href="mailto:${esc(settings.email)}">${esc(settings.email)}</a>
</nav>`;
}
