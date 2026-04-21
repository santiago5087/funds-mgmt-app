import { Routes } from '@angular/router';
import { 
  FundsPageComponent,
  HomePageComponent,
  SubscriptionsPageComponent
} from '@presentation/pages';
import {  } from '@presentation/pages/subscriptions/subscriptions-page.component';

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
    path: '**',
    redirectTo: '',
  },
];
