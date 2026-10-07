import { esc, fill } from '../lib/util.js';

// Bio breve in fondo alla home. Il link alla pagina completa si accende da settings.chiSonoLink.
export function BloccoChiSono(pagina, settings) {
  const link = settings.chiSonoLink ? ` <a href="/chi-sono/">Chi sono</a>` : '';
  return `<section class="blocco-chi-sono" aria-label="Chi sono">
  <p>${esc(fill(pagina.breve, settings))}${link}</p>
</section>`;
}
