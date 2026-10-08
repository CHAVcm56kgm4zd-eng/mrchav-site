// Piede della pagina: copyright e link legali.
// Le pagine legali non ancora scritte (indicizza: false) non vengono linkate.
export function PiedePagina(pagineLegali, anno) {
  const link = pagineLegali.map((p) => `<a href="/${p.slug}/">${p.titolo}</a>`).join(' ');
  return `<footer class="piede"><span>© ${anno} Mr.Chav</span>${link ? ` ${link}` : ''}</footer>`;
}
