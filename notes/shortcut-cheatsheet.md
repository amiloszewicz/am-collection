## VS Code

| Skrót                |                                           Opis |
| :------------------- | ---------------------------------------------: |
| Ctrl + P             |                      Szybkie otwieranie plików |
| Ctrl + Shift + P     |                                 Paleta poleceń |
| Ctrl + Shift + F     |                 Wyszukiwanie w całym projekcie |
| Ctrl + /             |                        Komentarz / odkomentarz |
| Alt + ↑ / ↓          |               Przesuwanie linii w górę / w dół |
| Ctrl + B             |                          Pokaż / ukryj sidebar |
| Ctrl + Shift + [ / ] |                   Zwijanie / rozwijanie bloków |
| Ctrl + \             |                                   Podział okna |
| Ctrl + Tab           |          Przełączanie między otwartymi plikami |
| Ctrl + Shift + S     |                                Zapisz wszystko |
| F2                   |                   Szybka zmiana nazwy zmiennej |
| F12 / Ctrl + Click   |                               Idź do definicji |
| Alt + Click          | Wiele kursorów (edytowanie wielu linii na raz) |

## Neovim (standard + LazyVim)

| Skrót                 |                                            Opis |
| :-------------------- | ----------------------------------------------: |
| :w                    |                                     Zapisz plik |
| :q / :wq / :q!        | Zamknij / zapisz i zamknij / zamknij bez zapisu |
| :e <filename>         |                                     Otwórz plik |
| :Ex / :Oil            |               Eksplorator plików (np. Oil.nvim) |
| jj                    |   Tryb insert → normal (LazyVim często ustawia) |
| Ctrl + d/u            |                             Scroll w dół / górę |
| :bnext / :bprev       |       Kolejny / poprzedni otwarty bufor (pliki) |
| :Telescope find_files |            Wyszukiwanie plików (bardzo szybkie) |
| :Telescope live_grep  |           Wyszukiwanie tekstu w całym projekcie |
| :Lazy / :Mason        |                  Plugin manager / lsp installer |
| gd / gr               |       Idź do definicji / referencji (jeśli LSP) |
| K                     |             Pokazanie dokumentacji pod kursorem |
| :noh                  |          Wyczyszczenie podświetleń wyszukiwania |
| :!npm run start       |     Uruchomienie polecenia z terminala w Neovim |

🔧 W LazyVim te funkcje są często pod <leader> + litera. Np. <leader>ff = Telescope find files.

## Nx CLI (uruchamiane z npx nx lub pnpm nx)

| Skrót                            |                                            Opis |
| :------------------------------- | ----------------------------------------------: |
| nx g @nx/angular:app <name>      |                   Tworzy nową aplikację Angular |
| nx g @nx/angular:lib <name>      |                       Tworzy bibliotekę Angular |
| nx serve <app>                   |                        Uruchamia daną aplikację |
| nx build <app>                   |                                Buduje aplikację |
| nx lint <app>                    |                                     Lintuje kod |
| nx test <app>                    |             Testuje aplikację (np. Vitest/Jest) |
| nx e2e <app>                     |                             Testy E2E z Cypress |
| nx graph                         |                    Interaktywny graf zależności |
| nx affected:apps                 | Pokazuje, które aplikacje są dotknięte zmianami |
| nx format:write                  |                 Formatuje kod w całym workspace |
| nx run-many --target=serve --all |      Uruchamia wszystkie aplikacje jednocześnie |

## Angular CLI (jeśli używasz poza Nx)

| Skrót                                     |                                       Opis |
| :---------------------------------------- | -----------------------------------------: |
| ng new <name>                             |                Tworzy nowy projekt Angular |
| ng generate component <name>              |                           Tworzy komponent |
| ng generate service <name>                |                              Tworzy serwis |
| ng serve                                  |                       Uruchamia serwer dev |
| ng build                                  |                             Buduje projekt |
| ng test                                   |                            Uruchamia testy |
| ng lint                                   |                                 Lintowanie |
| ng add @angular/material                  |                    Dodaje Angular Material |
| ng g c <name> --standalone --inline-style | Tworzy standalone komponent z inline style |
