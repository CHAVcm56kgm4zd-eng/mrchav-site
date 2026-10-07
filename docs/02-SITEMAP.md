# Sitemap e architettura (bozza v2, 7 ottobre 2026)

Cambio rispetto alla v1: niente sezione "Lavori". Ispirazione strutturale: boogiephotographer.com (un'unica griglia di foto in home, link allo zine, contatti in fondo). Lo stile visivo di quel sito non è leggibile da testo: da definire con riferimenti (vedi domande aperte).

## Pagine e URL
| URL | Pagina | Note |
|---|---|---|
| `/` | Home | wordmark fisso, griglia unica a due colonne senza spazi, foto non cliccabili, contatti fissi (vedi 04-BRIEF-DESIGN.md) |
| `/zine/` | Indice zine | scroll di copertine, una per zine; link fisso "Zine" accanto ai contatti |
| `/zine/diciotto/` | Zine DICIOTTO | foto, poche righe di testo, richiesta info ristampa; una pagina così per ogni zine |
| `/chi-sono/` | Chi sono | pagina completa, non nel menu, indicizzabile, in sitemap.xml; raggiunta da un link discreto nel blocco in fondo alla home |
| `/privacy/` | Privacy policy | testi da scrivere |
| `/copyright/` | Copyright | testi da scrivere |
| `/404` | Errore | |
| `/sitemap.xml`, `/robots.txt` | Tecnici | generati |

Footer su ogni pagina: email, Instagram, link privacy e copyright.
Predisposti ma disattivati: `/zine/<nome>/preordine/` (shop, per singola zine) e `/serie/` (gruppi di foto per progetto, se in futuro vorrai).

## SEO con una sola griglia
Senza pagine per progetto, le parole chiave vanno in: H1 e testo della home, `alt` e didascalia obbligatori per ogni foto (campo obbligatorio nel pannello admin), pagina Chi sono, dati strutturati. Per questo ogni foto ha un record in `content/foto/`.

## Redirect
Il vecchio sito usa ancore, non servono redirect. Regole in `public/_redirects`.

## Componenti (un file ciascuno)
Wordmark (fisso), ContattiFissi, GrigliaFoto, ElencoZine, PaginaZine, BloccoChiSono (fondo home), TestoPagina, SEO (meta, Open Graph, JSON-LD), ModuloShop (disattivo). Nessun Lightbox, nessun filtro.

## Dati in `content/`
- `settings.json`: sfondo, colori, interruttore shop, email, social
- `foto/*.md`: una per foto (immagine, alt, didascalia, anno, luogo, ordine, attiva sì/no)
- `zine/*.md`: una per zine (titolo, anno, descrizione, foto, ristampa/preordine sì-no)
- `pagine/*.md`: testi di Chi sono, privacy, copyright

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
