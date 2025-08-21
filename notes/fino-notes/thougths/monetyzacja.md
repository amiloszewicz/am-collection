# pomysły

## 🎯 Co kontroluje SubscriptionPlan?

W UI i kodzie możesz uzależnić:

| Feature                     | `free` | `pro` | `team` |
| --------------------------- | ------ | ----- | ------ |
| Dodawanie transakcji        | ✅      | ✅     | ✅      |
| Backup do chmury            | ❌      | ✅     | ✅      |
| Sync między urządzeniami    | ❌      | ✅     | ✅      |
| Zaawansowane cele           | ❌      | ✅     | ✅      |
| Tryb Matrix / inne style    | ❌      | ✅     | ✅      |
| Udostępnianie budżetu komuś | ❌      | ❌     | ✅      |
| Dostęp do API / eksport     | ❌      | ✅     | ✅      |
| Liczba miesięcy widocznych  | 3      | ∞     | ∞      |

## Potencjalna monetyzacja

| Model                             | Opis                                                                    | UX-friendly?       | Potencjał €€ | Uwagi                            |
| --------------------------------- | ----------------------------------------------------------------------- | ------------------ | ------------ | -------------------------------- |
| **Freemium**                      | 90% funkcji za darmo, 10% premium                                       | ✅ Tak              | ⭐⭐⭐⭐         | Najlepszy balans                 |
| **Płatność jednorazowa**          | np. 29 zł za odblokowanie pełni funkcji                                 | ✅                  | ⭐⭐           | Może odstraszyć przy 1. użyciu   |
| **Subskrypcja (np. 6 zł/m)**      | Stały rozwój aplikacji i chmurka, backup, importy, multi-device         | ⚠️ trzeba uzasadnić | ⭐⭐⭐⭐⭐        | Dodaj wartość emocjonalną        |
| **Pro user = odmienny theme**     | np. „Matrix” theme, Night mode premium                                  | ✅ Tak              | ⭐⭐           | Dodatkowy styl, prestiż          |
| **Buy Me a Coffee / napiwki**     | przyjemny komunikat: „Pomogłem Ci dziś? Postaw mi kawę ☕”               | ❤️ Tak              | ⭐            | Dobrze jako dodatek              |
| **Płatny backup + multi-device**  | tylko użytkownicy pro mogą zsynchronizować między urządzeniami          | Tak                | ⭐⭐⭐          | Motywacja: bezpieczeństwo danych |
| **Szkolenie Angular (dla devów)** | osobna ścieżka – Twoje Angular produkty z maskotką aplikacji jako brand | Nie dotyczy        | ⭐⭐⭐⭐         | Idealne po zbudowaniu marki      |

## 🧩 4. Auth Guard — UX-first

Zrób tak:

Użytkownik może wszystko offline (zapis lokalny)

Po 5–10 dniach użycia: toast → „Chcesz mieć backup? Warto mieć plan B ☁️”

Premium = canActivate: [PremiumUserGuard] np. tylko dla budżetów Plan vs Rzecz. lub synchronizacji

UI: złoty avatar w rogu = konto PRO (Matrix theme, emoji maskotki, custom CTA)

## 💫 5. Animacje + CTA + fajerwerki

Toaster:

Pojawia się 3–5s.

Ma pasek ładowania (w-0 → w-full animacja)

Jeśli kliknięcie = akcja zakończona pozytywnie → ✨fajerwerki wokół tostera (np. confetti() lub drop-shadow + scale)

CTA w pustych stanach:
💸 „Nie masz jeszcze żadnych wydatków”  
→ [Dodaj pierwszy wydatek] (duży przycisk z animacją `pulse`)

Albo:

🐙 „Pusto tu. Zacznij budować swoją poduszkę finansową.”  
→ [Stwórz kategorię celu]

## ✍️ Podsumowanie

Nazwa pola Co oznacza Typ
plan typ konta 'free' | 'pro' | 'team'
planExpiresAt kiedy kończy się subskrypcja Date | null
Payment[] historia zakupów osobna tabela/model

## 👑 Fino → przyszłościowy brand. Można użyć w nazwach

Fino Premium

Fino Sync

Fino for Couples

## 🐿️ 2. Logo/maskotka: z Phantom-style, nie emoji-style

🔥 Cel: dynamiczna sylwetka w stylu nowoczesnego designu (jak Phantom)

Zamieniamy:

❌ Uroczą wiewiórkę w stylu bajki

✅ Abstrakcyjne logo, inspirowane wiewiórką (ogon, kształt, ruch)

Przykład inspiracji:

Styl Phantom, Linear, Vercel, Raycast, Fathom Analytics

Maskotka? Może tylko forma: ogon jako litera F, albo animowany cień

Kolory: ciemny granat + neonowy akcent (np. fiolet, zieleń, bursztyn)

➡️ Chcesz, żebym spróbował wygenerować taki styl logo (czarna wiewiórka jak z Phantom)?
