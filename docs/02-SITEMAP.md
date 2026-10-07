# Sitemap e architettura (bozza v2, 7 ottobre 2026)

Cambio rispetto alla v1: niente sezione "Lavori". Ispirazione strutturale: boogiephotographer.com (un'unica griglia di foto in home, link allo zine, contatti in fondo). Lo stile visivo di quel sito non è leggibile da testo: da definire con riferimenti (vedi domande aperte).

## Pagine e URL
| URL | Pagina | Note |
|---|---|---|
| `/` | Home | wordmark Mr.Chav, griglia unica di foto selezionate, lightbox, link a Diciotto |
| `/diciotto/` | Zine DICIOTTO | testo, foto, richiesta info ristampa; struttura pronta per modulo shop |
| `/chi-sono/` | Chi sono | bio e contatti |
| `/privacy/` | Privacy policy | testi da scrivere |
| `/copyright/` | Copyright | testi da scrivere |
| `/404` | Errore | |
| `/sitemap.xml`, `/robots.txt` | Tecnici | generati |

Footer su ogni pagina: email, Instagram, link privacy e copyright.
Predisposti ma disattivati: `/diciotto/preordine/` (shop) e `/serie/` (gruppi di foto per progetto, se in futuro vorrai).

## SEO con una sola griglia
Senza pagine per progetto, le parole chiave vanno in: H1 e testo della home, `alt` e didascalia obbligatori per ogni foto (campo obbligatorio nel pannello admin), pagina Chi sono, dati strutturati. Per questo ogni foto ha un record in `content/foto/`.

## Redirect
Il vecchio sito usa ancore, non servono redirect. Regole in `public/_redirects`.

## Componenti (un file ciascuno)
Header, Footer, GrigliaFoto, Lightbox, SezioneZine, TestoPagina, SEO (meta, Open Graph, JSON-LD), ModuloShop (disattivo).

## Dati in `content/`
- `settings.json`: sfondo, colori, interruttore shop, email, social
- `foto/*.md`: una per foto (immagine, alt, didascalia, anno, luogo, ordine, attiva sì/no)
- `pagine/*.md`: testi di Chi sono, Diciotto, privacy, copyright

## Mappa dei livelli (immagine di riferimento)
| Livello | Per questo sito |
|---|---|
| system design e architettura | questo documento |
| frontend | Astro + CSS variabili |
| hosting e cloud | Netlify + Cloudinary |
| CI/CD e version control | git ora; GitHub e deploy automatico quando avrai l'account |
| sicurezza | HTTPS, header di sicurezza, nessun dato utente |
| caching e CDN | CDN Netlify e Cloudinary |
| error tracking e monitoring | uptime monitor gratuito, Search Console |
| testing | Lighthouse, link check, test mobile |
| scaling | non necessario (sito statico) |
| auth, database, rate limiting | solo login del pannello admin |
