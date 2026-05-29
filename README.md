# Kwestionariusz

Prosty system ankietowy bez wlasnego serwera:

- statyczny formularz HTML/CSS/JS,
- zapis odpowiedzi do Google Sheets,
- backend w Google Apps Script,
- latwe wdrozenie jako Google Apps Script Web App.
- gotowe pliki pod Netlify i Vercel.

## Struktura

```text
Kwestionariusz/
  frontend/
    index.html
    styles.css
    script.js
    survey-data.js
    config.js
    config.example.js
  apps-script/
    Code.gs
    appsscript.json
  docs/
    wdrozenie.md
    deployment-checklist.md
```

## Szybki start

1. Otworz `frontend/index.html` w przegladarce, zeby zobaczyc formularz.
2. Utworz arkusz Google Sheets.
3. W arkuszu przejdz do `Rozszerzenia -> Apps Script`.
4. Wklej zawartosc `apps-script/Code.gs`.
5. Wdroz skrypt jako aplikacje webowa.
6. Wklej URL aplikacji webowej do `frontend/config.js` w polu `endpointUrl`.
7. Umiesc folder `frontend` na hostingu statycznym.

Nie potrzebujesz klucza Google API. Opcjonalnie mozesz ustawic `formToken`,
opisane w `docs/wdrozenie.md`.

Pelna instrukcja jest w `docs/wdrozenie.md`, a krotka lista kontrolna w
`docs/deployment-checklist.md`.

## Edycja pytan

Pytania kwestionariusza sa w `frontend/survey-data.js`. Po zmianie tego pliku
formularz przebuduje sie automatycznie, a Apps Script zapisze odpowiedzi w
kolumnie `Odpowiedzi JSON`.
