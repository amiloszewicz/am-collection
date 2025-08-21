apps/
│
├── mobile-app/            ← główna aplikacja (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/      ← AuthService, StorageService, Logger
│   │   │   ├── shared/    ← Button, Card, FormField, etc.
│   │   │   ├── features/
│   │   │   │   ├── transactions/
│   │   │   │   │   ├── transactions-page.component.ts
│   │   │   │   │   ├── transaction-form.component.ts
│   │   │   │   │   ├── transaction-list.component.ts
│   │   │   │   ├── summary/
│   │   │   │   │   ├── summary-page.component.ts
│   │   │   │   ├── onboarding/
│   │   │   │   │   ├── intro-page.component.ts
│   │   │   │   │   ├── set-start-balance.component.ts
│   │   │   │   ├── budget/
│   │   │   │   │   ├── budget-planner.component.ts
│   │   │   │   │   ├── category-table.component.ts
│   │   │   ├── app.routes.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts

libs/
├── models/                ← interfejsy: Transaction, Budget, Category
├── utils/                 ← obliczenia salda, formatowanie kwot
├── state/                 ← signals/store (Angular signals + RxJS combo)
├── theme/                 ← Tailwind tokens, kolory, spacing

apps/
├── landing-page/          ← osobna aplikacja w Nx (Next.js lub Angular SSR)

---

apps/
  fino-app/
    src/app/
      app.routes.ts
      features/
        transactions/
        summary/
        home/
      shared/
      core/
libs/
  ui/
  models/
  utils/
  state/
