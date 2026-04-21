import { Routes } from '@angular/router';
import { HomePageComponent } from '@presentation/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
{
    path: '**',
    redirectTo: '',
  },
];
