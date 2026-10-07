# Sitemap e architettura (bozza step 2)

## Pagine e URL
| URL | Pagina | Note SEO |
|---|---|---|
| `/` | Home | hero + anteprima lavori + CTA, H1 unico |
| `/lavori/` | Elenco lavori | |
| `/lavori/wp-strabologna/` | Progetto WP_StraBologna 2026 | una pagina per progetto |
| `/lavori/scolapasta/` | Progetto Scolapasta 2025 | |
| `/personali/` | Personali, analogico e digitale | galleria |
| `/diciotto/` | Zine DICIOTTO | struttura pronta per modulo shop |
| `/chi-sono/` | Chi sono | |
| `/contatti/` | Contatti | email, Instagram |
| `/privacy/` | Privacy policy | testi da scrivere |
| `/copyright/` | Copyright | testi da scrivere |
| `/404` | Pagina errore | |
| `/sitemap.xml`, `/robots.txt` | tecnici | generati |

Predisposta, disattivata: `/diciotto/preordine/` (modulo shop).

## Redirect
Il vecchio sito usa solo ancore (#lavori, #diciotto...), non servono redirect per URL. Restano validi `/privacy` e `/copyright`. Regole in `public/_redirects` (Netlify).

## Componenti (un file ciascuno)
Header, Footer, Hero, GrigliaLavori, CardProgetto, Galleria, Lightbox, SezioneZine, TestoPagina, FormContatto/Link contatti, SEO (meta, Open Graph, dati strutturati), ModuloShop (disattivo).

## Dati in `content/`
- `settings.json`: sfondo, colori, interruttore shop, email, social
- `lavori/*.md`: un file per progetto (titolo, anno, luogo, foto)
- `personali.json`: elenco foto
- `pagine/*.md`: testi di Chi sono, Diciotto, ecc.

## Mappa dei livelli (immagine di riferimento) sul progetto
| Livello | Per questo sito |
|---|---|
| system design / architettura | questo documento |
| frontend | Astro + CSS variabili |
| hosting e cloud | Netlify + Cloudinary |
| CI/CD e version control | GitHub + deploy automatico Netlify |
| sicurezza | HTTPS, header di sicurezza, nessun dato utente |
| caching e CDN | CDN Netlify e Cloudinary, cache header |
| error tracking e monitoring | uptime monitor gratuito, Search Console |
| testing | Lighthouse, link check, test mobile |
| scaling | non necessario (sito statico) |
| auth, database, rate limiting | solo Decap admin (login) |
