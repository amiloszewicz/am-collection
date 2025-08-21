# TODO – MVP Roadmap for Fino

## Week 1

### Day 1
- [ ] Create Nx workspace: `npx create-nx-workspace fino`
- [ ] Add Tailwind CSS support
- [ ] Create 3 routes: `/home`, `/transactions`, `/summary`
- [ ] Generate layout component with bottom nav + FAB

### Day 2
- [ ] Design and create `TransactionFormComponent`
- [ ] Add inputs: amount, description, date, category
- [ ] Add dummy submit handler

### Day 3
- [ ] Create `TransactionListComponent`
- [ ] Display mock transactions (grouped by day)
- [ ] Format amounts and dates

### Day 4
- [ ] Add `TransactionService`
- [ ] Save to LocalStorage or SignalStore
- [ ] Connect form → service → list

### Day 5
- [ ] Create SummaryPage
- [ ] Calculate totals for: income, expenses, saved
- [ ] Add month selector

### Weekend
- [ ] Add SquirrelComponent
- [ ] Add first animation (FAB / toaster)
- [ ] Test on mobile and polish spacing

