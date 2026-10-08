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

## Zine (deciso)
- Le zine sono più di una: struttura a collezione. Link "Zine" nel menu accanto al nome (vedi sitemap), che porta a `/zine/`; ogni zine ha la sua pagina in forma di scroll di foto con poche righe di testo.
- Zine: Diciotto e Hotchpotch (2026, in stampa), entrambe pubblicate nel sito. Testi di Hotchpotch dalla presentazione di Vincenzo; prezzo (15 euro) non pubblicato perché la vendita è rimandata.

## Chi sono (deciso)
- Nessun testo visibile in fondo alla home (deciso il 2026-10-08). Link "Chi sono" nel menu accanto al nome.
- La pagina è pubblica, collegata dal menu e in sitemap.xml: una pagina senza nessun link interno viene valorizzata meno da Google. Il testo non viene mai nascosto agli utenti e mostrato solo ai crawler (sarebbe contro le linee guida).

## Font (deciso il 2026-10-08)
- Punto di partenza: Gantari (stesso font di boogiephotographer.com), ospitato in locale (`public/fonts/Gantari-VF.ttf`, licenza OFL). Si cambia con `font` in `content/settings.json`.
- Il font definitivo sarà quello in sintonia con il nome MR.CHAV (da scegliere in seguito, magari con un logotipo).
