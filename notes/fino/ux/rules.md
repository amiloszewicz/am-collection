2. 🧠 UX zasady i osobowość aplikacji

🔹 Zero tarcia — użytkownik wpisuje tylko to, co chce
🔹 Domyślności — ostatnia kategoria, dzisiejsza data, domyślne konto
🔹 Pusty stan = kierunek — „Nie masz jeszcze żadnych wydatków. Dodaj pierwszy!”
🔹 Osobowość: przyjazna, nie wywołująca winy:
„Ups, przekroczyłeś plan – może zmniejszyć zakupy spożywcze? 🍞”

mikrohumor:
„Twoje saldo to: –457 zł. Ale to tylko cyfry 😉”

Super. Startujemy od **absolutnego minimum**, bez niczego zbędnego.

# Co użytkownik NA PEWNO potrzebuje

1. **Dodać transakcję w 3–5 s.**

   * pole **Kwota** (klawiatura num.), **Typ**: Wydatek / Przychód, **Data** (domyślnie dziś), **Opis** (opcjonalnie), **Kategoria** (opcjonalnie).
   * Akcje: Zapisz, Edytuj, Usuń, Duplikuj.

2. **Zobaczyć wynik miesiąca jednym rzutem oka:**

   * **Saldo początkowe** (ustawiane na start miesiąca)
   * **Suma przychodów (rzeczywiste)**
   * **Suma wydatków (rzeczywiste)**
   * **Zaoszczędzone w miesiącu** = Przychody – Wydatki
   * **Saldo końcowe** = Saldo pocz. + Przychody – Wydatki

I… to wszystko na start. **Bez** planów kategorii, „celów”, wykresów, kont, transferów, raportów.

---

# Ile ekranów?

**Dwa. Minimalnie.**

1. **Transakcje** (serce aplikacji)

   * Na górze „**Szybki dodaj**”: Kwota → Typ → (opcjonalnie Kategoria/Opis) → Zapisz.
   * Poniżej **lista transakcji z wybranego miesiąca**, pogrupowana po dniach.
   * Filtry: *Wszystko / Wydatki / Przychody* (+ wyszukiwarka tekstu).
   * FAB „+” robi focus w pole Kwota.

2. **Podsumowanie (miesiąc)**

   * Selektor miesiąca + 5 liczb:
     **Saldo początkowe · Przychody · Wydatki · Zaoszczędzone · Saldo końcowe**
   * **Dwóch bloków** z arkusza w uproszczeniu:

     * *Wydatki – Rzeczywiste (suma)*
     * *Przychody – Rzeczywiste (suma)*
   * Zero wykresów. Tylko liczby i czytelne kolory (zielony = na plus, czerwony = na minus).

---

# Logika (formuły)

* **Zaoszczędzone (mies.)** = ΣPrzychody – ΣWydatki
* **Saldo końcowe** = Saldo początkowe + Zaoszczędzone
* Domyślna waluta i format liczb spójne z systemem.

---

# UX psychologiczny (bez nadmiaru)

* Domyślności: dziś, ostatnio użyta kategoria; kategoria/Opis są **opcjonalne**.
* Zero poczucia winy: kolory tylko przy sumach; brak ostrzeżeń.
* „Zrobione!” po zapisie (krótki tick), by wzmacniać nawyk.
* Jedna ścieżka decyzji: **wpisz kwotę → zatwierdź**. Reszta nie przeszkadza.

---

# Mini-backlog (MVP 0.1)

1. Ustawienie **salda początkowego** dla miesiąca.
2. Dodawanie/edycja/usuwanie **transakcji**.
3. Filtrowanie listy transakcji **po miesiącu** i typie.
4. Widok **Podsumowanie** (5 liczb).
5. Trwałość danych (local DB / file).
6. Walidacje: kwota > 0, data w miesiącu.
7. Import/eksport CSV (opcjonalnie po MVP, ale łatwe).

Gdy to działa i „klika”, dopiero **krok 2**: dorzucamy Twoje **Planowane** (per kategoria) i pokażemy *Różnica = Plan – Rzecz.* — nadal bez niczego więcej.

Chcesz, żebym rozpisał te dwa ekrany na komponenty (nazwy pól, akcje) i kolejność prac „task-by-task”?
