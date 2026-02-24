# Inny Aspekt Studio — Portfolio

Ciemne portfolio artystyczne z lightboxem i przyciskiem zamówienia przez Instagram DM.

## Funkcje

- Galeria masonry z podglądem lightbox (klik w obraz)
- Nawigacja strzałkami i klawiaturą (← → ESC)
- Przycisk ZAMÓW otwiera Instagram DM
- Własny kursor z animowanym pierścieniem
- Efekt ziarna i złote akcenty
- Responsywny układ (3 / 2 / 1 kolumny)

## Struktura

```
innyaspektstudio/
├── index.html
├── obrazy/
│   ├── aktualizuj.ps1      ← skrypt Windows (auto-wykrywa wymiary)
│   ├── artysta.jpg         ← zdjęcie w sekcji "O artyście"
│   ├── favicon.png         ← ikona w pasku przeglądarki
│   └── obraz1.jpg ...
```

## Dodawanie obrazów

1. Wrzuć pliki `.jpg` / `.png` / `.webp` do folderu `obrazy/`
2. Uruchom skrypt — automatycznie wykryje czy obraz jest pionowy czy poziomy:

```powershell
powershell -ExecutionPolicy Bypass -File obrazy\aktualizuj.ps1
```

3. Otwórz `index.html` w przeglądarce

> Skrypt pomija pliki `artysta.*` i `favicon.*`

## Ręczna edycja listy obrazów

Otwórz `index.html` i znajdź sekcję `const pliki`:

```js
const pliki = [
  'pejzaz.jpg',    // poziomy lub kwadratowy
  'portret.jpg!',  // pionowy — dodaj ! na końcu
];
```

## Konfiguracja

W `index.html` zmień nick Instagram:

```html
<a href="https://ig.me/m/innyaspektstudio" ...>
```

## Technologie

Czysty HTML / CSS / JS — zero zależności, działa lokalnie bez serwera.
