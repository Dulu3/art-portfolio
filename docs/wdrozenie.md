# Instrukcja wdrozenia

## 1. Przygotowanie arkusza

1. Wejdz na Google Sheets i utworz nowy arkusz.
2. Nazwij go np. `Kwestionariusz - odpowiedzi`.
3. Nie musisz recznie tworzyc zakladki ani naglowkow. Skrypt zrobi to przy pierwszym zapisie.

## 2. Dodanie backendu Apps Script

1. W arkuszu kliknij `Rozszerzenia -> Apps Script`.
2. Usun domyslna zawartosc pliku `Code.gs`.
3. Wklej kod z pliku `apps-script/Code.gs`.
4. Zapisz projekt.

## 3. Opcjonalny token formularza

Token nie jest wymagany. Ta aplikacja nie potrzebuje Google API key ani OAuth
po stronie formularza.

Jesli chcesz odrzucac przypadkowe wysylki do endpointu:

1. W Apps Script kliknij `Ustawienia projektu`.
2. W sekcji `Wlasciwosci skryptu` dodaj:
   - nazwa: `FORM_TOKEN`,
   - wartosc: dowolny tekst, np. `ankieta-firma-2026`.
3. Wpisz taka sama wartosc w `frontend/config.js` jako `formToken`.

To nie jest tajny klucz, bo plik frontendowy jest publiczny. To prosta blokada
przed pomylkami i przypadkowymi postami, nie mechanizm bezpieczenstwa dla danych
wrazliwych.

## 4. Wdrozenie jako Web App

1. Kliknij `Wdrozenie -> Nowe wdrozenie`.
2. Wybierz typ: `Aplikacja internetowa`.
3. Ustaw:
   - `Wykonaj jako`: `Ja`,
   - `Kto ma dostep`: `Kazdy`.
4. Kliknij `Wdroz`.
5. Przy pierwszym wdrozeniu zaakceptuj wymagane uprawnienia.
6. Skopiuj URL aplikacji internetowej.

## 5. Konfiguracja formularza

1. Otworz plik `frontend/config.js`.
2. Zamien wartosc `endpointUrl` na URL skopiowany z Apps Script.

Przyklad:

```js
window.SURVEY_CONFIG = {
  endpointUrl: "https://script.google.com/macros/s/AKfycbx.../exec"
};
```

## 6. Test

1. Otworz `frontend/index.html` w przegladarce.
2. Wypelnij formularz.
3. Kliknij `Wyslij odpowiedz`.
4. Sprawdz, czy w arkuszu pojawil sie nowy wiersz w zakladce `Odpowiedzi`.

## 7. Publikacja formularza

Folder `frontend` mozesz wrzucic na dowolny hosting statyczny, np.:

- Netlify,
- Vercel,
- GitHub Pages,
- hosting strony firmowej,
- zwykly serwer FTP.

### Netlify

1. Utworz nowa strone w Netlify.
2. Jako katalog publikacji wybierz `frontend`.
3. Netlify odczyta `frontend/netlify.toml`.

### Vercel

1. Utworz nowy projekt w Vercel.
2. Jako katalog projektu wybierz `frontend`.
3. Vercel odczyta `frontend/vercel.json`.

## Uwaga o CORS

Frontend wysyla dane z `mode: "no-cors"`, poniewaz Google Apps Script Web App nie daje wygodnej kontroli nad pelnymi naglowkami CORS. To oznacza, ze przegladarka nie odczytuje tresci odpowiedzi serwera, ale samo zapisanie danych dziala poprawnie.

## Zmiana pytan

Pytania formularza sa w `frontend/survey-data.js`. Mozesz tam dodawac sekcje,
zmieniac pytania, dopisywac pola danych projektu albo modyfikowac checkboxy.

Nie musisz dopisywac osobnej kolumny w Apps Script dla kazdego pytania. Pelne
odpowiedzi sa zapisywane w kolumnie `Odpowiedzi JSON`, a najwazniejsze dane
kontaktowe i lista funkcjonalnosci sa dodatkowo zapisane w osobnych kolumnach.
