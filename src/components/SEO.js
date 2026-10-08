import { esc, fill, cloudinary } from '../lib/util.js';

// Meta, canonical, Open Graph, Twitter card, dati strutturati. Nessuna meta keywords (ignorate da Google).
export function SEO({ settings, titolo, descrizione, percorso, indicizza = true, home = false }) {
  const url = settings.sito + percorso;
  const og = `https://res.cloudinary.com/${settings.cloudinaryCloud}/image/upload/f_jpg,q_auto,w_1200,h_630,c_fill/${settings.ogImageCloudinaryId}`;
  const d = fill(descrizione, settings);
  const jsonld = home
    ? `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: settings.nome,
        jobTitle: 'Fotografo',
        description: d,
        url: settings.sito + '/',
        image: og,
        homeLocation: { '@type': 'Place', name: settings.luogo },
        sameAs: [`https://www.instagram.com/${settings.instagram}/`],
      })}</script>`
    : '';
  return `<title>${esc(titolo)}</title>
<meta name="description" content="${esc(d)}">
<link rel="canonical" href="${esc(url)}">
<meta name="robots" content="${indicizza ? 'index, follow' : 'noindex, follow'}">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:site_name" content="${esc(settings.nome)}">
<meta property="og:title" content="${esc(titolo)}">
<meta property="og:description" content="${esc(d)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(og)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titolo)}">
<meta name="twitter:description" content="${esc(d)}">
<meta name="twitter:image" content="${esc(og)}">
${jsonld}`;
}
