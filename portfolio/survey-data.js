window.SURVEY_DEFINITION = {
  projectFields: [
    { id: "project_name", label: "Imię i nazwisko / nazwa marki", required: true },
    { id: "contact_person", label: "Osoba kontaktowa", required: true },
    { id: "contact_phone", label: "Telefon", type: "tel" },
    { id: "contact_email", label: "E-mail", type: "email", required: true },
    { id: "filled_at", label: "Data wypełnienia", type: "date" }
  ],
  sections: [
    {
      title: "1. O filmowcu i marce",
      questions: [
        "Jak nazywa się Pan/Pani zawodowo lub pod jaką nazwą Pan/Pani działa (imię i nazwisko, pseudonim, nazwa studia)?",
        "W czym się Pan/Pani specjalizuje (np. teledyski, reklamy, dokumenty, śluby, fabuła, content social media)?",
        "Jak opisał(a)by Pan/Pani swój styl w jednym–dwóch zdaniach?",
        "Czy posiada Pan/Pani logo lub identyfikację wizualną, którą należy uwzględnić w projekcie?"
      ]
    },
    {
      title: "2. Cel strony i odbiorcy",
      questions: [
        "Co strona ma przede wszystkim osiągnąć (pozyskiwać klientów, prezentować portfolio agencjom, budować markę osobistą)?",
        "Kto jest głównym odbiorcą (klienci komercyjni, marki, inni twórcy, widzowie)?",
        "Jaką akcję ma wykonać osoba odwiedzająca stronę (napisać wiadomość, obejrzeć showreel, przejść na social media)?"
      ]
    },
    {
      title: "3. Treści - wideo",
      note: "Kluczowe dla portfolio filmowca.",
      questions: [
        "Czy posiada Pan/Pani gotowy showreel? Jaka jest jego długość?",
        "Skąd będą odtwarzane filmy (YouTube, Vimeo, czy hostowane bezpośrednio na stronie)?",
        "Ile filmów chce Pan/Pani pokazać i czy mają być pogrupowane (np. kategoriami, latami, klientami)?",
        "Czy filmom mają towarzyszyć opisy, pełniona rola w produkcji, nazwy klientów?"
      ]
    },
    {
      title: "4. Treści - zdjęcia",
      questions: [
        "Ile zdjęć chce Pan/Pani umieścić i jakiego są typu (kadry z planu, fotosy, behind the scenes, portrety)?",
        "Czy zdjęcia mają tworzyć galerię, slider, czy raczej stanowić tło / akcenty wizualne?",
        "Czy posiada Pan/Pani materiały w wysokiej rozdzielczości?"
      ]
    },
    {
      title: "5. Struktura i sekcje",
      questions: [
        "Czy ma to być jedna długa strona (one-page), czy kilka podstron?"
      ],
      checkboxes: {
        id: "site_sections",
        label: "Proszę zaznaczyć sekcje, które mają znaleźć się na stronie",
        options: [
          "Strona główna / showreel na wejściu",
          "Portfolio wideo",
          "Galeria zdjęć",
          "O mnie / biogram",
          "Kontakt",
          "Linki do social media",
          "Lista klientów / współprac"
        ],
        otherId: "site_sections_other",
        otherLabel: "Inne sekcje"
      }
    },
    {
      title: "6. Funkcje strony",
      checkboxes: {
        id: "site_features",
        label: "Proszę zaznaczyć potrzebne elementy",
        options: [
          "Formularz kontaktowy",
          "Osadzone odtwarzacze wideo (YouTube / Vimeo)",
          "Galeria zdjęć z powiększaniem (lightbox)",
          "Filtrowanie / kategorie projektów",
          "Animacje i efekty przewijania",
          "Wersja dwujęzyczna (PL/EN)",
          "Możliwość samodzielnej aktualizacji treści (CMS)"
        ],
        otherId: "site_features_other",
        otherLabel: "Inne funkcjonalności"
      }
    },
    {
      title: "7. Social media i kontakt",
      checkboxes: {
        id: "social_links",
        label: "Proszę zaznaczyć profile, do których ma linkować strona",
        options: [
          "Instagram",
          "YouTube",
          "Vimeo",
          "TikTok",
          "LinkedIn",
          "Behance",
          "Facebook"
        ],
        otherId: "social_links_other",
        otherLabel: "Inne profile (proszę podać linki)"
      },
      questions: [
        "Jaki adres e-mail i/lub telefon ma być widoczny na stronie?",
        "Gdzie mają znaleźć się linki do social media (w stopce, w menu, czy w obu miejscach)?"
      ]
    },
    {
      title: "8. Design i estetyka",
      questions: [
        "Jaki klimat ma mieć strona (minimalistyczny, kinowy/ciemny, surowy, elegancki, kolorowy)?",
        "Czy preferuje Pan/Pani ciemny czy jasny motyw?",
        "Czy ma Pan/Pani preferencje co do typografii lub kolorów (np. zgodnych z brandingiem)?",
        "Czy zależy Panu/Pani na rozbudowanych animacjach, czy raczej na prostocie i szybkości działania?"
      ]
    },
    {
      title: "9. Inspiracje",
      questions: [
        "Proszę podać 2–3 strony innych filmowców lub dowolne strony, które się Panu/Pani podobają, wraz z informacją, co konkretnie się w nich podoba.",
        "Czy są strony, które zdecydowanie się Panu/Pani nie podobają? Dlaczego?"
      ]
    },
    {
      title: "10. Kwestie techniczne",
      questions: [
        "Czy posiada Pan/Pani już domenę i hosting, czy należy je zapewnić?",
        "Czy ma Pan/Pani dostęp do swoich kanałów (YouTube/Vimeo) w celu osadzenia filmów?",
        "Czy strona ma być przygotowana pod podstawowe SEO i widoczność w Google?"
      ]
    },
    {
      title: "11. Treści i materiały",
      questions: [
        "Kto przygotowuje treści tekstowe na stronę (Państwo czy my)?",
        "Czy materiały wideo i zdjęcia są już gotowe i wyselekcjonowane?",
        "Czy potrzebna jest obróbka / dobór materiałów po naszej stronie?"
      ]
    },
    {
      title: "12. Harmonogram i budżet",
      questions: [
        "Jaki jest oczekiwany termin uruchomienia (czy jest sztywna data)?",
        "Orientacyjny budżet lub zakres budżetowy?",
        "Kto po Państwa stronie dostarcza materiały i akceptuje etapy?"
      ]
    },
    {
      title: "13. Po wdrożeniu",
      questions: [
        "Czy będzie Pan/Pani chciał(a) samodzielnie aktualizować stronę, czy ma to robić wykonawca?",
        "Czy potrzebne jest szkolenie z obsługi panelu (jeśli przewidziany jest CMS)?",
        "Czy oczekują Państwo wsparcia / utrzymania po starcie (aktualizacje, hosting, drobne zmiany)?"
      ]
    }
  ]
};
