# Checklist di costruzione (da manuale)

Segnare [x] solo a verifica fatta.

## 1. Strategia e contenuti
- [ ] Obiettivo: presenza professionale per lavori con brand ed eventi
- [ ] Selezione foto da rifare con calma (griglia unica in home)
- [ ] Pubblico e parole chiave principali definiti
- [ ] Testi finali in italiano per ogni pagina
- [ ] Didascalie e testi alternativi per ogni foto
- [ ] Privacy policy e copyright scritti
- [ ] Dato corretto: pagine dello zine (52, 56 o 60: contare a mano)

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
- [ ] Dominio, HTTPS e DNS verificati
- [ ] Scelta www/non-www e redirect
- [ ] Vecchio deploy conservato fino a verifica

## 11. Dopo il rilascio
- [ ] Monitor uptime
- [ ] Controllo Search Console dopo 7 e 30 giorni
- [ ] Backup periodico del repository
