import { Routes } from '@angular/router';
import { 
  FundsPageComponent,
  HomePageComponent,
  SubscriptionsPageComponent,
  TransactionsPageComponent
} from '@presentation/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'funds',
    component: FundsPageComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsPageComponent,
  },
  {
    path: 'transactions',
    component: TransactionsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
