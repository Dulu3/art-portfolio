window.SURVEY_DEFINITION = {
  projectFields: [
    { id: "project_name", label: "Nazwa firmy / projektu", required: true },
    { id: "contact_person", label: "Osoba kontaktowa", required: true },
    { id: "contact_phone", label: "Telefon", type: "tel" },
    { id: "contact_email", label: "E-mail", type: "email", required: true },
    { id: "filled_at", label: "Data wypełnienia", type: "date" }
  ],
  sections: [
    {
      title: "1. Informacje o firmie i biznesie",
      questions: [
        "Czym zajmuje się firma i co konkretnie chce sprzedawać (produkty fizyczne, cyfrowe, usługi)?",
        "Kto jest grupą docelową (klient indywidualny B2C, firmy B2B, mieszany)?",
        "Czy firma już handluje online (np. na Allegro, Facebooku, własnym sklepie), czy to start od zera?",
        "Jakie są główne cele projektu (sprzedaż, rozpoznawalność marki, ekspansja zagraniczna, automatyzacja)?",
        "Kim są główni konkurenci? Czy są strony, które się Państwu podobają (proszę podać linki)?"
      ]
    },
    {
      title: "2. Zakres projektu",
      questions: [
        "Czy to nowy sklep, czy przebudowa/migracja istniejącego?",
        "Jeśli istnieje - na jakiej platformie działa obecnie i co konkretnie nie działa / wymaga zmiany?",
        "Czy potrzebny jest tylko sklep, czy także strona firmowa / blog / landing page?",
        "Czy w przyszłości planowana jest rozbudowa (warto wiedzieć przy projektowaniu architektury)?"
      ]
    },
    {
      title: "3. Skala sklepu",
      note: "Kluczowe dla wyceny.",
      questions: [
        "Ile produktów ma znaleźć się w sklepie na start? Ile docelowo?",
        "Ile kategorii / podkategorii?",
        "Czy produkty mają warianty (rozmiar, kolor, materiał)? Ile średnio na produkt?",
        "Jaki spodziewany ruch (liczba odwiedzin / zamówień miesięcznie)?",
        "Czy planowane są okresy szczytowe (np. wyprzedaże, święta) wymagające wydajności?"
      ]
    },
    {
      title: "4. Platforma technologiczna",
      questions: [
        "Czy mają Państwo preferencje co do technologii (Shopify, WooCommerce, PrestaShop, Magento, rozwiązanie dedykowane)?",
        "Czy istnieje wewnętrzny zespół IT, który będzie utrzymywał sklep, czy zarządzanie ma być maksymalnie proste dla osoby nietechnicznej?",
        "Czy są wymagania dotyczące hostingu (własny serwer, chmura, konkretny dostawca)?"
      ]
    },
    {
      title: "5. Funkcjonalności sklepu",
      checkboxes: {
        id: "shop_features",
        label: "Proszę zaznaczyć potrzebne elementy",
        options: [
          "Koszyk i proces zamówienia (checkout)",
          "Zakup bez rejestracji (gość)",
          "Konta klientów (historia zamówień, lista życzeń, adresy)",
          "Wyszukiwarka produktów / filtrowanie / sortowanie",
          "Rekomendacje, produkty powiązane, inni kupili także",
          "Recenzje i oceny produktów",
          "Kody rabatowe, promocje, kupony",
          "Programy lojalnościowe / punkty",
          "Zestawy produktów / sprzedaż wiązana",
          "Sprzedaż B2B (ceny netto, ceny indywidualne, limity kredytowe)",
          "Konfigurator produktu"
        ],
        otherId: "shop_features_other",
        otherLabel: "Inne funkcjonalności"
      }
    },
    {
      title: "6. Płatności i dostawa",
      questions: [
        "Jakie metody płatności mają być dostępne (przelewy, BLIK, karty, PayU/Przelewy24/Stripe, raty, płatność przy odbiorze)?",
        "Jacy przewoźnicy / metody dostawy (kurier, paczkomaty InPost, odbiór osobisty)?",
        "Czy potrzebna jest integracja z systemami kurierskimi (automatyczne etykiety, śledzenie przesyłek)?",
        "Czy reguły dostawy są złożone (różne ceny wg wagi, regionu, wartości koszyka)?"
      ]
    },
    {
      title: "7. Integracje zewnętrzne",
      note: "Często niedoszacowywany koszt.",
      questions: [
        "Czy sklep ma się integrować z systemem ERP / magazynowym / WMS? Jakim?",
        "Integracja z księgowością / fakturowaniem (np. Subiekt, Comarch, fakturownia)?",
        "Sprzedaż wielokanałowa - synchronizacja z Allegro, Amazon, eBay, Ceneo, Google Shopping?",
        "Integracja z systemem e-mail marketingu / CRM (Mailchimp, GetResponse, HubSpot)?",
        "Czy któraś z integracji wymaga API, do którego nie ma gotowego konektora?"
      ]
    },
    {
      title: "8. Design i UX",
      questions: [
        "Czy mają Państwo gotową identyfikację wizualną (logo, kolory, księga znaku)?",
        "Projekt graficzny: gotowy szablon, modyfikacja szablonu czy projekt dedykowany od podstaw?",
        "Czy potrzebne są makiety / prototypy do akceptacji przed wdrożeniem?",
        "Wymagana responsywność (mobile, tablet) - zakładamy tak; jakieś szczególne wymagania?",
        "Czy są wymagania dot. dostępności (WCAG)?"
      ]
    },
    {
      title: "9. Treści i dane",
      questions: [
        "Kto przygotowuje treści - opisy produktów, teksty na stronę (Państwo czy my)?",
        "Czy są zdjęcia produktów w dobrej jakości, czy potrzebna jest sesja / obróbka?",
        "W jakim formacie są dane produktów (plik Excel/CSV, inny system, brak)?",
        "Czy potrzebna jest migracja danych ze starego sklepu (produkty, klienci, zamówienia, opinie)?"
      ]
    },
    {
      title: "10. Języki, waluty, rynki",
      questions: [
        "Ile wersji językowych?",
        "Sprzedaż w wielu walutach? Sprzedaż zagraniczna (VAT OSS, cła)?",
        "Czy tłumaczenia dostarcza klient, czy mają być w zakresie projektu?"
      ]
    },
    {
      title: "11. Marketing i SEO",
      questions: [
        "Czy potrzebna jest podstawowa optymalizacja SEO (struktura, meta, mapy strony)?",
        "Integracja z Google Analytics / Tag Manager / Pixel Meta?",
        "Newsletter, mechanizmy odzyskiwania porzuconych koszyków?",
        "Blog / sekcja contentowa?"
      ]
    },
    {
      title: "12. Aspekty prawne i bezpieczeństwo",
      questions: [
        "Czy potrzebne są regulamin, polityka prywatności, RODO, zgody cookies (klient dostarcza czy w zakresie)?",
        "Certyfikat SSL, wymagania bezpieczeństwa, kopie zapasowe?",
        "Czy branża jest regulowana (np. alkohol, suplementy, produkty medyczne) - dodatkowe wymogi?"
      ]
    },
    {
      title: "13. Harmonogram i budżet",
      questions: [
        "Oczekiwany termin uruchomienia (czy jest sztywna data, np. sezon)?",
        "Orientacyjny budżet lub zakres budżetowy?",
        "Kto po stronie klienta podejmuje decyzje i akceptuje etapy?"
      ]
    },
    {
      title: "14. Po wdrożeniu",
      questions: [
        "Czy potrzebne jest szkolenie z obsługi panelu?",
        "Czy oczekują Państwo umowy serwisowej / utrzymaniowej (aktualizacje, hosting, wsparcie)?",
        "Jaki czas reakcji na zgłoszenia jest oczekiwany (SLA)?",
        "Czy przewidywany jest dalszy rozwój sklepu po starcie?"
      ]
    }
  ]
};
