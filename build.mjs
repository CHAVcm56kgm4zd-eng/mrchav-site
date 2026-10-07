// Costruisce il sito statico in dist/. Nessuna dipendenza: solo Node.
// Uso: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Base } from './src/layouts/Base.js';
import { GrigliaFoto } from './src/components/GrigliaFoto.js';
import { Foto } from './src/components/Foto.js';
import { BloccoChiSono } from './src/components/BloccoChiSono.js';
import { ModuloShop } from './src/components/ModuloShop.js';
import { esc, fill } from './src/lib/util.js';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const leggi = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));
const elenco = (d) =>
  existsSync(join(root, d))
    ? readdirSync(join(root, d)).filter((f) => f.endsWith('.json')).map((f) => ({ slug: f.replace(/\.json$/, ''), ...leggi(join(d, f)) }))
    : [];

const settings = leggi('content/settings.json');
const foto = elenco('content/foto').filter((f) => f.attiva !== false).sort((a, b) => (a.ordine ?? 999) - (b.ordine ?? 999));
// Le zine con "attiva": false restano bozze e non vengono pubblicate.
const zine = elenco('content/zine').filter((z) => z.attiva !== false).sort((a, b) => (b.anno ?? 0) - (a.anno ?? 0));
const pagine = Object.fromEntries(elenco('content/pagine').map((p) => [p.slug, p]));
const anno = new Date().getFullYear();
const avvisi = [];

// Controlli di qualità sui contenuti
for (const f of foto) if (!f.alt || !f.alt.trim()) avvisi.push(`Foto senza testo alternativo: ${f.slug}`);
for (const f of foto) if (!f.width || !f.height) avvisi.push(`Foto senza larghezza/altezza: ${f.slug}`);
for (const [slug, p] of Object.entries(pagine)) if (p.indicizza === false) avvisi.push(`Pagina non indicizzata (da scrivere): /${slug}/`);

const pagineLegali = ['privacy', 'copyright'].map((s) => pagine[s]).filter((p) => p && p.indicizza !== false);
const urlIndicizzabili = [];

function pagina({ percorso, seo, h1, corpo, indicizza = true }) {
  const html = Base({
    settings,
    seo: { settings, percorso, indicizza, ...seo },
    h1,
    corpo,
    pagineLegali,
    anno,
  });
  const file = percorso === '/404' ? '404.html' : join(percorso.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(join(dist, file)), { recursive: true });
  writeFileSync(join(dist, file), html);
  if (indicizza && percorso !== '/404') urlIndicizzabili.push(percorso);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'public'), dist, { recursive: true, filter: (s) => !s.endsWith('.gitkeep') });
cpSync(join(root, 'src/styles'), join(dist, 'css'), { recursive: true, filter: (s) => !s.endsWith('.gitkeep') });

// Home
pagina({
  percorso: '/',
  seo: { titolo: fill(settings.titoloHome, settings), descrizione: settings.descrizione, home: true },
  h1: { testo: fill(settings.titoloH1, settings), visibile: false },
  corpo: GrigliaFoto(foto, settings) + (pagine['chi-sono'] ? BloccoChiSono(pagine['chi-sono'], settings) : ''),
});

// Chi sono (pagina completa, fuori dal menu ma collegata e in sitemap)
const cs = pagine['chi-sono'];
pagina({
  percorso: '/chi-sono/',
  seo: { titolo: `${cs.titolo} — ${settings.nome}`, descrizione: cs.descrizione },
  h1: { testo: cs.titolo, visibile: true },
  corpo: `<div class="testo-pagina">${cs.testo.map((t) => `<p>${esc(fill(t, settings))}</p>`).join('')}</div>`,
});

// Indice zine
pagina({
  percorso: '/zine/',
  seo: { titolo: `Zine — ${settings.nome}`, descrizione: `Zine fotografiche autoprodotte di ${settings.nome}.` },
  h1: { testo: 'Zine', visibile: false },
  corpo: `<div class="griglia zine-elenco">${zine
    .map((z) => {
      const c = z.copertina;
      const fig = Foto({ ...c, alt: c.alt || `Copertina ${z.titolo}` }, 0, settings).replace(/^<figure class="foto">/, '').replace(/<\/figure>$/, '');
      return `<figure class="foto"><a href="/zine/${z.slug}/" aria-label="${esc(z.titolo)}, zine${z.anno ? ' ' + z.anno : ''}">${fig}</a></figure>`;
    })
    .join('')}</div>`,
});

// Una pagina per ogni zine
for (const z of zine) {
  const ristampa = z.ristampa && z.ristampa.attiva
    ? `<p class="ristampa"><a href="mailto:${esc(settings.email)}?subject=${encodeURIComponent(z.ristampa.oggettoEmail || z.titolo)}">${esc(z.ristampa.etichetta)} →</a></p>`
    : '';
  pagina({
    percorso: `/zine/${z.slug}/`,
    seo: { titolo: `${z.titolo}, zine fotografica — ${settings.nome}`, descrizione: z.descrizione },
    h1: { testo: z.titolo, visibile: true },
    corpo:
      `<div class="testo-pagina">${z.sottotitolo ? `<p>${esc(z.sottotitolo)}</p>` : ''}${z.testo.map((t) => `<p>${esc(fill(t, settings))}</p>`).join('')}</div>` +
      ModuloShop(z, settings) +
      ristampa +
      (z.foto && z.foto.length ? GrigliaFoto(z.foto, settings) : ''),
  });
}

// Pagine legali: create sempre, ma non indicizzate finché il testo non è pronto
for (const s of ['privacy', 'copyright']) {
  const p = pagine[s];
  if (!p) continue;
  pagina({
    percorso: `/${s}/`,
    seo: { titolo: `${p.titolo} — ${settings.nome}`, descrizione: p.descrizione },
    h1: { testo: p.titolo, visibile: true },
    corpo: `<div class="testo-pagina">${p.testo.map((t) => `<p>${esc(t)}</p>`).join('')}</div>`,
    indicizza: p.indicizza !== false,
  });
}

// 404
pagina({
  percorso: '/404',
  seo: { titolo: `Pagina non trovata — ${settings.nome}`, descrizione: 'Pagina non trovata.' },
  h1: { testo: 'Pagina non trovata', visibile: true },
  corpo: `<div class="testo-pagina"><p><a href="/">Torna alla home</a></p></div>`,
  indicizza: false,
});

// sitemap.xml e robots.txt
const oggi = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlIndicizzabili
    .map((u) => `  <url><loc>${settings.sito}${u}</loc><lastmod>${oggi}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`
);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${settings.sito}/sitemap.xml\n`);

console.log(`Build completata: ${foto.length} foto, ${zine.length} zine, ${urlIndicizzabili.length} URL in sitemap.`);
for (const a of avvisi) console.log('Avviso:', a);
