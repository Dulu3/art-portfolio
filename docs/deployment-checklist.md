# Deployment checklist

## Backend

- [ ] Utworzony arkusz Google Sheets.
- [ ] Kod z `apps-script/Code.gs` wklejony do Apps Script.
- [ ] Manifest `apps-script/appsscript.json` uzyty przy projekcie Apps Script, jesli wdrazasz przez clasp.
- [ ] Aplikacja webowa wdrozona z dostepem `Kazdy`.
- [ ] URL `/exec` skopiowany z wdrozenia.
- [ ] Opcjonalny `FORM_TOKEN` ustawiony w Script Properties.

## Frontend

- [ ] `frontend/config.js` ma poprawny `endpointUrl`.
- [ ] Jesli uzywasz tokenu, `frontend/config.js` ma taki sam `formToken`.
- [ ] Pytania w `frontend/survey-data.js` sa finalne.
- [ ] Formularz przetestowany lokalnie.
- [ ] Folder `frontend` opublikowany na hostingu statycznym.
- [ ] Testowa odpowiedz pojawia sie w arkuszu w zakladce `Odpowiedzi`.

## Niepotrzebne

- [ ] Google API key nie jest potrzebny.
- [ ] Wlasny serwer nie jest potrzebny.
- [ ] Baza danych poza Google Sheets nie jest potrzebna.
