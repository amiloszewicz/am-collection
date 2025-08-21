export interface Payment {
  id: string;
  userId: string;
  amount: number; // brutto
  currency: string; // PLN, EUR, USD
  method: 'stripe' | 'paypal' | 'blik';
  createdAt: Date;
  description?: string;
  status: 'paid' | 'failed' | 'refunded';
  planPurchased: SubscriptionPlan;
  validUntil?: Date;
}


canActivate(route: ActivatedRouteSnapshot): boolean {
  const plan = this.auth.user.plan;
  if (plan === 'free') {
    this.router.navigate(['/pricing']);
    return false;
  }
  return true;
}
