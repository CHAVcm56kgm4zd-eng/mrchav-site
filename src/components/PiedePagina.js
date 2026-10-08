// Piede della pagina: copyright, link a Chi sono (discreto) e link legali.
// Le pagine legali non ancora scritte (indicizza: false) non vengono linkate.
export function PiedePagina(pagineLegali, anno, chiSono = true) {
  const link = pagineLegali.map((p) => `<a href="/${p.slug}/">${p.titolo}</a>`).join(' ');
  const cs = chiSono ? ' <a href="/chi-sono/">Chi sono</a>' : '';
  return `<footer class="piede"><span>© ${anno} Mr.Chav</span>${cs}${link ? ` ${link}` : ''}</footer>`;
}
