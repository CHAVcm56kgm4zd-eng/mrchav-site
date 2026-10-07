# Checklist di costruzione (da manuale)

Segnare [x] solo a verifica fatta.

## 1. Strategia e contenuti
- [ ] Obiettivo: presenza professionale per lavori con brand ed eventi
- [ ] Selezione foto da rifare con calma (griglia unica in home)
- [ ] Pubblico e parole chiave principali definiti
- [ ] Testi finali in italiano per ogni pagina
- [ ] Didascalie e testi alternativi per ogni foto
- [~] Privacy policy e copyright: bozza scritta, da far verificare (titolare da completare)
- [x] Dato corretto: pagine di Diciotto = 60

## 2. Architettura
- [x] Sitemap approvata (checkpoint 01)
- [ ] URL puliti, minuscoli, senza accenti
- [ ] Redirect definiti
- [x] Modello dati in `content/`

## 3. Design
- [x] Variabili: colori, sfondo, spaziature, scala tipografica
- [x] Libre Baskerville self-hosted (prestazioni e privacy)
- [x] Layout mobile first, poi tablet e desktop
- [ ] Stati: hover, focus, errore, caricamento

## 4. Codice
- [x] Progetto creato (script Node, non Astro), componenti separati
- [ ] HTML semantico (header, main, nav, footer, un solo H1 per pagina)
- [x] Griglia foto (nessun lightbox, come da brief)
- [x] Modulo shop disattivato con interruttore
- [ ] Pannello Decap per foto e sfondo

## 5. SEO tecnico
- [ ] Title e meta description unici per pagina
- [x] Canonical coerente (senza www; da applicare anche nel redirect Netlify)
- [ ] Open Graph e Twitter card
- [ ] Dati strutturati JSON-LD (Person/Photographer, ImageObject)
- [x] sitemap.xml e robots.txt
- [x] Nessuna meta keywords
- [ ] Search Console ricollegata, sitemap inviata

## 6. Immagini e prestazioni
- [ ] Formati moderni (AVIF/WebP) via Cloudinary, f_auto,q_auto
- [ ] Dimensioni responsive (srcset), lazy loading, width/height dichiarati
- [ ] Immagine hero con priorità
- [ ] Lighthouse: prestazioni, accessibilità, best practice, SEO sopra 90

## 7. Accessibilità
- [ ] Testi alternativi
- [ ] Contrasto sufficiente su sfondo scuro
- [ ] Navigazione da tastiera, focus visibile
- [ ] Rispetto di prefers-reduced-motion

## 8. Sicurezza e privacy
- [ ] HTTPS forzato
- [ ] Header di sicurezza in `netlify.toml`
- [ ] Nessun cookie non necessario; se si aggiunge analytics, valutare banner
- [ ] Email non esposta in modo banale (valutare modulo o protezione)

## 9. Test
- [ ] Controllo link rotti
- [ ] Test su iPhone, Android, desktop, Safari e Chrome
- [ ] Anteprima condivisione social

## 10. Rilascio
- [ ] Repository GitHub collegato a Netlify
- [x] Dominio, HTTPS e DNS verificati (Netlify DNS, Let's Encrypt, rinnovo automatico)
- [x] Scelta www/non-www: mrchav.com primario, www reindirizza
- [ ] Vecchio deploy conservato fino a verifica

## 11. Dopo il rilascio
- [ ] Monitor uptime
- [ ] Controllo Search Console dopo 7 e 30 giorni
- [ ] Backup periodico del repository

## 12. Indicizzazione Google (da guide Google Search Central lette il 2026-10-08)
Fonti: SEO starter guide, Google Images, Site move, Sitemap, ProfilePage.
- [ ] Titolo e descrizione unici per ogni pagina (fatto nel build, da ricontrollare dopo le foto)
- [ ] Testo alternativo breve e descrittivo, con luogo/soggetto/progetto; niente riempimento di parole chiave
- [ ] Nomi file delle foto descrittivi (es. bologna-pride-2026-rivolta.jpg), mai IMG_1234
- [ ] Immagini sempre con <img src> (mai sfondi CSS); srcset ma con src di riserva (già così)
- [ ] Stesso URL per la stessa immagine in tutte le pagine
- [ ] Immagine di anteprima (og:image) nitida, non un logo, non con testo
- [ ] Prima del rilascio: nessun noindex rimasto sulle pagine che devono essere pubbliche; robots.txt senza blocchi
- [ ] Anteprima su progetto Netlify separato: aggiungere header noindex (il canonical punta già a mrchav.com)
- [ ] Mappa dei vecchi URL (Search Console > Pagine) verso i nuovi; redirect 301 uno a uno, mai tutti alla home; /copyright già indicizzato
- [ ] Redirect mantenuti almeno un anno
- [ ] Cambiare una cosa alla volta: piattaforma, layout e testi cambiano insieme, quindi aspettarsi oscillazioni per settimane; titolo, descrizione, dominio e immagine OG restano gli stessi
- [ ] Sitemap: solo URL indicizzabili, senza lastmod (rimosso: Google lo usa solo se accurato) né priority/changefreq (ignorati); invio in Search Console e riga in robots.txt
- [ ] Dati strutturati: valutare ProfilePage su /chi-sono/ con Person (name, alternateName, description, image, sameAs Instagram; LinkedIn escluso per scelta); test con Rich Results Test e Ispezione URL
- [ ] Dopo il rilascio: Ispezione URL sulle pagine principali, controllo copertura a 7 e 30 giorni
