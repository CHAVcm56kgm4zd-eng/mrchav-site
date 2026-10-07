import { esc } from '../lib/util.js';

// Modulo vendita/preordine: spento di default.
// Si accende con settings.shopAttivo = true E zine.preordine.attivo = true.
// Il codice di pagamento (link Stripe o simile) andrà in zine.preordine.url quando deciderai.
export function ModuloShop(zine, settings) {
  if (!settings.shopAttivo || !zine.preordine || !zine.preordine.attivo || !zine.preordine.url) return '';
  return `<p class="shop"><a href="${esc(zine.preordine.url)}" rel="noopener">${esc(zine.preordine.etichetta || 'Preordina')}</a></p>`;
}
