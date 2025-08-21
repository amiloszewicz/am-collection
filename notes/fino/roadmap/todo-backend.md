# TODO – Backend (Minimal API + EF Core)

## 🗓️ Tydzień 2–3

### 🧱 Day 1 – Inicjalizacja projektu

- [ ] `dotnet new web -n Fino.Api`
- [ ] Usuń `Program.cs` i stwórz nowy czysty `Program.cs`
- [ ] Dodaj Swagger:

```cs
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

🗃️ Day 2 – Entity Framework + Baza

- [ ] Dodaj NuGety:

```dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design```

```public class Transaction {
    public int Id { get; set; }
    public decimal Amount { get; set; }
    public string? Description { get; set; }
    public DateTime Date { get; set; }
    public string Category { get; set; } = string.Empty;
}
```

 Stwórz FinoDbContext i dodaj do DI:

builder.Services.AddDbContext<FinoDbContext>(opt =>
    opt.UseSqlite("Data Source=fino.db"));

 Wykonaj migracje:

dotnet ef migrations add Init
dotnet ef database update

🔗 Day 3 – Tworzenie endpointów (Minimal API)
app.MapGet("/api/transactions", async (FinoDbContext db) =>
    await db.Transactions.ToListAsync());

app.MapPost("/api/transactions", async (Transaction t, FinoDbContext db) =>
{
    db.Transactions.Add(t);
    await db.SaveChangesAsync();
    return Results.Created($"/api/transactions/{t.Id}", t);
});

app.MapDelete("/api/transactions/{id}", async (int id, FinoDbContext db) =>
{
    var item = await db.Transactions.FindAsync(id);
    if (item is null) return Results.NotFound();
    db.Transactions.Remove(item);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

 Przetestuj endpointy w Swagger

🌐 Day 4 – Połączenie z frontendem Angular

 Stwórz proxy.conf.json:

{
  "/api": {
    "target": "<http://localhost:5184>",
    "secure": false
  }
}

 W Angularze angular.json → serve.options.proxyConfig

 W Angularze stwórz TransactionApiService

getTransactions()

addTransaction(transaction)

deleteTransaction(id)

🧪 Day 5 – Połącz frontend z API

 TransactionFormComponent → wysyła POST

 TransactionListComponent → używa API do pobrania

 Po usunięciu: aktualizuj listę

🧠 Na przyszłość:

Dodaj User i JWT auth (Minimal API też to obsługuje)

Zapisywanie userId w transakcji

Wersja premium → auth guard + plan per user

# TODO – Backend Setup for Fino

✅ Założenia stacku backendowego:

ASP.NET Core 8 (Minimal API lub klasyczny)

PostgreSQL (lub SQLite na start)

Entity Framework Core

API pod /api/transactions, /api/categories, itd.

Połączenie z Angularem przez proxy.conf.json lub Nx API lib

## 🗓️ Tydzień 2–3 (backend + integracja z frontendem)

### Day 1 – Backend Init

- [ ] Utwórz folder `apps/fino-api/`
- [ ] Stwórz projekt .NET API: `dotnet new webapi -n Fino.Api`
- [ ] Skonfiguruj Swagger + wyłącz HTTPS na localhost
- [ ] Skonfiguruj `launchSettings.json` na port `5184`

### Day 2 – Baza danych

- [ ] Dodaj Entity Framework: `Microsoft.EntityFrameworkCore` + `Npgsql` (lub SQLite)
- [ ] Stwórz klasę `Transaction` z polami: id, amount, date, category, description
- [ ] Stwórz klasę `Category`: id, name, color
- [ ] Skonfiguruj DbContext
- [ ] Migracja: `dotnet ef migrations add Init`
- [ ] Stwórz bazę danych: `dotnet ef database update`

### Day 3 – API routes

- [ ] GET `/api/transactions` – zwraca listę transakcji
- [ ] POST `/api/transactions` – dodaje nową transakcję
- [ ] DELETE `/api/transactions/{id}` – usuwa transakcję
- [ ] GET `/api/categories` – lista kategorii
- [ ] POST `/api/categories` – dodaje kategorię
- [ ] Testuj w Swagger

### Day 4 – Połączenie Angular + API

- [ ] Stwórz `proxy.conf.json`:

```json
{
  "/api": {
    "target": "http://localhost:5184",
    "secure": false
  }
}```
 W angular.json → "serve" → "options.proxyConfig": "proxy.conf.json"

 Stwórz TransactionApiService w Angularze

 Pobierz dane z /api/transactions do listy

Day 5 – Synchronizacja danych

 Po dodaniu transakcji w Angularze → wyślij POST do backendu

 Pobieraj dane po ngOnInit

 Dodaj categoryId jako relację

🔐 Day 6–7 – Użytkownicy i Auth (opcjonalne)

 Stwórz model User: id, email, passwordHash, createdAt

 Endpointy: /api/register, /api/login

 Dodaj JWT (JSON Web Token) autoryzację

 Angular: trzymaj token w localStorage, użyj w interceptorze

🌐 API struktura końcowa
| Endpoint                 | Metoda | Opis             |
| ------------------------ | ------ | ---------------- |
| `/api/transactions`      | GET    | lista transakcji |
| `/api/transactions`      | POST   | dodaj transakcję |
| `/api/transactions/{id}` | DELETE | usuń             |
| `/api/categories`        | GET    | lista kategorii  |
| `/api/categories`        | POST   | dodaj kategorię  |
| `/api/user/login`        | POST   | logowanie        |
| `/api/user/register`     | POST   | rejestracja      |

🧠 Na przyszłość

 Zapisywanie danych offline i synchronizacja przy logowaniu

 Rozdzielenie konta darmowego i premium

 API do podpowiedzi AI

 Admin dashboard (do siebie)

Jeśli chcesz, mogę Ci wygenerować:

pliki startowe backendu (.NET 8)

kod kontrolera API dla transakcji

kod TransactionApiService w Angularze (z proxy)

baza danych SQLite na start (z EF Core)

Czy ruszamy z tworzeniem backendu i .NET projektu?
