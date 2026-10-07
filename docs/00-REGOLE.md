# Regole di progetto

## Metodo
1. Un step alla volta. Nessuno step si apre se il precedente non è chiuso.
2. Ogni step chiuso = commit + tag `checkpoint-NN` + zip in `backups/` + riga in `CHECKPOINTS.md`.
3. Niente ipotesi: se un dato manca, si chiede. Niente conferme superflue sul resto.
4. Risparmio crediti: ricerche web mirate, file piccoli, modifiche a pezzi (mai riscrivere tutto).

## Codice a pezzi (priorità alta)
- Un componente = un file in `src/components/`. Modificare un pezzo non tocca gli altri.
- Contenuti fuori dal codice: testi, foto, impostazioni in `content/`.
- Colori, sfondo, spaziature, font in `src/styles/variables.css` (un solo punto).
- Il pannello admin (Decap) modifica solo `content/`, mai i componenti.
- Il modulo vendita/preorder (`shop`) nasce disattivato, con un interruttore in `content/settings.json`.

## Contenuti e tono
- Solo italiano. Tono conciso e professionale, nessuna frase generica o sentimentale.
- I testi devono riflettere esperienza e clienti reali, senza esagerazioni.
- Specificità geografica: soggetti siciliani/palermitani, non "Sud Italia" generico.
- Nessun dato legale o biografico personale nei testi pubblici.
- DICIOTTO è sempre descritto come zine/photobook.

## Design
- Font unico Libre Baskerville (web, stampa, social).
- Estetica scura e minimale, realismo documentario, nessun filtro estetico.

## Fuori portata (per ora)
Vendita online, pagamenti, area clienti, database. Predisposto il solo modulo `shop`.
