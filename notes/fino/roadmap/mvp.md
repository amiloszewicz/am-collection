## ✅ 1. MVP Roadmap (1–2 tygodnie) — UX + architektura + komponenty

🎯 Cel MVP:

- Dodawanie transakcji (z prostym formularzem)
- Lista transakcji
- Podsumowanie miesiąca
- Pamiętanie danych lokalnie
- Zero kont, zero AI (na razie)

| Dzień   | Zadania                                                              |
| ------- | -------------------------------------------------------------------- |
| 1       | 🔹 Zainicjuj `nx` workspace + `fino-app` (Angular standalone)         |
|         | 🔹 Dodaj Tailwind CSS + routing                                       |
| 2       | 🔹 Stwórz layout z bottom nav + FAB                                   |
|         | 🔹 Routing: `/home`, `/transactions`, `/summary`                      |
| 3       | 🔹 Zrób `TransactionFormComponent` (kwota, opis, data, kategoria)     |
|         | 🔹 Dodaj przycisk zapisz, weryfikację                                 |
| 4       | 🔹 Zrób `TransactionListComponent` z mockami                          |
|         | 🔹 Grupa wg dni, sortowanie malejące                                  |
| 5       | 🔹 Stwórz `TransactionService` + LocalStorage (lub Signals + Storage) |
|         | 🔹 Połącz dodawanie z zapisem i listą                                 |
| WEEKEND | 🔸 Styluj: animacja FAB, toasty, pusty stan                           |

| Dzień   | Zadania                                                              |
| ------- | -------------------------------------------------------------------- |
| 6       | 🔹 Zrób `SummaryPage` z 5 liczbami (saldo pocz., wydatki, przychody…) |
| 7       | 🔹 Dodaj selektor miesiąca (zmienia listę transakcji + podsumowanie)  |
| 8       | 🔹 `CategoryService` + lista dostępnych kategorii                     |
| 9       | 🔹 Pamiętanie ostatnich wartości (np. ostatnia kategoria)             |
| 10      | 🔹 Dodaj `SquirrelComponent` z `mood` jako prop                       |
| WEEKEND | 🎉 Dopracuj UX + testuj na mobile                                     |
