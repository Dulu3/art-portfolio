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
        "Kto jest Państwa typowym klientem? Czy sprzedają Państwo osobom prywatnym, firmom, czy jednym i drugim?",
        "Czy firma już sprzedaje w internecie (np. na Allegro, Facebooku, własnym sklepie), czy zaczynamy od zera?",
        "Jakie są główne cele projektu (zwiększenie sprzedaży, budowanie rozpoznawalności marki, wejście na rynki zagraniczne, usprawnienie obsługi zamówień)?",
        "Kim są główni konkurenci? Czy są strony internetowe, które się Państwu podobają i mogłyby posłużyć za inspirację (proszę podać linki)?"
      ]
    },
    {
      title: "2. Zakres projektu",
      questions: [
        "Czy to zupełnie nowy sklep, czy przebudowa lub przeniesienie istniejącego na nową platformę?",
        "Jeśli sklep już istnieje — na jakiej platformie działa i co konkretnie nie działa lub wymaga zmiany?",
        "Czy potrzebny jest tylko sklep internetowy, czy także strona firmowa, blog lub strona promocyjna?",
        "Czy w przyszłości planowana jest rozbudowa (np. nowe funkcje, nowe rynki)? Warto to wiedzieć, żeby dobrze zaprojektować sklep od początku.",
        "Czy mają Państwo już wykupioną domenę (adres strony) i hosting (miejsce, gdzie strona będzie działać)?"
      ]
    },
    {
      title: "3. Skala sklepu",
      note: "Te informacje mają kluczowy wpływ na wycenę projektu.",
      questions: [
        "Ile produktów ma znaleźć się w sklepie na start? Ile docelowo?",
        "Ile kategorii i podkategorii produktów przewidują Państwo?",
        "Czy produkty występują w różnych wariantach (np. rozmiar, kolor, materiał)? Ile wariantów ma średnio jeden produkt?",
        "Ilu odwiedzających i ile zamówień miesięcznie Państwo przewidują (choćby orientacyjnie)?",
        "Czy planowane są okresy wzmożonej sprzedaży (np. Black Friday, święta, wyprzedaże sezonowe), kiedy sklep musi obsłużyć znacznie więcej klientów naraz?"
      ]
    },
    {
      title: "4. Zarządzanie sklepem",
      questions: [
        "Czy mają Państwo preferencje co do platformy sklepowej (np. Shopify, WooCommerce, PrestaShop)? Jeśli nie — dobierzemy najlepszą na podstawie Państwa potrzeb.",
        "Kto będzie na co dzień zarządzał sklepem (dodawanie produktów, obsługa zamówień)? Czy to osoba techniczna, czy potrzebny jest prosty, intuicyjny panel?",
        "Ile osób będzie zarządzało sklepem? Czy potrzebne są różne poziomy uprawnień (np. pracownik widzi tylko zamówienia, a właściciel ma dostęp do wszystkiego)?",
        "Czy mają Państwo własny serwer lub preferowanego dostawcę, na którym ma działać sklep?"
      ]
    },
    {
      title: "5. Funkcjonalności sklepu",
      checkboxes: {
        id: "shop_features",
        label: "Proszę zaznaczyć elementy, które mają znaleźć się w sklepie",
        options: [
          "Koszyk i składanie zamówień",
          "Możliwość zakupu bez zakładania konta",
          "Konta klientów (historia zamówień, zapisane adresy, lista ulubionych produktów)",
          "Wyszukiwarka produktów z możliwością filtrowania i sortowania",
          "Podpowiedzi typu „inni kupili także", „produkty powiązane"",
          "Możliwość dodawania opinii i ocen przez klientów",
          "Kody rabatowe, promocje i kupony",
          "Program lojalnościowy (zbieranie punktów za zakupy)",
          "Zestawy produktów i oferty typu „kup razem taniej"",
          "Sprzedaż dla firm (ceny netto, indywidualne cenniki, limity płatności z odroczonym terminem)",
          "Konfigurator produktu (np. klient sam dobiera elementy produktu)"
        ],
        otherId: "shop_features_other",
        otherLabel: "Inne funkcjonalności"
      },
      questions: [
        "Jakie automatyczne wiadomości mają otrzymywać klienci (np. potwierdzenie zamówienia, informacja o wysyłce, prośba o wystawienie opinii)?",
        "Czy Państwo również chcą dostawać powiadomienia ze sklepu (np. o nowym zamówieniu, niskim stanie magazynowym, problemie z płatnością)?"
      ]
    },
    {
      title: "6. Płatności i dostawa",
      questions: [
        "Jakie metody płatności mają być dostępne (np. BLIK, karty płatnicze, przelewy online, raty, płatność przy odbiorze)?",
        "Jakie sposoby dostawy (np. kurier, paczkomaty InPost, odbiór osobisty)?",
        "Czy chcą Państwo, aby etykiety wysyłkowe generowały się automatycznie, a klienci mogli śledzić paczkę ze sklepu?",
        "Czy koszty dostawy zależą od różnych czynników (np. waga paczki, region, wartość zamówienia)?"
      ]
    },
    {
      title: "7. Połączenie z innymi systemami",
      note: "Połączenie sklepu z innymi programami to często niedoszacowywany koszt — dlatego prosimy o dokładne informacje.",
      questions: [
        "Czy sklep ma być połączony z programem do zarządzania magazynem lub firmą (np. Subiekt, Comarch, SAP, BaseLinker)? Jeśli tak, z jakim?",
        "Czy sklep ma automatycznie wystawiać faktury lub łączyć się z programem księgowym (np. Fakturownia, wFirma, Comarch)?",
        "Czy chcą Państwo sprzedawać jednocześnie na innych platformach (np. Allegro, Amazon, Ceneo, Google Zakupy) z automatyczną synchronizacją stanów i cen?",
        "Czy chcą Państwo wysyłać klientom automatyczne e-maile marketingowe (np. newslettery, przypomnienia o porzuconym koszyku)? Jeśli tak, czy korzystają już Państwo z jakiegoś narzędzia (np. Mailchimp, GetResponse)?",
        "Czy korzystają Państwo z innych programów lub systemów, z którymi sklep powinien się łączyć?"
      ]
    },
    {
      title: "8. Wygląd i wygoda użytkowania",
      questions: [
        "Czy mają Państwo gotowe materiały graficzne firmy (logo, kolory firmowe, księgę znaku)?",
        "Jak ma powstać wygląd sklepu: wykorzystujemy gotowy szablon, modyfikujemy szablon pod Państwa potrzeby, czy projektujemy wygląd od podstaw?",
        "Czy chcą Państwo zobaczyć i zaakceptować wstępny projekt graficzny (makiety), zanim zaczniemy budować sklep?",
        "Czy sklep musi być wygodny w obsłudze na telefonach i tabletach? (Zakładamy, że tak — prosimy o informację, jeśli są szczególne wymagania.)",
        "Czy sklep musi być przystosowany dla osób z niepełnosprawnościami (np. czytelny dla osób niedowidzących, obsługiwany z klawiatury)? W niektórych branżach jest to wymóg prawny."
      ]
    },
    {
      title: "9. Treści i dane produktów",
      questions: [
        "Kto przygotowuje treści — opisy produktów, teksty na stronę (Państwo czy my)?",
        "Czy mają Państwo zdjęcia produktów w dobrej jakości, czy potrzebna jest sesja zdjęciowa lub obróbka graficzna?",
        "W jakiej formie są obecnie dane o produktach (plik Excel, arkusz Google, inny system, jeszcze nie ma)?",
        "Czy trzeba przenieść dane ze starego sklepu (produkty, klientów, historię zamówień, opinie)?"
      ]
    },
    {
      title: "10. Języki, waluty i rynki zagraniczne",
      questions: [
        "W ilu językach ma działać sklep?",
        "Czy sklep ma obsługiwać sprzedaż w różnych walutach lub do innych krajów? (Wiąże się to z dodatkowymi wymaganiami podatkowymi i prawnymi.)",
        "Jeśli potrzebne są tłumaczenia — dostarczą je Państwo, czy mamy je uwzględnić w projekcie?"
      ]
    },
    {
      title: "11. Widoczność w internecie i marketing",
      questions: [
        "Czy sklep ma być zoptymalizowany pod wyszukiwarki (np. Google), żeby klienci łatwiej go znajdowali?",
        "Czy chcą Państwo śledzić statystyki odwiedzin i zachowania klientów na stronie (np. Google Analytics, piksel Facebooka)?",
        "Czy potrzebny jest newsletter lub automatyczne przypomnienia do klientów, którzy nie dokończyli zakupów?",
        "Czy sklep ma zawierać blog lub sekcję z poradami / artykułami?"
      ]
    },
    {
      title: "12. Wydajność i testowanie",
      questions: [
        "Czy szybkość ładowania sklepu jest dla Państwa priorytetem (np. strona musi otwierać się poniżej 2-3 sekund)?",
        "Na jakich urządzeniach i przeglądarkach Państwa klienci najczęściej korzystają ze sklepu (np. telefony, komputery, Chrome, Safari)?"
      ]
    },
    {
      title: "13. Kwestie prawne i bezpieczeństwo",
      questions: [
        "Czy potrzebne są dokumenty prawne: regulamin sklepu, polityka prywatności, zgody na pliki cookies? Dostarczą je Państwo, czy mamy je przygotować?",
        "Czy oczekują Państwo zabezpieczeń takich jak szyfrowanie danych (kłódka w przeglądarce) i automatyczne kopie zapasowe? (Zalecamy to jako standard.)",
        "Czy Państwa branża podlega szczególnym regulacjom prawnym (np. sprzedaż alkoholu, suplementów, produktów medycznych)?"
      ]
    },
    {
      title: "14. Harmonogram i budżet",
      questions: [
        "Kiedy sklep powinien zostać uruchomiony? Czy jest sztywna data (np. przed sezonem świątecznym)?",
        "Jaki jest orientacyjny budżet lub zakres budżetowy, który Państwo przewidują na ten projekt?",
        "Kto po Państwa stronie będzie podejmował decyzje i akceptował kolejne etapy prac?",
        "Ile czasu tygodniowo mogą Państwo poświęcić na współpracę przy projekcie (odpowiadanie na pytania, dostarczanie materiałów, akceptowanie etapów)?",
        "Które elementy sklepu są absolutnie niezbędne na start, a które mogą poczekać na dalszy rozwój?"
      ]
    },
    {
      title: "15. Po uruchomieniu sklepu",
      questions: [
        "Czy potrzebne jest szkolenie z obsługi panelu administracyjnego sklepu?",
        "Czy oczekują Państwo stałej opieki technicznej po uruchomieniu (aktualizacje, pomoc w razie problemów, hosting)?",
        "Jak szybko oczekują Państwo reakcji na zgłoszenie problemu (np. w ciągu godziny, w ciągu dnia roboczego)?",
        "Czy po uruchomieniu planują Państwo dalszy rozwój sklepu (nowe funkcje, nowe rynki)?"
      ]
    }
  ]
};
