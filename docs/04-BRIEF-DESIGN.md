# Brief di design (7 ottobre 2026)

Riferimento: boogiephotographer.com. Screenshot in `docs/riferimenti/`.

## Cosa si prende dal riferimento (visto negli screenshot mobile)
- Sfondo nero totale.
- Wordmark grande in alto a sinistra, bianco, fisso durante lo scroll.
- Foto in due colonne su mobile, senza spazi tra una foto e l'altra, ognuna nel suo formato originale (altezze diverse, niente ritaglio uniforme).
- Un unico scroll con tutte le foto. Le foto non si aprono al tocco (nessun lightbox).
- Contatti (Instagram ed email) sempre visibili, fissi sopra le foto, testo bianco che si fonde con l'immagine sotto (effetto `mix-blend-mode: difference`).
- Nessun menu, nessuna didascalia visibile, nessun filtro.

## Decisioni di Vincenzo
- Home senza testo di presentazione visibile.
- Nessun filtro sulla griglia.
- Sfondo nero come ora, modificabile da pannello admin.
- Possibile trasferimento: la città non va scritta a mano in più punti. Un solo campo `luogo` in `content/settings.json` alimenta title, meta, dati strutturati e testi.

## Conseguenze tecniche
- SEO senza testo visibile: H1 nascosto in modo accessibile (non `display:none`), `alt` obbligatorio per ogni foto, blocco di testo breve in fondo allo scroll, dati strutturati JSON-LD.
- Larghezza e altezza di ogni foto salvate nei dati, per evitare salti di layout durante il caricamento (lazy loading dalla seconda schermata).
- Ordine delle foto deciso da un campo `ordine` nel pannello admin. Con colonne senza spazi l'ordine di lettura segue le colonne: da verificare in prova.
- Contatti fissi come veri link (`mailto:` e Instagram), con contrasto controllato: l'effetto di fusione può perdere leggibilità su foto grigio medio.
- Rimossi dal progetto: Lightbox e filtri.

## Aperto: dove va lo zine DICIOTTO
Vedi opzioni nella conversazione. Scelta da registrare qui.
