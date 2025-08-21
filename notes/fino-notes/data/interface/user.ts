// 🧍‍♂️ Model użytkownika (User)
// Minimalny, skalowalny, prosty do autoryzacji i zarządzania feature flagami.

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // nie zapisuj hasła plaintext!
  createdAt: Date;
  updatedAt: Date;

  // Dodajemy
  plan: SubscriptionPlan;     // np. 'free', 'pro'
  planExpiresAt?: Date;       // jeśli płatne
  isEmailVerified: boolean;
}

export type SubscriptionPlan = 'free' | 'pro' | 'couples';

