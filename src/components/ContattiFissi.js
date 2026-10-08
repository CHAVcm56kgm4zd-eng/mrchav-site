import { esc } from '../lib/util.js';

// Contatti sempre visibili, fissi in basso a sinistra.
export function ContattiFissi(settings) {
  return `<nav class="contatti-fissi" aria-label="Contatti">
  <a href="https://www.instagram.com/${esc(settings.instagram)}/" rel="me noopener">@${esc(settings.instagram)}</a>
  <a href="mailto:${esc(settings.email)}">${esc(settings.email)}</a>
</nav>`;
}
