# mrchav-site

Nuovo sito di Mr.Chav (mrchav.com). Progetto pulito, costruito a step, modulare.

## Stack deciso
- Costruzione con **script Node senza dipendenze** (`build.mjs`): componenti in `src/components/` (un file per pezzo), contenuti in `content/`. Astro non è installabile in questa sessione (registro npm bloccato da policy di rete); il sito resta modulare e si può migrare in futuro.
- Hosting **Netlify** (già attivo; deploy da GitHub al posto del caricamento manuale)
- Immagini **Cloudinary** (cloud name: dbhswbguk)
- Pannello admin **Decap CMS** per cambiare foto e sfondo senza toccare il codice (step successivo; richiede GitHub)
- Font unico: **Libre Baskerville**
- Lingua: solo italiano

## Struttura
- `docs/` regole, audit, sitemap, checklist
- `content/` contenuti separati dal codice (testi, elenco foto, impostazioni)
- `src/components/` un componente = un pezzo del sito
- `src/layouts/` struttura comune delle pagine
- `src/pages/` una pagina = un URL
- `src/styles/` variabili (colori, sfondo, spaziature) in un solo file
- `public/` file statici (robots.txt, favicon, ecc.)
- `backups/` zip dei checkpoint

## Come si lavora
Si procede per step. A ogni step chiuso: commit, tag `checkpoint-NN`, zip in `backups/`, riga in `CHECKPOINTS.md`.
Per tornare indietro: `git checkout checkpoint-NN`.

Costruzione: `node build.mjs` genera la cartella `dist/` (da caricare su Netlify). Cambiare sfondo: `content/settings.json` (campo `sfondo`). Cambiare città: campo `luogo`.

Regole complete in `docs/00-REGOLE.md`.
