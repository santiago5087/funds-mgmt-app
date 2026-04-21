import { Routes } from '@angular/router';
import { FundsPageComponent, HomePageComponent } from '@presentation/pages';

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
    path: '**',
    redirectTo: '',
  },
];
